import React, { createContext, useContext, useState } from 'react';
import { fetchTransactions, fetchTransactionBySchool, checkTransactionStatus } from '../api/transactionsAPI';

const TransactionsContext = createContext();

export const useTransactions = () => useContext(TransactionsContext);

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const getTransactions = async (params) => {
    try {
      const data = await fetchTransactions(params);
      setTransactions(data);
    } catch (err) {
      setError('Failed to fetch transactions');
    }
  };

  const getTransactionBySchool = async (schoolId) => {
    try {
      const data = await fetchTransactionBySchool(schoolId);
      setTransactionDetails(data);
    } catch (err) {
      setError('Failed to fetch transactions by school');
    }
  };

  const getTransactionStatus = async (customOrderId) => {
    try {
      const data = await checkTransactionStatus(customOrderId);
      setStatus(data.status);
    } catch (err) {
      setError('Transaction not found');
    }
  };

  return (
    <TransactionsContext.Provider value={{
      transactions,
      transactionDetails,
      status,
      error,
      getTransactions,
      getTransactionBySchool,
      getTransactionStatus,
    }}>
      {children}
    </TransactionsContext.Provider>
  );
};
