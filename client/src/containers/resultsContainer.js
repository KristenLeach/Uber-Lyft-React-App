import React, { Component } from 'react'
import Results from '../components/results/Results'
import CardLabel from '../components/CardLabel';

class ResultsContainer extends Component{

    render(){
        let cardLabel = "Enjoy your ride!"

        return(
            <div>
                <CardLabel cardLabel={cardLabel} />
                <Results /> 
            </div>
        )
    }
}

export default ResultsContainer