import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Banner } from "../home/banner/index.jsx";
import { EditionCard } from "./card.jsx";

import "./index.scss";

export class PastEditions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const event = this.props.config;

    const renderEditions = () => {
      const editions = event.editions;

      const pastEditions = editions.filter(
        (edition) => edition.endTime < new Date().valueOf()
      );

      return (
        <div id="editions" className="recentEditions">
          <span className="banner">Recent Editions</span>
          <Link className="view-all" to="./list">
            View All
          </Link>
          <div className="editions">
            {pastEditions.map((edition) => {
              return <EditionCard key={edition.id} edition={edition} />;
            })}
          </div>
        </div>
      );
    };

    return (
      <div id="event-home" className="event-home">
        <Banner event={event}></Banner>
        {renderEditions()}
      </div>
    );
  }
}

PastEditions.propTypes = {
  config: PropTypes.object.isRequired,
};
