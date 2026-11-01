import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function CropsAndSoil({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Agronomy & Earth Health')}</span>
        <h1>{t('Crops & Soil')}</h1>
        <p>{t('Monitor crop life cycles, schedule soil nutrition tests, and track organic amendments.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Active Crops')}</span>
          <strong>5</strong>
          <small>{t('Kharif Season')}</small>
        </article>
        <article>
          <span>{t('Soil Health Index')}</span>
          <strong style={{ color: '#21864b' }}>84/100</strong>
          <small>{t('Optimal N-P-K Balance')}</small>
        </article>
        <article>
          <span>{t('Soil pH')}</span>
          <strong>6.8</strong>
          <small>{t('Neutral - Ideal')}</small>
        </article>
        <article>
          <span>{t('Organic Carbon')}</span>
          <strong>0.72%</strong>
          <small>{t('Target: > 0.75%')}</small>
        </article>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <article>
          <span className="role-dashboard__card-icon">🌾</span>
          <h3>{t('Paddy (Telangana Sona)')}</h3>
          <p>{t('Flowering stage reached. Irrigation scheduled every 3 days. Last urea spray done 4 days ago.')}</p>
          <button type="button">{t('Crop Schedule')} →</button>
        </article>

        <article>
          <span className="role-dashboard__card-icon">🌶</span>
          <h3>{t('Teja Red Chilli')}</h3>
          <p>{t('Fruiting phase. Preventive organic neem oil treatment recommended to deter thrips.')}</p>
          <button type="button">{t('Pest Advisory')} →</button>
        </article>

        <article>
          <span className="role-dashboard__card-icon">🧪</span>
          <h3>{t('Soil Health Card')}</h3>
          <p>{t('Last tested: 15 Sept 2026 at Shamshabad KVK lab. Recommendation: Add 50kg Zinc Sulphate.')}</p>
          <button type="button">{t('Download Report')} →</button>
        </article>
      </div>
    </div>
  )
}

export default CropsAndSoil
