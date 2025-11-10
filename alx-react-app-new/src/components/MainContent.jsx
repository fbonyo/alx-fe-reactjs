function MainContent() {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#f5f5f5',
      margin: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid navy', paddingBottom: '10px' }}>
        About My Favorite Cities
      </h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
        I love to visit New York, Paris, and Tokyo. These cities offer amazing culture, food, and experiences that make traveling unforgettable.
      </p>
      <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
        <li style={{ margin: '10px 0', color: '#444' }}>New York - The city that never sleeps</li>
        <li style={{ margin: '10px 0', color: '#444' }}>Paris - The city of love and lights</li>
        <li style={{ margin: '10px 0', color: '#444' }}>Tokyo - A blend of tradition and modernity</li>
      </ul>
    </main>
  );
}

export default MainContent;