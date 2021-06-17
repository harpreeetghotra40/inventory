import React from 'react';
import '../styles/supplier.styles.scss';
import { Divider } from '@material-ui/core';
import MadPenguinLogo from '../images/mad-penguin-logo.jpg';

const Card = () => {
  return (
    <div className="supplier-card-container">
      <div className="card content-border">
        <div className="upper-deck">
          <div className="card-image-container">
            <img
              src={MadPenguinLogo}
              alt="Mad Penguin Coffee"
              className="card-image"
            />
          </div>
          <div className="supplier-info-upper">
            <h4>Mad Penguin Coffee</h4>
            <p className="card-sub">Addresss</p>
            <p>
              128 Southern St
              <br /> Floral Park, NY
            </p>
            <p className="card-sub">Phone</p>
            <p>917-123-0987</p>
          </div>
        </div>
        <Divider />
        <div className="lower-deck">
          <div className="lower-deck-info-container">
            <span className="left-sub">Budget</span>{' '}
            <span>
              <strong>$4000</strong> per month
            </span>
          </div>
          <div className="lower-deck-info-container">
            <span className="left-sub">Balance</span>{' '}
            <span>
              <strong>$1995</strong> remaining
            </span>
          </div>
          <div className="lower-deck-info-container">
            <span className="left-sub">Last Ordered</span>{' '}
            <span>
              <strong>02 June 2021</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
