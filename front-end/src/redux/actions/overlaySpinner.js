export function showOverlaySpinner(){
  return function(dispatch) {
    dispatch({ type: 'SHOW_OVERLAY_SPINNER' })
  }
}

export function hideOverlaySpinner(){
  return function(dispatch) {
    dispatch({ type: 'HIDE_OVERLAY_SPINNER'})
  }
}
