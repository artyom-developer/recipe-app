import axios from 'axios';

import { User } from '../models/user';

const baseUrl = "https://jsonplaceholder.typicode.com";

const getUsers = async () => {
  const response = await axios.get<User[]>(`${baseUrl}/users`); 
  return response;
};

const productUser = {
    getUsers,
};
  
  export default productUser;