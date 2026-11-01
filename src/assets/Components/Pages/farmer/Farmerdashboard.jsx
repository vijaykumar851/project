import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, ChevronDown, CreditCard, FileText, Layers, MapPin, Sprout, Users } from 'lucide-react'
import Sidebar from '../Sidebar.jsx'
import Navbar from '../Navbar.jsx'
import { sidebarComponentsMap } from './pages/index.js'
import { translateDashboard as translate } from '../../../../dashboardTranslations.js'

function FarmerDashboardOverview({
  userName = 'User',
  language = 'en',
  t = (text) => translate(language, text),
}) {
  const [timeRange, setTimeRange] = useState('Last 6 Months')
  const [showTimeDropdown, setShowTimeDropdown] = useState(false)

  return (
    <div className="w-full min-w-0 p-6 space-y-5 bg-[#f8faf8]">
      {/* 12-Column Grid matching reference UI */}
      <div className="grid grid-cols-12 gap-5 w-full">
        {/* ================= LEFT SECTION (9 COLUMNS) ================= */}
        <div className="col-span-12 xl:col-span-9 lg:col-span-8 space-y-5">
          {/* A. HERO COVER BANNER */}
          <div className="relative rounded-2xl overflow-hidden min-h-[160px] flex items-center px-8 py-6 shadow-sm border border-[#cde0cd] bg-gradient-to-r from-[#dcfce7] via-[#f0fdf4] to-[#ecfdf5]">
            <img
              src="/cover-banner.jpg"
              alt="Agricultural Landscape Panorama"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-lg">
              <span className="text-[12px] font-semibold text-[#475569] block mb-1">
                {t('Welcome back,')}
              </span>
              <h1 className="text-2xl sm:text-[30px] font-black tracking-tight text-[#0f172a] mb-2 flex items-center gap-2">
                {userName}! <span className="text-[#16a34a]">🌾</span>
              </h1>
              <p className="text-xs sm:text-[13px] text-[#334155] font-medium leading-relaxed max-w-md">
                {t('Manage your land, find reliable tenants and get the best value for your harvest.')}
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
                  <span className="text-[11px] font-medium text-[#64748b] block">{t('Total Land Parcels')}</span>
                  <span className="text-xl font-bold text-[#0f172a] leading-tight block">3</span>
                </div>
              </div>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#1b7f45] hover:underline flex items-center gap-1 mt-2.5"
              >
                {t('View Details')} <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>

            {/* 2. Active Tenants / Crops */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#f3e8ff] text-[#7e22ce] flex items-center justify-center">
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-[#64748b] block">{t('Active Tenants')}</span>
                  <span className="text-xl font-bold text-[#0f172a] leading-tight block">3</span>
                </div>
              </div>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#7e22ce] hover:underline flex items-center gap-1 mt-2.5"
              >
                {t('View Tenants')} <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>

            {/* 3. Pending Requests */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#fff7ed] text-[#ea580c] flex items-center justify-center">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-[#64748b] block">{t('Pending Requests')}</span>
                  <span className="text-xl font-bold text-[#0f172a] leading-tight block">3</span>
                </div>
              </div>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#ea580c] hover:underline flex items-center gap-1 mt-2.5"
              >
                {t('View Requests')} <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>

            {/* 4. Total Earnings */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                  <CreditCard className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[11px] font-medium text-[#64748b] block">{t('Total Earnings (This Season)')}</span>
                  <span className="text-xl font-bold text-[#0f172a] leading-tight block">₹ 1,28,500</span>
                </div>
              </div>
              <button
                type="button"
                className="text-[11px] font-semibold text-[#2563eb] hover:underline flex items-center gap-1 mt-2.5"
              >
                {t('View Reports')} <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* C. ROW OF 3 CARDS (My Land Parcels, Earnings Overview, Land Usage) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. My Land Parcels Card */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#0f172a]">{t('My Land Parcels')}</h3>
                <button
                  type="button"
                  className="text-[11px] font-semibold text-[#1b7f45] hover:underline flex items-center gap-0.5"
                >
                  {t('View All')} <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>

              <div className="space-y-2.5">
                {/* Parcel 1 */}
                <div className="flex items-center gap-3 p-2 rounded-xl border border-[#f1f5f9] hover:bg-[#f8faf8] transition">
                  <div className="h-12 w-12 rounded-xl border-2 border-[#16a34a] overflow-hidden shrink-0">
                    <img
                      src="/crop-paddy.jpg"
                      alt="North Field"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-[#0f172a] truncate">North Field</h4>
                    <p className="text-[10px] text-[#64748b]">2.5 Acres · Paddy</p>
                    <p className="text-[10px] text-[#94a3b8] flex items-center gap-1">
                      <MapPin className="h-2.5 w-2.5" /> Hyderabad, Telangana
                    </p>
                  </div>
                </div>

                {/* Parcel 2 */}
                <div className="flex items-center gap-3 p-2 rounded-xl border border-[#f1f5f9] hover:bg-[#f8faf8] transition">
                  <div className="h-12 w-12 rounded-xl border-2 border-[#16a34a] overflow-hidden shrink-0">
                    <img
                      src="/crop-maize.jpg"
                      alt="East Field"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-[#0f172a] truncate">East Field</h4>
                    <p className="text-[10px] text-[#64748b]">1.8 Acres · Maize</p>
                    <p className="text-[10px] text-[#94a3b8] flex items-center gap-1">
                      <MapPin className="h-2.5 w-2.5" /> Sangareddy, Telangana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Earnings Overview Card */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-3">
              <div className="flex items-center justify-between relative">
                <div>
                  <h3 className="text-xs font-bold text-[#0f172a]">{t('Earnings')}</h3>
                  <span className="text-[10px] text-[#64748b] block">{t('Overview')}</span>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowTimeDropdown((v) => !v)}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#475569] bg-[#f8faf8] px-2.5 py-1 rounded-lg border border-[#e2e8e2]"
                  >
                    <span>{timeRange}</span>
                    <ChevronDown className="h-3 w-3 text-[#94a3b8]" />
                  </button>
                  {showTimeDropdown && (
                    <div className="absolute right-0 top-full mt-1 bg-white border border-[#e2e8e2] rounded-xl shadow-lg z-30 p-1 w-32">
                      {['Last 6 Months', 'Last 12 Months', 'This Year'].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => {
                            setTimeRange(range)
                            setShowTimeDropdown(false)
                          }}
                          className="w-full text-left px-2.5 py-1.5 text-xs text-[#475569] hover:bg-[#f1f6f1] rounded-lg"
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-[#64748b] block">₹</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-[#0f172a]">1,28,500</span>
                  <span className="text-[10px] font-bold text-[#16a34a] flex items-center">
                    ↑ 12% <span className="text-[#94a3b8] font-normal ml-1">vs prev</span>
                  </span>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="flex items-end justify-between h-20 pt-2 gap-1.5 border-b border-[#f1f5f9]">
                {[
                  { month: 'Jan', h: 42 },
                  { month: 'Feb', h: 65 },
                  { month: 'Mar', h: 55 },
                  { month: 'Apr', h: 72 },
                  { month: 'May', h: 95 },
                  { month: 'Jun', h: 84 },
                ].map((b) => (
                  <div key={b.month} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-[#1b7f45] rounded-t-sm transition-all"
                      style={{ height: `${b.h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Land Usage Donut Chart Card */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-[#0f172a]">{t('Land Usage')}</h3>

              <div className="flex items-center gap-4 pt-1">
                {/* Donut graphic */}
                <div className="relative h-20 w-20 shrink-0">
                  <div
                    className="h-full w-full rounded-full"
                    style={{
                      background: 'conic-gradient(#1b7f45 0% 60%, #38bdf8 60% 80%, #facc15 80% 100%)',
                    }}
                  />
                  <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-black text-[#0f172a]">4</span>
                    <span className="text-[7px] text-[#64748b] leading-tight">Land Parcels</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-1 text-[11px] text-[#475569] flex-1">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#1b7f45]" />
                      Rented
                    </span>
                    <span className="font-bold text-[#0f172a]">3 (60%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#38bdf8]" />
                      Available
                    </span>
                    <span className="font-bold text-[#0f172a]">1 (20%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#facc15]" />
                      Under Maint.
                    </span>
                    <span className="font-bold text-[#0f172a]">1 (20%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* D. ROW 2: Weather & Alerts, Today's Tasks, Recent Activities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Weather & Alerts */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#0f172a]">{t('Weather & Alerts')}</h3>
                <span className="text-[11px] text-[#1b7f45] font-semibold hover:underline cursor-pointer">
                  {t('View All')} →
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🌤️</span>
                <div>
                  <div className="text-xl font-black text-[#0f172a]">28°C</div>
                  <p className="text-[10px] text-[#64748b]">Partly Cloudy · Hyderabad</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <div className="bg-[#f8faf8] p-1.5 rounded-lg text-[10px] text-[#475569] border border-[#eef2ee]">
                  💧 62% Humidity
                </div>
                <div className="bg-[#f8faf8] p-1.5 rounded-lg text-[10px] text-[#475569] border border-[#eef2ee]">
                  ≋ 12 km/h Wind
                </div>
              </div>
            </div>

            {/* Today's Tasks */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#0f172a]">{t("Today's Tasks")}</h3>
                <span className="text-[11px] text-[#1b7f45] font-semibold hover:underline cursor-pointer">
                  {t('View All')} →
                </span>
              </div>
              <div className="space-y-1.5">
                {[
                  { text: 'Irrigate paddy field', prio: 'High', color: 'bg-red-50 text-red-600' },
                  { text: 'Check livestock feed', prio: 'Medium', color: 'bg-amber-50 text-amber-600' },
                  { text: 'Apply fertilizer to chilli', prio: 'Low', color: 'bg-emerald-50 text-emerald-600' },
                ].map((tItem) => (
                  <div key={tItem.text} className="flex items-center justify-between text-xs p-1.5 rounded-lg border border-[#f1f5f9]">
                    <span className="text-[#334155] text-[11px] font-medium">{t(tItem.text)}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${tItem.color}`}>
                      {t(tItem.prio)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-[#0f172a]">{t('Recent Activities')}</h3>
                <span className="text-[11px] text-[#1b7f45] font-semibold hover:underline cursor-pointer">
                  {t('View All')} →
                </span>
              </div>
              <div className="space-y-2 text-[11px] text-[#475569]">
                <div className="flex items-start gap-2">
                  <span className="text-[#1b7f45] font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-[#0f172a]">1 ton paddy listed</p>
                    <span className="text-[9px] text-[#94a3b8]">2 hours ago</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#1b7f45] font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-[#0f172a]">Fertilizer added to Farm 1</p>
                    <span className="text-[9px] text-[#94a3b8]">5 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SECTION (3 COLUMNS) ================= */}
        <div className="col-span-12 xl:col-span-3 lg:col-span-4 space-y-5">
          {/* 1. Quote Box */}
          <div className="bg-white rounded-2xl border border-[#e2e8e2] p-5 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-3">
              <span className="text-xl text-[#94a3b8]">❝</span>
              <p className="text-[12px] italic text-[#475569] leading-relaxed">
                &quot;Good land in the right hands brings prosperity to both farmer and society.&quot;
              </p>
            </div>
            <div className="mt-3 flex justify-end">
              <span className="text-emerald-600 text-lg">🌱</span>
            </div>
          </div>

          {/* 2. Profile Card */}
          <div className="bg-white rounded-2xl border border-[#e2e8e2] p-5 shadow-sm text-center">
            <div className="relative inline-block mx-auto mb-3">
              <img
                src="/ramu-naik.jpg"
                alt="Farmer avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#1b7f45] shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <h3 className="text-base font-bold text-[#0f172a]">{userName}</h3>
            <p className="text-[11px] text-[#64748b] font-medium">{t('Farmer')}</p>
            <p className="text-[11px] text-[#64748b] flex items-center justify-center gap-1 mt-0.5">
              <MapPin className="h-3 w-3 text-[#1b7f45]" /> {t('Hyderabad, Telangana')}
            </p>
            <div className="mt-2.5 inline-flex items-center gap-1 bg-[#e8f5e9] text-[#1b7f45] text-[10px] font-bold px-3 py-1 rounded-full">
              <CheckCircle2 className="h-3 w-3" /> {t('Verified')}
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#f1f5f9]">
              <div className="bg-[#f8faf8] p-2.5 rounded-xl border border-[#eef2ee]">
                <div className="flex items-center justify-center gap-1.5 text-[#1b7f45] text-xs font-bold">
                  <Layers className="h-3.5 w-3.5" />
                  <span>12.5</span>
                </div>
                <span className="text-[10px] text-[#64748b] block mt-0.5">{t('Acres Holdings')}</span>
              </div>
              <div className="bg-[#f8faf8] p-2.5 rounded-xl border border-[#eef2ee]">
                <div className="flex items-center justify-center gap-1.5 text-[#1b7f45] text-xs font-bold">
                  <Sprout className="h-3.5 w-3.5" />
                  <span>15 Years</span>
                </div>
                <span className="text-[10px] text-[#64748b] block mt-0.5">{t('Experience')}</span>
              </div>
            </div>
          </div>

          {/* 3. Quick Actions */}
          <div className="bg-white rounded-2xl border border-[#e2e8e2] p-5 shadow-sm space-y-3">
            <h4 className="text-[13px] font-bold text-[#0f172a]">{t('Quick Actions')}</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: '🌱', label: 'Add Crop' },
                { icon: '🐄', label: 'Add Livestock' },
                { icon: '₹', label: 'Add Expense' },
                { icon: '🛒', label: 'List Produce' },
                { icon: '🚜', label: 'Book Service' },
                { icon: '🏛', label: 'Check Schemes' },
              ].map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-[#e2e8e2] bg-[#f8faf8] hover:bg-[#eaf4ea] hover:border-[#1b7f45] transition text-left text-xs font-semibold text-[#1e293b]"
                >
                  <span className="text-sm">{action.icon}</span>
                  <span className="text-[11px] leading-tight">{t(action.label)}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Farmerdashboard({
  language = 'en',
  onSwitchRole,
  onLogout,
  userName = 'Ramu Naik',
}) {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [farmTab, setFarmTab] = useState('Farms')
  const [period, setPeriod] = useState('6 Months')
  const [searchQuery, setSearchQuery] = useState('')
  const t = (text) => translate(language, text)
  const ActiveComponent =
    activeNav === 'Dashboard'
      ? FarmerDashboardOverview
      : sidebarComponentsMap[activeNav] || FarmerDashboardOverview

  return (
    <div className="min-h-screen bg-[#f8faf8] text-[#1e293b] font-sans antialiased">
      <Navbar
        role="Farmer"
        onSwitchRole={onSwitchRole}
        onLogout={onLogout}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="flex w-full min-h-[calc(100vh-72px)]">
        <Sidebar
          role="Farmer"
          activeRoute={activeNav}
          onNavigate={setActiveNav}
        />

        <main className="flex-1 min-w-0 bg-[#f8faf8]">
          <ActiveComponent
            activeNav={activeNav}
            userName={userName}
            farmTab={farmTab}
            setFarmTab={setFarmTab}
            period={period}
            setPeriod={setPeriod}
            language={language}
            t={t}
          />
        </main>
      </div>
    </div>
  )
}
