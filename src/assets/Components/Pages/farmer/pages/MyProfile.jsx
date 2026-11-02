import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function MyProfile({ language = 'en', userName = 'User', t = (text) => translate(language, text) }) {
  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('Account & Personal Information')}</span>
        <h1>{userName}&apos;s {t('Profile')}</h1>
        <p>{t('Manage your farmer identity, verified credentials, and farm contact details.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('Total Land')}</span>
          <strong>12.5</strong>
          <small>{t('Acres Verified')}</small>
        </article>
        <article>
          <span>{t('Member Since')}</span>
          <strong>2023</strong>
          <small>{t('Telangana Farmer Registry')}</small>
        </article>
        <article>
          <span>{t('KYC Status')}</span>
          <strong style={{ color: '#21864b' }}>✓ {t('Verified')}</strong>
          <small>{t('Aadhaar & Pattadar Passbook')}</small>
        </article>
        <article>
          <span>{t('Primary Crop')}</span>
          <strong>{t('Paddy')}</strong>
          <small>{t('RNR-15048 Telangana Sona')}</small>
        </article>
      </div>

      <div className={styles.cards2}>
        <article>
          <span className="role-dashboard__card-icon">👤</span>
          <h3>{t('Personal Details')}</h3>
          <p>
            <strong>{t('Full Name')}:</strong> {userName}<br />
            <strong>{t('Phone')}:</strong> +91 98765 43210<br />
            <strong>{t('Village')}:</strong> Shamshabad, Rangareddy<br />
            <strong>{t('State')}:</strong> Telangana
          </p>
          <button type="button">{t('Edit Details')} →</button>
        </article>

        <article>
          <span className="role-dashboard__card-icon">🏛</span>
          <h3>{t('Land & Bank Records')}</h3>
          <p>
            <strong>{t('Passbook ID')}:</strong> TS-RR-2023-8841<br />
            <strong>{t('Kisan Credit Card')}:</strong> State Bank of India<br />
            <strong>{t('Account')}:</strong> *******4819<br />
            <strong>{t('PM-Kisan ID')}:</strong> TS-9921448
          </p>
          <button type="button">{t('Manage Bank Details')} →</button>
        </article>
      </div>
    </div>
  )
}

export default MyProfile
