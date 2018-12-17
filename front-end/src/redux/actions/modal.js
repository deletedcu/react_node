export const ModalType = {
  menuModal: 0,
  comboSliceModal: 1,
  cardInfoModal: 2,
  editNameModal: 3,
  editAddressModal: 4,
  editPhoneNumberModal: 5,
  orderFeedbackModal: 6,
  mealPreferenceModal: 7,
  jobApplyModal: 8,
  invitationModal: 9,
  shareExperienceModal: 10,
  orderCancelModal: 11,
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
