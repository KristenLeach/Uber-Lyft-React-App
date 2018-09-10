import React, { Component } from 'react'
import SearchInput from "./SearchInput"

class Search extends Component{
    render(){
        return(
            <form>
                <SearchInput />
                <SearchInput /> 
            </form>
        )
    }
}

export default Search