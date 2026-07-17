/**
 * Core application types
 */

// User roles
export type UserRole = 'admin' | 'customer';

// Product types
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number; // in cents (EUR)
  packageSize: string;
  weight: string;
  originRegion: string;
  harvestNotes: string;
  usageInstructions: string;
  categoryId: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductImage {
  id: string;
  productId: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Order types
export type OrderStatus = 'pending' | 'paid' | 'failed' | 'refunded' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  totalAmount: number; // in cents (EUR)
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  priceAtPurchase: number; // in cents (EUR)
  createdAt: Date;
}

// Cart types
export interface CartItem {
  productId: string;
  quantity: number;
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number; // in cents (EUR)
}

// Review types
export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number; // 1-5
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

// Wishlist types
export interface WishlistItem {
  productId: string;
  addedAt: Date;
}

export interface Wishlist {
  items: WishlistItem[];
  totalItems: number;
}

// Address types
export interface Address {
  id: string;
  userId: string;
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Coupon types
export interface Coupon {
  id: string;
  code: string;
  discount: number; // percentage or fixed amount
  type: 'percentage' | 'fixed';
  minOrderAmount?: number; // in cents (EUR)
  maxUses?: number;
  usedCount: number;
  expiresAt: Date;
  createdAt: Date;
}

// User types (extended)
export interface User {
  id: string;
  email: string;
  name?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
