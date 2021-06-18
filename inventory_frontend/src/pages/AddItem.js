import React, { useState, useEffect, useCallback } from 'react';
import { Divider, Typography } from '@material-ui/core';
import { getAllSuppliers } from '../config/supplier.util';
import { addItemToInventory } from '../config/inventory.util';

const AddItem = ({ hideModal }) => {
  const [name, setName] = useState('');
  const [supplierOptions, setSupplierOptions] = useState([]);
  const [supplier, setSupplier] = useState(supplierOptions[0] ?? '');
  const [stock, setStock] = useState(0);
  const [warning, setWarning] = useState(0);
  const [price, setPrice] = useState(0.0);

  const onSubmitHandler = async (e) => {
    const res = await addItemToInventory(name, supplier, stock, warning, price);
    hideModal();
  };

  const setVendors = (vendors) => {
    const vendorsArray = vendors.map((vendor) => {
      let obj = { name: vendor.name, id: vendor._id };
      return obj;
    });
    setSupplierOptions(vendorsArray);
  };

  const fetchSuppliersFromAPI = useCallback(async () => {
    let response = await getAllSuppliers();
    setVendors(response);
  }, []);

  useEffect(() => {
    fetchSuppliersFromAPI();
  }, [fetchSuppliersFromAPI]);

  return (
    <div className="item-modal-container" id="inventory-modal">
      <div className="new-product-header">
        <Typography variant="h5">New Product</Typography>
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
            <label htmlFor="Name">Item Name*</label>
          </div>
          <input
            value={name}
            placeholder="Item name"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="label-box">
            <label htmlFor="Supplier">Supplier</label>
          </div>
          <select
            value={supplier}
            placeholder="Supplier name"
            onChange={(e) => {
              setSupplier(e.target.value);
            }}
            disabled={supplierOptions.length === 0}
          >
            {supplierOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="input-45">
            <div style={{ paddingRight: '10%' }}>
              <div className="label-box">
                <label htmlFor="Stock">In Stock</label>
              </div>
              <input
                type="number"
                value={stock}
                placeholder="Supplier name"
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div>
              <div className="label-box">
                <label htmlFor="Warning">Warning</label>
              </div>
              <input
                type="number"
                value={warning}
                placeholder="0"
                onChange={(e) => setWarning(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="label-box">
              <label htmlFor="Name">Price</label>
            </div>
            <input
              required
              type="number"
              value={price}
              placeholder="0"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            id="cancel-btn"
            onClick={(e) => {
              e.preventDefault();
              setName('');
              setSupplier('');
              setPrice(0);
              setWarning(0);
              setStock(0);
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

export default AddItem;
