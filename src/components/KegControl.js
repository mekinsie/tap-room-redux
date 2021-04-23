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
        sellPrice: "200"
      },
      {
        name: "Pale Ale",
        ingredient: "Hops",
        processingTime: "1-2 Days",
        sellPrice: "300"
      }
      ]
    };
  };

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  handleAddNewKeg = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList, formVisible: false});
  }

  render() {
    let currentView = null;
    let buttonText = null;
    if (this.state.formVisible){
      currentView=<NewKegForm onAddNewKeg={this.handleAddNewKeg}/>
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