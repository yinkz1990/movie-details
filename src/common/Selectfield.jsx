import React, { Component } from "react";

class SelectField extends Component {
  render() {
    const { name, error, label, options, onChange, ...rest } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          id={name}
          {...rest}
          name={name}
          onChange={onChange}
          className="form-control"
        >
          <option value="" />
          {options.map((option) => (
            <option value={option._id} key={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default SelectField;
