import { X } from '../Icons.jsx'
import { useTranslation } from '@/context/LanguageContext.jsx'

export default function TenantDetailsModal({
  tenant,
  onClose,
  onAccept,
}) {
  const { t } = useTranslation()

  if (!tenant) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm p-5 shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
          <h3 className="text-xs font-bold text-[#0f172a]">{t('dashModalTenantTitle')}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 text-center">
          <img
            src={tenant.avatar}
            alt={tenant.name}
            className="h-14 w-14 rounded-full object-cover mx-auto ring-2 ring-[#1b7f45]/20"
          />
          <h4 className="text-sm font-bold text-[#0f172a] mt-1.5">{tenant.name}</h4>
          <p className="text-[11px] text-[#64748b]">
            {tenant.acres} | {tenant.crop}
          </p>
        </div>

        <div className="mt-3 text-xs bg-[#f8faf8] p-3 rounded-xl space-y-1.5">
          <div className="flex justify-between">
            <span className="text-slate-500">{t('dashLabelDuration')}:</span>
            <span className="font-semibold text-[#0f172a]">{tenant.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t('dashLabelRent')}:</span>
            <span className="font-bold text-[#1b7f45]">{tenant.offeredRent}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">{t('dashLabelApplied')}:</span>
            <span className="text-slate-600">{tenant.timeAgo}</span>
          </div>
        </div>

        <div className="mt-4 flex gap-2 text-xs">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-1.5 font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition"
          >
            {t('dashBtnClose')}
          </button>
          <button
            type="button"
            onClick={() => {
              onAccept(tenant.id, tenant.name)
              onClose()
            }}
            className="flex-1 py-1.5 font-semibold text-white bg-[#1b7f45] hover:bg-[#146235] rounded-lg shadow-sm transition"
          >
            {t('dashBtnAcceptTenant')}
          </button>
        </div>
      </div>
    </div>
  )
}
