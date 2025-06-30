import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import './Dashboard.css'
import ChartsContainer from '../Charts/ChartsContainer'

function Dashboard() {
  // Sample data for charts
  const brandContentData = [
    { name: '17 May 24', value: 0 },
    { name: '18 May 24', value: 15 },
    { name: '19 May 24', value: 45 },
    { name: '20 May 24', value: 60 },
    { name: '21 May 24', value: 75 },
  ]

  const assessmentData = [
    { name: '17 May 24', value: 0 },
    { name: '18 May 24', value: 20 },
    { name: '19 May 24', value: 50 },
    { name: '20 May 24', value: 70 },
    { name: '21 May 24', value: 85 },
  ]

  // BGR Categories data
  const bgrCategories = [
    { name: 'Category 01', score: '₹100 / INR', status: 'success' },
    { name: 'Category 02', score: '₹100 / INR', status: 'success' },
    { name: 'Category 03', score: '₹100 / INR', status: 'error' },
    { name: 'Category 04', score: '₹100 / INR', status: 'error' },
    { name: 'Assessment', score: '₹100 / INR', status: 'success' },
    { name: 'Overall', score: '₹100 / INR', status: 'success' },
  ]

  // SKUs data
  const skuData = [
    {
      name: 'HM Face - Cleansing - New All in One...',
      contentScore: 10.0,
      titleCoverage: 16.0,
      images: 16.0,
      bulletPoints: 16.0,
      description: 16.0,
      aPlus: 'NR',
      reviews: 50.0,
      status: { content: 'error', title: 'error', images: 'error', bullet: 'error', desc: 'error', reviews: 'success' }
    },
    {
      name: 'HM Pore Strips - Nose',
      contentScore: 16.0,
      titleCoverage: 16.0,
      images: 16.0,
      bulletPoints: 16.0,
      description: 16.0,
      aPlus: 'NR',
      reviews: 50.0,
      status: { content: 'error', title: 'error', images: 'error', bullet: 'error', desc: 'error', reviews: 'success' }
    },
    {
      name: 'HM Face - Cleansing - New All in One...',
      contentScore: 10.0,
      titleCoverage: 16.0,
      images: 16.0,
      bulletPoints: 16.0,
      description: 16.0,
      aPlus: 'NR',
      reviews: 50.0,
      status: { content: 'success', title: 'success', images: 'success', bullet: 'success', desc: 'success', reviews: 'success' }
    },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        
        <ChartsContainer />

        {/* BGR Section */}
        <div className="bgr-section">
          <div className="bgr-header">
            <div className="bgr-title-row">
              <h2 className="bgr-title">BGR</h2>
              <button className="search-button">Search</button>
            </div>
          </div>
          <div className="bgr-content">
            <div className="bgr-grid">
              {bgrCategories.map((category, index) => (
                <div key={index} className="bgr-category">
                  <div className="category-label">
                    {category.name}
                  </div>
                  <div className={`category-score ${category.status}`}>
                    {category.score}
                  </div>
                  <div className={`status-indicator ${category.status}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SKUs Section */}
        <div className="skus-section">
          <div className="skus-header">
            <div className="skus-title-row">
              <h2 className="skus-title">SKUs</h2>
              <div className="skus-actions">
                <button className="action-button">Search</button>
                <button className="action-button">Action</button>
              </div>
            </div>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead className="table-header">
                <tr>
                  <th>SKU Name</th>
                  <th>Content Score</th>
                  <th>Title Coverage</th>
                  <th>Images</th>
                  <th>Bullet Points</th>
                  <th>Description</th>
                  <th>A+ Brand Store</th>
                  <th>Reviews</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {skuData.map((sku, index) => (
                  <tr key={index} className="table-row">
                    <td className="table-cell">
                      <div className="cell-content">
                        <div className="cell-text">
                          {sku.name}
                        </div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="cell-content">
                        <span className={`cell-text ${sku.status.content}`}>
                          {sku.contentScore}
                        </span>
                        <div className={`status-dot ${sku.status.content}`}></div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="cell-content">
                        <span className={`cell-text ${sku.status.title}`}>
                          {sku.titleCoverage}
                        </span>
                        <div className={`status-dot ${sku.status.title}`}></div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="cell-content">
                        <span className={`cell-text ${sku.status.images}`}>
                          {sku.images}
                        </span>
                        <div className={`status-dot ${sku.status.images}`}></div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="cell-content">
                        <span className={`cell-text ${sku.status.bullet}`}>
                          {sku.bulletPoints}
                        </span>
                        <div className={`status-dot ${sku.status.bullet}`}></div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <div className="cell-content">
                        <span className={`cell-text ${sku.status.desc}`}>
                          {sku.description}
                        </span>
                        <div className={`status-dot ${sku.status.desc}`}></div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <span className="cell-text muted">{sku.aPlus}</span>
                    </td>
                    <td className="table-cell">
                      <div className="cell-content">
                        <span className={`cell-text ${sku.status.reviews}`}>
                          {sku.reviews}
                        </span>
                        <div className={`status-dot ${sku.status.reviews}`}></div>
                      </div>
                    </td>
                    <td className="table-cell">
                      <button className="menu-button">
                        ⋯
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <div className="table-pagination">
              1-7 of 100 SKUs
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 