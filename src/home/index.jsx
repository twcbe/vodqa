import React from "react";
import PropTypes from "prop-types";

export const Home = (props) => {
  return <h1>Welcome to {props.name}</h1>;
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};
