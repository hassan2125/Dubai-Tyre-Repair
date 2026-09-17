import { Battery, Car, Gauge, Sparkles, Wrench, Zap, type LucideIcon } from 'lucide-react';

export const phone = '+971552978485';
export const phoneDisplay = '+971 55 297 8485';
export const whatsapp = 'https://wa.me/971552978485';
export const email = 'info@tyrerescue.ae';
export const address = 'Dubai, United Arab Emirates';
export const workingHours = 'Open 24 Hours · 7 Days a Week';

export const heroImages = {
  home: 'https://images.pexels.com/photos/38581983/pexels-photo-38581983.jpeg?auto=compress&cs=tinysrgb&w=1600',
  about: 'https://images.pexels.com/photos/7019602/pexels-photo-7019602.jpeg?auto=compress&cs=tinysrgb&w=1600',
  services: 'https://images.pexels.com/photos/37002235/pexels-photo-37002235.jpeg?auto=compress&cs=tinysrgb&w=1600',
  contact: 'https://images.pexels.com/photos/4857606/pexels-photo-4857606.jpeg?auto=compress&cs=tinysrgb&w=1600',
  flatTyre: 'https://images.pexels.com/photos/38581983/pexels-photo-38581983.jpeg?auto=compress&cs=tinysrgb&w=1600',
  mobileFitting: 'https://images.pexels.com/photos/6870331/pexels-photo-6870331.jpeg?auto=compress&cs=tinysrgb&w=1600',
  newTyre: 'https://images.pexels.com/photos/17600886/pexels-photo-17600886.jpeg?auto=compress&cs=tinysrgb&w=1600',
  spareTyre: 'https://images.pexels.com/photos/5733659/pexels-photo-5733659.jpeg?auto=compress&cs=tinysrgb&w=1600',
  emergency: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1600',
  battery: 'https://images.pexels.com/photos/8478228/pexels-photo-8478228.jpeg?auto=compress&cs=tinysrgb&w=1600',
  legal: 'https://images.pexels.com/photos/4062376/pexels-photo-4062376.jpeg?auto=compress&cs=tinysrgb&w=1600',
  cta: 'https://images.pexels.com/photos/4062376/pexels-photo-4062376.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  { slug: 'flat-tyre-repair', title: 'Flat Tyre Repair', short: 'Fast, safe puncture repair and flat tyre assistance wherever you are in Dubai.', icon: Wrench, image: heroImages.flatTyre },
  { slug: 'mobile-tyre-fitting', title: 'Mobile Tyre Fitting', short: 'Professional tyre fitting at your home, office, or roadside across Dubai.', icon: Gauge, image: heroImages.mobileFitting },
  { slug: 'new-tyre-replacement', title: 'New Tyre Replacement', short: 'Quality tyres supplied and fitted on the spot, with expert guidance.', icon: Sparkles, image: heroImages.newTyre },
  { slug: 'spare-tyre-replacement', title: 'Spare Tyre Replacement', short: 'Safe spare wheel fitting so you can get back on the road with confidence.', icon: Car, image: heroImages.spareTyre },
  { slug: 'emergency-tyre-repair', title: 'Emergency Tyre Repair', short: '24/7 roadside support for urgent tyre problems across Dubai.', icon: Zap, image: heroImages.emergency },
  { slug: 'battery-replacement', title: 'Battery Replacement', short: 'Reliable car battery delivery and installation at your location.', icon: Battery, image: heroImages.battery },
];

export interface BrandLogo {
  name: string;
  logo: string;
}

export const brandLogos: BrandLogo[] = [
  { name: 'Toyota', logo: 'https://www.carlogos.org/car-logos/toyota-logo.png' },
  { name: 'Mercedes-Benz', logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png' },
  { name: 'BMW', logo: 'https://www.carlogos.org/car-logos/bmw-logo.png' },
  { name: 'Nissan', logo: 'https://www.carlogos.org/car-logos/nissan-logo.png' },
  { name: 'Ford', logo: 'https://www.carlogos.org/car-logos/ford-logo.png' },
  { name: 'Honda', logo: 'https://www.carlogos.org/car-logos/honda-logo.png' },
  { name: 'Audi', logo: 'https://www.carlogos.org/car-logos/audi-logo.png' },
  { name: 'Lexus', logo: 'https://www.carlogos.org/car-logos/lexus-logo.png' },
  { name: 'Porsche', logo: 'https://www.carlogos.org/car-logos/porsche-logo.png' },
  { name: 'Volkswagen', logo: 'https://www.carlogos.org/car-logos/volkswagen-logo.png' },
  { name: 'Land Rover', logo: 'https://www.carlogos.org/car-logos/land-rover-logo.png' },
  { name: 'Jeep', logo: 'https://www.carlogos.org/car-logos/jeep-logo.png' },
  { name: 'Hyundai', logo: 'https://www.carlogos.org/car-logos/hyundai-logo.png' },
  { name: 'Kia', logo: 'https://www.carlogos.org/car-logos/kia-logo.png' },
  { name: 'Tesla', logo: 'https://www.carlogos.org/car-logos/tesla-logo.png' },
  { name: 'Volvo', logo: 'https://www.carlogos.org/car-logos/volvo-logo.png' },
  { name: 'Mazda', logo: 'https://www.carlogos.org/car-logos/mazda-logo.png' },
  { name: 'Mitsubishi', logo: 'https://www.carlogos.org/car-logos/mitsubishi-logo.png' },
  { name: 'Chevrolet', logo: 'https://www.carlogos.org/car-logos/chevrolet-logo.png' },
  { name: 'GMC', logo: 'https://www.carlogos.org/car-logos/gmc-logo.png' },
  { name: 'MG', logo: 'https://www.carlogos.org/car-logos/mg-logo.png' },
  { name: 'Geely', logo: 'https://www.carlogos.org/car-logos/geely-logo.png' },
  { name: 'BYD', logo: 'https://www.carlogos.org/car-logos/byd-logo.png' },
  { name: 'Chery', logo: 'https://www.carlogos.org/car-logos/chery-logo.png' },
  { name: 'GWM', logo: 'https://www.carlogos.org/car-logos/great-wall-logo.png' },
  { name: 'Haval', logo: 'https://www.carlogos.org/car-logos/haval-logo.png' },
  { name: 'Jaguar', logo: 'https://www.carlogos.org/car-logos/jaguar-logo.png' },
  { name: 'Bentley', logo: 'https://www.carlogos.org/car-logos/bentley-logo.png' },
  { name: 'Mini', logo: 'https://www.carlogos.org/car-logos/mini-logo.png' },
  { name: 'Rolls-Royce', logo: 'https://www.carlogos.org/car-logos/rolls-royce-logo.png' },
];

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  { quote: 'My tyre went flat near Downtown at 11pm. They arrived quickly, fixed it cleanly, and I was home in no time.', name: 'Omar A.', location: 'Downtown Dubai', rating: 5 },
  { quote: 'The whole experience was incredibly easy. I shared my location on WhatsApp and the team handled everything.', name: 'Sarah M.', location: 'Jumeirah', rating: 5 },
  { quote: 'Professional, honest and fast. The new tyres were fitted at my office while I carried on with my day.', name: 'Daniel R.', location: 'Business Bay', rating: 5 },
  { quote: 'Called them at 2am on Sheikh Zayed Road. They were there in 15 minutes and had me moving again fast.', name: 'Khalid S.', location: 'Sheikh Zayed Road', rating: 5 },
  { quote: 'Booked a battery replacement through WhatsApp. They arrived the same morning with the right battery.', name: 'Priya N.', location: 'Dubai Marina', rating: 5 },
  { quote: 'Best roadside service I have used in Dubai. Fair price, no surprises, and very professional staff.', name: 'Ahmed F.', location: 'Al Barsha', rating: 5 },
  { quote: 'My spare tyre was fitted properly and they even checked the other wheels for me. Great attention to detail.', name: 'Lisa K.', location: 'Arabian Ranches', rating: 5 },
  { quote: 'I was stranded near Jebel Ali and they reached me faster than anyone else I called. Lifesavers.', name: 'Rajesh P.', location: 'Jebel Ali', rating: 5 },
  { quote: 'The mobile fitting service is brilliant. I did not have to go anywhere or wait in a queue. Highly recommend.', name: 'Fatima H.', location: 'Mirdif', rating: 5 },
  { quote: 'Very transparent about pricing. They told me the cost before starting and stuck to it. No hidden charges.', name: 'James W.', location: 'JLT', rating: 5 },
  { quote: 'They came to my office car park and changed all four tyres. I barely had to leave my desk.', name: 'Noura A.', location: 'DIFC', rating: 5 },
  { quote: 'Emergency call at 6am before a flight. They understood the urgency and prioritised me. Made my flight.', name: 'Vikram S.', location: 'Silicon Oasis', rating: 5 },
  { quote: 'The technician was knowledgeable and explained what had caused the puncture. Very educational and helpful.', name: 'Elena V.', location: 'Dubai Hills', rating: 5 },
  { quote: 'I compared three services and Tyre Rescue was the most responsive and reasonably priced. Will use again.', name: 'Mohammed R.', location: 'Deira', rating: 5 },
  { quote: 'They sorted a tricky spare tyre swap that two other companies could not handle. Very capable team.', name: 'Sophie L.', location: 'The Greens', rating: 5 },
  { quote: 'Friendly, efficient and they cleaned up after the work. Small things like that make a big difference.', name: 'Hassan T.', location: 'Al Quoz', rating: 5 },
  { quote: 'Got a 5% discount on my new tyres which was a nice surprise. The fitting was quick and professional.', name: 'Aisha M.', location: 'Dubai Creek Harbour', rating: 5 },
  { quote: 'I was worried about being overcharged as a woman but they were completely fair and honest. Trustworthy team.', name: 'Grace O.', location: 'Motor City', rating: 5 },
];

export interface ServiceDetail {
  title: string;
  kicker: string;
  intro: string;
  image: string;
  included: string[];
  detail: string;
  gallery: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'flat-tyre-repair': {
    title: 'Flat Tyre Repair',
    kicker: "A flat doesn't have to ruin your day.",
    intro: 'Fast, professional puncture repair and flat tyre assistance anywhere in Dubai. We come to your car, assess the damage, and get you safely moving again.',
    image: heroImages.flatTyre,
    included: ['Puncture and tread inspection', 'On-site puncture repair where safe', 'Air pressure and valve check', 'Spare wheel fitting if needed'],
    detail: "Whether you're outside a mall, on Sheikh Zayed Road, or parked at home, our mobile tyre repair team arrives equipped to handle the most common causes of a flat.",
    gallery: [
      'https://images.pexels.com/photos/38581983/pexels-photo-38581983.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/12555009/pexels-photo-12555009.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
  },
  'mobile-tyre-fitting': {
    title: 'Mobile Tyre Fitting',
    kicker: 'Tyre fitting, without the tyre shop.',
    intro: 'Buy convenience back. Our mobile tyre fitting service brings professional installation to your home, office, or roadside location across Dubai.',
    image: heroImages.mobileFitting,
    included: ['Tyre fitting at your location', 'Wheel removal and refitting', 'Inflation to manufacturer spec', 'Final safety and pressure check'],
    detail: 'Our mobile workshops are set up to fit your tyres safely and efficiently, so you can keep your day moving while we take care of the car.',
    gallery: [
      'https://images.pexels.com/photos/6870331/pexels-photo-6870331.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/3807649/pexels-photo-3807649.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/3807450/pexels-photo-3807450.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
  },
  'new-tyre-replacement': {
    title: 'New Tyre Replacement',
    kicker: 'The right tyre makes every drive better.',
    intro: 'Get expert advice, quality tyres, and professional installation in one simple visit. We supply and fit new tyres for cars across Dubai.',
    image: heroImages.newTyre,
    included: ['Tyre size and fitment guidance', 'Premium and value options', 'Mobile installation', 'Balancing and pressure check'],
    detail: 'We help you choose a tyre that fits your car, your driving, and your budget. Every new tyre comes with our 5% offer and is fitted by a trained technician.',
    gallery: [
      'https://images.pexels.com/photos/17600886/pexels-photo-17600886.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/34357281/pexels-photo-34357281.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
  },
  'spare-tyre-replacement': {
    title: 'Spare Tyre Replacement',
    kicker: 'Your spare is there for a reason.',
    intro: 'Need your spare fitted, replaced, or checked? Our mobile team makes the process safe and straightforward wherever you are.',
    image: heroImages.spareTyre,
    included: ['Safe spare wheel fitting', 'Correct torque and inflation', 'Spare tyre condition check', 'Advice on replacement options'],
    detail: "A spare wheel is only useful if it is ready to go. We'll fit it correctly and check what caused the issue, so you know what to do next.",
    gallery: [
      'https://images.pexels.com/photos/5733659/pexels-photo-5733659.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/3807649/pexels-photo-3807649.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
  },
  'emergency-tyre-repair': {
    title: 'Emergency Tyre Repair',
    kicker: "When the road can't wait.",
    intro: '24/7 roadside tyre assistance for urgent situations in Dubai. One call or WhatsApp message gets a trained mobile specialist headed your way.',
    image: heroImages.emergency,
    included: ['24/7 emergency dispatch', 'Roadside safety assessment', 'Tyre repair or spare fitting', 'Clear pricing before we start'],
    detail: "Breakdowns are stressful enough. We keep our response calm, our updates clear, and our work professional from the first message to the moment you're moving again.",
    gallery: [
      'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/38581983/pexels-photo-38581983.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/12555009/pexels-photo-12555009.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
  },
  'battery-replacement': {
    title: 'Battery Replacement',
    kicker: 'A fresh start for your car.',
    intro: 'Dead battery? Our mobile battery replacement service delivers and installs the right battery at your location, day or night.',
    image: heroImages.battery,
    included: ['Battery health assessment', 'Correct battery matching', 'Mobile delivery and fitting', 'Starting and electrical check'],
    detail: "From a car that won't start in your driveway to a warning light at the office, we test first and replace only when it's the right solution for your vehicle.",
    gallery: [
      'https://images.pexels.com/photos/8478228/pexels-photo-8478228.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/6907042/pexels-photo-6907042.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
  },
};

export interface GalleryItem {
  image: string;
  title: string;
  category: string;
  span?: boolean;
}

export const galleryItems: GalleryItem[] = [
  { image: 'https://images.pexels.com/photos/38581983/pexels-photo-38581983.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Roadside Flat Tyre Repair', category: 'Flat Tyre Repair', span: true },
  { image: 'https://images.pexels.com/photos/6870331/pexels-photo-6870331.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Mobile Tyre Fitting', category: 'Mobile Tyre Fitting' },
  { image: 'https://images.pexels.com/photos/17600886/pexels-photo-17600886.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'New Tyre Installation', category: 'New Tyre Replacement' },
  { image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Emergency Roadside Assistance', category: 'Emergency Tyre Repair' },
  { image: 'https://images.pexels.com/photos/8478228/pexels-photo-8478228.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Battery Replacement', category: 'Battery Replacement', span: true },
  { image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Tyre Pressure Check', category: 'Mobile Tyre Fitting' },
  { image: 'https://images.pexels.com/photos/12555009/pexels-photo-12555009.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Wheel Repair Team', category: 'Flat Tyre Repair' },
  { image: 'https://images.pexels.com/photos/3807649/pexels-photo-3807649.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Professional Tyre Alignment', category: 'Mobile Tyre Fitting' },
  { image: 'https://images.pexels.com/photos/6907042/pexels-photo-6907042.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Battery Jump Start', category: 'Battery Replacement' },
  { image: 'https://images.pexels.com/photos/34357281/pexels-photo-34357281.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Premium Tyre Stock', category: 'New Tyre Replacement', span: true },
  { image: 'https://images.pexels.com/photos/3807450/pexels-photo-3807450.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Tyre Inflation Service', category: 'Mobile Tyre Fitting' },
  { image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=900', title: 'Wheel Alignment Check', category: 'New Tyre Replacement' },
];
