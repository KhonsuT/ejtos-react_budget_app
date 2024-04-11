
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,currency,dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value>20000) {
            alert("Exceed Upper Limit Please Choose Between 1-20000");
        } else if (event.target.value<totalExpenses) {
            alert("Expense More than Budget");
        }
        dispatch({
            type: "SET_BUDGET",
            payload: event.target.value
        })
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value = {budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;