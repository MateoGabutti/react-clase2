import React from 'react'
import { useState } from 'react';
import ItemCount from '../ItemCount';
import {useNavigate} from "react-router-dom"
import "./styles.css"
import { useContext } from 'react';
import {Shop} from "../../../context/ShopProvider"

const ItemDetail = ({product}) => {
  const [cant, setCant] = useState(0)
  const navigate = useNavigate()
  const {addItem,clearCart,removeItem}= useContext(Shop)
  const addCart = (cantidad)=>{
    setCant(cantidad)
  }
  const handleFinish = ()=>{
    const producto = {...product, cantidad: cant}
    addItem(producto)
    navigate("/cart")
  }
  const limpiarCarrito = () => {
    clearCart()
}
  const eliminarItem = () =>{
      removeItem(product)
}
  console.log(cant)
  return (
    <div>
        <img className="detail-img"src={product.image} alt=""/>
        <div className="detail-img">
          <h1>{product.title}</h1>
          {cant ? (<button onClick={handleFinish}>Finalizar Compra</button>) : (<ItemCount stock={10} initial={1} onAdd={addCart}/>)  }
          <button onClick={limpiarCarrito}>Limpiar Carrito</button>
          <button onClick={eliminarItem}>eliminar Item</button>
        </div>
    </div>
  )
}

export default ItemDetail