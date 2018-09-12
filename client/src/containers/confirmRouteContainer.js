import React, { Component } from 'react'
import ConfirmRoute from '../components/confirmRoute/ConfirmRoute'
import CardLabel from '../components/CardLabel'
import Card from '../components/Card'

class ConfirmRouteContainer extends Component{

    render(){
        let cardLabel = "Does this look right?"

        return(
            <Card>
                <CardLabel cardLabel={cardLabel} />
                <ConfirmRoute /> 
            </Card>
        )
    }
}

export default ConfirmRouteContainer