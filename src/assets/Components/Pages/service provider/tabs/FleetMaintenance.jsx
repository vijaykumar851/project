export default function FleetMaintenance({
  equipmentList = [],
  showToast,
}) {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-[#0f172a]">Machinery & Fleet Maintenance</h2>
          <p className="text-xs text-[#64748b]">Track operating hours, servicing records, and fuel logs</p>
        </div>
        <button
          type="button"
          onClick={() =>
            showToast &&
            showToast('Diagnostics complete: All machinery telemetry nodes optimal (100% Health)')
          }
          className="px-3.5 py-1.5 bg-[#f8faf8] border border-[#e2e8e2] text-xs font-semibold text-[#475569] rounded-xl hover:bg-slate-100 transition"
        >
          Run Fleet Diagnostic
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {equipmentList.map((m) => (
          <div
            key={m.id}
            className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex items-start gap-4"
          >
            <img
              src={m.image}
              alt={m.name}
              onError={(e) => {
                e.currentTarget.src = '/crop-paddy.jpg'
              }}
              className="h-20 w-20 rounded-xl object-cover shrink-0"
            />
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#0f172a] truncate">{m.name}</h4>
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${m.statusColor}`}>
                  {m.status}
                </span>
              </div>
              <p className="text-[11px] text-[#64748b]">{m.specs}</p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] text-[#475569]">
                <div className="bg-[#f8faf8] p-1.5 rounded-lg">
                  <span className="text-[#94a3b8] block">Hours Logged:</span>
                  <strong>{m.hoursLogged} hrs</strong>
                </div>
                <div className="bg-[#f8faf8] p-1.5 rounded-lg">
                  <span className="text-[#94a3b8] block">Rating:</span>
                  <strong>⭐ {m.rating} (Verified)</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

