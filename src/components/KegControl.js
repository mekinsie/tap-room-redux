import React from "react";
import KegList from "./KegList"
import NewKegForm from "./NewKegForm"
import KegDetail from "./KegDetail"

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      selectedKeg: null,
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
    if (this.state.selectedKeg != null){
      this.setState({
        formVisible: false,
        selectedKeg: null
      })
    } else {
      this.setState(prevState => ({
      formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddNewKeg = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList, formVisible: false});
  }

  handleSelectKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(ticket => ticket.id == id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  render(){
    let currentView = null;
    let buttonText = null;
    if (this.state.selectedKeg != null){
      currentView = <KegDetail keg = {this.state.selectedKeg}/>
      buttonText= "Return to Keg List"
    }
    else if (this.state.formVisible){
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