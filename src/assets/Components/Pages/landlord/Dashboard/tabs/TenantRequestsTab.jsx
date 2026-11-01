import { CheckCircle2 } from '../Icons.jsx'
import { useTranslation } from '../../context/LanguageContext.jsx'

export default function TenantRequestsTab({
  tenantRequests,
  pendingRequestsCount,
  setSelectedTenantDetails,
  handleAcceptTenant,
}) {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
        <div>
          <h2 className="text-lg font-bold text-[#0f172a]">{t('dashTabRequestsTitle')}</h2>
          <p className="text-xs text-[#64748b]">{t('dashTabRequestsSubtitle')}</p>
        </div>
        <span className="text-xs bg-[#fef2f2] text-[#ef4444] font-bold px-3 py-1 rounded-full border border-red-200">
          {pendingRequestsCount} {t('dashPendingApproval')}
        </span>
      </div>

      <div className="space-y-3">
        {tenantRequests.map((tr) => (
          <div
            key={tr.id}
            className="p-3.5 rounded-xl border border-[#e2e8e2] flex items-center justify-between hover:bg-[#f8faf8] transition"
          >
            <div className="flex items-center gap-3">
              <img src={tr.avatar} alt={tr.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-[#0f172a]">{tr.name}</h4>
                  <span className="text-[10px] text-[#1b7f45] bg-[#e8f5e9] px-2 py-0.5 rounded font-bold">
                    {tr.rating}
                  </span>
                </div>
                <p className="text-xs text-[#64748b]">
                  {tr.parcelName} ({tr.acres}) Â· {tr.crop} Â· {tr.duration} Â· {tr.offeredRent}
                </p>
                <p className="text-[10px] text-[#94a3b8]">
                  {tr.experience} Â· {tr.timeAgo}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {tr.status === 'accepted' ? (
                <span className="text-xs font-bold text-[#1b7f45] bg-[#e8f5e9] px-3 py-1.5 rounded-lg flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {t('dashApproved')}
                </span>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setSelectedTenantDetails(tr)}
                    className="px-3 py-1.5 text-xs font-medium text-[#475569] bg-white border border-[#e2e8e2] rounded-lg hover:bg-slate-50 transition"
                  >
                    {t('dashDetails')}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAcceptTenant(tr.id, tr.name)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1b7f45] hover:bg-[#146235] rounded-lg shadow-sm transition"
                  >
                    {t('dashAccept')}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
