import { connect } from "react-redux";
import {  editExpense } from "../actions/expenses";
import ExpensifyForm from "./ExpensifyForm";

function EditExpensePage (props){

    return(

        <div>
            <h3>Edit of {props.match.params.id}</h3>
            <ExpensifyForm id={props.match.params.id}/>
        </div>
    );
}

export default connect()(EditExpensePage)