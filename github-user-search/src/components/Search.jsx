import React, { useState } from 'react';
// FIX: Ensure both searchUsers (Task 2) and fetchUserData (Task 1) are imported
import { searchUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  // State for advanced search inputs (Task 2, Step 1)
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  
  // State for search results
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  // State for single-user search result (Task 1 state)
  const [singleUser, setSingleUser] = useState(null);

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);
    setSingleUser(null);
    setTotalCount(0);

    const numericRepos = parseInt(minRepos || '0');
    const hasAdvancedFilters = location.trim() || numericRepos > 0;

    // --- Task 1 Logic Check: If only a username is provided, do a single user fetch ---
    if (username.trim() && !hasAdvancedFilters) {
        try {
            // Task 1: Basic search implementation
            const userData = await fetchUserData(username.trim()); 
            setSingleUser(userData);
            setError(null);
        } catch (err) {
            setError('Looks like we cant find the user.');
            setSingleUser(null);
        } finally {
            setLoading(false);
        }
        return; 
    }

    // --- Task 2 Logic: Advanced Search ---

    // Validation for advanced search
    if (!username.trim() && !location.trim() && numericRepos === 0) {
        setError("Please enter a keyword or use at least one advanced filter.");
        setLoading(false);
        return;
    }

    try {
      // Call the extended service function (Task 2, Step 2)
      const data = await searchUsers(username, location, numericRepos);
      setUsers(data.items);
      setTotalCount(data.total_count);
    } catch (err) {
      setError(err.message || 'An unknown error occurred during search.');
    } finally {
      setLoading(false);
    }
  };
    // ... (rest of the component's render logic, which is fine) ...
  const renderSingleUser = () => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-gray-800 mb-2">User Found (Task 1 Result):</h3>
        <div className="flex items-center">
            <img src={singleUser.avatar_url} alt={`${singleUser.login} avatar`} className="w-16 h-16 rounded-full mr-4"/>
            <div>
                <p className="text-lg font-semibold">{singleUser.name || singleUser.login}</p>
                <p className="text-sm text-gray-500">@{singleUser.login}</p>
                <a href={singleUser.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">View Profile</a>
            </div>
        </div>
        
    </div>
  );

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        <span role="img" aria-label="github logo">🔍</span> GitHub User Search
      </h1>
      
      {/* Search Form (Task 2, Step 1: UI Enhancement) */}
      <form onSubmit={handleAdvancedSearch} className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-2xl mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Advanced Search Filters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          
          {/* Username Input */}
          <div className="md:col-span-3">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1">
              Username/Keyword
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., octocat, react"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>
          
          {/* Location Input (Advanced Criteria) */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Nairobi, London"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* Min Repositories Input (Advanced Criteria) */}
          <div>
            <label htmlFor="minRepos" className="block text-sm font-semibold text-gray-700 mb-1">
              Min. Repositories
            </label>
            <input
              id="minRepos"
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="e.g., 50"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>
          
          <div className="hidden md:block"></div> {/* Spacer for layout */}

        </div>
        
        {/* Search Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200 ease-in-out disabled:bg-blue-400 text-lg"
        >
          {loading ? 'Loading...' : 'Search Users'}
        </button>
      </form>

      {/* Results Display (Tasks 1 & 2) */}
      <div className="max-w-3xl mx-auto mt-8">
        
        {loading && <p className="text-center text-xl p-4 text-blue-600 font-semibold">Loading...</p>}

        {error && (
          <p className="p-4 bg-red-100 text-red-700 border border-red-400 rounded-lg mb-6 font-medium text-center">
            Error: {error}
          </p>
        )}

        {/* Task 1 Single User Result */}
        {singleUser && renderSingleUser()}

        {/* Task 2 Advanced Search Results */}
        {totalCount > 0 && (
          <p className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
            Results: **{totalCount.toLocaleString()}** user(s) found. Displaying {users.length} detailed result(s).
          </p>
        )}

        {/* User List */}
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center bg-white p-5 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition duration-200">
              
              {/* Avatar */}
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="w-16 h-16 rounded-full mr-4 border-2 border-gray-200"
              />
              
              <div className="flex-grow">
                {/* Username and Profile Link */}
                <h3 className="text-xl font-bold text-blue-800 hover:text-blue-600">
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
                </h3>
                
                {/* Detailed Information (Location & Repos) */}
                <div className="flex flex-wrap gap-x-4 text-gray-600 mt-1">
                    <span className="flex items-center text-sm font-medium">
                        <span role="img" aria-label="location" className="mr-1">📍</span> 
                        {user.location || 'Location Not Set'}
                    </span>
                    <span className="flex items-center text-sm font-medium">
                        <span role="img" aria-label="repositories" className="mr-1">📚</span> 
                        {user.public_repos !== undefined ? `${user.public_repos} Repos` : 'N/A Repos'}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results Message */}
        {!loading && !error && totalCount === 0 && (username.trim() || location.trim() || minRepos) && (
             <p className="text-center p-6 bg-yellow-50 text-yellow-800 rounded-lg font-medium border border-yellow-300">
                 No users found matching your criteria. Try broadening your search!
             </p>
        )}
        
        {/* Pagination/Load More Note */}
        {totalCount > 5 && (
            <p className="text-center text-sm text-gray-600 mt-4 italic">
                {users.length} of {totalCount.toLocaleString()} results displayed. (A "Load More" button would go here for full pagination).
            </p>
        )}

      </div>
    </div>
  );
};

export default Search;
