import axios from 'axios';

const baseURL = 'http://localhost:3000';

const dataSource = {
  async get(path) {
    try {
      const response = await axios.get(baseURL + path);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async post(path, data) {
    try {
      const response = await axios.post(baseURL + path, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

export default dataSource;