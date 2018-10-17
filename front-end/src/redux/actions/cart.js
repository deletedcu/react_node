export function addToCart(menuItem){
  return function(dispatch) {
    dispatch({ type: 'ADD_TO_CART', payload: { item: menuItem }})
  }
}

export function removeFromCart(){
  return function(dispatch) {
    dispatch({ type: 'REMOVE_FROM_CART'})
  }
}
