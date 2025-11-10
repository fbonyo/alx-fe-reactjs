import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '30px',
      backgroundColor: '#f8f9fa',
      margin: '20px',
      borderRadius: '10px',
      border: '2px solid #dee2e6'
    }}>
      <h2 style={{ color: '#495057', marginBottom: '20px' }}>Simple Counter</h2>
      <p style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: count > 0 ? 'green' : count < 0 ? 'red' : 'blue',
        margin: '20px 0'
      }}>
        Current Count: {count}
      </p>
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            margin: '0 5px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            margin: '0 5px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            margin: '0 5px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;