import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setError(null);
    setUserData(null);
    
    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {/* Conditional Rendering based on state */}
      {loading && (
        <div className="loading-message">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {userData && (
        <div className="user-results">
          <h3>User Found:</h3>
          <div className="user-card">
            <img 
              src={userData.avatar_url} 
              alt={`${userData.login}'s avatar`}
              className="user-avatar"
            />
            <div className="user-info">
              <h4>{userData.name || userData.login}</h4>
              <p>Username: {userData.login}</p>
              {userData.bio && <p>Bio: {userData.bio}</p>}
              <p>Followers: {userData.followers} | Following: {userData.following}</p>
              <p>Public Repos: {userData.public_repos}</p>
              <a 
                href={userData.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="profile-link"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
