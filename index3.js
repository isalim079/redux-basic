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
