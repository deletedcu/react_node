export default function reducer(state = {
  items: [],
}, action) {
  switch(action.type) {
    case 'ADD_TO_CART': {
      state.items = state.items.concat(action.payload.items)
      
      return {...state, items: state.items}
    }

    case 'REMOVE_FROM_CART': {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.item.id
      })
      state.items.splice(index, 1)

      return {...state, items: state.items}
    }

    case 'REMOVE_ALL_FROM_CART': {
      let items = [];
      state.items.forEach(item => {
        item.id !== action.payload.item.id && items.push(item)
      })

      return {...state, items: items}
    }

    case 'EMPTY_CART': {
      return {...state, items: []}
    }

    default: {
      return {...state}
    }
  }
}
