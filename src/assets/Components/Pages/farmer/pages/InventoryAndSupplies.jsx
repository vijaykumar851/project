import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'
import { farmerPageStyles as styles } from './farmerPageStyles.js'

function InventoryAndSupplies({ language = 'en', t = (text) => translate(language, text) }) {
  const stockItems = [
    { name: 'Paddy Seeds (RNR-15048)', qty: '50 kg', category: 'Seeds', status: 'In Stock' },
    { name: 'Neem Cake Fertilizer', qty: '120 kg', category: 'Bio-Fertilizer', status: 'In Stock' },
    { name: 'DAP (Di-ammonium Phosphate)', qty: '2 Bags (100 kg)', category: 'Fertilizer', status: 'Low Stock' },
    { name: 'Cattle Feed Mash', qty: '200 kg', category: 'Feed', status: 'In Stock' },
  ]

  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <span>{t('Storage & Inputs')}</span>
        <h1>{t('Inventory & Supplies')}</h1>
        <p>{t('Track on-farm reserves of seeds, organic fertilizers, veterinary feed, and field chemicals.')}</p>
      </div>

      <div className={styles.stats}>
        <article>
          <span>{t('Total Items')}</span>
          <strong>24</strong>
          <small>{t('Across 4 Categories')}</small>
        </article>
        <article>
          <span>{t('Stock Value')}</span>
          <strong>₹48,500</strong>
          <small>{t('Estimated Purchase Cost')}</small>
        </article>
        <article>
          <span>{t('Low Stock Alerts')}</span>
          <strong style={{ color: '#dc2626' }}>2</strong>
          <small>{t('Re-order Required')}</small>
        </article>
        <article>
          <span>{t('Recent Order')}</span>
          <strong>2 Days Ago</strong>
          <small>{t('Organic Vermicompost (1 Ton)')}</small>
        </article>
      </div>

      <div className={styles.cards2}>
        {stockItems.map((item) => (
          <article key={item.name}>
            <span className="role-dashboard__card-icon">📦</span>
            <h3>{t(item.name)}</h3>
            <p>
              <strong>{t('Quantity')}:</strong> {item.qty}<br />
              <strong>{t('Category')}:</strong> {t(item.category)}<br />
              <strong>{t('Status')}:</strong> <span style={{ color: item.status === 'Low Stock' ? '#dc2626' : '#21864b', fontWeight: 700 }}>{t(item.status)}</span>
            </p>
            <button type="button">{t('Order More')} →</button>
          </article>
        ))}
      </div>
    </div>
  )
}

export default InventoryAndSupplies
