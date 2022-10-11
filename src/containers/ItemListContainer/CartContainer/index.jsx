import React from 'react'
import { useContext, useState } from 'react'
import { Shop } from '../../../context/ShopProvider'
import ordenGenerada from '../../../services/generarOrden';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import Form from '../../../components/NavBar/Form';
import "./styles.css" 


const Cart = () => {
    const { cart, removeItem, clearCart, total } = useContext(Shop);

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(true)
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();

    const renderImage = (image) => {
        return (
            <img
                src={image.value}
                alt="cart-product"
                style={{ height: "120px" }}
            ></img>
        );
    };

    const renderRemoveButton = (item) => {
        const product = item.value;
        return (
            <Button
                onClick={() => removeItem(product)}
                variant="contained"
                color="error"
            >
                Remove
            </Button>
        );
    };

    const handleBuy = async () => {
        setLoading(true)
        if(cart.length === 0){
            return alert("No se puede")
        }else{
            const importeTotal = total();
        const orden = ordenGenerada(nombre, email, telefono, cart, importeTotal);
        console.log(orden)

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "orders"), orden);

        //Actualizamos el stock del producto
        cart.forEach(async (productoEnCarrito) => {
            //Primero accedemos a la referencia del producto
            const productRef = doc(db, "products", productoEnCarrito.id);
            //Llamamos al snapshot, llamando a firebase
            const productSnap = await getDoc(productRef);
            //En snapshot.data() nos devuelve la información del documento a actualizar
            await updateDoc(productRef, {
                stock: productSnap.data().stock - productoEnCarrito.cantidad,
            });
        });
        alert(
            `Gracias por su compra! Se generó la orden generada con ID: ${docRef.id}`
        );
        }
        setLoading(false);
        setVisible(true);      
    };

    const columns = [
        {
            field: "image",
            headerName: "Image",
            width: 250,
            renderCell: renderImage,
        },
        { field: "title", headerName: "Product", width: 450 },
        { field: "cantidad", headerName: "Cantidad", width: 90 },
        {field: "price", headerName:"Price", width:90},
        {
            field: "remove",
            headerName: "Remove",
            renderCell: renderRemoveButton,
            width: 90,
        },
    ];

    //Vamos a asignar un array con cada fila de la tabla, utilizando el cart
    const filas = [];
    cart.forEach((item) => {
        filas.push({
            id: item.id,
            image: item.image,
            title: item.title,
            cantidad: item.cantidad,
            price: item.price,
            remove: item,
        });
    });

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={filas}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                rowHeight={150}
            />
            <div className='PrecioFinal'>
                <span>Precio total: ${Math.round(total())}</span>
            </div>
            <Button onClick={clearCart} color="error" variant="outlined">
                Clear cart
            </Button>
            {
                visible ? 
                <Form habilitar={setVisible} nombre={setNombre} email={setEmail} telefono={setTelefono}/>
                :
                <Button onClick={handleBuy}>Confirmar compra</Button>
            }

        </div>
    );
};

export default Cart
