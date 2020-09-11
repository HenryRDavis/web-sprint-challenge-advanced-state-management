import { FETCH_SMURF_FAILURE, FETCH_SMURF_SUCCESS, FETCH_SMURF } from "../actions"

export default function reducer(state, action) {
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
        default:
            return state;            
    }
}