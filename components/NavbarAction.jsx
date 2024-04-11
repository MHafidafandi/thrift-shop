'use client';
import useCart from '@/hooks/use-cart';
import { Facebook, Instagram, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const router = useRouter();
  const carts = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      <div className="cursor-pointer">
        <Facebook />
      </div>
      <div className="cursor-pointer">
        <Instagram />
      </div>
      <div
        onClick={() => router.push('/cart')}
        className=" flex bg-black text-white py-2 gap-2 px-2 items-center cursor-pointer"
      >
        <ShoppingCart />
        <p>Keranjang</p>
        <span className="ml-2 text-sm font-medium text-black bg-white rounded-full px-1">
          {carts.items.length}
        </span>
      </div>
    </div>
  );
};

export default NavbarAction;
