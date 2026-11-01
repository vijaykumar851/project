import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import Landing from '../components/landing/Landing';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

export const MainLandingPage = ({ initialAuthMode = null }) => {
  const [searchParams] = useSearchParams();
  const authQuery = searchParams.get('auth');

  // Track user overrides from navigation clicks; fallback to query/props
  const [userAuthView, setUserAuthView] = useState(null);

  const showAuthPage = userAuthView !== null
    ? userAuthView.show
    : Boolean(initialAuthMode || authQuery);

  const authMode = userAuthView?.mode || initialAuthMode || authQuery || 'login';

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fbfaf6]">
      <Navbar
        onAuthOpen={(mode = 'login') => {
          setUserAuthView({ show: true, mode });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onLogin={() => {
          setUserAuthView({ show: true, mode: 'login' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onRegister={() => {
          setUserAuthView({ show: true, mode: 'register' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onHome={() => {
          setUserAuthView({ show: false, mode: 'login' });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <main className="flex-1">
        {showAuthPage ? (
          authMode === 'login' ? (
            <Login onRegister={() => setUserAuthView({ show: true, mode: 'register' })} />
          ) : (
            <Register onLogin={() => setUserAuthView({ show: true, mode: 'login' })} />
          )
        ) : (
          <Landing />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MainLandingPage;
