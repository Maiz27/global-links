import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { IsClientCtxProvider } from '@/context/IsClientContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Global Links Auto',
  description: 'Official Toyota Authorized Company for South Sudan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/imgs/logo/favicon.ico' />
      </head>
      <body className={inter.className}>
        <IsClientCtxProvider>
          <Navbar />
          {children}
          <Footer />
        </IsClientCtxProvider>
      </body>
    </html>
  );
}
