import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, ingregient: event.target.ingredient.value, processingTime: event.target.processingTime.value, sellPrice: event.target.sellPrice.value, })
  }

  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;

// name, ingredient, processing Time, sell price