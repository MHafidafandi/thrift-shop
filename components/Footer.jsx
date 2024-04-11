import { Facebook, Instagram } from 'lucide-react';
import Container from './ui/container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex gap-80 p-10">
          <div className="flex flex-col gap-2 ">
            <h2 className="font-bold">Explorate</h2>
            <p>kategori</p>
            <p>toko</p>
            <p>keranjang</p>
            <p>pencarian</p>
            <p>bantuan</p>
          </div>
          <div className="text-black flex flex-col gap-2 ">
            <h2 className="font-bold">Connection</h2>
            <div className="flex gap-2">
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
      </Container>

      <div className="mx-auto py-5 bg-black flex justify-between px-20">
        <p className="text-center text-xs text-white font-bold ">THRIFT-SHOP</p>
        <p className="text-center text-xs text-white font-semibold">&copy; 2024 </p>
      </div>
    </footer>
  );
};

export default Footer;
