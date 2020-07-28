import React, { Component } from "react";
import Joi from "@hapi/joi";

class FormValidation extends Component {
  state = {
    data: {},
    error: {},
  };

  validate = () => {
    const schema = Joi.object(this.schema);
    const { error } = schema.validate(this.state.data, {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProps = (input) => {
    const obj = { [input.target.name]: input.target.value };
    const schema = Joi.object({
      [input.target.name]: this.schema[input.target.name],
    });

    const { error } = schema.validate(obj);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProps(e);
    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    const data = { ...this.state.data };
    data[e.target.name] = e.target.value;
    this.setState({
      data,
      errors,
    });
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
}

export default FormValidation;
