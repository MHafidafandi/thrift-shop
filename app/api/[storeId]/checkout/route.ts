import Stripe from 'stripe';
import { NextResponse } from 'next/server';

import { stripe } from '@/lib/stripe';
import prismadb from '@/lib/prismadb';
import axios from 'axios';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request, { params }: { params: { storeId: string } }) {
  const { productIds } = await req.json();

  if (!productIds || productIds.length === 0) {
    return new NextResponse('Product ids are required', { status: 400 });
  }

  const products = await prismadb.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  const item_details: any = [];

  products.forEach((product) => {
    item_details.push({
      id: product.id,
      name: product.name,
      quantity: 1,
      price: product.price.toNumber(),
    });
  });

  const totalprice = products.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const order = await prismadb.order.create({
    data: {
      storeId: params.storeId,
      isPaid: false,
      orderItems: {
        create: productIds.map((productId: string) => ({
          product: {
            connect: {
              id: productId,
            },
          },
        })),
      },
    },
  });

  const secret: any = process.env.NEXT_PUBLIC_SECRET;

  const encodeSecret = Buffer.from(secret).toString('base64');

  const data = {
    item_details,
    transaction_details: {
      order_id: order.id,
      gross_amount: totalprice,
    },
  };

  const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/v1/payment-links`, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${encodeSecret}`,
    },
  });

  return NextResponse.json({ url: response.data.payment_url }, { headers: corsHeaders });
}
