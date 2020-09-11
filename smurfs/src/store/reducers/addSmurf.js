import { ADD_SMURF_FAILURE, ADD_SMURF_SUCCESS, ADD_SMURF } from "../actions/smurfSend"

export const formInitialState = {
    name: '',
    age: '', 
    height: '',
    id: '', 
}

const addSmurf = (state = formInitialState, action) => {
    switch(action.type) {
        case ADD_SMURF:
            return {
                value: action.payload,
            }
        case ADD_SMURF_SUCCESS:
            return {
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: action.payload.id,
            }
        case ADD_SMURF_FAILURE: 
            return {
                errorMessage: action.payload.message,
            }
        default:
            return state;            
    }
}

export default addSmurf;