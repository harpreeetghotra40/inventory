import React from 'react';

// import styles for table
import '../styles/itemTable.styles.scss';

const ItemTable = ({ items, suppliers }) => {
  const [displayItems, setDisplayItems] = React.useState(items);
  const [searchInput, setSearchInput] = React.useState('');

  React.useEffect(() => {
    const filterItems = () => {
      let newItems = items.filter((item) => {
        if (item.name.search(searchInput) >= 0) {
          return item;
        }
      });
      setDisplayItems(newItems);
    };
    filterItems();
  }, [searchInput, items]);

  return (
    <div className="item-table-container">
      <div className="search-input-form">
        <form id="suppliers-search-input" onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
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
          {displayItems.map((item) => {
            return (
              <tr className="item-row">
                <td className="table-items">{item.name}</td>
                <td className="table-items">{suppliers[item.supplierRef]}</td>
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
};

export default ItemTable;
