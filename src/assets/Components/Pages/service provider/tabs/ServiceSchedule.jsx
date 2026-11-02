import { MapPin } from 'lucide-react'

export default function ServiceSchedule({ selectedLocation = 'Hyderabad, Telangana' }) {
  const scheduleColumns = [
    {
      day: 'Today (30 Oct)',
      slots: [
        {
          time: '08:00 AM - 11:30 AM',
          task: 'Mahindra 575 DI Plowing',
          farmer: 'Raman Reddy Farm',
          loc: 'Chevella, Medak',
          status: 'In Progress',
        },
        {
          time: '02:30 PM - 05:00 PM',
          task: 'Drone Spraying (Pesticide)',
          farmer: 'Srinivas Rao Farm',
          loc: 'Sangareddy',
          status: 'Scheduled',
        },
      ],
    },
    {
      day: 'Tomorrow (31 Oct)',
      slots: [
        {
          time: '07:00 AM - 10:00 AM',
          task: '16L Agri Drone Spraying',
          farmer: 'Venkatesh G.',
          loc: 'Vikarabad',
          status: 'Scheduled',
        },
        {
          time: '01:00 PM - 04:30 PM',
          task: 'Multi-Crop Thresher Operation',
          farmer: 'Lakshmi Devi Farm',
          loc: 'Medak',
          status: 'Scheduled',
        },
      ],
    },
    {
      day: 'Saturday (01 Nov)',
      slots: [
        {
          time: '09:00 AM - 01:00 PM',
          task: 'Laser Land Levelling',
          farmer: 'Anil Kumar Farm',
          loc: 'Sangareddy',
          status: 'Scheduled',
        },
        {
          time: '03:00 PM - 06:00 PM',
          task: 'Soil Diagnostic Testing & Advisory',
          farmer: 'Ravi Teja Farm',
          loc: 'Vikarabad',
          status: 'Pending Review',
        },
      ],
    },
  ]

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-[#0f172a]">Service Dispatch & Calendar</h2>
          <p className="text-xs text-[#64748b]">View your daily deployment timeline across client farms</p>
        </div>
        <div className="text-xs font-medium text-[#475569] bg-[#f8faf8] px-3 py-1.5 rounded-xl border border-[#e2e8e2]">
          {selectedLocation}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {scheduleColumns.map((col, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#f1f5f9]">
              <h4 className="text-xs font-bold text-[#0f172a]">{col.day}</h4>
              <span className="text-[10px] text-[#1b7f45] font-semibold">{col.slots.length} Appointments</span>
            </div>
            <div className="space-y-2.5">
              {col.slots.map((s, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl border border-[#e2e8e2] bg-[#f8faf8] space-y-1 hover:border-[#1b7f45] transition"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#1b7f45]">{s.time}</span>
                    <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {s.status}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-[#0f172a]">{s.task}</h5>
                  <p className="text-[11px] text-[#64748b]">{s.farmer}</p>
                  <p className="text-[10px] text-[#94a3b8] flex items-center gap-1">
                    <MapPin className="h-2.5 w-2.5 text-[#1b7f45]" /> {s.loc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
