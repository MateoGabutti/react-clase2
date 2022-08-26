import React from 'react'
import CartWidget from '../../CartWidget'
import "./styles.css"
const NavBar = (jugadores) => {
  console.log(jugadores)
  return (
    <nav className="App">
      <h3 className='h3Nav'>FIKA</h3>
      <a href="/#" className="a-appJs">Inicio</a>
      <a href="/#" className="a-appJs">Contacto</a>
      <a href="/#" className="a-appJs">Remeras</a>
      <CartWidget/>
    </nav>
  )
}
export default NavBar