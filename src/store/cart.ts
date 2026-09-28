import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from '../lib/whatsapp';
import { Product, ProductSize, ProductVariant } from '../data/products';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, size: ProductSize, quantity: number, variant?: ProductVariant) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, size, quantity, variant) => {
        set((state) => {
          // Check if item already exists in cart with same product, size, and variant
          const existingItemIndex = state.items.findIndex(
            (item) => 
              item.product.id === product.id && 
              item.size.label === size.label && 
              item.variant?.name === variant?.name
          );
          
          if (existingItemIndex !== -1) {
            // Update quantity of existing item
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += quantity;
            return { items: newItems };
          }
          
          // Add new item
          const id = `${product.id}-${size.label}${variant ? '-' + variant.name : ''}-${Date.now()}`;
          return {
            items: [...state.items, { id, product, size, variant, quantity }]
          };
        });
      },
      
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id)
        }));
      },
      
      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((item) => 
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
          )
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'hecto-cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
