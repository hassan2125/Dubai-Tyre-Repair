import { ArrowRight, Check, MapPin, ShieldCheck, Timer, Headphones, BadgeCheck } from 'lucide-react';
import { serviceDetails, whatsapp } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';
import BgHero from '@/components/BgHero';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Faq from '@/components/Faq';

export default function ServicePage({ slug }: { slug: string }) {
  const detail = serviceDetails[slug] || serviceDetails['flat-tyre-repair'];

  return (
    <>
      <BgHero
        image={detail.image}
        eyebrow="Mobile service · Dubai-wide"
        title={detail.title}
        titleEm={detail.kicker}
        subtitle={detail.intro}
        showButtons
      />

      <section className="section service-about">
        <div className="container service-about-grid">
          <div className="service-about-copy">
            <span className="eyebrow">About this service</span>
            <h2>{detail.title}<br /><em>{detail.kicker}</em></h2>
            <p>{detail.detail}</p>
            <div className="service-about-tags">
              {detail.included.slice(0, 3).map((item) => (
                <span key={item}><Check size={15} /> {item}</span>
              ))}
            </div>
          </div>
          <div className="service-about-collage">
            <div className="collage-main">
              <img src={detail.gallery[0]} alt={`${detail.title} work photo 1`} loading="lazy" />
            </div>
            <div className="collage-side">
              <div className="collage-side-img">
                <img src={detail.gallery[1]} alt={`${detail.title} work photo 2`} loading="lazy" />
              </div>
              <div className="collage-side-img">
                <img src={detail.gallery[2]} alt={`${detail.title} work photo 3`} loading="lazy" />
              </div>
            </div>
            <span className="collage-badge">
              <ShieldCheck size={18} />
              <span><strong>Professional</strong><small>trained mobile team</small></span>
            </span>
          </div>
        </div>
      </section>

      <section className="section included">
        <div className="container included-grid">
          <div>
            <span className="eyebrow">What's included</span>
            <h2>Everything you need.<br /><em>Nothing you don't.</em></h2>
            <p>{detail.detail}</p>
          </div>
          <div className="included-list">
            {detail.included.map((item) => (
              <div key={item}><span><Check size={16} /></span><strong>{item}</strong></div>
            ))}
          </div>
          <div className="included-cta">
            <div className="included-cta-stats">
              <div><span>Price</span><strong>from <em>AED 100</em></strong></div>
              <div><span>Time on-site</span><strong>15–30 <em>min</em></strong></div>
              <div><span>Warranty</span><strong>6 <em>months</em></strong></div>
              <div><span>Avg arrival</span><strong>~10 <em>min</em></strong></div>
            </div>
            <a className="button included-cta-button" href={whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={17} className="service-cta-whatsapp-icon" /> Book {detail.title}
            </a>
          </div>
        </div>
      </section>

      <section className="section why-choose-section">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">Why choose us</span>
            <h2>Professional help,<br /><em>right where you are.</em></h2>
          </div>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <span className="why-choose-icon"><Timer size={24} /></span>
              <h3>10-min target ETA</h3>
              <p>We aim to reach you within minutes, wherever you are in Dubai, so you're never left waiting.</p>
            </div>
            <div className="why-choose-card">
              <span className="why-choose-icon"><ShieldCheck size={24} /></span>
              <h3>Warranty included</h3>
              <p>Every repair and replacement is backed by our service warranty for your peace of mind.</p>
            </div>
            <div className="why-choose-card">
              <span className="why-choose-icon"><MapPin size={24} /></span>
              <h3>All Dubai areas</h3>
              <p>From Marina to Mirdif, Downtown to Jebel Ali, our mobile team covers every corner of the city.</p>
            </div>
            <div className="why-choose-card">
              <span className="why-choose-icon"><BadgeCheck size={24} /></span>
              <h3>Upfront pricing</h3>
              <p>We confirm the scope and cost before starting. No surprises, no hidden charges, ever.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-it-works">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">How it works</span>
            <h2>From stuck to sorted.</h2>
          </div>
          <div className="steps-grid">
            {([['01', 'Message us', 'Tell us what happened and where you are.'], ['02', 'We come to you', 'A trained mobile specialist is dispatched.'], ['03', 'Drive away', 'We fix, fit, or replace and check everything.']] as const).map(([n, t, d]) => (
              <div className="step" key={n} data-number={n}>
                <span className="step-number">{n}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
                <ArrowRight size={19} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Faq variant="service" />
      <ContactSection eyebrow="Need this service?" title="Get help" titleEm="without the hassle." description="Share the details and we'll handle the next step." />
      <FinalCta />
    </>
  );
}
