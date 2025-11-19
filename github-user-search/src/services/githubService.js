/**
 * @fileoverview Service for interacting with the GitHub API.
 * This version uses axios and implements a two-step fetch for detailed results.
 */
import axios from 'axios';

const SEARCH_API_URL = 'https://api.github.com/search/users';
const USER_API_URL = 'https://api.github.com/users';

/**
 * Fetches detailed profile information for a single user.
 * This is necessary because the search API returns minimal data.
 * @param {string} username - The login name of the user.
 * @returns {Promise<Object>} The detailed user profile data.
 */
const fetchUserDetails = async (username) => {
    const url = `${USER_API_URL}/${username}`;
    const response = await axios.get(url);
    return response.data;
};

/**
 * Searches for GitHub users based on advanced criteria and fetches their details.
 * @param {string} usernameQuery - The general search term.
 * @param {string} location - The location to filter by.
 * @param {number} minRepos - The minimum number of public repositories.
 * @returns {Promise<{items: Array<Object>, total_count: number}>} The processed results.
 */
export const searchUsers = async (usernameQuery, location, minRepos) => {
  let query = usernameQuery.trim();
  
  // Append location filter (Task 2, Step 2)
  if (location.trim()) {
    query += `+location:${location.trim()}`;
  }

  // Append minRepos filter (Task 2, Step 2)
  if (minRepos && minRepos > 0) {
    query += `+repos:>=${minRepos}`;
  }

  // Use a default search term if all criteria are empty to prevent API error
  if (!query) query = 'type:user'; 
  
  // Use a low per_page count (5) to conserve rate limits
  const fullUrl = `${SEARCH_API_URL}?q=${encodeURIComponent(query)}&per_page=5`; 

  try {
    const searchResponse = await axios.get(fullUrl);
    const minimalUsers = searchResponse.data.items;
    
    // Task 2, Step 3: Fetch detailed information for each user concurrently
    const detailedUsersPromises = minimalUsers.map(user => fetchUserDetails(user.login));
    const detailedUsers = await Promise.all(detailedUsersPromises);

    return {
        items: detailedUsers, // These now include location and public_repos
        total_count: searchResponse.data.total_count
    };

  } catch (error) {
    if (error.response && error.response.status === 403) {
      throw new Error('GitHub API rate limit exceeded. Please wait a minute and try again.');
    }
    console.error("Fetch error:", error);
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

// Placeholder for Task 1 compatibility (if required for single user search)
export const fetchUserData = async (username) => {
    const url = `${USER_API_URL}/${username}`;
    const response = await axios.get(url);
    return response.data;
};
