import React, { Component } from "react";

class Weather extends Component {
  state = {
    location: null,
  };

  locationRef = React.createRef();

  onSubmit = e => {
    e.preventDefault();
    console.log(this.locationRef.current.value);
  };

  render() {
    return (
      <div className="weather">
        <form onSubmit={this.onSubmit}>
          <p>Please, enter a location:</p>
          <div>
            <input ref={this.locationRef} type="text" />
          </div>
          <div>
            <button type="submit">Fetch data</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Weather;
