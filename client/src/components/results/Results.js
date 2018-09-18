import React, { Component} from 'react'
import Result from './Result'
import Card from '../Card'

class Results extends Component{

    render(){
        return(
            <div>
                <Card label={this.props.label}>
                <Result header={"Uber"} uberEstimates={this.props.uberEstimates}/> 
                <Result header={"Lyft"} lyftEstimates={this.props.lyftEstimates}/>
                </Card>
            </div>
            
        )
    }

}

export default Results