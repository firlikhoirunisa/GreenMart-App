export interface User {
  id: number;
  email: string;
  name: string;
  role: 'user' | 'store';
  phone?: string;
  address?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  discount?: number;
  description?: string;
  stock?: number;
  store?: Store;
}

export interface Store {
  id: number;
  name: string;
  location: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  role: 'user' | 'store' | null;
  login: (user: User) => void;
  logout: () => void;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}