import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowUpDown, Heart, Star, MapPin, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useToast } from '../context/ToastContext';
import { mockProducts, mockCategories } from '../data/dashboardData.js';

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
    <div
      onClick={() => navigate(`/buyer/products/${product.id}`)}
      className="group cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-lg hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <button onClick={handleFavoriteClick} className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs shadow-xs flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10" aria-label="Save to favorites">
          <Heart className={`w-4 h-4 transition-colors ${isFav ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-500'}`} />
        </button>
        {product.isOrganic && (
          <span className="absolute bottom-2 left-2 text-[10px] bg-emerald-600/90 text-white font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs">
            Organic
          </span>
        )}
      </div>
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-[#198754] transition-colors">{product.name}</h4>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-sm sm:text-base font-extrabold text-[#198754]">₹{product.price}</span>
            <span className="text-xs text-gray-500">/ {product.unit}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[11px] text-gray-400 line-through ml-1">₹{product.originalPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-1 line-clamp-1">
            <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
            <span className="truncate">{product.farmLocation}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-amber-500 font-semibold mt-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
            <span>{product.rating}</span>
            <span className="text-gray-400 font-normal">({product.reviewCount})</span>
          </div>
        </div>
        <button onClick={handleAddToCart} className="mt-3 w-full py-1.5 sm:py-2 px-3 rounded-xl bg-[#198754] hover:bg-[#14532D] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs active:scale-95">
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export const ProductListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [sortBy, setSortBy] = useState('featured');
  const [onlyOrganic, setOnlyOrganic] = useState(false);

  const filteredProducts = useMemo(() => {
    return mockProducts
      .filter((p) => {
        if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
        if (onlyOrganic && !p.isOrganic) return false;
        if (searchTerm) {
          const q = searchTerm.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.farmLocation.toLowerCase().includes(q) ||
            p.farmerName.toLowerCase().includes(q)
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [selectedCategory, searchTerm, sortBy, onlyOrganic]);

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    setSearchParams(slug === 'all' ? {} : { category: slug });
  };

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Browse Fresh Produce
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Direct from verified farmers in Telangana and Andhra Pradesh
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search produce or farmer..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#198754] focus:outline-none"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-8 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-700 focus:outline-none focus:border-[#198754]"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ArrowUpDown className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => handleCategorySelect('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#198754] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-[#198754]'
            }`}
          >
            All Products ({mockProducts.length})
          </button>
          {mockCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => handleCategorySelect(c.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === c.slug
                  ? 'bg-[#198754] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-[#198754]'
              }`}
            >
              {c.name}
            </button>
          ))}
          <label className="flex items-center gap-1.5 ml-auto text-xs font-semibold text-emerald-800 cursor-pointer bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 shrink-0">
            <input
              type="checkbox"
              checked={onlyOrganic}
              onChange={(e) => setOnlyOrganic(e.target.checked)}
              className="accent-[#198754] rounded"
            />
            Organic Certified Only
          </label>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-6">
          <SlidersHorizontal className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-800">No products found</h3>
          <p className="text-xs text-gray-500 mt-1">Try clearing some filters or searching for another keyword.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchTerm('');
              setOnlyOrganic(false);
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-[#198754] text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;
