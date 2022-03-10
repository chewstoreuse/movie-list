import React from 'react';

const AddMovie = (props) => (
  <div className="search-bar input-group mb-3">
    <input type="text" className="form-control" placeholder="Add a movie..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={() => props.onInput(event)} />
    <div className="input-group-append">
      <button className="btn btn-success" type="button" id="button-addon2" onClick={props.onAdd}>Add Movie!</button>
    </div>
  </div>
);

export default AddMovie;