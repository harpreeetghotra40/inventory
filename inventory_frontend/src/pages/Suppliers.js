import React from 'react';

// sub-components import
import AddSupplier from './AddSupplier';
import Card from './Card';

// API funtions import
import { getAllSuppliers } from '../config/supplier.util';

// styles import
import { Typography } from '@material-ui/core';
import '../styles/supplier.styles.scss';

class Suppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suppliers: [],
    };
  }

  //updateSuppliers
  updateSuppliers = (newSupplier) => {
    console.log(newSupplier);
    let newSupplierList = this.state.suppliers;
    newSupplierList.push(newSupplier);
    this.setState({ suppliers: newSupplierList });
    this.props.setVendors(this.state.suppliers);
  };

  // show the Add New Supplier Modal
  showAndHideModal(visibilityOfModal) {
    document.querySelector('#supplier-modal').style.visibility =
      visibilityOfModal;
  }

  //  fetch all the suppliers from the API
  async fetchSuppliersFromAPI() {
    let response = await getAllSuppliers();
    this.setState({ suppliers: response });
  }

  componentDidMount() {
    this.fetchSuppliersFromAPI();
  }

  render() {
    return (
      <div className="content-border">
        <div className="page-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
            <button onClick={() => this.showAndHideModal('visible')}>
              New Supplier
            </button>
          </div>
        </div>
        <AddSupplier
          showAndHideModal={this.showAndHideModal}
          updateSuppliers={this.updateSuppliers}
        />
        <div className="supplier-card-container">
          {Array.isArray(this.state.suppliers)
            ? this.state.suppliers.map((supplier) => (
                <Card supplier={supplier} key={supplier._id} />
              ))
            : console.log('No Suppliers found')}
        </div>
      </div>
    );
  }
}

export default Suppliers;
