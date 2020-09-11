import React from "react";
export default function Smurf({smurf}) {
  return (
    <>
      <p>{smurf.name}</p>
      <p>{smurf.age} years old</p>
      <p>Height: {smurf.height}</p>
    </>
  );
};
