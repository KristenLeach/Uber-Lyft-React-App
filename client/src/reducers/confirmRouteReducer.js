export default function confirmRouteReducer(state = {
    isConvertingStartLatLong: false,
    isConvertingDestinationLatLong: false,
    startLat: '',
    startLng: '',
    destinationLat: '',
    destinationLng: '', 
}, action) {
    switch(action.type){
      case "CONVERTING_START_LAT_LONG":
        return {...state, isConvertingStartLatLong: true}
      case "RETRIEVE_START_LAT_LONG":
        return {...state, isConvertingStartLatLong: false, startLat: action.startLat, startLng: action.startLng}
      case "CONVERTING_DESTINATION_LAT_LONG":
        return {...state, isConvertingDestinationLatLong: true}
      case "RETRIEVE_DESTINATION_LAT_LONG":
        return {...state, isConvertingDestinationLatLong: false, destinationLat: action.destinationLat, destinationLng: action.destinationLng }
      default:
        return state
    }
}

