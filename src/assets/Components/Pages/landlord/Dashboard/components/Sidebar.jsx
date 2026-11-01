import { Bell, FileText, Layers, MapPin, Settings, Sprout } from '../Icons.jsx'

const farmOperationItems = [
  { label: 'Livestock & Dairy', icon: Layers },
  { label: 'Labour & Machinery', icon: Settings },
  { label: 'Water & Irrigation', icon: Sprout },
  { label: 'Weather & Alerts', icon: Bell },
]

export default function Sidebar({ navigationItems, activeTab, setActiveTab }) {
  return (
    <aside className="w-full shrink-0 border-b border-[#e2e8e2] bg-white px-3 py-3 lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] lg:w-64 lg:overflow-y-auto lg:border-b-0 lg:border-r">
      <div className="mb-2 flex items-center justify-between gap-4 px-2 pt-1">
        <div className="flex flex-col leading-none text-[#2d3d34]">
          <span className="text-[10px] font-black tracking-[0.22em] text-[#2b3a2f]">
            LANDLORD
          </span>
          <span className="mt-2 text-[10px] font-black tracking-[0.22em] text-[#2b3a2f]">
            WORKSPACE
          </span>
        </div>
        <span className="rounded-full border border-[#d4e2d9] bg-white px-3 py-1 text-[10px] font-semibold text-[#2f4236] shadow-sm">
          Active
        </span>
      </div>

      <nav aria-label="Landlord dashboard" className="space-y-1">
        {navigationItems.map(({ id, label, icon: Icon, badge }) => (
          <div key={id}>
            <button
              type="button"
              aria-current={activeTab === id ? 'page' : undefined}
              onClick={() => setActiveTab(id)}
              className={`flex min-h-[44px] w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                activeTab === id
                  ? 'bg-[#1b7f45] text-white shadow-sm'
                  : 'text-[#2f3f37] hover:bg-[#edf6f0] hover:text-[#1d5f3e]'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="flex-1">{label}</span>
              {badge > 0 && (
                <span className={`min-w-5 rounded-full px-1.5 py-0.5 text-center text-[10px] font-bold ${
                  activeTab === id ? 'bg-white/20 text-white' : 'bg-[#e8f5e9] text-[#1b7f45]'
                }`}>
                  {badge}
                </span>
              )}
            </button>
            {id === 'settings' && (
              <div className="pt-3">
                <p className="px-3 pt-2 pb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#8b9b90]">
                  Farm Operations
                </p>
                {farmOperationItems.map(({ label: operationLabel, icon: OperationIcon }) => (
                  <div
                    key={operationLabel}
                    className="flex min-h-[44px] items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#2f3f37]"
                  >
                    <OperationIcon className="h-4 w-4 shrink-0" />
                    <span className="flex-1">{operationLabel}</span>
                  </div>
                ))}
                <div className="flex min-h-[44px] items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#2f3f37]">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span className="flex-1">Government Schemes</span>
                </div>
                <div className="flex min-h-[44px] items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-[#2f3f37]">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span className="flex-1">Help &amp; Support</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
