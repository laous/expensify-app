import React from 'react'
import { connect } from 'react-redux';
import {useState} from 'react';
import { addExpense, editExpense } from '../actions/expenses';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";;




function ExpensifyForm(props) {
    
    let exp = {
        description : '',
        amount : '',
        note: '',
        createdAt: moment().toDate(),
    };

    if(props.id){
        props.expenses.filter(
            (expense) => { 
                if(expense.id === props.id){
                    exp = expense;
                }
            }
        )

    }

    const [state, setstate] = useState({
        description:exp.description,
        note:exp.note,
        amount:exp.amount ,
        createdAt:exp.createdAt,
        focused: false 

    })

    const onDescriptionChange = (e) => {
        const description = e.target.value;
        setstate(() => ({description}));
    }

    const onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(
            /^\d*(\.\d{0,2})?$/
            )
        ){
            setstate(() => ({amount}));
        }      
    }

    const onNoteChange = (e) => {
        const note = e.target.value;
        setstate(() => ({note}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.add){
            props.dispatch(
                addExpense(state)
            )
        }else {
           props.dispatch(
            editExpense(props.id ,state)
           ) 
        }
    }

    return (
        <div>
            <form>
                <input 
                    type="text" 
                    value={state.description} 
                    placeholder="Description" 
                    onChange={onDescriptionChange}
                    autoFocus
                /><br/>

                <input 
                    type="text" 
                    value={state.note} 
                    placeholder="Note"
                    onChange={onNoteChange}
                /><br/>

                <input 
                    type="text" 
                    value={state.amount} 
                    placeholder="Amount"
                    onChange={onAmountChange}
                /><br/>

                <DatePicker selected={state.createdAt} onChange={(date) => setstate({createdAt: date})} />

                <button onClick={handleSubmit}>
                    {props.add ? "Add Expense" : "Edit Expense"}
                </button>
            </form>           
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses : state.expenses
    }
}

export default connect(mapStateToProps)(ExpensifyForm)
