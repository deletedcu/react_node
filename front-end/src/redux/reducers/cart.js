var cartItems = localStorage.getItem('cart_items')

export default function reducer(state = {
  items: cartItems ? JSON.parse(cartItems) : [],
}, action) {
  switch(action.type) {
    case 'ADD_TO_CART': {
      state.items = state.items.concat(action.payload.items)

      localStorage.setItem('cart_items', JSON.stringify(state.items))
      
      return {...state, items: state.items}
    }

    case 'REMOVE_FROM_CART': {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.item.id
      })
      state.items.splice(index, 1)

      localStorage.setItem('cart_items', JSON.stringify(state.items))

      return {...state, items: state.items}
    }

    default: {
      return {...state}
    }
  }
}
