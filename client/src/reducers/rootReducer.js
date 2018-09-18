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
    startLng: '',
    destinationLat: '',
    destinationLng: '', 
    isFetchingUberEstimate: false,
    uberEstimate: ''
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
        return {...state, isConvertingStartLatLong: false, startLat: action.startLat, startLng: action.startLng}
        case "CONVERTING_DESTINATION_LAT_LONG":
        return {...state, isConvertingDestinationLatLong: true}
      case "RETRIEVE_DESTINATION_LAT_LONG":
        return {...state, isConvertingDestinationLatLong: false, destinationLat: action.destinationLat, destinationLng: action.destinationLng }
      case "FETCHING_UBER_ESTIMATE":
        return {...state, isFetchingUberEstimate: true, uberEstimate: ''}
      case "RETURN_UBER_ESTIMATE":
        return {...state, isFetchingUberEstimate: false, uberEstimate: action.estimate}
        default:
            return state
    }
  }