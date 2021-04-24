import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onAddNewKeg({name: event.target.name.value, ingredient: event.target.ingredient.value, processingTime: event.target.processingTime.value, sellPrice: event.target.sellPrice.value, id: v4(), pintsLeft: 124});
  }

  const styledForm = {
    marginLeft: "200px",
    marginRight: "200px",
    marginBottom: "200px",
    padding: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    borderRadius: "3px"
  }

  return(
    <React.Fragment>
        <div style={styledForm}>
        <ReusableForm formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg" />
      </div>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onAddNewKeg: PropTypes.func
};

export default NewKegForm;

// name, ingredient, processing Time, sell price