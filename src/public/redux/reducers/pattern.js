const initialState = {
  patternList: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
}

const pattern = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PATTERN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      }
    case 'GET_PATTERN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        error: action.payload.data.result
      }
    case 'GET_PATTERN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        patternList: action.payload.data.result
      }
    case 'GET_PATTERN_ACTIVE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      }
    case 'GET_PATTERN_ACTIVE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        error: action.payload.data.result
      }
    case 'GET_PATTERN_ACTIVE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        patternList: action.payload.data.result
      }
    case 'INSERT_PATTERN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      }
    case 'INSERT_PATTERN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        error: action.payload.data.result
      }
    case 'INSERT_PATTERN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        patternList: action.payload.data.result
      }
    case 'ACTIVE_PATTERN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      }
    case 'ACTIVE_PATTERN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        error: action.payload.data.result
      }
    case 'ACTIVE_PATTERN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        patternList: action.payload.data.result
      }
    default:
      return state
  }
}

export default pattern
