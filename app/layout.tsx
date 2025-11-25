import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar/Navbar'; 
import Footer from './components/Footer/Footer'; 
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CSE Department | Home',
  description: 'Computer Science and Engineering Department Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main className="min-h-screen">
          {children} 
        </main>

        <Footer />
      </body>
    </html>
  );
}
