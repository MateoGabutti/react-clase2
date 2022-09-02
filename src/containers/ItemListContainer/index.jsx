import React from 'react'
import { useEffect } from 'react'
import ItemCount from '../../components/NavBar/ItemCount'
import {productos} from "../../data/productos"
import "./styles.css"

const ItemListContainer = ({greeting}) => {
  
  useEffect(()=>{
    (async ()=>{
      const traerProductos = new Promise((res, rej)=>{
        setTimeout(()=>{
          res(productos)
        },3000)
      })
  
  
      try {
        const response = await traerProductos
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    })()
  })
  

  const agregarAlCarrito = (cantidad)=>{
    
  }
  return (
    <div className='titulo'>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={6} onAdd={agregarAlCarrito}/> 
    </div>
  )
}

export default ItemListContainer