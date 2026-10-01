// Testimonials.jsx
const T = [
  { q: 'Closed in nine days. They handled everything with the estate attorney — I never had to fly down from Maryland.', nm: 'Lisa R.', loc: 'Inherited · Savannah' },
  { q: 'We were two weeks from the foreclosure sale. They made a fair written offer the next morning and we closed in time.', nm: 'Marcus T.', loc: 'Pre-foreclosure · Statesboro' },
  { q: 'Bought my rental with the tenant still in it. No drama, no re-listing, no repairs. I netted more than my realtor quoted.', nm: 'Dana W.', loc: 'Investor · Rincon' },
];
const Testimonials = () => (
  <section className="sec dark">
    <div className="container">
      <div className="sec-head">
        <div className="eyb eyebrow--white" style={{color:'#F2A65A'}}>What Sellers Say</div>
        <h2 className="sec-h">Quiet sales, fair offers, no drama</h2>
        <p className="sec-sub">Real sellers, real Southeast Georgia houses. Names shortened for privacy.</p>
      </div>
      <div className="test-grid">
        {T.map(t => (
          <div className="quote" key={t.nm}>
            <p className="qt">{t.q}</p>
            <div className="who">
              <div className="nm">{t.nm}</div>
              <div className="loc">{t.loc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
window.Testimonials = Testimonials;
