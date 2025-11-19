import axios from 'axios';

// Add this line to test environment variables
console.log('Environment API URL:', import.meta.env.VITE_APP_GITHUB_API_URL);

const GITHUB_API_BASE = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';

const githubAPI = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

// Rest of your code remains the same...
export const searchUsers = async (username) => {
  try {
    const response = await githubAPI.get(`/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};