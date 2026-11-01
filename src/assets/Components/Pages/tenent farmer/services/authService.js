const SESSION_KEY = 'tenantFarmerSession';

export const authService = {
  isAuthenticated() {
    return window.sessionStorage.getItem('accountRole') === 'Tenant Farmer';
  },

  getCurrentSession() {
    const storedSession = window.sessionStorage.getItem(SESSION_KEY);
    return storedSession ? JSON.parse(storedSession) : null;
  },

  async login(credentials) {
    const sessionUser = { ...credentials, role: credentials.role || 'Tenant Farmer' };
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    window.sessionStorage.setItem('accountRole', sessionUser.role);
    return sessionUser;
  },

  logout() {
    window.sessionStorage.removeItem(SESSION_KEY);
    window.sessionStorage.removeItem('accountRole');
  },
};
