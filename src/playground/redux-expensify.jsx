/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import { createStore , combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid'; // for unique ids

const demo = {
    expenses : [
        {
            id : uuidv4(),
            description : '',
            note : '',
            amount : 54350 ,
            createdAt : 0
        }
    ],
    filters : {
        text : 'rent',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    }
}

// add expense 

const addExpense  = ({
    description = '',
    note ='',
    amount = '',
    createdAt = 0
} = {}
) => ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

// remove expense 
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// edit expense 
const editExpense = (id,updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
)

// set text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

//sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

//set start date 
const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    startDate: date
})

//set end date 
const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    endDate: date
})

// expense reducer 

const expensesReducer  = (state = demo.expenses,  action ) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense] // push does change the state and we don't want that 
            break;
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) =>  id !== action.id )
            break;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(action.id === expense.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else {
                    return expense;
                }
            });
            break;
        default:
            return state
    }
}




//filters reducer
const filtersReducer = (state = demo.filters , action ) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
            break;
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            }
            break;
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }
            break;
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
            break;
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
            break;
        default:
            return state
    }
}


// time start from january 1st 1970

// get expenses with filters
const getVisibleExpense = (expenses , {text , sortBy , startDate , endDate}) => {

    return expenses.filter((expense)=>{
        const startDateMatch =  expense.createdAt >= startDate;
        const endDateMatch = expense.createdAt <= endDate ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;

        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a,b) => {
        if(sortBy === 'date'){
            return  a.createdAt < b.createdAt ? 1 : -1 ;
        }else if(sortBy === 'amount'){
            return a.amount > b.amount ? 1 : -1;
        }
    })
}
    





// store with combined reducers 

const store = createStore(
    combineReducers({
        expenses : expensesReducer ,
        filters : filtersReducer
    })
)

store.dispatch(
    setStartDate(100)
)
store.dispatch(setEndDate(200000))

store.dispatch(setTextFilter('oglobe'))

store.subscribe(() => {
    const state = store.getState();
    const expenses = state.expenses;
    const filters = state.filters;

    console.log(getVisibleExpense(expenses,filters));
})




const expense1 = store.dispatch(addExpense(
    {
        description: 'tram',
        amount: 6,
        createdAt: 10000
    }
));
const expense2 = store.dispatch(addExpense(
    {
        description: 'oglobe',
        amount: 14,
        createdAt: 200
    }
));




// console.log(expense2);
// store.dispatch(
//     removeExpense({id : expense1.expense.id})
// )

// store.dispatch(
//     editExpense( expense2.expense.id , {
//         amount:16,
//         note:'+2 pourvoir'
//     })
// )

// store.dispatch(
//     sortByDate()
// )


console.log(store.getState().filters)

store.dispatch(setStartDate(123))









export default store;