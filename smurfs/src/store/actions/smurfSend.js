import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

const sendSmurf = (props) => {
    return (dispatch) => {
        dispatch({ type: ADD_SMURF })
        axios 
            .post('http://localhost:3333/smurfs', props)
            .then(res => {
                debugger
                console.log(res.data);
                dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data})
            })
            .catch(err => {
                debugger
                console.log(err)
                dispatch({ type: ADD_SMURF_FAILURE, payload: {message: 'Error'}})
            })
    }
}

export default sendSmurf;