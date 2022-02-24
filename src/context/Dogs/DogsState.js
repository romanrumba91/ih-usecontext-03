// ./src/context/Dogs/DogsState.js

// 1. IMPORTACIONES
import { useReducer } from 'react'
import DogsContext from './DogsContext'
import DogsReducer from './DogsReducer'

import axios from 'axios'


// 2. FUNCIÓN / COMPONENTE DE ESTADO GLOBAL 
const DogsState = (props) => {

	// A. ESTADO INICIAL
	const initialState = {
		hola: "mundo",
		dogs: [],
		currentDogPhoto: ""
	}

	// B. GESTIÓN DE LAS FUNCIONES QUE CAMBIAN EL ESTADO INICIAL (REDUCERS)
	const [globalState, dispatch] = useReducer(DogsReducer, initialState)

	// C. FUNCIONES API / SIDE EFFECT FUNCTIONS

	const changeName = () => {

		dispatch({ // EL OBJETO DENTRO DE DISPATCH SE LLAMA ACTION
			type: "CHANGE_NAME",
			payload: "ironhack"
		})
	}

	const getDog = async() => {

		const res = await axios.get("https://dog.ceo/api/breeds/image/random")

		const picDog = res.data.message

		dispatch({
			type: "GET_DOG",
			payload: picDog
		})


	}

	// D. RETORNO
	return (
		<DogsContext.Provider
			value={{
				hola: globalState.hola,
				dogs: globalState.dogs,
				currentDogPhoto:globalState.currentDogPhoto,
				changeName,
				getDog
			}}
		>

			{props.children}

		</DogsContext.Provider>
	)

}
 


// 3. EXPORTACIÓN

export default DogsState