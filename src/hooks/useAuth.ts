import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('greenmart-token');
    const savedUser = localStorage.getItem('greenmart-user');
    
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulasi login - ganti dengan API call sesungguhnya
      const mockUser = {
        id: 1,
        name: 'John Doe',
        email: email,
        role: 'user' as const,
      };
      
      setUser(mockUser);
      Cookies.set('greenmart-token', 'mock-token', { expires: 7 });
      localStorage.setItem('greenmart-user', JSON.stringify(mockUser));
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // Simulasi register - ganti dengan API call sesungguhnya
      const mockUser = {
        id: Date.now(),
        name,
        email,
        role: 'user' as const,
      };
      
      setUser(mockUser);
      Cookies.set('greenmart-token', 'mock-token', { expires: 7 });
      localStorage.setItem('greenmart-user', JSON.stringify(mockUser));
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Registration failed' };
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('greenmart-token');
    localStorage.removeItem('greenmart-user');
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};