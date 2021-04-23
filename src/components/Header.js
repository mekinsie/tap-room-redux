import React from "react";

function Header(){
  const styledHeader= {
    textAlign: "center",
    color: "rgb(255, 166, 57)",
    textShadow: "2px 2px #61462a"
  }
  return(
    <div style={styledHeader}>
      <h1>Tap Room</h1>
    </div>
  )
}

export default Header;