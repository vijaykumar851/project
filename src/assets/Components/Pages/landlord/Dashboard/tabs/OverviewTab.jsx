import {
  Layers,
  Users,
  FileText,
  CreditCard,
  MessageSquare,
  ArrowUpRight,
  ChevronDown,
  Maximize2,
  Sprout,
  Settings,
  MapPin,
  CheckCircle2,
  Plus,
  BarChart3,
} from '../Icons.jsx'
import { useTranslation } from '../../context/LanguageContext.jsx'

export default function OverviewTab({
  user,
  parcels,
  filteredParcels,
  tenantRequests,
  activeTenantsCount,
  pendingRequestsCount,
  selectedLocation,
  selectedSeason,
  setSelectedSeason,
  showSeasonDropdown,
  setShowSeasonDropdown,
  timeRange,
  setTimeRange,
  showTimeRangeDropdown,
  setShowTimeRangeDropdown,
  setActiveTab,
  setShowAddParcelModal,
  setSelectedTenantDetails,
  handleAcceptTenant,
  showToast,
}) {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-12 gap-5 w-full">
      {/* LEFT 9 COLUMNS (72-75% Width) */}
      <div className="col-span-12 xl:col-span-9 lg:col-span-8 space-y-5">
        {/* A. COVER HERO BANNER */}
        <div className="relative rounded-2xl overflow-hidden min-h-[160px] flex items-center px-8 py-6 shadow-sm border border-[#cde0cd] bg-gradient-to-r from-[#dcfce7] via-[#f0fdf4] to-[#ecfdf5]">
          <img
            src="/cover-banner.jpg"
            alt="Raithanna Agricultural Panorama"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-lg">
            <span className="text-[12px] font-semibold text-[#475569] block mb-1">
              {t('dashWelcomeBack')}
            </span>
            <h1 className="text-2xl sm:text-[30px] font-black tracking-tight text-[#0f172a] mb-2 flex items-center gap-2">
              {user?.name || 'Ramu Naik'}! <span className="text-[#16a34a]">ðŸƒ</span>
            </h1>
            <p className="text-xs sm:text-[13px] text-[#334155] font-medium leading-relaxed max-w-md">
              {t('dashHeroTagline')}
            </p>
          </div>
        </div>

        {/* B. 4 METRIC STATS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {/* 1. Total Land Parcels */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center">
                <Layers className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">{t('dashTotalParcels')}</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">{parcels.length}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('parcels')}
              className="text-[11px] font-semibold text-[#1b7f45] hover:underline flex items-center gap-1 mt-2.5"
            >
              {t('dashViewDetails')} <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* 2. Active Tenants */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#f3e8ff] text-[#7e22ce] flex items-center justify-center">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">{t('dashActiveTenants')}</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">{activeTenantsCount}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('requests')}
              className="text-[11px] font-semibold text-[#7e22ce] hover:underline flex items-center gap-1 mt-2.5"
            >
              {t('dashViewTenants')} <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* 3. Pending Requests */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#fff7ed] text-[#c2410c] flex items-center justify-center">
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">{t('dashPendingRequests')}</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">{pendingRequestsCount}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('requests')}
              className="text-[11px] font-semibold text-[#c2410c] hover:underline flex items-center gap-1 mt-2.5"
            >
              {t('dashViewRequests')} <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* 4. Total Earnings */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#eff6ff] text-[#1d4ed8] flex items-center justify-center font-bold text-sm">
                â‚¹
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">{t('dashTotalEarnings')}</span>
                <span className="text-lg font-bold text-[#0f172a] leading-tight block">â‚¹ 1,28,500</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('payments')}
              className="text-[11px] font-semibold text-[#1d4ed8] hover:underline flex items-center gap-1 mt-2.5"
            >
              {t('dashViewReports')} <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* C. MIDDLE & LOWER DASHBOARD GRID (2 SUB-COLUMNS) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          {/* SUB-COLUMN A: PARCELS & CROP PRODUCTION (5 COLS) */}
          <div className="xl:col-span-5 space-y-5">
            {/* 1. My Land Parcels (2x2 Grid) */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <h3 className="text-sm font-bold text-[#0f172a]">{t('dashMyLandParcels')}</h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab('parcels')}
                    className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
                  >
                    {t('dashViewAll')} <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {filteredParcels.slice(0, 4).map((p) => (
                    <div
                      key={p.id}
                      className="border border-[#e2e8e2] rounded-xl overflow-hidden hover:border-[#1b7f45] transition bg-white"
                    >
                      <div className="relative h-24 w-full overflow-hidden bg-slate-100">
                        <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="p-2.5">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-[#0f172a] truncate">{p.name}</h4>
                          <span className="text-slate-400 text-xs">â‹®</span>
                        </div>
                        <p className="text-[10px] text-[#64748b] mt-0.5">
                          {p.area} <span className="text-slate-300">|</span> {p.crop}
                        </p>
                        <p className="text-[9px] text-[#94a3b8] truncate">{p.location}</p>
                        <div className="mt-1.5 flex justify-end">
                          <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${p.statusColor}`}>
                            {p.status === 'Rented'
                              ? t('dashStatusRented')
                              : p.status === 'Available'
                              ? t('dashStatusAvailable')
                              : t('dashStatusPending')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Crop Production & Yield */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-[#0f172a]">{t('dashCropProductionYield')}</h4>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowSeasonDropdown(!showSeasonDropdown)}
                    className="text-[10px] text-[#64748b] bg-[#f8faf8] px-2 py-0.5 rounded border border-[#e2e8e2] flex items-center gap-1 hover:text-[#1b7f45]"
                  >
                    <span>{selectedSeason}</span>
                    <ChevronDown className="h-2.5 w-2.5" />
                  </button>
                  {showSeasonDropdown && (
                    <div className="absolute right-0 top-full mt-1 w-28 bg-white border border-[#e2e8e2] rounded-lg shadow-lg py-1 z-30">
                      {['This Season', 'Kharif 2025', 'Rabi 2025'].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => {
                            setSelectedSeason(s)
                            setShowSeasonDropdown(false)
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
                {/* Paddy */}
                <div className="border border-[#f1f5f9] rounded-xl p-2.5 text-center bg-[#fafdfa]">
                  <img
                    src="/crop-paddy.jpg"
                    alt="Paddy"
                    className="h-10 w-10 mx-auto rounded-full object-cover ring-2 ring-emerald-500/20 mb-1.5 shadow-xs"
                  />
                  <p className="text-xs font-bold text-[#0f172a]">{t('dashCropPaddy')}</p>
                  <p className="text-[10px] text-[#64748b]">2.5 {t('dashAcres')}</p>
                  <p className="text-[9px] text-[#94a3b8] mt-1">{t('dashExpectedYield')}</p>
                  <p className="text-xs font-bold text-[#0f172a]">12 {t('dashQuintals')}</p>
                  <div className="mt-2 h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#16a34a] rounded-full" style={{ width: '70%' }} />
                  </div>
                  <span className="text-[9px] text-[#64748b] font-medium block mt-1">70%</span>
                </div>

                {/* Maize */}
                <div className="border border-[#f1f5f9] rounded-xl p-2.5 text-center bg-[#fffdfa]">
                  <img
                    src="/crop-maize.jpg"
                    alt="Maize"
                    className="h-10 w-10 mx-auto rounded-full object-cover ring-2 ring-amber-500/20 mb-1.5 shadow-xs"
                  />
                  <p className="text-xs font-bold text-[#0f172a]">{t('dashCropMaize')}</p>
                  <p className="text-[10px] text-[#64748b]">1.8 {t('dashAcres')}</p>
                  <p className="text-[9px] text-[#94a3b8] mt-1">{t('dashExpectedYield')}</p>
                  <p className="text-xs font-bold text-[#0f172a]">10 {t('dashQuintals')}</p>
                  <div className="mt-2 h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#f59e0b] rounded-full" style={{ width: '60%' }} />
                  </div>
                  <span className="text-[9px] text-[#64748b] font-medium block mt-1">60%</span>
                </div>

                {/* Cotton */}
                <div className="border border-[#f1f5f9] rounded-xl p-2.5 text-center bg-[#fafbfe]">
                  <img
                    src="/crop-cotton.jpg"
                    alt="Cotton"
                    className="h-10 w-10 mx-auto rounded-full object-cover ring-2 ring-blue-500/20 mb-1.5 shadow-xs"
                  />
                  <p className="text-xs font-bold text-[#0f172a]">{t('dashCropCotton')}</p>
                  <p className="text-[10px] text-[#64748b]">3.0 {t('dashAcres')}</p>
                  <p className="text-[9px] text-[#94a3b8] mt-1">{t('dashExpectedYield')}</p>
                  <p className="text-xs font-bold text-[#0f172a]">15 {t('dashQuintals')}</p>
                  <div className="mt-2 h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#3b82f6] rounded-full" style={{ width: '50%' }} />
                  </div>
                  <span className="text-[9px] text-[#64748b] font-medium block mt-1">50%</span>
                </div>
              </div>
            </div>
          </div>

          {/* SUB-COLUMN B: EARNINGS, TENANTS & GIS MAP (7 COLS) */}
          <div className="xl:col-span-7 space-y-5">
            {/* 1. Earnings Overview & Land Usage side-by-side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Earnings Bar Chart */}
              <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-bold text-[#0f172a]">{t('dashEarningsOverview')}</h4>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowTimeRangeDropdown(!showTimeRangeDropdown)}
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
                              setTimeRange(tr)
                              setShowTimeRangeDropdown(false)
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
                  <span className="text-lg font-bold text-[#0f172a]">â‚¹ 1,28,500</span>
                  <span className="text-[10px] font-bold text-[#16a34a]">â†‘ 12%</span>
                  <span className="text-[9px] text-[#94a3b8]">vs. previous 6 months</span>
                </div>

                {/* Bar Chart */}
                <div className="h-24 flex items-end justify-between gap-2 pt-2 border-b border-[#f1f5f9]">
                  {[
                    { m: 'Jan', h: 30 },
                    { m: 'Feb', h: 45 },
                    { m: 'Mar', h: 60 },
                    { m: 'Apr', h: 40 },
                    { m: 'May', h: 75 },
                    { m: 'Jun', h: 90 },
                  ].map((b, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        style={{ height: `${b.h}%` }}
                        className="w-full bg-[#1b7f45] rounded-t-sm hover:opacity-80 transition"
                      />
                      <span className="text-[9px] text-[#94a3b8]">{b.m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Land Usage Donut */}
              <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between">
                <h4 className="text-xs font-bold text-[#0f172a] mb-1">{t('dashLandUsage')}</h4>
                <div className="flex items-center gap-4 my-1">
                  <div className="relative w-20 h-20 shrink-0">
                    <svg width="80" height="80" viewBox="0 0 42 42" className="rotate-[-90deg]">
                      <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f1f5f9" strokeWidth="5.5" />
                      <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#16a34a" strokeWidth="6" strokeDasharray="60 40" strokeDashoffset="0" />
                      <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f59e0b" strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="-60" />
                      <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#3b82f6" strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="-80" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xs font-bold text-[#0f172a] leading-none">{parcels.length}</span>
                      <span className="text-[8px] text-[#94a3b8]">{t('dashTotalParcels')}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[10px] text-[#475569]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                      <span>{t('dashStatusRented')}</span>
                      <span className="font-semibold text-[#0f172a] ml-auto">3 (60%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
                      <span>{t('dashStatusAvailable')}</span>
                      <span className="font-semibold text-[#0f172a] ml-auto">1 (20%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                      <span>{t('dashStatusPending')}</span>
                      <span className="font-semibold text-[#0f172a] ml-auto">1 (20%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Recent Tenant Requests */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-[#0f172a]">{t('dashRecentTenantRequests')}</h4>
                <button
                  type="button"
                  onClick={() => setActiveTab('requests')}
                  className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
                >
                  {t('dashViewAll')} <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>

              <div className="space-y-2.5">
                {tenantRequests.map((tr) => (
                  <div key={tr.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-[#f8faf8] transition border border-[#f1f5f9]">
                    <div className="flex items-center gap-2.5">
                      <img src={tr.avatar} alt={tr.name} className="h-8 w-8 rounded-full object-cover" />
                      <div>
                        <p className="text-xs font-bold text-[#0f172a] leading-none">{tr.name}</p>
                        <p className="text-[10px] text-[#64748b] mt-0.5">
                          {tr.acres} <span className="text-slate-300">|</span> {tr.crop} <span className="text-slate-300">|</span> {tr.duration}
                        </p>
                        <p className="text-[9px] text-[#94a3b8]">{tr.timeAgo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {tr.status === 'accepted' ? (
                        <span className="text-[11px] font-bold text-[#1b7f45] bg-[#e8f5e9] px-2.5 py-1 rounded-lg">
                          {t('dashAccepted')}
                        </span>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => setSelectedTenantDetails(tr)}
                            className="px-2.5 py-1 text-[11px] font-medium text-[#475569] bg-[#f8faf8] border border-[#e2e8e2] rounded-lg hover:bg-slate-100"
                          >
                            {t('dashView')}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAcceptTenant(tr.id, tr.name)}
                            className="px-3 py-1 text-[11px] font-semibold text-white bg-[#1b7f45] hover:bg-[#146235] rounded-lg shadow-sm"
                          >
                            {t('dashAccept')}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Land Location GIS Satellite Map */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold text-[#0f172a]">{t('dashLandLocation')}</h4>
                <button
                  type="button"
                  onClick={() => setActiveTab('parcels')}
                  className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
                >
                  {t('dashViewAll')} <ArrowUpRight className="h-3 w-3" />
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

                {/* Surveyed Polygon Boundary overlays */}
                <div className="absolute top-3 left-6 bg-white/95 backdrop-blur-sm text-[#0f172a] px-2 py-0.5 rounded text-[9px] font-bold shadow border border-emerald-500">
                  North Field<br />2.5 ac
                </div>
                <div className="absolute top-5 right-6 bg-white/95 backdrop-blur-sm text-[#0f172a] px-2 py-0.5 rounded text-[9px] font-bold shadow border border-emerald-500">
                  East Field<br />1.8 ac
                </div>
                <div className="absolute bottom-4 left-6 bg-white/95 backdrop-blur-sm text-[#0f172a] px-2 py-0.5 rounded text-[9px] font-bold shadow border border-emerald-500">
                  West Field<br />3.0 ac
                </div>
                <div className="absolute bottom-4 right-8 bg-white/95 backdrop-blur-sm text-[#0f172a] px-2 py-0.5 rounded text-[9px] font-bold shadow border border-emerald-500">
                  South Field<br />2.2 ac
                </div>

                <button
                  type="button"
                  onClick={() => showToast('Re-centering GIS satellite telemetry...')}
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

      {/* RIGHT 3 COLUMNS (25-28% Width) - Quote Card, Profile, Actions, Notifications */}
      <div className="col-span-12 xl:col-span-3 lg:col-span-4 space-y-4">
        {/* 1. SEPARATE QUOTE CARD */}
        <div className="bg-white rounded-2xl p-5 border border-[#e2e8e2] shadow-sm flex flex-col justify-between min-h-[160px] relative">
          <div className="flex items-start gap-2.5">
            <span className="text-[#16a34a] text-lg font-bold">ðŸƒ</span>
            <p className="text-[12px] font-medium text-[#334155] italic leading-relaxed pt-0.5">
              {t('dashQuote')}
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <Sprout className="h-5 w-5 text-[#16a34a]" />
          </div>
        </div>

        {/* 2. LANDLORD PROFILE CARD */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm text-center relative">
          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className="absolute top-3.5 right-3.5 text-[#94a3b8] hover:text-[#475569]"
            title="Edit Settings"
          >
            <Settings className="h-3.5 w-3.5" />
          </button>

          <img
            src="/ramu-naik.jpg"
            alt="Ramu Naik"
            className="h-16 w-16 rounded-full object-cover mx-auto ring-2 ring-[#1b7f45]/20 shadow-sm"
          />

          <h3 className="text-sm font-bold text-[#0f172a] mt-2">{user?.name || 'Ramu Naik'}</h3>
          <p className="text-[10px] text-[#64748b]">{t('dashLandlordRole')}</p>
          <p className="text-[10px] text-[#94a3b8] flex items-center justify-center gap-1 mt-0.5">
            <MapPin className="h-2.5 w-2.5 text-[#1b7f45]" /> {selectedLocation}
          </p>

          <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-[#1b7f45] bg-[#e8f5e9] px-2.5 py-0.5 rounded-full border border-[#c8e6c9]">
            <CheckCircle2 className="h-2.5 w-2.5" /> {t('dashVerified')}
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#f1f5f9]">
            <div className="p-2 bg-[#f8faf8] rounded-xl text-left flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center shrink-0">
                <Layers className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-[9px] text-[#64748b] block">{t('dashLandHoldings')}</span>
                <span className="text-xs font-bold text-[#0f172a] block">12.5 {t('dashAcres')}</span>
              </div>
            </div>
            <div className="p-2 bg-[#f8faf8] rounded-xl text-left flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center shrink-0">
                <Sprout className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-[9px] text-[#64748b] block">{t('dashFarmingSince')}</span>
                <span className="text-xs font-bold text-[#0f172a] block">15 {t('dashYears')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. QUICK ACTIONS CARD */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
          <h4 className="text-xs font-bold text-[#0f172a] mb-3">{t('dashQuickActions')}</h4>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setShowAddParcelModal(true)}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#1b7f45] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center mb-1.5">
                <Plus className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                {t('dashAddLandParcel')}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('requests')}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#3b82f6] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#eff6ff] text-[#1d4ed8] flex items-center justify-center mb-1.5">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                {t('dashFindTenants')}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('leases')}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#16a34a] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-1.5">
                <FileText className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                {t('dashCreateLease')}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('reports')}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#7e22ce] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#f3e8ff] text-[#7e22ce] flex items-center justify-center mb-1.5">
                <BarChart3 className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                {t('dashViewReports')}
              </span>
            </button>
          </div>
        </div>

        {/* 4. RECENT NOTIFICATIONS CARD */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-[#0f172a]">{t('dashRecentNotifications')}</h4>
            <button
              type="button"
              onClick={() => setActiveTab('notifications')}
              className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
            >
              {t('dashViewAll')} <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="space-y-2.5">
            {[
              {
                icon: Users,
                bg: 'bg-[#e8f5e9] text-[#1b7f45]',
                title: 'New tenant request from Suresh Kumar',
                time: '2 hours ago',
              },
              {
                icon: FileText,
                bg: 'bg-[#eff6ff] text-[#1d4ed8]',
                title: 'Lease agreement signed for East Field',
                time: '5 hours ago',
              },
              {
                icon: CreditCard,
                bg: 'bg-[#fff7ed] text-[#ea580c]',
                title: 'Payment received from Lakshmi Devi',
                time: '1 day ago',
              },
              {
                icon: MessageSquare,
                bg: 'bg-[#e8f5e9] text-[#16a34a]',
                title: 'New message from Ravi Teja',
                time: '1 day ago',
              },
            ].map((n, i) => {
              const NIcon = n.icon
              return (
                <div key={i} className="flex items-start gap-2.5 p-1 rounded-lg hover:bg-[#f8faf8] transition">
                  <div className={`h-7 w-7 rounded-full ${n.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                    <NIcon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-[#0f172a] leading-tight truncate">
                      {n.title}
                    </p>
                    <span className="text-[9px] text-[#94a3b8]">{n.time}</span>
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
