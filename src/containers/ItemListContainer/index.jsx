import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import ItemList from '../../components/NavBar/ItemList'
//import {products} from "../../data/products"
import "./styles.css"
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
  console.log(db)
  
  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams();
  console.log(categoryId)

  useEffect(()=>{
  (async ()=> {
        try {
            const q = categoryId ?
              query(collection(db, "products"), where("category", "==", categoryId)):
              query(collection(db, "products"));

            const querySnapshot = await getDocs(q);
            const productosFirebase = []
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              //console.log(doc.id, " => ", doc.data());
              productosFirebase.push({id : doc.id , ...doc.data()})
            });
            console.log(productosFirebase)

            setProductos(productosFirebase)

            /*const respuesta = await fetch("https://fakestoreapi.com/products/category/" + categoryId);
            const productos = await respuesta.json();
                setProductos(productos);*/
          
        } catch (error) {
          console.log(error);
        }

      })()

  }, [categoryId])


  //const agregarAlCarrito = (cantidad)=>{
    
  //}
  return (
    <div className='titulo'>
      <h1>{greeting}</h1>
      <ItemList products = {productos}/>
    </div>
  )
}

export default ItemListContainer