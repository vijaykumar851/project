import { Plus } from '../Icons.jsx'
import { useTranslation } from '../../context/LanguageContext.jsx'

export default function ParcelsTab({
  filteredParcels,
  onOpenAddParcelModal,
  showToast,
}) {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-[#f1f5f9]">
        <div>
          <h2 className="text-lg font-bold text-[#0f172a]">
            {t('dashTabParcelsTitle')} ({filteredParcels.length})
          </h2>
          <p className="text-xs text-[#64748b]">{t('dashTabParcelsSubtitle')}</p>
        </div>
        <button
          type="button"
          onClick={onOpenAddParcelModal}
          className="px-4 py-2 bg-[#1b7f45] text-white rounded-xl text-xs font-bold hover:bg-[#146235] transition flex items-center gap-1.5 shadow-sm"
        >
          <Plus className="h-4 w-4" /> {t('dashModalAddParcelTitle')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredParcels.map((p) => (
          <div
            key={p.id}
            className="border border-[#e2e8e2] rounded-2xl overflow-hidden hover:shadow-md transition"
          >
            <div className="relative h-36 w-full">
              <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              <div className="absolute top-2.5 right-2.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.statusColor}`}>
                  {p.status === 'Rented'
                    ? t('dashStatusRented')
                    : p.status === 'Available'
                    ? t('dashStatusAvailable')
                    : t('dashStatusPending')}
                </span>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                {p.surveyNo}
              </div>
            </div>
            <div className="p-3.5 space-y-2">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-bold text-[#0f172a]">{p.name}</h4>
                <span className="text-xs font-bold text-[#1b7f45]">{p.annualRent}</span>
              </div>
              <p className="text-xs text-[#64748b]">
                {p.area} Â· {p.crop}
              </p>
              <div className="text-[11px] bg-[#f8faf8] p-2.5 rounded-xl space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#94a3b8]">{t('dashSoil')}:</span>
                  <span className="font-semibold text-[#334155]">{p.soilType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94a3b8]">{t('dashWater')}:</span>
                  <span className="font-semibold text-[#334155]">{p.waterSource}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94a3b8]">{t('dashTenant')}:</span>
                  <span className="font-semibold text-[#1b7f45]">{p.tenant}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => showToast?.(`Opening GIS scan for ${p.name}`)}
                className="w-full py-1.5 text-xs font-semibold text-[#1b7f45] bg-[#e8f5e9] hover:bg-[#d4ebd4] rounded-lg transition"
              >
                {t('dashInspectLand')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
