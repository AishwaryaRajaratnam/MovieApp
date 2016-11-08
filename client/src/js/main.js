var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory, Route, Router, IndexRoute} = require('react-router');
var NavBarComponent = require('./Components/NavBarComponent');
var ContactComponent = require('./Components/ContactComponent');
var AboutUsComponent = require('./Components/AboutUsComponent');
var HomeComponent = require('./Components/HomeComponent');
var FavoriteComponent = require('./Components/FavoriteComponent');



var Main = React.createClass({


  render: function() {
    return (
      <div>
        <NavBarComponent />
          {this.props.children}

      </div>
    );
  }
});
ReactDOM.render(
  <Router history= {hashHistory}>
            <Route path="/" component={Main}>
            <IndexRoute component={HomeComponent}/>
            <Route path="/home" component={HomeComponent}/>
            <Route path="/favmovie" component={FavoriteComponent}/>
            <Route path="/about" component={AboutUsComponent}/>
            <Route path="/contact" component={ContactComponent}/>
            </Route>
</Router>, document.getElementById('app'));
