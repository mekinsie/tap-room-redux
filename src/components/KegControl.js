import React from "react";
import KegList from "./KegList"
import NewKegForm from "./NewKegForm"

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
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

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render() {
    let currentView = null;
    let buttonText = null;
    if (this.state.formVisible){
      currentView= <NewKegForm />
      buttonText= "Return to Keg List"
    } else {
      buttonText= "Add a Keg"
      currentView = <KegList kegList={this.state.masterKegList} />
    }
    return(
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentView}
      </React.Fragment>
    );
  }
}
export default KegControl;