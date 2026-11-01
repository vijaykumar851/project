/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    const saved = localStorage.getItem('raithanna_favorite_products') || localStorage.getItem('rythu_favorite_products');
    return saved ? JSON.parse(saved) : ['prod-1', 'prod-2'];
  });

  const [favoriteFarmers, setFavoriteFarmers] = useState(() => {
    const saved = localStorage.getItem('raithanna_favorite_farmers') || localStorage.getItem('rythu_favorite_farmers');
    return saved ? JSON.parse(saved) : ['farmer-1', 'farmer-2', 'farmer-3'];
  });

  useEffect(() => {
    localStorage.setItem('raithanna_favorite_products', JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  useEffect(() => {
    localStorage.setItem('raithanna_favorite_farmers', JSON.stringify(favoriteFarmers));
  }, [favoriteFarmers]);

  const toggleProductFavorite = (productId) => {
    setFavoriteProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const toggleFarmerFavorite = (farmerId) => {
    setFavoriteFarmers((prev) =>
      prev.includes(farmerId) ? prev.filter((id) => id !== farmerId) : [...prev, farmerId]
    );
  };

  const isProductFavorite = (productId) => favoriteProducts.includes(productId);
  const isFarmerFavorite = (farmerId) => favoriteFarmers.includes(farmerId);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteProducts,
        favoriteFarmers,
        toggleProductFavorite,
        toggleFarmerFavorite,
        isProductFavorite,
        isFarmerFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
