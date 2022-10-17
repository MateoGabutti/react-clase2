import React from 'react'
import CartWidget from '../CartWidget'
import "./styles.css"
import {Link} from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="App">
      <h3 className='h3Nav'>FIKA</h3>
      <li>
        <Link to="/" className="a-appJs">Inicio</Link>
      </li>
      <li>
        <Link to="/category/men's clothing" className="a-appJs">Men's clothing</Link>
      </li>
      <li>
        <Link to="/category/women's clothing" className="a-appJs">Women's clothing</Link>
      </li>
      <li>
        <Link to="/category/electronics" className="a-appJs">Electronics</Link>
      </li>
      <li>
        <Link to="/category/jewelery" className="a-appJs">Jewelery</Link>
      </li>
      <CartWidget/>
      
    </nav>
  )
}
export default NavBar