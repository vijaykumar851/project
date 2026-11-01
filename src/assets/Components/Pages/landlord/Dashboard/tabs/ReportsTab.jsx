import { useTranslation } from '../../context/LanguageContext.jsx'

export default function ReportsTab() {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-5">
      <h2 className="text-lg font-bold text-[#0f172a]">{t('dashTabReportsTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-[#e2e8e2] p-4 rounded-xl">
          <h4 className="text-xs font-bold text-[#0f172a] mb-2">{t('dashAnnualRevenue')}</h4>
          <p className="text-xl font-bold text-[#1b7f45]">₹ 2,37,500</p>
          <p className="text-xs text-[#64748b]">{t('dashAnnualRevenueSub')}</p>
        </div>
        <div className="border border-[#e2e8e2] p-4 rounded-xl">
          <h4 className="text-xs font-bold text-[#0f172a] mb-2">{t('dashAvgRentYield')}</h4>
          <p className="text-xl font-bold text-[#0f172a]">
            ₹ 25,000 / {t('dashAcres')}
          </p>
          <p className="text-xs text-[#64748b]">{t('dashAvgRentSub')}</p>
        </div>
      </div>
    </div>
  )
}
