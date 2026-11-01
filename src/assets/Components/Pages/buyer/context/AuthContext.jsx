/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../services/apiServices';

const AuthContext = createContext(null);

const DEFAULT_USER = {
  id: 'user-1',
  name: 'Arjun Sharma',
  email: 'arjun.sharma@example.com',
  role: 'Buyer',
  phone: '+91 98765 43210',
  location: 'Hyderabad, Telangana'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('raithanna_user') || localStorage.getItem('rythu_user');
    return saved ? JSON.parse(saved) : DEFAULT_USER;
  });

  const [currentLocation, setCurrentLocation] = useState('Hyderabad, Telangana');

  useEffect(() => {
    if (user) {
      localStorage.setItem('raithanna_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('raithanna_user');
      localStorage.removeItem('rythu_user');
    }
  }, [user]);

  const login = async (credentials) => {
    const data = await authApi.login(credentials);
    setUser(data.user);
    localStorage.setItem('raithanna_auth_token', data.token);
    return data.user;
  };

  const register = async (userData) => {
    const data = await authApi.register(userData);
    setUser(data.user);
    localStorage.setItem('raithanna_auth_token', data.token);
    return data.user;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('raithanna_auth_token');
    localStorage.removeItem('rythu_auth_token');
    localStorage.removeItem('raithanna_user');
    localStorage.removeItem('rythu_user');
  };

  const updateProfile = (updated) => {
    setUser((prev) => ({ ...prev, ...updated }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateProfile,
        currentLocation,
        setCurrentLocation,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
