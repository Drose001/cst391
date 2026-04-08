import axios from 'axios';

const baseURL = 'http://localhost:3000';

const dataSource = {
  async get(path) {
    try {
      const response = await axios.get(baseURL + path);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};

export default dataSource;