import React, { Component } from "react";
import PropTypes from "prop-types";

export class Talks extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, talksCount: 0 };
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious() {
    const currentIndex = this.state.index;
    this.setState(() => ({
      index: currentIndex - 1,
    }));
  }

  handleNext() {
    const currentIndex = this.state.index;
    this.setState(() => ({
      index: currentIndex + 1,
    }));
  }

  componentDidMount() {
    let talks = [];
    this.props.sessions.forEach((session) => {
      const sessionTalks = session.talks;
      talks = [...talks, ...sessionTalks];
    });
    this.setState(() => ({
      talksCount: talks.length,
      talks: talks,
    }));
  }

  render() {
    if (!this.state.talks) return <br />;

    const { index, talksCount } = this.state;
    const talk = this.state.talks[index];

    if (!talk) return <br />;
    const talkId = index + 1;
    const startTime = new Date(talk.startTime);
    const endTime = new Date(talk.endTime);

    const getLocalTime = (date) =>
      date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

    const renderTalkInfo = (talk) => (
      <div className="talkInfo">
        <div className="talk-title">{talk.title}</div>
        <div className="timeSlot">
          {getLocalTime(startTime)} - {getLocalTime(endTime)}
        </div>
        <div className="description">{talk.description}</div>
      </div>
    );

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

      if (speakers.length == 1) {
        return <div className="speakerInfo">{renderSpeaker(speakers[0])}</div>;
      }

      return (
        <div className="speakers">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker">
              {renderSpeaker(speaker)}
            </div>
          ))}
        </div>
      );
    };

    return (
      <div className="talks">
        <div id={`talk-${index}`} className="talk">
          {renderTalkInfo(talk)}
          {renderSpeakerInfo(talk.speakers)}
          {talksCount > 1 && (
            <div className="actions">
              <span>
                <span className="bold">{String(talkId).padStart(2, "0")} </span>
                <span className="light">
                  / {String(talksCount).padStart(2, "0")}
                </span>
              </span>
              <button
                id="prev"
                disabled={index == 0}
                onClick={this.handlePrevious}
              >
                {"<"}
              </button>
              <button
                id="next"
                disabled={index == talksCount - 1}
                onClick={this.handleNext}
              >
                {">"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Talks.propTypes = {
  sessions: PropTypes.array.isRequired,
};
