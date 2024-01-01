const { legacy_createStore, combineReducers } = require("redux")

// const products
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCTS = "ADD_PRODUCTS"

// const carts
const GET_CART_ITEMS = "GET_CART_ITEMS"
const ADD_CART_ITEMS = "ADD_CART_ITEMS"

// product States
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2
}

// cart states
const initialCartState = {
    cart: ["Potato"],
    numberOfCart: 1
}

// creating product actions
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

// creating cart action
const getCartItems = () => {
    return {
        type: GET_CART_ITEMS,
    }
}
const addCartItems = (cartItems) => {
    return {
        type: ADD_CART_ITEMS,
        payload: cartItems
    }
}

// productReducer 
const productReducer = (state = initialProductState, action) => {
    if(action.type === GET_PRODUCTS) {
        return {
            ...state
        }
    }
    if(action.type === ADD_PRODUCTS) {
        return {
            products: [...state.products, action.payload], 
            numberOfProducts: state.numberOfProducts + 1
        }
    }
    return state
    
}

// cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch(action.type){
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEMS:
            return{
                cart: [...state.cart, action.payload],
                numberOfCart : state.numberOfCart + 1
            }
            default:
                return state
    }
}

// combine store 
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// create store by combine store/ using combineReducers
const store = legacy_createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState());
})

/* // creating store 
const store = legacy_createStore(productReducer);
store.subscribe(() => {
    console.log(store.getState());
})

// creating store for cart
const cartStore = legacy_createStore(cartReducer)
cartStore.subscribe(() => {
    console.log(cartStore.getState());
}) */

// dispatch products
store.dispatch(getProducts())
store.dispatch(addProducts("Ginger"))
store.dispatch(addProducts("Tomato"))
store.dispatch(addProducts("curry"))

// // dispatch carts
// cartStore.dispatch(getCartItems())
// cartStore.dispatch(addCartItems("Potol"))
// cartStore.dispatch(addCartItems("Mula"))
// cartStore.dispatch(addCartItems("Cophi"))

// dispatch carts
store.dispatch(getCartItems())
store.dispatch(addCartItems("Potol"))
store.dispatch(addCartItems("Mula"))
store.dispatch(addCartItems("Cophi"))