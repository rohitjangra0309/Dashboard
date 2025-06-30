import './Dashboard.css'
import ChartsContainer from '../Charts/ChartsContainer'
import BGRComponentContainer from '../BGRComponent/BGRComponentContainer'

function Dashboard() {

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

        <BGRComponentContainer />

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