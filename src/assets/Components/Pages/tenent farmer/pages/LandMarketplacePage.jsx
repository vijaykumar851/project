import { useState } from 'react';
import { useMarketplace } from './MarketplaceContext';
import { MapPinIcon, SproutIcon, ArrowRightIcon } from '../components/Icons';

export default function LandMarketplacePage() {
  const { recentlyViewedLand, setActiveModal, showToast } = useMarketplace();
  const [filterLocation, setFilterLocation] = useState('All');

  const availableLands = recentlyViewedLand.filter(
    (l) => filterLocation === 'All' || l.location.includes(filterLocation)
  );

  return (
    <div className="mx-auto w-full max-w-[1480px] px-6 pb-10">
      <div className="mb-[18px] flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Find Agricultural Land for Lease
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
            Verified fertile farm plots available for lease directly from landowners across Telangana.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
        {['All', 'Vikarabad', 'Medak', 'Sangareddy'].map((loc) => (
          <button
            key={loc}
            type="button"
            className="rounded-lg border border-green-600 px-3 py-1.5 text-xs font-bold text-green-600 transition hover:bg-green-600 hover:text-white"
            style={{
              background: filterLocation === loc ? '#16a34a' : 'transparent',
              color: filterLocation === loc ? '#ffffff' : '#16a34a',
            }}
            onClick={() => setFilterLocation(loc)}
          >
            {loc}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '18px' }}>
        {availableLands.map((land) => (
          <div
            key={land.landId}
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
                src={land.image}
                alt={land.landName}
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  fontSize: '0.7rem',
                  fontWeight: 750,
                  padding: '3px 8px',
                  borderRadius: '999px',
                  background: land.status === 'Available' ? '#16a34a' : '#ef4444',
                  color: '#ffffff',
                }}
              >
                {land.status}
              </span>
            </div>

            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                {land.landName} ({land.area} {land.areaUnit})
              </h3>
              <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px' }}>
                <MapPinIcon className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                {land.location}, Telangana
              </div>
              <div style={{ fontSize: '0.78rem', color: '#166534', marginTop: '2px', fontWeight: 600 }}>
                <SproutIcon className="w-3.5 h-3.5 inline mr-1" />
                Soil: {land.soilType || 'Fertile Loam'}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '14px', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Expected Lease Rate:</span>
                <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#15803d' }}>
                  ₹ {land.rentPerAcre?.toLocaleString() || '9,000'} / acre
                </span>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <button
                  type="button"
                  className="rounded-lg border border-green-600 px-3 py-1.5 text-xs font-bold text-green-600 transition hover:bg-green-600 hover:text-white"
                  style={{ flex: 1 }}
                  onClick={() => setActiveModal({ type: 'land', data: land })}
                >
                  View Plot Info
                </button>
                {land.status === 'Available' && (
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700"
                    style={{ flex: 1.2 }}
                    onClick={() => showToast(`Lease proposal sent to owner of ${land.landName}!`)}
                  >
                    <span>Inquire Lease</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
