import React, { Component} from 'react'
import Result from './Result'
import Card from '../Card'

class Results extends Component{

    render(){
        
        return(
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Result header={"Uber"} estimates={this.props.uberEstimates} buttonTitle={"Take me to Uber"}/>
                    
            <Result header={"Lyft"} estimates={this.props.lyftEstimates} buttonTitle={"Take me to Lyft"}/>
            </div>
            
        )
    }

}

export default Results