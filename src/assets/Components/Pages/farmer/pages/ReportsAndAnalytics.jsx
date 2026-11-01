import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function ReportsAndAnalytics({ language = 'en', t = (text) => translate(language, text) }) {
  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Profitability & Yield Insights')}</span>
        <h1>{t('Reports & Analytics')}</h1>
        <p>{t('Seasonal cost breakdown, harvest yield benchmarking, input return-on-investment, and balance sheet.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Total Revenue')}</span>
          <strong>₹4,82,000</strong>
          <small>{t('Kharif 2026 Season')}</small>
        </article>
        <article>
          <span>{t('Input Expenses')}</span>
          <strong>₹1,45,200</strong>
          <small>{t('Seeds, Labour, Diesel, Fert.')}</small>
        </article>
        <article>
          <span>{t('Net Farm Profit')}</span>
          <strong style={{ color: '#21864b' }}>₹3,36,800</strong>
          <small>{t('+18% vs Last Year')}</small>
        </article>
        <article>
          <span>{t('Paddy Yield')}</span>
          <strong>28 Quintals/Ac</strong>
          <small>{t('Above Regional Avg (24 Q/Ac)')}</small>
        </article>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <article>
          <span className="role-dashboard__card-icon">📊</span>
          <h3>{t('Yield Benchmark Report')}</h3>
          <p>{t('Comparative analytics across your 3 parcels. Identifies Main Farm as the highest-yielding acre.')}</p>
          <button type="button">{t('Export PDF Report')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">💰</span>
          <h3>{t('Expense Breakdown')}</h3>
          <p>{t('Labour accounted for 42% of expenses, followed by fertilizer (28%) and machinery diesel (18%).')}</p>
          <button type="button">{t('View Ledger')} →</button>
        </article>
        <article>
          <span className="role-dashboard__card-icon">📑</span>
          <h3>{t('Bank Tax & Audit Statement')}</h3>
          <p>{t('Download verified digital farming income declaration certificate for KCC loan renewals.')}</p>
          <button type="button">{t('Download Statement')} →</button>
        </article>
      </div>
    </div>
  )
}

export default ReportsAndAnalytics
