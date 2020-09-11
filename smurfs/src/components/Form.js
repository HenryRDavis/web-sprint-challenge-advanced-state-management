import React, { useState } from "react";
import { addNewSmurf } from '../store/actions/addSmurf';
import { connect } from "react-redux";
import SmurfList from "./SmurfList";

const SmurfForm = ({ addNewSmurf }) => {
    const newSmurf = {
      name: "",
      age: "",
      height: "",
    };
  
    const [smurf, setSmurf] = useState(newSmurf);
  
    const handleChange = (e) => {
      setSmurf({
        ...smurf,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addNewSmurf(smurf);
      setSmurf({
        name: "",
        age: "",
        height: "",
      });
    };
  
    return (
      <div>
        <h1>Insert Smurf</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                onChange={handleChange}
                name="name"
                placeholder="Enter Name"
                value={smurf.name}
              />
  
              <input
                type="text"
                onChange={handleChange}
                name="age"
                placeholder="Enter Age"
                value={smurf.age}
              />
  
              <input
                type="text"
                onChange={handleChange}
                name="height"
                placeholder="Enter Height"
                value={smurf.height}
              />
  
              <button type="submit">More, add more</button>
            </div>
          </form>
          <SmurfList />
        </div>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      smurfs: state.smurfs,
    };
  };
  
  const mapDispatchToProps = { addNewSmurf };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);