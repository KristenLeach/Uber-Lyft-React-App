import React, { Component } from 'react'
import SearchInput from "./SearchInput"
import Button from "../Button"
import Card from '../Card'

class Search extends Component{

    state = {
        startingLocation: '',
        destination: ''
    }

     handleFormSubmit = () => {
         console.log(this.state)
    //     e.preventDefault()
    //     this.props.actions.fetchStartingLocation(this.state.startingLocation)
     }

    handleChangeStart = ({value: startingLocation}) => {
        this.setState({
            startingLocation
        })
    }

    handleChangeDestination = ({value: destination}) => {
        this.setState({
            destination
        })
    }

    handleStartSearch = () => {
        console.log(this.state.startingLocation)
    }

    handleDestinationSearch = () => {
        console.log(this.state.destination)
    }

    render(){
        return(
            <Card >
                <SearchInput label="Starting Location..." onChange={this.handleChangeStart} onClick={this.handleStartSearch}/>
                <br/> 
                <br/>
                <SearchInput label="Destination..." onChange={this.handleChangeDestination} onClick={this.handleDestinationSearch}/> 
                <br/>
                <br/> 
                <Button buttonTitle="Submit" onClick={this.handleFormSubmit}/>
            </ Card >
        )
    }
}

export default Search