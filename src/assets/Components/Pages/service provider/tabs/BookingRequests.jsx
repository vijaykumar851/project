import { MessageSquare } from 'lucide-react'

export default function BookingRequests({
  pendingRequestsCount = 0,
  filteredRequests = [],
  setSelectedChatFarmer,
  setActiveTab,
  setSelectedRequestDetails,
  handleAcceptRequest,
}) {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-[#0f172a]">Service Booking Requests</h2>
          <p className="text-xs text-[#64748b]">Review and approve incoming service requests from farmers</p>
        </div>
        <div className="text-xs font-semibold text-[#1b7f45] bg-[#e8f5e9] px-3 py-1 rounded-full">
          {pendingRequestsCount} Pending Action
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#e2e8e2] shadow-sm divide-y divide-[#f1f5f9] overflow-hidden">
        {filteredRequests.map((req) => (
          <div
            key={req.id}
            className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#fafdfa] transition"
          >
            <div className="flex items-start gap-3.5">
              <img
                src={req.avatar}
                alt={req.farmerName}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-emerald-500/20"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-[#0f172a]">{req.farmerName}</h4>
                  <span className="text-[10px] text-[#94a3b8]">({req.timeAgo})</span>
                </div>
                <p className="text-xs font-semibold text-[#1b7f45] mt-0.5">{req.serviceName}</p>
                <p className="text-xs text-[#64748b] mt-0.5">
                  {req.areaDetails} • <span className="text-[#0f172a] font-medium">{req.location}</span>
                </p>
                <p className="text-[11px] text-[#94a3b8] mt-1 flex items-center gap-2">
                  <span>Scheduled: {req.scheduledDate}</span>
                  <span>•</span>
                  <span>
                    Est. Revenue: <strong className="text-[#0f172a]">{req.bookingValue}</strong>
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:self-center">
              {req.status === 'accepted' ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#1b7f45] bg-[#e8f5e9] px-3 py-1.5 rounded-xl border border-[#c8e6c9]">
                    ✓ Booking Confirmed
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedChatFarmer && setSelectedChatFarmer(req.farmerName)
                      setActiveTab && setActiveTab('messages')
                    }}
                    className="p-1.5 text-[#1b7f45] hover:bg-[#e8f5e9] rounded-lg transition"
                    title="Chat with farmer"
                  >
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setSelectedRequestDetails && setSelectedRequestDetails(req)}
                    className="px-3.5 py-1.5 text-xs font-medium text-[#475569] bg-[#f8faf8] border border-[#e2e8e2] rounded-xl hover:bg-slate-100 transition"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAcceptRequest && handleAcceptRequest(req.id, req.farmerName)}
                    className="px-4 py-1.5 text-xs font-semibold text-white bg-[#1b7f45] hover:bg-[#146235] rounded-xl shadow-sm transition"
                  >
                    Confirm Booking
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
