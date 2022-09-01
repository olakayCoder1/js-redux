const  cakeActions = require('../cake/cakeSlice').cakeActions

const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numberOfIceCream : 20 
}
// the create slice class accept an object as an argument 
// with properties as follow
const iceCreamSlice = createSlice({
    name : 'icecream',
    initialState : initialState,
    reducers : {
        ordered : (state)=>{
            state.numberOfIceCream--
        },
        restocked : (state, action )=>{
            state.numberOfIceCream += action.payload
        }
    },
    // extraReducers : {
    //     ['cake/ordered'] : (state) => {
    //         state.numberOfIceCream--
    // }}

    // recommended way of adding extra reducer
    extraReducers : (builder) => {
        builder.addCase(cakeActions.restocked, (state, action) => {
            state.numberOfIceCream += action.payload
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions