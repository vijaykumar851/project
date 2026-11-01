import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function AlternativeFarming({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Modern & Sustainable Agriculture')}</span>
        <h1>{t('Alternative Farming')}</h1>
        <p>{t('Hydroponics, mushroom culture, organic bee apiary, and zero-budget natural farming practices.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Polyhouse')}</span>
          <strong>1,000 m²</strong>
          <small>{t('Climate Controlled')}</small>
        </article>
        <article>
          <span>{t('Mushroom Beds')}</span>
          <strong>40 Beds</strong>
          <small>{t('Oyster & Milky Mushrooms')}</small>
        </article>
        <article>
          <span>{t('Beehives')}</span>
          <strong>12 Boxes</strong>
          <small>{t('Raw Forest Flora Honey')}</small>
        </article>
        <article>
          <span>{t('Certification')}</span>
          <strong style={{ color: '#21864b' }}>{t('Jaivik Bharat')}</strong>
          <small>{t('Organic NPOP Certified')}</small>
        </article>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <article>
          <span className="role-dashboard__card-icon">🌱</span>
          <h3>{t('Hydroponic Vegetables')}</h3>
          <p>{t('Exotic lettuce, cherry tomatoes, and bell peppers grown with 80% water savings.')}</p>
          <button type="button">{t('Nutrient Solution Details')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🍄</span>
          <h3>{t('Mushroom Production')}</h3>
          <p>{t('Current harvest: 15kg/week. Supplied directly to farm-to-table restaurants in Hyderabad.')}</p>
          <button type="button">{t('Harvest Tracker')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🐝</span>
          <h3>{t('Beekeeping & Apiary')}</h3>
          <p>{t('Pollination boosts crop yields by 25%. Annual honey output expected: 120 kg.')}</p>
          <button type="button">{t('Hive Inspection Log')} →</button>
        </article>
      </div>
    </div>
  )
}

export default AlternativeFarming
