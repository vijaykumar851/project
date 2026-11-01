import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function ExpertSupport({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Agronomists & Scientists')}</span>
        <h1>{t('Expert Support')}</h1>
        <p>{t('Connect directly with PJTSAU agricultural university professors, KVK scientists, and soil experts.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Available Experts')}</span>
          <strong>14 Online</strong>
          <small>{t('Agronomy, Soil, Entomology')}</small>
        </article>
        <article>
          <span>{t('Avg Response Time')}</span>
          <strong>15 Mins</strong>
          <small>{t('Voice & Chat Hotline')}</small>
        </article>
        <article>
          <span>{t('Consultations Taken')}</span>
          <strong>8 Sessions</strong>
          <small>{t('Rating: 4.9 / 5.0')}</small>
        </article>
        <article>
          <span>{t('Toll Free Support')}</span>
          <strong>1800-180-1551</strong>
          <small>{t('Kisan Call Centre (24x7)')}</small>
        </article>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <article>
          <span className="role-dashboard__card-icon">📞</span>
          <h3>{t('Call an Agronomist')}</h3>
          <p>{t('Speak to a regional crop specialist in Telugu or English for immediate diagnosis of leaf spotting or wilting.')}</p>
          <button type="button">{t('Call Now')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">📸</span>
          <h3>{t('Photo Crop Diagnosis')}</h3>
          <p>{t('Take a photo of diseased leaf or pest. AI + KVK scientist reviews and provides cure within 1 hour.')}</p>
          <button type="button">{t('Upload Photo')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🧪</span>
          <h3>{t('Book Soil Sample Pickup')}</h3>
          <p>{t('Schedule home/farm pickup of soil sample for full 12-parameter fertility laboratory analysis.')}</p>
          <button type="button">{t('Schedule Sample Pickup')} →</button>
        </article>
      </div>
    </div>
  )
}

export default ExpertSupport
