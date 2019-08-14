const initialState = {
  userList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  token: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: [state.userList, action.payload]
      }
    case 'LOGOUT_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'LOGOUT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'LOGOUT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: action.payload.data.result
      }
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: action.payload.data.result
      }
    case 'GET_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'GET_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'GET_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: action.payload.data.result
      }
    case 'GET_ALL_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'GET_ALL_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'GET_ALL_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: action.payload.data.result
      }
    case 'DELETE_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'DELETE_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'DELETE_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: [state.userList, action.payload]
      }
    case 'GET_TOKEN_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      }
    case 'GET_TOKEN_REJECTED':
      localStorage.clear()
      return {
        ...state,
        isLoading: false,
        isRejected: true
      }
    case 'GET_TOKEN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: action.payload.data
      }
    default:
      return state
  }
}

export default user
