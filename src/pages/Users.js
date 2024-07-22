import React, { useState, useEffect } from 'react';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAdd = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: '', email: '' });
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = () => {
    setUsers(users.map(user => user.id === editingUser.id ? editingUser : user));
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingUser) {
      setEditingUser({ ...editingUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h1>User Accounts</h1>
      <div>
        <input
          type="text"
          name="name"
          value={editingUser ? editingUser.name : newUser.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={editingUser ? editingUser.email : newUser.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {editingUser ? (
          <button onClick={handleUpdate}>Update User</button>
        ) : (
          <button onClick={handleAdd}>Add User</button>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

