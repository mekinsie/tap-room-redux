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
      selectedKeg: null
    };
  };

  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        selectedKeg: null
      })
    } else {
      const {dispatch} = this.props;
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
      console.log(this.state.selectedKeg)
    }
    else if (this.props.formVisible){
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
  masterKegList: PropTypes.object,
  formVisible: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisible: state.formVisible
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;