import { useMarketplace } from './MarketplaceContext';
import {
  RupeeIcon,
  SproutIcon,
  FlaskIcon,
  TrendingUpIcon,
} from '../components/Icons';

export default function NotificationsPage() {
  const { notifications, markNotificationRead, markAllNotificationsRead } = useMarketplace();

  function getIcon(category) {
    if (category === 'payment') {
      return { icon: RupeeIcon, bg: '#dcfce7', color: '#15803d' };
    }
    if (category === 'land') {
      return { icon: SproutIcon, bg: '#fef3c7', color: '#d97706' };
    }
    if (category === 'service') {
      return { icon: FlaskIcon, bg: '#e0f2fe', color: '#0284c7' };
    }
    return { icon: TrendingUpIcon, bg: '#f3e8ff', color: '#9333ea' };
  }

  return (
    <div className="mx-auto w-full max-w-[1480px] px-6 pb-10">
      <div className="mb-[18px] flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Alerts & Activity Notifications
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
            Real-time updates regarding lease payments, new parcels listed in Vikarabad, and mandi price shifts.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg border border-green-600 px-3 py-1.5 text-xs font-bold text-green-600 transition hover:bg-green-600 hover:text-white"
          onClick={markAllNotificationsRead}
        >
          Mark all as read
        </button>
      </div>

      <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '16px' }}>
        {notifications.map((notif) => {
          const style = getIcon(notif.category);
          const Icon = style.icon;

          return (
            <div
              key={notif.id}
              className="mb-1.5 flex cursor-pointer items-start gap-3 rounded-[10px] border-b border-slate-100 px-3 py-3.5 last:border-0"
              onClick={() => markNotificationRead(notif.id)}
              style={{
                cursor: 'pointer',
                padding: '14px 12px',
                background: notif.read ? '#ffffff' : '#f0fdf4',
                borderRadius: '10px',
                marginBottom: '6px',
              }}
            >
              <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full" style={{ background: style.bg, color: style.color }}>
                <Icon className="w-5 h-5" />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.9rem', fontWeight: notif.read ? 650 : 800, color: '#0f172a' }}>
                  {notif.title} {!notif.read && <span style={{ color: '#ef4444' }}>• New</span>}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                  {notif.description}
                </div>
              </div>

              <div className="ml-auto whitespace-nowrap text-[0.68rem] text-slate-400">{notif.timestamp}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
