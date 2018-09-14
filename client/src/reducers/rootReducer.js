export default function rootReducer(state = {
    startingLocation: '',
    destination: '',
    isFetchingStartingLocation: false,
    isFetchingDestination: false,
    suggestedStartingLocations: [],
    suggestedDestinations: [],
    isConvertingStartLatLong: false,
    isConvertingDestinationLatLong: false,
    startLatLong: '',
    destinationLatLong: ''
  }, action) {
    switch(action.type){
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
        return {...state, isConvertingStartLatLong: false, startLatLong: action.startLatLong}
        case "CONVERTING_DESTINATION_LAT_LONG":
        return {...state, isConvertingDestiationLatLong: true}
      case "RETRIEVE_DESTINATION_LAT_LONG":
        return {...state, isConvertingDestinationLatLong: false, destinationLatLong: action.destinationLatLong}
        default:
            return state
    }
  }