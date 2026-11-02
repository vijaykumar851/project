import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function ProcessingAndWaste({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('Circular Agriculture')}</span>
        <h1>{t('Processing & Waste')}</h1>
        <p>{t('Value addition, grain drying, chaff composting, and biogas renewable energy production.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('Compost Heap')}</span>
          <strong>2.5 Tons</strong>
          <small>{t('Enriched with Trichoderma')}</small>
        </article>
        <article>
          <span>{t('Biogas Digester')}</span>
          <strong>3 m³/day</strong>
          <small>{t('Powers Farm Kitchen')}</small>
        </article>
        <article>
          <span>{t('Residue Recycled')}</span>
          <strong style={{ color: '#21864b' }}>95%</strong>
          <small>{t('Zero Stubble Burning')}</small>
        </article>
        <article>
          <span>{t('Dryer Status')}</span>
          <strong>Active</strong>
          <small>{t('Solar Grain Dryer Unit')}</small>
        </article>
      </div>

      <div className={styles.cards2}>
        <article>
          <span className="role-dashboard__card-icon">♻️</span>
          <h3>{t('Vermicompost & Manure Unit')}</h3>
          <p>{t('Cow dung and paddy straw composted in 4 raised beds. Next harvest of organic vermicompost in 10 days.')}</p>
          <button type="button">{t('Compost Logs')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">⚡</span>
          <h3>{t('Gobar Gas / Biogas Plant')}</h3>
          <p>{t('Daily slurry utilized as liquid organic fertilizer for vegetable plots. Clean cooking fuel generated seamlessly.')}</p>
          <button type="button">{t('Digester Health')} →</button>
        </article>
      </div>
    </div>
  )
}

export default ProcessingAndWaste
