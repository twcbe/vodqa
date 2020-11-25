import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>;
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};
