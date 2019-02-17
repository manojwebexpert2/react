import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import MovieRow from "./MovieRow";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {rows:''};
    this.performSearch("ant man");
    
    }
  performSearch(searchTerm) {
    //console.log("Lets search");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=2ea61e27d058b7492cf72284295f9a3a&language=en-US&query="+searchTerm+"&page=1&include_adult=false";
    $.ajax({
      url: urlString,
      success: (searchresult) => {
        console.log("Fetch Data Successfully");
        const results=searchresult.results;

        var MovieRows=[];
        //console.log(results[0]);

        results.forEach((movie)=>{
          ///console.log(movie.title);


        const poster_path="http://image.tmdb.org/t/p/w185"+movie.poster_path;
          const movieRow=<MovieRow
          key={movie.id}
          id={movie.id}
          title={movie.title}
          desc={movie.overview}
          img={poster_path}
        />
        MovieRows.push(movieRow);
        


        })
        this.setState({rows:MovieRows});

      },
      error: (xhr, status, err) => {
        console.error("Failed to retrive data");
      }
     
    });
  }
  searchMovieHandler(event)
  {
    console.log("search term is "+event.target.value); 
    this.performSearch(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <table
          style={{
            backgroundColor: "#000",
            display: "block",
            color: "#fff",
            paddingLeft: 16
          }}
        >
          <tbody>
            <tr>
              <td width="40%">
                <img
                  src="http://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
                  style={{ float: "left" }}
                  alt="logo"
                />
              </td>
              <td style={{ float: "left" }}>
                <h3>Movies Search</h3>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "100%",
            paddingTop: 8,
            paddingBottom: 8
          }}
          type="text" onChange={this.searchMovieHandler.bind(this)}
          placeholder="Enter search movie name"
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
