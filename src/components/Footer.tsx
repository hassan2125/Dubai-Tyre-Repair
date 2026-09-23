import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { navigate } from '@/lib/navigate';
import { phone, phoneDisplay, whatsapp, email, address, workingHours, services } from '@/data/site';
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from '@/components/Icons';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p className="footer-copy">Dubai's dependable mobile tyre repair and roadside assistance team. We come to you, wherever you are.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FacebookIcon size={17} /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon size={17} /></a>
            <a href="#" aria-label="TikTok"><TikTokIcon size={17} /></a>
          </div>
          <div className="social-proof"><span className="rating">★★★★★</span><span>4.9 / 5 from 500+ reviews</span></div>
        </div>
        <div>
          <h4>Explore</h4>
          <button onClick={() => navigate('/about')}>About us</button>
          <button onClick={() => navigate('/services')}>All Services</button>
          <button onClick={() => navigate('/gallery')}>Gallery</button>
          <button onClick={() => navigate('/contact')}>Contact</button>
          <button onClick={() => navigate('/privacy-policy')}>Privacy policy</button>
          <button onClick={() => navigate('/terms-conditions')}>Terms & conditions</button>
        </div>
        <div>
          <h4>Services</h4>
          {services.map((service) => <button key={service.slug} onClick={() => navigate(`/${service.slug}`)}>{service.title}</button>)}
        </div>
        <div className="footer-contact">
          <h4>Need help now?</h4>
          <p>Share your location and we'll take it from there.</p>
          <div className="footer-contact-details">
            <a href={`tel:${phone}`}><Phone size={15} /> {phoneDisplay}</a>
            <a href={`mailto:${email}`}><Mail size={15} /> {email}</a>
            <span className="footer-detail-row"><MapPin size={15} /> {address}</span>
            <span className="footer-detail-row"><Clock size={15} /> {workingHours}</span>
          </div>
          <a className="footer-wa" href={whatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} /> WhatsApp us</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2025 Car Tyre Repair Dubai. All rights reserved.</span>
        <span>Powered by <a href="https://prismxmedia.com/" target="_blank" rel="noreferrer" className="footer-credit">Prismx Media</a></span>
      </div>
    </footer>
  );
}
