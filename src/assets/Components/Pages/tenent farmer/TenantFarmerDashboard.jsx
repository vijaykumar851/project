import { useEffect, useRef, useState } from 'react';
import { MarketplaceProvider, useMarketplace } from './pages/MarketplaceContext';
import {
  FileText,
  MapPin,
  Sprout,
  CreditCard,
  Layers,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Settings,
  Plus,
} from '../landlord/Dashboard/Icons.jsx';
import { Headphones, Tractor } from 'lucide-react';
import Navbar from '../Navbar.jsx';
import Sidebar from '../Sidebar.jsx';
import { XIcon, SproutIcon } from './components/Icons.jsx';
import MyLeasesPage from './pages/MyLeasesPage.jsx';
import MyCropsPage from './pages/MyCropsPage.jsx';
import TasksPage from './pages/TasksPage.jsx';
import MarketPricesPage from './pages/MarketPricesPage.jsx';
import EquipmentPage from './pages/EquipmentPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import NotificationsPage from './pages/NotificationsPage.jsx';
import FarmerProfilePage from './pages/FarmerProfilePage.jsx';
import LandMarketplacePage from './pages/LandMarketplacePage.jsx';

function DetailsModal() {
  const { activeModal, setActiveModal, showToast } = useMarketplace();

  if (!activeModal) return null;

  const { type, data } = activeModal;
  const closeModal = () => setActiveModal(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" onClick={closeModal}>
      <div
        className="w-full max-w-[580px] overflow-hidden rounded-2xl bg-white shadow-xl"
        style={{ maxWidth: '580px' }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SproutIcon className="w-5 h-5 text-green-700" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
              {type === 'lease' && `Lease Agreement: ${data.landName}`}
              {type === 'crop' && `Crop Cycle Details: ${data.cropName}`}
              {type === 'land' && `Available Land Parcel: ${data.landName}`}
            </h3>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '4px' }}
          >
            <XIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-5">
          <img
            src={data.image}
            alt={data.landName || data.cropName}
            style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }}
          />
          {type === 'lease' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85rem' }}>
              <div><strong>Survey Number:</strong> {data.surveyNumber || 'SY-42/A'}</div>
              <div><strong>Land Owner:</strong> {data.landOwnerName} ({data.landOwnerContact})</div>
              <div><strong>Total Area:</strong> {data.area} {data.areaUnit}</div>
              <div><strong>Rent Rate:</strong> ₹ {data.rentPerAcre.toLocaleString()} / acre</div>
              <div><strong>Soil & Irrigation:</strong> {data.soilType} • {data.irrigationType}</div>
              <div><strong>Lease Period:</strong> {data.leasePeriod}</div>
              <p>{data.description}</p>
            </div>
          )}
          {type === 'crop' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85rem' }}>
              <div><strong>Cultivated Plot:</strong> {data.landName}</div>
              <div><strong>Current Stage:</strong> {data.cropStage} ({data.progress}%)</div>
              <div><strong>Season & Sowing:</strong> {data.season} • {data.sowingDate}</div>
              <div><strong>Expected Harvest Yield:</strong> {data.expectedYield}</div>
              <p>{data.notes}</p>
            </div>
          )}
          {type === 'land' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85rem' }}>
              <div><strong>Land Parcel:</strong> {data.landName} ({data.area} {data.areaUnit})</div>
              <div><strong>Status:</strong> {data.status}</div>
              <div><strong>Location:</strong> {data.location}, Telangana</div>
              <div><strong>Expected Rent Rate:</strong> ₹ {data.rentPerAcre || 9000} / acre</div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 border-t border-slate-100 p-4">
          <button type="button" className="rounded-lg border border-green-600 px-3 py-2 text-sm font-bold text-green-600 transition hover:bg-green-600 hover:text-white" onClick={closeModal}>Close</button>
          {type === 'land' && data.status === 'Available' && (
            <button
              type="button"
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-green-700"
              onClick={() => {
                showToast('Lease inquiry request submitted to Landowner!');
                closeModal();
              }}
            >
              Submit Lease Inquiry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function TenantFarmerDashboardContent() {
  const {
    user,
    leases,
    crops,
    tasks,
    summaryMetrics,
    navigateTo,
    setActiveModal,
  } = useMarketplace();

  const [timeRange, setTimeRange] = useState('Last 6 Months');
  const [showTimeRangeDropdown, setShowTimeRangeDropdown] = useState(false);

  function handleSelectLease(lease) {
    setActiveModal({ type: 'lease', data: lease });
  }

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
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-lg">
            <span className="text-[12px] font-semibold text-[#475569] block mb-1">
              Welcome back,
            </span>
            <h1 className="text-2xl sm:text-[30px] font-black tracking-tight text-[#0f172a] mb-2 flex items-center gap-2">
              {user?.farmerName || user?.name || 'Ravi Teja'}! <span className="text-[#16a34a]">🌱</span>
            </h1>
            <p className="text-xs sm:text-[13px] text-[#334155] font-medium leading-relaxed max-w-md">
              Your hard work grows more than crops, it grows a better tomorrow.
            </p>
          </div>
        </div>

        {/* B. 4 METRIC STATS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {/* 1. Active Leases */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center">
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">Active Leases</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">
                  {summaryMetrics?.activeLeasesCount || leases?.length || 2}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('leases')}
              className="text-[11px] font-semibold text-[#1b7f45] hover:underline flex items-center gap-1 mt-2.5"
            >
              View Details <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* 2. Total Land Area */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#f3e8ff] text-[#7e22ce] flex items-center justify-center">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">Total Land Area</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">
                  {summaryMetrics?.totalLandArea || '4.5'} Acres
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('leases')}
              className="text-[11px] font-semibold text-[#7e22ce] hover:underline flex items-center gap-1 mt-2.5"
            >
              View Land <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* 3. Current Crops */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#fef3c7] text-[#d97706] flex items-center justify-center">
                <Sprout className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">Current Crops</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">
                  {summaryMetrics?.currentCropsCount || crops?.length || 2}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('crops')}
              className="text-[11px] font-semibold text-[#d97706] hover:underline flex items-center gap-1 mt-2.5"
            >
              View Crops <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* 4. Total Monthly Rent */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#e0e7ff] text-[#4f46e5] flex items-center justify-center">
                <CreditCard className="h-4 w-4" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-[#64748b] block">Total Monthly Rent</span>
                <span className="text-xl font-bold text-[#0f172a] leading-tight block">
                  ₹ {summaryMetrics?.totalMonthlyRent?.toLocaleString() || '18,000'}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('leases')}
              className="text-[11px] font-semibold text-[#4f46e5] hover:underline flex items-center gap-1 mt-2.5"
            >
              View Payments <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* C. ROW 1: MY LEASED LANDS + EARNINGS & LAND USAGE */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          {/* Sub-Column 1: My Leased Lands (5 cols) */}
          <div className="xl:col-span-5 bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="text-sm font-bold text-[#0f172a]">My Leased Lands</h3>
                <button
                  type="button"
                  onClick={() => navigateTo('leases')}
                  className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
                >
                  View All <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-3">
                {leases?.slice(0, 4).map((l) => (
                  <div
                    key={l.leaseId}
                    className="border border-[#e2e8e2] rounded-xl overflow-hidden hover:border-[#1b7f45] transition bg-white"
                  >
                    <div className="relative h-24 w-full overflow-hidden bg-slate-100">
                      <img
                        src={l.image || '/cover-banner.jpg'}
                        alt={l.landName}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/cover-banner.jpg';
                        }}
                      />
                      <div className="absolute inset-0 border-2 border-lime-400 m-2 rounded pointer-events-none" />
                    </div>
                    <div className="p-2.5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-[#0f172a] truncate">{l.landName}</h4>
                        <span className="text-slate-400 text-xs">⋮</span>
                      </div>
                      <p className="text-[10px] text-[#64748b] mt-0.5">
                        {l.area} {l.areaUnit} <span className="text-slate-300">|</span> {l.cropAssociated}
                      </p>
                      <p className="text-[9px] text-[#94a3b8] truncate">{l.location}</p>
                      <div className="mt-1.5 flex justify-between items-center">
                        <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#e8f5e9] text-[#1b7f45]">
                          {l.leaseStatus || 'Active'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleSelectLease(l)}
                          className="text-[9px] font-bold text-[#1b7f45] hover:underline"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-Column 2: Earnings & Land Usage (7 cols) */}
          <div className="xl:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Earnings Bar Chart */}
              <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-bold text-[#0f172a]">Seasonal Earnings</h4>
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
                              setTimeRange(tr);
                              setShowTimeRangeDropdown(false);
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
                  <span className="text-lg font-bold text-[#0f172a]">₹ 1,18,500</span>
                  <span className="text-[10px] font-bold text-[#16a34a]">↑ 14%</span>
                  <span className="text-[9px] text-[#94a3b8]">vs. previous 6 months</span>
                </div>

                {/* Bar Chart */}
                <div className="h-24 flex items-end justify-between gap-2 pt-2 border-b border-[#f1f5f9]">
                  {[
                    { m: 'Jan', h: 35 },
                    { m: 'Feb', h: 48 },
                    { m: 'Mar', h: 62 },
                    { m: 'Apr', h: 42 },
                    { m: 'May', h: 78 },
                    { m: 'Jun', h: 92 },
                  ].map((b, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        className="w-full rounded-t bg-[#1b7f45] transition-all hover:bg-[#156738]"
                        style={{ height: `${b.h}%` }}
                      />
                      <span className="text-[9px] text-[#94a3b8]">{b.m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Land Usage Donut Chart */}
              <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-[#0f172a]">Land Usage</h4>
                  <span className="text-[10px] font-semibold text-[#1b7f45] bg-[#e8f5e9] px-2 py-0.5 rounded-full">
                    4.5 Acres
                  </span>
                </div>

                <div className="flex items-center justify-around py-1">
                  <div className="relative h-24 w-24 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#16a34a" strokeWidth="4" strokeDasharray="56 100" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="30 100" strokeDashoffset="-56" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="14 100" strokeDashoffset="-86" />
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-sm font-bold text-[#0f172a] block leading-none">4.5</span>
                      <span className="text-[8px] text-[#64748b] block mt-0.5">Acres</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                      <span className="text-[#475569]">Paddy (2.5 Ac / 56%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
                      <span className="text-[#475569]">Maize (1.5 Ac / 30%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                      <span className="text-[#475569]">Fallow (0.5 Ac / 14%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* D. ROW 2: MY CROPS & PROGRESS */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-[#0f172a]">My Crops & Progress</h4>
            <button
              type="button"
              onClick={() => navigateTo('crops')}
              className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
            >
              View All <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {crops?.slice(0, 2).map((crop) => (
              <div
                key={crop.cropId}
                className="border border-[#f1f5f9] rounded-xl p-3 bg-[#fafbfe] flex items-center gap-3.5 hover:border-[#1b7f45] transition"
              >
                <img
                  src={crop.image || '/crop-paddy.jpg'}
                  alt={crop.name}
                  className="h-16 w-16 rounded-xl object-cover ring-2 ring-emerald-500/20 shadow-xs shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = '/crop-paddy.jpg';
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#0f172a] truncate">{crop.name}</p>
                    <span className="text-[10px] font-bold text-[#16a34a] bg-[#e8f5e9] px-2 py-0.5 rounded-full">
                      {crop.stage}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#64748b] mt-0.5">{crop.area} • Sown: {crop.sowingDate}</p>
                  <div className="mt-2 h-1.5 w-full bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full bg-[#16a34a] rounded-full" style={{ width: `${crop.progress}%` }} />
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[9px] text-[#94a3b8]">Harvest: {crop.expectedHarvest}</span>
                    <span className="text-[9px] font-bold text-[#16a34a]">{crop.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT 3 COLUMNS (25-28% Width) - Quote Card, Profile, Actions, Tasks */}
      <div className="col-span-12 xl:col-span-3 lg:col-span-4 space-y-4">
        {/* 1. SEPARATE QUOTE CARD */}
        <div className="bg-white rounded-2xl p-5 border border-[#e2e8e2] shadow-sm flex flex-col justify-between min-h-[160px] relative">
          <div className="flex items-start gap-2.5">
            <span className="text-[#16a34a] text-lg font-bold">🌱</span>
            <p className="text-[12px] font-medium text-[#334155] italic leading-relaxed pt-0.5">
              “Good farming is not just about growing crops, it&apos;s about growing your future.”
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <Sprout className="h-5 w-5 text-[#16a34a]" />
          </div>
        </div>

        {/* 2. TENANT FARMER PROFILE CARD */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm text-center relative">
          <button
            type="button"
            onClick={() => navigateTo('profile')}
            className="absolute top-3.5 right-3.5 text-[#94a3b8] hover:text-[#475569]"
            title="Edit Settings"
          >
            <Settings className="h-3.5 w-3.5" />
          </button>

          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
            alt={user?.farmerName || user?.name || 'Ravi Teja'}
            className="h-16 w-16 rounded-full object-cover mx-auto ring-2 ring-[#1b7f45]/20 shadow-sm"
          />

          <h3 className="text-sm font-bold text-[#0f172a] mt-2">
            {user?.farmerName || user?.name || 'Ravi Teja'}
          </h3>
          <p className="text-[10px] text-[#64748b]">Tenant Farmer</p>
          <p className="text-[10px] text-[#94a3b8] flex items-center justify-center gap-1 mt-0.5">
            <MapPin className="h-2.5 w-2.5 text-[#1b7f45]" /> Hyderabad, Telangana
          </p>

          <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-[#1b7f45] bg-[#e8f5e9] px-2.5 py-0.5 rounded-full border border-[#c8e6c9]">
            <CheckCircle2 className="h-2.5 w-2.5" /> Verified
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#f1f5f9]">
            <div className="p-2 bg-[#f8faf8] rounded-xl text-left flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center shrink-0">
                <Layers className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-[9px] text-[#64748b] block">Leased Land</span>
                <span className="text-xs font-bold text-[#0f172a] block">
                  {summaryMetrics?.totalLandArea || '4.5'} Acres
                </span>
              </div>
            </div>
            <div className="p-2 bg-[#f8faf8] rounded-xl text-left flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center shrink-0">
                <Sprout className="h-3.5 w-3.5" />
              </div>
              <div>
                <span className="text-[9px] text-[#64748b] block">Farming Exp.</span>
                <span className="text-xs font-bold text-[#0f172a] block">8 Years</span>
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
              onClick={() => navigateTo('land-marketplace')}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#1b7f45] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center mb-1.5">
                <Plus className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                Find Land For Lease
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigateTo('equipment')}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#3b82f6] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#eff6ff] text-[#1d4ed8] flex items-center justify-center mb-1.5">
                <Tractor className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                Book Equipment
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigateTo('services')}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#16a34a] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center mb-1.5">
                <Headphones className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                Farm Support
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigateTo('market-prices')}
              className="p-3 rounded-xl border border-[#e2e8e2] hover:border-[#7e22ce] hover:bg-[#f8faf8] transition flex flex-col items-center justify-center"
            >
              <div className="h-8 w-8 rounded-full bg-[#f3e8ff] text-[#7e22ce] flex items-center justify-center mb-1.5">
                <Sprout className="h-4 w-4" />
              </div>
              <span className="text-[11px] font-semibold text-[#0f172a] text-center leading-tight">
                Market Prices
              </span>
            </button>
          </div>
        </div>

        {/* 4. UPCOMING TASKS & REMINDERS CARD */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-[#0f172a]">Tasks & Reminders</h4>
            <button
              type="button"
              onClick={() => navigateTo('tasks')}
              className="text-xs font-semibold text-[#1b7f45] hover:underline flex items-center gap-1"
            >
              View All <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          <div className="space-y-2.5">
            {tasks?.slice(0, 3).map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-2.5 p-2 rounded-xl border border-[#f1f5f9] bg-[#fafbfe]"
              >
                <div className="h-6 w-6 rounded-full bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-[#0f172a] truncate">{task.task}</p>
                  <p className="text-[9px] text-[#94a3b8]">Due: {task.due}</p>
                </div>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#fef3c7] text-[#b45309]">
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TenantFarmerLayout({ onLogout, onSwitchRole }) {
  const { activeRoute, navigateTo, searchQuery, setSearchQuery, toast } = useMarketplace();
  const navigateToRef = useRef(navigateTo);

  useEffect(() => {
    navigateToRef.current = navigateTo;
  }, [navigateTo]);

  useEffect(() => {
    const routeByHash = {
      '#view-my-leases': 'leases',
      '#manage-crop-plan': 'crops',
      '#track-field-activity': 'tasks',
      '#market-prices': 'market-prices',
      '#manage-inputs-equipment': 'equipment',
      '#services-support': 'services',
      '#messages': 'messages',
      '#notifications': 'notifications',
      '#profile-settings': 'profile',
    };
    const syncRoute = () => navigateToRef.current(routeByHash[window.location.hash] || 'dashboard');

    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  function renderPage() {
    switch (activeRoute) {
      case 'leases':
        return <MyLeasesPage />;
      case 'crops':
        return <MyCropsPage />;
      case 'tasks':
        return <TasksPage />;
      case 'market-prices':
        return <MarketPricesPage />;
      case 'equipment':
        return <EquipmentPage />;
      case 'services':
        return <ServicesPage />;
      case 'messages':
        return <MessagesPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'profile':
        return <FarmerProfilePage />;
      case 'land-marketplace':
        return <LandMarketplacePage />;
      case 'dashboard':
      default:
        return <TenantFarmerDashboardContent />;
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#f4f7f4] text-[#1e293b] font-sans flex flex-col antialiased">
      {toast && (
        <div className="fixed top-24 right-5 z-50 flex items-center gap-2 bg-[#0c3b24] text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold animate-bounce border border-emerald-500/30">
          <span>🌱</span>
          <span>{toast.message}</span>
        </div>
      )}

      <Navbar
        role="Tenant Farmer"
        onLogout={onLogout}
        onSwitchRole={onSwitchRole}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="flex-1 flex min-w-0 flex-col lg:flex-row">
        <Sidebar role="Tenant Farmer" activeRoute={activeRoute} />
        <div className="flex-1 flex flex-col min-w-0 bg-[#f4f7f4]">
          <div className="p-5 xl:p-6 w-full flex-1">{renderPage()}</div>
        </div>
      </div>

      <DetailsModal />
    </div>
  );
}

export default function TenantFarmerDashboard({ onLogout, onSwitchRole }) {
  return (
    <MarketplaceProvider
      onLogout={onLogout}
      onSwitchRole={onSwitchRole}
      onSwitchToLanding={onLogout}
      onSwitchToAuth={onLogout}
    >
      <TenantFarmerLayout onLogout={onLogout} onSwitchRole={onSwitchRole} />
    </MarketplaceProvider>
  );
}
