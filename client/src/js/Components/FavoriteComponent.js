var React = require('react');
var FavContainerComponent = require('./FavContainerComponent');

var FavoriteComponent = React.createClass({
  getInitialState: function()
  {
    return {favdata:[]};
  },

  getFavMovieData: function(){
    $.ajax({
      url:"http://localhost:8080/movie/",
      type:'GET',
      dataType:'JSON',
      success: function(data)
      {

        console.log("Movies fetched from mongodb");
        this.setState({favdata:Object.values(data)});
      }.bind(this),
      error: function(err)
      {
        console.log('error occurred on AJAX');
        console.log(err);
      }.bind(this)
     });

  },
  updateParentState: function(id,review){
        console.log("inside updateParentState");
    var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i]
           && arr[i].hasOwnProperty(attr)
           && (arguments.length > 2 && arr[i][attr] === value ) ){

           arr.splice(i,1);

       }
    }
    return arr;
  }

if(review===undefined)
{
  var updatedfavdata=removeByAttr(this.state.favdata,'imdbID',id);
  this.setState({favdata:updatedfavdata});
}
else
  {
  var index;
  var arr=this.state.favdata;
  arr.some(function(ele)
	{
	if(ele.imdbID === id)
	ele.Review=review;
	}
  );
    this.setState({favdata:arr});
  }
  },
  componentDidMount: function()
  {
    this.getFavMovieData();
    console.log(this.state.favdata);
  },
  render: function() {
    return (
      <div>
        <FavContainerComponent favMovieArray={this.state.favdata} updateParent={this.updateParentState} />
      </div>
    );
  }
});

module.exports = FavoriteComponent;
