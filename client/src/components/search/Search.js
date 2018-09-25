import React, { Component } from 'react'
import SearchInput from "./SearchInput"
import Button from "../Button"
import Card from '../Card'
import { Redirect } from "react-router-dom";

class Search extends Component{

    state = {
        startingLocation: '',
        destination: '',
        redirectToConfirmRoute: false
    }

     handleFormSubmit = async (e) => {
        e.preventDefault()
        await this.props.actions.convertLatLong(this.state.startingLocation, this.state.destination)
        this.setState({
            redirectToConfirmRoute: true
        })
     }

    handleChangeStart = (e) => {
        this.setState({
            startingLocation: e.target.value,
        })
    }

    handleChangeDestination = (e) => {
        this.setState({
            destination: e.target.value
        })
    }

    handleStartSearch = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.props.actions.fetchStartingLocation(this.state.startingLocation)
    }

    handleDestinationSearch = (e) => {
        console.log(this.state.destination)
        e.preventDefault()
        e.stopPropagation()
        this.props.actions.fetchDestination(this.state.destination)

    }

    handleUpdateStartAddress = (e) => {
        this.setState({
            startingLocation: e.currentTarget.innerText,
        })
    }

    handleUpdateDestinationAddress = (e) => {
        this.setState({
            destination: e.currentTarget.innerText,
        })
    }

    render(){
        const { redirectToConfirmRoute } = this.state;

        if(redirectToConfirmRoute) {
            return <Redirect to='/confirm_route' />;
        }

        return(
            <Card >
                <SearchInput label="Starting Location..." 
                    suggestedLocations={this.props.suggestedStartingLocations}
                    onChange={this.handleChangeStart} 
                    onSubmit={this.handleStartSearch}
                    handleUpdateAddress={this.handleUpdateStartAddress}
                    loading={this.props.isFetchingStartingLocation}
                    />
                <br/> 
                <br/>
                <SearchInput label="Destination..." 
                    suggestedLocations={this.props.suggestedDestinations}
                    onChange={this.handleChangeDestination} 
                    onSubmit={this.handleDestinationSearch}
                    handleUpdateAddress={this.handleUpdateDestinationAddress}
                    loading={this.props.isFetchingDestination}/> 
                    
                <br/>
                <br/> 
                <Button buttonTitle="Submit" onClick={this.handleFormSubmit}/>
            </ Card >
        )
    }
}

export default Search