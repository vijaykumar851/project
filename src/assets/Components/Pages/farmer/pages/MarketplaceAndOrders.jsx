import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function MarketplaceAndOrders({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Direct Produce Commerce')}</span>
        <h1>{t('Marketplace & Orders')}</h1>
        <p>{t('List harvested produce, negotiate direct prices with wholesale buyers, and verify digital payments.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Active Listings')}</span>
          <strong>3 Items</strong>
          <small>{t('Paddy, Chilli, Milk')}</small>
        </article>
        <article>
          <span>{t('Open Orders')}</span>
          <strong>2 Pending</strong>
          <small>{t('Awaiting Dispatch')}</small>
        </article>
        <article>
          <span>{t('This Month Sales')}</span>
          <strong>₹1,42,800</strong>
          <small>{t('Settled via e-NAM & Bank')}</small>
        </article>
        <article>
          <span>{t('Buyer Inquiries')}</span>
          <strong style={{ color: '#21864b' }}>5 New</strong>
          <small>{t('Wholesale Millers')}</small>
        </article>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <article>
          <span className="role-dashboard__card-icon">🌾</span>
          <h3>{t('Paddy (100 Bags / 50 Quintals)')}</h3>
          <p>
            <strong>{t('Offer Price')}:</strong> ₹2,280 / Quintal<br />
            <strong>{t('Quality')}:</strong> Moisture &lt; 14%<br />
            <strong>{t('Top Bid')}:</strong> ₹2,310 / Quintal (Nalgonda Miller)
          </p>
          <button type="button">{t('Accept Bid / Negotiate')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">🌶</span>
          <h3>{t('Dry Red Chilli (10 Quintals)')}</h3>
          <p>
            <strong>{t('Offer Price')}:</strong> ₹19,500 / Quintal<br />
            <strong>{t('Quality')}:</strong> Grade-A Sun Dried<br />
            <strong>{t('Status')}:</strong> 3 Spices Exporters Interested
          </p>
          <button type="button">{t('Manage Listing')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">➕</span>
          <h3>{t('List New Produce')}</h3>
          <p>{t('Post vegetables, grains, or dairy for instant exposure to verified buyers across Telangana & Andhra Pradesh.')}</p>
          <button type="button">+ {t('Create Listing')} →</button>
        </article>
      </div>
    </div>
  )
}

export default MarketplaceAndOrders
