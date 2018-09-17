import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import { Icon } from 'semantic-ui-react'

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
          center={this.props.startLngLat}
          containerStyle={{
            position: 'relative',
            height: "300px",
            width: "400px",
          }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{
              'icon-image': 'star-15',
              'icon-allow-overlap': true }}>
        <Marker coordinates={this.props.startLngLat}/>
        <Marker coordinates={this.props.destinationLngLat}/>
        </Layer>
        </Map>
        ): null
      }
    }

export default RouteMap