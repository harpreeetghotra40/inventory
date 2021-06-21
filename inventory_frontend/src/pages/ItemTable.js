import React from 'react';

// import styles for table
import '../styles/itemTable.styles.scss';

class ItemTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayItems: this.props.items,
      searchInput: '',
    };
  }

  componentDidUpdate() {
    const filterItems = () => {
      let newItems = this.props.items.filter((item) => {
        if (item.name.search(this.state.searchInput) >= 0) {
          return item;
        }
      });
      this.setState({ displayItems: newItems });
    };
    filterItems();
  }

  render() {
    return (
      <div className="item-table-container">
        <div className="search-input-form">
          <form
            id="suppliers-search-input"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="Search"
              value={this.state.searchInput}
              onChange={(e) => this.setState({ searchInput: e.target.value })}
            />
          </form>
        </div>
        <table width="100%" className="item-table">
          <thead>
            <tr>
              <th className="table-header">Item</th>
              <th className="table-header">Supplier</th>
              <th className="table-header">Stock</th>
              <th className="table-header">Warning at</th>
              <th className="table-header">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayItems.map((item) => {
              return (
                <tr className="item-row">
                  <td className="table-items">{item.name}</td>
                  <td className="table-items">
                    {this.props.suppliers[item.supplierRef]}
                  </td>
                  <td className="table-items">{item.quantity}</td>
                  <td className="table-items">{item.warning}</td>
                  <td className="table-items">{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemTable;
