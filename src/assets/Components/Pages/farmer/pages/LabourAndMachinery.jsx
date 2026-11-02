import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function LabourAndMachinery({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('Equipment & Workforce Management')}</span>
        <h1>{t('Labour & Machinery')}</h1>
        <p>{t('Track farm equipment operating hours, schedule machinery maintenance, and record daily labour.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('Tractors & Implements')}</span>
          <strong>3 Units</strong>
          <small>{t('Mahindra 575 + Rotavator')}</small>
        </article>
        <article>
          <span>{t('Active Labourers')}</span>
          <strong>6 Persons</strong>
          <small>{t('Weeding & Irrigation Today')}</small>
        </article>
        <article>
          <span>{t('Diesel Consumption')}</span>
          <strong>45 L</strong>
          <small>{t('This Week')}</small>
        </article>
        <article>
          <span>{t('Next Service')}</span>
          <strong>180 Hrs</strong>
          <small>{t('Tractor Oil Change')}</small>
        </article>
      </div>

      <div className={styles.cards2}>
        <article>
          <span className="role-dashboard__card-icon">🚜</span>
          <h3>{t('Machinery Fleet')}</h3>
          <p>{t('Tractor, seed drill, and solar water pump operating at 100% capacity. Available for local leasing on idle days.')}</p>
          <button type="button">{t('Rent Machinery / Log Hours')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">👥</span>
          <h3>{t('Labour Wages & Attendance')}</h3>
          <p>{t('Standard daily wage: ₹450/day. Direct UPI payout enabled for seamless weekly settlements.')}</p>
          <button type="button">{t('Attendance Register')} →</button>
        </article>
      </div>
    </div>
  )
}

export default LabourAndMachinery
