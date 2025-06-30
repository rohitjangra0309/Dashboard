import './Dashboard.css'
import { DashboardProvider } from '../../context/DashboardContext'
import ChartsContainer from '../Charts/ChartsContainer'
import BGRComponentContainer from '../BGRComponent/BGRComponentContainer'
import SKUTableContainer from '../SKUTable/SKUTableContainer'

function Dashboard() {

  return (
    <DashboardProvider>
      <div className="dashboard">
        <div className="dashboardContainer">

          <ChartsContainer />

          <BGRComponentContainer />

          <SKUTableContainer />
        </div>
      </div>
    </DashboardProvider>
  )
}

export default Dashboard 