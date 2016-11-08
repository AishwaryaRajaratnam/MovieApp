var React = require('react');
//var UpdateModalComponent = require('./UpdateModalComponent');

var FavMovieBoxComponent = React.createClass({

  handleSubmitModal : function(e)
  {
    e.preventDefault();
      var updatedReview= this.refs.review.value;
    console.log("Review submitted  --"+ this.refs.review.value+ "   iiiiiiiiiii     "+updatedReview)
     var updateObj={imdbID:this.refs.movieId.id,Review:updatedReview};
     var updateJSON=JSON.stringify(updateObj);
     console.log(updateJSON);

    $.ajax({
      url:"http://localhost:8080/movie/update",
      type:'PUT',
      data: updateObj,
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
  handleDeleteMovie: function()
  {
    console.log("Movie delete clicked");
    $.ajax({
      url:"http://localhost:8080/movie/remove/"+this.props.movieInfo.imdbID,
      type:'DELETE',
      //dataType:'JSON',
      success: function(msg)
      {
        alert(msg);
        console.log("Movies deleted from mongodb");
      }.bind(this),
      error: function(err)
      {
        console.log('error occurred on AJAX');
        console.log(err);
      }.bind(this)
     });
     this.props.updateGParent(this.props.movieInfo.imdbID);
  },

  render : function()
  {
    console.log("inside favmovieboxcoponent render");
    var id="#"+this.props.movieInfo.imdbID;
  return (
    <div className="movie">
            <div className="well">
                <div className="row">
                    <div className="col-4">
                        <img className="thumbnail" src={this.props.movieInfo.Poster}/>
                    </div>
                      <div className="col-8">
                          <h4>{this.props.movieInfo.Title}</h4>
                          <ul className='list-group'>
                              <li className='list-group-item'>Year Released : {this.props.movieInfo.Year}</li>
                              <li className='list-group-item'>IMDB ID : {this.props.movieInfo.imdbID}</li>
                              <li className='list-group-item'>Review :{this.props.movieInfo.Review}</li>
                          </ul>
                          <a className='btn btn-success' data-target={id} data-toggle="modal">Update</a>
                          <div className="modal fade" ref="movieId" id={this.props.movieInfo.imdbID}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header" id="modalheader">

                                                <button className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">Update Review</h4>

                                            </div>
                                            <div className="modal-body">

                                                <form className="form-horizontal">
                                                    <div className="form-group">
                                                        <label className="col-lg-2 control-label" for="review">Review:</label>
                                                        <div className="col-lg-10">
                                                            <textarea className="form-control" rows="5" id="review" ref="review"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="col-lg-10">
                                        <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                                        <button className="btn btn-primary" type="button" onClick={this.handleSubmitModal}>Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                          <button className="btn btn-primary" onClick={this.handleDeleteMovie}>Delete</button>
                      </div>
                </div>
            </div>
        </div>
  );
  }


});

module.exports = FavMovieBoxComponent;
