import { useTranslation } from '../../context/LanguageContext.jsx'

export default function SettingsTab({ user, showToast }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-4 max-w-xl">
      <h2 className="text-lg font-bold text-[#0f172a]">{t('dashTabSettingsTitle')}</h2>
      <div className="space-y-3 text-xs">
        <div>
          <label className="block font-semibold text-[#64748b] mb-1">{t('dashFullName')}</label>
          <input
            type="text"
            defaultValue={user?.name || 'Ramu Naik'}
            className="w-full p-2 border border-[#e2e8e2] rounded-lg bg-[#f8faf8] focus:bg-white focus:outline-none focus:border-[#1b7f45]"
          />
        </div>
        <div>
          <label className="block font-semibold text-[#64748b] mb-1">{t('dashVillageDistrict')}</label>
          <input
            type="text"
            defaultValue="Hyderabad, Telangana"
            className="w-full p-2 border border-[#e2e8e2] rounded-lg bg-[#f8faf8] focus:bg-white focus:outline-none focus:border-[#1b7f45]"
          />
        </div>
        <div>
          <label className="block font-semibold text-[#64748b] mb-1">{t('dashDharaniRef')}</label>
          <input
            type="text"
            defaultValue="TEL-DHARANI-994821"
            className="w-full p-2 border border-[#e2e8e2] rounded-lg bg-[#f8faf8] focus:bg-white focus:outline-none focus:border-[#1b7f45]"
          />
        </div>
        <button
          type="button"
          onClick={() => showToast?.('Settings saved successfully!')}
          className="px-4 py-2 bg-[#1b7f45] text-white font-bold rounded-lg shadow-sm hover:bg-[#146235] transition"
        >
          {t('dashSaveChanges')}
        </button>
      </div>
    </div>
  )
}
