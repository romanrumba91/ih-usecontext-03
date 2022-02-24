// ./src/components/Menu

import { useContext } from 'react'
import DogsContext from '../context/Dogs/DogsContext'

export default function Menu() {

	const ctxDog = useContext(DogsContext)

	const {
		currentDogPhoto,
		getDog
	} = ctxDog

  return (
	<div>
		Menú
		<h1>Perrito</h1>
		<button onClick={() => { getDog() } }>
			Ver perro
		</button>

		<img src={currentDogPhoto} />

	</div>
  )
}