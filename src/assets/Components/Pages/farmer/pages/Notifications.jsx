import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function Notifications({ language = 'en', t = (text) => translate(language, text) }) {
  const notifList = [
    { title: 'Rythu Bandhu Credit Received', desc: '₹25,000 credited to SBI account for 5.0 acres Main Farm.', time: '2 hours ago', unread: true },
    { title: 'Weather Warning: High Temperature', desc: 'Day temperature expected to cross 34°C. Ensure morning irrigation.', time: '5 hours ago', unread: true },
    { title: 'New Buyer Bid on Paddy', desc: 'M/s Sri Venkateshwara Rice Mill offered ₹2,310/Quintal for 50 Quintals.', time: '1 day ago', unread: true },
    { title: 'KCC Interest Subsidy Applied', desc: '3% Prompt repayment incentive credited by NABARD.', time: '3 days ago', unread: false },
  ]

  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('Alerts & Updates')}</span>
        <h1>{t('Notifications')}</h1>
        <p>{t('Stay informed about subsidy credits, mandi market bids, weather advisories, and task reminders.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('Unread Alerts')}</span>
          <strong style={{ color: '#dc2626' }}>3</strong>
          <small>{t('Requires Action')}</small>
        </article>
        <article>
          <span>{t('This Week')}</span>
          <strong>14</strong>
          <small>{t('Total Notifications')}</small>
        </article>
        <article>
          <span>{t('SMS Alerts')}</span>
          <strong style={{ color: '#21864b' }}>{t('Active')}</strong>
          <small>{t('+91 98765 43210')}</small>
        </article>
        <article>
          <span>{t('WhatsApp Alerts')}</span>
          <strong style={{ color: '#21864b' }}>{t('Connected')}</strong>
          <small>{t('Daily Mandi Rate Bot')}</small>
        </article>
      </div>

      <div className={styles.sectionHeading}>
        <h2>{t('Recent Notifications')}</h2>
        <button type="button" className={styles.cardLink}>{t('Mark all as read')}</button>
      </div>

      <div className={styles.cards1}>
        {notifList.map((n) => (
          <article key={n.title} style={{ minHeight: 'auto', padding: '16px 20px', borderLeft: n.unread ? '4px solid #21864b' : '1px solid #e4ebe5' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '6px' }}>
              <h3 style={{ margin: 0, fontSize: '14px', color: '#183c27' }}>{t(n.title)}</h3>
              <small style={{ color: '#7a867d' }}>{n.time}</small>
            </div>
            <p style={{ margin: 0, color: '#526057', fontSize: '13px' }}>{t(n.desc)}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Notifications
