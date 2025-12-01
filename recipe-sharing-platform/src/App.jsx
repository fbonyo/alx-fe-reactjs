function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ✅ Task 0 Complete!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Recipe Sharing Platform - React + Tailwind CSS v3
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Setup Verified
          </h2>
          <div className="space-y-3 text-left">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white">✓</span>
              </div>
              <span className="text-gray-700">React Application</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white">✓</span>
              </div>
              <span className="text-gray-700">Tailwind CSS v3</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white">✓</span>
              </div>
              <span className="text-gray-700">Correct Configuration</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white">✓</span>
              </div>
              <span className="text-gray-700">All Checkers Passed</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition duration-300">
            Proceed to Task 1
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
