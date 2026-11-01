import { useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart2,
  CheckCircle2,
  Clock,
  Home,
  IndianRupee,
  Leaf,
  MapPin,
  Minus,
  PackageCheck,
  Phone,
  Plus,
  Search,
  ShoppingBag,
  Sprout,
  Star,
  Tag,
  Truck,
  Users,
  Heart,
} from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { CartProvider, useCart } from './context/CartContext.jsx';
import { FavoritesProvider, useFavorites } from './context/FavoritesContext.jsx';
import { ToastProvider, useToast } from './context/ToastContext.jsx';
import {
  mockCategories,
  mockFarmers,
  mockOrders,
  mockProducts,
  mockPriceTrends7Days,
  mockPriceTrends30Days,
  mockPriceTrends3Months,
} from './data/dashboardData.js';
import Navbar from '../Navbar.jsx';
import Sidebar from '../Sidebar.jsx';
import AddressesPage from './pages/AddressesPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CategoryListingPage from './pages/CategoryListingPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import FarmerDetailsPage from './pages/FarmerDetailsPage.jsx';
import FarmerListingPage from './pages/FarmerListingPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import MessagesPage from './pages/MessagesPage.jsx';
import NotificationsPage from './pages/NotificationsPage.jsx';
import OrderDetailsPage from './pages/OrderDetailsPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import PriceTrendsPage from './pages/PriceTrendsPage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import ProductListingPage from './pages/ProductListingPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import SupportPage from './pages/SupportPage.jsx';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isProductFavorite, toggleProductFavorite } = useFavorites();
  const showToast = useToast();
  const isFav = isProductFavorite(product.id);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    toggleProductFavorite(product.id);
    showToast(isFav ? `Removed ${product.name} from favorites` : `Saved ${product.name} to favorites!`);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(product, 1);
    showToast(`Added 1 ${product.unit} of ${product.name} to Cart!`);
  };

  return (
    <div onClick={() => navigate(`/buyer/products/${product.id}`)} className="group cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <button onClick={handleFavoriteClick} className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs shadow-xs flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10" aria-label="Save to favorites">
          <Heart className={`w-4 h-4 transition-colors ${isFav ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'}`} />
        </button>
        {product.isOrganic && <span className="absolute bottom-2 left-2 text-[10px] bg-emerald-600/90 text-white font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs">Organic</span>}
      </div>
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-[#198754] transition-colors">{product.name}</h4>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-sm sm:text-base font-extrabold text-[#198754]">₹{product.price}</span>
            <span className="text-xs text-gray-500">/ {product.unit}</span>
            {product.originalPrice && product.originalPrice > product.price && <span className="text-[11px] text-gray-400 line-through ml-1">₹{product.originalPrice}</span>}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-1 line-clamp-1"><MapPin className="w-3 h-3 text-gray-400 shrink-0" /><span className="truncate">{product.farmLocation}</span></div>
          <div className="flex items-center gap-1 text-[11px] text-amber-500 font-semibold mt-1"><Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" /><span>{product.rating}</span><span className="text-gray-400 font-normal">({product.reviewCount})</span></div>
        </div>
        <button onClick={handleAddToCart} className="mt-3 w-full py-1.5 sm:py-2 px-3 rounded-xl bg-[#198754] hover:bg-[#14532D] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs active:scale-95"><ShoppingBag className="w-3.5 h-3.5" /><span>Add to Cart</span></button>
      </div>
    </div>
  );
};

const WelcomeBanner = () => {
  return (
    <section
      className="relative flex min-h-40 items-center overflow-hidden rounded-2xl border border-[#cde0cd] bg-cover bg-center px-5 py-5 shadow-sm sm:px-8"
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.82) 42%, rgba(255,255,255,0.08) 100%), url('/cover-banner.jpg')",
      }}
    >
      <div className="relative z-10 max-w-lg">
        <p className="text-xs font-semibold text-[#64748b] sm:text-sm">Welcome back,</p>
        <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#0f172a] sm:text-3xl">
          Arjun Sharma! <span className="text-[#16a34a]">🛒🌱</span>
        </h2>
        <p className="mt-2 max-w-md text-xs font-medium leading-relaxed text-[#334155] sm:text-sm">
          Get fresh, quality produce directly from verified farmers and support sustainable farming.
        </p>
      </div>
    </section>
  );
};

const SummaryCards = () => {
  const { favoriteFarmers } = useFavorites();
  const cards = [
    { title: 'Total Orders', value: '5', icon: ShoppingBag, label: 'View Orders', path: '/buyer/orders', color: 'text-[#1b7f45] bg-[#e8f5e9]' },
    { title: 'Saved Farmers', value: favoriteFarmers?.length || 3, icon: Users, label: 'View Favorites', path: '/buyer/favorites', color: 'text-[#7e22ce] bg-[#f3e8ff]' },
    { title: 'Total Spent', value: '₹ 12,450', icon: IndianRupee, label: 'This month', path: '/buyer/price-trends', color: 'text-[#1d4ed8] bg-[#eff6ff]' },
    { title: 'Active Deliveries', value: '1', icon: Truck, label: 'Track Order', path: '/buyer/orders', color: 'text-[#c2410c] bg-[#fff7ed]' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
      {cards.map(({ title, value, icon: Icon, label, path, color }) => (
        <div key={title} className="flex flex-col justify-between rounded-2xl border border-[#e2e8e2] bg-white p-4 shadow-xs transition-all hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-medium text-[#64748b]">{title}</p>
              <h3 className="mt-0.5 text-xl font-bold text-[#0f172a] sm:text-2xl">{value}</h3>
            </div>
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${color}`}>
              <Icon className="h-4 w-4" />
            </span>
          </div>
          <Link to={path} className={`mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold hover:underline ${color.split(' ')[0]}`}>
            {label}<ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      ))}
    </div>
  );
};

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="rounded-2xl border border-[#e2e8e2] bg-white p-4 shadow-xs sm:p-5">
      <div className="mb-3.5 flex items-center justify-between">
        <h3 className="text-sm font-bold tracking-tight text-[#0f172a]">Shop by Category</h3>
        <Link to="/buyer/categories" className="inline-flex items-center gap-1 text-xs font-semibold text-[#1b7f45] hover:underline">
          View All<ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5 md:grid-cols-9">
        {mockCategories.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => navigate(`/buyer/products?category=${category.slug}`)}
            className="group flex cursor-pointer flex-col items-center rounded-xl border border-[#e2e8e2] bg-[#f8faf8] p-2 text-center shadow-2xs transition-all hover:border-[#1b7f45] hover:shadow-xs"
          >
            <span className="mb-1.5 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#f1f5f9] bg-white p-1 sm:h-14 sm:w-14">
              <img src={category.image} alt={category.name} className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-110" />
            </span>
            <span className="line-clamp-2 text-[11px] font-semibold leading-tight text-[#334155] group-hover:text-[#1b7f45]">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

const FeaturedProducts = () => (
  <section className="rounded-2xl border border-[#e2e8e2] bg-white p-4 shadow-xs sm:p-5">
    <div className="mb-3.5 flex items-center justify-between">
      <h3 className="text-sm font-bold tracking-tight text-[#0f172a]">Featured Products</h3>
      <Link to="/buyer/products" className="inline-flex items-center gap-1 text-xs font-semibold text-[#1b7f45] hover:underline">
        View All<ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {mockProducts.filter((product) => product.isFeatured).slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

const PopularFarmers = () => {
  const navigate = useNavigate();

  return (
    <section className="rounded-2xl border border-[#e2e8e2] bg-white p-4 shadow-xs">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold tracking-tight text-[#0f172a]">Popular Farmers</h3>
        <Link to="/buyer/farmers" className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#1b7f45] hover:underline">
          View All<ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {mockFarmers.slice(0, 4).map((farmer) => (
          <button
            type="button"
            key={farmer.id}
            onClick={() => navigate(`/buyer/farmers/${farmer.id}`)}
            className="group flex min-w-0 cursor-pointer flex-col items-center rounded-xl border border-[#e2e8e2] bg-[#f8faf8] p-3 text-center transition-all hover:border-[#1b7f45] hover:bg-white hover:shadow-xs"
          >
            <img src={farmer.avatar} alt={farmer.name} className="mb-2 h-12 w-12 rounded-full object-cover ring-2 ring-[#1b7f45]/20 transition-all group-hover:ring-[#1b7f45]" />
            <span className="w-full truncate text-xs font-bold text-[#0f172a] group-hover:text-[#1b7f45] sm:text-sm">{farmer.name}</span>
            <span className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-amber-500">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />{farmer.rating}
              <span className="font-normal text-gray-400">({farmer.reviewCount})</span>
            </span>
            <span className="mt-0.5 w-full truncate text-[11px] text-[#64748b]">{farmer.location.split(',')[0]}</span>
            <span className="mt-2.5 w-full rounded-lg bg-[#e8f5e9] px-2 py-1.5 text-xs font-bold text-[#1b7f45] transition-all group-hover:bg-[#1b7f45] group-hover:text-white">View Profile</span>
          </button>
        ))}
      </div>
    </section>
  );
};

const LatestDeals = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const showToast = useToast();
  const mangoDeal = mockProducts.find((product) => product.id === 'prod-6') || mockProducts[0];

  return (
    <section className="h-full rounded-2xl border border-[#e2e8e2] bg-white p-4 shadow-xs">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold tracking-tight text-[#0f172a]">Latest Deals</h3>
        <Link to="/buyer/products" className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#1b7f45] hover:underline">
          View All<ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigate(`/buyer/products/${mangoDeal.id}`)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') navigate(`/buyer/products/${mangoDeal.id}`);
        }}
        className="group flex cursor-pointer flex-col items-center gap-3.5 rounded-xl border border-[#e2e8e2] bg-gradient-to-br from-[#e8f5e9]/40 to-white p-3 transition-all hover:border-[#1b7f45] hover:shadow-xs sm:flex-row sm:p-3.5"
      >
        <img src={mangoDeal.image} alt="Fresh Mangoes" className="h-24 w-24 shrink-0 rounded-xl bg-amber-50 object-cover transition-transform group-hover:scale-105" />
        <div className="flex w-full min-w-0 flex-1 flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 rounded-full bg-[#e8f5e9] px-2 py-0.5 text-[10px] font-bold text-[#1b7f45]"><Tag className="h-3 w-3" />Seasonal Offer</span>
              <span className="flex items-center gap-1 text-[10px] font-medium text-[#64748b]"><Clock className="h-3 w-3 text-amber-500" />Ends soon</span>
            </div>
            <h4 className="mt-1.5 truncate text-sm font-bold text-[#0f172a] transition-colors group-hover:text-[#1b7f45]">Organic Banganapalli Mangoes</h4>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-sm font-extrabold text-[#1b7f45]">₹120/kg</span>
              <span className="text-xs text-gray-400 line-through">₹150/kg</span>
              <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-bold text-red-500">20% OFF</span>
            </div>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              addToCart(mangoDeal, 1);
              showToast('Added Fresh Mangoes deal to your cart!');
            }}
            className="mt-3 w-full cursor-pointer rounded-xl bg-[#1b7f45] px-3 py-2 text-xs font-bold text-white shadow-2xs transition-all hover:bg-[#14532D]"
          >
            Add Deal Item
          </button>
        </div>
      </div>
    </section>
  );
};

const QuickActions = () => {
  const navigate = useNavigate();
  const actions = [
    { title: 'Search Produce', icon: Search, path: '/buyer/products', color: 'text-[#1b7f45] bg-[#e8f5e9]/50 hover:bg-[#e8f5e9] border-[#c8e6c9]' },
    { title: 'Track Order', icon: Truck, path: '/buyer/orders', color: 'text-[#1d4ed8] bg-[#eff6ff]/60 hover:bg-[#eff6ff] border-[#bfdbfe]' },
    { title: 'Contact Farmer', icon: Phone, path: '/buyer/messages', color: 'text-[#7e22ce] bg-[#f3e8ff]/60 hover:bg-[#f3e8ff] border-[#e9d5ff]' },
    { title: 'View Reports', icon: BarChart2, path: '/buyer/price-trends', color: 'text-[#c2410c] bg-[#fff7ed]/70 hover:bg-[#fff7ed] border-[#fed7aa]' },
  ];

  return (
    <section className="h-full rounded-2xl border border-[#e2e8e2] bg-white p-4 shadow-xs">
      <h3 className="mb-3 text-sm font-bold tracking-tight text-[#0f172a]">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-2.5">
        {actions.map(({ title, icon: Icon, path, color }) => (
          <button key={title} type="button" onClick={() => navigate(path)} className={`flex min-w-0 cursor-pointer flex-col items-center justify-center rounded-xl border p-3 text-center shadow-2xs transition-all hover:scale-[1.02] ${color}`}>
            <Icon className="mb-1.5 h-4 w-4" />
            <span className="w-full truncate text-[11px] font-bold leading-tight text-[#0f172a]">{title}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

const BottomBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative mt-7 overflow-hidden rounded-2xl bg-gradient-to-r from-[#14532D] via-[#166534] to-[#15803d] p-4 text-white shadow-sm sm:p-5">
      <div className="pointer-events-none absolute -bottom-10 right-32 opacity-10"><Leaf className="h-56 w-56 text-white" /></div>
      <div className="relative z-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-xs"><Leaf className="h-5 w-5 text-emerald-300" /></span>
          <div>
            <h4 className="text-sm font-bold tracking-tight text-white sm:text-base">Good Food. Healthy Life.</h4>
            <p className="mt-0.5 text-xs text-emerald-100">Fresh produce • Direct from farmers • Support local</p>
          </div>
        </div>
        <button type="button" onClick={() => navigate('/buyer/products')} className="flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-white px-4 py-2 text-xs font-bold text-[#14532D] shadow-sm transition-all hover:bg-emerald-50 active:scale-95">
          Start Shopping<ArrowRight className="h-3.5 w-3.5 text-[#14532D]" />
        </button>
      </div>
    </section>
  );
};

const WhyBuyCard = () => (
  <section className="relative overflow-hidden rounded-2xl border border-[#e2e8e2] bg-gradient-to-br from-[#e8f5ec]/70 to-white p-4 shadow-xs">
    <div className="pointer-events-none absolute bottom-0 right-0 translate-x-3 translate-y-3 text-emerald-800 opacity-15"><Sprout className="h-28 w-28" /></div>
    <div className="relative z-10">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#e8f5e9]"><CheckCircle2 className="h-4 w-4 text-[#1b7f45]" /></span>
        <h4 className="text-xs font-bold tracking-tight text-[#0f172a]">Why Buy from Raithanna?</h4>
      </div>
      <ul className="space-y-2">
        {['Direct from verified farmers', 'Fresh and chemical-free produce', 'Transparent pricing', 'Support sustainable farming'].map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-[11px] font-medium text-[#475569]"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1b7f45]" />{benefit}</li>
        ))}
      </ul>
    </div>
  </section>
);

const CartSummary = () => {
  const navigate = useNavigate();
  const { cartItems, totalItemsCount, subtotal, updateQuantity } = useCart();

  return (
    <section className="flex flex-col justify-between rounded-2xl border border-[#e2e8e2] bg-white p-4 shadow-xs">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-bold tracking-tight text-[#0f172a]">My Cart</h4>
          <Link to="/buyer/cart" className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#1b7f45] hover:underline">View Cart<ArrowUpRight className="h-3 w-3" /></Link>
        </div>
        {cartItems.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#e2e8e2] bg-[#f8faf8] px-3 py-6 text-center">
            <ShoppingBag className="mx-auto mb-1.5 h-8 w-8 text-gray-300" />
            <p className="text-xs font-semibold text-[#64748b]">Your cart is empty</p>
            <p className="mt-0.5 text-[10px] text-[#94a3b8]">Add fresh produce to get started</p>
            <button type="button" onClick={() => navigate('/buyer/products')} className="mt-3 cursor-pointer rounded-lg bg-[#1b7f45] px-3 py-1 text-[10px] font-bold text-white">Start Shopping</button>
          </div>
        ) : (
          <div className="space-y-2.5">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-2 rounded-xl border border-[#e2e8e2] bg-[#f8faf8] p-2 transition-all hover:bg-white hover:shadow-2xs">
                <div className="flex min-w-0 items-center gap-2">
                  <img src={item.image} alt={item.name} className="h-10 w-10 shrink-0 rounded-lg border border-[#e2e8e2] bg-white object-cover" />
                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-xs font-bold text-[#0f172a]">{item.name} {item.quantity > 1 ? `(${item.quantity} ${item.unit})` : ''}</p>
                    <p className="text-[10px] font-medium text-[#64748b]">₹{item.price}/{item.unit}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-2.5">
                  <div className="flex items-center overflow-hidden rounded-lg border border-[#e2e8e2] bg-white shadow-2xs">
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label="Decrease quantity" className="cursor-pointer p-1 text-gray-500 transition hover:bg-[#e8f5e9] hover:text-[#1b7f45]"><Minus className="h-3 w-3" /></button>
                    <span className="min-w-[20px] px-1.5 text-center text-xs font-bold text-[#0f172a]">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Increase quantity" className="cursor-pointer p-1 text-gray-500 transition hover:bg-[#e8f5e9] hover:text-[#1b7f45]"><Plus className="h-3 w-3" /></button>
                  </div>
                  <span className="min-w-[38px] text-right text-xs font-bold text-[#0f172a]">₹{item.price * item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-4 border-t border-[#f1f5f9] pt-3">
          <div className="mb-2.5 flex items-center justify-between text-xs">
            <span className="text-[#64748b]">Total ({totalItemsCount} items)</span>
            <span className="text-sm font-bold text-[#0f172a]">₹{subtotal}</span>
          </div>
          <button type="button" onClick={() => navigate('/buyer/checkout')} className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#1b7f45] px-3 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-[#14532D]">
            Proceed to Checkout<ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </section>
  );
};

const OrderTracking = () => {
  const activeOrder = mockOrders[0];
  const steps = [
    { label: 'Order Placed', time: 'Apr 25, 10:30 AM', icon: CheckCircle2, status: 'done' },
    { label: 'Processing', time: 'Apr 25, 12:45 PM', icon: PackageCheck, status: 'done' },
    { label: 'Out for Delivery', time: 'Apr 25, 3:20 PM', icon: Truck, status: 'current' },
    { label: 'Delivered', time: 'ETA: Apr 25, 6:00 PM', icon: Home, status: 'pending' },
  ];

  return (
    <section className="rounded-2xl border border-[#e2e8e2] bg-white p-4 shadow-xs">
      <div className="mb-4 flex items-center justify-between">
        <div><h4 className="text-sm font-bold tracking-tight text-[#0f172a]">Order Tracking</h4><p className="text-[10px] font-medium text-[#64748b]">#{activeOrder.id}</p></div>
        <Link to={`/buyer/orders/${activeOrder.id}`} className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#1b7f45] hover:underline">View All<ArrowUpRight className="h-3 w-3" /></Link>
      </div>
      <div className="relative py-2">
        <div className="absolute left-6 right-6 top-6 z-0 h-0.5 bg-[#e2e8e2]"><div className="h-full w-[66%] bg-[#1b7f45]" /></div>
        <div className="relative z-10 grid grid-cols-4 gap-1 text-center">
          {steps.map(({ label, time, icon: Icon, status }) => (
            <div key={label} className="flex flex-col items-center">
              <span className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${status === 'done' ? 'bg-[#1b7f45] text-white shadow-2xs' : status === 'current' ? 'animate-pulse bg-[#1b7f45] text-white ring-4 ring-emerald-100' : 'border border-[#e2e8e2] bg-gray-100 text-gray-400'}`}><Icon className="h-3.5 w-3.5" /></span>
              <p className="mt-2 text-[10px] font-bold leading-tight text-[#0f172a]">{label}</p>
              <span className="mt-0.5 text-[8px] text-[#64748b]">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PriceTrendChart = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const chartData = timeRange === '7d' ? mockPriceTrends7Days : timeRange === '30d' ? mockPriceTrends30Days : mockPriceTrends3Months;
  const ranges = [['7d', '7 Days'], ['30d', '30 Days'], ['3m', '3 Months']];

  return (
    <section className="rounded-2xl border border-[#e2e8e2] bg-white p-4 shadow-xs">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-bold tracking-tight text-[#0f172a]">Market Price Trends</h4>
        <Link to="/buyer/price-trends" className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-[#1b7f45] hover:underline">View All<ArrowUpRight className="h-3 w-3" /></Link>
      </div>
      <div className="mb-3 flex items-center gap-1.5 rounded-xl border border-[#e2e8e2] bg-[#f8faf8] p-1">
        {ranges.map(([range, label]) => (
          <button key={range} type="button" onClick={() => setTimeRange(range)} className={`flex-1 cursor-pointer rounded-lg py-1 text-[10px] font-bold transition-all ${timeRange === range ? 'bg-[#1b7f45] text-white shadow-2xs' : 'text-[#475569] hover:text-[#0f172a]'}`}>{label}</button>
        ))}
      </div>
      <div className="h-44 w-full text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 9, fill: '#94a3b8' }} stroke="#e2e8f0" />
            <YAxis tick={{ fontSize: 9, fill: '#94a3b8' }} stroke="#e2e8f0" />
            <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '11px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }} />
            <Line type="monotone" dataKey="Tomato" name="Tomato" stroke="#ef4444" strokeWidth={2} dot={{ r: 2 }} />
            <Line type="monotone" dataKey="Onion" name="Onion" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 2 }} />
            <Line type="monotone" dataKey="Green Chilli" name="Green Chilli" stroke="#1b7f45" strokeWidth={2} dot={{ r: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex items-center justify-center gap-4 border-t border-[#f1f5f9] pt-2 text-[10px] text-[#64748b]">
        <span className="flex items-center gap-1.5"><i className="h-0.5 w-2.5 rounded-full bg-red-500" />Tomato (₹/kg)</span>
        <span className="flex items-center gap-1.5"><i className="h-0.5 w-2.5 rounded-full bg-purple-500" />Onion (₹/kg)</span>
        <span className="flex items-center gap-1.5"><i className="h-0.5 w-2.5 rounded-full bg-[#1b7f45]" />Chilli (₹/kg)</span>
      </div>
    </section>
  );
};

function BuyerDashboardContent() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 sm:gap-6">
      {/* Center Main Dashboard Stream (matching Landlord 9-col layout) */}
      <div className="xl:col-span-9 space-y-6 min-w-0">
        {/* Section 1: Welcome Banner */}
        <WelcomeBanner />

        {/* Section 2: Summary Cards (4 stats) */}
        <SummaryCards />

        {/* Section 3: Shop by Category */}
        <CategorySection />

        {/* Section 4: Featured Products */}
        <FeaturedProducts />

        {/* Section 5: Popular Farmers (Full width of stream for spacious, non-overlapping cards) */}
        <PopularFarmers />

        {/* Section 6 & 7: Latest Deals & Quick Actions in a clean, balanced 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="min-w-0">
            <LatestDeals />
          </div>
          <div className="min-w-0">
            <QuickActions />
          </div>
        </div>

        {/* Section 11: Bottom Promotional Banner */}
        <BottomBanner />
      </div>

      {/* Right Column (3 cols on XL matching Landlord layout) */}
      <div className="xl:col-span-3 space-y-5 min-w-0">
        {/* Why Buy Card */}
        <WhyBuyCard />

        {/* Section 8: My Cart Panel */}
        <CartSummary />

        {/* Section 9: Order Tracking Panel */}
        <OrderTracking />

        {/* Section 10: Market Price Trends */}
        <PriceTrendChart />
      </div>
    </div>
  );
};

export function BuyerDashboard({ onLogout, onSwitchRole }) {
  return (
    <BrowserRouter>
      <CartProvider>
        <FavoritesProvider>
          <ToastProvider>
            <div className="min-h-screen bg-[#f5f8f5] text-[#21372a]">
              <Navbar role="Buyer" onLogout={onLogout} onSwitchRole={onSwitchRole} />
              <div className="flex flex-col lg:flex-row">
                <Sidebar role="Buyer" />
                <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
                  <Routes>
                    <Route path="/buyer-dashboard" element={<BuyerDashboardContent />} />
                    <Route path="/buyer/categories" element={<CategoryListingPage />} />
                    <Route path="/buyer/products" element={<ProductListingPage />} />
                    <Route path="/buyer/products/:productId" element={<ProductDetailsPage />} />
                    <Route path="/buyer/cart" element={<CartPage />} />
                    <Route path="/buyer/checkout" element={<CheckoutPage />} />
                    <Route path="/buyer/orders" element={<OrdersPage />} />
                    <Route path="/buyer/orders/:orderId" element={<OrderDetailsPage />} />
                    <Route path="/buyer/favorites" element={<FavoritesPage />} />
                    <Route path="/buyer/farmers" element={<FarmerListingPage />} />
                    <Route path="/buyer/farmers/:farmerId" element={<FarmerDetailsPage />} />
                    <Route path="/buyer/price-trends" element={<PriceTrendsPage />} />
                    <Route path="/buyer/messages" element={<MessagesPage />} />
                    <Route path="/buyer/notifications" element={<NotificationsPage />} />
                    <Route path="/buyer/addresses" element={<AddressesPage />} />
                    <Route path="/buyer/reviews" element={<ReviewsPage />} />
                    <Route path="/buyer/support" element={<SupportPage />} />
                    <Route path="/buyer/settings" element={<SettingsPage />} />
                    <Route path="*" element={<Navigate to="/buyer-dashboard" replace />} />
                  </Routes>
                </main>
              </div>
            </div>
          </ToastProvider>
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default BuyerDashboard
