import { NavLink } from 'react-router-dom'

const menuByRole = {
  Farmer: [
    { label: 'Dashboard', href: '#overview', icon: 'dashboard' },
    { label: 'My Land Parcels', href: '#manage-land-fields', icon: 'map' },
    { label: 'Tenant Requests', href: '#tenant-requests', icon: 'users', badge: 3 },
    { label: 'Leases & Agreements', href: '#lease-agreements', icon: 'file' },
    { label: 'Crop Management', href: '#manage-crops', icon: 'leaf' },
    { label: 'Reports & Analytics', href: '#reports-analytics', icon: 'barChart' },
    { label: 'Payments & Invoices', href: '#payments-invoices', icon: 'invoice' },
    { label: 'Messages', href: '#messages', icon: 'message', badge: 2 },
    { label: 'Notifications', href: '#notifications', icon: 'bell', badge: 5 },
    { label: 'Settings', href: '#settings', icon: 'settings' },
    { label: 'Farm Operations', type: 'section' },
    { label: 'Livestock & Dairy', href: '#livestock-dairy', icon: 'layers' },
    { label: 'Labour & Machinery', href: '#labour-machinery', icon: 'package' },
    { label: 'Water & Irrigation', href: '#irrigation-water', icon: 'water' },
    { label: 'Weather & Alerts', href: '#weather-alerts', icon: 'bell' },
    { label: 'Government Schemes', href: '#government-schemes', icon: 'file' },
    { label: 'Help & Support', href: '#help-support', icon: 'help' },
  ],
  'Landlord Farmer': [
    { label: 'Dashboard', href: '#overview', icon: 'dashboard' },
    { label: 'My Land Parcels', href: '#manage-land-parcels', icon: 'map' },
    { label: 'Tenant Requests', href: '#tenant-requests', icon: 'users' },
    { label: 'Leases & Agreements', href: '#lease-agreements', icon: 'file' },
    { label: 'Crop Management', href: '#crop-management', icon: 'leaf' },
    { label: 'Reports & Analytics', href: '#reports-analytics', icon: 'barChart' },
    { label: 'Payments & Invoices', href: '#payments-invoices', icon: 'invoice' },
    { label: 'Messages', href: '#messages', icon: 'message' },
    { label: 'Notifications', href: '#Notifications', icon: 'bell' },
    { label: 'Settings', href: '#Settings', icon: 'settings' },
  ],
  'Tenant Farmer': [
    { label: 'Dashboard', href: '#overview', icon: 'dashboard' },
    { label: 'My Leased Lands', href: '#view-my-leases', icon: 'file' },
    { label: 'My Crops & Yield', href: '#manage-crop-plan', icon: 'leaf' },
    { label: 'Tasks & Reminders', href: '#track-field-activity', icon: 'map' },
    { label: 'Market Prices', href: '#market-prices', icon: 'barChart' },
    { label: 'Equipment Booking', href: '#manage-inputs-equipment', icon: 'package' },
    { label: 'Services & Support', href: '#services-support', icon: 'help' },
    { label: 'Messages', href: '#messages', icon: 'message' },
    { label: 'Notifications', href: '#notifications', icon: 'bell' },
    { label: 'Profile & Settings', href: '#profile-settings', icon: 'settings' },
  ],
  Buyer: [
    { label: 'Dashboard', href: '/buyer-dashboard', icon: 'dashboard' },
    { label: 'Browse Produce', href: '/buyer/products', icon: 'shop' },
    { label: 'My Orders', href: '/buyer/orders', icon: 'package' },
    { label: 'Favorites', href: '/buyer/favorites', icon: 'star' },
    { label: 'Farmers & Sellers', href: '/buyer/farmers', icon: 'users' },
    { label: 'Price Trends', href: '/buyer/price-trends', icon: 'barChart' },
    { label: 'Messages', href: '/buyer/messages', icon: 'message' },
    { label: 'Reviews & Ratings', href: '/buyer/reviews', icon: 'star' },
    { label: 'Support & Help', href: '/buyer/support', icon: 'help' },
    { label: 'Settings', href: '/buyer/settings', icon: 'settings' },
  ],
  'Service Provider': [
    { label: 'Dashboard', href: '#overview', icon: 'dashboard' },
    { label: 'My Services & Fleet', href: '#categories', icon: 'briefcase', badge: 5 },
    { label: 'Booking Requests', href: '#booking-requests', icon: 'users', badge: 3 },
    { label: 'Service Schedule', href: '#schedule', icon: 'calendar' },
    { label: 'Fleet Maintenance', href: '#fleet-maintenance', icon: 'package' },
    { label: 'Reports & Analytics', href: '#reports-analytics', icon: 'barChart' },
    { label: 'Payments & Invoices', href: '#payments-invoices', icon: 'invoice' },
    { label: 'Messages', href: '#messages', icon: 'message', badge: 2 },
    { label: 'Notifications', href: '#notifications', icon: 'bell', badge: 4 },
    { label: 'Settings', href: '#settings', icon: 'settings' },
  ],
}

const tenantFarmerRouteByHref = {
  '#overview': 'dashboard',
  '#view-my-leases': 'leases',
  '#manage-crop-plan': 'crops',
  '#track-field-activity': 'tasks',
  '#market-prices': 'market-prices',
  '#manage-inputs-equipment': 'equipment',
  '#services-support': 'services',
  '#messages': 'messages',
  '#notifications': 'notifications',
  '#profile-settings': 'profile',
}

function SidebarIcon({ name, active }) {
  const common = `h-4 w-4 shrink-0 ${active ? 'text-white' : 'text-[#3d5047]'}`

  const icons = {
    dashboard: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 9.5V19h14v-9.5" />
        <path d="M9 19v-6h6v6" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M19 3c-5 0-9 2-12 7 0 6 4 11 12 11 3-6 3-12 0-18Z" />
        <path d="M5 15c3-1 5-3 7-7" />
      </svg>
    ),
    map: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M9 18 3 20V6l6-2 6 2 6-2v14l-6 2-6-2Z" />
        <path d="M9 6v12M15 4v12" />
      </svg>
    ),
    package: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M3 8.5 12 3l9 5.5v7L12 21l-9-5.5v-7Z" />
        <path d="M12 3v18M3 8.5l9 5.5 9-5.5" />
      </svg>
    ),
    water: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M12 2.5c2.8 3.8 6 6.6 6 10.2A6 6 0 0 1 6 12.7c0-3.6 3.2-6.4 6-10.2Z" />
        <path d="M9 14c.8 1.1 1.8 1.6 3 1.6s2.2-.5 3-1.6" />
      </svg>
    ),
    barChart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M4 20V9" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20V11" />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
        <circle cx="10" cy="7" r="3" />
        <path d="M22 19v-1a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    file: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" />
        <path d="M14 2v5h5" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
    invoice: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M7 3h8l4 4v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </svg>
    ),
    message: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
      </svg>
    ),
    bell: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </svg>
    ),
    settings: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.86l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.12V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.12.4l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.12-.4H2.8a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.4-1.12l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6c.3.2.67.3 1.04.3H10a2 2 0 1 1 4 0h.09c.37 0 .74-.1 1.04-.3a1.7 1.7 0 0 0 1.06-.84l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.2.3.3.67.3 1.04V10a2 2 0 1 1 0 4h-.09c-.37 0-.74.1-1.04.3a1.7 1.7 0 0 0-1.06.84Z" />
      </svg>
    ),
    help: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2-3 4" />
        <path d="M12 17h.01" />
      </svg>
    ),
    shop: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M3 8h18l-1.2 11.2A2 2 0 0 1 17.8 21H6.2a2 2 0 0 1-2-1.8L3 8Z" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      </svg>
    ),
    history: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="m12 2 2.9 6.1L21 9l-5 4.8L17.4 21 12 17.7 6.6 21 8 13.8 3 9l6.1-.9L12 2Z" />
      </svg>
    ),
    briefcase: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    ),
    wrench: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3 3.7-3.7Z" />
      </svg>
    ),
    layers: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </svg>
    ),
  }

  return icons[name] || icons.dashboard
}

function Sidebar({ role, activeRoute, onNavigate, navigationItems, onAddService }) {
  const menuItems = navigationItems || menuByRole[role] || menuByRole.Farmer
  const roleTitle = role === 'Landlord Farmer' ? 'LANDLORD' : role.toUpperCase()

  return (
    <aside className="w-full shrink-0 border-b border-[#e2e8e2] bg-white px-3 py-3 lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] lg:w-64 lg:overflow-y-auto lg:border-b-0 lg:border-r">
      <div className="mb-2 flex items-center justify-between gap-4 px-2 pt-1">
        <div className="flex flex-col leading-none text-[#2d3d34]">
          <span className="text-[10px] font-black tracking-[0.22em] text-[#2b3a2f]">{roleTitle}</span>
          <span className="mt-2 text-[10px] font-black tracking-[0.22em] text-[#2b3a2f]">WORKSPACE</span>
        </div>
        <span className="rounded-full border border-[#d4e2d9] bg-white px-3 py-1 text-[10px] font-semibold text-[#2f4236] shadow-sm">
          Active
        </span>
      </div>

      <nav id="dashboard-sidebar" aria-label={`${role} menu`} className="space-y-1">
        {menuItems.map(({ id, label, href, icon, badge, type }, index) => {
          if (type === 'section') {
            return (
              <p
                key={label}
                className="px-3 pt-5 pb-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#8b9b90]"
              >
                {label}
              </p>
            )
          }

          const itemContent = (active) => (
            <>
              <span className="flex h-5 w-5 items-center justify-center">
                <SidebarIcon name={icon} active={active} />
              </span>
              <span className="flex-1 text-[14px] font-medium text-inherit">{label}</span>
              {badge > 0 && (
                <span className={`min-w-5 rounded-full px-1.5 py-0.5 text-center text-[10px] font-bold ${
                  active ? 'bg-white/20 text-white' : 'bg-[#e8f5e9] text-[#1b7f45]'
                }`}>
                  {badge}
                </span>
              )}
            </>
          )

          if (navigationItems) {
            const active = activeRoute === id
            return (
              <button
                type="button"
                key={id}
                aria-current={active ? 'page' : undefined}
                onClick={() => onNavigate?.(id)}
                className={`group flex min-h-[44px] w-full items-center gap-2 rounded-xl px-3 text-left transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#17613c] ${
                  active
                    ? 'bg-[#1b7f45] text-white shadow-sm'
                    : 'text-[#2f3f37] hover:bg-[#edf6f0] hover:text-[#1d5f3e]'
                }`}
              >
                {itemContent(active)}
              </button>
            )
          }

          if (role === 'Buyer') {
            return (
              <NavLink
                to={href}
                end={label === 'Dashboard'}
                key={label}
                className={({ isActive }) => `group flex min-h-[44px] items-center gap-2 rounded-xl px-3 transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#17613c] ${
                  isActive
                    ? 'bg-[#1b7f45] text-white shadow-sm'
                    : 'text-[#2f3f37] hover:bg-[#edf6f0] hover:text-[#1d5f3e]'
                }`}
              >
                {({ isActive }) => itemContent(isActive)}
              </NavLink>
            )
          }

          const active = role === 'Tenant Farmer'
            ? tenantFarmerRouteByHref[href] === activeRoute
            : role === 'Farmer'
              ? label === activeRoute
              : index === 0
          return (
            <a
              href={href}
              key={label}
              onClick={(event) => {
                if (role === 'Farmer') {
                  event.preventDefault()
                  onNavigate?.(label)
                }
              }}
              className={`group flex min-h-[44px] items-center gap-2 rounded-xl px-3 transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#17613c] ${
                active
                  ? 'bg-[#1b7f45] text-white shadow-sm'
                  : 'text-[#2f3f37] hover:bg-[#edf6f0] hover:text-[#1d5f3e]'
              }`}
            >
              {itemContent(active)}
            </a>
          )
        })}
      </nav>
      {onAddService && (
        <button
          type="button"
          onClick={onAddService}
          className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded-xl border border-[#b8d7c1] bg-[#f4faf5] px-3 text-sm font-semibold text-[#17613c] transition hover:bg-[#e8f5e9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17613c]"
        >
          Add Service or Equipment
        </button>
      )}
    </aside>
  )
}

export default Sidebar
