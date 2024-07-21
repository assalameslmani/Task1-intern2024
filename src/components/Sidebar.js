import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/products">Manage Products</Link>
      <Link to="/orders">View Orders</Link>
      <Link to="/users">User Accounts</Link>
    </div>
  );
};

export default Sidebar;
