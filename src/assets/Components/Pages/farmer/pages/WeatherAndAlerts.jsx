import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function WeatherAndAlerts({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Meteorology & Agronomic Alerts')}</span>
        <h1>{t('Weather & Alerts')}</h1>
        <p>{t('Hyper-local weather forecasts, IMD advisory warnings, and pest outbreak hazard alerts.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Current Temp')}</span>
          <strong>28°C</strong>
          <small>{t('Partly Cloudy | Hyderabad')}</small>
        </article>
        <article>
          <span>{t('Humidity')}</span>
          <strong>62%</strong>
          <small>{t('Dew Point: 20°C')}</small>
        </article>
        <article>
          <span>{t('Rain Probability')}</span>
          <strong style={{ color: '#2563eb' }}>15%</strong>
          <small>{t('Next 48 Hours')}</small>
        </article>
        <article>
          <span>{t('Wind Speed')}</span>
          <strong>12 km/h</strong>
          <small>{t('Direction: South-West')}</small>
        </article>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <article>
          <span className="role-dashboard__card-icon">🌤</span>
          <h3>{t('5-Day Micro Forecast')}</h3>
          <p>{t('Stable atmospheric conditions through Thursday. Ideal window for fertilizer application and weed clearance.')}</p>
          <button type="button">{t('Detailed Hourly Weather')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">⚠️</span>
          <h3>{t('Pest & Disease Advisory')}</h3>
          <p>{t('Moderate risk of yellow stem borer in paddy. Recommendation: Deploy pheromone traps in field perimeter.')}</p>
          <button type="button">{t('View Advisory Action')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">📡</span>
          <h3>{t('IMD Agro Bulletins')}</h3>
          <p>{t('Telangana State Agricultural Weather Bulletin updated today at 06:00 AM by PJTSAU Rajendranagar.')}</p>
          <button type="button">{t('Read Full Bulletin')} →</button>
        </article>
      </div>
    </div>
  )
}

export default WeatherAndAlerts
