import React from "react";

const HouseCard = (props) => {
  return (
    <div className="HouseCard">
      <img src={props.img} alt="House" />
      <h3>{props.address}</h3>
      <p>{props.price}</p>
      <button onClick={props.onClick}>See House Plans</button>
    </div>
  );
};

export default HouseCard;
