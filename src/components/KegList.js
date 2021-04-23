import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  const styledKegList = {
    marginLeft: "200px",
    marginRight: "200px",
    padding: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    borderRadius: "3px"
  }
  return(
    <React.Fragment>
      <div style={styledKegList}>
        {props.kegList.map((keg) =>
          <Keg
          name={keg.name}
          ingredient={keg.ingredient}
          processingTime={keg.processingTime}
          sellPrice={keg.sellPrice}
          id={keg.id}
          key={keg.id}
          />
        )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
};

export default KegList;