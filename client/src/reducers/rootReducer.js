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
    isFetchingLyftEstimate: false,
    uberEstimates: '',
    lyftEstimates: ''
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
        return {...state, isFetchingUberEstimate: true, uberEstimates: '' }
      case "ADD_UBER_ESTIMATES_TO_STATE":
        return {...state, isFetchingUberEstimate: false, uberEstimates: action.estimates }
      case "FETCHING_LYFT_ESTIMATE":
        return {...state, isFetchingLyftEstimate: true, lyftEstimates: '' }
      case "ADD_LYFT_ESTIMATES_TO_STATE":
        return {...state, isFetchingLyftEstimate: false, lyftEstimates: action.estimates }
        default:
            return state
    }
  }