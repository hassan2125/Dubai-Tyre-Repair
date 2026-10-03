import { useState, type FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { services, whatsapp } from '@/data/site';

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

interface Web3FormsResponse {
  success?: boolean;
  message?: string;
}

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', '440f3287-47ea-42f4-b3a3-cbb71bbc0922');
    formData.append('subject', 'New booking request - Car Tyre Repair Dubai');
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const result = await response.json() as Web3FormsResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'The request could not be submitted.');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
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
        <textarea name="message" placeholder="Describe your issue, preferred time, or any other details..." rows={4} />
      </label>

      <button className="button button-full" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Request'} <ArrowRight size={17} />
      </button>
      {status === 'success' && <p className="booking-form-status" role="status">Request sent successfully. Our team will contact you shortly.</p>}
      {status === 'error' && (
        <p className="booking-form-status booking-form-status-error" role="alert">
          We couldn't send your request. Please try again or <a href={whatsapp} target="_blank" rel="noreferrer">contact us on WhatsApp</a>.
        </p>
      )}
    </form>
  );
}
