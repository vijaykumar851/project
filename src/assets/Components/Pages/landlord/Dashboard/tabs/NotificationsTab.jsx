import { useTranslation } from '../../context/LanguageContext.jsx'

export default function NotificationsTab({ notifications = [] }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e2e8e2] shadow-sm space-y-3">
      <h2 className="text-lg font-bold text-[#0f172a]">{t('dashTabNotificationsTitle')}</h2>
      {notifications.map((n, i) => (
        <div
          key={i}
          className="p-3 rounded-xl border border-[#e2e8e2] flex items-center justify-between hover:bg-[#f8faf8] transition"
        >
          <div>
            <p className="text-xs font-semibold text-[#0f172a]">{n.text}</p>
            <span className="text-[10px] text-[#94a3b8]">{n.time}</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f1f5f9] text-[#475569]">
            {n.tag}
          </span>
        </div>
      ))}
    </div>
  )
}
