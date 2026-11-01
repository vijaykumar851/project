import {
  Search,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Bell,
  MessageSquare,
} from '../Icons.jsx'
import { useTranslation } from '@/context/LanguageContext.jsx'

export default function Header({
  user,
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  showLocationDropdown,
  setShowLocationDropdown,
  locationsList = [],
  showLanguageDropdown,
  setShowLanguageDropdown,
  setActiveTab,
  showToast,
}) {
  const { t, language, setLanguage, availableLanguages } = useTranslation()

  return (
    <header className="h-[62px] bg-white border-b border-[#e2e8e2] px-6 flex items-center justify-between sticky top-0 z-30 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
      {/* Search bar */}
      <div className="relative w-[340px] max-w-full">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#94a3b8]" />
        <input
          type="text"
          placeholder={t('dashSearchPlaceholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#f8faf8] border border-[#e2e8e2] rounded-full focus:bg-white focus:outline-none focus:border-[#1b7f45] transition placeholder:text-[#94a3b8]"
        />
      </div>

      {/* Right Header Actions */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Location selector dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            className="flex items-center gap-1.5 text-xs font-medium text-[#475569] hover:text-[#1b7f45] cursor-pointer bg-[#f8faf8] px-3 py-1.5 rounded-full border border-[#e2e8e2] transition"
          >
            <MapPin className="h-3.5 w-3.5 text-[#1b7f45]" />
            <span className="truncate max-w-[140px]">{selectedLocation}</span>
            <ChevronDown className="h-3 w-3 text-[#94a3b8]" />
          </button>

          {showLocationDropdown && (
            <div className="absolute top-full mt-1.5 left-0 w-52 bg-white rounded-xl shadow-lg border border-[#e2e8e2] py-1 z-50">
              {locationsList.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => {
                    setSelectedLocation(loc)
                    setShowLocationDropdown(false)
                    showToast?.(`Location set to ${loc}`)
                  }}
                  className={`w-full text-left px-3.5 py-1.5 text-xs hover:bg-[#f1f6f1] transition flex items-center justify-between ${
                    selectedLocation === loc ? 'font-bold text-[#1b7f45]' : 'text-[#475569]'
                  }`}
                >
                  <span>{loc}</span>
                  {selectedLocation === loc && <CheckCircle2 className="h-3.5 w-3.5 text-[#1b7f45]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Language Switcher dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center gap-1 text-xs font-semibold text-[#475569] hover:text-[#1b7f45] px-2.5 py-1.5 rounded-full bg-[#f8faf8] border border-[#e2e8e2] transition"
            title="Switch Language"
          >
            <span className="text-xs">ðŸŒ</span>
            <span className="hidden sm:inline">{language}</span>
            <ChevronDown className="h-2.5 w-2.5 text-[#94a3b8]" />
          </button>

          {showLanguageDropdown && (
            <div className="absolute top-full mt-1.5 right-0 w-36 bg-white rounded-xl shadow-lg border border-[#e2e8e2] py-1 z-50">
              {availableLanguages?.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => {
                    setLanguage(lang)
                    setShowLanguageDropdown(false)
                    showToast?.(`Language switched to ${lang}`)
                  }}
                  className={`w-full text-left px-3.5 py-1.5 text-xs hover:bg-[#f1f6f1] transition flex items-center justify-between ${
                    language === lang ? 'font-bold text-[#1b7f45]' : 'text-[#475569]'
                  }`}
                >
                  <span>{lang}</span>
                  {language === lang && <CheckCircle2 className="h-3.5 w-3.5 text-[#1b7f45]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <button
          type="button"
          onClick={() => setActiveTab('notifications')}
          className="relative p-1.5 text-[#64748b] hover:text-[#1b7f45] rounded-full transition"
          title="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-3.5 w-3.5 bg-[#ef4444] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
            5
          </span>
        </button>

        {/* Messages */}
        <button
          type="button"
          onClick={() => setActiveTab('messages')}
          className="relative p-1.5 text-[#64748b] hover:text-[#1b7f45] rounded-full transition"
          title="Messages"
        >
          <MessageSquare className="h-4 w-4" />
          <span className="absolute top-1 right-1 h-3.5 w-3.5 bg-[#ef4444] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
            2
          </span>
        </button>

        {/* Profile Avatar & Info */}
        <div
          className="flex items-center gap-2 pl-3 border-l border-[#e2e8e2] cursor-pointer"
          onClick={() => setActiveTab('settings')}
        >
          <img
            src="/ramu-naik.jpg"
            alt="Ramu Naik"
            className="h-8 w-8 rounded-full object-cover ring-1 ring-[#1b7f45]/30"
          />
          <div className="text-left hidden sm:block">
            <p className="text-[12px] font-bold text-[#0f172a] leading-none">
              {user?.name || 'Ramu Naik'}
            </p>
            <p className="text-[10px] text-[#64748b] font-medium mt-0.5">
              {t('dashLandlordRole')}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
