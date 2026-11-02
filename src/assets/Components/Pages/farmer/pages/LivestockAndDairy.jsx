import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function LivestockAndDairy({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('Animal Husbandry')}</span>
        <h1>{t('Livestock & Dairy')}</h1>
        <p>{t('Daily milk yields, cattle health cards, feed nutrition, and vaccination milestones.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('Total Cattle')}</span>
          <strong>8</strong>
          <small>{t('6 Cows, 2 Goats')}</small>
        </article>
        <article>
          <span>{t("Today's Milk")}</span>
          <strong>52 L</strong>
          <small>{t('Morning: 28L | Evening: 24L')}</small>
        </article>
        <article>
          <span>{t('Avg Milk Price')}</span>
          <strong>₹52 / L</strong>
          <small>{t('Fat: 4.5% | SNF: 8.8')}</small>
        </article>
        <article>
          <span>{t('Next Vaccine')}</span>
          <strong>7 Days</strong>
          <small>{t('FMD Booster Dose')}</small>
        </article>
      </div>

      <div className={styles.cards3}>
        <article>
          <span className="role-dashboard__card-icon">🐄</span>
          <h3>{t('Murrah & Jersey Cows')}</h3>
          <p>{t('6 lactating animals in excellent health. Green fodder supplemented with mineral mixture daily.')}</p>
          <button type="button">{t('View Cattle Profiles')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🥛</span>
          <h3>{t('Dairy Sales Log')}</h3>
          <p>{t('Direct supply agreement with local milk cooperative. Monthly revenue: ₹81,120 estimated.')}</p>
          <button type="button">{t('Milk Ledger')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🩺</span>
          <h3>{t('Veterinary Visits')}</h3>
          <p>{t('Quarterly deworming completed last week. Next veterinarian inspection on 12th next month.')}</p>
          <button type="button">{t('Doctor Consultation')} →</button>
        </article>
      </div>
    </div>
  )
}

export default LivestockAndDairy
