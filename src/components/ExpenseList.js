import React from 'react';
import { connect } from "react-redux";
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpense } from '../selectors/expenses';
import ExpenseListFilters from './ExpenseListFIlters';

function ExpenseList(props) {
    return (
        <div>
            Viewing {props.expenses.length} items.<br/>
            Expense List items: 
            <ExpenseListFilters/>
            {props.expenses.map(
                (expense) => {
                    return <ExpenseListItem {...expense} key={expense.id} />
                }
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpense(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList)
