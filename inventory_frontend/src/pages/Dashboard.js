import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import Inventory from './Inventory';
import Suppliers from './Suppliers';

// API funtions import
import { getAllSuppliers } from '../config/supplier.util';

// styles import
import '../styles/dashboard.styles.scss';

const Dashboard = (props) => {
  const [activePage, setActivePage] = useState(<Inventory />);
  const [vendors, setVendors] = useState([]);

  // Setting up NavBar navigation
  const setActiveState = (num) => {
    if (num === 0) {
      setActivePage(<Inventory vendors={vendors} />);
    }
    if (num === 1) {
      setActivePage(<Suppliers setVendors={setVendors} />);
    }
  };

  // fetch all the suppliers form the API
  const fetchSuppliersFromAPI = useCallback(async () => {
    let response = await getAllSuppliers();
    setVendors(response);
  });

  // useEffect(() => {
  //   fetchSuppliersFromAPI();
  // }, []);

  return (
    <div>
      <Navbar setActiveState={setActiveState} />
      <div style={{ margin: '10px 10px 10px 250px' }}>{activePage}</div>
    </div>
  );
};

export default Dashboard;
