import { ArrowRight } from 'lucide-react';
import { navigate } from '@/lib/navigate';
import { heroImages, services, whatsapp } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';
import BgHero from '@/components/BgHero';
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
          <div className="service-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button className="service-row" key={service.slug} onClick={() => navigate(`/${service.slug}`)}>
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-row-icon"><Icon size={21} /></span>
                  <span className="service-row-copy"><h3>{service.title}</h3><p>{service.short}</p></span>
                  <ArrowRight className="service-row-arrow" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="dark-strip">
        <div className="container dark-strip-inner">
          <span className="eyebrow">The promise</span>
          <h2>Fast hands. Clear answers.<br /><em>A better way to get help.</em></h2>
          <a className="button whatsapp-button" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} /> Book a Service <ArrowRight size={17} /></a>
        </div>
      </section>

      <Testimonials />
      <Faq variant="service" />
      <ContactSection eyebrow="Ready when you are" title="Tell us what's" titleEm="going on." description="We'll point you in the right direction." />
      <FinalCta />
    </>
  );
}
