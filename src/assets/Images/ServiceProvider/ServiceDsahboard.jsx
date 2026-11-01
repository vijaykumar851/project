import { useState } from 'react'
import Navbar from '../../Components/Pages/Navbar.jsx'
import Sidebar from '../../Components/Pages/Sidebar.jsx'
import './ServiceProviderDashboard.css'

const stats = [
  { label: 'Completed Bookings', value: '12', icon: '✓', tone: 'green', href: '#schedule' },
  { label: 'Active Bookings', value: '5', icon: '▦', tone: 'purple', href: '#schedule' },
  { label: 'Pending Requests', value: '3', icon: '▤', tone: 'orange', href: '#service-requests' },
  { label: 'Total Earnings', value: '₹ 28,500', icon: '₹', tone: 'blue', href: '#earnings-overview' },
]

const categories = [
  ['Soil Testing & Analysis', '◉', 'green'],
  ['Fertilizer & Input Supply', '♧', 'purple'],
  ['Farm Machinery Rental', '⚒', 'blue'],
  ['Irrigation & Water', '♢', 'cyan'],
  ['Pest & Disease Control', '✳', 'orange'],
  ['Harvesting & Labor', '♙', 'yellow'],
]

const bookings = [
  ['Soil testing service', 'Raman Reddy Farm · Medak', 'Today, 8:00 – 10:00 AM', 'Upcoming'],
  ['Fertilizer application', 'Srinivas Farm · Sangareddy', 'Today, 11:00 AM – 1:00 PM', 'Upcoming'],
  ['Rotavator rental', 'Anil Kumar Farm · Vikarabad', 'Today, 3:00 – 5:00 PM', 'Confirmed'],
]

const requests = [
  ['Soil testing & analysis', 'Raman Reddy Farm · Medak', 'Apr 25 · 10:00 AM', 'Pending'],
  ['Organic pest control', 'Srinivas Farm · Sangareddy', 'Apr 25 · 2:30 PM', 'Confirmed'],
  ['Irrigation setup', 'Lakshmi Farm · Medak', 'Apr 26 · 4:00 PM', 'Pending'],
]

const messages = [
  ['RK', 'Ravi Kumar', 'Soil testing report is ready...', '2h ago'],
  ['LD', 'Lakshmi Devi', 'Can you come tomorrow?', '4h ago'],
  ['AR', 'Anil Reddy', 'Thanks for the service!', '5h ago'],
]

const weeklyEarnings = [850, 1000, 950, 1250, 1100, 1600, 1700]

function ServiceDashboard({ onLogout, onSwitchRole }) {
  const [activeCategory, setActiveCategory] = useState('')

  return (
    <>
      <Navbar
        role="Service Provider"
        onLogout={onLogout}
        onSwitchRole={onSwitchRole}
      />
      <div className="flex flex-col lg:flex-row">
        <Sidebar role="Service Provider" />
      <main className="service-dashboard min-w-0 flex-1" id="overview">
        <div className="service-dashboard__layout">
          <div className="service-dashboard__primary">
            <section className="provider-welcome">
              <p>Welcome back,</p>
              <h1>Suresh Kumar! <span aria-hidden="true">♧</span></h1>
              <p className="provider-welcome__description">
                Manage your services, bookings, and customer requests all in one place.
              </p>
            </section>

            <section className="provider-stats" aria-label="Service provider overview">
              {stats.map((stat) => (
                <a className="provider-stat" href={stat.href} key={stat.label}>
                  <span className={`provider-stat__icon provider-stat__icon--${stat.tone}`}>
                    {stat.icon}
                  </span>
                  <span className="provider-stat__content">
                    <span className="provider-stat__label">{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </span>
                  <span className="provider-stat__link">View details ↗</span>
                </a>
              ))}
            </section>

            <div className="provider-content-grid">
              <section className="provider-card provider-categories" id="categories">
                <div className="provider-card__heading">
                  <h2>My Service Categories</h2>
                  <a href="#categories">View all ↗</a>
                </div>
                <div className="provider-category-grid">
                  {categories.map(([label, icon, tone]) => (
                    <button
                      className={`provider-category ${activeCategory === label ? 'provider-category--active' : ''}`}
                      key={label}
                      type="button"
                      aria-pressed={activeCategory === label}
                      onClick={() => setActiveCategory(activeCategory === label ? '' : label)}
                    >
                      <span className={`provider-category__icon provider-category__icon--${tone}`}>{icon}</span>
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="provider-card provider-earnings" id="earnings-overview">
                <div className="provider-card__heading">
                  <h2>Earnings Overview</h2>
                  <select aria-label="Earnings period" defaultValue="This week">
                    <option>This week</option>
                    <option>This month</option>
                  </select>
                </div>
                <div className="provider-earnings__summary">
                  <span><small>This week</small><strong>₹ 8,450</strong></span>
                  <span className="provider-earnings__change">↑ 12%</span>
                </div>
                <div className="provider-chart" role="img" aria-label="Weekly earnings chart, Monday to Sunday">
                  <div className="provider-chart__axis" aria-hidden="true">
                    <span>₹2k</span><span>₹1.5k</span><span>₹1k</span><span>₹500</span><span>₹0</span>
                  </div>
                  <div className="provider-chart__plot">
                    {weeklyEarnings.map((amount, index) => (
                      <span key={index} style={{ height: `${(amount / 2000) * 100}%` }} />
                    ))}
                  </div>
                </div>
                <div className="provider-chart__labels">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
                  <span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </section>

              <section className="provider-card provider-booking-breakdown" aria-labelledby="booking-breakdown-title">
                <div className="provider-card__heading">
                  <h2 id="booking-breakdown-title">Booking Overview</h2>
                  <a href="#schedule">View bookings ↗</a>
                </div>
                <div className="provider-booking-breakdown__content">
                  <div
                    className="provider-donut"
                    role="img"
                    aria-label="20 bookings: 12 completed, 5 upcoming, 3 pending"
                  >
                    <span><strong>20</strong><small>Bookings</small></span>
                  </div>
                  <div className="provider-booking-legend">
                    <span><i className="provider-booking-legend__completed" />Completed<strong>12</strong></span>
                    <span><i className="provider-booking-legend__upcoming" />Upcoming<strong>5</strong></span>
                    <span><i className="provider-booking-legend__pending" />Pending<strong>3</strong></span>
                  </div>
                </div>
              </section>

              <section className="provider-card provider-list" id="schedule">
                <div className="provider-card__heading">
                  <h2>Today's Schedule</h2>
                  <a href="#schedule">View all ↗</a>
                </div>
                {bookings.map(([title, place, time, status]) => (
                  <article className="provider-list__item" key={title}>
                    <span className="provider-list__icon provider-list__icon--green">▦</span>
                    <span className="provider-list__details">
                      <strong>{title}</strong><small>{place}</small><small>{time}</small>
                    </span>
                    <span className="provider-status provider-status--confirmed">{status}</span>
                  </article>
                ))}
              </section>

              <section className="provider-card provider-list" id="service-requests">
                <div className="provider-card__heading">
                  <h2>Recent Service Requests</h2>
                  <a href="#service-requests">View all ↗</a>
                </div>
                {requests.map(([title, place, time, status]) => (
                  <article className="provider-list__item" key={title}>
                    <span className="provider-list__icon provider-list__icon--orange">▤</span>
                    <span className="provider-list__details">
                      <strong>{title}</strong><small>{place}</small><small>{time}</small>
                    </span>
                    <span className={`provider-status ${status === 'Pending' ? 'provider-status--pending' : 'provider-status--confirmed'}`}>{status}</span>
                  </article>
                ))}
              </section>

              <section className="provider-card provider-equipment" id="equipment-tools">
                <div className="provider-card__heading">
                  <h2>My Equipment & Tools</h2>
                  <a href="#equipment-tools">Manage ↗</a>
                </div>
                <div className="provider-equipment__grid">
                  {[
                    ['🚜', 'Tractor', '2 units · Available'],
                    ['🛠️', 'Rotavator', '1 unit · In use'],
                    ['🧴', 'Sprayer', '3 units · Available'],
                    ['🪓', 'Power tiller', '1 unit · Available'],
                  ].map(([icon, title, detail]) => (
                    <article key={title}>
                      <span>{icon}</span><strong>{title}</strong><small>{detail}</small>
                    </article>
                  ))}
                </div>
              </section>

              <section className="provider-card provider-reviews" id="reviews-ratings">
                <div className="provider-card__heading"><h2>Reviews & Ratings</h2></div>
                <div className="provider-reviews__content">
                  <div className="provider-reviews__score">
                    <strong>4.8</strong><span>★★★★★</span><small>24 reviews</small>
                  </div>
                  <div className="provider-reviews__bars">
                    {[18, 4, 1, 1, 0].map((count, index) => (
                      <div key={index}><span>{5 - index}★</span><i><b style={{ width: `${count * 5}%` }} /></i><small>{count}</small></div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className="provider-sidebar">
            <section className="provider-card provider-quote">
              <p>“Quality service helps every farm thrive. Thank you for supporting local farmers.”</p>
              <span aria-hidden="true">♧</span>
            </section>
            <section className="provider-card provider-profile">
              <span className="provider-profile__avatar">SK</span>
              <h2>Suresh Kumar</h2>
              <p>Agricultural Service Provider</p>
              <p className="provider-profile__location">⌖ Hyderabad, Telangana</p>
              <span className="provider-profile__verified">✓ Verified Provider</span>
              <div className="provider-profile__facts">
                <span><small>Services</small><strong>6 listed</strong></span>
                <span><small>Experience</small><strong>5 years</strong></span>
              </div>
            </section>
            <section className="provider-card provider-actions">
              <div className="provider-card__heading"><h2>Quick Actions</h2></div>
              {[
                ['＋', 'Add New Service', '#categories'],
                ['▦', 'Update Availability', '#schedule'],
                ['▤', 'View Bookings', '#schedule'],
                ['⚒', 'Manage Equipment', '#equipment-tools'],
              ].map(([icon, label, href]) => (
                <a href={href} key={label}><span>{icon}</span>{label}<b>↗</b></a>
              ))}
            </section>
            <section className="provider-card provider-messages" id="messages">
              <div className="provider-card__heading">
                <h2>Recent Messages</h2><a href="#messages">View all</a>
              </div>
              {messages.map(([initials, name, message, time]) => (
                <article className="provider-message" key={name}>
                  <span>{initials}</span>
                  <div><strong>{name}</strong><small>{message}</small></div>
                  <time>{time}</time>
                </article>
              ))}
            </section>
            <section className="provider-card provider-notifications" id="notifications">
              <div className="provider-card__heading"><h2>Notifications</h2></div>
              <article><strong>New booking request received</strong><small>Soil testing · Raman Reddy Farm · 2h ago</small></article>
              <article><strong>Payment received</strong><small>₹ 2,500 from Lakshmi Devi · 4h ago</small></article>
              <article><strong>New review received</strong><small>5 stars from Anil Reddy · 1d ago</small></article>
            </section>
          </aside>
        </div>
        <footer className="provider-footer">
          <strong>Raithanna</strong>
          <span>Supporting Farmers · Connecting Services · Building Sustainable Agriculture</span>
          <span>Healthy Farms → Prosperous Future</span>
        </footer>
      </main>
        </div>
    </>
  )
}

export default ServiceDashboard
