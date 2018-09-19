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

function _normalizeUber({ prices }){
  return prices.map(({ display_name, estimate }) => (
    {type: display_name, costEstimate: estimate}
  ))
}

function _normalizeLyft({ cost_estimates }){
  return cost_estimates.map(({display_name, estimated_cost_cents_min, estimated_cost_cents_max}) => (
    {type: display_name, costEstimate: `$${estimated_cost_cents_min / 100} - ${estimated_cost_cents_max / 100}`}
  ))
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

  export function fetchUberEstimate(startLat, startLng, destinationLat, destinationLng){
    return (dispatch) => {
      dispatch({ type: 'FETCHING_UBER_ESTIMATE' });
      fetch(`/RailsApi/uber?startLat=${startLat}&startLng=${startLng}&destinationLat=${destinationLat}&destinationLng=${destinationLng}`)
      .then(response => response.json())
      .then(data => _normalizeUber(data))
      .then(estimates => estimates.reverse().slice(1))
      .then(estimates => dispatch({ type: 'ADD_UBER_ESTIMATES_TO_STATE', estimates: estimates }))
    };
  }

  export function fetchLyftEstimate(startLat, startLng, destinationLat, destinationLng){
    return (dispatch) => {
      dispatch({ type: 'FETCHING_LYFT_ESTIMATE' });
      fetch(`/RailsApi/lyft?startLat=${startLat}&startLng=${startLng}&destinationLat=${destinationLat}&destinationLng=${destinationLng}`)
      .then(response => response.json())
      .then(data => _normalizeLyft(data))
      .then(estimates => dispatch({ type: 'ADD_LYFT_ESTIMATES_TO_STATE', estimates: estimates }))
    };
  }

  export function getMapboxKey(){
    return (dispatch) => {
      dispatch({ type: 'FETCHING_MAPBOX_KEY' });
      fetch("/RailsApi/confirm_route/mapbox")
      .then(response => response.text())
      .then(key => dispatch({ type: 'ADD_MAPBOX_KEY_TO_STATE', key }));
    };
  }

 

