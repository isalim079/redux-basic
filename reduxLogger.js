const { applyMiddleware } = require("redux")
const { legacy_createStore } = require("redux")
const { default: logger } = require("redux-logger")

// product constants
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'

// products state
const initialProductState = {
    products: ['Alu', 'Potol'],
    numberOfProducts: 2
}

// product action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}

// product reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCTS: 
        return {
            products: [...state.products, action.payload],
            numberOfProducts: state.numberOfProducts + 1
        }
    
        default:
            state;
    }
}

// store
const store = legacy_createStore(productReducer, applyMiddleware(logger))   // applying middleware using applyMiddleware
store.subscribe(() => {
    console.log(store.getState());
})

// dispatching
store.dispatch(getProducts())
store.dispatch(addProducts("Kolmi"))