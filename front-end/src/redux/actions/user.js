import axios from 'axios'
import config from '../../config/config'
import { showNotification } from '../../services/notification'

export function loginUser(email, password, rememberMe){
  return function(dispatch) {
    dispatch({type: 'SHOW_OVERLAY_SPINNER'})
    dispatch({type: 'LOGIN_USER'})

    axios.request({
      url: '/user/login',
      baseURL: config.apiBaseUrl,
      method: 'post',
      auth: {
        username: email,
        password: password,
      }
    }).then((response) => {
      // showNotification('Successfully logged in', 'success')

      rememberMe && localStorage.setItem('token', response.data.user.token)
      dispatch({type: 'LOGIN_USER_FULFILLED', payload: response.data.user})
      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
    })
    .catch((err) => {
      if (err.response) {
        showNotification(err.response.data.message, 'error')
      } else {
        showNotification('Failed to login', 'error')
      }

      dispatch({type: 'LOGIN_USER_REJECTED', payload: err})
      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
    })
  }
}

export function signupUser(user) {
  return function(dispatch) {
    dispatch({type: 'SHOW_OVERLAY_SPINNER'})
    dispatch({type: 'SIGNUP_USER'})

    axios.request({
      url: '/user/register',
      baseURL: config.apiBaseUrl,
      method: 'post',
      data: user,
    }).then((response) => {
      showNotification('Successfully registered', 'success')

      localStorage.setItem('token', response.data.user.token)
      
      dispatch({type: 'SIGNUP_USER_FULFILLED', payload: response.data.user})
      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
    }).catch((err) => {
      if (err.response) {
        showNotification(err.response.data.message, 'error')
      } else {
        showNotification('Failed to sign up', 'error')
      }

      dispatch({type: 'SIGNUP_USER_REJECTED', payload: err})
      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
    })
  }
}

export function logoutUser() {
  return function(dispatch) {
    localStorage.setItem('token', '')
    dispatch({type: 'LOGOUT_USER_FULFILLED', payload: {}})
  }
}

export function authenticateUser(token) {
  return function(dispatch) {
    dispatch({type: 'SHOW_OVERLAY_SPINNER'})
    dispatch({type: 'LOGIN_USER'})

    axios.request({
      url: '/user/authenticate_token',
      baseURL: config.apiBaseUrl,
      method: 'post',
      headers: {
        'x-access-token': token
      }
    }).then((response) => {
      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
      dispatch({type: 'LOGIN_USER_FULFILLED', payload: response.data.user})
    }).catch((err) => {
      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
      dispatch({type: 'LOGIN_USER_REJECTED', payload: err})
    })
  }
}

export function updateUserProfile(token, params) {
  return function(dispatch) {
    dispatch({type: 'SHOW_OVERLAY_SPINNER'})
    dispatch({type: 'UPDATE_USER'})

    axios.request({
      url: '/user/update_profile',
      baseURL: config.apiBaseUrl,
      method: 'post',
      headers: {
        'x-access-token': token
      },
      data: params,
    }).then((response) => {
      showNotification('Successfully updated profile', 'success')
      
      localStorage.setItem('token', response.data.user.token)

      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
      dispatch({type: 'UPDATE_USER_FULFILLED', payload: response.data.user})
    }).catch((err) => {
      showNotification('Failed to update profile', 'error')

      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
      dispatch({type: 'UPDATE_USER_REJECTED', payload: err})
    })
  }
}

export function updatePassword(token, newPassword) {
  return function(dispatch) {
    dispatch({type: 'SHOW_OVERLAY_SPINNER'})
    dispatch({type: 'UPDATE_PASSWORD'})

    axios.request({
      url: '/user/update_password',
      baseURL: config.apiBaseUrl,
      method: 'post',
      headers: {
        'x-access-token': token
      },
      data: {
        new_password: newPassword,
      },
    }).then((response) => {
      showNotification('Successfully updated password', 'success')

      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
      dispatch({type: 'UPDATE_PASSWORD_FULFILLED', payload: response.data})
    }).catch((err) => {
      showNotification('Failed to update password', 'error')

      dispatch({type: 'HIDE_OVERLAY_SPINNER'})
      dispatch({type: 'UPDATE_PASSWORD_REJECTED', payload: err})
    })
  }
}
