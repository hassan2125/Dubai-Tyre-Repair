import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { phone, phoneDisplay, email, address, workingHours } from '@/data/site';
import BookingForm from '@/components/BookingForm';

interface ContactSectionProps {
  eyebrow: string;
  title: string;
  titleEm: string;
  description: string;
  compact?: boolean;
}

export default function ContactSection({ eyebrow, title, titleEm, description, compact = true }: ContactSectionProps) {
  return (
    <section className="contact-band">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}<br /><em>{titleEm}</em></h2>
          <p>{description}</p>
          <div className="contact-info-list">
            <a className="contact-info-row" href={`tel:${phone}`}>
              <Phone size={18} />
              <span>
                <strong>Call us</strong>
                <small>{phoneDisplay}</small>
              </span>
            </a>
            <a className="contact-info-row" href={`mailto:${email}`}>
              <Mail size={18} />
              <span>
                <strong>Email</strong>
                <small>{email}</small>
              </span>
            </a>
            <div className="contact-info-row">
              <MapPin size={18} />
              <span>
                <strong>Address</strong>
                <small>{address}</small>
              </span>
            </div>
            <div className="contact-info-row">
              <Clock size={18} />
              <span>
                <strong>Working hours</strong>
                <small>{workingHours}</small>
              </span>
            </div>
          </div>
        </div>
        <BookingForm compact={compact} />
      </div>
    </section>
  );
}
