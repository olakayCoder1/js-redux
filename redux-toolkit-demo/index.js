const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/icecreamSlice').iceCreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers



// console.log(store.getState())

const unsubscribe = store.subscribe(()=> {})


// store.dispatch(cakeActions.restocked(5))
// store.dispatch(cakeActions.ordered())
// store.dispatch(iceCreamActions.restocked(5))
// store.dispatch(iceCreamActions.restocked(5))
store.dispatch(fetchUsers())


unsubscribe()
