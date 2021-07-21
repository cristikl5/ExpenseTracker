import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext)
    const amount = transactions.map(transation => transation.amount)
    const profit = amount.filter((amount) => amount > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    const expenses = (amount.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)
    return (
        <div className={'inc-exp-container'}>
            <div>
                <h4>Income</h4>
                <p className={'money plus'}>+${profit}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className={'money minus'}>-${expenses}</p>
            </div>
        </div>
    );
};

export default IncomeExpense;