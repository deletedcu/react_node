export default function reducer(state = {
  visible: false,
}, action) {
  switch(action.type) {
    case 'SHOW_OVERLAY_SPINNER': {
      return { visible: true }
    }
    case 'HIDE_OVERLAY_SPINNER': {
      return { visible: false }
    }
    default: {
      return {...state}
    }
  }
}
