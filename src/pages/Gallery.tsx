import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { navigate } from '@/lib/navigate';
import { galleryItems, heroImages, services, whatsapp } from '@/data/site';
import { WhatsAppIcon } from '@/components/Icons';
import BgHero from '@/components/BgHero';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Faq from '@/components/Faq';

const categories = ['All', ...services.map(s => s.title)];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const items = filter === 'All' ? galleryItems : galleryItems.filter(i => i.category === filter);

  return (
    <>
      <BgHero
        image={galleryItems[0].image}
        eyebrow="Our work in action"
        title="See what we do,"
        titleEm="on the road."
        subtitle="Real work, real results. Browse photos from our mobile tyre and roadside assistance jobs across Dubai."
        showButtons
      />

      <section className="section gallery-section">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">Work gallery</span>
            <h2>Every job tells a story.</h2>
            <p>From roadside punctures to full tyre replacements, here's a look at the work our mobile team handles every day across Dubai.</p>
          </div>

          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={filter === cat ? 'gallery-filter active' : 'gallery-filter'}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-masonry">
            {items.map((item, index) => (
              <button
                className={item.span ? 'gallery-tile gallery-tile-tall' : 'gallery-tile'}
                key={`${item.title}-${index}`}
                onClick={() => setLightbox(index)}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-tile-overlay">
                  <span className="gallery-tile-cat">{item.category}</span>
                  <h3>{item.title}</h3>
                  <span className="gallery-tile-arrow"><ArrowUpRight size={20} /></span>
                </div>
              </button>
            ))}
          </div>

          <div className="gallery-cta" style={{ backgroundImage: `url(${heroImages.newTyre})` }}>
            <span className="eyebrow">Need help like this?</span>
            <h3>We're ready to get you moving.</h3>
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={17} /> Book a Service
            </a>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={items[lightbox].image} alt={items[lightbox].title} />
            <div className="gallery-lightbox-info">
              <span className="gallery-tile-cat">{items[lightbox].category}</span>
              <h3>{items[lightbox].title}</h3>
              <button
                className="button button-sm"
                onClick={() => {
                  const svc = services.find(s => s.title === items[lightbox].category);
                  if (svc) navigate(`/${svc.slug}`);
                }}
              >
                View this service <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}

      <Testimonials />
      <Faq variant="default" />
      <ContactSection eyebrow="Inspired to book?" title="Let's get you" titleEm="moving again." description="Tell us what you need and we'll take care of the rest." />
      <FinalCta />
    </>
  );
}
