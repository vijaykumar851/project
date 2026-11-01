import { useMarketplace } from './MarketplaceContext';


export default function MarketPricesPage() {
  const { marketPrices } = useMarketplace();

  return (
    <div className="mx-auto w-full max-w-[1480px] px-6 pb-10">
      <div className="mb-[18px] flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Telangana Agricultural Market Prices
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
            Daily modal prices and mandi trend intelligence across Vikarabad, Sangareddy, and Warangal markets.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {marketPrices.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '18px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.74rem', background: '#f1f5f9', color: '#475569', padding: '2px 8px', borderRadius: '6px', fontWeight: 600 }}>
                {item.market}
              </span>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: 750,
                  color: item.trend === 'up' ? '#15803d' : '#b91c1c',
                }}
              >
                {item.change}
              </span>
            </div>

            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '10px 0 4px 0' }}>
              {item.crop}
            </h3>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '6px' }}>
              <span style={{ fontSize: '1.45rem', fontWeight: 850, color: '#15803d' }}>
                ₹ {item.modalPrice.toLocaleString()}
              </span>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>/ {item.unit}</span>
            </div>

            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '8px' }}>
              Illustrative mandi rate based on latest auction reports.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
