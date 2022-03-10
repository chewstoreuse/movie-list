import React from 'react';

const Movie = (props) => (
  <div className='movie'>
    <span>{props.movie.title}</span>
    <span className='watch-tag'>{props.movie.watched ? 'watched' : 'to watch'}</span>
  </div>
)

export default Movie;