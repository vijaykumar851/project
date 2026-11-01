import { useState } from 'react';
import { Heart, Sprout, ArrowRight, Star, MapPin, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../context/ToastContext';
import { mockProducts, mockFarmers } from '../data/dashboardData.js';

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

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favoriteProducts, favoriteFarmers } = useFavorites();
  const [activeTab, setActiveTab] = useState('products');

  const savedProductsList = mockProducts.filter((p) => favoriteProducts.includes(p.id));
  const savedFarmersList = mockFarmers.filter((f) => favoriteFarmers.includes(f.id));

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            My Favorites
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Quick access to your preferred farmers and favorite fresh produce
          </p>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'products'
                ? 'bg-[#198754] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Saved Products ({savedProductsList.length})
          </button>
          <button
            onClick={() => setActiveTab('farmers')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'farmers'
                ? 'bg-[#198754] text-white shadow-xs'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Saved Farmers ({savedFarmersList.length})
          </button>
        </div>
      </div>

      {activeTab === 'products' ? (
        savedProductsList.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-6">
            <Heart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800">No favorite products saved yet</h3>
            <p className="text-xs text-gray-500 mt-1">
              Tap the heart icon on any produce card to save it here for fast ordering.
            </p>
            <button
              onClick={() => navigate('/buyer/products')}
              className="mt-4 px-4 py-2 rounded-xl bg-[#198754] text-white text-xs font-bold"
            >
              Browse Produce
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {savedProductsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )
      ) : savedFarmersList.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-6">
          <Sprout className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-800">No favorite farmers saved yet</h3>
          <p className="text-xs text-gray-500 mt-1">
            Follow farmers to support their harvest directly and receive harvest updates.
          </p>
          <button
            onClick={() => navigate('/buyer/farmers')}
            className="mt-4 px-4 py-2 rounded-xl bg-[#198754] text-white text-xs font-bold"
          >
            Find Farmers
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedFarmersList.map((farmer) => (
            <div
              key={farmer.id}
              onClick={() => navigate(`/buyer/farmers/${farmer.id}`)}
              className="cursor-pointer bg-white rounded-2xl border border-gray-100 p-4 shadow-xs hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={farmer.avatar}
                  alt={farmer.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/20"
                />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{farmer.name}</h4>
                  <p className="text-[11px] text-gray-500">{farmer.location}</p>
                  <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                    {farmer.acres} Acres Farm
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
