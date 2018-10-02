
  export function getMapboxKey(){
    return (dispatch) => {
      dispatch({ type: 'FETCHING_MAPBOX_KEY' });
      fetch("/RailsApi/confirm_route/mapbox")
      .then(response => response.text())
      .then(key => dispatch({ type: 'ADD_MAPBOX_KEY_TO_STATE', key }));
    };
  }

