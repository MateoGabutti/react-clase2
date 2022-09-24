import React from 'react'
import { useEffect} from 'react'
import { useState } from 'react'
import ItemDetail from '../../../components/NavBar/ItemDetail'
import{useParams}from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../../firebase/config"
const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState ({})

    const {productId} = useParams()
    console.log(productId)


    useEffect(()=>{

        const obtenerProductos = async ()=>{
            try {

                const docRef = doc(db, "products", productId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setProductDetail({id: docSnap.id, ...docSnap.data()})
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
            } catch (error) {
                console.log(error)
            }
            
        }
        obtenerProductos()
    }, [productId])
    console.log(productDetail)
    return <ItemDetail product={productDetail}/>;
}

export default ItemDetailContainer;