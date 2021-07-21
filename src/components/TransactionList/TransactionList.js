import React, {useContext} from 'react';
import {GlobalContext} from "../../context/GlobalState";
import TransactionItem from "../TransactionItem/TransactionItem";

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)

    return (
        <>
            <h3>History</h3>
            <ul className={'list'}>
                {transactions.map((transaction, index) => {
                    return (
                        <TransactionItem key={index} transaction={transaction}/>
                    )
                })}

            </ul>
        </>
    );
};

export default TransactionList;