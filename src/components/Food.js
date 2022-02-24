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

            <form onSubmit={(evt) => {handleSubmit(evt)}}>
                <label>Nombre</label>
                    <input 
                    name = "name"
                    value = {food.name}
                    onChange={evt=> {handleChange(evt)}}
                    />
                <label>Precio</label>
                    <input 
                    precio = "price"
                    value = {food.price}
                    onChange={evt=> {handleChange(evt)}}
                    />
                <button>Crear alimento</button>

                <p>{error}</p>

            </form>
        
            <b><h2>Listado de comidas</h2></b>

            {
				list.length === 0 ? 
					<p>No hay publicaciones</p> 
				:
					list.map((elt, index) => {
						return (
							<div className="mb-4 bg-white text-black" key={index}>
								<h3>Food: {elt.food}</h3>
								<h3>Price: {elt.price}</h3>
                        )
                    })

            }

            
        </>
  )
}
