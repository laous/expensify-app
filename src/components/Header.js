import React from 'react';
import {NavLink} from 'react-router-dom';


function Header(){

    return(
        <div>            
            <h1>React Router</h1>
            <ul>
                <li><NavLink to="/" activeClassName="is-active" exact={true} className="nav-link">Home</NavLink></li>
                <li><NavLink to="/AddExpense" activeClassName="is-active" className="nav-link">Add Expense</NavLink></li>
                <li><NavLink to="/Help" activeClassName="is-active" className="nav-link">Help</NavLink></li>
                <li><NavLink to="/404" activeClassName="is-active" className="nav-link" >Not Found</NavLink></li>
                
                <li></li>
            </ul>
            
            
                              
        </div>
    );

}

export default Header;