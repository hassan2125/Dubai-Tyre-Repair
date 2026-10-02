import { useEffect, useLayoutEffect, useState, type ReactNode } from 'react';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import Legal from '@/pages/Legal';
import ServicePage from '@/pages/ServicePage';
import Brands from '@/pages/Brands';
import NotFound from '@/pages/NotFound';
import { serviceDetails } from '@/data/site';

interface PageMetadata {
  title: string;
  description: string;
}

const routeMetadata: Record<string, PageMetadata> = {
  '/': {
    title: 'Car Tyre Repair Dubai | Mobile Tyre Repair',
    description: 'Mobile tyre and roadside help across Dubai: puncture repair, fitting, new tyres, spare wheels, and emergency assistance. Call or WhatsApp to book.',
  },
  '/about': {
    title: 'About Car Tyre Repair Dubai | Our Mobile Team',
    description: 'Meet the mobile tyre team serving drivers across Dubai. Learn about our approach, service coverage, and roadside support.',
  },
  '/services': {
    title: 'Mobile Tyre Services in Dubai | Car Tyre Repair Dubai',
    description: 'Explore mobile flat tyre repair, tyre fitting, new tyre replacement, spare wheel fitting, and emergency roadside support across Dubai.',
  },
  '/brands': {
    title: 'Car & Tyre Brands We Serve in Dubai | Car Tyre Repair Dubai',
    description: 'Search supported vehicle makes, models, and tyre brands. Confirm fitment, tyre size, availability, and pricing with our Dubai team.',
  },
  '/gallery': {
    title: 'Tyre Repair Gallery in Dubai | Car Tyre Repair Dubai',
    description: 'Browse photos of mobile tyre repair, fitting, spare wheel service, and roadside assistance from Car Tyre Repair Dubai.',
  },
  '/contact': {
    title: 'Contact Car Tyre Repair Dubai | Phone & WhatsApp',
    description: 'Contact our Dubai mobile tyre team by phone, WhatsApp, or the website form to discuss your location, vehicle, and service needs.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Car Tyre Repair Dubai',
    description: 'Read how Car Tyre Repair Dubai collects, uses, and protects contact, location, vehicle, and service request information.',
  },
  '/terms-conditions': {
    title: 'Terms & Conditions | Car Tyre Repair Dubai',
    description: 'Review the booking, pricing, payment, service, and safety terms for mobile tyre repair and roadside assistance in Dubai.',
  },
};

const serviceDescriptions: Record<string, string> = {
  'flat-tyre-repair': 'Mobile flat tyre repair in Dubai. We inspect punctures, repair tyres where safe, or fit your spare. Contact us by phone or WhatsApp.',
  'mobile-tyre-fitting': 'Book mobile tyre fitting in Dubai at your home, office, or roadside. Contact our team to confirm fitment and availability.',
  'new-tyre-replacement': 'Choose replacement tyres in Dubai with mobile installation at your location. Contact us to confirm tyre options and pricing.',
  'spare-tyre-replacement': 'Need a spare wheel fitted in Dubai? Arrange mobile fitting, inflation, and condition checks by phone or WhatsApp.',
  'emergency-tyre-repair': 'Need emergency tyre repair in Dubai? Contact our roadside team for tyre assessment, repair, or spare wheel fitting.',
};

const notFoundMetadata: PageMetadata = {
  title: 'Page Not Found | Car Tyre Repair Dubai',
  description: 'The requested page could not be found. Browse mobile tyre services in Dubai or contact our team for help.',
};

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const update = (): void => setPath(window.location.pathname);
    window.addEventListener('popstate', update);
    const serviceSlug = path.slice(1);
    const service = serviceDetails[serviceSlug];
    const isNotFound = !routeMetadata[path] && !service;
    const metadata = routeMetadata[path] ?? (service ? {
      title: `${service.title} in Dubai | Car Tyre Repair Dubai`,
      description: serviceDescriptions[serviceSlug] ?? service.intro,
    } : notFoundMetadata);
    document.title = metadata.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) description.content = metadata.description;
    const openGraphTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (openGraphTitle) openGraphTitle.content = document.title;
    const openGraphDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (openGraphDescription) openGraphDescription.content = metadata.description;
    const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = metadata.title;
    const twitterDescription = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.content = metadata.description;
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (robots) robots.content = isNotFound ? 'noindex, nofollow' : 'index, follow';
    return () => window.removeEventListener('popstate', update);
  }, [path]);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    const targets = document.querySelectorAll<HTMLElement>(
      '.bg-hero-content, .section, .usps, .home-discount-cta-section, .services-help-cta-section, .services-promise, .gallery-cta, .about-inline-cta-section, .contact-band, .related-services, .final-cta, .footer',
    );

    targets.forEach((target, index) => {
      target.classList.add('reveal-on-scroll');
      target.style.setProperty('--reveal-delay', `${(index % 4) * 60}ms`);
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      targets.forEach((target) => {
        target.classList.remove('reveal-on-scroll', 'is-revealed');
        target.style.removeProperty('--reveal-delay');
      });
    };
  }, [path]);

  let page: ReactNode;
  if (path === '/') page = <Home />;
  else if (path === '/about') page = <About />;
  else if (path === '/services') page = <Services />;
  else if (path === '/brands') page = <Brands />;
  else if (path === '/gallery') page = <Gallery />;
  else if (path === '/contact') page = <Contact />;
  else if (path === '/privacy-policy') page = <Legal />;
  else if (path === '/terms-conditions') page = <Legal terms />;
  else {
    const slug = path.slice(1);
    page = Object.prototype.hasOwnProperty.call(serviceDetails, slug)
      ? <ServicePage slug={slug} />
      : <NotFound />;
  }

  return <Layout>{page}</Layout>;
}
