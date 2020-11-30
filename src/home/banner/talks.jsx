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
    const talk = this.state.talks[this.state.index];
    const { index, talksCount } = this.state;
    const startTime = new Date(talk.startTime);
    const endTime = new Date(talk.endTime);

    return (
      <div className="talks">
        <div id={`talk-${index}`} className="talkInfo">
          <div className="title">{talk.title}</div>
          <div className="timeSlot">
            {startTime.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}{" "}
            -{" "}
            {endTime.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
          <div className="description">{talk.description}</div>
          {talksCount > 1 && (
            <div className="navigation">
              <button onClick={this.handlePrevious}>Prev</button>
              <button onClick={this.handleNext}>Next</button>
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
