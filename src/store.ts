import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
  increaseQuantity: (id: Product["id"]) => void;
  decreaseQuantity: (id: Product["id"]) => void;
  deleteItem: (id: Product["id"]) => void;
  clearOrder: () => void;
}

const useStore = create<Store>((set, get) => ({
  order: [],

  addToOrder: (product) => {
    const { categoryId, image, ...data } = product;

    let order: OrderItem[] = [];

    if (get().order.find((item) => item.id === data.id)) {
      order = get().order.map((item) =>
        item.id === data.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      order = [
        ...get().order,
        {
          ...data,
          quantity: 1,
          subtotal: 1 * product.price,
        },
      ];
    }

    set(() => ({
      order,
    }));
  },

  increaseQuantity: (id) => {
    set((state) => ({
      order: state.order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1),
            }
          : item
      ),
    }));
  },

  decreaseQuantity: (id) => {
    set((state) => ({
      order: state.order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity - 1, 1),
              subtotal: item.price * Math.max(item.quantity - 1, 1),
            }
          : item
      ),
    }));
  },

  deleteItem: (id) => {
    set((state) => ({
      order: state.order.filter((item) => item.id !== id),
    }));
  },

  clearOrder: () => {
    set(() => ({
      order: [],
    }));
  },
}));

export default useStore;
