import React from "react";
import Keg from "./Keg";

function KegList(){
  return(
    <Keg 
    name="Beer"
    ingredient="Wheat"
    processingTime="1 Day"
    sellPrice="200g"
    />
  );
}

export default KegList;