import React, { Component } from 'react'
import Results from '../components/results/Results'
import CardLabel from '../components/CardLabel';
import Card from '../components/Card'

class ResultsContainer extends Component{

    render(){
        let cardLabel = "Enjoy your ride!"

        return(
            <Card>
                <CardLabel cardLabel={cardLabel} />
                <Results /> 
            </Card>
        )
    }
}

export default ResultsContainer