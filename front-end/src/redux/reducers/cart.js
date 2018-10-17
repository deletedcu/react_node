export default function reducer(state = {
  items: [],
}, action) {
  switch(action.type) {
    case 'ADD_TO_CART': {
      state.items.push(action.payload.item)
      return {...state, items: state.items}
    }

    case 'REMOVE_FROM_CART': {
      state.items.pop()
      return {...state, items: state.items}
    }

    default: {
      return {...state}
    }
  }
}
