// Areas.jsx
const AREAS = [
  { c: 'Statesboro', co: 'Bulloch County' },
  { c: 'Rincon', co: 'Effingham County' },
  { c: 'Savannah', co: 'Chatham County' },
  { c: 'Metter', co: 'Candler County' },
  { c: 'Springfield', co: 'Effingham County' },
  { c: 'Pooler', co: 'Chatham County' },
  { c: 'Brooklet', co: 'Bulloch County' },
  { c: 'Guyton', co: 'Effingham County' },
];
const Areas = () => (
  <section className="sec alt" id="areas">
    <div className="container">
      <div className="sec-head">
        <div className="eyb">Service Area</div>
        <h2 className="sec-h">Southeast Georgia specialists</h2>
        <p className="sec-sub">We work exclusively across these counties. Local relationships with title companies, closing attorneys, and inspectors make our closings fast.</p>
      </div>
      <div className="areas-wrap">
        <div className="areas-list">
          {AREAS.map(a => (
            <div className="area" key={a.c}>
              <div>
                <div className="c">{a.c}</div>
                <div className="co">{a.co}</div>
              </div>
              <span style={{fontFamily:'var(--fh)',fontSize:11,fontWeight:700,color:'var(--amber)',letterSpacing:'.1em',textTransform:'uppercase'}}>Buying →</span>
            </div>
          ))}
        </div>
        <div style={{background:'#fff',border:'1px solid var(--border)',borderRadius:10,padding:24,borderTop:'2px solid var(--amber)'}}>
          <div style={{fontFamily:'var(--fb)',fontSize:11,fontWeight:700,letterSpacing:'.18em',textTransform:'uppercase',color:'var(--amber)',marginBottom:10}}>Not on the list?</div>
          <h3 style={{fontFamily:'var(--fh)',fontSize:22,fontWeight:700,color:'var(--navy)',textTransform:'uppercase',letterSpacing:'.04em',lineHeight:1.15,margin:'0 0 12px'}}>We'll still take a look</h3>
          <p style={{fontSize:14,color:'var(--gray-500)',lineHeight:1.65,margin:'0 0 18px'}}>If your property is within roughly an hour of Savannah, send us the address. We'll tell you within a day whether we can make an offer.</p>
          <a href="#offer" className="btn-amber" style={{fontSize:12}}>Send us the address</a>
        </div>
      </div>
    </div>
  </section>
);
window.Areas = Areas;
