import React from 'react';
import { logout } from '../config/Authentication';

const Dashboard = (props) => {
  return (
    <div>
      Dashboard
      <button
        onClick={() =>
          logout(() => {
            props.history.push('/signup');
          })
        }
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
