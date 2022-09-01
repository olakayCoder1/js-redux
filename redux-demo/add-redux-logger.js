const redux = require('redux')
// Requiring the logger library
const reduxLogger = require('redux-logger')
const binActionCreators = redux.bindActionCreators
const combineReducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware


// instantiating the store statce
const createStore = redux.createStore
// instantiating the logger state
const logger = reduxLogger.createLogger()
// CAKE APPLICATION  
const cakeInitailState = {
    numberOfCakes : 10,
}
//  cake functinality redux phrase
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
//  action creator is a function that return an action 
// cake  action creator 
function orderCake(){
    return  {
        type: CAKE_ORDERED,
        payload : 1 
    }
}
function restockCake( quantity = 1){
    return  {
        type: CAKE_RESTOCKED,
        payload : quantity 
    }
}

// ICECREAM APPLICATION  
const iceCreamInitailState = {
    numberOfIceCream : 30,
}
//  icecream functinality redux phrase
const ICECREAM_ORDERED = 'ICREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICREAM_RESTOCKED'


//  action creator is a function that return an action 
// icecream  action creator 
function orderIceCream(){
    return  {
        type: ICECREAM_ORDERED,
        payload : 1 
    }
}
function restockIceCream( quantity = 1){
    return  {
        type: ICECREAM_RESTOCKED,
        payload : quantity 
    }
}


//  CAKE REDUCER 
const cakeReducer = ( state = cakeInitailState , action ) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes : state.numberOfCakes - 1
            }
        case CAKE_RESTOCKED :
            return {
                ...state ,
                numberOfCakes : state.numberOfCakes + action.payload 
            }
        default :
            return {
                ...state
            }
    }
}

//  ICECREAM REDUCER 
const iceCreamReducer = ( state =  iceCreamInitailState , action ) =>{
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                    ...state,
                    numberOfIceCream : state.numberOfIceCream - 1
                }
        case ICECREAM_RESTOCKED :
            return {
                ...state ,
                numberOfIceCream : state.numberOfIceCream + action.payload 
            }
        default :
            return {
                ...state
            }
    }
}

//  Note reducer combining must come before initialising state class
const rootReducer = combineReducer({
    cake : cakeReducer ,
    icecream : iceCreamReducer 
})


//  redux store holding the application state 
const store = createStore(rootReducer, applyMiddleware(logger))

console.log(store.getState())


//  the redux.bindActionCreators is used to combine multiple action creator 
const actions = binActionCreators({ orderCake , restockCake , orderIceCream , restockIceCream } , store.dispatch )


unsubscribe = store.subscribe( () => {})


actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderIceCream()

unsubscribe()
