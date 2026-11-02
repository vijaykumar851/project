import { Users, CheckCircle2, CreditCard, Wrench } from 'lucide-react'

export default function Notifications({
  setUnreadNotifications,
  showToast,
}) {
  const notificationItems = [
    {
      title: 'New Booking Request',
      desc: 'Raman Reddy booked Mahindra 575 DI Tractor for 4 Acres Plowing.',
      time: '2 hours ago',
      icon: Users,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      title: 'Service Job Completed',
      desc: 'Drone Spraying session for Srinivas Rao East Farm successfully verified.',
      time: '5 hours ago',
      icon: CheckCircle2,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      title: 'Payment Received',
      desc: 'Bank NEFT settlement of ₹2,700 confirmed from Srinivas Rao.',
      time: '1 day ago',
      icon: CreditCard,
      color: 'text-amber-600 bg-amber-50',
    },
    {
      title: 'Scheduled Fleet Maintenance',
      desc: 'Laser Land Leveller scheduled for routine calibration at Medak depot.',
      time: '2 days ago',
      icon: Wrench,
      color: 'text-purple-600 bg-purple-50',
    },
  ]

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-[#0f172a]">Service Notifications</h2>
          <p className="text-xs text-[#64748b]">Stay informed on booking requests, payments and fleet alerts</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setUnreadNotifications && setUnreadNotifications(0)
            showToast && showToast('All notifications marked as read')
          }}
          className="text-xs font-semibold text-[#1b7f45] hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-[#e2e8e2] shadow-sm divide-y divide-[#f1f5f9]">
        {notificationItems.map((item, idx) => {
          const NIcon = item.icon
          return (
            <div key={idx} className="p-4 flex items-start gap-3.5 hover:bg-[#fafdfa] transition">
              <div className={`h-9 w-9 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                <NIcon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#0f172a]">{item.title}</h4>
                  <span className="text-[10px] text-[#94a3b8]">{item.time}</span>
                </div>
                <p className="text-xs text-[#64748b] mt-0.5">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
