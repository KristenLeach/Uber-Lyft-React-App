import React, { Component } from 'react';
import Button from '../Button'
import RouteMap from './RouteMap'

class ConfirmRoute extends Component{
    render(){
        return(
            <div>
                <RouteMap />
                <Button /> 
                <Button />
            </div>
        )
    }
}

export default ConfirmRoute