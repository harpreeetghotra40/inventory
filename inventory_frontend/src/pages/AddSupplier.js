import React, { useState } from 'react';
import { Divider, Typography } from '@material-ui/core';
import { addItemToInventory } from '../config/inventoryUtil';

const AddSupplier = ({ hideModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const onSubmitHandler = (e) => {
    // addItemToInventory(name, supplier, stock, warning, price);
  };
  return (
    <div className="item-modal-container" id="supplier-modal">
      <div className="new-product-header">
        <Typography variant="h5">New Supplier</Typography>
      </div>
      <Divider />
      <div className="item-container">
        <form
          id="add-item-form"
          className="add-item-form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler();
          }}
        >
          <div className="label-box">
            <label htmlFor="Name">Name*</label>
          </div>
          <input
            value={name}
            placeholder="Item name"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="label-box">
            <label htmlFor="Phone Number">Phone Number</label>
          </div>
          <input
            type="phone"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            id="cancel-btn"
            onClick={(e) => {
              e.preventDefault();
              setName('');
              setPhone();
              hideModal();
            }}
          >
            Cancel
          </button>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddSupplier;
