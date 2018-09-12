export default function rootReducer(state = {
    startingLocation: '', destination: ''
  }, action) {
    switch(action.type){
      case "FETCHING_SUGGESTED_START_LOCATIONS":
        return {}
        default:
            return state
    }
  }