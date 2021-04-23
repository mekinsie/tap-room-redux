import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onAddNewKeg({name: event.target.name.value, ingredient: event.target.ingredient.value, processingTime: event.target.processingTime.value, sellPrice: event.target.sellPrice.value, id: v4()});
  }

  return(
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onAddNewKeg: PropTypes.func
};

export default NewKegForm;

// name, ingredient, processing Time, sell price