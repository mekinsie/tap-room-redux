import React from "react";
import gold from "./../img/36px-gold.png"
import time from "./../img/time-icon.png"

function Keg(props){
  const styledKeg = {
    paddingTop: "10px",
    paddingBottom: "10px"
  }

  return(
    <React.Fragment>
      <div style={styledKeg}>
        <h2>{props.name}</h2>
        <p><strong>Ingredient:</strong> {props.ingredient}</p>
        <p><strong>Processing Time: <img src={time} alt="time icon" width="18"></img></strong> {props.processingTime}</p>
        <p><strong>Sell Price:</strong> <img src={gold} alt="gold coin" width="20"></img>{props.sellPrice}</p>
      </div>
    </React.Fragment>
  );
}

export default Keg;