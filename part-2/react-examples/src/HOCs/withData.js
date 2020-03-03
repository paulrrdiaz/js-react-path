import React from "react";
import axios from "axios";
import isFunction from "lodash/isFunction";

export default WrappedComponent => url =>
  class extends React.Component {
    state = {
      data: [],
    };

    componentDidMount() {
      this.fetchData();
    }

    fetchData = async () => {
      try {
        const API = isFunction(url) ? url(this.props.username) : url;

        const { data } = await axios.get(API);

        this.setState({
          data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
