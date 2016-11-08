var React = require('react');
var MovieBoxComponent = React.createClass({

  handleAddMovie: function()
  {
    console.log("Movie add clicked")
     var movieJSON=this.props.movieInfo;
     console.log(movieJSON);
    $.ajax({
      url:"http://localhost:8080/movie/add",
      type:'POST',
      data: movieJSON,
      success: function(msg)
      {
        alert(msg);
        //console.log("Movie added successfully");
      }.bind(this),
      error: function(err)
      {
        console.log('error occurred on AJAX');
        console.log(err);
      }.bind(this)
     });
  },
  render : function()
  {
  return (
    <div className="movie">
            <div className="well">
                <div className="row">
                    <div className="col-4">
                        <img className="thumbnail" src={this.props.poster}/>
                    </div>
                      <div className="col-8">
                          <h4>{this.props.title}</h4>
                          <ul className='list-group'>
                              <li className='list-group-item'>Year Released : {this.props.year}</li>
                              <li className='list-group-item'>IMDB ID : {this.props.imdbid}</li>
                              
                          </ul>
                          <a className="btn btn-primary" href={"http://www.imdb.com/title/"+this.props.imdbid} > View on IMDB</a>
                          <button className="btn btn-success" onClick={this.handleAddMovie}>Add</button>
                      </div>
                </div>
            </div>
        </div>
  );
  }


});

module.exports = MovieBoxComponent;
