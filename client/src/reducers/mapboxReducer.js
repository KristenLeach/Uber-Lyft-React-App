export default function mapboxReducer(state = {
    isFetchingMapboxKey: false,
    mapboxKey: '',
}, action){
    switch(action.type){
      case 'FETCHING_MAPBOX_KEY':
        return {...state, isFetchingMapboxKey: true}
      case "ADD_MAPBOX_KEY_TO_STATE":
        return {...state, isFetchignMapboxKey: false, mapboxKey: action.key}
      default:
        return state
    }
}
