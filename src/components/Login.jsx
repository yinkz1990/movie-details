import React, { Component } from "react";
import Joi from "@hapi/joi";
import InputField from "../common/Inputfield";
import FormValidation from "../common/RegisterVal";

class LoginForm extends FormValidation {
  state = {
    user: { Username: "", Password: "" },
    errors: {},
  };

  schema = {
    Username: Joi.string().alphanum().min(5).max(30).required(),
    Password: Joi.string().alphanum().min(5).max(30).required(),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { user, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField
            value={user.Username}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            name="Username"
            label="Username"
            error={errors.Username === "null" ? {} : errors.Username}
          />
          <InputField
            value={user.Password}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            name="Password"
            label="Password"
            error={errors.Password === "null" ? {} : errors.Password}
          />
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
