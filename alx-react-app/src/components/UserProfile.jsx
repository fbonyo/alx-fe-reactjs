// src/components/UserProfile.jsx - FINAL FIX (Using 'props')

const UserProfile = (props) => { // Must use 'props' keyword and arrow function syntax
  return (
    <div>
      <h2>{props.name}</h2> 
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}; // Note the semi-colon is outside the return statement

export default UserProfile;