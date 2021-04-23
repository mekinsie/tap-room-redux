import React from "react";
import Header from "./Header";
import KegControl from "./KegControl"
import background from "./../img/background.png"
function App(){

  return(
      <React.Fragment>
        <Header />
        <KegControl />
      </React.Fragment>
  );
}

export default App;