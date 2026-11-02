export default function ReportsAndAnalytics() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-[#0f172a]">Financial Analytics & Operational Insights</h2>
          <p className="text-xs text-[#64748b]">Seasonal revenue streams, equipment productivity, and booking growth</p>
        </div>
        <div className="text-xs font-semibold text-[#1b7f45] bg-[#e8f5e9] px-3 py-1 rounded-full">
          Verified Tax Invoices
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
          <span className="text-[11px] font-medium text-[#64748b] block">Total Season Revenue</span>
          <span className="text-2xl font-bold text-[#0f172a] block mt-1">₹ 1,84,500</span>
          <span className="text-xs font-semibold text-[#16a34a] mt-1 block">↑ +15.4% YoY</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
          <span className="text-[11px] font-medium text-[#64748b] block">Completed Jobs</span>
          <span className="text-2xl font-bold text-[#0f172a] block mt-1">42 Bookings</span>
          <span className="text-xs font-semibold text-[#16a34a] mt-1 block">98% Satisfaction</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
          <span className="text-[11px] font-medium text-[#64748b] block">Average Ticket Size</span>
          <span className="text-2xl font-bold text-[#0f172a] block mt-1">₹ 4,390</span>
          <span className="text-xs font-semibold text-[#1d4ed8] mt-1 block">Per Farm Booking</span>
        </div>
      </div>
    </div>
  )
}

