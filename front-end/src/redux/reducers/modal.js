export default function reducer(state = {
  data: null,
  active: null,
}, action) {
  switch(action.type) {
    case 'SHOW_MODAL': {
      return { data: action.payload.data, active: action.payload.active }
    }
    case 'CLOSE_MODAL': {
      return { data: null, active: null }
    }
    default: {
      return {...state}
    }
  }
}
