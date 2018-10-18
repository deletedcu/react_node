export function showComboSliceModal(menuItem){
  return function(dispatch) {
    dispatch({ type: 'SHOW_COMBO_SLICE_MODAL', payload: { item: menuItem }})
  }
}

export function closeComboSliceModal(){
  return function(dispatch) {
    dispatch({ type: 'CLOSE_COMBO_SLICE_MODAL'})
  }
}
