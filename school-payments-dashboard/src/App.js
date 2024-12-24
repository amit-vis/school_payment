import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TransactionsProvider } from './context/TransactionsContext';
import DashboardPage from './pages/DashboardPage';

const App = () => (
  <TransactionsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        
      </Routes>
    </Router>
  </TransactionsProvider>
);

export default App;
