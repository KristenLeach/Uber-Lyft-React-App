import React, { Component } from 'react'
import SearchInput from "./SearchInput"
import Button from "../Button"
import Card from '../Card'

class Search extends Component{

    state = {
        startingLocation: '',
        destination: ''
    }

     handleFormSubmit = (e) => {
        e.preventDefault()
        
        //this.props.actions.fetchDestination(this.state.destination)
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
        return(
            <Card >
                <SearchInput label="Starting Location..." 
                    suggestedLocations={this.props.suggestedStartingLocations}
                    onChange={this.handleChangeStart} 
                    onSubmit={this.handleStartSearch}
                    handleUpdateAddress={this.handleUpdateStartAddress}
                    value={this.state.startingLocation}/>
                <br/> 
                <br/>
                <SearchInput label="Destination..." 
                    suggestedLocations={this.props.suggestedDestinations}
                    onChange={this.handleChangeDestination} 
                    onSubmit={this.handleDestinationSearch}
                    handleUpdateAddress={this.handleUpdateDestinationAddress}/> 
                <br/>
                <br/> 
                <Button buttonTitle="Submit" onClick={this.handleFormSubmit}/>
            </ Card >
        )
    }
}

export default Search