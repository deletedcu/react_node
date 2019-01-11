export default function reducer(state = {
  activated: false,
  mealCount: 4,
}, action) {
  switch(action.type) {
    case 'BEGIN_PRICING': {
      return { activated: true, mealCount: action.payload.mealCount }
    }
    case 'END_PRICING': {
      return { activated: false }
    }
    default: {
      return {...state}
    }
  }
}
