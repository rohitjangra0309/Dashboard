import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Section */}
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="https://vite.dev" 
            target="_blank"
            className="block hover:scale-110 transition-transform duration-300"
          >
            <img 
              src={viteLogo} 
              className="w-24 h-24 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300" 
              alt="Vite logo" 
            />
          </a>
          <a 
            href="https://react.dev" 
            target="_blank"
            className="block hover:scale-110 transition-transform duration-300"
          >
            <img 
              src={reactLogo} 
              className="w-24 h-24 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all duration-300 animate-spin-slow" 
              alt="React logo" 
            />
          </a>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-white mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Vite + React + Tailwind
        </h1>

        {/* Counter Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20 shadow-2xl">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 mb-4"
          >
            Count is {count}
          </button>
          <p className="text-gray-300 text-lg">
            Edit <code className="bg-gray-800 px-2 py-1 rounded text-blue-400">src/App.jsx</code> and save to test HMR
          </p>
        </div>

        {/* Info Text */}
        <p className="text-gray-400 text-lg">
          Click on the Vite and React logos to learn more
        </p>

        {/* Tailwind Features Demo */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">🎨 Styling</h3>
            <p className="text-gray-300">Beautiful gradients and modern design</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">📱 Responsive</h3>
            <p className="text-gray-300">Mobile-first responsive design</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">⚡ Fast</h3>
            <p className="text-gray-300">Optimized with Vite build tool</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
