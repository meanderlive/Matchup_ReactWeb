// src/components/PurchaseHistory.js
import React, { useState, useEffect } from 'react';
import HeaderFour from "../component/layout/HeaderFour";
import FooterFour from "../component/layout/footerFour";

// Mock data for dating/matrimony
const mockData = [
    { id: 1, item: 'Premium Matchmaker Service', date: '2024-09-15', amount: '$19.99', status: 'Active', transactionId: 'TX1234567890', paymentMethod: 'Credit Card' },
    { id: 2, item: 'Gold Membership', date: '2024-08-22', amount: '$14.99', status: 'Completed', transactionId: 'TX0987654321', paymentMethod: 'PayPal' },
    { id: 3, item: 'Boost Profile Feature', date: '2024-07-10', amount: '$5.99', status: 'Expired', transactionId: 'TX1122334455', paymentMethod: 'Credit Card' }
  ];
  
  const PurchaseHistory = () => {
    const [purchases, setPurchases] = useState([]);
    const [expandedRow, setExpandedRow] = useState(null);
  
    useEffect(() => {
      // Simulate fetching data from an API
      setPurchases(mockData);
    }, []);
  
    const handleRowClick = (id) => {
      setExpandedRow(expandedRow === id ? null : id);
    };

  return (
    <div>
        <HeaderFour />
        <div className="main_h1 text-center">
            <h1>Purchase History</h1>
        </div>
    <div className="purchase-history container">
      <div className="summary">
        <p>Welcome back! Here is a detailed history of your in-app purchases and subscriptions. You can review your past transactions, check their statuses, and more.</p>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map(purchase => (
              <React.Fragment key={purchase.id}>
                <tr onClick={() => handleRowClick(purchase.id)} className="clickable-row">
                  <td>{purchase.item}</td>
                  <td>{purchase.date}</td>
                  <td>{purchase.amount}</td>
                  <td className={`status ${purchase.status.toLowerCase()}`}>{purchase.status}</td>
                  <td>{purchase.transactionId}</td>
                  <td>{purchase.paymentMethod}</td>
                </tr>
                {expandedRow === purchase.id && (
                  <tr className="accordion-row">
                    <td colSpan="6">
                      <div className="accordion-content">
                        <p><strong>Item:</strong> {purchase.item}</p>
                        <p><strong>Date:</strong> {purchase.date}</p>
                        <p><strong>Amount:</strong> {purchase.amount}</p>
                        <p><strong>Status:</strong> <span className={`status ${purchase.status.toLowerCase()}`}>{purchase.status}</span></p>
                        <p><strong>Transaction ID:</strong> {purchase.transactionId}</p>
                        <p><strong>Payment Method:</strong> {purchase.paymentMethod}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="actions">
        <button className="btn-primary">Export to CSV</button>
        <button className="btn-secondary">Contact Support</button>
      </div>
    </div>
    <FooterFour />
    </div>
  );
};

export default PurchaseHistory;
