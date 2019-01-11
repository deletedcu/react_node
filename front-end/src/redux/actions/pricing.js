export function beginPricingMode(mealCount){
  return function(dispatch) {
    dispatch({ type: 'BEGIN_PRICING', payload: { mealCount: mealCount }})
  }
}

export function endPricingMode(){
  return function(dispatch) {
    dispatch({ type: 'END_PRICING'})
  }
}
