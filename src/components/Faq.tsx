import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const defaultFaqs: FaqItem[] = [
  { q: 'How quickly can you arrive after I call?', a: 'Our target response time is 10 minutes across Dubai. Exact arrival depends on traffic and your location, but we keep you updated by WhatsApp throughout.' },
  { q: 'Which areas of Dubai do you cover?', a: 'We cover all of Dubai including Marina, JBR, Downtown, DIFC, Business Bay, Jumeirah, Al Barsha, Deira, Mirdif, Silicon Oasis, Dubai Hills, Arabian Ranches, Motor City, Al Quoz, Jebel Ali, and everywhere in between.' },
  { q: 'Do I need to tow my car to a garage?', a: 'No. Our mobile team brings the tools, equipment, and tyres to your location. We handle everything on the spot — no towing required in most cases.' },
  { q: 'What payment methods do you accept?', a: 'We accept cash, credit and debit card, and online payment. All pricing is transparent and confirmed before any work begins.' },
  { q: 'Is your service available 24 hours a day?', a: 'Yes. We operate 24 hours a day, 7 days a week, including public holidays. You can reach us any time by WhatsApp or phone.' },
  { q: 'Do you provide a warranty on your work?', a: 'Yes. All our services come with a warranty. If you experience any issue related to our work, contact us and we will resolve it promptly at no extra cost.' },
];

const serviceFaqs: FaqItem[] = [
  { q: 'Can you repair a completely flat tyre on the roadside?', a: 'In most cases, yes. If the tyre is repairable, we fix it on the spot. If it is too damaged, we will fit your spare or supply a replacement tyre.' },
  { q: 'How do I know if my tyre can be repaired or needs replacing?', a: 'Our technician will inspect the tyre on arrival and give you an honest assessment. Punctures in the tread area can usually be repaired; sidewall damage typically requires replacement.' },
  { q: 'What brands of tyres do you stock?', a: 'We carry a range of premium and budget-friendly tyre brands to suit different vehicles and budgets. Our team will help you choose the best fit for your car.' },
  { q: 'Can you fit new tyres at my home or office?', a: 'Absolutely. Mobile tyre fitting is one of our most popular services. We come to you, fit the tyres, balance the wheels, and check pressure — all at your location.' },
  { q: 'How long does a typical tyre repair or replacement take?', a: 'A puncture repair takes around 20–30 minutes. A full tyre replacement usually takes 30–45 minutes depending on the vehicle and the number of tyres being changed.' },
  { q: 'Do you offer a discount on new tyres?', a: 'Yes. We currently offer a flat 5% discount on every new tyre. Mention this when you contact us to make sure it is applied to your order.' },
];

const aboutFaqs: FaqItem[] = [
  { q: 'How long has Car Tyre Repair Dubai been operating?', a: 'We have been serving Dubai drivers for several years, building a reputation for fast response, honest service, and professional results that have earned us 5,000+ satisfied customers.' },
  { q: 'Are your technicians trained and certified?', a: 'Yes. All of our mobile technicians are trained professionals with hands-on experience across a wide range of vehicle makes and models. We invest in ongoing training to keep our standards high.' },
  { q: 'What makes Car Tyre Repair Dubai different from a regular garage?', a: 'We come to you. There is no waiting room, no appointment queue, and no need to arrange a tow. Our mobile workshops are fully equipped to handle most tyre and battery issues at your location.' },
  { q: 'Do you work with all car brands?', a: 'Yes. We service all major brands including Toyota, BMW, Mercedes-Benz, Nissan, Ford, Audi, Lexus, Hyundai, Kia, Land Rover, and many more — whether Japanese, German, American, Chinese, or British.' },
  { q: 'Can businesses use your service for their fleet?', a: 'Yes. We offer fleet support for companies across Dubai. If you manage a fleet and need a reliable mobile tyre partner, get in touch and we will arrange a suitable agreement.' },
  { q: 'How do I trust that your pricing is fair?', a: 'We confirm the price before starting any work. There are no hidden charges and no surprises. If the job changes in scope, we will tell you before proceeding.' },
];

const contactFaqs: FaqItem[] = [
  { q: 'What is the fastest way to reach you?', a: 'WhatsApp is the quickest. Send us a message, share your location, and describe the issue. Our team will respond and dispatch help immediately.' },
  { q: 'Can I schedule a service in advance?', a: 'Yes. You can book a mobile fitting, new tyre installation, or battery replacement in advance by WhatsApp or through the contact form on this page.' },
  { q: 'What information should I have ready when I call?', a: 'Your location or nearest landmark, your vehicle make and model, a brief description of the problem, and whether you have a spare tyre available.' },
  { q: 'Do you respond to WhatsApp messages quickly?', a: 'Yes. We monitor WhatsApp around the clock. For emergency situations, a call is the fastest way to reach us, but WhatsApp messages are usually answered within minutes.' },
  { q: 'What if I am not sure what service I need?', a: 'Just describe what is happening with your car and our team will guide you to the right solution. You do not need to diagnose the problem yourself.' },
  { q: 'Is there a call-out fee?', a: 'We do not charge a separate call-out fee. Our pricing covers the full service, and all costs are confirmed before any work begins.' },
];

const faqMap: Record<string, FaqItem[]> = {
  default: defaultFaqs,
  service: serviceFaqs,
  about: aboutFaqs,
  contact: contactFaqs,
};

interface FaqProps {
  variant?: 'default' | 'service' | 'about' | 'contact';
}

export default function Faq({ variant = 'default' }: FaqProps) {
  const items = faqMap[variant];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Frequently asked questions</span>
          <h2>Got a question?<br /><em>We've got the answer.</em></h2>
          <p>Everything you need to know before booking. If something isn't covered here, just ask us directly.</p>
        </div>
        <div className="faq-list">
          {items.map((item, index) => (
            <div className={`faq-item ${open === index ? 'faq-open' : ''}`} key={index}>
              <button className="faq-trigger" onClick={() => setOpen(open === index ? null : index)}>
                <span>{item.q}</span>
                <span className="faq-icon">{open === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
              </button>
              {open === index && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
