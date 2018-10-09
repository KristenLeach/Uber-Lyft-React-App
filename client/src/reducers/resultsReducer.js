export default function resultsReducer(state = {
    isFetchingUberEstimate: false,
    isFetchingLyftEstimate: false,
    uberEstimates: [{type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}, {type: "UberX", costEstimate: '$10-12'}],
    lyftEstimates: [{type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}, {type: "LyftA", costEstimate: '$10-12'}]
}, action) {
    switch(action.type){
      case "FETCHING_UBER_ESTIMATE":
        return {...state, isFetchingUberEstimate: true, uberEstimates: [] }
      case "ADD_UBER_ESTIMATES_TO_STATE":
        return {...state, isFetchingUberEstimate: false, uberEstimates: action.estimates }
      case "FETCHING_LYFT_ESTIMATE":
        return {...state, isFetchingLyftEstimate: true, lyftEstimates: [] }
      case "ADD_LYFT_ESTIMATES_TO_STATE":
        return {...state, isFetchingLyftEstimate: false, lyftEstimates: action.estimates }
      default:
            return state
    }
}
