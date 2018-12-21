import React from 'react'
import { connect } from 'react-redux'
import asyncComponent from '../../components/AsyncComponent'
import { ModalType } from '../../redux/actions/modal'

const AsyncMenuModal = asyncComponent(() => import('./MenuModal'))
const AsyncComboSliceModal = asyncComponent(() => import('./ComboSliceModal'))
const AsyncCardInfoModal = asyncComponent(() => import('./CardInfoModal'))
const AsyncEditProfileModal = asyncComponent(() => import('./EditProfileModal'))
const AsyncUpdatePasswordModal = asyncComponent(() => import('./UpdatePasswordModal'))
const AsyncOrderFeedbackModal = asyncComponent(() => import('./OrderFeedbackModal'))
const AsyncOrderCancelModal = asyncComponent(() => import('./OrderCancelModal'))
const AsyncMealPreferenceModal = asyncComponent(() => import('./MealPreferenceModal'))
const AsyncJobApplyModal = asyncComponent(() => import('./JobApplyModal'))
const AsyncInvitationModal = asyncComponent(() => import('./InvitationModal'))
const AsyncShareExperienceModal = asyncComponent(() => import('./ShareExperienceModal'))

/**
 * Routes
 */

const Modal = (props) => {
  const active = props.modal.active
  const pathName = props.pathName
  const history = props.history

  return (
    <div>
      {/* Menu Modal */}
      { active === ModalType.menuModal && <AsyncMenuModal pathName={pathName}/> }

      {/* Combo Slice Modal */}
      { active === ModalType.comboSliceModal && <AsyncComboSliceModal /> }

      {/* Card Info Modal */}
      { active === ModalType.cardInfoModal && <AsyncCardInfoModal /> }

      {/* Edit Profile Modal */}
      { active === ModalType.editProfileModal && <AsyncEditProfileModal /> }

      {/* Update Password Modal */}
      { active === ModalType.updatePasswordModal && <AsyncUpdatePasswordModal /> }

      {/* Rating Modal */}
      { active === ModalType.orderFeedbackModal && <AsyncOrderFeedbackModal /> }

      {/* Meal Preference Modal */}
      { active === ModalType.mealPreferenceModal && <AsyncMealPreferenceModal /> }

      {/* Job Apply Modal */}
      { active === ModalType.jobApplyModal && <AsyncJobApplyModal /> }

      {/* Invitation Modal */}
      { active === ModalType.invitationModal && <AsyncInvitationModal history={history} /> }

      {/* Share Experience Modal */}
      { active === ModalType.shareExperienceModal && <AsyncShareExperienceModal history={history} /> }

      {/* Order Cancel Modal */}
      { active === ModalType.orderCancelModal && <AsyncOrderCancelModal /> }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps)(Modal)
