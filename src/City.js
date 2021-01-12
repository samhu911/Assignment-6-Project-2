import React, { Component } from "react";

class City extends Component {
  render() {
    return this.props.results.length !== 0 ? (
      this.props.results.map((result) => {
        return (
          <div
            key={result.RecordNumber}
            className="alert alert-success mb-4"
            role="alert"
          >
            {result}
          </div>
        );
      })
    ) : (
      <div className="alert alert-info text-center" role="alert">
        There are no results to display.
      </div>
    );
  }
}

export default City;