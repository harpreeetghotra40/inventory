import React from 'react';

// import styles
import '../styles/inventory.styles.scss';
import { Divider, Typography } from '@material-ui/core';

// import API functions
import { addItemToInventory } from '../config/inventory.util';
import { getAllSuppliers } from '../config/supplier.util';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      supplierOptions: [],
      supplier: '',
      stock: 0,
      warning: 0,
      price: 0,
    };
  }

  onSubmitHandler = async (e) => {
    const res = await addItemToInventory(
      this.state.name,
      this.state.supplier,
      this.state.stock,
      this.state.warning,
      this.state.price
    );
    this.props.updateItems(res);
    this.props.showAndHideModal('hidden');
  };

  //  fetch all the suppliers from the API
  async fetchSuppliersFromAPI() {
    let response = await getAllSuppliers();
    this.setState({ supplierOptions: response });
  }

  componentDidMount() {
    this.fetchSuppliersFromAPI();
  }

  render() {
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
              this.onSubmitHandler();
            }}
          >
            <div className="label-box">
              <label htmlFor="Name">Item Name*</label>
            </div>
            <input
              value={this.state.name}
              placeholder="Item name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <div className="label-box">
              <label htmlFor="Supplier">Supplier</label>
            </div>
            <select
              value={this.state.supplier}
              placeholder="Supplier name"
              onChange={(e) => {
                this.setState({ supplier: e.target.value });
              }}
              disabled={this.state.supplierOptions.length === 0}
            >
              {this.state.supplierOptions.map((item) => (
                <option key={item.id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="input-45">
              <div style={{ paddingRight: '10%' }}>
                <div className="label-box">
                  <label htmlFor="Stock">Stock</label>
                </div>
                <input
                  type="number"
                  value={this.state.stock}
                  placeholder="Items in Stock"
                  onChange={(e) => this.setState({ stock: e.target.value })}
                />
              </div>
              <div>
                <div className="label-box">
                  <label htmlFor="Warning">Warning</label>
                </div>
                <input
                  type="number"
                  value={this.state.warning}
                  placeholder="0"
                  onChange={(e) => this.setState({ warning: e.target.value })}
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
                value={this.state.price}
                placeholder="0"
                onChange={(e) => this.setState({ price: e.target.value })}
              />
            </div>
            <button
              id="cancel-btn"
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  name: '',
                  supplier: '',
                  price: 0.0,
                  warning: 0,
                  stock: 0,
                });
                this.props.showAndHideModal('hidden');
              }}
            >
              Cancel
            </button>
            <button>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddItem;
