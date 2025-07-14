import { User } from '../types';

// Data dummy untuk demo
const DEMO_USERS = [
  {
    id: 1,
    email: 'user@gmail.com',
    password: 'password123',
    name: 'John Doe',
    role: 'user' as const,
    phone: '081234567890',
    address: 'Jl. Contoh No. 123, Jakarta'
  }
];

const DEMO_STORES = [
  {
    id: 1,
    email: 'store@gmail.com', 
    password: 'store123',
    name: 'Toko Sayur Pak Budi',
    role: 'store' as const,
    phone: '081234567891',
    address: 'Jl. Pasar No. 456, Jakarta'
  }
];

export const authenticateUser = (email: string, password: string): User | null => {
  // Cek user biasa
  const user = DEMO_USERS.find(u => u.email === email && u.password === password);
  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword as User;
  }
  
  // Cek store/toko
  const store = DEMO_STORES.find(s => s.email === email && s.password === password);
  if (store) {
    const { password: _, ...storeWithoutPassword } = store;
    return storeWithoutPassword as User;
  }
  
  return null;
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem('greenmart_user') !== null;
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem('greenmart_user');
  return user ? JSON.parse(user) : null;
};