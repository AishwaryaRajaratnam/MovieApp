var React = require('react');
var FavMovieBoxComponent = require('./FavMovieBoxComponent');

var FavContainerComponent = React.createClass({

  render: function() {
    console.log('FavContainerComponent render');
    console.log(JSON.stringify(this.props.favMovieArray));

    var updateParentFuntion=this.props.updateParent;
    var favMovies = this.props.favMovieArray.map(function(fmovie){

      return <FavMovieBoxComponent movieInfo={fmovie} updateGParent={updateParentFuntion}/>

    });
  //console.log('ContainerComponent map return'+ movies);

    return (
     <div>

      {favMovies}
      </div>

    );
  }
});

module.exports = FavContainerComponent;
