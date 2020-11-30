import React, { Component } from "react";
import PropTypes from "prop-types";

import { EditionCard } from "../edition/card.jsx";

export class RecentEditions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const editions = this.props.editions;

    const pastEditions = editions.filter(
      (edition) => edition.endTime < new Date().valueOf()
    );
    const recentEditions = pastEditions.slice(0, 4);

    return (
      <div id="editions" className="recentEditions">
        <span className="title">Recent Editions</span>
        <div className="editions">
          {recentEditions.map((edition) => {
            return <EditionCard key={edition.id} edition={edition} />;
          })}
        </div>
      </div>
    );
  }
}

RecentEditions.propTypes = {
  editions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
