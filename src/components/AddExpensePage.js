import React from 'react';
import { connect } from "react-redux";
import { addExpense } from '../actions/expenses';
import { getVisibleExpense } from '../selectors/expenses';
import ExpensifyForm from "./ExpensifyForm";


function AddExpensePage (props){
    return(

        <div>
            <ExpensifyForm   add={true}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpense(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(AddExpensePage)
