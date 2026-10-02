import { MapPin } from 'lucide-react';
import { whatsapp } from '@/data/site';

const serviceAreas = [
  'Downtown Dubai', 'Dubai Marina', 'Palm Jumeirah', 'Business Bay', 'Tilal Al Ghaf',
  'Jumeirah Lake Towers', 'Jumeirah Village Circle', 'Jumeirah Beach Residence', 'Emirates Living',
  'Damac Hills', 'Meydan', 'Dubai Hills Estate', 'City Walk', 'Town Square', 'Arabian Ranches',
  'Dubai South', 'Emirates Hills', 'The Springs', 'Green Community', 'Jumeirah Village Triangle',
  'Sports City', 'Discovery Gardens', 'Motor City', 'Al Barari', 'Jumeirah Islands',
  'Victory Heights', 'The Meadows',
  'The Springs 1 to 10',
];

export default function ServiceAreas() {
  return (
    <section className="services-areas">
      <div className="container">
        <span className="eyebrow">Where we work</span>
        <h2>Every service, every corner of Dubai.</h2>
        <p className="services-areas-intro">All five services reach across the city. Arrival times depend on traffic and location.</p>
        <div className="services-area-list">
          {serviceAreas.map((area, index) => (
            <span className="services-area-chip" key={area}>
              {index === 0 && <MapPin size={14} />}
              {area}
            </span>
          ))}
        </div>
        <p className="services-areas-note">
          Don't see your area? <a href={whatsapp} target="_blank" rel="noreferrer"><strong>We still come to you</strong></a>. Message us and we'll confirm an ETA in seconds.
        </p>
      </div>
    </section>
  );
}