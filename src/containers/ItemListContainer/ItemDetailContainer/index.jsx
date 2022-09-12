import React from 'react'
import { useEffect} from 'react'
import { useState } from 'react'
import ItemDetail from '../../../components/NavBar/ItemDetail'
import{useParams}from "react-router-dom"
const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState ({})

    const {productId} = useParams()
    console.log(productId)


    useEffect(()=>{

        const obtenerProductos = async ()=>{
            try {
                const respuesta = await fetch(`https://fakestoreapi.com/products/${productId}`)
                const producto = await respuesta.json()
                setProductDetail(producto)
            } catch (error) {
                console.log(error)
            }
            
        }
        obtenerProductos()
    }, [productId])
    console.log(productDetail)
    return <ItemDetail product={productDetail}/>;
}

export default ItemDetailContainer