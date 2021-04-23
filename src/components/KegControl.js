import React from "react";
import KegList from "./KegList"

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterKegList: [
      {
        name: "Beer",
        ingredient: "Wheat",
        processingTime: "1 Day",
        sellPrice: "200g"
      },
      {
        name: "Pale Ale",
        ingredient: "Hops",
        processingTime: "1-2 Days",
        sellPrice: "300g"
      }
      ]
    };
  };

  render() {
    return(
      <KegList kegList={this.state.masterKegList} />
    );
  }
}
export default KegControl;