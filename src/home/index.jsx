import React, { Component } from "react";
import PropTypes from "prop-types";

import { Banner } from "./banner/index.jsx";
import { RecentEditions } from "./recent-editions.jsx";

import "./index.scss";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const event = this.props.config;
    if (event) document.title = `${event.name} ${event.location}`;
  }

  render() {
    const event = this.props.config;

    const renderWave = (invert = false) => {
      return (
        <div className={`wave-seperator ${invert ? "invert" : ""}`}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      );
    };

    const renderCollaborate = () => {
      return (
        <div id="collaborate">
          {renderWave()}
          <div className="item submit">
            <div className="title">
              Collaborate with us and present in the community
            </div>
            <div className="button-wrapper">
              <a
                className="submit-talk-button"
                target="_blank"
                rel="noreferrer"
                href={event.submitTalk}
              >
                Submit your talk
              </a>
            </div>
          </div>
          <div className="item steps">
            <div className="step write">
              <div className="img pen" />
              <p className="text">
                Build your talk and write an abstract within 200 words
              </p>
            </div>
            <div className="step submit">
              <div className="img file" />
              <p className="text">
                Share the abstract with us by filling our form
              </p>
            </div>
            <div className="step contact">
              <div className="img contact-us" />
              <p className="text">We will reach out you to take this further</p>
            </div>
          </div>
          {renderWave(true)}
        </div>
      );
    };

    const renderAboutUs = () => {
      return (
        <div id="aboutus">
          <div className="item">
            <p className="title">What’s {event.name}?</p>
            <br />
            <p className="description">{event.description}</p>
            <br />
            <p className="feedback-que">
              Have you attended a {event.name} event before?
            </p>
            <br />
            <a
              className="feedback-link"
              target="_blank"
              rel="noreferrer"
              href={event.feedback}
            >
              Tell us how it was?
            </a>
            <br />
            <br />
          </div>
        </div>
      );
    };

    const renderFooter = () => {
      return (
        <div>
          <div id="footer">
            {renderWave()}
            <div className="item">
              <p id="contactus" className="bold">
                Contact us
              </p>
              <br />
              <p>E-Mail us at:</p>
              <a href={`mailto:${event.contact.email}`}>
                {event.contact.email}
              </a>
            </div>
            <div className="item social-links">
              <p className="bold">Follow us</p>
              <br />
              {event.socialLinks &&
                event.socialLinks.map((socialLink) => {
                  return (
                    <a
                      key={socialLink.name}
                      className={socialLink.name}
                      target="_blank"
                      rel="noreferrer"
                      href={socialLink.link}
                    />
                  );
                })}
            </div>
            <p className="copyright">© 2020 ThoughtWorks, Inc.</p>
          </div>
        </div>
      );
    };

    return (
      <div className="event-home">
        <Banner event={event}></Banner>
        <RecentEditions editions={event.editions} />
        {renderCollaborate()}
        {renderAboutUs()}
        {renderFooter()}
      </div>
    );
  }
}

Home.propTypes = {
  config: PropTypes.object.isRequired,
};
