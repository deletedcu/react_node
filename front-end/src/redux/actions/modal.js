export const ModalType = {
  menuModal: 0,
  comboSliceModal: 1,
}

export function showModal(modalType, data){
  return function(dispatch) {
    dispatch({ type: 'SHOW_MODAL', payload: { data: data, active: modalType }})
  }
}

export function closeModal(){
  return function(dispatch) {
    dispatch({ type: 'CLOSE_MODAL'})
  }
}