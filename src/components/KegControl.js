import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';
import * as a from './../actions';
import PropTypes from "prop-types";

class KegControl extends React.Component {


    // const keg1 =  {
    //   name: "Beer",
    //   ingredient: "Wheat",
    //   processingTime: "1 Day",
    //   sellPrice: "200",
    //   pintsLeft: 124,
    //   id: 1
    // }
    // const keg2 = {
    //   name: "Pale Ale",
    //   ingredient: "Hops",
    //   processingTime: "1-2 Days",
    //   sellPrice: "300",
    //   pintsLeft: 124,
    //   id: 2
    // }
    // const keg3 = {
    //   name: "Mead",
    //   ingredient: "Honey",
    //   processingTime: "6 Days",
    //   sellPrice: "200",
    //   pintsLeft: 124,
    //   id: 3
    // }

  handleClick = () => {
    const {dispatch} = this.props;
    if (this.props.selectedKeg != null){
      const action2 = a.addKeg(this.props.selectedKeg);
      dispatch(action2)
      const  action = a.selectKeg(null)
      dispatch(action)
    } else {
      const action = a.toggleForm()
      dispatch(action)
      };
    }

  handleAddNewKeg = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg)
    const action2 = a.toggleForm()
    dispatch(action)
    dispatch(action2)
  }

  handleSelectKeg = (keg) => {
    const { dispatch } = this.props
    const action = a.selectKeg(keg)
    dispatch(action)
  }

  handleSellPint = (keg) => {
    if (keg.pintsLeft > 0) {
    const { dispatch } = this.props;
    const action = a.sellPint(keg);
    dispatch(action)
    }
  }

  render(){
    let currentView = null;
    let buttonText = null;
    if (this.props.selectedKeg != null){
      currentView = <KegDetail onSellPint = {this.handleSellPint} keg = {this.props.selectedKeg}/>
      buttonText= "Return to Keg List"
    }
    else if (this.props.formVisible){
      currentView=<NewKegForm onAddNewKeg={this.handleAddNewKeg}/>
      buttonText= "Return to Keg List"
    } else {
      buttonText= "Add a Keg"
      currentView = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleSelectKeg}
      
      onAddNewKeg={this.handleAddNewKeg}
      
      />
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
  masterKegList: PropTypes.object,
  formVisible: PropTypes.bool,
  selectedKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisible: state.formVisible,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;