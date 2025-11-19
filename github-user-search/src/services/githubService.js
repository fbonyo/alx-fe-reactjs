import axios from 'axios';

const GITHUB_API_BASE = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';

// Create axios instance with common config
const githubAPI = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    // GitHub API endpoint for user search: https://api.github.com/users/{username}
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    } else if (error.response && error.response.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    } else {
      throw new Error('Failed to fetch user data');
    }
  }
};

export default githubAPI;