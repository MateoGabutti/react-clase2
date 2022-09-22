import React, { useState } from 'react'
import { createContext } from "react"


export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [cart, setCart]= useState([])


    const addItem = (item)=>{

      const Repe= isInCart(item.id)
      console.log(Repe)
      if(Repe){
        const cartModified = cart.map(product =>{
          if(product.id === item.id){
            product.cantidad += item.cantidad
            return product
          }
          return product
        })
        setCart(cartModified)
      }else{
        const cartModificado = [...cart, item]
        setCart(cartModificado)
      }
      
    }
    const isInCart = (id)=>{
      return cart.some(product => product.id === id)
    }
    const clearCart = () => {
        const cartModificado = []
        setCart(cartModificado)     
      
    }
    const removeItem = (item) => {
      const coincidencia = isInCart(item.id)
        if(coincidencia){
            const itemAEliminar = cart.find(product => product.id === item.id)
            const index = cart.indexOf(itemAEliminar)
            cart.splice(index,1)
            console.log(cart)        
        }
        else{
            console.log('Lo siento. No se ha encontrado el item en el carrito')
        }
    }


  return (
    <Shop.Provider value={{cart, addItem,clearCart, removeItem}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider


