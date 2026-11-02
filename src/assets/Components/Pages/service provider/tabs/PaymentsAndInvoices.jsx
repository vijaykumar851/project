export default function PaymentsAndInvoices({
  invoices = [],
  setShowCreateInvoiceModal,
  showToast,
  setSelectedInvoiceReceipt,
}) {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-[#0f172a]">Payments & Invoices</h2>
          <p className="text-xs text-[#64748b]">Direct bank settlement records for completed service orders</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowCreateInvoiceModal && setShowCreateInvoiceModal(true)}
            className="px-3 py-1.5 bg-[#f8faf8] border border-[#e2e8e2] text-xs font-semibold text-[#0f172a] rounded-xl hover:bg-slate-100 transition"
          >
            + Create Invoice
          </button>
          <button
            type="button"
            onClick={() => showToast && showToast('Generated GST Billing Statement for Q2 2026')}
            className="px-3.5 py-1.5 bg-[#1b7f45] text-white rounded-xl text-xs font-semibold hover:bg-[#146235] transition"
          >
            Download Summary PDF
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#e2e8e2] shadow-sm overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#f8faf8] border-b border-[#e2e8e2] text-[#64748b]">
            <tr>
              <th className="py-3 px-4 font-semibold">Invoice ID</th>
              <th className="py-3 px-4 font-semibold">Farmer Client</th>
              <th className="py-3 px-4 font-semibold">Service Rendered</th>
              <th className="py-3 px-4 font-semibold">Date</th>
              <th className="py-3 px-4 font-semibold">Amount</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f1f5f9]">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-50 transition">
                <td className="py-3 px-4 font-mono font-bold text-[#0f172a]">{inv.id}</td>
                <td className="py-3 px-4 font-semibold text-[#0f172a]">{inv.farmer}</td>
                <td className="py-3 px-4 text-[#475569]">{inv.service}</td>
                <td className="py-3 px-4 text-[#94a3b8]">{inv.date}</td>
                <td className="py-3 px-4 font-bold text-[#0f172a]">{inv.amount}</td>
                <td className="py-3 px-4">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${inv.statusBadge}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    type="button"
                    onClick={() => setSelectedInvoiceReceipt && setSelectedInvoiceReceipt(inv)}
                    className="text-xs font-semibold text-[#1b7f45] hover:underline"
                  >
                    Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

