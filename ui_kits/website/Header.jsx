// Header.jsx
const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`site-hdr ${scrolled ? 'scr' : ''}`}>
      <div className="container hdr-inner">
        <a href="#" className="logo"><Logo /></a>
        <nav className="nav">
          <a href="#how">How it works</a>
          <a href="#situations">Situations</a>
          <a href="#areas">Areas</a>
          <a href="#faq">FAQ</a>
          <span className="phn"><span className="p">P</span>(912) 555-0120</span>
          <a href="#offer" className="nav-cta">Get Offer</a>
        </nav>
      </div>
    </header>
  );
};
window.Header = Header;
