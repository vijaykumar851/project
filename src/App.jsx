import { useState } from 'react'
import Footer from './assets/Components/Headers/Footer.jsx'
import Navbar from './assets/Components/Pages/Navbar.jsx'
import Landing from './assets/Components/Pages/Landing.jsx'
import RegisterPage from './assets/Components/Pages/Register.jsx'
import LoginPage from './assets/Components/Pages/Login.jsx'
import FarmerDashboard from './assets/Components/Pages/farmer/Farmerdashboard.jsx'
import LandlordDashboard from './assets/Components/Pages/landlord/Dashboard/LandlordDashboard.jsx'
import TenantFarmerDashboard from './assets/Components/Pages/tenent farmer/TenantFarmerDashboard.jsx'
import BuyerDashboard from './assets/Components/Pages/buyer/BuyerDashboard.jsx'
import ServiceProviderDashboard from './assets/Components/Pages/service provider/ServiceProviderDashboard.jsx'
import './App.css'

const dashboardRoutes = {
  Farmer: '/farmer-dashboard',
  'Landlord Farmer': '/landlord-dashboard',
  'Tenant Farmer': '/tenant-farmer-dashboard',
  Buyer: '/buyer-dashboard',
  'Service Provider': '/service-dashboard',
}

const dashboards = {
  Farmer: FarmerDashboard,
  'Landlord Farmer': LandlordDashboard,
  'Tenant Farmer': TenantFarmerDashboard,
  Buyer: BuyerDashboard,
  'Service Provider': ServiceProviderDashboard,
}

function App() {
  const [showAuthPage, setShowAuthPage] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [dashboardRole, setDashboardRole] = useState(() => {
    const currentPath = window.location.pathname
    const isBuyerPage = currentPath === '/buyer' || currentPath.startsWith('/buyer/')
    const roleForPath = Object.entries(dashboardRoutes).find(
      ([, path]) => path === currentPath,
    )?.[0] || (isBuyerPage ? 'Buyer' : null)

    if (roleForPath && window.sessionStorage.getItem('accountRole') === roleForPath) {
      return roleForPath
    }

    if (roleForPath) {
      window.history.replaceState({}, '', '/')
    }

    return null
  })

  function handleAuthSuccess(role) {
    window.sessionStorage.setItem('accountRole', role)
    const dashboardPath = dashboardRoutes[role]
    if (dashboardPath) {
      window.history.pushState({}, '', dashboardPath)
      setDashboardRole(role)
      return
    }

    window.history.replaceState({}, '', '/')
    setDashboardRole(null)
    setShowAuthPage(false)
  }

  function handleLogout() {
    window.sessionStorage.removeItem('accountRole')
    window.history.replaceState({}, '', '/')
    setDashboardRole(null)
    setShowAuthPage(false)
    setAuthMode('login')
  }

  function handleDashboardSwitch(role) {
    const dashboardPath = dashboardRoutes[role]
    if (!dashboardPath) return

    window.sessionStorage.setItem('accountRole', role)
    window.history.pushState({}, '', dashboardPath)
    setDashboardRole(role)
  }

  const ActiveDashboard = dashboardRole ? dashboards[dashboardRole] : null
  if (ActiveDashboard) {
    return <ActiveDashboard onLogout={handleLogout} onSwitchRole={handleDashboardSwitch} />
  }

  return (
    <>
      <Navbar
        onAuthOpen={() => {
          setAuthMode('login')
          setShowAuthPage(true)
        }}
        onHome={() => setShowAuthPage(false)}
      />
      <main>
        {showAuthPage ? (
          authMode === 'login' ? (
            <LoginPage
              onRegister={() => setAuthMode('register')}
              onSuccess={handleAuthSuccess}
            />
          ) : (
            <RegisterPage
              onLogin={() => setAuthMode('login')}
              onSuccess={handleAuthSuccess}
            />
          )
        ) : (
          <Landing />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
