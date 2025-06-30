import Card from './Card'

function Dashboard() {
  const stats = [
    { label: 'Total Users', value: '12,345', change: '+12%', icon: '👥' },
    { label: 'Revenue', value: '$54,321', change: '+8%', icon: '💰' },
    { label: 'Orders', value: '1,234', change: '+23%', icon: '📦' },
    { label: 'Growth', value: '89%', change: '+5%', icon: '📈' }
  ]

  const features = [
    {
      title: "Responsive Design",
      description: "Built with mobile-first approach using Tailwind's responsive utilities like sm:, md:, lg:, xl:",
      icon: "📱",
      color: "blue"
    },
    {
      title: "Dark Mode Support",
      description: "Easy dark mode implementation with dark: prefix classes for seamless theme switching",
      icon: "🌙",
      color: "purple"
    },
    {
      title: "Custom Components",
      description: "Reusable components styled with Tailwind utilities for consistent design patterns",
      icon: "🎨",
      color: "green"
    },
    {
      title: "Interactive Elements",
      description: "Hover effects, transitions, and transforms using Tailwind's state variants",
      icon: "✨",
      color: "pink"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Tailwind CSS Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Explore the power of utility-first CSS framework
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-green-500 text-sm font-medium bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={feature.color}
              />
            ))}
          </div>
        </section>

        {/* Code Example Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Tailwind Examples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Layout & Spacing</h3>
              <code className="block bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                {`<div className="flex items-center justify-between p-4 space-x-4">
  <h1 className="text-2xl font-bold">Title</h1>
  <button className="px-4 py-2 bg-blue-500 text-white rounded">
    Button
  </button>
</div>`}
              </code>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Colors & Effects</h3>
              <code className="block bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                {`<div className="bg-gradient-to-r from-purple-500 to-pink-500 
           rounded-lg shadow-lg hover:shadow-xl 
           transform hover:scale-105 transition-all">
  Content here
</div>`}
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard 