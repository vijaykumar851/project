import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function WaterAndIrrigation({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Water Resource & Automation')}</span>
        <h1>{t('Water & Irrigation')}</h1>
        <p>{t('Borewell water level monitoring, micro-drip control schedules, and reservoir volume tracking.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Borewell Yield')}</span>
          <strong>2.5 Inch</strong>
          <small>{t('Depth: 280ft (Adequate)')}</small>
        </article>
        <article>
          <span>{t('Drip Coverage')}</span>
          <strong>8.5 Acres</strong>
          <small>{t('Chilli & Vegetable Plots')}</small>
        </article>
        <article>
          <span>{t('Pump Run Time')}</span>
          <strong>4.5 Hrs</strong>
          <small>{t('Today | 3-Phase Power')}</small>
        </article>
        <article>
          <span>{t('Water Savings')}</span>
          <strong style={{ color: '#21864b' }}>42%</strong>
          <small>{t('Compared to Flood Method')}</small>
        </article>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
        <article>
          <span className="role-dashboard__card-icon">💧</span>
          <h3>{t('Irrigation Zones & Timers')}</h3>
          <p>{t('Zone 1 (Paddy): Scheduled for 09:00 AM tomorrow. Zone 2 (Drip Chilli): Auto-fertilizer venturi running.')}</p>
          <button type="button">{t('Configure Smart Valves')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">⚡</span>
          <h3>{t('Solar Pump Integration')}</h3>
          <p>{t('5 HP Solar Submersible operating on PM-KUSUM subsidy. Grid power backup available for evening hours.')}</p>
          <button type="button">{t('Power & Pump Diagnostics')} →</button>
        </article>
      </div>
    </div>
  )
}

export default WaterAndIrrigation
