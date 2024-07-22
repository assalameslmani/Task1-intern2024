import React, { useState, useEffect } from 'react';


const Users = () => {
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    const fetchUsers = async () => {
     
      const userData = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      ];
      setUsers(userData);
    };

    fetchUsers();
  }, []);

  const handleEdit = (id) => {

    console.log('Edit user with ID:', id);
  };

  const handleDelete = (id) => {

    console.log('Delete user with ID:', id);
  };

  return (
    <div>
      <h1>User Accounts</h1>
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
                <button onClick={() => handleEdit(user.id)}>Edit</button>
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
