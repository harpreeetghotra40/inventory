import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      Dashboard
      <button
        onClick={() => {
          localStorage.clear();
          props.history.push('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
