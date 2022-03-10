import React from 'react';
import MovieList from './MovieList.jsx';
import Searchbar from './Searchbar.jsx';
import AddMovie from './AddMovie.jsx';
import Watched from './Watched.jsx';
var movies = [
  { title: 'Mean Girls', watched: true, show: true },
  { title: 'Hackers', watched: true, show: true },
  { title: 'The Grey', watched: true, show: true },
  { title: 'Sunshine', watched: true, show: true },
  { title: 'Ex Machina', watched: true, show: true },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: movies,
      movieListView: movies,
      addMovieInput: '',
      searchInput: ''
    };

    this.onAddMovieChange = this.onAddMovieChange.bind(this);
    this.onClickAddMovie = this.onClickAddMovie.bind(this);

    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);

    this.onWatchedClick = this.onWatchedClick.bind(this);
    this.onToWatchClick = this.onToWatchClick.bind(this);
  }

  //add movie functions
  onAddMovieChange(event) {
    this.setState({
      addMovieInput: event.target.value
    });
  }

  onClickAddMovie() {
    if (this.state.addMovieInput.length === 0) {
      return;
    }

    this.state.movieList.push({ title: this.state.addMovieInput, watched: false });
    var newList = this.state.movieList;
    this.setState({
      movieList: newList,
      addMovieInput: ''
    });
  }

  //search functions
  onInputChange(event) {
    this.setState({
      searchInput: event.target.value
    });
  }

  onSearchSubmit() {
    var result = this.state.movieList.filter(movie => movie.title === this.state.searchInput)
    if (Object.keys(result).length === 0) {
      result = [{ title: 'no matches found...' }];
    }

    this.setState({
      movieList: result
    });
  }

  //watched filter functions
  handleBtnSwitch(e) {
    e.target.classList.remove('btn-outline-secondary');
    e.target.classList.add('btn-success');
  }

  onWatchedClick(event) {
    var toWatchBtn = document.getElementById('to-watch');
    if (toWatchBtn.classList.contains('btn-success')) {
      toWatchBtn.classList.remove('btn-success');
      toWatchBtn.classList.add('btn-outline-secondary');
    }

    this.handleBtnSwitch(event);

    var watchedMovies = this.state.movieListView.filter(movie => movie.watched);

    this.setState({
      movieList: watchedMovies
    }, () => { console.log(this.state) });
  }

  onToWatchClick(event) {
    var watchedBtn = document.getElementById('watched');
    if (watchedBtn.classList.contains('btn-success')) {
      watchedBtn.classList.remove('btn-success');
      watchedBtn.classList.add('btn-outline-secondary');
    }

    this.handleBtnSwitch(event);

    var toWatchMovies = this.state.movieListView.filter(movie => !movie.watched);

    this.setState({
      movieList: toWatchMovies
    }, () => { console.log(this.state) });
  }

  render() {
    return (
      <div className='list-container'>
        <h1>Movie List!</h1>
        <AddMovie onInput={this.onAddMovieChange} onAdd={this.onClickAddMovie} />
        <Searchbar onInput={this.onInputChange} onSearch={this.onSearchSubmit} />
        <Watched onWatch={this.onWatchedClick} onToWatch={this.onToWatchClick} />
        <MovieList movies={this.state.movieList} />
      </div>
    );
  }
}

export default App;