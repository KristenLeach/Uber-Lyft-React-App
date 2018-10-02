import React, { Component} from 'react'
import Result from './Result'
import Loader from 'react-loaders'

class Results extends Component{

    componentDidMount(){
        if(this.props.isFetchingUberEstimate){
            console.log("yes")
        }
    }

    componentDidUpdate(){
        return <Loader type="line-scale" hidden />
    }

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