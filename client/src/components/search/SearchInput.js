import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchInput = (props) => <Input action={{ icon: 'search' }} placeholder={props.label} onChange={ (e, data) => props.onChange(data)}/>

export default SearchInput