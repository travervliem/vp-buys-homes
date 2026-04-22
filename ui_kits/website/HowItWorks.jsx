// HowItWorks.jsx
const STEPS = [
  { n: '01', t: 'Tell us about the house', p: 'Share the address, condition, and timing. Takes under two minutes — online or over the phone.' },
  { n: '02', t: 'Get a written offer', p: 'We review comparable sales and needed work, then send a no-obligation cash offer within 24 hours.' },
  { n: '03', t: 'Pick your close date', p: 'Close in as little as 7 days with our local attorney, or on your schedule. We handle the paperwork.' },
];
const HowItWorks = () => (
  <section className="sec" id="how">
    <div className="container">
      <div className="sec-head">
        <div className="eyb">The Process</div>
        <h2 className="sec-h">How it works — three steps, seven days</h2>
        <p className="sec-sub">Simple, fast, predictable. No surprises between the first call and the closing table.</p>
      </div>
      <div className="steps">
        {STEPS.map(s => (
          <div className="step" key={s.n}>
            <div className="big">{s.n}</div>
            <div className="ct">
              <div className="num">Step {s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
window.HowItWorks = HowItWorks;
