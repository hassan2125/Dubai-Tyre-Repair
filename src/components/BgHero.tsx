import type { ReactNode } from 'react';
import { Phone } from 'lucide-react';
import { phone, phoneDisplay, whatsapp } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';

interface BgHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  titleEm?: string;
  subtitle: string;
  showButtons?: boolean;
  statusEyebrow?: boolean;
  children?: ReactNode;
}

export default function BgHero({ image, eyebrow, title, titleEm, subtitle, showButtons = false, statusEyebrow = false, children }: BgHeroProps) {
  return (
    <section className="bg-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="bg-hero-overlay" />
      <div className="bg-hero-tint" />
      <div className="container bg-hero-content">
        <span className={statusEyebrow ? 'eyebrow hero-status' : 'eyebrow'}>{eyebrow}</span>
        <h1>{title}{titleEm && <><br /><em>{titleEm}</em></>}</h1>
        <p>{subtitle}</p>
        {showButtons && (
          <div className="hero-buttons">
            <a className="button whatsapp-button" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon size={18} /> Book a Service</a>
            <a className="button phone-cta-button" href={`tel:${phone}`}><Phone size={17} /> {phoneDisplay}</a>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
