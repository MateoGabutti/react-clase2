import React from 'react'
import ItemCount from '../ItemCount';
import "./styles.css"

const ItemDetail = ({product}) => {
  return (
    <div>
        <img className="detail-img"src={product.image} alt=""/>
        <div className="detail-img">
          <h1>{product.title}</h1>
          <ItemCount/>
        </div>
    </div>
  )
}

export default ItemDetail