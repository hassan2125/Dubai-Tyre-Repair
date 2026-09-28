interface HowItWorksProps {
  className?: string;
}

export default function HowItWorks({ className = '' }: HowItWorksProps) {
  return (
    <section className={`section how-it-works ${className}`}>
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Simple by design</span>
          <h2>Help is three taps away.</h2>
          <p>We built our service around one thing: getting you moving with less fuss.</p>
        </div>
        <div className="steps-grid">
          {([['01', 'Tell us what happened', 'Message us on WhatsApp or call our team.'], ['02', 'Share your location', 'Drop a pin or tell us your area in Dubai.'], ['03', 'We get you moving', 'Our mobile expert arrives and sorts it on the spot.']] as const).map(([number, title, text]) => (
            <div className="step" key={number} data-number={number}>
              <span className="step-number">{Number(number)}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}