import { ArrowRight, Check, MapPin, MessageCircle } from 'lucide-react';
import { navigate } from '@/lib/navigate';
import { heroImages, services, serviceDetails, whatsapp } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';
import BgHero from '@/components/BgHero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Faq from '@/components/Faq';

const serviceAreas = ['Dubai Marina', 'JLT', 'Business Bay', 'Downtown', 'DIFC', 'Deira', 'Al Barsha', 'JVC', 'Silicon Oasis', 'Dubai Hills', 'Mirdif', 'Jumeirah'];

export default function Services() {
  return (
    <>
      <BgHero
        image={heroImages.services}
        eyebrow="Roadside help, reimagined"
        title="Whatever your car"
        titleEm="needs next."
        subtitle="One trusted team for tyre repair, tyre fitting, battery replacement, and the unexpected moments in between."
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
            {services.map((service) => {
              const Icon = service.icon;
              const included = serviceDetails[service.slug]?.included.slice(0, 2) ?? [];
              return (
                <button className="services-page-card" key={service.slug} onClick={() => navigate(`/${service.slug}`)}>
                  <span className="services-page-card-image">
                    <img src={service.image} alt={`${service.title} in Dubai`} />
                    <span className="services-page-card-image-overlay" />
                    <span className="services-page-card-icon"><Icon size={20} /></span>
                  </span>
                  <span className="services-page-card-body">
                    <h3>{service.title}</h3>
                    <span className="services-page-card-description">{service.short}</span>
                    <span className="services-page-card-benefits">
                      {included.map((item) => (
                        <span key={item}><Check size={14} /><span>{item}</span></span>
                      ))}
                    </span>
                    <span className="services-page-card-link">Learn more <ArrowRight size={15} /></span>
                  </span>
                </button>
              );
            })}
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

      <section className="services-areas">
        <div className="container">
          <span className="eyebrow">Where we work</span>
          <h2>Every service, every corner of Dubai.</h2>
          <p className="services-areas-intro">All six services reach you right across the city, usually within 10 minutes.</p>
          <div className="services-area-list">
            {serviceAreas.map((area, index) => (
              <span className="services-area-chip" key={area}>
                {index === 0 && <MapPin size={14} />}
                {area}
              </span>
            ))}
          </div>
          <p className="services-areas-note">
            Don't see your area? <a href={whatsapp} target="_blank" rel="noreferrer"><strong>We still come to you</strong></a>. Message us and we'll confirm an ETA in seconds.
          </p>
        </div>
      </section>

      <Testimonials />
      <Faq variant="service" />
      <ContactSection eyebrow="Ready when you are" title="Tell us what's" titleEm="going on." description="We'll point you in the right direction." />
      <FinalCta />
    </>
  );
}
