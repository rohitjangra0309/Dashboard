function Card({ title, description, icon, color = "blue" }) {
  const colorVariants = {
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
  }

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header with gradient */}
      <div className={`h-32 bg-gradient-to-r ${colorVariants[color]} flex items-center justify-center`}>
        <span className="text-4xl text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        
        {/* Action button */}
        <button className={`mt-4 px-4 py-2 bg-gradient-to-r ${colorVariants[color]} text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Card 