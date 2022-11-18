import React from "react";
import PropTypes from "prop-types";

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

function Movie({ year, title, summary, poster }) {
  return (
    <div className="movie__data">
      <img src={poster} alt={title} title={title} />
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <p className="movie__summary">{summary}</p>
    </div>
  );
}

export default Movie;
