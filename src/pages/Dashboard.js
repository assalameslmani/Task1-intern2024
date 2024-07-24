import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import '../App.css'; 

const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 300 },
  { name: 'Mar', sales: 200 },
  { name: 'Apr', sales: 278 },
  { name: 'May', sales: 189 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="stats">
        <div>Total Sales: $10000</div>
        <div>Total Orders: 500</div>
        <div>Total Products: 150</div>
        <div>Total Users: 200</div>
      </div>
      <div className="recharts-wrapper">
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;

