import React from 'react';
import { Typography } from '@material-ui/core';
import '../styles/supplier.styles.scss';
import AddSupplier from './AddSupplier';
import Card from './Card';

const Suppliers = () => {
  const showModal = () => {
    document.querySelector('#supplier-modal').style.visibility = 'visible';
  };

  const hideModal = () => {
    document.querySelector('#supplier-modal').style.visibility = 'hidden';
  };

  return (
    <div className="content-border">
      <div className="supplier-header">
        <div>
          <Typography variant="h6" style={{ fontWeight: '500' }}>
            Suppliers
          </Typography>
        </div>
        <div>
          <form
            id="suppliers-search-input"
            onSubmit={(e) => e.preventDefault()}
          >
            <input placeholder="Search" />
          </form>
        </div>
        <div className="add-supplier">
          <button onClick={() => showModal()}>New Supplier</button>
        </div>
      </div>
      <AddSupplier hideModal={hideModal} />
      <Card />
    </div>
  );
};

export default Suppliers;
