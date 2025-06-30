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
      <div className="dashboardContainer">
        
        <ChartsContainer />

        {/* BGR Section */}
        <div className="bgrSection">
          <div className="bgrHeader">
            <div className="bgrTitleRow">
              <h2 className="bgrTitle">BGR</h2>
              <button className="searchButton">Search</button>
            </div>
          </div>
          <div className="bgrContent">
            <div className="bgrGrid">
              {bgrCategories.map((category, index) => (
                <div key={index} className="bgrCategory">
                  <div className="categoryLabel">
                    {category.name}
                  </div>
                  <div className={`categoryScore ${category.status}`}>
                    {category.score}
                  </div>
                  <div className={`statusIndicator ${category.status}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SKUs Section */}
        <div className="skusSection">
          <div className="skusHeader">
            <div className="skusTitleRow">
              <h2 className="skusTitle">SKUs</h2>
              <div className="skusActions">
                <button className="actionButton">Search</button>
                <button className="actionButton">Action</button>
              </div>
            </div>
          </div>
          <div className="tableContainer">
            <table className="dataTable">
              <thead className="tableHeader">
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
              <tbody className="tableBody">
                {skuData.map((sku, index) => (
                  <tr key={index} className="tableRow">
                    <td className="tableCell">
                      <div className="cellContent">
                        <div className="cellText">
                          {sku.name}
                        </div>
                      </div>
                    </td>
                    <td className="tableCell">
                      <div className="cellContent">
                        <span className={`cellText ${sku.status.content}`}>
                          {sku.contentScore}
                        </span>
                        <div className={`statusDot ${sku.status.content}`}></div>
                      </div>
                    </td>
                    <td className="tableCell">
                      <div className="cellContent">
                        <span className={`cellText ${sku.status.title}`}>
                          {sku.titleCoverage}
                        </span>
                        <div className={`statusDot ${sku.status.title}`}></div>
                      </div>
                    </td>
                    <td className="tableCell">
                      <div className="cellContent">
                        <span className={`cellText ${sku.status.images}`}>
                          {sku.images}
                        </span>
                        <div className={`statusDot ${sku.status.images}`}></div>
                      </div>
                    </td>
                    <td className="tableCell">
                      <div className="cellContent">
                        <span className={`cellText ${sku.status.bullet}`}>
                          {sku.bulletPoints}
                        </span>
                        <div className={`statusDot ${sku.status.bullet}`}></div>
                      </div>
                    </td>
                    <td className="tableCell">
                      <div className="cellContent">
                        <span className={`cellText ${sku.status.desc}`}>
                          {sku.description}
                        </span>
                        <div className={`statusDot ${sku.status.desc}`}></div>
                      </div>
                    </td>
                    <td className="tableCell">
                      <span className="cellText muted">{sku.aPlus}</span>
                    </td>
                    <td className="tableCell">
                      <div className="cellContent">
                        <span className={`cellText ${sku.status.reviews}`}>
                          {sku.reviews}
                        </span>
                        <div className={`statusDot ${sku.status.reviews}`}></div>
                      </div>
                    </td>
                    <td className="tableCell">
                      <button className="menuButton">
                        ⋯
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="tableFooter">
            <div className="tablePagination">
              1-7 of 100 SKUs
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 