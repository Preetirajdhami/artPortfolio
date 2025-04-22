import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-primary  min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}