// ./src/components/Main

import { useContext } from 'react'
import CatsContext from '../context/Cats/CatsContext'
import DogsContext from '../context/Dogs/DogsContext'

export default function Main (){

	const ctxDog = useContext(DogsContext)
	const ctxCat = useContext(CatsContext)

	return (
		<>
			Área principal.
			<p>{ctxDog.hola}</p>
			<button onClick={ () => { ctxDog.changeName() } }>Cambiar nombre</button>
			<p>{ctxCat.hello}</p>
			<button onClick={ () => { ctxCat.changeName2() } }>Cambiar nombre roman</button>
		</>
	)
}