import React, { Component } from "react";
import InputField from "../common/Inputfield";
import FormValidation from "../common/RegisterVal";
import Joi from "@hapi/joi";

class Register extends FormValidation {
  state = {
    user: { Username: "", Password: "", Name: "" },
    errors: {},
  };

  schema = {
    Username: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    Password: Joi.string().alphanum().min(5).max(30).required(),
    Name: Joi.string().alphanum().min(5).max(30).required(),
  };

  doSubmit = () => {
    console.log("Submiited");
  };

  render() {
    const { user, errors } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField
            value={user.Username}
            onChange={this.handleChange}
            name="Username"
            label="Username"
            error={errors.Username === "null" ? {} : errors.Username}
          />
          <InputField
            value={user.Password}
            onChange={this.handleChange}
            name="Password"
            label="Password"
            error={errors.Password === "null" ? {} : errors.Password}
          />
          <InputField
            value={user.Name}
            onChange={this.handleChange}
            name="Name"
            label="Name"
            error={errors.Name === "null" ? {} : errors.Name}
          />
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
