import React, { useState, useEffect, useCallback } from 'react';
import { Typography } from '@material-ui/core';
import '../styles/supplier.styles.scss';
import AddSupplier from './AddSupplier';
import Card from './Card';
import { getAllSuppliers } from '../config/supplier.util';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const showModal = () => {
    document.querySelector('#supplier-modal').style.visibility = 'visible';
  };

  const hideModal = () => {
    document.querySelector('#supplier-modal').style.visibility = 'hidden';
  };

  const fetchSuppliersFromAPI = useCallback(async () => {
    let response = await getAllSuppliers();
    setSuppliers(response);
  }, []);

  useEffect(() => {
    fetchSuppliersFromAPI();
  }, [fetchSuppliersFromAPI]);

  return (
    <div className="content-border">
      <div className="supplier-header">
        <div>
          <Typography variant="h6" style={{ fontWeight: '500' }}>
            Suppliers
          </Typography>
          <div style={{ marginLeft: '30px' }}>
            <form
              id="suppliers-search-input"
              onSubmit={(e) => e.preventDefault()}
            >
              <input placeholder="Search" />
            </form>
          </div>
        </div>
        <div className="add-supplier">
          <button onClick={() => showModal()}>New Supplier</button>
        </div>
      </div>
      <AddSupplier
        hideModal={hideModal}
        fetchSuppliersFromAPI={fetchSuppliersFromAPI}
      />
      <div className="supplier-card-container">
        {Array.isArray(suppliers)
          ? suppliers.map((supplier) => (
              <Card supplier={supplier} key={supplier._id} />
            ))
          : console.log(suppliers)}
      </div>
    </div>
  );
};

export default Suppliers;
