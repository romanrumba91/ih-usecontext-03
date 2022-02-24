// ./src/context/Dogs/DogsReducer.js

const reducer = (globalState, action) => {

	switch(action.type){
		case "CHANGE_NAME":
			return {
				...globalState,
				hola: action.payload	
			}
		
		case "GET_DOG":
			return {
				...globalState,
				currentDogPhoto: action.payload
			}

		default:
			return globalState

	}


}


export default reducer