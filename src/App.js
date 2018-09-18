import React, { Component } from 'react';
import MovieRow from './MovieRow.js'
import Header from './Header.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("initialize!");

    const movies = [
      { id: 0, posterSrc: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "aveners", overview: "lorem ipsum lorem ipsum lorem ipsuml orem ipsum" },
      { id: 1, posterSrc: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "aveners part 2", overview: "lorem ipsum lorem ipsum lorem ipsuml orem ipsum" }
    ]

    var movieRows = [];

    movies.forEach(movie => {
      console.log(movie.id);
      const movieRow = <MovieRow movie={movie}/> 
      movieRows.push(movieRow);
    })

    console.log(movieRows);
    this.state = { rows: movieRows };

  }


  render() {
    return (
      <div>
        <Header />
        <input className="searchbox" placeholder="Enter movie name" />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
