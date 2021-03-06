// set text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

//sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

//set start date 
export const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    startDate: date
})

//set end date 
export const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    endDate: date
})