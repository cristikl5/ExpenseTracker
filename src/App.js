import React, {useState} from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import TransactionList from "./components/TransactionList/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import {GlobalProvider} from "./context/GlobalState";
import AddTransactionButton from "./components/AddTransactionButton/AddTransactionButton";

const App = () => {
    const [showAddTransaction, setShowAddTransaction] = useState(false);

    const showTransactionHandler = () => {
        setShowAddTransaction(!showAddTransaction)
    }
    return (
        <GlobalProvider>
            <Header/>
            <div className={'container'}>
                <Balance/>
                <IncomeExpense/>
                <TransactionList/>
                <AddTransactionButton setShowTransaction={showTransactionHandler} showTransaction={showAddTransaction}/>
                {showAddTransaction ? <AddTransaction/> : null}
            </div>
        </GlobalProvider>
    );
};

export default App;