import React, { Component } from 'react'
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import {Icon} from 'semantic-ui-react'

class RouteMap extends Component{
    state = {
        Map: null
    }

    componentDidUpdate(prevProps){
        if(!prevProps.mapboxKey && this.props.mapboxKey){
            this.setState({
                Map: ReactMapboxGl({
                    accessToken: this.props.mapboxKey
                })
            })
        }
    }

    componentDidMount(){
        if(this.props.mapboxKey){
            this.setState({
                Map: ReactMapboxGl({
                    accessToken: this.props.mapboxKey
                })
            })
        }
    }

    render() {
        const {Map} = this.state
        
        return Map? (
          <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={[this.props.startLong, this.props.startLat]}
          containerStyle={{
            height: "300px",
            width: "300px"
          }}>
            <Marker coordinates={[this.props.startLong, this.props.startLat]}>
                <Icon name="circle" />
            </Marker>
            <Marker coordinates={[this.props.destinationLong, this.props.destinationLat]}>
                <Icon name="circle" />
            </Marker>
        </Map>
        ): null
      }
    }

export default RouteMap