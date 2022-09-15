import React,{ useState, useEffect } from 'react'
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
  const addCart = ()=>{
    onAdd(count);
    setCount(initial);
  }

  useEffect(()=> {
    
    console.log("Se montó el ItemCount");
}, []);


useEffect(()=> {
    console.log("Se actualiza el estado!")
}, [count]);
  
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>restar</button>
        <button onClick={handleAdd}>Sumar</button>
        <button onClick={addCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount