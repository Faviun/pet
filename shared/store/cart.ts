import { create } from 'zustand';

export type ICartItem = {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    pizzaSize?: number | null;
    type?: number | null;
    ingredients: Array<{ name: string; price: number}>
}

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: ICartItem[];
    fetchCartItems: () => Promise<void>;
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;
    addCartItem: (values: any) => Promise<void>;
    removeCartItem: (id: number) => Promise<void>;
  }
  
  export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
          set({ loading: true, error: false });
          const data = await Api.cart.getCart();
          set(getCartDetails(data));
        } catch (error) {
          console.error(error);
          set({ error: true });
        } finally {
          set({ loading: false });
        }
      },

      removeCartItem: async (id: number) => {},
      updateItemQuantity: async (id: number, quantiry: number) => {},
      addCartItem: async (number: any) => {},
  }))