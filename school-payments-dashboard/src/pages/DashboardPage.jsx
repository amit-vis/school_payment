import React, { useEffect } from 'react';
import { useTransactions } from '../context/TransactionsContext';
import TransactionsTable from '../components/TransactionsTable';

const DashboardPage = () => {
  const { transactions, getTransactions } = useTransactions();

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Transaction Overview</h1>
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default DashboardPage;
