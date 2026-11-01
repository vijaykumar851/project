import { useTranslation } from '../../context/LanguageContext.jsx'

export default function CropsTab() {
  const { t } = useTranslation()

  const cropItems = [
    {
      name: `${t('dashCropPaddy')} (BPT-5204)`,
      field: `North Field (2.5 ${t('dashAcres')})`,
      stage: 'Tillering Phase',
      moisture: 'Optimal (82%)',
      harvest: 'Nov 2026',
      health: 'Excellent',
    },
    {
      name: `${t('dashCropMaize')} (Hybrid)`,
      field: `East Field (1.8 ${t('dashAcres')})`,
      stage: 'Tasseling Stage',
      moisture: 'Moderate (68%)',
      harvest: 'Oct 2026',
      health: 'Good',
    },
    {
      name: `${t('dashCropCotton')} (Bt-II)`,
      field: `West Field (3.0 ${t('dashAcres')})`,
      stage: 'Vegetative Growth',
      moisture: 'Normal (74%)',
      harvest: 'Dec 2026',
      health: 'Healthy',
    },
  ]

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-4">
      <h2 className="text-lg font-bold text-[#0f172a]">{t('dashTabCropsTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cropItems.map((c, i) => (
          <div key={i} className="border border-[#e2e8e2] p-4 rounded-xl space-y-2 hover:border-[#1b7f45] transition">
            <h4 className="text-sm font-bold text-[#0f172a]">{c.name}</h4>
            <p className="text-xs text-[#64748b]">{c.field}</p>
            <div className="text-xs space-y-1 bg-[#f8faf8] p-2.5 rounded-lg">
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">{t('dashGrowthStage')}:</span>
                <span className="font-semibold text-[#0f172a]">{c.stage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">{t('dashSoilMoisture')}:</span>
                <span className="font-semibold text-[#0f172a]">{c.moisture}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">{t('dashHarvestEst')}:</span>
                <span className="font-semibold text-[#1b7f45]">{c.harvest}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">{t('dashNdviStatus')}:</span>
                <span className="font-bold text-[#16a34a]">{c.health}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
