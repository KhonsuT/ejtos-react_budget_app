
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value>20000) {
            alert("Exceed Upper Limit Please Choose Between 1-20000");
        } else if (event.target.value<totalExpenses) {
            alert("Expense More than Budget");
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value = {newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;