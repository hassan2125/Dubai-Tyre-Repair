import { ArrowRight, MapPin, Phone, Timer, ShieldCheck, BadgeCheck, Headphones } from 'lucide-react';
import { heroImages, phone, phoneDisplay, whatsapp } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';
import BgHero from '@/components/BgHero';
import BookingForm from '@/components/BookingForm';
import Testimonials from '@/components/Testimonials';
import FinalCta from '@/components/FinalCta';
import Faq from '@/components/Faq';

export default function Contact() {
  return (
    <>
      <BgHero
        image={heroImages.contact}
        eyebrow="Contact Tyre Rescue Dubai"
        title="Help is closer"
        titleEm="than you think."
        subtitle="Call, WhatsApp, or send us a few details. We're ready to help across Dubai, 24/7."
        showButtons
      />

      <section className="section contact-main">
        <div className="container contact-page-grid">
          <div className="contact-options">
            <span className="eyebrow">Choose your easiest route</span>
            <h2>Let's get your<br /><em>day back.</em></h2>
            <p>Our team is standing by. For the quickest response, WhatsApp your location and a photo of the issue.</p>
            <a className="contact-option whatsapp-option" href={whatsapp} target="_blank" rel="noreferrer">
              <span><WhatsAppIcon size={22} /></span>
              <div><strong>WhatsApp us</strong><small>Fastest response · Send location</small></div>
              <ArrowRight size={18} />
            </a>
            <a className="contact-option" href={`tel:${phone}`}>
              <span><Phone size={22} /></span>
              <div><strong>{phoneDisplay}</strong><small>Speak with our roadside team</small></div>
              <ArrowRight size={18} />
            </a>
            <div className="coverage-note">
              <MapPin size={17} />
              <span><strong>Serving all Dubai areas</strong><small>Marina · Downtown · Jumeirah · Al Quoz · Deira · Mirdif and beyond</small></span>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="section why-choose-section">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">Why choose us</span>
            <h2>Help you can<br /><em>count on.</em></h2>
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
              <span className="why-choose-icon"><Headphones size={24} /></span>
              <h3>24/7 availability</h3>
              <p>Day or night, weekday or weekend, our team is ready to take your call and get help moving.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section map-section">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">Find us on the map</span>
            <h2>Dubai-wide coverage.</h2>
            <p>We operate across all of Dubai. No matter where you are, our mobile team will reach you.</p>
          </div>
          <div className="map-wrapper">
            <iframe
              title="Tyre Rescue Dubai service area map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57829.729432!2d55.25!3d25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <Faq variant="contact" />
      <FinalCta />
    </>
  );
}
