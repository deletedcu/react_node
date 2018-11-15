export function showSidebar(){
  return function(dispatch) {
    dispatch({ type: 'SHOW_SIDEBAR' })
  }
}

export function hideSidebar(){
  return function(dispatch) {
    dispatch({ type: 'HIDE_SIDEBAR'})
  }
}
