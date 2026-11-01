import { useTranslation } from '../../context/LanguageContext.jsx'

export default function PaymentsTab({ payments = [] }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
        <div>
          <h2 className="text-lg font-bold text-[#0f172a]">{t('dashTabPaymentsTitle')}</h2>
          <p className="text-xs text-[#64748b]">{t('dashTabPaymentsSubtitle')}</p>
        </div>
        <span className="text-sm font-bold text-[#1b7f45]">
          {t('dashSeasonBalance')}: â‚¹ 1,28,500
        </span>
      </div>

      <div className="space-y-2.5">
        {payments.map((tItem) => (
          <div
            key={tItem.id}
            className="p-3 rounded-xl border border-[#e2e8e2] flex items-center justify-between hover:bg-[#f8faf8] transition"
          >
            <div>
              <h4 className="text-xs font-bold text-[#0f172a]">
                {tItem.tenant} Â· {tItem.parcel}
              </h4>
              <p className="text-[10px] text-[#94a3b8]">
                {tItem.id} Â· {tItem.date} via {tItem.type}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-[#0f172a]">{tItem.amt}</span>
              <p className="text-[10px] font-bold text-[#16a34a]">{tItem.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
