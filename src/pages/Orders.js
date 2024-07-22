import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        // Simulate order data by adding customer and total
        const orderData = data.map((order, index) => ({
          id: order.id,
          customer: order.name,
          total: (index + 1) * 20, // Dummy total
          status: 'Pending', // Dummy status
        }));
        setOrders(orderData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
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

  if (loading) {
    return <p>Loading orders...</p>;
  }

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

