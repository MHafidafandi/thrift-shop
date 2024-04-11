'use client';
import Image from 'next/image';
import Currency from './Currency';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import useCart from '@/hooks/use-cart';

const ProductCard = ({ data }) => {
  const router = useRouter();
  const carts = useCart();
  const handleClick = () => {
    router.push(`/products/${data?.id}`);
  };

  const addToCart = (event) => {
    event.stopPropagation();

    carts.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 justify-between"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
      </div>
      <div>
        <p className="font-semibold text-lg truncate">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
      <div onClick={addToCart} className="bg-black text-white flex gap-2 p-2">
        <ShoppingCart />
        <span>Masukkan keranjang</span>
      </div>
    </div>
  );
};

export default ProductCard;
