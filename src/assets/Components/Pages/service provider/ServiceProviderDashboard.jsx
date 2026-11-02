import { useState } from 'react'
import Sidebar from '../Sidebar.jsx'
import Navbar from '../Navbar.jsx'
import {
  Tractor,
  FileText,
  CheckCircle2,
  X,
} from 'lucide-react'
import { useTranslation } from '../landlord/context/LanguageContext.jsx'
import {
  Dashboard,
  MyServicesAndFleet,
  BookingRequests,
  ServiceSchedule,
  FleetMaintenance,
  ReportsAndAnalytics,
  PaymentsAndInvoices,
  Messages,
  Notifications,
  Settings as SettingsTab,
} from './tabs/index.js'

export default function ServiceProviderDashboard({ user, onLogout, onSwitchRole }) {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('Hyderabad, Telangana')
  const [showAddServiceModal, setShowAddServiceModal] = useState(false)
  const [selectedRequestDetails, setSelectedRequestDetails] = useState(null)
  const [selectedInvoiceReceipt, setSelectedInvoiceReceipt] = useState(null)
  const [showCreateInvoiceModal, setShowCreateInvoiceModal] = useState(false)
  const [timeRange, setTimeRange] = useState('Last 6 Months')
  const [showTimeRangeDropdown, setShowTimeRangeDropdown] = useState(false)
  const [selectedSeason, setSelectedSeason] = useState('This Season')
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)
  const [unreadNotifications, setUnreadNotifications] = useState(4)

  // Equipment category filter for the services tab
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Chat drawer state
  const [selectedChatFarmer, setSelectedChatFarmer] = useState('Raman Reddy')
  const [chatMessages, setChatMessages] = useState({
    'Raman Reddy': [
      { sender: 'Raman Reddy', text: 'Namaste Suresh garu, is the Mahindra 575 tractor available this Thursday?', time: '09:30 AM' },
      { sender: 'You', text: 'Namaste Raman garu. Yes, the tractor with 9-tyne cultivator is available on Thursday 8 AM.', time: '09:42 AM' },
      { sender: 'Raman Reddy', text: 'Excellent! We have 4 acres of black soil in Chevella. Please confirm the booking.', time: '10:05 AM' },
    ],
    'Srinivas Rao': [
      { sender: 'Srinivas Rao', text: 'Hello sir, we need drone spraying for 6 acres cotton field for pest prevention.', time: 'Yesterday' },
      { sender: 'You', text: 'Confirmed Srinivas garu. Our certified pilot will arrive at 6:30 AM before wind speed increases.', time: 'Yesterday' },
    ],
    'Anil Kumar': [
      { sender: 'Anil Kumar', text: 'Can we get soil testing report for Vikarabad farm before fertilizer purchase?', time: '2 days ago' },
      { sender: 'You', text: 'Yes Anil garu, NPK and micronutrient reports are processed and available in portal.', time: '2 days ago' },
    ],
  })
  const [inputMsg, setInputMsg] = useState('')

  // User profile state
  const [providerName, setProviderName] = useState(user?.name || 'Suresh Kumar')
  const [dispatchRadius, setDispatchRadius] = useState('Within 50 km')

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // 1. Equipment & Machinery Fleet Data
  const [equipmentList, setEquipmentList] = useState([
    {
      id: 1,
      name: 'Mahindra 575 DI Tractor',
      category: 'Machinery',
      specs: '55 HP · Rotavator / Plough',
      location: 'Hyderabad, Telangana',
      operator: 'Ramesh Reddy (Certified)',
      rate: '₹ 850 / hr',
      status: 'Booked',
      statusColor: 'bg-[#e8f5e9] text-[#1b7f45] border border-[#c8e6c9]',
      image: '/services/tractor-mahindra.jpg',
      hoursLogged: 128,
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Agri Drone Sprayer 16L',
      category: 'Drone Tech',
      specs: 'Precision Spraying · 10-15 min/ac',
      location: 'Sangareddy, Telangana',
      operator: 'Vikas Rao (DGCA Pilot)',
      rate: '₹ 450 / acre',
      status: 'Available',
      statusColor: 'bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9]',
      image: '/services/agri-drone.jpg',
      hoursLogged: 94,
      rating: 5.0,
    },
    {
      id: 3,
      name: 'Multi-Crop Paddy Thresher',
      category: 'Harvesting',
      specs: 'Diesel Engine · 35 HP Output',
      location: 'Vikarabad, Telangana',
      operator: 'K. Mohan (Mechanic)',
      rate: '₹ 1,100 / hr',
      status: 'Booked',
      statusColor: 'bg-[#e8f5e9] text-[#1b7f45] border border-[#c8e6c9]',
      image: '/services/paddy-thresher.jpg',
      hoursLogged: 165,
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Laser Land Leveller',
      category: 'Land Prep',
      specs: 'GPS Guided · 7ft Scraper Blade',
      location: 'Medak, Telangana',
      operator: 'Servicing at Depot',
      rate: '₹ 950 / hr',
      status: 'Maintenance',
      statusColor: 'bg-[#fff3e0] text-[#e65100] border border-[#ffe0b2]',
      image: '/services/laser-leveller.jpg',
      hoursLogged: 210,
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Soil Diagnostics Testing Kit',
      category: 'Diagnostics',
      specs: 'Digital NPK & EC Sensors · Instant Report',
      location: 'Hyderabad, Telangana',
      operator: 'Dr. G. Venkat (Agronomist)',
      rate: '₹ 600 / sample',
      status: 'Available',
      statusColor: 'bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9]',
      image: '/services/soil-testing.jpg',
      hoursLogged: 52,
      rating: 4.9,
    },
  ])

  // New Equipment Form State
  const [newEquip, setNewEquip] = useState({
    name: '',
    category: 'Machinery',
    specs: '',
    location: 'Hyderabad, Telangana',
    rate: '',
    operator: '',
  })

  // 2. Service Booking Requests Data
  const [bookingRequests, setBookingRequests] = useState([
    {
      id: 1,
      farmerName: 'Raman Reddy',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      serviceName: 'Mahindra 575 DI Tractor',
      areaDetails: '4.0 Acres · Deep Ploughing · 2 Days',
      location: 'Chevella, Hyderabad',
      timeAgo: 'Applied 2 hours ago',
      bookingValue: '₹ 6,800',
      status: 'pending',
      phone: '+91 98480 32190',
      cropType: 'Paddy field land preparation',
      scheduledDate: 'Tomorrow, 08:00 AM',
    },
    {
      id: 2,
      farmerName: 'Srinivas Rao',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
      serviceName: '16L Agri Drone Sprayer',
      areaDetails: '6.0 Acres · Cotton Pest Control · 1 Day',
      location: 'Sangareddy, Telangana',
      timeAgo: 'Applied 4 hours ago',
      bookingValue: '₹ 2,700',
      status: 'pending',
      phone: '+91 94401 77412',
      cropType: 'Cotton bio-pesticide spray',
      scheduledDate: '28 Oct, 06:30 AM',
    },
    {
      id: 3,
      farmerName: 'Ravi Teja',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      serviceName: 'Multi-Crop Thresher',
      areaDetails: '3.0 Acres · Maize Harvesting · 1 Day',
      location: 'Vikarabad, Telangana',
      timeAgo: 'Applied 1 day ago',
      bookingValue: '₹ 4,400',
      status: 'pending',
      phone: '+91 99890 88201',
      cropType: 'Maize grain separation',
      scheduledDate: '29 Oct, 10:00 AM',
    },
  ])

  // 3. Service Invoices Data
  const [invoices, setInvoices] = useState([
    {
      id: 'RAI-SRV-2026-88',
      farmer: 'Raman Reddy',
      service: 'Tractor Ploughing (4 Ac)',
      date: '25 Oct 2026',
      amount: '₹ 6,800',
      status: 'Paid',
      statusBadge: 'bg-[#e8f5e9] text-[#1b7f45]',
      paymentMode: 'UPI / Direct Bank',
    },
    {
      id: 'RAI-SRV-2026-72',
      farmer: 'Srinivas Rao',
      service: 'Drone Spraying (6 Ac)',
      date: '24 Oct 2026',
      amount: '₹ 2,700',
      status: 'Paid',
      statusBadge: 'bg-[#e8f5e9] text-[#1b7f45]',
      paymentMode: 'Net Banking (NEFT)',
    },
    {
      id: 'RAI-SRV-2026-64',
      farmer: 'Lakshmi Devi',
      service: 'Soil Fertility Diagnostic',
      date: '21 Oct 2026',
      amount: '₹ 1,500',
      status: 'Paid',
      statusBadge: 'bg-[#e8f5e9] text-[#1b7f45]',
      paymentMode: 'UPI',
    },
    {
      id: 'RAI-SRV-2026-59',
      farmer: 'K. Venkatesh',
      service: 'Laser Land Levelling (5 Ac)',
      date: '18 Oct 2026',
      amount: '₹ 7,600',
      status: 'Pending',
      statusBadge: 'bg-[#fff7ed] text-[#ea580c]',
      paymentMode: 'Escrow (Awaiting Field Completion)',
    },
  ])

  // New Invoice Form
  const [newInvoice, setNewInvoice] = useState({
    farmer: '',
    service: 'Tractor Ploughing',
    amount: '',
  })

  // Dynamic calculations for Donut Chart
  const bookedCount = equipmentList.filter((e) => e.status === 'Booked').length
  const availableCount = equipmentList.filter((e) => e.status === 'Available').length
  const maintenanceCount = equipmentList.filter((e) => e.status === 'Maintenance').length
  const totalFleetCount = equipmentList.length || 1

  const bookedPercent = Math.round((bookedCount / totalFleetCount) * 100)
  const availablePercent = Math.round((availableCount / totalFleetCount) * 100)
  const maintenancePercent = Math.max(0, 100 - bookedPercent - availablePercent)

  // Season Operations targets
  const seasonStats = {
    'This Season': {
      tractor: { val: '120 Hours', target: '150 Hours', pct: '80%' },
      drone: { val: '85 Acres', target: '120 Acres', pct: '70%' },
      soil: { val: '45 Tests', target: '75 Tests', pct: '60%' },
    },
    'Kharif 2026': {
      tractor: { val: '165 Hours', target: '180 Hours', pct: '92%' },
      drone: { val: '130 Acres', target: '150 Acres', pct: '87%' },
      soil: { val: '68 Tests', target: '80 Tests', pct: '85%' },
    },
    'Rabi 2025': {
      tractor: { val: '95 Hours', target: '140 Hours', pct: '68%' },
      drone: { val: '60 Acres', target: '100 Acres', pct: '60%' },
      soil: { val: '38 Tests', target: '70 Tests', pct: '54%' },
    },
  }
  const currentSeasonStat = seasonStats[selectedSeason] || seasonStats['This Season']

  // Revenue chart by time range
  const earningsData = {
    'Last 3 Months': {
      total: '₹ 98,200',
      growth: '↑ 18%',
      subtitle: 'vs. previous quarter',
      bars: [
        { m: 'Apr', h: 55, rev: '₹ 28,000' },
        { m: 'May', h: 80, rev: '₹ 36,200' },
        { m: 'Jun', h: 95, rev: '₹ 42,000' },
      ],
    },
    'Last 6 Months': {
      total: '₹ 1,84,500',
      growth: '↑ 15%',
      subtitle: 'vs. previous 6 months',
      bars: [
        { m: 'Jan', h: 35, rev: '₹ 18,500' },
        { m: 'Feb', h: 50, rev: '₹ 24,000' },
        { m: 'Mar', h: 65, rev: '₹ 31,800' },
        { m: 'Apr', h: 45, rev: '₹ 28,000' },
        { m: 'May', h: 80, rev: '₹ 36,200' },
        { m: 'Jun', h: 95, rev: '₹ 42,000' },
      ],
    },
    'Last 1 Year': {
      total: '₹ 3,42,000',
      growth: '↑ 22%',
      subtitle: 'vs. previous year',
      bars: [
        { m: 'Q1', h: 45, rev: '₹ 74,300' },
        { m: 'Q2', h: 65, rev: '₹ 89,200' },
        { m: 'Q3', h: 80, rev: '₹ 1,02,000' },
        { m: 'Q4', h: 95, rev: '₹ 1,12,500' },
      ],
    },
  }
  const currentEarnings = earningsData[timeRange] || earningsData['Last 6 Months']

  // Actions
  const handleAcceptRequest = (id, farmerName) => {
    setBookingRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'accepted' } : r))
    )
    showToast(`Booking request from ${farmerName} confirmed successfully!`)
  }

  const handleDeclineRequest = (id, farmerName) => {
    setBookingRequests((prev) => prev.filter((r) => r.id !== id))
    showToast(`Booking request from ${farmerName} declined.`)
    setSelectedRequestDetails(null)
  }

  const handleAddEquipmentSubmit = (e) => {
    e.preventDefault()
    if (!newEquip.name || !newEquip.rate) {
      showToast('Please provide equipment name and rental rate')
      return
    }

    const defaultImg =
      newEquip.category === 'Drone Tech'
        ? '/services/agri-drone.jpg'
        : newEquip.category === 'Harvesting'
          ? '/services/paddy-thresher.jpg'
          : newEquip.category === 'Land Prep'
            ? '/services/laser-leveller.jpg'
            : newEquip.category === 'Diagnostics'
              ? '/services/soil-testing.jpg'
              : '/services/tractor-mahindra.jpg'

    const item = {
      id: equipmentList.length + 1,
      name: newEquip.name,
      category: newEquip.category,
      specs: newEquip.specs || 'Modern Certified Agri Equipment',
      location: newEquip.location || selectedLocation,
      operator: newEquip.operator || 'Assigned Driver',
      rate: newEquip.rate.startsWith('₹') ? newEquip.rate : `₹ ${newEquip.rate}`,
      status: 'Available',
      statusColor: 'bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9]',
      image: defaultImg,
      hoursLogged: 0,
      rating: 5.0,
    }

    setEquipmentList([item, ...equipmentList])
    setShowAddServiceModal(false)
    setNewEquip({ name: '', category: 'Machinery', specs: '', location: selectedLocation, rate: '', operator: '' })
    showToast(`Added ${item.name} to your fleet!`)
  }

  const handleCreateInvoiceSubmit = (e) => {
    e.preventDefault()
    if (!newInvoice.farmer || !newInvoice.amount) {
      showToast('Please enter farmer name and invoice amount')
      return
    }
    const inv = {
      id: `RAI-SRV-2026-${Math.floor(100 + Math.random() * 900)}`,
      farmer: newInvoice.farmer,
      service: newInvoice.service,
      date: 'Today',
      amount: newInvoice.amount.startsWith('₹') ? newInvoice.amount : `₹ ${newInvoice.amount}`,
      status: 'Pending',
      statusBadge: 'bg-[#fff7ed] text-[#ea580c]',
      paymentMode: 'Pending Direct Settlement',
    }
    setInvoices([inv, ...invoices])
    setShowCreateInvoiceModal(false)
    setNewInvoice({ farmer: '', service: 'Tractor Ploughing', amount: '' })
    showToast(`Invoice ${inv.id} generated for ${inv.farmer}`)
  }

  const handleSendMessage = () => {
    if (!inputMsg.trim()) return
    const text = inputMsg.trim()
    const newMsg = { sender: 'You', text, time: 'Just now' }
    setChatMessages((prev) => ({
      ...prev,
      [selectedChatFarmer]: [...(prev[selectedChatFarmer] || []), newMsg],
    }))
    setInputMsg('')
    showToast('Message delivered')

    setTimeout(() => {
      setChatMessages((prev) => {
        const currentList = prev[selectedChatFarmer] || []
        return {
          ...prev,
          [selectedChatFarmer]: [
            ...currentList,
            {
              sender: selectedChatFarmer,
              text: 'Dhanyavadalu Suresh garu! Received your update.',
              time: 'Just now',
            },
          ],
        }
      })
    }, 800)
  }

  // Filtered lists for real-time search
  const filteredEquipment = equipmentList.filter(
    (e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.specs.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredRequests = bookingRequests.filter(
    (r) =>
      r.farmerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const activeBookingsCount = 5 + bookingRequests.filter((r) => r.status === 'accepted').length
  const pendingRequestsCount = bookingRequests.filter((r) => r.status === 'pending').length

  const navigationItems = [
    { id: 'dashboard', label: t('dashNavDashboard') || 'Dashboard', icon: 'dashboard' },
    { id: 'equipment', label: 'My Services & Fleet', icon: 'briefcase', badge: equipmentList.length },
    { id: 'requests', label: 'Booking Requests', icon: 'users', badge: pendingRequestsCount },
    { id: 'schedule', label: 'Service Schedule', icon: 'calendar' },
    { id: 'fleet', label: 'Fleet Maintenance', icon: 'wrench' },
    { id: 'reports', label: t('dashNavReports') || 'Reports & Analytics', icon: 'barChart' },
    { id: 'payments', label: t('dashNavPayments') || 'Payments & Invoices', icon: 'invoice' },
    { id: 'messages', label: t('dashNavMessages') || 'Messages', icon: 'message', badge: 2 },
    { id: 'notifications', label: t('dashNavNotifications') || 'Notifications', icon: 'bell', badge: unreadNotifications },
    { id: 'settings', label: t('dashNavSettings') || 'Settings', icon: 'settings' },
  ]

  const userRole = 'Agricultural Service Provider'

  return (
    <div className="min-h-screen w-full bg-[#f4f7f4] text-[#1e293b] font-sans flex flex-col antialiased">
      {/* TOAST ALERT */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-[#0c3b24] text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold animate-bounce border border-emerald-500/30">
          <CheckCircle2 className="h-4 w-4 text-[#4ade80]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <Navbar
        role="Service Provider"
        serviceProviderPage
        onLogout={onLogout}
        onSwitchRole={onSwitchRole}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        providerName={providerName}
        userRole={userRole}
      />

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <Sidebar
          role="Service Provider"
          activeRoute={activeTab}
          navigationItems={navigationItems}
          onNavigate={setActiveTab}
          onAddService={() => setShowAddServiceModal(true)}
        />

        <div className="flex min-w-0 flex-1 flex-col bg-[#f4f7f4]">
        {/* MAIN DASHBOARD CONTENT AREA */}
        <div className="p-5 xl:p-6 w-full flex-1">
          {activeTab === 'dashboard' && (
            <Dashboard
              providerName={providerName}
              userRole={userRole}
              selectedLocation={selectedLocation}
              equipmentList={equipmentList}
              setEquipmentList={setEquipmentList}
              activeBookingsCount={activeBookingsCount}
              pendingRequestsCount={pendingRequestsCount}
              filteredEquipment={filteredEquipment}
              filteredRequests={filteredRequests}
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}
              showSeasonDropdown={showSeasonDropdown}
              setShowSeasonDropdown={setShowSeasonDropdown}
              currentSeasonStat={currentSeasonStat}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
              showTimeRangeDropdown={showTimeRangeDropdown}
              setShowTimeRangeDropdown={setShowTimeRangeDropdown}
              currentEarnings={currentEarnings}
              bookedPercent={bookedPercent}
              bookedCount={bookedCount}
              availablePercent={availablePercent}
              availableCount={availableCount}
              maintenancePercent={maintenancePercent}
              maintenanceCount={maintenanceCount}
              setSelectedRequestDetails={setSelectedRequestDetails}
              handleAcceptRequest={handleAcceptRequest}
              showToast={showToast}
              setActiveTab={setActiveTab}
              setShowAddServiceModal={setShowAddServiceModal}
              setShowCreateInvoiceModal={setShowCreateInvoiceModal}
            />
          )}

          {activeTab === 'equipment' && (
            <MyServicesAndFleet
              equipmentList={equipmentList}
              setEquipmentList={setEquipmentList}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setShowAddServiceModal={setShowAddServiceModal}
              showToast={showToast}
            />
          )}

          {activeTab === 'requests' && (
            <BookingRequests
              pendingRequestsCount={pendingRequestsCount}
              filteredRequests={filteredRequests}
              setSelectedChatFarmer={setSelectedChatFarmer}
              setActiveTab={setActiveTab}
              setSelectedRequestDetails={setSelectedRequestDetails}
              handleAcceptRequest={handleAcceptRequest}
            />
          )}

          {activeTab === 'schedule' && (
            <ServiceSchedule selectedLocation={selectedLocation} />
          )}

          {activeTab === 'fleet' && (
            <FleetMaintenance
              equipmentList={equipmentList}
              showToast={showToast}
            />
          )}

          {activeTab === 'reports' && <ReportsAndAnalytics />}

          {activeTab === 'payments' && (
            <PaymentsAndInvoices
              invoices={invoices}
              setShowCreateInvoiceModal={setShowCreateInvoiceModal}
              showToast={showToast}
              setSelectedInvoiceReceipt={setSelectedInvoiceReceipt}
            />
          )}

          {activeTab === 'messages' && (
            <Messages
              selectedChatFarmer={selectedChatFarmer}
              setSelectedChatFarmer={setSelectedChatFarmer}
              chatMessages={chatMessages}
              inputMsg={inputMsg}
              setInputMsg={setInputMsg}
              handleSendMessage={handleSendMessage}
              showToast={showToast}
            />
          )}

          {activeTab === 'notifications' && (
            <Notifications
              setUnreadNotifications={setUnreadNotifications}
              showToast={showToast}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsTab
              providerName={providerName}
              setProviderName={setProviderName}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              dispatchRadius={dispatchRadius}
              setDispatchRadius={setDispatchRadius}
              onSwitchRole={onSwitchRole}
              showToast={showToast}
            />
          )}
        </div>
      </div>
      </div>

      {/* ======================================================== */}
      {/* MODAL 1: ADD MACHINERY / SERVICE MODAL                     */}
      {/* ======================================================== */}
      {showAddServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-[#e2e8e2] space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
              <h3 className="text-sm font-bold text-[#0f172a] flex items-center gap-2">
                <Tractor className="h-4 w-4 text-[#1b7f45]" /> Add Machinery or Service
              </h3>
              <button
                type="button"
                onClick={() => setShowAddServiceModal(false)}
                className="text-[#94a3b8] hover:text-[#0f172a] transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleAddEquipmentSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#475569] mb-1">Equipment / Service Name *</label>
                <input
                  type="text"
                  placeholder="e.g. John Deere 5050D Tractor"
                  value={newEquip.name}
                  onChange={(e) => setNewEquip({ ...newEquip, name: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#475569] mb-1">Category</label>
                  <select
                    value={newEquip.category}
                    onChange={(e) => setNewEquip({ ...newEquip, category: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none bg-white"
                  >
                    <option value="Machinery">Machinery</option>
                    <option value="Drone Tech">Drone Tech</option>
                    <option value="Harvesting">Harvesting</option>
                    <option value="Land Prep">Land Prep</option>
                    <option value="Diagnostics">Soil Diagnostics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#475569] mb-1">Rental Rate *</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹ 850 / hr"
                    value={newEquip.rate}
                    onChange={(e) => setNewEquip({ ...newEquip, rate: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#475569] mb-1">Specifications / Attachments</label>
                <input
                  type="text"
                  placeholder="e.g. 50 HP with rotavator, cultivator, leveller"
                  value={newEquip.specs}
                  onChange={(e) => setNewEquip({ ...newEquip, specs: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#475569] mb-1">Base Depot Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad, Telangana"
                    value={newEquip.location}
                    onChange={(e) => setNewEquip({ ...newEquip, location: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#475569] mb-1">Operator Assigned</label>
                  <input
                    type="text"
                    placeholder="e.g. Self / Certified Driver"
                    value={newEquip.operator}
                    onChange={(e) => setNewEquip({ ...newEquip, operator: e.target.value })}
                    className="w-full px-3 py-1.5 border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddServiceModal(false)}
                  className="px-3.5 py-1.5 text-[#475569] hover:bg-slate-100 rounded-xl transition font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#1b7f45] text-white rounded-xl font-bold shadow-sm hover:bg-[#146235] transition"
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: SERVICE BOOKING DETAILS MODAL                     */}
      {/* ======================================================== */}
      {selectedRequestDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-[#e2e8e2] space-y-4">
            <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
              <h3 className="text-sm font-bold text-[#0f172a]">Service Booking Request</h3>
              <button
                type="button"
                onClick={() => setSelectedRequestDetails(null)}
                className="text-[#94a3b8] hover:text-[#0f172a] transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={selectedRequestDetails.avatar}
                alt={selectedRequestDetails.farmerName}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-bold text-[#0f172a]">{selectedRequestDetails.farmerName}</h4>
                <p className="text-xs text-[#64748b]">{selectedRequestDetails.phone}</p>
                <p className="text-[11px] text-[#1b7f45] font-semibold">{selectedRequestDetails.location}</p>
              </div>
            </div>

            <div className="bg-[#f8faf8] p-3 rounded-xl space-y-1.5 text-xs text-[#475569] border border-[#e2e8e2]">
              <div className="flex justify-between">
                <span>Requested Service:</span>
                <strong className="text-[#0f172a]">{selectedRequestDetails.serviceName}</strong>
              </div>
              <div className="flex justify-between">
                <span>Crop / Purpose:</span>
                <strong className="text-[#0f172a]">{selectedRequestDetails.cropType}</strong>
              </div>
              <div className="flex justify-between">
                <span>Acreage / Duration:</span>
                <strong className="text-[#0f172a]">{selectedRequestDetails.areaDetails}</strong>
              </div>
              <div className="flex justify-between">
                <span>Scheduled Date:</span>
                <strong className="text-[#0f172a]">{selectedRequestDetails.scheduledDate}</strong>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#e2e8e2]">
                <span>Total Booking Value:</span>
                <strong className="text-[#1b7f45] text-sm">{selectedRequestDetails.bookingValue}</strong>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => handleDeclineRequest(selectedRequestDetails.id, selectedRequestDetails.farmerName)}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#ef4444] hover:bg-[#fef2f2] rounded-xl border border-[#fee2e2] transition"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => {
                  handleAcceptRequest(selectedRequestDetails.id, selectedRequestDetails.farmerName)
                  setSelectedRequestDetails(null)
                }}
                className="px-4 py-1.5 text-xs font-bold text-white bg-[#1b7f45] hover:bg-[#146235] rounded-xl shadow-sm transition"
              >
                Confirm & Accept
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 3: INVOICE RECEIPT MODAL                             */}
      {/* ======================================================== */}
      {selectedInvoiceReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#e2e8e2] space-y-4">
            <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
              <div>
                <span className="text-[10px] font-mono text-[#64748b] block">{selectedInvoiceReceipt.id}</span>
                <h3 className="text-sm font-bold text-[#0f172a]">Tax Invoice & Official Receipt</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedInvoiceReceipt(null)}
                className="text-[#94a3b8] hover:text-[#0f172a] transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#475569]">
                <span>Billed To:</span>
                <strong className="text-[#0f172a]">{selectedInvoiceReceipt.farmer}</strong>
              </div>
              <div className="flex justify-between text-[#475569]">
                <span>Service Description:</span>
                <strong className="text-[#0f172a]">{selectedInvoiceReceipt.service}</strong>
              </div>
              <div className="flex justify-between text-[#475569]">
                <span>Execution Date:</span>
                <span>{selectedInvoiceReceipt.date}</span>
              </div>
              <div className="flex justify-between text-[#475569]">
                <span>Payment Mode:</span>
                <span>{selectedInvoiceReceipt.paymentMode || 'Direct Bank Settlement'}</span>
              </div>
              <div className="flex justify-between text-[#475569]">
                <span>Status:</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${selectedInvoiceReceipt.statusBadge}`}>
                  {selectedInvoiceReceipt.status}
                </span>
              </div>
              <div className="pt-3 border-t border-[#e2e8e2] flex justify-between items-baseline">
                <span className="font-semibold text-[#0f172a]">Net Amount Paid:</span>
                <span className="text-lg font-bold text-[#1b7f45]">{selectedInvoiceReceipt.amount}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSelectedInvoiceReceipt(null)}
                className="px-3.5 py-1.5 text-xs text-[#475569] hover:bg-slate-100 rounded-xl"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  showToast(`Invoice ${selectedInvoiceReceipt.id} downloaded!`)
                  setSelectedInvoiceReceipt(null)
                }}
                className="px-4 py-1.5 text-xs font-bold text-white bg-[#1b7f45] hover:bg-[#146235] rounded-xl shadow-sm transition"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 4: CREATE INVOICE MODAL                              */}
      {/* ======================================================== */}
      {showCreateInvoiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-[#e2e8e2] space-y-4">
            <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
              <h3 className="text-sm font-bold text-[#0f172a] flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#1b7f45]" /> Generate Service Invoice
              </h3>
              <button
                type="button"
                onClick={() => setShowCreateInvoiceModal(false)}
                className="text-[#94a3b8] hover:text-[#0f172a] transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCreateInvoiceSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#475569] mb-1">Farmer Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Raman Reddy"
                  value={newInvoice.farmer}
                  onChange={(e) => setNewInvoice({ ...newInvoice, farmer: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#475569] mb-1">Service Delivered</label>
                <select
                  value={newInvoice.service}
                  onChange={(e) => setNewInvoice({ ...newInvoice, service: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none bg-white"
                >
                  <option value="Tractor Ploughing (4 Ac)">Tractor Ploughing (4 Ac)</option>
                  <option value="Agri Drone Spraying (6 Ac)">Agri Drone Spraying (6 Ac)</option>
                  <option value="Multi-Crop Threshing">Multi-Crop Threshing</option>
                  <option value="Laser Land Levelling">Laser Land Levelling</option>
                  <option value="Soil Health Diagnostic">Soil Health Diagnostic</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#475569] mb-1">Total Bill Amount (₹) *</label>
                <input
                  type="text"
                  placeholder="e.g. 6800"
                  value={newInvoice.amount}
                  onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                  className="w-full px-3 py-1.5 border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none"
                  required
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateInvoiceModal(false)}
                  className="px-3.5 py-1.5 text-[#475569] hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#1b7f45] text-white rounded-xl font-bold shadow-sm hover:bg-[#146235] transition"
                >
                  Generate & Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
