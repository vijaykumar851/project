import { useState } from 'react';
import { useMarketplace } from './MarketplaceContext';
import { SproutIcon } from '../components/Icons';

export default function MyCropsPage() {
  const { crops, setCrops, setActiveModal, showToast } = useMarketplace();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCropName, setNewCropName] = useState('');
  const [newLandName, setNewLandName] = useState('North Field (2.5 Acres)');
  const [newSeason, setNewSeason] = useState('Kharif');

  function handleAddCrop(e) {
    e.preventDefault();
    if (!newCropName.trim()) return;
    const newCrop = {
      cropId: `CRP-${Date.now()}`,
      cropName: newCropName,
      cropCategory: 'Grains & Cereals',
      landName: newLandName,
      season: newSeason,
      sowingDate: 'Just sown',
      expectedHarvestDate: 'In 90 days',
      cropStage: 'Germination (5 days)',
      cropStatus: 'Healthy',
      areaCultivated: 2.0,
      progress: 10,
      expectedYield: '28 Quintals',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80',
      notes: 'Initial sowing completed with organic seed treatment.',
    };
    setCrops((prev) => [newCrop, ...prev]);
    setNewCropName('');
    setShowAddForm(false);
    showToast(`Added ${newCropName} crop cycle!`);
  }

  return (
    <div className="mx-auto w-full max-w-[1480px] px-6 pb-10">
      <div className="mb-[18px] flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            My Crops & Crop Cycle Management
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
            Track stage progression, days since sowing, nutrient schedules, and harvest forecasts.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-700"
          style={{ width: 'auto', padding: '10px 18px' }}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <span>{showAddForm ? 'Cancel' : '+ Add New Crop Cycle'}</span>
        </button>
      </div>

      {showAddForm && (
        <form
          onSubmit={handleAddCrop}
          style={{
            background: '#ffffff',
            border: '1px solid #bbf7d0',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0 4px 12px rgba(22,163,74,0.08)',
          }}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '12px', color: '#14532d' }}>
            Register New Crop Cycle
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
              Crop Name
              <input
                type="text"
                placeholder="e.g. Cotton, Sunflower, Red Gram"
                value={newCropName}
                onChange={(e) => setNewCropName(e.target.value)}
                required
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                }}
              />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
              Cultivated Field
              <select
                value={newLandName}
                onChange={(e) => setNewLandName(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                }}
              >
                <option value="North Field (2.5 Acres)">North Field (2.5 Acres)</option>
                <option value="East Field (2.0 Acres)">East Field (2.0 Acres)</option>
              </select>
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
              Season
              <select
                value={newSeason}
                onChange={(e) => setNewSeason(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                }}
              >
                <option value="Kharif">Kharif (Monsoon)</option>
                <option value="Rabi">Rabi (Winter)</option>
                <option value="Zaid">Zaid (Summer)</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="mt-3.5 w-auto rounded-lg bg-green-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-green-700"
            style={{ width: 'auto', marginTop: '14px', padding: '8px 20px' }}
          >
            Save Crop Cycle
          </button>
        </form>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '16px' }}>
        {crops.map((crop) => (
          <div
            key={crop.cropId}
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '18px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', gap: '14px', marginBottom: '14px' }}>
              <img
                src={crop.image}
                alt={crop.cropName}
                style={{ width: '90px', height: '90px', borderRadius: '12px', objectFit: 'cover' }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                    {crop.cropName}
                  </h3>
                  <span style={{ fontSize: '0.74rem', background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>
                    {crop.season}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '3px' }}>
                  {crop.landName}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#15803d', fontWeight: 600, marginTop: '2px' }}>
                  <SproutIcon className="w-3.5 h-3.5 inline mr-1" />
                  {crop.cropStage}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                <span>Cycle Progression</span>
                <span>{crop.progress}% Completed</span>
              </div>
              <div className="h-[7px] w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-green-600 transition-all duration-300" style={{ width: `${crop.progress}%` }} />
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '8px',
                background: '#f8fafc',
                padding: '10px',
                borderRadius: '10px',
                fontSize: '0.78rem',
                marginBottom: '14px',
              }}
            >
              <div>
                <span style={{ color: '#64748b' }}>Sowing Date: </span>
                <strong>{crop.sowingDate}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Expected Yield: </span>
                <strong>{crop.expectedYield}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button
                type="button"
                className="rounded-lg border border-green-600 px-3 py-1.5 text-xs font-bold text-green-600 transition hover:bg-green-600 hover:text-white"
                onClick={() => setActiveModal({ type: 'crop', data: crop })}
              >
                View Agronomy Notes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
