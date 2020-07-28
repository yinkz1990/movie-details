import React, { Component } from "react";
import Movies from "./Movies";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../common/Navbar";
import NotFound from "../common/NotFound";
import Rental from "../components/Rental";
import Customer from "../components/customer";
import MovieDetails from "../components/movieDetails";
import LoginForm from "./Login";
import Register from "./Register";
import NewMovie from "../components/NewMovies";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/new" component={NewMovie} />
            <Route path="/movies" component={Movies} />
            <Route path="/customer" component={Customer} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/rental" component={Rental} />
            <Route path="/register" component={Register} />
            <Route path="/movieDetail/:id" component={MovieDetails} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
