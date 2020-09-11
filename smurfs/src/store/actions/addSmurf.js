import axios from 'axios'

export const ADD_SMURF = "ADD_SMURF"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS" 
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"

export const addNewSmurf = (smurf) => {
    return (dispatch) => {
    dispatch({ type: "NEW_SMURF_START" });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({type: ADD_SMURF_FAILURE, payload: `${err.response.status} ${err.response.data}`,
        });
      });
};
};