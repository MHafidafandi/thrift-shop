import toast from 'react-hot-toast';

const { create } = require('zustand');
import { createJSONStorage, persist } from 'zustand/middleware';

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);
        if (existingItems) {
          return toast('product sudah ada');
        }

        set({ items: [...get().items, data] });
        toast.success('product berhasil ditambahkan ke keranjang');
        console.log('tast');
      },
      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success('item berhasil dihapus');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
