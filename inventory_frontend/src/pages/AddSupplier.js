import React, { useState } from 'react';
import { Divider, Typography } from '@material-ui/core';
import { addSupplier } from '../config/supplier.util';

const AddSupplier = ({ showAndHideModal, updateSuppliers }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState();
  const [balance, setBalance] = useState();

  const resetToInitialState = () => {
    setName('');
    setAddress('');
    setPhone('');
    setBudget('');
    setBalance('');
  };

  const onSubmitHandler = async (e) => {
    const supplier = await addSupplier(name, address, phone, budget, balance);
    if (supplier) {
      updateSuppliers(supplier);
      resetToInitialState();
      showAndHideModal('hidden');
    }
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
            placeholder="Supplier name"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="label-box">
            <label htmlFor="Address">Address</label>
          </div>
          <input
            value={address}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="label-box">
            <label htmlFor="Phone Number">Phone Number</label>
          </div>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={phone}
            placeholder="123-456-7890"
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="input-45">
            <div style={{ paddingRight: '10%' }}>
              <div className="label-box">
                <label htmlFor="Budget">Budget</label>
              </div>
              <input
                type="number"
                value={budget}
                placeholder="Budget"
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <div>
              <div className="label-box">
                <label htmlFor="Balance">Balance</label>
              </div>
              <input
                type="number"
                value={balance}
                placeholder="0"
                onChange={(e) => setBalance(e.target.value)}
              />
            </div>
          </div>
          <div
            id="cancel-btn"
            onClick={(e) => {
              e.preventDefault();
              resetToInitialState();
              showAndHideModal('hidden');
            }}
          >
            Cancel
          </div>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddSupplier;
