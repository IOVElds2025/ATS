import axios from 'axios';

export const registerUser = async ({ email, password }) => {
  try {
    const response = await axios.post('https://reqres.in/api/register', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error('Unexpected error');
  }
};
