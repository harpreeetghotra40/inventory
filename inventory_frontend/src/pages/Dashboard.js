import React from 'react';
import Navbar from './Navbar';
import Inventory from './Inventory';
import '../styles/dashboard.styles.scss';

const Dashboard = (props) => {
  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: '250px', marginRight: '10px' }}>
        <Inventory />
      </div>
    </div>
  );
};

export default Dashboard;
