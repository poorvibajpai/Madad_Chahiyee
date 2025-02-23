/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getUsers, addUser } from '../api/userAPI';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    category: '',
    field: '',
    phone: '',
    location: '',
    charge: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleAddUser = async () => {
    await addUser(newUser);
    fetchUsers();
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.category}</li>
        ))}
      </ul>

      <h3>Add User</h3>
      <input type="text" placeholder="Name" onChange={e => setNewUser({...newUser, name: e.target.value})} />
      <input type="text" placeholder="Category" onChange={e => setNewUser({...newUser, category: e.target.value})} />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default UserList;
