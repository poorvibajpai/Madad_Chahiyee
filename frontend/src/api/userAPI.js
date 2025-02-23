import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Fetch all users
export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Users:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// Add a new user
export const addUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
  }
};
