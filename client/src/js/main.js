var React = require('react');
var ReactDOM = require('react-dom');
var SearchFormComponent = require('./Components/SearchFormComponent');
var ContainerComponent = require('./Components/ContainerComponent');

//var $=require('jquery');

var Main = React.createClass({
  getInitialState: function()
  {
    return {data: []};
  },

  getMovieData: function(title)
  {
    console.log('inside getmoviedata');
    console.log(title);
    $.ajax({
      url:"http://www.omdbapi.com/?s="+title,
      type:'GET',

      success: function(data)
      {
        console.log('inside success');
        this.setState({data: data.Search});
        console.log(JSON.stringify(this.state.data[0].Year));
      }.bind(this),
      error: function(err)
      {
        console.log('error occurred on AJAX');
        console.log(err);
      }.bind(this)
     });
     //console.log(this.state.data);
 },
  render: function() {
    console.log('inside main render');
    console.log(this.state.data);
    return (
      <div>
      <SearchFormComponent p_getMovieData = {this.getMovieData} />

      <ContainerComponent movieArray={this.state.data} />
      </div>
    );
  }

});
ReactDOM.render(<Main />, document.getElementById('app'));
