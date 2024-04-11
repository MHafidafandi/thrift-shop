import Currency from '@/components/ui/Currency';
import useCart from '@/hooks/use-cart';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function CartItem({ data }) {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id);
  };
  return (
    <li className="flex flex-col justify-center bg-white px-5 py-4 rounded-lg relative">
      <div className="flex items-center gap-2">
        <input type="checkbox" id={data.id} className="w-5 h-5" />
        <label for={data.id}>{data.name}</label>
      </div>
      <div className="absolute z-10 right-16 top-5 cursor-pointer ">
        <Trash2 onClick={onRemove} />
      </div>
      <div className="flex py-5 px-10 justify-between">
        <div className="relative h-24 w-24 rounded-md overflow-hidden">
          <Image fill src={data.images[0].url} alt="" className="object-cover object-center" />
        </div>

        <div className="flex items-end">
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
