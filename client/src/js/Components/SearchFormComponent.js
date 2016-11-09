var React = require('react');
var SearchFormComponent = React.createClass({
  getInitialState: function()
  {
    return {title:''};
  },
  handleTitle: function(t)
  {
    this.setState({title: t.target.value});
  },
  handleClick: function()
  {
    console.log('inside handleclick');
    this.props.p_getMovieData(this.state.title);
  },
  render: function() {
    return (
      <div>

      <div className='well searchform'>
          <input className='searchbox' type='text' placeholder='Enter movie title..' onChange={this.handleTitle}></input>
          <button className='btn btn-warning' onClick={this.handleClick}>Search</button>
      </div>
      </div>
    );
  }

});

module.exports = SearchFormComponent;
