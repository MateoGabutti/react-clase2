import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemCount from '../../components/NavBar/ItemCount'
import ItemList from '../../components/NavBar/ItemList'
import {products} from "../../data/products"
import "./styles.css"

const ItemListContainer = ({greeting}) => {
  
  const [productos, setProductos] = useState([])

  useEffect(()=>{
  (async ()=> {
    const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(()=> {
          accept(products)
        }, 3000);
      })
        try {
          const productos = await obtenerProductos;
          setProductos(productos);
        } catch (error) {
          console.log(error);
        }

      })()

  }, [])
  console.log(productos)


  const agregarAlCarrito = (cantidad)=>{
    
  }
  return (
    <div className='titulo'>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={6} onAdd={agregarAlCarrito}/> 
      <ItemList products = {productos}/>
    </div>
  )
}

export default ItemListContainer