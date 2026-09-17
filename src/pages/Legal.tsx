import { heroImages, phoneDisplay } from '@/data/site';
import BgHero from '@/components/BgHero';
import Faq from '@/components/Faq';

export default function Legal({ terms = false }: { terms?: boolean }) {
  return (
    <>
      <BgHero
        image={heroImages.legal}
        eyebrow="Tyre Rescue Dubai"
        title={terms ? 'Terms & Conditions' : 'Privacy Policy'}
        subtitle="Please read this information carefully. It explains how we work and what you can expect from our service."
      />

      <section className="legal-page">
        <div className="container legal-inner">
          <p className="legal-updated">Last updated: September 2025</p>
          {terms ? (
            <>
              <h2>Using our service</h2>
              <p>By booking Tyre Rescue Dubai, you agree to provide accurate contact and location details so our team can reach you. Service availability and arrival times can vary based on traffic, weather, and demand.</p>
              <h2>Pricing and payment</h2>
              <p>We confirm the scope and price of work before starting. Additional work will only be carried out with your approval. We accept secure online payments and other payment methods communicated by our team.</p>
              <h2>Safety and responsibility</h2>
              <p>Our technicians work to professional standards and will advise if a vehicle is unsafe to drive. The customer remains responsible for following safety advice and providing a safe place for service where possible.</p>
              <h2>Contact</h2>
              <p>Questions about these terms can be directed to our team through WhatsApp or by calling {phoneDisplay}.</p>
            </>
          ) : (
            <>
              <h2>Information we collect</h2>
              <p>When you contact us, we may collect your name, phone number, location, vehicle details, and service request so we can provide roadside assistance and respond to your enquiry.</p>
              <h2>How we use information</h2>
              <p>We use this information to arrange visits, communicate updates, provide quotes, and improve our service. We do not sell your personal information.</p>
              <h2>Keeping information safe</h2>
              <p>We take reasonable steps to protect the information you share with us and only keep it for as long as needed for business, legal, or customer service purposes.</p>
              <h2>Questions</h2>
              <p>For privacy questions, contact Tyre Rescue Dubai through WhatsApp or call {phoneDisplay}.</p>
            </>
          )}
        </div>
      </section>

      <Faq variant="default" />
    </>
  );
}
