import { useState } from 'react'
import './App.css'
import UserProfile from './pages/UserProfile'
import PortfolioDashboard from './pages/PortfolioDashboard'
import AllocationDashboard from './pages/AllocationDashboard'
import InvestmentsDashboard from './pages/InvestmentsDashboard'
import Testapp from './pages/testapp'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <p>hello</p>
     <UserProfile /> */}
     {/* <Testapp /> */}
     <PortfolioDashboard />
     <AllocationDashboard />
     <InvestmentsDashboard />
    </>
  )
}

export default App
