import React from 'react';

// sub components import
import AddItem from './AddItem';
import ItemTable from './ItemTable';

// import API functions
import { getAllItems } from '../config/inventory.util';

// import styles
import { Typography } from '@material-ui/core';
import '../styles/inventory.styles.scss';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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
    console.log(this.state.items);
  }

  componentDidMount() {
    this.fetchAllItemsFromAPI();
  }

  render() {
    return (
      <div className="content-border">
        <div className="page-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" style={{ fontWeight: '500' }}>
              Inventory
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
            <button onClick={() => this.showAndHideModal('visible')}>
              New Item
            </button>
          </div>
          <AddItem showAndHideModal={this.showAndHideModal} />
        </div>
        <div>
          <ItemTable />
        </div>
      </div>
    );
  }
}

export default Inventory;
