const initialState = {
  scoreList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
}

const score = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SCORE_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'GET_SCORE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'GET_SCORE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        scoreList: action.payload.data.result
      }
    case 'GET_SCORE_ID_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'GET_SCORE_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'GET_SCORE_ID_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        scoreList: action.payload.data.result
      }
    case 'POST_SCORE_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'POST_SCORE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'POST_SCORE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        scoreList: action.payload.data.result
      }
    case 'UPDATE_SCORE_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'UPDATE_SCORE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'UPDATE_SCORE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        scoreList: action.payload.data.result
      }
    default:
      return state
  }
}

export default score
