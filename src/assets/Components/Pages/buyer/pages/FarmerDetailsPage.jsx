import { useParams, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Star,
  CheckCircle2,
  MessageSquare,
  ArrowLeft,
  Heart,
  ShoppingBag
} from 'lucide-react';
import { mockFarmers, mockProducts } from '../data/dashboardData.js';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../context/ToastContext';

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

export const FarmerDetailsPage = () => {
  const { farmerId } = useParams();
  const navigate = useNavigate();
  const { isFarmerFavorite, toggleFarmerFavorite } = useFavorites();
  const showToast = useToast();

  const farmer = mockFarmers.find((f) => f.id === farmerId) || mockFarmers[0];
  const farmerProducts = mockProducts.filter((p) => p.farmerId === farmer.id);

  const isFav = isFarmerFavorite(farmer.id);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#198754] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Farmers
      </button>

      {/* Hero Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <img
              src={farmer.avatar}
              alt={farmer.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-emerald-500/20 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                  {farmer.name}
                </h1>
                {farmer.isVerified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#198754]" /> Verified Farmer
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4 text-gray-400" /> {farmer.location}
              </p>
              <div className="flex items-center gap-3 text-xs mt-2 text-gray-600">
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {farmer.rating}{' '}
                  <span className="text-gray-400 font-normal">({farmer.reviewCount} reviews)</span>
                </span>
                <span>•</span>
                <span>{farmer.experience} in farming</span>
                <span>•</span>
                <span>{farmer.acres} Acres</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => {
                toggleFarmerFavorite(farmer.id);
                showToast(isFav ? `Removed ${farmer.name} from saved` : `Saved ${farmer.name}!`);
              }}
              className={`p-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-semibold transition-all ${
                isFav
                  ? 'border-pink-200 bg-pink-50 text-pink-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-pink-300'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-pink-600' : ''}`} />
              <span>{isFav ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={() => navigate('/buyer/messages')}
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl bg-[#198754] hover:bg-[#14532D] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Farmer</span>
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
            About the Farm & Practices
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
            {farmer.bio}
          </p>
        </div>
      </div>

      {/* Produce listed by this farmer */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">
            Fresh Produce by {farmer.name} ({farmerProducts.length})
          </h3>
        </div>

        {farmerProducts.length === 0 ? (
          <p className="text-xs text-gray-500 py-6 text-center bg-white rounded-2xl border">
            Currently preparing next seasonal harvest.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {farmerProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerDetailsPage;
