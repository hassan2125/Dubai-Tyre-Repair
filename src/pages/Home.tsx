import { ArrowRight, Check, Clock3, CreditCard, Sparkles, Star, Zap } from 'lucide-react';
import { navigate } from '@/lib/navigate';
import { heroImages, services, whatsapp } from '@/data/site';
import BgHero from '@/components/BgHero';
import BrandCarousel from '@/components/BrandCarousel';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <>
      <BgHero
        image={heroImages.home}
        eyebrow="Dubai's mobile tyre specialists"
        title="Back on the road."
        titleEm="In 10 minutes."
        subtitle="Fast, professional tyre repair and roadside assistance wherever you are in Dubai. No towing. No waiting room. Just expert help at your location."
        showButtons
      >
        <div className="hero-note">
          <span className="avatar-stack"><i /><i /><i /></span>
          <span><strong>5000+</strong> drivers helped in Dubai</span>
        </div>
      </BgHero>

      <section className="usps">
        <div className="container usp-grid">
          {([[Clock3, 'Arrived in 10 Minutes', 'Fast response, wherever you are'], [Star, '5,000+ Happy Customers', 'Trusted by Dubai drivers'], [Zap, 'Roadside Emergency Repair', 'Help day or night'], [CreditCard, 'Online Payment Accepted', 'Simple, secure checkout']] as const).map(([Icon, title, text]) => (
            <div className="usp" key={title}>
              <div className="icon-box"><Icon size={21} /></div>
              <div><strong>{title}</strong><small>{text}</small></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section services-home">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>Six ways<br /><em>to get you moving.</em></h2>
            </div>
            <div className="head-side">
              <p>From a late-night puncture to a full set of new tyres, our mobile team brings the workshop to you.</p>
              <button className="text-link" onClick={() => navigate('/services')}>View all services <ArrowRight size={15} /></button>
            </div>
          </div>
          <div className="service-grid-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button className="service-card-6" key={service.slug} onClick={() => navigate(`/${service.slug}`)}>
                  <div className="service-card-img">
                    <img src={service.image} alt={`${service.title} service in Dubai`} />
                    <div className="service-card-overlay" />
                    <span className="service-card-icon"><Icon size={20} /></span>
                  </div>
                  <div className="service-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.short}</p>
                    <span className="card-link">Learn more <ArrowRight size={15} /></span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <div className="split-image">
            <img src={heroImages.mobileFitting} alt="Professional mechanic fitting a new tyre" />
            <span className="stat-card"><strong>10 min</strong><small>average arrival time</small></span>
          </div>
          <div className="split-copy">
            <span className="eyebrow">Why Tyre Rescue</span>
            <h2>Dubai-wide tyre repair.<br /><em>We come to you.</em></h2>
            <p>No matter where you are in Dubai, our mobile tyre repair team is always ready to assist. We bring expert service directly to your location, saving you time and hassle.</p>
            <div className="benefit-list">
              <span><Check size={16} /> Trained staff</span>
              <span><Check size={16} /> Professional tools</span>
              <span><Check size={16} /> ETA 10 minutes</span>
              <span><Check size={16} /> Service warranty</span>
              <span><Check size={16} /> Available 24/7</span>
            </div>
            <button className="text-link" onClick={() => navigate('/about')}>Why drivers choose us <ArrowRight size={15} /></button>
          </div>
        </div>
      </section>

      <section className="offer">
        <div className="container offer-inner">
          <div className="offer-icon"><Sparkles size={22} /></div>
          <div>
            <span className="eyebrow">A little something extra</span>
            <h2>Now offering flat <em>5% discount</em> on every new tyre.</h2>
          </div>
          <a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer">Claim your discount <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="section steps">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">Simple by design</span>
            <h2>Help is three taps away.</h2>
            <p>We built our service around one thing: getting you moving with less fuss.</p>
          </div>
          <div className="steps-grid">
            {([['01', 'Tell us what happened', 'Message us on WhatsApp or call our team.'], ['02', 'Share your location', 'Drop a pin or tell us your area in Dubai.'], ['03', 'We get you moving', 'Our mobile expert arrives and sorts it on the spot.']] as const).map(([number, title, text]) => (
              <div className="step" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandCarousel />
      <Testimonials />
      <Faq variant="default" />
      <ContactSection eyebrow="Need a hand?" title="Let's get you" titleEm="moving again." description="Tell us a little about what you need. We'll take care of the rest." />
      <FinalCta />
    </>
  );
}
