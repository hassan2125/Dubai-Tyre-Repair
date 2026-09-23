import { useEffect, useState, type ReactNode } from 'react';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import Legal from '@/pages/Legal';
import ServicePage from '@/pages/ServicePage';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const update = (): void => setPath(window.location.pathname);
    window.addEventListener('popstate', update);
    document.title = path === '/' ? 'Car Tyre Repair Dubai | Mobile Tyre Repair in 10 Minutes' : 'Car Tyre Repair Dubai | Fast Mobile Roadside Assistance';
    return () => window.removeEventListener('popstate', update);
  }, [path]);

  let page: ReactNode;
  if (path === '/') page = <Home />;
  else if (path === '/about') page = <About />;
  else if (path === '/services') page = <Services />;
  else if (path === '/gallery') page = <Gallery />;
  else if (path === '/contact') page = <Contact />;
  else if (path === '/privacy-policy') page = <Legal />;
  else if (path === '/terms-conditions') page = <Legal terms />;
  else page = <ServicePage slug={path.slice(1)} />;

  return <Layout>{page}</Layout>;
}
