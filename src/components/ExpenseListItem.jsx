import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import {AiFillDelete} from 'react-icons/ai'
import {RiEditBoxLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

function ExpenseListItem({dispatch , id , description , amount , createdAt}) {
    const handleRemove = () => dispatch(removeExpense({id})) ;
    const editLink = "/EditExpense/"+id
    return (
        <div>
            <h3>{description}</h3>
            <p>Amount = {amount} - Creation Date = {createdAt}</p>
            <button onClick={handleRemove}><AiFillDelete /></button>
            <button ><Link to={editLink}> <RiEditBoxLine /></Link> </button>
            
        </div>
    )
}

export default connect()(ExpenseListItem)
  