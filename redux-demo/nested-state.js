const redux = require('redux')
// IMMER LIBRARY for nested case
const produce = require('immer').produce



const createStore = redux.createStore

const initialState = {
    name : 'Olakay',
    address : {
        street : '123 kabby street',
        city : 'Lagos',
        country : 'Nigeria'
    }
}



const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_STREET = 'UPDATE_STREET'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_COUNTRY = 'UPDATE_COUNTRY'


const updateStreet = (str)=>{
    return {
        type : UPDATE_STREET,
        payload : str 
    }
}

const updateName = (str)=>{
    return {
        type : UPDATE_NAME,
        payload : str 
    }
}

const updateCity = (str)=>{
    return {
        type : UPDATE_CITY,
        payload : str 
    }
}

const updateCountry = (str)=>{
    return {
        type : UPDATE_COUNTRY,
        payload : str 
    }
}


const reducer = ( state = initialState , action ) => {
    switch(action.type){
        case UPDATE_STREET:


            // return {
            //     ...state,
            //     address : {
            //         ...state.address ,
            //         street : action.payload
            //     },
            // }
            // the produce function of the immer library helps us to convert our code to 
            // return statement above 
            return produce(state , (draft) => {
                 draft.address.street = action.payload
            })
        case UPDATE_NAME: 
            return produce(state , (draft) => {
                draft.name = action.payload
            })
        case UPDATE_CITY: 
            return produce(state , (draft) => {
                draft.address.city = action.payload
            })
        case UPDATE_COUNTRY: 
            return produce(state , (draft) => {
                draft.address.country = action.payload
            })
        default:{
            return state
        }
    }
}


const store = createStore(reducer)
console.log(store.getState())


unsubscribe = store.subscribe( () => console.log(store.getState()))


store.dispatch(updateName('Okobaba'))
store.dispatch(updateStreet('Okobaba street'))

unsubscribe()