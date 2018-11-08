export default function reducer(state = {
  products: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch(action.type) {

    case 'FETCH_ALL_PRODUCTS': {
      return {...state, fetching: true, fetched: false}
    }

    case 'FETCH_ALL_PRODUCTS_FULFILLED': {
      return {...state, fetching: false, fetched: true, products: action.payload}
    }

    case 'FETCH_ALL_PRODUCTS_REJECTED': {
      return {...state, fetching: false, fetched: false, error: action.payload}
    }

    default: {
      return {...state}
    }
  }
}
