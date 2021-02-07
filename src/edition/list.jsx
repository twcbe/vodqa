import React, { Component } from "react";
import PropTypes from "prop-types";

import { Banner } from "../home/banner/index.jsx";

import "./index.scss";

export class PastEditions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const event = this.props.config;

    return (
      <div id="event-home" className="event-home">
        <Banner event={event}></Banner>
      </div>
    );
  }
}

PastEditions.propTypes = {
  config: PropTypes.object.isRequired,
};
