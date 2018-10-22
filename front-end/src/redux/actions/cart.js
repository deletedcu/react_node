export function addToCart(items){
  return function(dispatch) {
    dispatch({ type: 'ADD_TO_CART', payload: { items: items }})
  }
}

export function removeFromCart(item){
  return function(dispatch) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { item: item }})
  }
}
