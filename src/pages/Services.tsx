import { MessageCircle } from 'lucide-react';
import { heroImages, services, whatsapp } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';
import ServiceCard from '@/components/ServiceCard';
import BgHero from '@/components/BgHero';
import HowItWorks from '@/components/HowItWorks';
import ServiceAreas from '@/components/ServiceAreas';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Faq from '@/components/Faq';

export default function Services() {
  return (
    <>
      <BgHero
        image={heroImages.services}
        eyebrow="Roadside help, reimagined"
        title="Whatever your car"
        titleEm="needs next."
        subtitle="One trusted team for tyre repair, tyre fitting, new tyre replacement, and the unexpected moments in between."
        showButtons
      />

      <section className="section all-services">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our services</span>
              <h2>Built for real<br /><em>roadside moments.</em></h2>
            </div>
            <p className="head-paragraph">Professional mobile support, without the workshop visit. Choose a service to learn more.</p>
          </div>
          <div className="services-page-grid">
            {services.map((service) => <ServiceCard service={service} key={service.slug} variant="listing" />)}
          </div>
        </div>
      </section>

      <HowItWorks className="services-how-it-works" />

      <section className="services-help-cta-section">
        <div className="container">
          <aside className="services-help-cta" aria-label="Help choosing a service">
            <span className="services-help-cta-icon">
              <MessageCircle size={23} />
              <span>?</span>
            </span>
            <span className="services-help-cta-copy">
              <strong>Not sure which service you need?</strong>
              <span>Send us a photo or describe the problem. We'll tell you the fix and price, with no obligation.</span>
            </span>
            <a className="button whatsapp-button services-help-cta-button" href={whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={18} /> Ask us on WhatsApp
            </a>
          </aside>
        </div>
      </section>

      <section className="services-promise">
        <div className="container">
          <div className="services-promise-panel">
            <div>
              <span className="eyebrow">The promise</span>
              <h2>Fast hands. Clear answers.<br /><em>A better way to get help.</em></h2>
            </div>
            <a className="button services-promise-button" href={whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={17} /> Book a Service
            </a>
          </div>
        </div>
      </section>

      <ServiceAreas />

      <Testimonials />
      <Faq variant="service" />
      <ContactSection eyebrow="Ready when you are" title="Tell us what's" titleEm="going on." description="We'll point you in the right direction." />
      <FinalCta />
    </>
  );
}
