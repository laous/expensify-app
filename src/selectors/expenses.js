// time start from january 1st 1970

// get expenses with filters
export const getVisibleExpense = (expenses , {text , sortBy , startDate , endDate}) => {

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
