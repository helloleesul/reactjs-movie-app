import React from "react";
import PropTypes from "prop-types";

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

function Movie(props) {
  return <div></div>;
}

export default Movie;
