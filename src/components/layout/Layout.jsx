import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';
import CtaBanner from '../ui/CtaBanner';

/**
 * App shell shared by every route: header, page content (via <Outlet />),
 * the closing CTA banner, footer and floating WhatsApp button.
 */
export default function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <CtaBanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
