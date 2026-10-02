import { useState } from 'react';
import { Phone, Search, ShieldCheck } from 'lucide-react';
import { heroImages, phone, phoneDisplay, whatsapp } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';
import BgHero from '@/components/BgHero';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Faq from '@/components/Faq';

type CarCountry = 'american' | 'british' | 'french' | 'german' | 'italian' | 'japanese' | 'swedish';

interface CarBrand {
  name: string;
  logoSlug: string;
  country: CarCountry;
  lightLogo?: boolean;
  models?: string[];
}

const carBrands: CarBrand[] = [
  { name: 'BMW', logoSlug: 'bmw', country: 'german' },
  { name: 'Mercedes-Benz', logoSlug: 'mercedes-benz', country: 'german', models: ['A-Class'] },
  { name: 'Land Rover', logoSlug: 'land-rover', country: 'british', models: ['Range Rover'] },
  { name: 'Lamborghini', logoSlug: 'lamborghini', country: 'italian', models: ['Aventador', 'Urus'] },
  { name: 'Porsche', logoSlug: 'porsche', country: 'german', models: ['Panamera'] },
  { name: 'Audi', logoSlug: 'audi', country: 'german', lightLogo: true, models: ['A8'] },
  { name: 'Bentley', logoSlug: 'bentley', country: 'british', models: ['Continental GT', 'Bentayga'] },
  { name: 'Rolls-Royce', logoSlug: 'rolls-royce', country: 'british', models: ['Phantom VII', 'Cullinan'] },
  { name: 'Aston Martin', logoSlug: 'aston-martin', country: 'british', models: ['DBS Superleggera', 'DB11'] },
  { name: 'Ferrari', logoSlug: 'ferrari', country: 'italian', models: ['812 Superfast'] },
  { name: 'Bugatti', logoSlug: 'bugatti', country: 'french', models: ['Chiron'] },
  { name: 'Cadillac', logoSlug: 'cadillac', country: 'american', lightLogo: true },
  { name: 'GMC', logoSlug: 'gmc', country: 'american' },
  { name: 'Volkswagen', logoSlug: 'volkswagen', country: 'german' },
  { name: 'Ford', logoSlug: 'ford', country: 'american', models: ['Mustang'] },
  { name: 'Volvo', logoSlug: 'volvo', country: 'swedish' },
  { name: 'MINI', logoSlug: 'mini', country: 'british', lightLogo: true },
  { name: 'Jaguar', logoSlug: 'jaguar', country: 'british', lightLogo: true },
  { name: 'Alfa Romeo', logoSlug: 'alfa-romeo', country: 'italian' },
  { name: 'Lincoln', logoSlug: 'lincoln', country: 'american', lightLogo: true },
  { name: 'Chrysler', logoSlug: 'chrysler', country: 'american' },
  { name: 'Dodge', logoSlug: 'dodge', country: 'american' },
  { name: 'Fiat', logoSlug: 'fiat', country: 'italian' },
  { name: 'Maserati', logoSlug: 'maserati', country: 'italian', lightLogo: true },
  { name: 'Abarth', logoSlug: 'abarth', country: 'italian' },
  { name: 'Acura', logoSlug: 'acura', country: 'japanese' },
  { name: 'Buick', logoSlug: 'buick', country: 'american' },
  { name: 'Mercury', logoSlug: 'mercury', country: 'american', lightLogo: true },
  { name: 'Vauxhall', logoSlug: 'vauxhall', country: 'british' },
];

const carFilters = [
  { value: 'all', label: 'All makes' },
  { value: 'american', label: 'American' },
  { value: 'british', label: 'British' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'italian', label: 'Italian' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'swedish', label: 'Swedish' },
] as const;

interface TyreBrand {
  name: string;
  logoSlug?: string;
  wordmark?: string;
}

const tyreBrands: TyreBrand[] = [
  { name: 'Michelin', logoSlug: 'michelin' },
  { name: 'Bridgestone', logoSlug: 'bridgestone' },
  { name: 'Goodyear', logoSlug: 'goodyear' },
  { name: 'Continental', logoSlug: 'continental' },
  { name: 'Pirelli', logoSlug: 'pirelli' },
  { name: 'Kumho', logoSlug: 'kumho' },
  { name: 'Giti', logoSlug: 'giti' },
  { name: 'Hankook', logoSlug: 'hankook' },
  { name: 'Yokohama', logoSlug: 'yokohama' },
  { name: 'Dunlop', logoSlug: 'dunlop' },
  { name: 'China-made tyres', wordmark: 'TYRES' },
  { name: 'Prinx', wordmark: 'PRINX' },
  { name: 'Fortune', wordmark: 'FORTUNE' },
];

export default function Brands() {
  const [activeCarFilter, setActiveCarFilter] = useState<(typeof carFilters)[number]['value']>('all');
  const [carSearch, setCarSearch] = useState('');
  const filteredCarBrands = carBrands.filter((brand) => {
    const matchesFilter = activeCarFilter === 'all' || brand.country === activeCarFilter;
    const searchableText = `${brand.name} ${brand.models?.join(' ') ?? ''}`.toLowerCase();
    return matchesFilter && searchableText.includes(carSearch.trim().toLowerCase());
  });

  return (
    <>
      <BgHero
        image={heroImages.newTyre}
        eyebrow="Vehicle and tyre support in Dubai"
        title="Car and tyre brands"
        titleEm="we work with."
        subtitle="Explore supported vehicle makes, car models, and tyre brands for mobile tyre repair and fitting across Dubai. Confirm your exact fitment with our team."
        showButtons
      />

      <section className="section brands-directory" id="car-brands">
        <div className="container">
          <div className="section-head brands-section-head">
            <div>
              <span className="eyebrow">Cars, SUVs & vehicle models</span>
              <h2>Car brands we<br /><em>can help with.</em></h2>
            </div>
            <p className="head-paragraph">Our mobile tyre team supports a wide range of vehicles in Dubai, from everyday cars to luxury and performance models. This list includes both marques and specific models.</p>
          </div>
          <div className="brands-car-tools">
            <div className="brands-car-filters" role="tablist" aria-label="Filter car makes">
              {carFilters.map((filter) => (
                <button
                  key={filter.value}
                  className={activeCarFilter === filter.value ? 'gallery-filter active' : 'gallery-filter'}
                  role="tab"
                  aria-selected={activeCarFilter === filter.value}
                  onClick={() => setActiveCarFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <label className="brands-car-search">
              <Search size={17} aria-hidden="true" />
              <input
                type="search"
                value={carSearch}
                onChange={(event) => setCarSearch(event.target.value)}
                placeholder="Search makes or models"
                aria-label="Search car makes and models"
              />
            </label>
          </div>
          <p className="brands-car-result-count" aria-live="polite">Showing {filteredCarBrands.length} of {carBrands.length} car makes</p>
          {filteredCarBrands.length > 0 ? (
            <ul className="brands-car-grid" aria-label="Supported car brands and models">
              {filteredCarBrands.map((brand) => (
                <li className="brands-car-item" key={brand.name}>
                  <span className={`brands-car-logo${brand.lightLogo ? ' brands-car-logo-light' : ''}`}>
                    <img
                      src={`https://www.carlogos.org/car-logos/${brand.logoSlug}-logo.png`}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                    />
                  </span>
                  <span className="brands-car-copy">
                    <strong>{brand.name}</strong>
                    {brand.models && <small>{brand.models.join(' · ')}</small>}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="brands-car-empty">No matching car makes or models. Try another search.</p>
          )}
          <p className="brands-fitment-note"><ShieldCheck size={17} /> Exact fitment is confirmed against your vehicle details and tyre specification before we dispatch.</p>
        </div>
      </section>

      <section className="brands-directory-cta">
        <div className="container">
          <div className="about-inline-cta">
            <div>
              <span className="eyebrow">Mobile help for your vehicle</span>
              <h2>Ready to book a tyre service?</h2>
              <p>Send us your make, model and tyre size. We will confirm the right service for your car.</p>
            </div>
            <div className="about-inline-cta-actions">
              <a className="button" href={`tel:${phone}`}><Phone size={16} /> {phoneDisplay}</a>
              <a className="button whatsapp-button" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} /> WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section brands-tyres" id="tyre-brands">
        <div className="container">
          <div className="section-head brands-section-head">
            <div>
              <span className="eyebrow">Tyres for your next drive</span>
              <h2>Tyre brands<br /><em>to ask us about.</em></h2>
            </div>
            <p className="head-paragraph">Looking for a particular tyre brand in Dubai? Tell us your tyre size and preferred option. We will check current stock and confirm suitable choices before booking.</p>
          </div>
          <ul className="brands-tyre-grid" aria-label="Tyre brands to check for availability">
            {tyreBrands.map((brand) => (
              <li className="brands-car-item brands-tyre-item" key={brand.name}>
                {brand.logoSlug ? (
                  <span className="brands-car-logo brands-tyre-logo">
                    <img src={`https://www.carlogos.org/tire-logos/${brand.logoSlug}-logo.png`} alt={`${brand.name} logo`} loading="lazy" />
                  </span>
                ) : (
                  <span className="brands-tyre-wordmark" aria-hidden="true">{brand.wordmark}</span>
                )}
                <span className="brands-car-copy"><strong>{brand.name}</strong></span>
              </li>
            ))}
          </ul>
          <p className="brands-stock-note">Tyre brands and sizes are subject to stock. We confirm availability, specifications, and pricing with you before fitting.</p>
        </div>
      </section>

      <Testimonials />
      <Faq variant="brands" />
      <ContactSection eyebrow="Check your vehicle with us" title="Need help choosing" titleEm="the right tyre?" description="Share your car details and tyre size. Our Dubai team will confirm the available options and help you book." />
      <FinalCta />
    </>
  );
}