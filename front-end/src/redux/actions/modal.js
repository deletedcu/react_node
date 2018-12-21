export const ModalType = {
  menuModal: 0,
  comboSliceModal: 1,
  cardInfoModal: 2,
  editProfileModal: 3,
  orderFeedbackModal: 4,
  mealPreferenceModal: 5,
  jobApplyModal: 6,
  invitationModal: 7,
  shareExperienceModal: 8,
  orderCancelModal: 9,
  updatePasswordModal: 10,
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
