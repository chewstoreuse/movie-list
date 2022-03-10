import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => (
  <div className='movie-list'>
    {props.movies.map((movie, i) =>
      <Movie key={i} movie={movie} />
    )}
  </div>
);

export default MovieList;