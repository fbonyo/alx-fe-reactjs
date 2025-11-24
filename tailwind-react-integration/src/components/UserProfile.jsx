import PropTypes from "prop-types";

function UserProfile({ name, role, bio, avatar }) {
  return (
    <div className="bg-gray-100 p-2 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center
                    hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src={avatar}
        alt={name}
        className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto
                   hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-base sm:text-lg md:text-xl text-blue-800 my-4
                     hover:text-blue-500 transition-colors duration-300 ease-in-out">
        {name}
      </h1>
      <p className="text-gray-600 text-sm sm:text-sm md:text-base">
        <span className="block font-medium text-gray-700">{role}</span>
        <span className="block mt-2">{bio}</span>
      </p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
};

UserProfile.defaultProps = {
  name: "John Doe",
  role: "Developer at Example Co.",
  bio: "Loves to write code and explore new technologies.",
  avatar: "https://via.placeholder.com/150",
};

export default UserProfile;



