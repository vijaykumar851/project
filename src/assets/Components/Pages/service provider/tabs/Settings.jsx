import { ArrowUpRight } from 'lucide-react'

export default function Settings({
  providerName = 'Suresh Kumar',
  setProviderName,
  selectedLocation = 'Hyderabad, Telangana',
  setSelectedLocation,
  dispatchRadius = 'Within 50 km',
  setDispatchRadius,
  onSwitchRole,
  showToast,
}) {
  const switchRoles = [
    { role: 'Landlord Farmer', desc: 'Switch to Landlord Farmland Dashboard' },
    { role: 'Farmer', desc: 'Switch to Standard Farmer Dashboard' },
    { role: 'Buyer', desc: 'Switch to Produce Marketplace & Buyer Hub' },
  ]

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
        <h2 className="text-base font-bold text-[#0f172a]">Service Provider Settings</h2>
        <p className="text-xs text-[#64748b]">Configure your coverage radius, machinery catalog and bank details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-3">
          <h3 className="text-xs font-bold text-[#0f172a] border-b border-[#f1f5f9] pb-2">Business Profile</h3>
          <div>
            <label className="text-[11px] font-medium text-[#64748b] block mb-1">Provider Name</label>
            <input
              type="text"
              value={providerName}
              onChange={(e) => setProviderName && setProviderName(e.target.value)}
              className="w-full px-3 py-1.5 text-xs border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[11px] font-medium text-[#64748b] block mb-1">Operational Region</label>
            <input
              type="text"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation && setSelectedLocation(e.target.value)}
              className="w-full px-3 py-1.5 text-xs border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[11px] font-medium text-[#64748b] block mb-1">Service Dispatch Radius</label>
            <select
              value={dispatchRadius}
              onChange={(e) => setDispatchRadius && setDispatchRadius(e.target.value)}
              className="w-full px-3 py-1.5 text-xs border border-[#e2e8e2] rounded-xl focus:border-[#1b7f45] focus:outline-none bg-white"
            >
              <option value="Within 25 km">Within 25 km</option>
              <option value="Within 50 km">Within 50 km</option>
              <option value="Within 100 km (District-wide)">Within 100 km (District-wide)</option>
            </select>
          </div>
          <button
            type="button"
            onClick={() => showToast && showToast('Profile settings saved successfully!')}
            className="px-4 py-2 bg-[#1b7f45] text-white rounded-xl text-xs font-semibold hover:bg-[#146235] transition"
          >
            Save Changes
          </button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-3">
          <h3 className="text-xs font-bold text-[#0f172a] border-b border-[#f1f5f9] pb-2">Role Switcher & Account</h3>
          <p className="text-xs text-[#64748b]">Switch to other user dashboard views for demonstration or testing</p>
          <div className="space-y-2 pt-1">
            {switchRoles.map((r) => (
              <button
                key={r.role}
                type="button"
                onClick={() => {
                  if (onSwitchRole) onSwitchRole(r.role)
                  else if (showToast) showToast(`Switching to ${r.role}...`)
                }}
                className="w-full text-left p-3 rounded-xl border border-[#e2e8e2] hover:border-[#1b7f45] hover:bg-[#f8faf8] transition flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-bold text-[#0f172a]">{r.role}</p>
                  <p className="text-[10px] text-[#64748b]">{r.desc}</p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#1b7f45]" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
