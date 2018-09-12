import React, { Component } from 'react'
import Search from '../components/search/Search'
import CardLabel from '../components/CardLabel';
import * as searchActions from '../actions/fetchLocations'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SearchContainer extends Component{

    render(){
        let cardLabel = "Enter your starting and ending locations below:"

        return(
            <div>
                <CardLabel cardLabel={cardLabel} />
                <Search /> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    startingLocation: state.startingLocation,
    destination: state.destination
})

const mapDispatchToProps = (dispatch) => {
    return {...bindActionCreators(searchActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      router: ownProps,
      actions: dispatchProps,
    };
  })(SearchContainer)