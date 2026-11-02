import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Services', href: '#services' },
]

const languages = ['English', 'తెలుగు', 'ಕನ್ನಡ', 'हिन्दी', 'தமிழ்']
const dashboardRoles = [
  'Farmer',
  'Landlord Farmer',
  'Tenant Farmer',
  'Buyer',
  'Service Provider',
]

function SearchIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  )
}

function Navbar({
  onAuthOpen,
  onHome,
  role,
  onLogout,
  onSwitchRole,
  searchQuery,
  onSearchChange,
  serviceProviderPage = false,
  providerName,
  userRole,
}) {
  const [languageOpen, setLanguageOpen] = useState(false)
  const [language, setLanguage] = useState('English')
  const [profileOpen, setProfileOpen] = useState(false)

  if (role) {
    return (
      <header className="sticky top-0 z-30 border-b border-[#e1ebe2] bg-white/95 shadow-sm backdrop-blur">
        <div className="flex w-full min-h-[76px] flex-wrap items-center gap-x-4 gap-y-3 px-4 py-3 sm:px-7 lg:flex-nowrap lg:gap-x-5 lg:px-10">
          <div className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none">
            <a href="#overview" aria-label="Raithanna dashboard" className="shrink-0">
              <img className="h-12 w-[86px] object-contain" src="/raithanna-logo.png" alt="Raithanna" />
            </a>
            <form
              role="search"
              onSubmit={(event) => event.preventDefault()}
              className="flex h-10 min-w-0 max-w-[300px] flex-1 items-center gap-2 rounded-full border border-[#e2e9e2] bg-[#f9fbf8] px-3 text-[#718078] focus-within:border-[#77a988] focus-within:ring-2 focus-within:ring-[#17613c]/10"
            >
              <SearchIcon className="h-[18px] w-[18px] shrink-0" />
              <input
                type="search"
                name="q"
                aria-label="Search dashboard"
                placeholder="Search..."
                value={searchQuery}
                onChange={(event) => onSearchChange?.(event.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm text-[#344b42] outline-none placeholder:text-[#929d95] focus-visible:outline-none"
              />
            </form>
          </div>

          <nav
            aria-label="Switch dashboard"
            className={`order-3 flex w-full items-center justify-start gap-1 overflow-x-auto pb-0.5 lg:order-none lg:w-auto lg:flex-1 ${
              serviceProviderPage ? 'lg:justify-center lg:gap-1' : 'lg:justify-center lg:gap-2'
            }`}
          >
            {dashboardRoles.filter((dashboardRole) => dashboardRole !== role).map((dashboardRole) => (
              <button
                className={`shrink-0 rounded-full py-2 text-xs font-semibold text-[#526258] transition-colors hover:bg-[#eff7f0] hover:text-[#17613c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17613c] sm:text-sm ${
                  serviceProviderPage ? 'px-2 lg:px-2.5' : 'px-3 sm:px-4'
                }`}
                type="button"
                onClick={() => onSwitchRole(dashboardRole)}
                key={dashboardRole}
              >
                {dashboardRole}
              </button>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={languageOpen}
                onClick={() => {
                  setLanguageOpen((open) => !open)
                  setProfileOpen(false)
                }}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-[#e2e9e2] bg-white px-3 text-xs font-semibold text-[#385543] transition hover:bg-[#f4f8f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17613c] sm:px-4 sm:text-sm"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                </svg>
                <span>{language}</span>
              </button>
              {languageOpen && (
                <div role="menu" aria-label="Select language" className="absolute right-0 top-[calc(100%+8px)] z-40 min-w-36 rounded-xl border border-[#e2e9e2] bg-white p-1.5 shadow-lg">
                  {languages.map((option) => (
                    <button
                      key={option}
                      type="button"
                      role="menuitemradio"
                      aria-checked={language === option}
                      onClick={() => {
                        setLanguage(option)
                        setLanguageOpen(false)
                      }}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-[#43564a] hover:bg-[#f1f7f1]"
                    >
                      {option}
                      {language === option && <span aria-hidden="true" className="text-[#17613c]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                aria-label="Open profile menu"
                aria-haspopup="menu"
                aria-expanded={profileOpen}
                onClick={() => {
                  setProfileOpen((open) => !open)
                  setLanguageOpen(false)
                }}
                className="grid h-10 w-10 place-items-center rounded-full bg-[#17613c] text-sm font-bold text-white ring-2 ring-[#e4efe5] transition hover:bg-[#104b2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17613c]"
              >
                {role.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()}
              </button>
              {profileOpen && (
                <div role="menu" aria-label="Profile menu" className="absolute right-0 top-[calc(100%+8px)] z-40 min-w-48 rounded-xl border border-[#e2e9e2] bg-white p-2 shadow-lg">
                  <div className="border-b border-[#edf2ed] px-3 py-2">
                    <p className="text-sm font-semibold text-[#263b2d]">
                      {serviceProviderPage ? providerName || 'My profile' : 'My profile'}
                    </p>
                    <p className="mt-0.5 text-xs text-[#748076]">
                      {serviceProviderPage ? userRole || role : role}
                    </p>
                  </div>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={onLogout}
                    className="mt-1 w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#b64036] hover:bg-[#fff2f0] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#b64036]"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#home" aria-label="Raithanna home" onClick={onHome}>
          <img className="brand__logo" src="/raithanna-logo.png" alt="Raithanna" />
        </a>

        <form className="search-box" role="search" action="#services">
          <input aria-label="Search Raithanna" name="q" placeholder="Search..." type="search" />
          <button type="submit" aria-label="Search">
            <SearchIcon />
          </button>
        </form>

        <div className="site-header__content is-open">
          <nav className="site-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a
                className="site-nav__link"
                href={link.href}
                key={link.label}
                onClick={onHome}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <div className="language-picker">
              <button
                className="translate-button"
                type="button"
                aria-expanded={languageOpen}
                aria-label={`Translate, current language ${language}`}
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                </svg>
                <span>Translate</span>
              </button>
              {languageOpen && (
                <div className="language-menu" role="group" aria-label="Choose language">
                  {languages.map((option) => (
                    <button
                      className="language-menu__option"
                      type="button"
                      key={option}
                      aria-pressed={language === option}
                      onClick={() => {
                        setLanguage(option)
                        setLanguageOpen(false)
                      }}
                    >
                      {option}
                      {language === option && <span aria-hidden="true">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="signup-button"
              type="button"
              onClick={onAuthOpen}
            >
              Login / Register
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
