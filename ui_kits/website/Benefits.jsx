// Benefits.jsx
const BEN = [
  { i: '$', t: 'No fees, no commissions', p: 'Keep the difference. Standard closing costs covered. Your net is clear from the first offer.' },
  { i: '✓', t: 'As-is — no repairs, no cleaning', p: 'Leave what you want behind. We buy foundation issues, roof damage, hoarder homes, and estates.' },
  { i: '→', t: 'You pick the close date', p: 'Need to close in a week? Prefer 60 days? Our local closing attorney works on your schedule.' },
  { i: '★', t: 'Local — we know the market', p: 'Southeast Georgia specialists since 2018. Bulloch, Chatham, Effingham counties are our backyard.' },
];
const Benefits = () => (
  <section className="sec alt">
    <div className="container">
      <div className="sec-head">
        <div className="eyb">Why VP Equities</div>
        <h2 className="sec-h">A local firm — not a call center</h2>
        <p className="sec-sub">Every offer reviewed by our acquisitions team. Every closing handled by a Georgia attorney. Never farmed out to a national network.</p>
      </div>
      <div className="benefits">
        <div className="pic">
          <div className="pic-tag">
            <div className="eb">Serving since 2018</div>
            <div className="tt">Statesboro · Rincon · Savannah<br/>Metter · Springfield</div>
          </div>
        </div>
        <ul className="ben-list">
          {BEN.map(b => (
            <li className="ben-item" key={b.t}>
              <div className="ben-mk">{b.i}</div>
              <div className="ben-ct">
                <h4>{b.t}</h4>
                <p>{b.p}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
window.Benefits = Benefits;
