import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { navigate } from '@/lib/navigate';
import { phone, phoneDisplay, whatsapp, services } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';
import Logo from '@/components/Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeAll() {
    setOpen(false);
    setServicesOpen(false);
  }

  function handleEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 300);
  }

  const path = window.location.pathname;

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Dubai-wide mobile service</span>
          <span className="topbar-center">Open 24/7</span>
          <span><Phone size={13} /> {phoneDisplay}</span>
        </div>
      </div>
      <header className={scrolled ? 'header scrolled' : 'header'}>
        <div className="container nav-wrap">
          <Logo />

          <nav className={open ? 'nav open' : 'nav'}>
            <button className={path === '/' ? 'active' : ''} onClick={() => { navigate('/'); closeAll(); }}>Home</button>

            <div className="nav-dropdown" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              <button
                className={services.some(s => path === `/${s.slug}`) || path === '/services' ? 'active' : ''}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div className="dropdown-menu" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                  <button className="dropdown-all" onClick={() => { navigate('/services'); closeAll(); }}>
                    <span className="dropdown-icon dropdown-icon-all">⊞</span>
                    <span className="dropdown-label"><strong>All Services</strong><small>Browse all six mobile services</small></span>
                  </button>
                  <div className="dropdown-divider" />
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <button key={service.slug} onClick={() => { navigate(`/${service.slug}`); closeAll(); }}>
                        <span className="dropdown-icon"><Icon size={17} /></span>
                        <span className="dropdown-label"><strong>{service.title}</strong><small>{service.short}</small></span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button className={path === '/gallery' ? 'active' : ''} onClick={() => { navigate('/gallery'); closeAll(); }}>Gallery</button>
            <button className={path === '/about' ? 'active' : ''} onClick={() => { navigate('/about'); closeAll(); }}>About</button>
            <button className={path === '/contact' ? 'active' : ''} onClick={() => { navigate('/contact'); closeAll(); }}>Contact</button>
          </nav>

          <div className="nav-actions">
            <a className="call-btn" href={`tel:${phone}`}><Phone size={15} /> {phoneDisplay}</a>
            <a className="button button-sm" href={whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={16} /> Book a Service
            </a>
          </div>

          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}
