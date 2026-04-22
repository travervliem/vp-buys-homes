// Footer.jsx
const Footer = () => (
  <footer className="ftr">
    <div className="container">
      <div className="ftr-grid">
        <div className="ftr-sig">
          <div className="ftr-logo">
            <span className="vp">VP</span>
            <svg width="21" height="21" viewBox="0 0 32 32"><polygon points="16,2 30,12 30,30 2,30 2,12" fill="white"/><rect x="11" y="18" width="10" height="12" rx="1" fill="#1B365D"/></svg>
            <span style={{width:1,height:18,background:'rgba(255,255,255,.2)',margin:'0 3px'}}/>
            <span className="eq">VP EQUITIES</span>
          </div>
          <p className="ftr-note">VP Equities LLC is a Southeast Georgia real estate investment firm. We buy houses for cash across Bulloch, Chatham, Effingham, and Candler counties.</p>
          <a href="tel:9125550120" className="ftr-phone"><span className="p">P</span>(912) 555-0120</a>
        </div>
        <div>
          <h5>Sell</h5>
          <a href="#offer">Get my cash offer</a>
          <a href="#how">How it works</a>
          <a href="#situations">Common situations</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h5>Areas</h5>
          <a href="#areas">Statesboro</a>
          <a href="#areas">Savannah</a>
          <a href="#areas">Rincon</a>
          <a href="#areas">Metter</a>
          <a href="#areas">Springfield</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="#">About VP Equities</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Privacy · Terms</a>
        </div>
      </div>
      <div className="ftr-bot">
        <span>© {new Date().getFullYear()} VP Equities LLC · VPBUYSHOMES.COM</span>
        <span>Southeast Georgia · Since 2018</span>
      </div>
    </div>
  </footer>
);
window.Footer = Footer;
