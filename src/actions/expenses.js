import { v4 as uuidv4 } from 'uuid'; // for unique ids

// add expense 

export const addExpense  = ({
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
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// edit expense 
export const editExpense = (id,updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
)