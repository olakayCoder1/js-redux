const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const applyMiddleware = redux.applyMiddleware


const createStore = redux.createStore


const initalState = {
    loading : false,
    users : [] ,
    error : ''
}


const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


const fetchUserRequested = () => {
    return {
        type : FETCH_USERS_REQUESTED , 
    }
}

const fetchUserSucceeded = (users) => {
    return {
        type : FETCH_USERS_SUCCEEDED ,
        payload : users
    }
}

const fetchUserFailed = (err) => {
    return {
        type : FETCH_USERS_FAILED ,
        payload : err
    }
}



const reducer = (state = initalState , action ) => {
    switch(action.type){
        case FETCH_USERS_FAILED:
            return {
                ...state ,
                error : action.payload,
                loading : false
            }
        case FETCH_USERS_REQUESTED:
            return {
                ...state ,
                loading : true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state ,
                users : action.payload,
                loading : false
            }
        default:
            return state
        
    }
}

function fetchUser(){
    return function(dispatch){
        dispatch(fetchUserRequested())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data.map((user) => user.id)
            dispatch(fetchUserSucceeded(users))
        })
        .catch(err => dispatch(fetchUserFailed(err.message)))
    
        
    }
}

//  the thunkMiddleware passed to the applyMiddleware allow our action creator return a function
//  instead of an Object
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

unsubscribe = store.subscribe( () => console.log(store.getState()))

store.dispatch(fetchUser())