  
import React, { useEffect } from "react";
import "./App.css";
import fetchSmurfs from '../store/actions/smurfAction'
import { connect } from 'react-redux';
import Smurfs from "./Smurf";
import SmurfList from "./SmurfList";

function App({fetchSmurfs, loadingSmurfs, errorMessage}) {

    useEffect(() => {
      fetchSmurfs()
    }, [fetchSmurfs])

    return (
      <div className="App">
        <h1>SMURFS! with Redux</h1>
        {!loadingSmurfs ? <Smurfs/> : <div>... Fetching people</div>} 
          {errorMessage !== "" ? <div>{errorMessage}</div> : null}
        <Smurfs/>
        <SmurfList/>
      </div>
    );
  }

  function mapStateToProps(state) {
    return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage
    }
  }

export default connect(mapStateToProps, { fetchSmurfs })(App);