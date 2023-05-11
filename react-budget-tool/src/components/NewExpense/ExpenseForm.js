import React, {useState} from 'react';

import './NewExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.targer.value
        // })

    }

    //When clicking Submit it makes sure that the page does not refresh
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            day: new Date(enteredDate)
        };

        console.log(expenseData)
        //Clear the data for each section ONCE submitted;
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    

    return (
        <form onSubmit ={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number"
                     value={enteredAmount} 
                     min="0.01" step="0.01" 
                     onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                    value={enteredDate}
                    type="date" 
                    min="2019-01-01" 
                    max="2023-05-01"
                    onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;