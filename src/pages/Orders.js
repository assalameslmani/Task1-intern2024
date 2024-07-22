import React, { useState, useEffect } from 'react';


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingOrder, setEditingOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        const orderData = data.map((order, index) => ({
          id: order.id,
          customer: order.name,
          total: (index + 1) * 20,
          status: 'Pending',
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

  const handleUpdateStatus = (id, status) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status } : order));
  };

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const handleView = (order) => {
    setEditingOrder(order);
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
                <button onClick={() => handleView(order)}>View</button>
                <button onClick={() => handleUpdateStatus(order.id, 'Shipped')}>Ship</button>
                <button onClick={() => handleUpdateStatus(order.id, 'Delivered')}>Deliver</button>
                <button onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingOrder && (
        <div>
          <h2>Order Details</h2>
          <p>ID: {editingOrder.id}</p>
          <p>Customer: {editingOrder.customer}</p>
          <p>Total: ${editingOrder.total}</p>
          <p>Status: {editingOrder.status}</p>
        </div>
      )}
    </div>
  );
};

export default Orders;
