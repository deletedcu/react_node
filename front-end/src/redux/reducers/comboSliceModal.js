export default function reducer(state = {
  item: null,
  visible: false,
}, action) {
  switch(action.type) {
    case 'SHOW_COMBO_SLICE_MODAL': {
      return { item: action.payload.item, visible: true }
    }
    case 'CLOSE_COMBO_SLICE_MODAL': {
      return { item: null, visible: false }
    }
    default: {
      return {...state}
    }
  }
}
