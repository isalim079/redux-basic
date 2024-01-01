const { legacy_createStore } = require("redux");

// naming constant 
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT";

// state initializing
const initialState = {
    counter: 0
}

// type describe
const incrementAction = () => {
    return{
        type: INCREMENT
    }
}
const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

// reducer. receives two parameters (state and action)
const counterReducer = (state = initialState, action) => {
   switch (action.type) {
    case INCREMENT:
        return {
            ...state,
            counter: state.counter + 1
        }

        case DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
            }
   }
}

// store and subscribe
const store = legacy_createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
