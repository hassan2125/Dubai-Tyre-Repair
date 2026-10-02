import { ArrowRight, Check } from 'lucide-react';
import { navigate } from '@/lib/navigate';
import { serviceDetails, type Service } from '@/data/site';

export default function ServiceCard({ service, variant = 'home' }: { service: Service; variant?: 'home' | 'listing' }) {
  const Icon = service.icon;
  const isListing = variant === 'listing';
  const included = isListing ? serviceDetails[service.slug]?.included.slice(0, 2) ?? [] : [];

  return (
    <article className={`service-card-6${isListing ? ' service-card-6-listing' : ''}`}>
      <div className="service-card-img">
        <img src={service.image} alt={`${service.title} service in Dubai`} loading="lazy" />
        <span className="service-card-overlay" />
        <span className="service-card-icon"><Icon size={20} /></span>
      </div>
      <div className="service-card-body">
        <div className={isListing ? 'service-card-heading-row' : ''}>
          <h3>{service.title}</h3>
          {isListing && <span className="service-card-price"><small>FROM</small><strong>AED 150</strong></span>}
        </div>
        <p>{service.short}</p>
        {isListing && included.length > 0 && (
          <div className="service-card-included">
            {included.map((item) => <span key={item}><Check size={14} /> {item}</span>)}
          </div>
        )}
        {isListing ? (
          <button className="service-card-link" onClick={() => navigate(`/${service.slug}`)}>
            Learn more <ArrowRight size={15} />
          </button>
        ) : (
          <div className="service-card-footer">
            <strong>From AED 150</strong>
            <button className="service-card-link" onClick={() => navigate(`/${service.slug}`)}>
              Learn more <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}