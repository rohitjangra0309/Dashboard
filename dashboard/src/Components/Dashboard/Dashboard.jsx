import './Dashboard.css'
import ChartsContainer from '../Charts/ChartsContainer'
import BGRComponentContainer from '../BGRComponent/BGRComponentContainer'
import SKUTableContainer from '../SKUTable/SKUTableContainer'

function Dashboard() {

  return (
    <div className="dashboard">
      <div className="dashboardContainer">

        <ChartsContainer />

        <BGRComponentContainer />

        <SKUTableContainer />
      </div>
    </div>
  )
}

export default Dashboard 