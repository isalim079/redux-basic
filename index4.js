
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

