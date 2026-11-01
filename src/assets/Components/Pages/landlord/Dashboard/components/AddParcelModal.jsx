import { X } from '../Icons.jsx'
import { useTranslation } from '@/context/LanguageContext.jsx'

export default function AddParcelModal({
  isOpen,
  onClose,
  newParcel,
  setNewParcel,
  onAddParcel,
}) {
  const { t } = useTranslation()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#e8f5e9] text-[#1b7f45] flex items-center justify-center font-bold">
              +
            </div>
            <h3 className="text-sm font-bold text-[#0f172a]">{t('dashModalAddParcelTitle')}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={onAddParcel} className="mt-4 space-y-3 text-xs">
          <div>
            <label className="block font-semibold text-[#475569] mb-1">{t('dashFieldParcelName')}</label>
            <input
              type="text"
              placeholder="e.g. Northeast Field"
              required
              value={newParcel.name}
              onChange={(e) => setNewParcel({ ...newParcel, name: e.target.value })}
              className="w-full p-2 rounded-lg border border-slate-200 focus:border-[#1b7f45] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#475569] mb-1">{t('dashFieldArea')}</label>
              <input
                type="number"
                step="0.1"
                placeholder="e.g. 2.5"
                required
                value={newParcel.area}
                onChange={(e) => setNewParcel({ ...newParcel, area: e.target.value })}
                className="w-full p-2 rounded-lg border border-slate-200 focus:border-[#1b7f45] outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#475569] mb-1">{t('dashFieldSurveyNo')}</label>
              <input
                type="text"
                placeholder="e.g. SY-302/F"
                value={newParcel.surveyNo}
                onChange={(e) => setNewParcel({ ...newParcel, surveyNo: e.target.value })}
                className="w-full p-2 rounded-lg border border-slate-200 focus:border-[#1b7f45] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#475569] mb-1">{t('dashFieldCrop')}</label>
              <input
                type="text"
                placeholder="e.g. Paddy, Cotton"
                value={newParcel.crop}
                onChange={(e) => setNewParcel({ ...newParcel, crop: e.target.value })}
                className="w-full p-2 rounded-lg border border-slate-200 focus:border-[#1b7f45] outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#475569] mb-1">{t('dashFieldInitialStatus')}</label>
              <select
                value={newParcel.status}
                onChange={(e) => setNewParcel({ ...newParcel, status: e.target.value })}
                className="w-full p-2 rounded-lg border border-slate-200 focus:border-[#1b7f45] outline-none bg-white"
              >
                <option value="Available">{t('dashStatusAvailable')}</option>
                <option value="Rented">{t('dashStatusRented')}</option>
                <option value="Pending">{t('dashStatusPending')}</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              {t('dashCancel')}
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 font-semibold text-white bg-[#1b7f45] hover:bg-[#146235] rounded-lg shadow-sm"
            >
              {t('dashSaveParcel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
