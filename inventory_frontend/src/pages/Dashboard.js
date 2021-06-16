import React from 'react';
import Navbar from './Navbar';
import Inventory from './Inventory';
import '../styles/dashboard.styles.scss';

const Dashboard = (props) => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: '10px 10px 10px 250px' }}>
        <Inventory />
      </div>
    </div>
  );
};

export default Dashboard;
