import React, { Component } from 'react'
import Results from '../components/results/Results'
import CardLabel from '../components/CardLabel';
import Card from '../components/Card'
import * as searchActions from '../actions/fetchLocations'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ResultsContainer extends Component{

    render(){
        const cardStyle = {
            display: 'flex',
            flexDirection: 'column',
            WebkitTransition: 'all', // note the capital 'W' here
            msTransition: 'all' // 'ms' is the only lowercase vendor prefix
          };

        let cardLabel = "Enjoy your ride!"

        return(
            <Card style={cardStyle}>
                <CardLabel cardLabel={cardLabel} />
                <Results {...this.props}/> 
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    ...state
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
  })(ResultsContainer)