import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURF })
        axios 
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data[0]})
            })
            .catch(err => {
                dispatch({ type: FETCH_SMURF_FAILURE, payload: {message: 'oops, try again.'}})
            })
    }
}

export default fetchSmurfs;