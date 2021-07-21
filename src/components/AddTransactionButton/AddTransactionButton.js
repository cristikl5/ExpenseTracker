import React from 'react';

const AddTransactionButton = ({setShowTransaction, showTransaction}) => {
    return (
        <>
            <button className={'btn'}
                    onClick={setShowTransaction}>{showTransaction ? 'Close' : 'Add Income/Expense'}</button>
        </>
    );
};

export default AddTransactionButton;