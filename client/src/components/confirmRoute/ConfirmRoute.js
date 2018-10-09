import React, { Component } from 'react';
import Button from '../Button'
import RouteMap from './RouteMap'
import Card from '../Card'
import { Redirect } from "react-router-dom";

class ConfirmRoute extends Component{
    state = {
        redirectToResults: false,
        redirectToSearch: false
    }

    handleRedirect = async (e) => {
        e.preventDefault()
        await this.props.actions.fetchUberEstimate(this.props.confirmRouteReducer.startLat, this.props.confirmRouteReducer.startLng, this.props.confirmRouteReducer.destinationLat, this.props.confirmRouteReducer.destinationLng)
        await this.props.actions.fetchLyftEstimate(this.props.confirmRouteReducer.startLat, this.props.confirmRouteReducer.startLng, this.props.confirmRouteReducer.destinationLat, this.props.confirmRouteReducer.destinationLng)
        this.setState({
            redirectToResults: true
        })
    }

    handleRedirectBack = () => {
        this.setState({
            redirectToSearch: true
        })
    }

    render(){
    const { redirectToResults } = this.state;
    const { redirectToSearch } = this.state;

        if(redirectToResults) {
            return <Redirect to="/results"/>
        }else if(redirectToSearch) {
            return <Redirect to='/'/>
        }

        return(
            <div>
                <Card>
                <RouteMap mapboxKey={this.props.mapboxReducer.mapboxKey} startLat={this.props.confirmRouteReducer.startLat} startLng={this.props.confirmRouteReducer.startLng} destinationLat={this.props.confirmRouteReducer.destinationLat} destinationLng={this.props.confirmRouteReducer.destinationLng}/>
                <Button buttonTitle="No, let's try that again." onClick={this.handleRedirectBack}/> 
                <Button buttonTitle="Yes! Let's Ride..." onClick={this.handleRedirect}/>
                </Card>
            </div>
        )
    }
}

export default ConfirmRoute