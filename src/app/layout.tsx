import { Poppins } from 'next/font/google';
import './styles/globals.css';
import NavBarFn from './components/navbar';
import FooterFn from './components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: 'normal',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBarFn />
        {children}
        <FooterFn />
      </body>
    </html>
  );
}
