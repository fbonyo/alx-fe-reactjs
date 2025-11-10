function UserProfile(props) {
  return (
    <div style={{
      border: '2px solid #e0e0e0',
      padding: '20px',
      margin: '15px',
      borderRadius: '10px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: 'blue',
        fontSize: '1.8rem',
        marginBottom: '15px',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px'
      }}>
        {props.name}
      </h2>
      <p style={{ fontSize: '16px', margin: '8px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '16px', margin: '8px 0' }}>
        Bio: <span style={{ fontStyle: 'italic', color: '#555' }}>{props.bio}</span>
      </p>
    </div>
  );
}

export default UserProfile;