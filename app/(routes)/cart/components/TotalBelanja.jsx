import Currency from '@/components/ui/Currency';
import useCart from '@/hooks/use-cart';
import axios from 'axios';
import React from 'react';

function TotalBelanja() {
  const items = useCart((state) => state.items);
  const carts = useCart();
  const hargaTotal = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
    });
    carts.removeAll();
    window.location = response.data.url;
  };
  return (
    <div className="w-[30%] h-72 bg-white p-5 rounded-lg flex flex-col justify-between">
      <h1 className="text-2xl font-bold">Total Belanja</h1>
      <div className="flex flex-col gap-5">
        <div className="text-black text-right">
          <Currency value={hargaTotal} />
        </div>
        <button onClick={onCheckout} className="bg-black text-white w-full h-10">
          Bayar
        </button>
      </div>
    </div>
  );
}

export default TotalBelanja;
