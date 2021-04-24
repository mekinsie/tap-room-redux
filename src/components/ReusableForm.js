import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          required />
        <input
          type='text'
          name='ingredient'
          placeholder='Ingredient'
          required />
        <input
          type='text'
          name='processingTime'
          placeholder='Processing Time'
          required />
        <input
          type='number'
          name='sellPrice'
          placeholder='Sell Price'
          required />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;