import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function POST(req) {
  let body = await req.json();

  const orderId = body.order_id;
  const orderIdSplit = orderId.split('-', 5).join('-');
  const order = await prismadb.order.update({
    where: {
      id: orderIdSplit,
    },
    data: {
      isPaid: true,
      address: 'addressString',
      phone: '',
    },
    include: {
      orderItems: true,
    },
  });

  const productIds = order.orderItems.map((orderItem) => orderItem.productId);

  await prismadb.product.updateMany({
    where: {
      id: {
        in: [...productIds],
      },
    },
    data: {
      isArchived: true,
    },
  });

  return new NextResponse(null, { status: 200 });
}
