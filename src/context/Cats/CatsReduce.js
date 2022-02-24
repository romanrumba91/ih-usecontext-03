// ./src/context/Dogs/DogsReducer.js

const reducer = (globalState, action) => {

	switch(action.type){
		case "CHANGE_NAME":
			return {
				...globalState,
				hello: action.payload	
			}
		
		default:
			return globalState

	}


}


export default reducer