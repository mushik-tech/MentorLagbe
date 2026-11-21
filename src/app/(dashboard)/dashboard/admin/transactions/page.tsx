import { getTransactions } from '@/lib/api/payements';
import React from 'react';

const AllTransactionPage = async() => {

    const data = await getTransactions();

    return (
        <div>
            <h1>Transaction {data.length}</h1>
        </div>
    );
};

export default AllTransactionPage;