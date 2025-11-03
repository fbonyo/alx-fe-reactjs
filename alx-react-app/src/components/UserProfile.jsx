// src/components/UserProfile.jsx

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '20px', maxWidth: '300px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;