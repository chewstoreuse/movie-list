import React from 'react';

const Searchbar = (props) => (
  <div className="search-bar input-group mb-3">
    <input type="text" className="form-control" placeholder="Search movie..." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={() => props.onInput(event)} />
    <div className="input-group-append">
      <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={props.onSearch}>Go!</button>
    </div>
  </div >
)

export default Searchbar;