import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

function RoleDashboard({ role, description, stats, actions, onLogout, onSwitchRole }) {
  return (
    <main className="min-h-screen scroll-mt-24 bg-[#f5f8f5] text-[#21372a]" id="overview">
      <Navbar role={role} onLogout={onLogout} onSwitchRole={onSwitchRole} />
      <div className="flex flex-col lg:flex-row">
        <Sidebar role={role} />
        <section className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8">
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#398356]">
              {role} workspace
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-[#17241b] sm:text-4xl">
              {role} Dashboard
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#68766c]">{description}</p>
          </div>

          <div id="activity" className="grid scroll-mt-24 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ label, value, detail }) => (
              <article key={label} className="rounded-2xl border border-[#e3ebe3] bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-[#748076]">{label}</p>
                <p className="mt-3 text-3xl font-bold tracking-tight text-[#17613c]">{value}</p>
                <p className="mt-2 text-xs text-[#879188]">{detail}</p>
              </article>
            ))}
          </div>

          <section id="quick-actions" className="mt-8 scroll-mt-24 rounded-2xl border border-[#e3ebe3] bg-white p-5 shadow-sm sm:p-7">
            <h2 className="text-lg font-bold text-[#21372a]">Quick actions</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {actions.map(({ title, description: actionDescription }) => (
                <button
                  type="button"
                  key={title}
                  id={title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
                  className="scroll-mt-24 rounded-xl border border-[#e3ebe3] bg-[#fbfdfb] p-4 text-left transition hover:border-[#9ec5a8] hover:bg-[#f4faf4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17613c]"
                >
                  <span className="block text-sm font-semibold text-[#28583b]">{title}</span>
                  <span className="mt-1 block text-xs leading-5 text-[#748076]">{actionDescription}</span>
                </button>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}

export default RoleDashboard
