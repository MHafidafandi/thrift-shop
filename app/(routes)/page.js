import getProducts from '@/actions/get-products';
import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';

const Page = async () => {
  const products = await getProducts();
  return (
    <div className="py-5">
      <Container>
        <div className="bg-white w-full p-20 flex flex-col items-center">
          <h1 className="text-4xl mb-5">Koleksi Baru</h1>
          <p className="text-center w-[500px]">
            Jelajahi semua koleksi produk baru kami, pilihan-pilihan membuka jalan menuju hal-hal
            luar biasa, menuntut kreativitas, rasa ingin tahu, dan keberanian untuk perjalanan yang
            benar-benar memuaskan.
          </p>
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 my-5">
            <ProductList items={products} />
          </div>
          <Button>Jelajahi</Button>
        </div>
      </Container>
    </div>
  );
};

export default Page;
