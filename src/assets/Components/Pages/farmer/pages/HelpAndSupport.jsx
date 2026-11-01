import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function HelpAndSupport({ language = 'en', t = (text) => translate(language, text) }) {
  const faqs = [
    { q: 'How do I apply for Rythu Bandhu subsidy?', a: 'Your land passbook details are synced automatically through Dharani portal. Check status under Government Schemes.' },
    { q: 'How can I sell produce directly to buyers?', a: 'Go to Marketplace & Orders, click "Create Listing", enter your crop quantity and asking price per quintal.' },
    { q: 'What is the procedure for soil health testing?', a: 'Book a sample pickup via Expert Support. A local KVK representative will collect samples from your field.' },
  ]

  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Assistance & Customer Care')}</span>
        <h1>{t('Help & Support')}</h1>
        <p>{t('24/7 dedicated farmer helpline, app troubleshooting guides, FAQs, and ticket resolution.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Helpline Number')}</span>
          <strong style={{ fontSize: '18px', color: '#21864b' }}>1800-180-1551</strong>
          <small>{t('Toll-Free Kisan Call Centre')}</small>
        </article>
        <article>
          <span>{t('WhatsApp Support')}</span>
          <strong>+91 99887 76655</strong>
          <small>{t('Instant Raithanna Bot')}</small>
        </article>
        <article>
          <span>{t('Email Support')}</span>
          <strong>support@raithanna.in</strong>
          <small>{t('Response within 24 hours')}</small>
        </article>
        <article>
          <span>{t('Support Hours')}</span>
          <strong>6 AM - 10 PM</strong>
          <small>{t('7 Days a Week')}</small>
        </article>
      </div>

      <div className="role-dashboard__section-heading">
        <h2>{t('Frequently Asked Questions')}</h2>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        {faqs.map((faq) => (
          <article key={faq.q}>
            <span className="role-dashboard__card-icon">❓</span>
            <h3>{t(faq.q)}</h3>
            <p>{t(faq.a)}</p>
            <button type="button">{t('Read Guide')} →</button>
          </article>
        ))}
      </div>
    </div>
  )
}

export default HelpAndSupport
