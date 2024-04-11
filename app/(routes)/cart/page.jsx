'use client';

import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';
import { useEffect, useState } from 'react';
import CartItem from './components/CartItem';
import TotalBelanja from './components/TotalBelanja';

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const carts = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="py-5">
      <Container>
        <div className="w-full h-full px-10">
          <h1 className="text-2xl mb-4">Keranjang</h1>
          <div className="w-full flex gap-5">
            <div className="flex flex-col w-[70%]">
              <div className="bg-white py-3 px-5 items-center flex gap-2 rounded-lg mb-5">
                <input type="checkbox" id="pilihsemua" className="w-5 h-5" />
                <label for="pilihsemua">Pilih Semua</label>
              </div>
              <div>
                {carts.items.length === 0 && (
                  <p className="text-neutral-500">No items added to cart.</p>
                )}
                <ul className="flex flex-col gap-5">
                  {carts.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              </div>
            </div>
            <TotalBelanja />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
