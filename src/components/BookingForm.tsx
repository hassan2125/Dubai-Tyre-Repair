import type { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/site';

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <form className={compact ? 'booking-form compact' : 'booking-form'} onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="eyebrow">Get assistance</span>
        <h2>Tell us where it hurts.</h2>
        <p>Share your vehicle details and the assistance you need.</p>
      </div>

      <div className="form-row">
        <label>Your name<input name="name" required placeholder="Full name" /></label>
        <label>Mobile number<input name="phone" required type="tel" placeholder="+971 50 000 0000" /></label>
      </div>

      <div className="form-row">
        <label>Email address<input name="email" type="email" placeholder="your@email.com" /></label>
        <label>Where are you?<input name="location" required placeholder="Area or share location" /></label>
      </div>

      <div className="form-row">
        <label>What do you need?
          <select name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => <option key={s.slug}>{s.title}</option>)}
          </select>
        </label>
        <label>Vehicle make &amp; model<input name="vehicle" placeholder="e.g. Toyota Corolla" /></label>
      </div>

      <label className="form-label-full">Message / additional details
        <textarea name="details" placeholder="Describe your issue, preferred time, or any other details..." rows={4} />
      </label>

      <button className="button button-full" type="submit">
        Send Request <ArrowRight size={17} />
      </button>
    </form>
  );
}
