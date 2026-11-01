import { useState } from 'react'
import {
  LayoutDashboard,
  MapPin,
  Users,
  FileText,
  Sprout,
  BarChart3,
  CreditCard,
  MessageSquare,
  Bell,
  Settings,
  CheckCircle2,
} from './Icons.jsx'
import { useTranslation, LanguageProvider } from '../context/LanguageContext.jsx'

// Data
import {
  initialParcels,
  initialTenantRequests,
  initialLeases,
  initialChatMessages,
  initialNotifications,
  initialPayments,
} from './data/mockData.js'

// Layout & Modal Components
import Navbar from '../../Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import AddParcelModal from './tabs/AddParcelModal.jsx'
import TenantDetailsModal from './tabs/TenantDetailsModal.jsx'

// Tab Views
import OverviewTab from './tabs/OverviewTab.jsx'
import ParcelsTab from './tabs/ParcelsTab.jsx'
import TenantRequestsTab from './tabs/TenantRequestsTab.jsx'
import LeasesTab from './tabs/LeasesTab.jsx'
import CropsTab from './tabs/CropsTab.jsx'
import ReportsTab from './tabs/ReportsTab.jsx'
import PaymentsTab from './tabs/PaymentsTab.jsx'
import MessagesTab from './tabs/MessagesTab.jsx'
import NotificationsTab from './tabs/NotificationsTab.jsx'
import SettingsTab from './tabs/SettingsTab.jsx'

function LandlordDashboardContent({ user, onLogout, onSwitchRole }) {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation] = useState('Hyderabad, Telangana')
  const [showAddParcelModal, setShowAddParcelModal] = useState(false)
  const [selectedTenantDetails, setSelectedTenantDetails] = useState(null)
  const [timeRange, setTimeRange] = useState('Last 6 Months')
  const [showTimeRangeDropdown, setShowTimeRangeDropdown] = useState(false)
  const [selectedSeason, setSelectedSeason] = useState('This Season')
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)

  // Message chat state
  const [selectedChatTenant, setSelectedChatTenant] = useState('Suresh Kumar')
  const [chatMessages, setChatMessages] = useState(initialChatMessages)
  const [inputMsg, setInputMsg] = useState('')

  // Domain data
  const [parcels, setParcels] = useState(initialParcels)
  const [tenantRequests, setTenantRequests] = useState(initialTenantRequests)
  const [leases] = useState(initialLeases)
  const [payments] = useState(initialPayments)
  const [notifications] = useState(initialNotifications)

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // Form State for Adding New Parcel
  const [newParcel, setNewParcel] = useState({
    name: '',
    area: '',
    crop: '',
    soilType: 'Black Clay Loam',
    waterSource: 'Borewell with Solar Pump',
    location: 'Hyderabad, Telangana',
    surveyNo: '',
    annualRent: '',
    status: 'Available',
  })

  const handleAddParcel = (e) => {
    e.preventDefault()
    if (!newParcel.name || !newParcel.area) return

    const parcelToAdd = {
      id: Date.now(),
      name: newParcel.name,
      area: `${newParcel.area} Acres`,
      crop: newParcel.crop || 'Paddy',
      soilType: newParcel.soilType,
      waterSource: newParcel.waterSource,
      location: newParcel.location,
      status: newParcel.status,
      statusColor:
        newParcel.status === 'Available'
          ? 'bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9]'
          : 'bg-[#e8f5e9] text-[#1b7f45] border border-[#c8e6c9]',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
      surveyNo: newParcel.surveyNo || 'SY-118/G',
      annualRent: newParcel.annualRent ? `â‚¹ ${newParcel.annualRent}` : 'â‚¹ 50,000',
      tenant: 'None',
    }

    setParcels([parcelToAdd, ...parcels])
    setNewParcel({
      name: '',
      area: '',
      crop: '',
      soilType: 'Black Clay Loam',
      waterSource: 'Borewell with Solar Pump',
      location: 'Hyderabad, Telangana',
      surveyNo: '',
      annualRent: '',
      status: 'Available',
    })
    setShowAddParcelModal(false)
    showToast(`Parcel "${parcelToAdd.name}" added successfully!`)
  }

  const handleAcceptTenant = (id, name) => {
    const targetReq = tenantRequests.find((tr) => tr.id === id)
    setTenantRequests(
      tenantRequests.map((tr) => (tr.id === id ? { ...tr, status: 'accepted' } : tr))
    )
    if (targetReq) {
      setParcels((prev) =>
        prev.map((p) =>
          p.name === targetReq.parcelName
            ? {
                ...p,
                status: 'Rented',
                statusColor: 'bg-[#e8f5e9] text-[#1b7f45] border border-[#c8e6c9]',
                tenant: name,
              }
            : p
        )
      )
    }
    showToast(`Tenant request from ${name} accepted! Digital lease prepared.`)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputMsg.trim()) return
    const cur = chatMessages[selectedChatTenant] || []
    const sentText = inputMsg
    setChatMessages((prev) => ({
      ...prev,
      [selectedChatTenant]: [...cur, { sender: 'You', text: sentText, time: 'Just now' }],
    }))
    setInputMsg('')

    // Realistic auto-reply from tenant
    setTimeout(() => {
      setChatMessages((prev) => ({
        ...prev,
        [selectedChatTenant]: [
          ...(prev[selectedChatTenant] || []),
          {
            sender: selectedChatTenant,
            text: `Dhanyavadalu Ramu garu! Noted, will update you on the field work and irrigation.`,
            time: 'Just now',
          },
        ],
      }))
    }, 900)
  }

  const filteredParcels = parcels.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.surveyNo.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const activeTenantsCount = 3 + tenantRequests.filter((tr) => tr.status === 'accepted').length
  const pendingRequestsCount = tenantRequests.filter((tr) => tr.status === 'pending').length

  const navigationItems = [
    { id: 'dashboard', label: t('dashNavDashboard'), icon: LayoutDashboard },
    { id: 'parcels', label: t('dashNavParcels'), icon: MapPin },
    { id: 'requests', label: t('dashNavRequests'), icon: Users, badge: pendingRequestsCount },
    { id: 'leases', label: t('dashNavLeases'), icon: FileText },
    { id: 'crops', label: t('dashNavCrops'), icon: Sprout },
    { id: 'reports', label: t('dashNavReports'), icon: BarChart3 },
    { id: 'payments', label: t('dashNavPayments'), icon: CreditCard },
    { id: 'messages', label: t('dashNavMessages'), icon: MessageSquare, badge: 2 },
    { id: 'notifications', label: t('dashNavNotifications'), icon: Bell, badge: 5 },
    { id: 'settings', label: t('dashNavSettings'), icon: Settings },
  ]

  return (
    <div className="min-h-screen w-full bg-[#f4f7f4] text-[#1e293b] font-sans flex flex-col antialiased">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-5 z-50 flex items-center gap-2 bg-[#0c3b24] text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold animate-bounce border border-emerald-500/30">
          <CheckCircle2 className="h-4 w-4 text-[#4ade80]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Top Dashboard Navbar (Header) */}
      <Navbar
        role="Landlord Farmer"
        onLogout={onLogout}
        onSwitchRole={onSwitchRole}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Main Body: Sidebar + Tab Content */}
      <div className="flex-1 flex min-w-0 flex-col lg:flex-row">
        <Sidebar
          navigationItems={navigationItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Dynamic Tab Body */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#f4f7f4]">
          <div className="p-5 xl:p-6 w-full flex-1">
            {activeTab === 'dashboard' && (
              <OverviewTab
              user={user}
              parcels={parcels}
              filteredParcels={filteredParcels}
              tenantRequests={tenantRequests}
              activeTenantsCount={activeTenantsCount}
              pendingRequestsCount={pendingRequestsCount}
              selectedLocation={selectedLocation}
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}
              showSeasonDropdown={showSeasonDropdown}
              setShowSeasonDropdown={setShowSeasonDropdown}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
              showTimeRangeDropdown={showTimeRangeDropdown}
              setShowTimeRangeDropdown={setShowTimeRangeDropdown}
              setActiveTab={setActiveTab}
              setShowAddParcelModal={setShowAddParcelModal}
              setSelectedTenantDetails={setSelectedTenantDetails}
              handleAcceptTenant={handleAcceptTenant}
              showToast={showToast}
            />
          )}

          {activeTab === 'parcels' && (
            <ParcelsTab
              filteredParcels={filteredParcels}
              onOpenAddParcelModal={() => setShowAddParcelModal(true)}
              showToast={showToast}
            />
          )}

          {activeTab === 'requests' && (
            <TenantRequestsTab
              tenantRequests={tenantRequests}
              pendingRequestsCount={pendingRequestsCount}
              setSelectedTenantDetails={setSelectedTenantDetails}
              handleAcceptTenant={handleAcceptTenant}
            />
          )}

          {activeTab === 'leases' && <LeasesTab leases={leases} showToast={showToast} />}

          {activeTab === 'crops' && <CropsTab />}

          {activeTab === 'reports' && <ReportsTab />}

          {activeTab === 'payments' && <PaymentsTab payments={payments} />}

          {activeTab === 'messages' && (
            <MessagesTab
              chatMessages={chatMessages}
              selectedChatTenant={selectedChatTenant}
              setSelectedChatTenant={setSelectedChatTenant}
              inputMsg={inputMsg}
              setInputMsg={setInputMsg}
              handleSendMessage={handleSendMessage}
            />
          )}

          {activeTab === 'notifications' && (
            <NotificationsTab notifications={notifications} />
          )}

          {activeTab === 'settings' && <SettingsTab user={user} showToast={showToast} />}
        </div>
      </div>
    </div>

      {/* Modal: Add Land Parcel */}
      <AddParcelModal
        isOpen={showAddParcelModal}
        onClose={() => setShowAddParcelModal(false)}
        newParcel={newParcel}
        setNewParcel={setNewParcel}
        onAddParcel={handleAddParcel}
      />

      {/* Modal: View Tenant Dossier */}
      <TenantDetailsModal
        tenant={selectedTenantDetails}
        onClose={() => setSelectedTenantDetails(null)}
        onAccept={handleAcceptTenant}
      />
    </div>
  )
}

export default function LandlordDashboard(props) {
  return (
    <LanguageProvider>
      <LandlordDashboardContent {...props} />
    </LanguageProvider>
  )
}
