import React from "react";

const HouseDetails = (props) => {
  return (
    <div className="HouseDetails">
      <img src={props.planImg} alt="Plan" />
      <button onClick={props.onClose}>Close</button>
    </div>
  );
};

export default HouseDetails;
