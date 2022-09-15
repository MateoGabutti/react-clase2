import React from 'react'
import Item from '../item'
//import Modal from '../Modal'

const ItemList = ({products}) => {
  return (
    <div>
        {products.length ? products.map(product => {
            return <Item key={product.id} product={product}/>
        }): <h2>Cargando...</h2>}
        
    </div>
  )
}

export default ItemList



