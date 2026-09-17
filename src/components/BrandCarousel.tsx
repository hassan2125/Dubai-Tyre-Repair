import { brandLogos } from '@/data/site';

export default function BrandCarousel() {
  const doubled = [...brandLogos, ...brandLogos];
  return (
    <section className="brand-section">
      <div className="container">
        <span className="eyebrow">We know your car</span>
        <h3>Trusted across the world's leading brands</h3>
        <div className="brand-window">
          <div className="brand-track">
            {doubled.map((brand, index) => (
              <span className="brand-chip" key={`${brand.name}-${index}`}>
                <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
                <span className="brand-name">{brand.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
