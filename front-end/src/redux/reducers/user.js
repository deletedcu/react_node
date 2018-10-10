export default function reducer(state = {
  user: {},
  loggingIn: false,
  loggedIn: false,
  error: null,
}, action) {
  switch(action.type) {

    case 'LOGIN_USER': {
      return {...state, loggingIn: true}
    }

    case 'LOGIN_USER_FULFILLED': {
      return {...state, loggingIn: false, loggedIn: true, user: action.payload}
    }

    case 'LOGIN_USER_REJECTED': {
      return {...state, loggingIn: false, loggedIn: false, error: action.payload}
    }

    case 'SIGNUP_USER': {
      return {...state, loggingIn: true}
    }

    case 'SIGNUP_USER_FULFILLED': {
      return {...state, loggingIn: false, loggedIn: true, user: action.payload}
    }

    case 'SIGNUP_USER_REJECTED': {
      return {...state, loggingIn: false, loggedIn: false, error: action.payload}
    }

    default: {
      return {...state}
    }

  }
}
