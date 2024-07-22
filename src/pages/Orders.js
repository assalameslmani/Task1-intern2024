import React, { useState, useEffect } from 'react';


const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {

      const orderData = [
        { id: 1, customer: 'John Doe', total: 150, status: 'Pending' },
        { id: 2, customer: 'Jane Smith', total: 250, status: 'Shipped' },
      ];
      setOrders(orderData);
    };

    fetchOrders();
  }, []);

  const handleView = (id) => {

    console.log('View details of order with ID:', id);
  };

  const handleUpdateStatus = (id, status) => {

    console.log('Update status of order with ID:', id, 'to:', status);
  };

  const handleDelete = (id) => {
    
    console.log('Delete order with ID:', id);
  };

  return (
    <div>
      <h1>Manage Orders</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleView(order.id)}>View</button>
                <button onClick={() => handleUpdateStatus(order.id, 'Shipped')}>Ship</button>
                <button onClick={() => handleUpdateStatus(order.id, 'Delivered')}>Deliver</button>
                <button onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

