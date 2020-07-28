import React, { Component } from "react";
import InputField from "../common/Inputfield";
import SelectField from "../common/Selectfield";
import FormValidation from "../common/Form";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import Joi from "@hapi/joi";

class NewMovie extends FormValidation {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _Id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(1)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .min(1)
      .max(10)
      .required()
      .label("Daily Rental Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({
      genres,
    });
  }

  doSubmit = () => {
    saveMovie(this.state.data);

    this.props.history.push("/movies");
  };

  render() {
    const { data, errors, genres } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <InputField
            value={data.title}
            onChange={this.handleChange}
            name="title"
            label="Title"
            error={errors.title === "null" ? {} : errors.title}
          />

          <SelectField
            value={data.genreId}
            onChange={this.handleChange}
            name="genreId"
            label="Genres"
            options={genres}
            error={errors.genreId === "null" ? {} : errors.genreId}
          />
          <InputField
            value={data.numberInStock}
            onChange={this.handleChange}
            name="numberInStock"
            label="Number in Stock"
            error={errors.numberInStock === "null" ? {} : errors.numberInStock}
          />
          <InputField
            value={data.dailyRentalRate}
            onChange={this.handleChange}
            name="dailyRentalRate"
            label="Daily Rental Rate"
            error={
              errors.dailyRentalRate === "null" ? {} : errors.dailyRentalRate
            }
          />

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
