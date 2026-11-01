import { useTranslation } from '../../context/LanguageContext.jsx'

export default function LeasesTab({ leases, showToast }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
        <div>
          <h2 className="text-lg font-bold text-[#0f172a]">{t('dashTabLeasesTitle')}</h2>
          <p className="text-xs text-[#64748b]">{t('dashTabLeasesSubtitle')}</p>
        </div>
        <button
          type="button"
          onClick={() => showToast?.('Model agreement downloaded!')}
          className="px-3 py-1.5 bg-[#e8f5e9] text-[#1b7f45] text-xs font-bold rounded-lg hover:bg-[#d4ebd4] transition"
        >
          {t('dashDownloadModelDeed')}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#f8faf8] text-[#64748b] font-bold border-b border-[#e2e8e2]">
            <tr>
              <th className="p-3">{t('dashColAgreementId')}</th>
              <th className="p-3">{t('dashColParcel')}</th>
              <th className="p-3">{t('dashColTenant')}</th>
              <th className="p-3">{t('dashColTenure')}</th>
              <th className="p-3">{t('dashColAnnualRent')}</th>
              <th className="p-3">{t('dashColPaid')}</th>
              <th className="p-3">{t('dashColStatus')}</th>
              <th className="p-3">{t('dashColContract')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f5f9]">
            {leases.map((l) => (
              <tr key={l.id} className="hover:bg-[#f8faf8] transition">
                <td className="p-3 font-mono font-bold text-[#1b7f45]">{l.id}</td>
                <td className="p-3 font-bold text-[#0f172a]">{l.parcel}</td>
                <td className="p-3 text-[#334155]">{l.tenant}</td>
                <td className="p-3 text-[#64748b]">{l.period}</td>
                <td className="p-3 font-bold text-[#0f172a]">{l.rent}</td>
                <td className="p-3 font-bold text-[#16a34a]">{l.paid}</td>
                <td className="p-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${l.statusBadge}`}>
                    {l.status}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    type="button"
                    onClick={() => showToast?.(`Opening contract for ${l.id}`)}
                    className="text-[#1b7f45] font-bold hover:underline"
                  >
                    {t('dashViewPdf')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
