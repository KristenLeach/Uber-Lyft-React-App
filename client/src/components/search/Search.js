import React, { Component } from 'react'
import SearchInput from "./SearchInput"
import Button from "../Button"
import Card from '../Card'

class Search extends Component{

    state = {
        startingLocation: '',
        destination: ''
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
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

    render(){
        return(
            <Card >
            <form onSubmit={this.handleOnSubmit}>
                <SearchInput label="Starting Location..." onChange={this.handleChangeStart}/>
                <br/> 
                <br/>
                <SearchInput label="Destination..." onChange={this.handleChangeDestination}/> 
                <br/>
                <br/> 
                <Button buttonTitle="Submit"/>
            </form>
            </ Card >
        )
    }
}

export default Search