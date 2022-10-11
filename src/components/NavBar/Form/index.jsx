import React from 'react'

const Form = ({habilitar,nombre, email, telefono}) => {

    const enviarForm = (e) => {
        e.preventDefault()
        nombre(e.target.nombre.value)
        email(e.target.email.value)
        telefono(e.target.cel.value)
        habilitar(false)
        

    }
    return (
        <div>
            <form onSubmit={enviarForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" >Nombre</label>
                    <input type="text"  id="nombre" name='nombre' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" >Email</label>
                    <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cel">Telefono</label>
                    <input type="number"  id="cel" name='cel' required/>
                </div>
                <button type='submit'>Enviar datos</button>
            </form>
        </div>
    )
}


export default Form