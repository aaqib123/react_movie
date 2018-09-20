import React, { Component } from 'react';
import MovieRow from './MovieRow.js'
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = '';
    console.log("initialize!");
    this.Search();
  }

  Search() {
    console.log("movie db search ")
    const urlSite = "https://api.themoviedb.org/3/search/movie?api_key=f1f55aa8f93ba7c5fdaa9f7f3e25bb91&language=en-US&query=avenge&page=1&include_adult=false";
    $.ajax({
      url: urlSite,
      success:(resultsReq)=>{
        console.log("promise kept");
        console.log(resultsReq);
        const movies = resultsReq.results;



        var movieRows = [];

        movies.forEach(movie => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path;
          console.log(movie.id);
          const movieRow = <MovieRow movie={movie}/> ;
          movieRows.push(movieRow);
        })
    
        console.log(movieRows);
        this.setState ({ rows: movieRows });



      },
      error:(xhr, status, err)=>{
        console.log("failure")
      }
    })
  }


  render() {
    return (
      <div>
        <table className="App-header">
          <tbody>
            <tr>
              <td>
                <img src="#" alt="too poor for logos" />
              </td>
              <td>
                The Movie Searcher
            </td>
            </tr>
          </tbody>
        </table>

        <input className="searchbox" placeholder="Enter movie name" />


        {this.state.rows}


      </div>
    );
  }
}

export default App;
