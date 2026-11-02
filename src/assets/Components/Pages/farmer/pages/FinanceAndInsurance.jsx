import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function FinanceAndInsurance({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('Capital & Risk Coverage')}</span>
        <h1>{t('Finance & Insurance')}</h1>
        <p>{t('Track KCC credit lines, input loans, crop insurance policies under PMFBY, and subsidy claims.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('KCC Limit')}</span>
          <strong>₹3,00,000</strong>
          <small>{t('Utilized: ₹1,20,000 @ 4% p.a.')}</small>
        </article>
        <article>
          <span>{t('Crop Insurance')}</span>
          <strong style={{ color: '#21864b' }}>{t('Active')}</strong>
          <small>{t('PMFBY Policy: Kharif 2026')}</small>
        </article>
        <article>
          <span>{t('Sum Insured')}</span>
          <strong>₹2,80,000</strong>
          <small>{t('Premium Paid: ₹5,600')}</small>
        </article>
        <article>
          <span>{t('Rythu Bandhu')}</span>
          <strong style={{ color: '#21864b' }}>₹62,500</strong>
          <small>{t('Credit Status: Credited')}</small>
        </article>
      </div>

      <div className={styles.cards2}>
        <article>
          <span className="role-dashboard__card-icon">💳</span>
          <h3>{t('Kisan Credit Card (SBI)')}</h3>
          <p>{t('Available balance: ₹1,80,000. Interest subvention active for timely repayment before March 31st.')}</p>
          <button type="button">{t('Repay / View Statement')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🛡</span>
          <h3>{t('Pradhan Mantri Fasal Bima Yojana')}</h3>
          <p>{t('Coverage includes localized calamity, pest attacks, and post-harvest losses. Claim window: 72 hours from event.')}</p>
          <button type="button">{t('Policy Document / Claim')} →</button>
        </article>
      </div>
    </div>
  )
}

export default FinanceAndInsurance
