function _fetchLocation(input) {
  debugger
  return fetch(`/search_start/${input}`)
  .then(response => response.json())
  .then(locations => locations.predictions)
}

export function fetchStartingLocation(input) {
  console.log(input)
    return (dispatch) => {
      dispatch({ type: 'FETCHING_SUGGESTED_START_LOCATIONS' });
      _fetchLocation(input).then(suggestedStartingLocations => dispatch({ type: 'DISPLAY_START_LOCATIONS', suggestedStartingLocations }));
    };
  }

  export function fetchDestination(input) {
    console.log(input)
      return (dispatch) => {
        dispatch({ type: 'FETCHING_SUGGESTED_DESTINATION' });
        _fetchLocation(input).then(suggestedDestinations => dispatch({ type: 'DISPLAY_DESTINATIONS', suggestedDestinations }));
      };
    }