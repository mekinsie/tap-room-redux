import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  return(
    <React.Fragment>
      <h1>{props.keg.name}</h1>
    </React.Fragment>
  )
}

export default KegDetail;