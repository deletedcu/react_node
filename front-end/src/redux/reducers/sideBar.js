export default function reducer(state = {
  visible: false,
}, action) {
  switch(action.type) {
    case 'SHOW_SIDEBAR': {
      return { visible: true }
    }
    case 'HIDE_SIDEBAR': {
      return { visible: false }
    }
    default: {
      return {...state}
    }
  }
}
