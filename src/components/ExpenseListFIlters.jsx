import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

function ExpenseListFilters(props) {
    return (
        <div>
            <input onChange= {
                (e) => props.dispatch(setTextFilter(e.target.value))
            }/>
            <select  defaultValue='amount' onChange= {(e) => {
                e.target.value === 'amount' ?  props.dispatch(sortByAmount()) : props.dispatch(sortByDate()) ;
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }

}

export default connect(mapStateToProps)(ExpenseListFilters)
