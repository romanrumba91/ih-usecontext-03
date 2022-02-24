import React, { useState } from 'react'
import { nanoid } from "nanoid"

export default function Food() {

    const[food, setFood] = useState({

        name: "",
        price: 0 
    })

    const[list,setList] = useState('')
    const [error, setError] = useState("")
    const[id,setId]= useState('')

    const handleChange = (event) => {
        setFood({
            ...food,
            id: nanoid(),
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!food.name || !food.price) {

            setError("Campo vacio")
            return
        }
        setList([
            ...list,
            food
        ])
        setFood({
            name: "",
            price: 0
        })
        setError()

    }

    return (
        <>
        <h1>Food Form</h1>
            <form onSubmit={ (event) => { handleSubmit(event) }}>
              <label>Nombre</label>
              <input 
                  name="name"
                  onChange={(event) => handleChange(event)}
              />	  
              <label>Precio</label>
              <input 
                  name="price"
                  onChange={(event) => handleChange(event)}
              />	
  
              <button type="submit">Crear alimento</button>  
          </form>
  
          <h1>List of Foods</h1>
          {
                  list.length === 0 ? 
                      <p>No hay comidas</p> 
                  :
                      list.map((element, index) => {
                          return (
                              <div key={index}>
                                  <p>Name: {element.name}</p>
                                  <p>Price: {element.price}</p>
                              </div>
                          )
                      })
              }
        </>
      
  
    )
}
