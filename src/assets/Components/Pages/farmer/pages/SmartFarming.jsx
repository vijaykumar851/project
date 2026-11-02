import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function SmartFarming({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('IoT Sensors & Precision Tech')}</span>
        <h1>{t('Smart Farming (IoT)')}</h1>
        <p>{t('Real-time soil sensors, automated pump telemetry, drone multispectral imagery, and weather telemetry.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('Active IoT Nodes')}</span>
          <strong style={{ color: '#21864b' }}>4 Connected</strong>
          <small>{t('Soil & Moisture Probes')}</small>
        </article>
        <article>
          <span>{t('Soil Moisture')}</span>
          <strong>68%</strong>
          <small>{t('Target Range: 60-75%')}</small>
        </article>
        <article>
          <span>{t('Soil Temperature')}</span>
          <strong>24.2°C</strong>
          <small>{t('Root Zone Depth: 15cm')}</small>
        </article>
        <article>
          <span>{t('Drone Survey NDVI')}</span>
          <strong>0.78 (Healthy)</strong>
          <small>{t('Scanned 3 Days Ago')}</small>
        </article>
      </div>

      <div className={styles.cards2}>
        <article>
          <span className="role-dashboard__card-icon">📡</span>
          <h3>{t('Field Sensor Network')}</h3>
          <p>{t('Battery status of all 4 LoRaWAN sensors: 92%. Automated alerts trigger SMS if moisture drops below 40%.')}</p>
          <button type="button">{t('Live Telemetry Chart')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🚁</span>
          <h3>{t('Drone Spraying & Imaging')}</h3>
          <p>{t('Book drone bio-spray service for 5 acres of paddy in under 20 minutes with zero soil compaction.')}</p>
          <button type="button">{t('Book Drone Mission')} →</button>
        </article>
      </div>
    </div>
  )
}

export default SmartFarming
