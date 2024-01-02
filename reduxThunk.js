// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux thunk
// axios api

const { default: axios } = require("axios");
const { applyMiddleware } = require("redux");
const { legacy_createStore } = require("redux");
const { thunk } = require("redux-thunk");


// constants
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos"


// states
const initialTodo = {
    todo: [],
    isLoading: false,
    error: null,
};

// actions
const getTodoRequest = () => {
    return {
        type: GET_TODO_REQUEST,
    };
};
const getTodoSuccess = (todo) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: todo,
    };
};
const getTodoFailed = () => {
    return {
        type: GET_TODO_FAILED,
        payload: error,
    };
};

// reducers
const todoReducer = (state = initialTodo, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todo: action.payload,
            };
        case GET_TODO_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

// async action creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodoRequest());
        axios.get(API_URL)
        .then(res => {
            const todo = res.data
            const titles = todo.map(todo => todo.title)
            dispatch(getTodoSuccess(titles))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(getTodoFailed(errorMessage))
        })
    }
}

// store
const store = legacy_createStore(todoReducer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState());
})

// dispatch
store.dispatch(fetchData())
