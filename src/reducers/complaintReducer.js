const initialState = []

const complaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COMPLAINTS':
      return {
        ...state,
        complaintsDataError: action.error ? action.error : null,
        complaintsDataSuccess: action.subtype === 'success',
        complaintsDataLoading: action.subtype === 'loading',
        complaintsData:
          action.subtype === 'success'
            ? action.complaintsData
            : state.complaintsData,
      }

    case 'UPDATE_COMPLAINT':
      return {
        ...state,
        updateComplaintError: action.error ? action.error : null,
        updateComplaintSuccess: action.subtype === 'success',
        updateComplaintLoading: action.subtype === 'loading',
      }
    default:
      return state
  }
}

export default complaintReducer
