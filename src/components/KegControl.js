import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';
import * as a from './../actions';
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      selectedKeg: null,
      // masterKegList: [
      // {
      //   name: "Beer",
      //   ingredient: "Wheat",
      //   processingTime: "1 Day",
      //   sellPrice: "200",
      //   pintsLeft: 124,
      //   id: 1
      // },
      // {
      //   name: "Pale Ale",
      //   ingredient: "Hops",
      //   processingTime: "1-2 Days",
      //   sellPrice: "300",
      //   pintsLeft: 124,
      //   id: 2
      // },
      // {
      //   name: "Mead",
      //   ingredient: "Honey",
      //   processingTime: "6 Days",
      //   sellPrice: "200",
      //   pintsLeft: 124,
      //   id: 3
      // }
      // ]
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
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg)
    dispatch(action)
    this.setState({formVisible: false});
  }

  handleSelectKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleSellPint = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    if (selectedKeg.pintsLeft > 0) {
    selectedKeg.pintsLeft -= 1;
    this.setState({selectedKeg: selectedKeg});
    }
  }

  render(){
    let currentView = null;
    let buttonText = null;
    if (this.state.selectedKeg != null){
      currentView = <KegDetail onSellPint = {this.handleSellPint} keg = {this.state.selectedKeg}/>
      buttonText= "Return to Keg List"
    }
    else if (this.state.formVisible){
      currentView=<NewKegForm onAddNewKeg={this.handleAddNewKeg}/>
      buttonText= "Return to Keg List"
    } else {
      buttonText= "Add a Keg"
      currentView = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleSelectKeg}/>
    }
    return(
      <React.Fragment>
        <button onClick={this.handleClick} id="button-center" >{buttonText}</button>
        {currentView}
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;