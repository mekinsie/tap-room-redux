import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  const styledKegList = {
    marginLeft: "200px",
    marginRight: "200px",
    marginBottom: "100px",
    padding: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    borderRadius: "3px"
  }
  return(
    <React.Fragment>
      <div style={styledKegList}>
        {Object.values(props.kegList).map((keg) =>
          <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          ingredient={keg.ingredient}
          processingTime={keg.processingTime}
          sellPrice={keg.sellPrice}
          id={keg.id}
          key={keg.id}
          keg={keg}
          />
        )}
      <Keg
        whenKegClicked={props.onKegSelection}
        name= "Beer"
        ingredient= "Wheat"
        processingTime= "1 Day"
        sellPrice= "200"
        id= "1"
        key= "1" 
      />
      <Keg
        whenKegClicked={props.onKegSelection}
        name= "Pale Ale"
        ingredient= "Hops"
        processingTime= "1-2 Days"
        sellPrice= "300"
        id= "2"
        key= "2"
      />
      <Keg
        whenKegClicked={props.onKegSelection}
        name= "Mead"
        ingredient= "Honey"
        processingTime= "6 Days"
        sellPrice= "200"
        id= "3"
        key= "3"
      /> 
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  whenKegClicked: PropTypes.func
};

export default KegList;