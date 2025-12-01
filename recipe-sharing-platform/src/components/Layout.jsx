import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition">
                RecipeShare
              </span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`font-medium ${isHomePage ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'} transition`}
              >
                Home
              </Link>
              <a href="#" className="text-gray-600 hover:text-orange-500 font-medium transition">Browse</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 font-medium transition">Categories</a>
              <a href="#" className="text-gray-600 hover:text-orange-500 font-medium transition">About</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold hover:shadow-lg transition">
                Add Recipe
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <span>👤</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                <span className="text-2xl font-bold">RecipeShare</span>
              </div>
              <p className="text-gray-400">
                Sharing the joy of cooking with food lovers around the world.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
                <li><a href="#" className="hover:text-orange-400 transition">Browse Recipes</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Add Recipe</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-400 mb-4">Join our community of food enthusiasts.</p>
              <div className="flex space-x-4">
                {['📘', '🐦', '📷', '🎥'].map((icon, index) => (
                  <button key={index} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>© 2024 Recipe Sharing Platform. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
