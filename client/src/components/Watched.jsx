import React from 'react';

const Watched = (props) => (
  <div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" id="to-watch" className="btn btn-outline-secondary" onClick={() => props.onToWatch(event)}>To Watch</button>
    <button type="button" id="watched" className="btn btn-outline-secondary" onClick={() => props.onWatch(event)}>Watched</button>
  </div>
);

export default Watched;