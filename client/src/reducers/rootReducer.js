export default function rootReducer(state = {
    startingLocation: '',
    destination: '',
    isFetchingStartingLocation: false,
    isFetchingDestination: false,
    suggestedStartingLocations: [],
    suggestedDestinations: []
  }, action) {
    switch(action.type){
      case "FETCHING_SUGGESTED_START_LOCATIONS":
        return {...state, isFetchingStartingLocation: true, suggestedStartingLocations: []}
      case "DISPLAY_START_LOCATIONS":
        return {...state, isFetchingStartingLocation: false, suggestedStartingLocations: action.suggestedStartingLocations}
        default:
            return state
    }
  }