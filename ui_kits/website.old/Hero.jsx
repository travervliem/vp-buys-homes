// Hero.jsx
const Hero = () => {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <section className="hero" id="offer">
      <div className="container hero-grid">
        <div>
          <div className="hero-eb">Southeast Georgia · Since 2018</div>
          <h1>We buy houses for <em>cash</em> in Southeast Georgia</h1>
          <p className="hero-sub">No repairs. No agent fees. Pick your close date. A fair written offer within 24 hours — for homeowners in Statesboro, Rincon, Savannah, Metter, and Springfield.</p>
          <ul className="hero-bullets">
            <li><span className="chk">✓</span>Cash offer within 24 hours — no obligation</li>
            <li><span className="chk">✓</span>Close in as little as 7 days, or on your timeline</li>
            <li><span className="chk">✓</span>Any condition. Any situation. No showings.</li>
          </ul>
          <div className="hero-ctas">
            <a href="#offer" className="btn-amber">Get My Cash Offer</a>
            <a href="#how" className="btn-ghost">How it works</a>
          </div>
        </div>
        <form className="offer-card" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
          <div className="offer-eb">Cash offer · 24 hours</div>
          <h3 className="offer-h">Tell us about your house</h3>
          <p className="offer-sub">Takes under two minutes. No obligation.</p>
          {submitted ? (
            <div style={{padding:'24px 16px',textAlign:'center',background:'#DCFCE7',borderRadius:6,border:'1px solid #86EFAC'}}>
              <div style={{fontFamily:'var(--fh)',fontSize:16,fontWeight:700,color:'#15803D',textTransform:'uppercase',letterSpacing:'.04em',marginBottom:6}}>Thank you</div>
              <div style={{fontSize:13,color:'#15803D'}}>We'll reach out within 24 hours with your written offer.</div>
            </div>
          ) : (
            <>
              <div className="form-grid">
                <input className="in" placeholder="Full name" required />
                <input className="in" placeholder="Phone" required />
                <input className="in full" placeholder="Property address" required />
                <select className="in full" defaultValue="">
                  <option value="" disabled>Ideal timeline</option>
                  <option>ASAP (7–14 days)</option>
                  <option>Within 30 days</option>
                  <option>1–2 months</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <button type="submit" className="offer-btn">Get My Cash Offer</button>
              <div className="offer-foot"><span className="dot"></span>No obligation · Your info stays private</div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
window.Hero = Hero;
