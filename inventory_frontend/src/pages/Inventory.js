import React from 'react';

// sub components import
import AddItem from './AddItem';
import ItemTable from './ItemTable';

// import API functions
import { getAllItems } from '../config/inventory.util';
import { getAllSuppliers } from '../config/supplier.util';

// import styles
import { Typography } from '@material-ui/core';
import '../styles/inventory.styles.scss';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      vendors: {},
    };
  }

  // show the Add New Supplier Modal
  showAndHideModal(visibilityOfModal) {
    document.querySelector('#inventory-modal').style.visibility =
      visibilityOfModal;
  }

  //  fetch all the user's items from the API
  async fetchAllItemsFromAPI() {
    let response = await getAllItems();
    this.setState({ items: response });
  }

  // update items array
  updateItems = (newItem) => {
    console.log(newItem);
    let newItemArray = this.state.items;
    newItemArray.push(newItem);
    console.log(newItemArray);
    this.setState({ items: newItemArray });
  };

  // fetch all the suppliers form the API
  fetchSuppliersFromAPI = async () => {
    let response = await getAllSuppliers();

    // fucntion for getting suppliers from ObjectRef
    let newSupplierObj = {};
    for (let i = 0; i < response.length; i++) {
      newSupplierObj[response[i]._id] = response[i].name;
    }
    this.setState({ vendors: newSupplierObj });
  };

  componentDidMount() {
    this.fetchAllItemsFromAPI();
    this.fetchSuppliersFromAPI();
  }

  render() {
    return (
      <div className="content-border">
        <div className="page-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" style={{ fontWeight: '500' }}>
              Inventory
            </Typography>
          </div>
          <div className="add-supplier">
            <button onClick={() => this.showAndHideModal('visible')}>
              New Item
            </button>
          </div>
          <AddItem
            showAndHideModal={this.showAndHideModal}
            vendors={this.state.vendors}
            updateItems={this.updateItems}
          />
        </div>
        <div>
          <ItemTable items={this.state.items} suppliers={this.state.vendors} />
        </div>
      </div>
    );
  }
}

export default Inventory;
