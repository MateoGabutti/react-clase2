import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import ItemList from '../../components/NavBar/ItemList'
//import {products} from "../../data/products"
import "./styles.css"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
  
  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams();
  console.log(categoryId)

  useEffect(()=>{
  (async ()=> {
        try {
          if(categoryId){
            const respuesta = await fetch("https://fakestoreapi.com/products/category/" + categoryId);
            const productos = await respuesta.json();
                setProductos(productos);
          }else{
            const respuesta = await fetch("https://fakestoreapi.com/products");
            const productos = await respuesta.json()
            setProductos(productos);
          }
          
        } catch (error) {
          console.log(error);
        }

      })()

  }, [categoryId])


  //const agregarAlCarrito = (cantidad)=>{
    
  //}
  return (
    <div className='titulo'>
      <h1>{greeting}</h1>
      <ItemList products = {productos}/>
    </div>
  )
}

export default ItemListContainer