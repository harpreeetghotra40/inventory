import React from 'react';
import '../styles/supplier.styles.scss';
import { Divider } from '@material-ui/core';
import MadPenguinLogo from '../images/mad-penguin-logo.jpg';

const Card = ({ supplier }) => {
  return (
    <div className="card content-border" key={supplier.key}>
      <div className="upper-deck">
        <div className="card-image-container">
          <img
            src={MadPenguinLogo}
            alt="Mad Penguin Coffee"
            className="card-image"
          />
        </div>
        <div className="supplier-info-upper">
          <h4>{supplier.name}</h4>
          <p className="card-sub">Addresss</p>
          <p>{supplier.address}</p>
          <p className="card-sub">Phone</p>
          <p>{supplier.phone}</p>
        </div>
      </div>
      <Divider />
      <div className="lower-deck">
        <div className="lower-deck-info-container">
          <span className="left-sub">Budget</span>{' '}
          <span>
            <strong>${supplier.budget}</strong> per month
          </span>
        </div>
        <div className="lower-deck-info-container">
          <span className="left-sub">Balance</span>{' '}
          <span>
            <strong>${supplier.balance}</strong> remaining
          </span>
        </div>
        <div className="lower-deck-info-container">
          <span className="left-sub">Last Ordered</span>{' '}
          <span>
            <strong>{supplier.lastOrder}</strong>
          </span>
        </div>
        <div className="order-btn-div">
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
