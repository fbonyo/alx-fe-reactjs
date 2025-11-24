// src/App.jsx
import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Tailwind CSS + React
        </h1>
        <p className="text-gray-600 mb-6">
          Successfully integrated Tailwind CSS with React!
        </p>
        <div className="space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
            Primary Button
          </button>
          <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg transition duration-200">
            Secondary Button
          </button>
        </div>
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 text-sm">
            ✅ Tailwind CSS is working correctly!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App