import { translateDashboard as translate } from '../../../../../dashboardTranslations.js'

function MyFarmsAndLand({ language = 'en', t = (text) => translate(language, text) }) {
  const farmList = [
    { name: 'Main Farm', location: 'Rangareddy, Telangana', area: '5.0 Acres', status: 'Self Owned', type: 'Red Loam' },
    { name: 'Chilli Farm', location: 'Nalgonda, Telangana', area: '4.0 Acres', status: 'Leased', type: 'Black Cotton' },
    { name: 'Vegetable Plot', location: 'Hyderabad, Telangana', area: '3.5 Acres', status: 'Self Owned', type: 'Alluvial Loam' },
  ]

  return (
    <div className="role-dashboard__content">
      <div className="role-dashboard__welcome">
        <span>{t('Land Holdings & Properties')}</span>
        <h1>{t('My Farms & Land')}</h1>
        <p>{t('Overview of registered parcels, soil types, boundary surveys, and ownership deeds.')}</p>
      </div>

      <div className="role-dashboard__stats">
        <article>
          <span>{t('Total Parcels')}</span>
          <strong>3</strong>
          <small>{t('Across 2 Districts')}</small>
        </article>
        <article>
          <span>{t('Total Area')}</span>
          <strong>12.5</strong>
          <small>{t('Acres Cultivable')}</small>
        </article>
        <article>
          <span>{t('Irrigated')}</span>
          <strong>10.0</strong>
          <small>{t('Acres with Borewell')}</small>
        </article>
        <article>
          <span>{t('Rainfed')}</span>
          <strong>2.5</strong>
          <small>{t('Acres Natural Catchment')}</small>
        </article>
      </div>

      <div className="role-dashboard__section-heading">
        <h2>{t('Registered Plots')}</h2>
        <button type="button" className="role-dashboard__card-link">+ {t('Add New Land Parcel')}</button>
      </div>

      <div className="role-dashboard__cards" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        {farmList.map((farm) => (
          <article key={farm.name}>
            <span className="role-dashboard__card-icon">♧</span>
            <h3>{t(farm.name)}</h3>
            <p>
              <strong>{t('Location')}:</strong> {t(farm.location)}<br />
              <strong>{t('Area')}:</strong> {t(farm.area)}<br />
              <strong>{t('Status')}:</strong> {t(farm.status)}<br />
              <strong>{t('Soil')}:</strong> {t(farm.type)}
            </p>
            <button type="button">{t('View Soil & Survey')} →</button>
          </article>
        ))}
      </div>
    </div>
  )
}

export default MyFarmsAndLand
