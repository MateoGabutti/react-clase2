import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import "./styles.css"
import { useContext } from 'react';
import {Shop} from "../../context/ShopProvider"
import ItemCount from '../ItemCount/index'


const ItemDetail = ({product}) => {
  const [cant, setCant] = useState(0)
  const navigate = useNavigate()
  const {addItem}= useContext(Shop)
  const addCart = (cantidad)=>{
    setCant(cantidad)
  }
  const handleFinish = ()=>{
    const producto = {...product, cantidad: cant}
    addItem(producto)
    navigate("/cart")
  }

  return (
    <div>
        <img className="detail-img"src={product.image} alt=""/>
        <div className="detail-img">
          <h1>{product.title}</h1>
          <h1>${product.price}</h1>
          {cant ? (<button onClick={handleFinish}>Finalizar Compra</button>) : (<ItemCount stock={10} initial={1} onAdd={addCart}/>)  }
        </div>
    </div>
  )
}

export default ItemDetail