import React, { Component } from 'react';
import { connect } from 'react-redux'
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import ConfirmRouteContainer from './containers/ConfirmRouteContainer'
import ResultsContainer from './containers/ResultsContainer'
import SearchContainer from './containers/SearchContainer'
import Background from './images/Background.jpg'
import { getMapboxKey } from './actions/fetchLocations'
import './App.css';

// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${Background})`
// };

class App extends Component {

  componentDidMount(){
    this.props.getMapboxKey()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={SearchContainer}/>
          <Route exact path="/confirm_route" component={ConfirmRouteContainer}/>
          <Route exact path="/results" component={ResultsContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {startingLocation: state.StartingLocation, destination: state.destination}
}
const mapDispatchToProps = (dispatch) => {
  return {getMapboxKey: () => dispatch(getMapboxKey())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
