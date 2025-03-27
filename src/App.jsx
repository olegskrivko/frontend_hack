import { useState } from 'react'
import './App.css'
import UserProfile from './pages/UserProfile'
import PortfolioDashboard from './pages/PortfolioDashboard'
import AllocationDashboard from './pages/AllocationDashboard'
import InvestmentsDashboard from './pages/InvestmentsDashboard'
import Testapp from './pages/testapp'
import { BrowserRouter, Routes, Route } from "react-router-dom"; // BrowserRouter, Routes, and Route
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <p>hello</p>
     <UserProfile /> */}
     {/* <Testapp /> */}
     <PortfolioDashboard />
     <AllocationDashboard />
     {/* <InvestmentsDashboard /> */}
     <BrowserRouter>  {/* Wrap the entire app in BrowserRouter */}
      <Routes>
     <Route path="/" element={<InvestmentsDashboard />} /> {/* Route for InvestmentsDashboard */}
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
