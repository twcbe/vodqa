import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Talks } from "./talks.jsx";
import { getOrdinalNum, padZeros } from "../../utils.js";

import "./index.scss";

export class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const event = this.props.event;
    const smallBanner = this.props.small;

    if (!event || !event.editions || event.editions <= 0) return <br />;

    const upcomingEditions = event.editions.filter(
      (edition) => edition.startTime > new Date().valueOf()
    );

    const bannerStatus = upcomingEditions.length > 0 ? "active" : "inactive";

    const pastEditions = event.editions.filter(
      (edition) => edition.endTime < new Date().valueOf()
    );

    const getMaxEdition = (editions) => {
      return Math.max(...editions.map((edition) => edition.id));
    };

    const getTalksCount = (editions) => {
      let talksCount = 0;
      editions.forEach((edition) => {
        edition.sessions.forEach((session) => {
          talksCount += session.talks.length;
        });
      });
      return talksCount;
    };

    const renderMenuBar = (name, location) => {
      const links = ["Editions", "Collaborate", "About Us", "Contact Us"];
      return (
        <div className="topnav">
          <Router>
            <Link className="item logo" to="./">
              {name}
            </Link>
          </Router>
          <div className="item location">{location}</div>
          {links.map((item) => {
            const link = `#${item.replace(/\s+/g, "").trim().toLowerCase()}`;
            return (
              <a key={item} className="item link" href={link}>
                {item}
              </a>
            );
          })}
        </div>
      );
    };

    const renderTaglines = (tagLines) => {
      return tagLines.map((tagLine) => {
        return (
          <p key={tagLine} className="tagLine">
            {tagLine}
          </p>
        );
      });
    };

    const renderEventStats = () => {
      const editionsCount = getMaxEdition(pastEditions);
      const talksCount = getTalksCount(pastEditions);
      return (
        <div className="stats">
          <div className="item">
            <div>
              <p className="value">{editionsCount}</p>
              <p className="text">{talksCount > 1 ? "EDITIONS" : "EDITION"}</p>
            </div>
          </div>
          <div className="item">
            <div>
              <p className="value">{talksCount}</p>
              <p className="text">{talksCount > 1 ? "TALKS" : "TALK"}</p>
            </div>
          </div>
          <div className="item">
            <div>
              <p className="value">1000+</p>
              <p className="text">MEMBERS</p>
            </div>
          </div>
        </div>
      );
    };

    const renderEditionStats = (edition) => {
      const editionDate = new Date(edition.startTime);
      const editionDay = editionDate.toLocaleString("en-IN", {
        day: "numeric",
      });
      const talksCount = getTalksCount([edition]);
      return (
        <div className="stats">
          <div className="item">
            <div>
              <p className="value">{talksCount}</p>
              <p className="text">{talksCount > 1 ? "TALKS" : "TALK"}</p>
            </div>
          </div>
          <div className="item">
            <div>
              <p>
                <span className="value">{editionDay}</span>
                <span className="text">{getOrdinalNum(editionDay)}</span>
              </p>
              <p className="text">
                {editionDate
                  .toLocaleString("en-IN", { month: "short" })
                  .toUpperCase()}
              </p>
            </div>
          </div>
          <div className="item">
            <div>
              <p className="value">
                {editionDate.getHours() % 12} :{" "}
                {padZeros(editionDate.getMinutes(), 2)}
              </p>
              <p className="text">
                {editionDate.getHours() < 12 ? "AM" : "PM"}
              </p>
            </div>
          </div>
        </div>
      );
    };

    const renderEventInfo = () => {
      if (bannerStatus === "inactive") {
        return (
          <div className="eventInfo">
            {!smallBanner && event.tagLines && renderTaglines(event.tagLines)}
            {!smallBanner && renderEventStats()}
          </div>
        );
      }

      const upcomingEdition = upcomingEditions[0];
      const upcomingEditionDate = new Date(upcomingEdition.startTime);
      return (
        <div className={`upcomingEditionInfo ${smallBanner ? "small" : ""}`}>
          <div className="basicInfo">
            <div className="summary">
              UPCOMING | EDITION {upcomingEdition.id} |{" "}
              {upcomingEditionDate.toLocaleString("en-IN", { weekday: "long" })}
            </div>
            <div className="title">{upcomingEdition.title}</div>
          </div>
          {upcomingEdition.registration && (
            <div className="rsvp">
              <a
                className="link"
                href={upcomingEdition.registration.link}
                target="_blank"
                rel="noreferrer"
              >
                RSVP now
              </a>
            </div>
          )}
          {!smallBanner && renderEditionStats(upcomingEdition)}

          {!smallBanner && <Talks sessions={upcomingEdition.sessions} />}
        </div>
      );
    };

    return (
      <div id="banner" className={`banner ${bannerStatus}`}>
        {renderMenuBar(event.name, event.location)}
        {renderEventInfo()}
      </div>
    );
  }
}

Banner.defaultProps = {
  small: false,
};

Banner.propTypes = {
  event: PropTypes.object.isRequired,
  small: PropTypes.bool,
};
