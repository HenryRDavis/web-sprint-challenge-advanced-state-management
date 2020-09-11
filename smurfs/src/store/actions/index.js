import axios from 'axios'

export const FETCH_SMURF = "FETCH_SMURF"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS" 
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE"

export const eSmurf = () => {
    return (dispatch) => {
    dispatch({ type: "FETCH_SMURF_SUCCESS" });
    axios.get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({type: FETCH_SMURF_FAILURE, payload: {message: 'And I oop! Just hang in there for a sec.'}});
    });
};
};
