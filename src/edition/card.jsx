import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export class EditionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const edition = this.props.edition;
    const type = edition.type || "TALK";
    const title = edition.title || `EDITION ${edition.id} `;
    const startTime = new Date(edition.startTime);
    const endTime = new Date(edition.endTime);
    const formattedDate = startTime.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const duration = Math.abs(startTime - endTime) / 36e5;
    const sessions = edition?.sessions || [];
    const sessionCount = sessions?.length || 0;
    const getTalksCount = (sessions) => {
      let count = 0;
      sessions.map((session) => (count += session.talks.length));
      return count;
    };
    const talksCount = getTalksCount(sessions) || 0;

    return (
      <div className="editionCard event-bg">
        <span className="type">{type.toUpperCase()}</span>
        <div className="details">
          <p className="title">{title}</p>
          <p className="date">
            Edition {edition.id} | {formattedDate}
          </p>
          <div className="info">
            <div className="item">
              <p className="value">{String(talksCount).padStart(2, "0")}</p>
              <p>Talks</p>
            </div>
            <div className="item">
              <p className="separator" />
              <p className="value">{String(sessionCount).padStart(2, "0")}</p>
              <p>{sessionCount > 1 ? "Sessions" : "Session"}</p>
            </div>
            <div className="item">
              <p className="separator" />
              <p className="value">{String(duration).padStart(2, "0")} hr</p>
              <p>Duration</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditionCard.propTypes = {
  edition: PropTypes.object.isRequired,
};
