import React, { useContext } from 'react'
import "./styles.css"
import {HiShoppingCart} from "react-icons/hi" 
import {Shop} from "../../context/ShopProvider"

const CardWidget = () => {
  const { cart } = useContext(Shop);
  const cantidades = cart.map((producto) => producto.cantidad)
  const cantidadTotal = cantidades.reduce((acc, cantidad ) => acc + cantidad, 0  )
  console.log(cantidadTotal)
  return (
    <div className='logoCarrito'>
        <HiShoppingCart/>
        <span>{cart.length && cantidadTotal}</span> 
    </div>
    
  )
}

export default CardWidget