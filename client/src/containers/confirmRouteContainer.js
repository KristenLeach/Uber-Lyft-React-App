import React, { Component } from 'react'
import ConfirmRoute from '../components/results/ConfirmRoute'
import CardLabel from '../components/CardLabel'

class ConfirmRouteContainer extends Component{

    render(){
        let cardLabel = "Does this look right?"

        return(
            <div>
                <CardLabel cardLabel={cardLabel} />
                <ConfirmRoute /> 
            </div>
        )
    }
}

export default ConfirmRouteContainer