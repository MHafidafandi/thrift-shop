import getProduct from '@/actions/get-product';
import Currency from '@/components/ui/Currency';
import Container from '@/components/ui/container';
import Image from 'next/image';

const ProductPage = async ({ params }) => {
  const product = await getProduct(params.productId);

  return (
    <div className="py-5">
      <Container>
        <div className="w-full h-full bg-white flex flex-col justify-center py-10 px-10 gap-10">
          <div className="flex w-full">
            <div className="h-[300px] aspect-square rounded-xl bg-gray-100 relative mr-6">
              <Image
                src={product.images?.[0]?.url}
                alt=""
                fill
                className="aspect-square object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-between items-start gap-2 w-full ">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl  font-bold">{product.name}</h1>
                <div className="flex">
                  <h3 className="font-semibold text-black">size : {product?.size?.name}</h3>
                </div>
                <div className="flex gap-2">
                  <h3 className="font-medium text-black">Color : </h3>
                  <div
                    className="h-6 w-6 rounded-full border border-gray-600 "
                    style={{ backgroundColor: product.color.value }}
                  />
                </div>
              </div>
              <div className="text-2xl font-bold mt-10">
                <Currency value={product?.price} />
              </div>

              <div className="flex flex-col w-full gap-2">
                <div className="bg-black border border-black text-white py-1 font-semibold text-center">
                  Bayar
                </div>
                <div className="bg-white border border-black py-1 font-semibold text-center">
                  Keranjang
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
