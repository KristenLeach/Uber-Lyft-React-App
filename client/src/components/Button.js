import React from 'react'
import { Button as SUIButton } from 'semantic-ui-react'

const Button = (props) => <SUIButton content={props.buttonTitle} onClick={props.onClick}/>

export default Button