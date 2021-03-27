import React, { Component } from "react";
import PropTypes from "prop-types";

import { Banner } from "../home/banner/index.jsx";
import { EditionCard } from "./card.jsx";

import "./index.scss";

export class PastEditions extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const event = this.props.config;
    document.title = `${event.name} ${event.location}`;
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
          <span className="banner">{`All Editions (${pastEditions.length})`}</span>
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
        <Banner event={event} small></Banner>
        {renderEditions()}
        <p className="copyright">© 2021 ThoughtWorks, Inc.</p>
      </div>
    );
  }
}

PastEditions.propTypes = {
  config: PropTypes.object.isRequired,
};
