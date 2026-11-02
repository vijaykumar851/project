import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function CommunityAndLearning({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('Farmer Producer Network')}</span>
        <h1>{t('Community & Learning')}</h1>
        <p>{t('Share knowledge with 10,000+ local farmers, attend field demonstration days, and watch training modules.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('FPO Membership')}</span>
          <strong style={{ color: '#21864b' }}>{t('Rangareddy FPO')}</strong>
          <small>{t('Shareholder ID: 489')}</small>
        </article>
        <article>
          <span>{t('Community Posts')}</span>
          <strong>340+ Active</strong>
          <small>{t('Discussions Today')}</small>
        </article>
        <article>
          <span>{t('Training Courses')}</span>
          <strong>12 Completed</strong>
          <small>{t('Micro-Drip & Natural Farming')}</small>
        </article>
        <article>
          <span>{t('Upcoming Webinar')}</span>
          <strong>Saturday 4 PM</strong>
          <small>{t('Paddy Stem Borer Control')}</small>
        </article>
      </div>

      <div className={styles.cards3}>
        <article>
          <span className="role-dashboard__card-icon">💬</span>
          <h3>{t('Farmer Forum')}</h3>
          <p>{t('Ask questions, discuss mandi prices in Suryapet, Warangal, and Nizamabad with fellow growers.')}</p>
          <button type="button">{t('Join Discussion')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🎥</span>
          <h3>{t('Video Masterclasses')}</h3>
          <p>{t('Practical video demonstrations by successful progressive farmers on natural bio-pesticide preparation.')}</p>
          <button type="button">{t('Watch Videos')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🤝</span>
          <h3>{t('Group Bulk Purchasing')}</h3>
          <p>{t('Pool seed and fertilizer orders with nearby farmers to unlock wholesale prices with 20% discount.')}</p>
          <button type="button">{t('View Group Deals')} →</button>
        </article>
      </div>
    </div>
  )
}

export default CommunityAndLearning
