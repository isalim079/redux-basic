// const products
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"

// product reducer
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2
}

// creating actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
        
    }
} 
const addProducts = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}

// productReducer
const productReducer = (state = initialProductState, action) => {
    if(action.type === getProducts) {
        return {
            ...state
        }
    }
    if(action.type === addProducts) {
        return {
            products: [...state.products, action.payload], 
            numberOfProducts: state.numberOfProducts + 1
        }
    }
    return state
}

// creating store
