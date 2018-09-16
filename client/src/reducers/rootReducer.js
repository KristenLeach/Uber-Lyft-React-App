export default function rootReducer(state = {
    isFetchingMapboxKey: false,
    mapboxKey: '',
    isFetchingStartingLocation: false,
    isFetchingDestination: false,
    suggestedStartingLocations: [],
    suggestedDestinations: [],
    isConvertingStartLatLong: false,
    isConvertingDestinationLatLong: false,
    startLat: '',
    startLong: '',
    destinationLat: '',
    destinationLong:''
  }, action) {
    switch(action.type){
      case 'FETCHING_MAPBOX_KEY':
        return {...state, isFetchingMapboxKey: true}
      case "ADD_MAPBOX_KEY_TO_STATE":
        return {...state, isFetchignMapboxKey: false, mapboxKey: action.key}
      case "FETCHING_SUGGESTED_START_LOCATIONS":
        return {...state, isFetchingStartingLocation: true, suggestedStartingLocations: []}
      case "DISPLAY_START_LOCATIONS":
        return {...state, isFetchingStartingLocation: false, suggestedStartingLocations: action.suggestedStartingLocations}
      case "FETCHING_SUGGESTED_DESTINATIONS":
        return {...state, isFetchingDestination: true, suggestedDestinations: []}
      case "DISPLAY_DESTINATIONS":
        return {...state, isFetchingDestination: false, suggestedDestinations: action.suggestedDestinations}
      case "CONVERTING_START_LAT_LONG":
        return {...state, isConvertingStartLatLong: true}
      case "RETRIEVE_START_LAT_LONG":
        return {...state, isConvertingStartLatLong: false, startLat: action.startLat, startLong:action.startLong}
        case "CONVERTING_DESTINATION_LAT_LONG":
        return {...state, isConvertingDestiationLatLong: true}
      case "RETRIEVE_DESTINATION_LAT_LONG":
        return {...state, isConvertingDestinationLatLong: false, destinationLat: action.destinationLat, destinationLong: action.destinationLong }
        default:
            return state
    }
  }