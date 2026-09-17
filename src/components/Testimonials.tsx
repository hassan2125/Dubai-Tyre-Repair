import { Star } from 'lucide-react';
import { testimonialsData } from '@/data/site';

export default function Testimonials() {
  const doubled = [...testimonialsData, ...testimonialsData];
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Real people. Real relief.</span>
          <h2>Good service travels fast.</h2>
          <p>Over 5,000 drivers across Dubai have trusted Tyre Rescue to get them moving again.</p>
        </div>
      </div>
      <div className="testimonial-carousel">
        <div className="testimonial-track">
          {doubled.map((item, index) => (
            <article className="testimonial" key={`${item.name}-${index}`}>
              <div className="testimonial-top">
                <div className="testimonial-stars">
                  {Array.from({ length: item.rating }).map((_, i) => <Star key={i} size={15} className="star-filled" />)}
                </div>
                <span className="quote-mark">"</span>
              </div>
              <p>{item.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{item.name.charAt(0)}</div>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.location}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
