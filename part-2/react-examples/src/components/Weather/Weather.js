import React, { Component } from "react";
import geocode from "utils/geocode";
import forecast from "utils/forecast";
import isNull from "lodash/isNull";
import debounce from "lodash/debounce";
import { WeatherInput } from "./Weather.styles";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      summary: null,
    };
    console.log("constructor");
  }

  locationRef = React.createRef();

  fetchLocation = async location => {
    const [lng, lat] = await geocode(location);
    const {
      daily: { summary },
    } = await forecast(lat, lng);
    console.log(summary);

    this.setState(() => ({
      summary,
    }));
  };

  componentDidMount() {
    // this.fetchLocation();
    console.log("didMount");
  }

  componentDidUpdate() {
    console.log("didUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");

    if (nextState.location === "tacna") {
      return false;
    }

    return true;
  }

  onSubmit = e => {
    e.preventDefault();

    const { value } = this.locationRef.current;
    console.log(this.locationRef);

    this.fetchLocation(value);
  };

  handleChange = location => {
    this.fetchLocation(location);
  };

  render() {
    const { summary } = this.state;

    const debounced = debounce(location => {
      this.handleChange(location);
    }, 600);

    console.log("render");
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>Please, enter a location:</p>
          <div>
            <WeatherInput big color="blue" onChange={e => debounced(e.target.value)} type="text" />
            <WeatherInput color="green" onChange={e => debounced(e.target.value)} type="text" />
          </div>
          <div>
            <button type="submit">Fetch data</button>
          </div>
          <div>{isNull(summary) ? <p>No location</p> : <h2>{summary}</h2>}</div>
        </form>
      </div>
    );
  }
}

export default Weather;
