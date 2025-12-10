import React from 'react';

const TestResults = ({ passed, total }) => {
  return (
    <div data-testid="test-results">
      <h3>Test Results</h3>
      <p>Passed: {passed}/{total}</p>
      {passed === total ? (
        <p style={{ color: 'green' }}>✅ All tests passed!</p>
      ) : (
        <p style={{ color: 'red' }}>❌ Some tests failed</p>
      )}
    </div>
  );
};

export default TestResults;
