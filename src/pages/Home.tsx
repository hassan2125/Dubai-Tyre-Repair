import { ArrowRight, BadgeCheck, Check, Clock3, Phone, Star, Zap } from 'lucide-react';
import { navigate } from '@/lib/navigate';
import { heroImages, phone, phoneDisplay, services, testimonialsData, tyreBrands, whatsapp } from '@/data/site';
import ServiceCard from '@/components/ServiceCard';
import { WhatsAppIcon } from '@/components/Icons';
import BgHero from '@/components/BgHero';
import HowItWorks from '@/components/HowItWorks';
import ServiceAreas from '@/components/ServiceAreas';
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
        eyebrow="Mobile team ready across Dubai · response times vary"
        statusEyebrow
        title="Back on the road."
        titleEm="With help at your location."
        subtitle="Fast, professional tyre repair and roadside assistance wherever you are in Dubai. No towing. No waiting room. Just expert help at your location."
        showButtons
      >
        <div className="hero-note">
          <span className="avatar-stack">
            {testimonialsData.slice(0, 3).map((testimonial) => (
              <img key={testimonial.name} src={testimonial.avatar} alt={`${testimonial.name} customer`} />
            ))}
          </span>
          <span className="hero-note-copy">
            <span className="hero-note-stars" role="img" aria-label="4.9 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}
            </span>
            <span className="hero-note-text"><strong>5,000+ drivers helped</strong> · <strong>4.9</strong> average rating</span>
          </span>
        </div>
      </BgHero>

      <section className="usps">
        <div className="container usp-grid">
          {([[Clock3, '10-Minute Target', 'Arrival times depend on traffic and location'], [Star, '5,000+ Happy Customers', 'Trusted by Dubai drivers'], [Zap, 'Roadside Emergency Repair', 'Help day or night'], [BadgeCheck, 'Upfront Pricing', 'Know the cost before work begins']] as const).map(([Icon, title, text]) => (
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
              <h2>Five ways<br /><em>to get you moving.</em></h2>
            </div>
            <div className="head-side">
              <p>From a late-night puncture to a full set of new tyres, our mobile team brings the workshop to you.</p>
              <button className="text-link" onClick={() => navigate('/services')}>View all services <ArrowRight size={15} /></button>
            </div>
          </div>
          <div className="service-grid-6">
            {services.map((service) => <ServiceCard service={service} key={service.slug} />)}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <div className="split-image">
            <img src={heroImages.mobileFitting} alt="Professional mechanic fitting a new tyre" />
            <span className="stat-card"><strong>10 min</strong><small>target arrival time</small></span>
          </div>
          <div className="split-copy">
            <span className="eyebrow">Why Car Tyre Repair Dubai</span>
            <h2>Dubai-wide tyre repair.<br /><em>We come to you.</em></h2>
            <p>No matter where you are in Dubai, our mobile tyre repair team is always ready to assist. We bring expert service directly to your location, saving you time and hassle.</p>
            <div className="benefit-list">
              <span><Check size={16} /> Trained staff</span>
              <span><Check size={16} /> Professional tools</span>
              <span><Check size={16} /> 10-minute target ETA</span>
              <span><Check size={16} /> Service warranty</span>
              <span><Check size={16} /> Available 24/7</span>
            </div>
            <button className="text-link" onClick={() => navigate('/about')}>Why drivers choose us <ArrowRight size={15} /></button>
          </div>
        </div>
      </section>

      <section className="home-discount-cta-section" aria-labelledby="home-discount-cta-title">
        <div className="container">
          <div className="home-discount-cta">
            <div className="home-discount-cta-copy">
              <span className="eyebrow">A little something extra</span>
              <h2 id="home-discount-cta-title">Get a flat 5% discount on every new tyre.</h2>
              <p>Choose your tyres and book mobile fitting at your home, office or roadside in Dubai.</p>
            </div>
            <div className="home-discount-cta-actions">
              <a className="button" href={`tel:${phone}`}><Phone size={16} /> {phoneDisplay}</a>
              <a className="button whatsapp-button" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} /> Claim your discount</a>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <ServiceAreas />

      <BrandCarousel />
      <section className="section home-tyre-brands" aria-labelledby="home-tyre-brands-title">
        <div className="container">
          <div className="home-tyre-brands-head">
            <div>
              <span className="eyebrow">Tyre brands</span>
              <h2 id="home-tyre-brands-title">Trusted names for your next set.</h2>
            </div>
            <p>Ask our team to check tyre sizes, stock, and fitment for your vehicle.</p>
          </div>
          <ul className="home-tyre-brand-grid" aria-label="Featured tyre brands">
            {tyreBrands.slice(0, 5).map((brand) => (
              <li className="home-tyre-brand" key={brand.name}>
                <span className="home-tyre-brand-logo">
                  {brand.logoSlug && <img src={`https://www.carlogos.org/tire-logos/${brand.logoSlug}-logo.png`} alt={`${brand.name} logo`} loading="lazy" />}
                </span>
                <span className="home-tyre-brand-name">{brand.name}</span>
              </li>
            ))}
          </ul>
          <button className="text-link home-tyre-brands-link" onClick={() => navigate('/brands')}>
            Explore all tyre brands <ArrowRight size={15} />
          </button>
        </div>
      </section>
      <Testimonials />
      <Faq variant="default" />
      <ContactSection eyebrow="Need a hand?" title="Let's get you" titleEm="moving again." description="Tell us a little about what you need. We'll take care of the rest." />
      <FinalCta />
    </>
  );
}
