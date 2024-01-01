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
const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: "SRS" },
    };
};
