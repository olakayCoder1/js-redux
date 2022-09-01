const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numberOfCakes : 20 
}
// the create slice class accept an object as an argument 
// with properties as follow
const cakeSlice = createSlice({
    name : 'cake',
    initialState : initialState,
    reducers : {
        ordered : (state)=>{
            state.numberOfCakes--
        },
        restocked : (state, action )=>{
            state.numberOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions