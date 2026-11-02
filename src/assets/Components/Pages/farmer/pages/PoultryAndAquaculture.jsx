import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function PoultryAndAquaculture({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('Allied Agro Activities')}</span>
        <h1>{t('Poultry & Aquaculture')}</h1>
        <p>{t('Flock management, daily egg count, fishery pond water quality, and feed conversion ratios.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('Total Birds')}</span>
          <strong>250</strong>
          <small>{t('Country Breed & Layers')}</small>
        </article>
        <article>
          <span>{t('Daily Eggs')}</span>
          <strong>185</strong>
          <small>{t('Avg Rate: ₹6.50/egg')}</small>
        </article>
        <article>
          <span>{t('Fish Pond')}</span>
          <strong>0.5 Acre</strong>
          <small>{t('Rohu & Catla Fingerlings')}</small>
        </article>
        <article>
          <span>{t('Pond pH')}</span>
          <strong style={{ color: '#21864b' }}>7.4</strong>
          <small>{t('Dissolved O2: 6.2 mg/L')}</small>
        </article>
      </div>

      <div className={styles.cards2}>
        <article>
          <span className="role-dashboard__card-icon">🐔</span>
          <h3>{t('Poultry Shed Status')}</h3>
          <p>{t('Temperature maintained at 26°C with ventilation fans. Feed consumption: 30kg mash daily.')}</p>
          <button type="button">{t('Poultry Logs')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🐟</span>
          <h3>{t('Aquaculture Reservoir')}</h3>
          <p>{t('Fingerlings introduced 45 days ago. Growth rate tracking optimal. Harvest expected in 3 months.')}</p>
          <button type="button">{t('Water & Feeding Log')} →</button>
        </article>
      </div>
    </div>
  )
}

export default PoultryAndAquaculture
