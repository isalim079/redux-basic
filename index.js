import { legacy_createStore as createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

const initialCounterState = {
    counter: 0,
};
const initialUserState = {
    users: [{ name: "SRS" }],
};
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

// reducer
const counterReducer = (state = initialCounterState, action) => {
    if(action.type === INCREMENT){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === DECREMENT){
        return {
            counter: state.counter - 1
        }
    }
}


// const addUser = () => {
//     return {
//         type: ADD_USER,
//         payload: { name: "SRS" },
//     };
// };


const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState());
})
