import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function GovernmentSchemes({ language = 'en', t = (text) => translate(language, text) }) {
  const schemes = [
    { title: 'PM-Kisan Samman Nidhi', benefit: '₹6,000 / year (3 installments)', status: 'Active (Installment 18 Received)' },
    { title: 'Rythu Bima (Telangana)', benefit: '₹5 Lakh Life Insurance Cover', status: 'Enrolled & Verified' },
    { title: 'PM-KUSUM Solar Pump', benefit: '60% Central + State Subsidy', status: 'Application Approved' },
    { title: 'Micro-Irrigation Subsidy (TSMIP)', benefit: '80% Subsidy on Drip System', status: 'Disbursed' },
  ]

  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Public Benefits & Subsidies')}</span>
        <h1>{t('Government Schemes')}</h1>
        <p>{t('Direct Benefit Transfers, state agricultural incentives, and input subsidy applications.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Active Schemes')}</span>
          <strong>4 Enrolled</strong>
          <small>{t('Central & State')}</small>
        </article>
        <article>
          <span>{t('Total Subsidies Received')}</span>
          <strong>₹1,85,000</strong>
          <small>{t('Lifetime Grants & Credits')}</small>
        </article>
        <article>
          <span>{t('Pending Applications')}</span>
          <strong>1 Under Review</strong>
          <small>{t('Tractor Subsidy Scheme')}</small>
        </article>
        <article>
          <span>{t('Next DBT Date')}</span>
          <strong>Nov 15, 2026</strong>
          <small>{t('PM-Kisan Installment 19')}</small>
        </article>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
        {schemes.map((s) => (
          <article key={s.title}>
            <span className="role-dashboard__card-icon">🏛</span>
            <h3>{t(s.title)}</h3>
            <p>
              <strong>{t('Benefit')}:</strong> {t(s.benefit)}<br />
              <strong>{t('Status')}:</strong> <span style={{ color: '#21864b', fontWeight: 700 }}>{t(s.status)}</span>
            </p>
            <button type="button">{t('Scheme Guidelines & Application')} →</button>
          </article>
        ))}
      </div>
    </div>
  )
}

export default GovernmentSchemes
