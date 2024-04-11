import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ToastProvider from '@/providers/toast-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'thrift-shop',
  description: 'thrift-shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-white `}>
        <ToastProvider />
        <div className="h-full  absolute w-full bg-[url('/bg.jpg')] opacity-50 -z-10 "></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
