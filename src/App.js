import React, { Component } from "react";
import "./App.css";
import City from "./City.js";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  // Function to handle the city search when typed into input form
  handleSearch = (e) => {
    // Handling input
    let input = e.target.value;
    let cityName = input.toUpperCase();

    // Validation to check city name length
    if (cityName.length !== 0) {
      // Data fetch call
      axios
        .get(`http://ctp-zip-api.herokuapp.com/city/${cityName}`)
        .then((response) => {
          // Handles success
          const results = response.data;
          console.log(results);
          // Sets data in state
          this.setState({
            results,
          });
        })
        .catch((error) => {
          // Handles error
          console.log(error);
        });
    } else {
      this.setState({
        results: [],
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>City Search</h1>
        </div>
        <div className="row">
          <div className="col">
            <form action="">
              <input
                type="text"
                className="form-control"
                onChange={this.handleSearch}
                placeholder="Try Staten island"
              />
            </form>
          </div>
        </div>

        <div className="pt-4 pb-4">
          <City results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;