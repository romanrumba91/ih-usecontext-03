// ./src/context/Dogs/DogsState.js

// 1. IMPORTACIONES
import { useReducer } from 'react'
import CatsContext from './CatsContext'
import CatsReduce from './CatsReduce'



// 2. FUNCIÓN / COMPONENTE DE ESTADO GLOBAL 
const CatsState = (props) => {

	// A. ESTADO INICIAL
	const initialState = {
		hello: "mundo",
		cats: []
	}

	// B. GESTIÓN DE LAS FUNCIONES QUE CAMBIAN EL ESTADO INICIAL (REDUCERS)
	const [globalState, dispatch] = useReducer(CatsReduce, initialState)

	// C. FUNCIONES API / SIDE EFFECT FUNCTIONS

	const changeName2 = () => {

		dispatch({ // EL OBJETO DENTRO DE DISPATCH SE LLAMA ACTION
			type: "CHANGE_NAME",
			payload: "ironhack roman"
		})

	}


	// D. RETORNO
	return (
		<CatsContext.Provider
			value={{
				hello: globalState.hello,
                cats: globalState.cats,
				changeName2
			}}
		>

			{props.children}

		</CatsContext.Provider>
	)

}
 


// 3. EXPORTACIÓN

export default CatsState