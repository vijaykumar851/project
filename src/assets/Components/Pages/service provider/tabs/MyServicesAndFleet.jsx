import { useState } from 'react'
import { Plus, MapPin } from 'lucide-react'

export default function MyServicesAndFleet({
  equipmentList = [],
  setEquipmentList,
  selectedCategory: propCategory = 'All',
  setSelectedCategory: propSetCategory,
  searchQuery = '',
  setShowAddServiceModal,
  showToast,
}) {
  const [internalCategory, setInternalCategory] = useState(propCategory)
  const selectedCategory = propSetCategory ? propCategory : internalCategory
  const handleCategorySelect = (cat) => {
    if (propSetCategory) propSetCategory(cat)
    else setInternalCategory(cat)
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-[#e2e8e2] shadow-sm">
        <div>
          <h2 className="text-base font-bold text-[#0f172a]">Services & Machinery Fleet</h2>
          <p className="text-xs text-[#64748b]">Manage tractors, harvesters, drone sprayers and diagnostic gear</p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddServiceModal && setShowAddServiceModal(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#1b7f45] text-white rounded-xl text-xs font-semibold hover:bg-[#146235] shadow-sm transition"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Add New Equipment</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['All', 'Machinery', 'Drone Tech', 'Harvesting', 'Land Prep', 'Diagnostics'].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => handleCategorySelect(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#1b7f45] text-white shadow-sm'
                : 'bg-white text-[#475569] border border-[#e2e8e2] hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Equipment */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {equipmentList
          .filter((e) => selectedCategory === 'All' || e.category === selectedCategory)
          .filter(
            (e) =>
              searchQuery === '' ||
              e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              e.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
              e.location.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#e2e8e2] overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.src = '/crop-paddy.jpg'
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-[#0f172a]">{item.name}</h3>
                  <p className="text-xs text-[#64748b]">{item.specs}</p>
                  <div className="flex items-center gap-1 text-[11px] text-[#94a3b8]">
                    <MapPin className="h-3 w-3 text-[#1b7f45]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-[#f1f5f9]">
                    <span className="text-[#64748b]">Rental Rate:</span>
                    <span className="font-bold text-[#1b7f45]">{item.rate}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#64748b]">
                    <span>Operator:</span>
                    <span className="font-medium text-[#0f172a]">{item.operator}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button
                  type="button"
                  onClick={() => {
                    if (setEquipmentList) {
                      const newStatus = item.status === 'Available' ? 'Booked' : 'Available'
                      setEquipmentList((prev) =>
                        prev.map((e) => (e.id === item.id ? { ...e, status: newStatus } : e))
                      )
                      showToast && showToast(`${item.name} status updated to ${newStatus}`)
                    }
                  }}
                  className="w-full py-1.5 text-xs font-semibold rounded-xl border border-[#e2e8e2] text-[#475569] hover:bg-[#f1f6f1] hover:text-[#1b7f45] transition"
                >
                  Toggle Status: {item.status}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
