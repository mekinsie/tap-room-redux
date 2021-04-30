import React from "react";
import PropTypes from "prop-types";
import gold from "./../img/36px-gold.png"
import time from "./../img/time-icon.png"

function KegDetail(props) {
  const styledKegDetail = {
    marginLeft: "200px",
    marginRight: "200px",
    padding: "30px",
    paddingBottom: "80px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    borderRadius: "3px"
  }
  const styledh1 = {
    color: "rgb(255, 166, 57)",
    textShadow: "2px 2px #61462a"
  }
  return(
    <React.Fragment>
      <div style={styledKegDetail}>
        <h1 style={styledh1}>{props.keg.name}</h1>

        <p><strong>Ingredient:</strong> {props.keg.ingredient}</p>
        <p><strong>Processing Time: <img src={time} alt="time icon" width="18"></img></strong> {props.keg.processingTime}</p>
        <p><strong>Sell Price:</strong> <img src={gold} alt="gold coin" width="20"></img>{props.keg.sellPrice}g</p>
        <p><strong>Pints Left:</strong> {props.keg.pintsLeft} <button onClick={() => props.onSellPint(props.keg.id)}>Sell a pint</button></p>
        <button>Edit Keg</button>
        <button>Delete Keg</button>
      </div>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object
}
export default KegDetail;