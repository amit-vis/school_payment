import React from 'react';

const TransactionsTable = ({ transactions }) => (
  <table className="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th>Collect ID</th>
        <th>School ID</th>
        <th>Gateway</th>
        <th>Order Amount</th>
        <th>Transaction Amount</th>
        <th>Status</th>
        <th>Custom Order ID</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((tx) => (
        <tr key={tx.custom_order_id}>
          <td>{tx.collect_id}</td>
          <td>{tx.school_id}</td>
          <td>{tx.gateway}</td>
          <td>{tx.order_amount}</td>
          <td>{tx.transaction_amount}</td>
          <td>{tx.status}</td>
          <td>{tx.custom_order_id}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionsTable;
