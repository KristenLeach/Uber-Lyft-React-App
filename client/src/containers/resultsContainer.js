import React, { Component } from 'react'
import Results from '../components/results/Results'
import CardLabel from '../components/CardLabel';
import Card from '../components/Card'
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

export default connect(mapStateToProps)(ResultsContainer)