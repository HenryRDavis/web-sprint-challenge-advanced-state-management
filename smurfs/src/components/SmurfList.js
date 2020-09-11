import React, { useEffect } from "react";
import { connect } from "react-redux";
import { eSmurf } from '../store/actions/index';
import Smurf from "./Smurf";

const SmurfList = ({ eSmurf, loadingSmurf, errorMessage, smurfs }) => {

    useEffect(() => {
        eSmurf();
       }, [eSmurf]);

  return (
    <div>
      {loadingSmurf ? (
        <h3>Yea, just wait, you got all day anyways, so...</h3>
      ) : (
        <div>
          {smurfs.map((smurf) => {
            return <Smurf key={smurf.id} smurf={smurf} />;
          })}
        </div>
      )}
      {errorMessage !== "" ? <h2 className="error">{errorMessage}</h2> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    loadingSmurf: state.loadingSmurf,
    errorMessage: state.errorMessage,
  };
};

const mapToStateProps = { eSmurf };

export default connect(mapStateToProps, mapToStateProps)(SmurfList);