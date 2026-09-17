import { Eye, MapPin, ShieldCheck, Target, Wrench, Clock, ThumbsUp, Heart } from 'lucide-react';
import { heroImages } from '@/data/site';
import BgHero from '@/components/BgHero';
import BrandCarousel from '@/components/BrandCarousel';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Faq from '@/components/Faq';

export default function About() {
  return (
    <>
      <BgHero
        image={heroImages.about}
        eyebrow="About Tyre Rescue Dubai"
        title="The people behind"
        titleEm="your peace of mind."
        subtitle="We're a mobile-first team of tyre specialists making Dubai's roads a little less stressful, one fast response at a time."
        showButtons
      />

      <section className="section about-intro">
        <div className="container split-grid">
          <div className="split-copy">
            <span className="eyebrow">More than a quick fix</span>
            <h2>We bring the workshop<br /><em>to your street.</em></h2>
            <p>Tyre Rescue Dubai started with a simple belief: needing help on the road shouldn't mean losing half your day. Our trained mobile team arrives with the right tools, the right tyres, and the calm expertise to get the job done properly.</p>
            <p style={{ marginTop: '16px' }}>From a puncture outside your villa to a new set of tyres at your office, we keep things transparent, professional, and focused on getting you safely on your way.</p>
            <div className="about-signature"><strong>Tyre Rescue Dubai</strong><span>Fast response. Fair advice. Every time.</span></div>
          </div>
          <div className="split-image">
            <img src={heroImages.about} alt="Tyre Rescue Dubai team at work" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story-grid">
          <div className="about-story-img">
            <img src="https://images.pexels.com/photos/13256066/pexels-photo-13256066.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Dubai skyline at night" loading="lazy" />
          </div>
          <div className="about-story-copy">
            <span className="eyebrow">Our story</span>
            <h2>Built for Dubai's<br /><em>fast-moving drivers.</em></h2>
            <p>Dubai doesn't slow down, and neither do we. Tyre Rescue Dubai was founded to solve a problem every driver in this city knows: the frustration of waiting hours for help that should arrive in minutes. We built a mobile-first service that comes to you, whether you're parked at a mall, stuck on Sheikh Zayed Road, or at home on a Friday morning.</p>
            <div className="about-story-points">
              <div className="about-story-point">
                <span><Clock size={20} /></span>
                <div><strong>Response when it matters</strong><small>Our team is dispatched quickly, with live updates from the first message.</small></div>
              </div>
              <div className="about-story-point">
                <span><ThumbsUp size={20} /></span>
                <div><strong>Trusted by thousands</strong><small>Over 5,000 drivers across Dubai have chosen us for honest, professional help.</small></div>
              </div>
              <div className="about-story-point">
                <span><Heart size={20} /></span>
                <div><strong>Care in every job</strong><small>From the smallest puncture to a full set of new tyres, we treat your car like our own.</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-numbers">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">By the numbers</span>
            <h2>What our work<br /><em>looks like.</em></h2>
          </div>
          <div className="about-stats-vertical">
            <div className="big-stat"><strong>5K<span>+</span></strong><span>customers helped</span></div>
            <div className="big-stat"><strong>24<span>/7</span></strong><span>roadside availability</span></div>
            <div className="big-stat"><strong>10<span>m</span></strong><span>target response time</span></div>
            <div className="big-stat"><strong>100<span>%</span></strong><span>mobile service</span></div>
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section className="section mvv-section">
        <div className="container">
          <div className="section-head centered">
            <span className="eyebrow">What drives us</span>
            <h2>Mission, vision<br /><em>&amp; values.</em></h2>
          </div>

          <div className="mvv-grid">
            <div className="mvv-card mvv-mission">
              <div className="mvv-card-body">
                <span className="mvv-icon"><Target size={24} /></span>
                <h3>Our Mission</h3>
                <p>To make roadside tyre help fast, fair, and stress-free for every driver in Dubai. We bring professional service directly to you, so a flat tyre or dead battery never ruins your day.</p>
              </div>
            </div>

            <div className="mvv-card mvv-vision">
              <div className="mvv-card-body">
                <span className="mvv-icon"><Eye size={24} /></span>
                <h3>Our Vision</h3>
                <p>To be Dubai's most trusted mobile roadside partner, known for honest advice, rapid response, and a standard of care that turns a stressful moment into a simple one.</p>
              </div>
            </div>
          </div>

          <div className="mvv-values-head">
            <span className="eyebrow">What we stand for</span>
            <h3>The values behind every job.</h3>
          </div>

          <div className="value-grid">
            {([
              [ShieldCheck, 'Safety first', 'Every repair is done with the right equipment and a safety check before you drive away.'],
              [Wrench, 'Properly equipped', 'Our vans are mobile workshops, stocked for the common problems Dubai drivers face.'],
              [MapPin, 'Dubai-wide', 'From Marina to Mirdif, we know the roads and we know how to reach you quickly.'],
              [Target, 'Honest pricing', 'We confirm the scope and price before starting. No surprises, no hidden charges.'],
              [Eye, 'Clear communication', 'From the first message to the final check, we keep you informed at every step.'],
              [Wrench, 'Expert care', 'Trained technicians who treat your car with the same respect they would their own.'],
            ] as const).map(([Icon, title, text]) => (
              <div className="value" key={title}>
                <span className="value-icon-wrap"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Faq variant="about" />
      <ContactSection eyebrow="We're ready when you are" title="Have a question?" titleEm="Talk to us." description="Our friendly team can help you choose the right service for your car." />
      <FinalCta />
    </>
  );
}
