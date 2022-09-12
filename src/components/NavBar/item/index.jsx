import React from 'react'
import "./styles.css"
import {useNavigate} from "react-router-dom"
const Item = ({product}) => {
  const navigate = useNavigate()
  const handleNavigate = (()=>{
    navigate(`/detail/${product.id}`)
  })
  return (
    <>
    <div onClick={handleNavigate}>
      <img className='images' src={product.image} alt="" />
      <h1 className='images'>{product.title}</h1>
    </div>
    </>
    
  )
}

export default Item