import { useEffect, useState } from "react";
import { getUsers } from "./api/userAPI.js";

const Display = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user._id} className="border p-4 mb-2">
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p>Category: {user.category}</p>
          <p>Field: {user.field}</p>
          <p>Phone: {user.phone}</p>
          <p>Location: {user.location}</p>
          <p>Charge: ${user.charge}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;