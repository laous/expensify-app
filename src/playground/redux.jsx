import { createStore } from "redux";


const incrementCount  = ({incrementBy = 1} ={}) => {
    return{
        type : 'INCREMENT',
        incrementBy

    }
}
const decrementCount  = ({decrementBy = 1} ={}) => {
    return{
        type : 'DECREMENT',
        decrementBy

    }
}


const countReducer = (state = {count : 0} , action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        break;
        case 'DECREMENT':
            // const decrementBy = typeof(action.decrementBy)==='number' ? action.decrementBy : 1 ;
        return {
            count: state.count - action.decrementBy
        };
        break;
        case 'RESET':
            return {
                count : 0
            }
        break;
        default:
            return state;   
        break;
    }

}

const store = createStore(countReducer())


// gets called everytime the state changes
store.subscribe(() =>{
    console.log(store.getState());
})

// to call it whenever we want
// const  unsubscribe = store.subscribe(() =>{
//     console.log(store.getState());
// })

// increment the count
store.dispatch( incrementCount());

// decrement
store.dispatch(decrementCount(4));

//reset 
store.dispatch(
    {
        type: 'RESET',
    }
)







export default store;

