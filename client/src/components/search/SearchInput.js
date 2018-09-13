import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'


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
        this.setState({
            isDropdownOpen: false
        })
        this.props.handleUpdateAddress(e)
    }

    onFocus = () => this.setState({ isDropdownOpen: true },
        () => this.setState({ isDropdownOpen: false }));

    
    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                 <Dropdown 
                  onSearchChange={this.props.onChange}
                  onChange={this.handleDropdownChange} 
                  placeholder={this.props.label} 
                   search selection 
                  onFocus={this.onFocus} 
                  options={this.state.suggestedLocations} 
                  open={this.state.isDropdownOpen || false} 
                  icon={<span></span>}
                //   searchQuery={this.props.value}
                />
                 <Button icon>
                    <Icon name='search'/> 
                </Button>
            </form>
        )
    }
}


export default SearchInput