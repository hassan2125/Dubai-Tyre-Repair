import { ArrowRight, Phone } from 'lucide-react';
import { phone, phoneDisplay, whatsapp, heroImages } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';

export default function FinalCta() {
  return (
    <section className="final-cta" style={{ backgroundImage: `url(${heroImages.cta})` }}>
      <div className="final-cta-overlay" />
      <div className="container final-cta-inner">
        <div className="final-cta-copy">
          <span className="eyebrow">Wherever the road takes you</span>
          <h2>Don't let a flat tyre<br /><em>steal your day.</em></h2>
          <p>One message is all it takes. Our mobile crew is ready across Dubai, day or night.</p>
        </div>
        <div className="cta-right">
          <div className="cta-buttons">
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon size={18} /> Book a Service</a>
            <a className="button button-ghost" href={`tel:${phone}`}><Phone size={17} /> {phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
