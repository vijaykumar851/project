import {
  Tractor,
  Users,
  Clock,
  ArrowUpRight,
  Sprout,
  Settings,
  MapPin,
  CheckCircle2,
  Plus,
  FileText,
  BarChart3,
  Maximize2,
  ChevronDown,
  CreditCard,
  MessageSquare,
} from 'lucide-react'
import { useTranslation } from '../../landlord/context/LanguageContext.jsx'

export default function Dashboard({
  providerName = 'Suresh Kumar',
  userRole = 'Agricultural Service Provider',
  selectedLocation = 'Hyderabad, Telangana',
  equipmentList = [],
  setEquipmentList,
  activeBookingsCount = 5,
  pendingRequestsCount = 0,
  filteredEquipment = [],
  filteredRequests = [],
  selectedSeason = 'This Season',
  setSelectedSeason,
  showSeasonDropdown = false,
  setShowSeasonDropdown,
  currentSeasonStat,
  timeRange = 'Last 6 Months',
  setTimeRange,
  showTimeRangeDropdown = false,
  setShowTimeRangeDropdown,
  currentEarnings,
  bookedPercent = 0,
  bookedCount = 0,
  availablePercent = 0,
  availableCount = 0,
  maintenancePercent = 0,
  maintenanceCount = 0,
  setSelectedRequestDetails,
  handleAcceptRequest,
  showToast,
  setActiveTab,
  setShowAddServiceModal,
  setShowCreateInvoiceModal,
}) {
  const { t } = useTranslation()

  const defaultSeasonStat = {
    tractor: { val: '120 Hours', target: '150 Hours', pct: '80%' },
    drone: { val: '85 Acres', target: '120 Acres', pct: '70%' },
    soil: { val: '45 Tests', target: '75 Tests', pct: '60%' },
  }
  const season = currentSeasonStat || defaultSeasonStat

  const defaultEarnings = {
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
  }
  const earnings = currentEarnings || defaultEarnings

  return (
    <div className="grid grid-cols-12 gap-5 w-full">
      {/* LEFT 9 COLUMNS (72-75% Width) */}
      <div className="col-span-12 xl:col-span-9 lg:col-span-8 space-y-5">
        {/* A. COVER HERO BANNER */}
        <div className="relative rounded-2xl overflow-hidden min-h-[160px] flex items-center px-8 py-6 shadow-sm border border-[#cde0cd] bg-gradient-to-r from-[#dcfce7] via-[#f0fdf4] to-[#ecfdf5]">
          <img
            src="/services/service-banner.jpg"
            alt="Agricultural Machinery Panorama"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              e.currentTarget.src = '/cover-banner.jpg'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-lg">
            <span className="text-[12px] font-semibold text-[#475569] block mb-1">
              {t('dashWelcomeBack') || 'Welcome back,'}
            </span>
            <h1 className="text-2xl sm:text-[30px] font-black tracking-tight text-[#0f172a] mb-2 flex items-center gap-2">
              {providerName}! <span className="text-[#16a34a]">🍃</span>
            </h1>
            <p className="text-xs sm:text-[13px] text-[#334155] font-medium leading-relaxed max-w-md">
              Manage your machinery rentals, confirm booking requests and deliver top-notch farming support.
            </p>
          </div>
        </div>

        {/* B. 4 METRIC STATS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {/* 1. Total Fleet */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center">
                <Tractor className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">Total Equipment</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">{equipmentList.length} Units</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab && setActiveTab('equipment')}
              className="text-[11px] font-semibold text-[#1b7f45] hover:underline flex items-center gap-1 mt-2.5"
            >
              View Details <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* 2. Active Bookings */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#f3e8ff] text-[#7e22ce] flex items-center justify-center">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">Active Bookings</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">{activeBookingsCount}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab && setActiveTab('requests')}
              className="text-[11px] font-semibold text-[#7e22ce] hover:underline flex items-center gap-1 mt-2.5"
            >
              View Bookings <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* 3. Pending Requests */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#fff7ed] text-[#c2410c] flex items-center justify-center">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">Pending Requests</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">{pendingRequestsCount}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab && setActiveTab('requests')}
              className="text-[11px] font-semibold text-[#c2410c] hover:underline flex items-center gap-1 mt-2.5"
            >
              View Requests <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* 4. Total Earnings */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#eff6ff] text-[#1d4ed8] flex items-center justify-center font-bold text-sm">
                ₹
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">Total Earnings (This Season)</span>
                <span className="text-lg font-bold text-[#0f172a] leading-tight block">₹ 1,84,500</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab && setActiveTab('reports')}
              className="text-[11px] font-semibold text-[#1d4ed8] hover:underline flex items-center gap-1 mt-2.5"
            >
              View Reports <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* C. MIDDLE & LOWER DASHBOARD GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          {/* SUB-COLUMN A: EQUIPMENT & SERVICE OPERATIONS (5 COLS) */}
          <div className="xl:col-span-5 space-y-5">
            {/* 1. My Services & Equipment (2x2 Grid) */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <h3 className="text-sm font-bold text-[#0f172a]">My Services & Equipment</h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab && setActiveTab('equipment')}
                    className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
                  >
                    View All <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {filteredEquipment.slice(0, 4).map((item) => (
                    <div
                      key={item.id}
                      className="border border-[#e2e8e2] rounded-xl overflow-hidden hover:border-[#1b7f45] transition bg-white"
                    >
                      <div className="relative h-24 w-full overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => {
                            e.currentTarget.src = '/crop-paddy.jpg'
                          }}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 border-2 border-lime-400 m-2 rounded pointer-events-none" />
                      </div>
                      <div className="p-2.5">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-[#0f172a] truncate">{item.name}</h4>
                          <button
                            type="button"
                            onClick={() => {
                              if (setEquipmentList) {
                                const next = item.status === 'Available' ? 'Booked' : 'Available'
                                setEquipmentList((prev) =>
                                  prev.map((e) => (e.id === item.id ? { ...e, status: next } : e))
                                )
                                showToast && showToast(`${item.name} status updated to ${next}`)
                              }
                            }}
                            className="text-slate-400 hover:text-slate-700 text-xs"
                            title="Quick toggle status"
                          >
                            ⋮
                          </button>
                        </div>
                        <p className="text-[10px] text-[#64748b] mt-0.5 truncate">
                          {item.specs}
                        </p>
                        <p className="text-[9px] text-[#94a3b8] truncate">{item.location}</p>
                        <div className="mt-1.5 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#0f172a]">{item.rate}</span>
                          <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${item.statusColor}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Service Operations & Utilization */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-[#0f172a]">Service Operations & Hours</h4>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowSeasonDropdown && setShowSeasonDropdown(!showSeasonDropdown)}
                    className="text-[10px] text-[#64748b] bg-[#f8faf8] px-2 py-0.5 rounded border border-[#e2e8e2] flex items-center gap-1 hover:text-[#1b7f45]"
                  >
                    <span>{selectedSeason}</span>
                    <ChevronDown className="h-2.5 w-2.5" />
                  </button>
                  {showSeasonDropdown && (
                    <div className="absolute right-0 top-full mt-1 w-28 bg-white border border-[#e2e8e2] rounded-lg shadow-lg py-1 z-30">
                      {['This Season', 'Kharif 2026', 'Rabi 2025'].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => {
                            setSelectedSeason && setSelectedSeason(s)
                            setShowSeasonDropdown && setShowSeasonDropdown(false)
                            showToast && showToast(`Loaded metrics for ${s}`)
                          }}
                          className="w-full text-left px-2.5 py-1 text-[10px] text-[#475569] hover:bg-[#f1f6f1]"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {/* Tractor Plowing */}
                <div className="border border-[#f1f5f9] rounded-xl p-2.5 text-center bg-[#fafdfa]">
                  <img
                    src="/services/tractor-mahindra.jpg"
                    alt="Tractor Plowing"
                    onError={(e) => {
                      e.currentTarget.src = '/crop-paddy.jpg'
                    }}
                    className="h-10 w-10 mx-auto rounded-full object-cover ring-2 ring-emerald-500/20 mb-1.5 shadow-xs"
                  />
                  <p className="text-xs font-bold text-[#0f172a]">Tractor Plowing</p>
                  <p className="text-[10px] text-[#64748b]">{season.tractor.val}</p>
                  <p className="text-[9px] text-[#94a3b8] mt-1">Expected Target</p>
                  <p className="text-xs font-bold text-[#0f172a]">{season.tractor.target}</p>
                  <div className="mt-2 h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#16a34a] rounded-full transition-all duration-500"
                      style={{ width: season.tractor.pct }}
                    />
                  </div>
                  <span className="text-[9px] text-[#64748b] font-medium block mt-1">{season.tractor.pct}</span>
                </div>

                {/* Drone Spraying */}
                <div className="border border-[#f1f5f9] rounded-xl p-2.5 text-center bg-[#fffdfa]">
                  <img
                    src="/services/agri-drone.jpg"
                    alt="Drone Spraying"
                    onError={(e) => {
                      e.currentTarget.src = '/crop-maize.jpg'
                    }}
                    className="h-10 w-10 mx-auto rounded-full object-cover ring-2 ring-amber-500/20 mb-1.5 shadow-xs"
                  />
                  <p className="text-xs font-bold text-[#0f172a]">Drone Spraying</p>
                  <p className="text-[10px] text-[#64748b]">{season.drone.val}</p>
                  <p className="text-[9px] text-[#94a3b8] mt-1">Expected Target</p>
                  <p className="text-xs font-bold text-[#0f172a]">{season.drone.target}</p>
                  <div className="mt-2 h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#f59e0b] rounded-full transition-all duration-500"
                      style={{ width: season.drone.pct }}
                    />
                  </div>
                  <span className="text-[9px] text-[#64748b] font-medium block mt-1">{season.drone.pct}</span>
                </div>

                {/* Soil Testing */}
                <div className="border border-[#f1f5f9] rounded-xl p-2.5 text-center bg-[#fafbfe]">
                  <img
                    src="/services/soil-testing.jpg"
                    alt="Soil Testing"
                    onError={(e) => {
                      e.currentTarget.src = '/crop-cotton.jpg'
                    }}
                    className="h-10 w-10 mx-auto rounded-full object-cover ring-2 ring-blue-500/20 mb-1.5 shadow-xs"
                  />
                  <p className="text-xs font-bold text-[#0f172a]">Soil Testing</p>
                  <p className="text-[10px] text-[#64748b]">{season.soil.val}</p>
                  <p className="text-[9px] text-[#94a3b8] mt-1">Expected Target</p>
                  <p className="text-xs font-bold text-[#0f172a]">{season.soil.target}</p>
                  <div className="mt-2 h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#3b82f6] rounded-full transition-all duration-500"
                      style={{ width: season.soil.pct }}
                    />
                  </div>
                  <span className="text-[9px] text-[#64748b] font-medium block mt-1">{season.soil.pct}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SUB-COLUMN B: EARNINGS, REQUESTS & GIS MAP (7 COLS) */}
          <div className="xl:col-span-7 space-y-5">
            {/* 1. Earnings Overview & Fleet Usage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Earnings Bar Chart */}
              <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-bold text-[#0f172a]">Earnings Overview</h4>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowTimeRangeDropdown && setShowTimeRangeDropdown(!showTimeRangeDropdown)}
                      className="text-[10px] text-[#64748b] bg-[#f8faf8] px-2 py-0.5 rounded border border-[#e2e8e2] flex items-center gap-1 hover:text-[#1b7f45]"
                    >
                      <span>{timeRange}</span>
                      <ChevronDown className="h-2.5 w-2.5" />
                    </button>
                    {showTimeRangeDropdown && (
                      <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-[#e2e8e2] rounded-lg shadow-lg py-1 z-30">
                        {['Last 3 Months', 'Last 6 Months', 'Last 1 Year'].map((tr) => (
                          <button
                            key={tr}
                            type="button"
                            onClick={() => {
                              setTimeRange && setTimeRange(tr)
                              setShowTimeRangeDropdown && setShowTimeRangeDropdown(false)
                              showToast && showToast(`Viewing revenue for ${tr}`)
                            }}
                            className="w-full text-left px-2.5 py-1 text-[10px] text-[#475569] hover:bg-[#f1f6f1]"
                          >
                            {tr}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-lg font-bold text-[#0f172a]">{earnings.total}</span>
                  <span className="text-[10px] font-bold text-[#16a34a]">{earnings.growth}</span>
                  <span className="text-[9px] text-[#94a3b8]">{earnings.subtitle}</span>
                </div>

                {/* Bar Chart */}
                <div className="h-24 flex items-end justify-between gap-2 pt-2 border-b border-[#f1f5f9]">
                  {earnings.bars.map((b, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-1 h-full justify-end group cursor-pointer"
                      title={`${b.m}: ${b.rev}`}
                    >
                      <div
                        style={{ height: `${b.h}%` }}
                        className="w-full bg-[#1b7f45] rounded-t-sm group-hover:bg-[#146235] transition"
                      />
                      <span className="text-[9px] text-[#94a3b8] group-hover:text-[#1b7f45] font-medium">{b.m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fleet Status Donut */}
              <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between">
                <h4 className="text-xs font-bold text-[#0f172a] mb-1">Fleet & Equipment Status</h4>
                <div className="flex items-center gap-4 my-1">
                  <div className="relative w-20 h-20 shrink-0">
                    <svg width="80" height="80" viewBox="0 0 42 42" className="rotate-[-90deg]">
                      <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f1f5f9" strokeWidth="5.5" />
                      <circle
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#16a34a"
                        strokeWidth="6"
                        strokeDasharray={`${bookedPercent} ${100 - bookedPercent}`}
                        strokeDashoffset="0"
                      />
                      <circle
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#f59e0b"
                        strokeWidth="6"
                        strokeDasharray={`${availablePercent} ${100 - availablePercent}`}
                        strokeDashoffset={-bookedPercent}
                      />
                      <circle
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke="#3b82f6"
                        strokeWidth="6"
                        strokeDasharray={`${maintenancePercent} ${100 - maintenancePercent}`}
                        strokeDashoffset={-(bookedPercent + availablePercent)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xs font-bold text-[#0f172a] leading-none">{equipmentList.length}</span>
                      <span className="text-[8px] text-[#94a3b8]">Total Units</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[10px] text-[#475569]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                      <span>Booked</span>
                      <span className="font-semibold text-[#0f172a] ml-auto">
                        {bookedCount} ({bookedPercent}%)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
                      <span>Available</span>
                      <span className="font-semibold text-[#0f172a] ml-auto">
                        {availableCount} ({availablePercent}%)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                      <span>Maintenance</span>
                      <span className="font-semibold text-[#0f172a] ml-auto">
                        {maintenanceCount} ({maintenancePercent}%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Recent Booking Requests */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-[#0f172a]">Recent Service Requests</h4>
                <button
                  type="button"
                  onClick={() => setActiveTab && setActiveTab('requests')}
                  className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
                >
                  View All <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>

              <div className="space-y-2.5">
                {filteredRequests.slice(0, 3).map((req) => (
                  <div key={req.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8faf8] transition border border-[#f1f5f9]">
                    <div className="flex items-center gap-2.5">
                      <img src={req.avatar} alt={req.farmerName} className="h-8 w-8 rounded-full object-cover" />
                      <div>
                        <p className="text-xs font-bold text-[#0f172a] leading-none">{req.farmerName}</p>
                        <p className="text-[10px] text-[#64748b] mt-0.5">
                          {req.serviceName} <span className="text-slate-300">|</span> {req.areaDetails}
                        </p>
                        <p className="text-[9px] text-[#94a3b8]">{req.timeAgo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {req.status === 'accepted' ? (
                        <span className="text-[11px] font-bold text-[#1b7f45] bg-[#e8f5e9] px-2.5 py-1 rounded-lg">
                          Accepted
                        </span>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => setSelectedRequestDetails && setSelectedRequestDetails(req)}
                            className="px-2.5 py-1 text-[11px] font-medium text-[#475569] bg-[#f8faf8] border border-[#e2e8e2] rounded-lg hover:bg-slate-100"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAcceptRequest && handleAcceptRequest(req.id, req.farmerName)}
                            className="px-3 py-1 text-[11px] font-semibold text-white bg-[#1b7f45] hover:bg-[#146235] rounded-lg shadow-sm"
                          >
                            Accept
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Service Hub & Fleet GIS Satellite Map */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold text-[#0f172a]">Service Hub & Dispatch Locations</h4>
                <button
                  type="button"
                  onClick={() => setActiveTab && setActiveTab('equipment')}
                  className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
                >
                  View All <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>

              <div className="relative h-44 rounded-xl overflow-hidden border border-[#cbd5e1] group">
                <img
                  src="/gis-satellite-map.jpg"
                  alt="Satellite Map"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1524813686514-a57563d77d4c?auto=format&fit=crop&w=800&q=80'
                  }}
                />
                <div className="absolute inset-0 bg-[#064e3b]/10 pointer-events-none" />

                {/* Interactive Surveyed Polygon Boundary overlays */}
                <div
                  onClick={() => showToast && showToast('North Depot (Chevella): 3 Tractors on standby')}
                  className="absolute top-3 left-6 bg-white/95 backdrop-blur-sm text-[#0f172a] px-2 py-0.5 rounded text-[9px] font-bold shadow border border-emerald-500 cursor-pointer hover:bg-emerald-50 transition"
                >
                  North Depot<br />Chevella Hub · 3 Units
                </div>
                <div
                  onClick={() => showToast && showToast('East Hub (Sangareddy): 2 Drone Sprayers ready')}
                  className="absolute top-5 right-6 bg-white/95 backdrop-blur-sm text-[#0f172a] px-2 py-0.5 rounded text-[9px] font-bold shadow border border-emerald-500 cursor-pointer hover:bg-emerald-50 transition"
                >
                  East Hub<br />Sangareddy · 2 Units
                </div>
                <div
                  onClick={() => showToast && showToast('West Depot (Vikarabad): Harvesters & Threshers')}
                  className="absolute bottom-4 left-6 bg-white/95 backdrop-blur-sm text-[#0f172a] px-2 py-0.5 rounded text-[9px] font-bold shadow border border-emerald-500 cursor-pointer hover:bg-emerald-50 transition"
                >
                  West Depot<br />Vikarabad · 2 Units
                </div>
                <div
                  onClick={() => showToast && showToast('Central Base (Medak): Laser levellers undergoing calibration')}
                  className="absolute bottom-4 right-8 bg-white/95 backdrop-blur-sm text-[#0f172a] px-2 py-0.5 rounded text-[9px] font-bold shadow border border-emerald-500 cursor-pointer hover:bg-emerald-50 transition"
                >
                  Central Base<br />Medak · 1 Unit
                </div>

                <button
                  type="button"
                  onClick={() => showToast && showToast(`GPS tracking synced with ${selectedLocation}`)}
                  className="absolute bottom-2.5 right-2.5 p-1 bg-white rounded shadow text-[#475569] hover:text-[#1b7f45] transition"
                  title="Recenter Map"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT 3 COLUMNS */}
      <div className="col-span-12 xl:col-span-3 lg:col-span-4 space-y-4">
        {/* 1. SEPARATE QUOTE CARD */}
        <div className="bg-white rounded-2xl p-5 border border-[#e2e8e2] shadow-sm flex flex-col justify-between min-h-[160px] relative">
          <div className="flex items-start gap-2.5">
            <span className="text-[#16a34a] text-lg font-bold">🍃</span>
            <p className="text-[12px] font-medium text-[#334155] italic leading-relaxed pt-0.5">
              "Modern machinery in the hands of skilled service providers drives agricultural prosperity and saves farmers valuable time."
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <Sprout className="h-5 w-5 text-[#16a34a]" />
          </div>
        </div>

        {/* 2. SERVICE PROVIDER PROFILE CARD */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm text-center relative">
          <button
            type="button"
            onClick={() => setActiveTab && setActiveTab('settings')}
            className="absolute top-3.5 right-3.5 text-[#94a3b8] hover:text-[#475569]"
            title="Edit Settings"
          >
            <Settings className="h-3.5 w-3.5" />
          </button>

          <img
            src="/services/provider-avatar.jpg"
            alt={providerName}
            onError={(e) => {
              e.currentTarget.src = '/ramu-naik.jpg'
            }}
            className="h-16 w-16 rounded-full object-cover mx-auto ring-2 ring-[#1b7f45]/20 shadow-sm"
          />

          <h3 className="text-sm font-bold text-[#0f172a] mt-2">{providerName}</h3>
          <p className="text-[10px] text-[#64748b]">{userRole}</p>
          <p className="text-[10px] text-[#94a3b8] flex items-center justify-center gap-1 mt-0.5">
            <MapPin className="h-2.5 w-2.5 text-[#1b7f45]" /> {selectedLocation}
          </p>

          <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-[#1b7f45] bg-[#e8f5e9] px-2.5 py-0.5 rounded-full border border-[#c8e6c9]">
            <CheckCircle2 className="h-2.5 w-2.5" /> Verified Provider
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#f1f5f9]">
            <div className="p-2 bg-[#f8faf8] rounded-xl text-left flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center shrink-0">
                <Tractor className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-[9px] text-[#64748b] block">Fleet Size</span>
                <span className="text-xs font-bold text-[#0f172a] block">{equipmentList.length} Machines</span>
              </div>
            </div>
            <div className="p-2 bg-[#f8faf8] rounded-xl text-left flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center shrink-0">
                <Sprout className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-[9px] text-[#64748b] block">Experience</span>
                <span className="text-xs font-bold text-[#0f172a] block">12 Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. QUICK ACTIONS CARD */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
          <h4 className="text-xs font-bold text-[#0f172a] mb-3">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setShowAddServiceModal && setShowAddServiceModal(true)}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#1b7f45] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center mb-1.5">
                <Plus className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                Add Machinery
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab && setActiveTab('requests')}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#3b82f6] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#eff6ff] text-[#1d4ed8] flex items-center justify-center mb-1.5">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                Find Farmer Jobs
              </span>
            </button>

            <button
              type="button"
              onClick={() => setShowCreateInvoiceModal && setShowCreateInvoiceModal(true)}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#16a34a] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-1.5">
                <FileText className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                Create Invoice
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab && setActiveTab('reports')}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#7e22ce] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#f3e8ff] text-[#7e22ce] flex items-center justify-center mb-1.5">
                <BarChart3 className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                View Analytics
              </span>
            </button>
          </div>
        </div>

        {/* 4. RECENT NOTIFICATIONS CARD */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-[#0f172a]">Recent Notifications</h4>
            <button
              type="button"
              onClick={() => setActiveTab && setActiveTab('notifications')}
              className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
            >
              View All <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="space-y-2.5">
            {[
              {
                icon: Users,
                bg: 'bg-[#e8f5e9] text-[#1b7f45]',
                title: 'New booking request from Raman Reddy',
                time: '2 hours ago',
                tab: 'requests',
              },
              {
                icon: Tractor,
                bg: 'bg-[#eff6ff] text-[#1d4ed8]',
                title: 'Drone spraying job completed for East Farm',
                time: '5 hours ago',
                tab: 'schedule',
              },
              {
                icon: CreditCard,
                bg: 'bg-[#fff7ed] text-[#ea580c]',
                title: 'Payment ₹2,700 received from Srinivas Rao',
                time: '1 day ago',
                tab: 'payments',
              },
              {
                icon: MessageSquare,
                bg: 'bg-[#e8f5e9] text-[#16a34a]',
                title: 'New inquiry from Anil Kumar (Medak)',
                time: '1 day ago',
                tab: 'messages',
              },
            ].map((n, i) => {
              const NIcon = n.icon
              return (
                <div
                  key={i}
                  onClick={() => setActiveTab && setActiveTab(n.tab)}
                  className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-[#f8faf8] transition cursor-pointer"
                >
                  <div className={`h-7 w-7 rounded-full ${n.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                    <NIcon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-[#0f172a] leading-tight truncate">
                      {n.title}
                    </p>
                    <p className="text-[9px] text-[#94a3b8] mt-0.5">{n.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
