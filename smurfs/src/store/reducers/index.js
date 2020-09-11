import { FETCH_SMURF_FAILURE, FETCH_SMURF_SUCCESS, FETCH_SMURF } from '../actions/index'
import {ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, ADD_SMURF} from '../actions/addSmurf'

const initialState = {
    smurfs: [],
    loadingSmurfs: false,
    errorMessage: "" 
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF:
            return {
                ...state,
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                loadingSmurfs: false,
            }
        case FETCH_SMURF_FAILURE: 
            return {
                ...state,
                errorMessage: action.payload.message,
                loadingSmurfs: false,
            }
        case ADD_SMURF:
            return { ...state, 
                loadingSmurfs: true, 
                error: "" 
            };
        case ADD_SMURF_SUCCESS:
            return { ...state, 
                smurfs: action.payload, 
                loadingSmurfs: false, 
                error: "" 
            };
        case ADD_SMURF_FAILURE:
            return { ...state, 
                loadingSmurfs: false,
                 error: action.payload 
                };
        default:
            return state;            
    }
}