import { useState } from 'react';
import { useMarketplace } from './MarketplaceContext';
export default function FarmerProfilePage() {
  const { user, setUser, showToast } = useMarketplace();
  const [phone, setPhone] = useState(user?.mobileNumber || '+91 98490 12345');
  const [village, setVillage] = useState(user?.village || 'Chevella');

  const farmerName = user?.farmerName || user?.name || 'Tenant Farmer';
  const farmerType = user?.farmerType || user?.role || 'Tenant Farmer';
  const farmerId = user?.farmerId || 'TF-1082';
  const farmerImg =
    user?.profileImage ||
    user?.avatar ||
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80';

  function handleSave(e) {
    e.preventDefault();
    setUser((prev) => ({ ...prev, mobileNumber: phone, village }));
    showToast('Farmer profile details updated successfully!');
  }

  return (
    <div className="mx-auto w-full max-w-[1480px] px-6 pb-10">
      <div className="mb-[18px] flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Tenant Farmer Profile & Settings
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
            Official registered farmer identification, agricultural credentials, and communication settings.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '20px' }}>
        {/* Profile Card */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
          <img
            src={farmerImg}
            alt={farmerName}
            style={{ width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px auto', border: '3px solid #22c55e' }}
          />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 850, color: '#0f172a', margin: 0 }}>
            {farmerName}
          </h2>
          <span style={{ fontSize: '0.78rem', background: '#dcfce7', color: '#15803d', padding: '3px 10px', borderRadius: '999px', fontWeight: 700, display: 'inline-block', marginTop: '6px' }}>
            {farmerType}
          </span>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '8px' }}>
            Farmer ID: <strong>{farmerId}</strong>
          </div>

          <div style={{ marginTop: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '16px', textAlign: 'left', fontSize: '0.82rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <span style={{ color: '#64748b' }}>Location: </span>
              <strong>{user.village}, {user.district}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b' }}>State: </span>
              <strong>{user.state}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b' }}>Experience: </span>
              <strong>{user.experience}</strong>
            </div>
            <div>
              <span style={{ color: '#64748b' }}>Soil Health Card: </span>
              <strong style={{ color: '#15803d' }}>Verified (Grade A)</strong>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#14532d', marginBottom: '16px' }}>
            Contact & Address Details
          </h3>
          <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                Full Name
                <input
                  type="text"
                  value={farmerName}
                  disabled
                  style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '0.85rem' }}
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                Registered Mobile Number
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                />
              </label>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                Village / Town
                <input
                  type="text"
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                District
                <input
                  type="text"
                  value={user.district}
                  disabled
                  style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '0.85rem' }}
                />
              </label>
            </div>

            <button type="submit" className="mt-2.5 w-auto self-start rounded-lg bg-green-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-green-700">
              Save Profile Updates
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
