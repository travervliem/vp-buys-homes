// Situations.jsx
const SITUATIONS = [
  { tag: 'Time-sensitive', t: 'Facing foreclosure', p: 'We can often make an offer within 48 hours and coordinate with your lender before the sale date.' },
  { tag: 'Estate', t: 'Inherited property', p: 'Out-of-state heirs welcome. We handle deed research and work with probate attorneys.' },
  { tag: 'Tenants', t: 'Tired of being a landlord', p: 'Problem tenants, back rent, deferred maintenance — we buy occupied properties as-is.' },
  { tag: 'Condition', t: 'Major repairs needed', p: 'Roof, foundation, mold, fire damage, hoarder situation. Nothing too rough.' },
  { tag: 'Life change', t: 'Divorce or relocation', p: 'Private, fast, and clean. No public listings, no parade of showings.' },
  { tag: 'Financial', t: 'Behind on payments', p: 'Medical bills, job change, rising rates. We can usually close before the next payment is due.' },
];
const Situations = () => (
  <section className="sec" id="situations">
    <div className="container">
      <div className="sec-head">
        <div className="eyb">Common Situations</div>
        <h2 className="sec-h">If any of these sound familiar — we can help</h2>
        <p className="sec-sub">We've bought houses in every situation on this list. Most sellers are surprised how straightforward the path is once we're on the phone.</p>
      </div>
      <div className="sit-grid">
        {SITUATIONS.map(s => (
          <div className="sit" key={s.t}>
            <div className="tag">{s.tag}</div>
            <h4>{s.t}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
window.Situations = Situations;
