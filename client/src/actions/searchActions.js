function _fetchDropdownLocations(input) {
    return fetch(`RailsApi/search_locations/${input}`)
    .then(response => response.json())
    .then(locations => locations.predictions)
}
  
function _getLatLong(location) {
    return fetch(`RailsApi/confirm_route/convert_lat_long/${location}`)
    .then(response => response.json())
    .then(addressInfo => addressInfo.results[0].geometry.location)
}
  
function _convertStartLatLong(location) {
    console.log(location)
    return (dispatch) => {
      dispatch({type: 'CONVERTING_START_LAT_LONG'})
      return _getLatLong(location).then(({ lat, lng }) => dispatch({type: 'RETRIEVE_START_LAT_LONG', startLat: lat, startLng: lng}))
    }
}
  
function _convertDestinationLatLong(location) {
    console.log(location)
    return (dispatch) => {
      dispatch({type: 'CONVERTING_DESTINATION_LAT_LONG'})
      return _getLatLong(location).then(({ lat, lng })=> dispatch({type: 'RETRIEVE_DESTINATION_LAT_LONG', destinationLat: lat, destinationLng: lng }))
    }
}

export function fetchStartingLocation(input) {
    console.log(input)
      return (dispatch) => {
        dispatch({ type: 'FETCHING_SUGGESTED_START_LOCATIONS' });
        _fetchDropdownLocations(input).then(suggestedStartingLocations => dispatch({ type: 'DISPLAY_START_LOCATIONS', suggestedStartingLocations }));
      };
}
  
export function fetchDestination(input) {
    console.log(input)
    return (dispatch) => {
        dispatch({ type: 'FETCHING_SUGGESTED_DESTINATIONS' });
          _fetchDropdownLocations(input).then(suggestedDestinations => dispatch({ type: 'DISPLAY_DESTINATIONS', suggestedDestinations }));
    };
}
  
export function convertLatLong(startLocation, destinationLocation){
    return async (dispatch) => {
        await dispatch(_convertStartLatLong(startLocation))
        await dispatch(_convertDestinationLatLong(destinationLocation))
    }
}