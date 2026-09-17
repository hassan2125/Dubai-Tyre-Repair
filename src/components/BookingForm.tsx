import { useState, type FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { whatsapp, services } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success">
        <span className="form-success-icon"><Check size={26} /></span>
        <h3>We've got your request.</h3>
        <p>Our team will contact you shortly. For the fastest response, WhatsApp your location now.</p>
        <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
          <WhatsAppIcon size={17} /> WhatsApp our team
        </a>
      </div>
    );
  }

  return (
    <form className={compact ? 'booking-form compact' : 'booking-form'} onSubmit={submit}>
      <div className="form-heading">
        <span className="eyebrow">Get assistance</span>
        <h2>Tell us where it hurts.</h2>
        <p>Send a few details and our mobile team will be on their way.</p>
      </div>

      <div className="form-row">
        <label>Your name<input required placeholder="Full name" /></label>
        <label>Mobile number<input required type="tel" placeholder="+971 50 000 0000" /></label>
      </div>

      <div className="form-row">
        <label>Email address<input type="email" placeholder="your@email.com" /></label>
        <label>Where are you?<input required placeholder="Area or share location" /></label>
      </div>

      <div className="form-row">
        <label>What do you need?
          <select defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          </select>
        </label>
        <label>Vehicle make &amp; model<input placeholder="e.g. Toyota Corolla" /></label>
      </div>

      <label className="form-label-full">Message / additional details
        <textarea placeholder="Describe your issue, preferred time, or any other details..." rows={4} />
      </label>

      <button className="button button-full" type="submit">
        Send Request <ArrowRight size={17} />
      </button>
      <small>Usually responds in under 10 minutes · No obligation</small>
    </form>
  );
}
