export function showMenuModal(menuItem){
  return function(dispatch) {
    dispatch({ type: 'SHOW_MENU_MODAL', payload: { item: menuItem }})
  }
}

export function closeMenuModal(){
  return function(dispatch) {
    dispatch({ type: 'CLOSE_MENU_MODAL'})
  }
}
