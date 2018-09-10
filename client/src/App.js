import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './components/Card'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card startingLocation={this.props.startingLocation} destination={this.props.destination}/>
      </div>
    );
  }
}

mapStateToProps = (state) => {
  return {startingLocation: state.StartingLocation, destination: state.destination}
}
export default connect()(App);
