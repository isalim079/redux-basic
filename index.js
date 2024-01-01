// // import { legacy_createStore as createStore } from "redux";

const { legacy_createStore } = require("redux")

// const { legacy_createStore } = require("redux");


// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";

// const initialCounterState = {
//     counter: 0,
// };
// const initialUserState = {
//     users: [{ name: "SRS" }],
// };
// const incrementCounter = () => {
//     return {
//         type: INCREMENT,
//     };
// };
// const decrementCounter = () => {
//     return {
//         type: DECREMENT,
//     };
// };

// // reducer
// const counterReducer = (state = initialCounterState, action) => {
//     if(action.type === INCREMENT){
//         return {
//             counter: state.counter + 1
//         }
//     }
//     if(action.type === DECREMENT){
//         return {
//             counter: state.counter - 1
//         }
//     }
// }


// // const addUser = () => {
// //     return {
// //         type: ADD_USER,
// //         payload: { name: "SRS" },
// //     };
// // };


// const store = legacy_createStore(counterReducer)
// store.subscribe(() => {
//     console.log(store.getState());
// })

// // dispatch
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())



// Making full counter app with redux

// Constants
const INCREMENT = "INCREMENT"
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const initialCounterState = {
    count: 0
}
const incrementAction = () => {
    return {
        type: INCREMENT
    } 
}
const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

const resetAction = () => {
    return {
        type: RESET
    }
}

// creating reducer
const counterReducer = (state= initialCounterState, action) => {
    switch(action.type) {
        case INCREMENT: 
        return {
            ...state,
            count: state.count + 1
        }
        case DECREMENT: 
        return {
            ...state,
            count: state.count - 1
        }
        case RESET: 
        return {
            ...state,
            count: 0
        }
        default: state
    }
}

// store
const store = legacy_createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())
