import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'

class SearchInput extends Component{

    constructor(props){
        super(props)
        this.state = {
            isDropdownOpen: false,
            suggestedLocations: []
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.suggestedLocations !== this.props.suggestedLocations){
            this.addSuggestedLocationsToState(this.props.suggestedLocations)
        }
    }

    addSuggestedLocationsToState = (locations) => {
        const suggestedLocations = locations.map(({place_id, id, description}) => ({key: id, value: place_id, text: description}))
        this.setState({
            suggestedLocations, 
            isDropdownOpen: true
        })
    }

    handleDropdownChange = (e) => {
        debugger
        this.setState({
            isDropdownOpen: false
        })
        this.props.handleUpdateAddress(e)
    }

    
    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                 <Dropdown onSearchChange={this.props.onChange} onChange={this.handleDropdownChange} placeholder={this.props.label} fluid search selection options={this.state.suggestedLocations} open={this.state.isDropdownOpen} />
                 <input type="submit"/>
            </form>
        )
    }
}


export default SearchInput