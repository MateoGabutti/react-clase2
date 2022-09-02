import React,{ useState,  } from 'react'
import "./styles.css"
const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial)
  const handleAdd = ()=>{
    if(count < stock){
      setCount (count + 1)
    }
    else(alert("No hay stock"))
  }

  const handleDecrement = ()=>{
    if(count > initial){
      setCount (count - 1)
    }
  }


  
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>restar</button>
        <button onClick={handleAdd}>Sumar</button>
        <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount