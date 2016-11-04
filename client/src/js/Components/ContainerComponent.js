var React = require('react');
var MovieBoxComponent = require('./MovieBoxComponent');

var ContainerComponent = React.createClass({

  render: function() {
    console.log('ContainerComponent render');

    var movies = this.props.movieArray.map(function(movie){

      return <MovieBoxComponent title={movie.Title} year={movie.Year} imdbid={movie.imdbID} poster={movie.Poster}/>

    });
  console.log('ContainerComponent map return'+ movies);

    return (
     <div>
     
      {movies}
      </div>

    );
  }
});

module.exports = ContainerComponent;
