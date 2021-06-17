import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Inventory from './Inventory';
import '../styles/dashboard.styles.scss';

const Dashboard = (props) => {
  const [activePage, setActivePage] = useState(<Inventory />);

  useEffect(() => {}, [activePage]);

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      <div style={{ margin: '10px 10px 10px 250px' }}>{activePage}</div>
    </div>
  );
};

export default Dashboard;
