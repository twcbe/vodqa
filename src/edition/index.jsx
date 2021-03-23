import React from "react";
import PropTypes from "prop-types";
import ReactQueryParams from "react-query-params";
import { HashRouter as Router, Link } from "react-router-dom";

import { Banner } from "../home/banner/index.jsx";
import { padZeros, getLocalTime, getFormattedDate } from "../utils.js";

import "./index.scss";

export class EditionDetails extends ReactQueryParams {
  constructor(props) {
    super(props);
  }

  render() {
    const editionId = this.queryParams?.editionId || 1;
    const editions = this.props.config.editions;
    const edition = editions.find((e) => e.id === Number(editionId));
    if (!edition) return <p>Edition not found</p>;
    const title = edition.title || `EDITION ${edition.id} `;
    const startTime = new Date(edition.startTime);
    const sessions = edition?.sessions || [];
    const talks = sessions?.map((session) => session.talks).flat() || [];

    const renderEditionInfo = () => {
      return (
        <div className="basicInfo">
          <div className="item">
            <p className="date">
              Edition {edition.id} | {getFormattedDate(startTime)}
            </p>
            <p className="title">{title}</p>
          </div>
          <div className="stats">
            {sessions.length > 1 && (
              <div className="item">
                <p className="value">
                  {String(sessions.length).padStart(2, "0")}
                </p>
                <p>Sessions</p>
              </div>
            )}
            <div className="item">
              <p className="value">{String(talks.length).padStart(2, "0")}</p>
              <p>{talks.length > 1 ? "Talks" : "Talk"}</p>
            </div>
          </div>
        </div>
      );
    };

    const renderTalksInfo = () => {
      const renderSpeakerInfo = (speakers) => {
        const renderSpeaker = (speaker) => (
          <>
            <img
              className="pic"
              src={speaker.profilePicture}
              alt={speaker.name}
              loading="lazy"
            />
            <div className="info">
              <div className="name">{speaker.name}</div>
              <div className="desgination">{speaker.desgination}</div>
            </div>
          </>
        );

        if (speakers && speakers.length == 1) {
          return (
            <div className="speakerInfo">{renderSpeaker(speakers[0])}</div>
          );
        }

        return (
          <div className="speakers">
            {speakers &&
              speakers.map((speaker, index) => (
                <div key={index} className="speaker">
                  {renderSpeaker(speaker)}
                </div>
              ))}
          </div>
        );
      };

      return (
        <div className="talks">
          {talks &&
            talks.map((talk, index) => (
              <div key={index} className="talk">
                <div className="talkInfo">
                  <span className="talk-title">
                    <span className="bold">{padZeros(index + 1, 2)}</span>
                    <span className="light">/{padZeros(talks.length, 2)} </span>
                    <span className="bold">{talk.title}</span>
                  </span>
                  <div className="timeSlot light">
                    {talk.startTime && getLocalTime(new Date(talk.startTime))}
                    {talk.startTime &&
                      talk.endTime &&
                      ` - ${getLocalTime(new Date(talk.endTime))}`}
                  </div>
                  <div className="description">{talk.description}</div>
                  {talk.speakers && renderSpeakerInfo(talk.speakers)}
                  {talk.recording && talk.slides && (
                    <div className="button-wrapper">
                      <a
                        className="slides"
                        target="_blank"
                        rel="noreferrer"
                        href={talk.slides}
                      >
                        View presentation
                      </a>
                    </div>
                  )}
                </div>
                {(talk.recording || talk.slides) && (
                  <iframe
                    src={talk.recording ? talk.recording : talk.slides}
                    width="560"
                    height="315"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                  />
                )}
              </div>
            ))}
        </div>
      );
    };

    return (
      <div id="event-home" className="event-home">
        <Banner event={this.config}></Banner>
        <Router>
          <Link className="view-all" to="./list">
            &#60; Back to all editions
          </Link>
        </Router>
        <div className="editionDetails">
          {renderEditionInfo()}
          {renderTalksInfo()}
        </div>
        <p className="copyright">© 2021 ThoughtWorks, Inc.</p>
      </div>
    );
  }
}

EditionDetails.propTypes = {
  config: PropTypes.object.isRequired,
  location: PropTypes.object,
};
