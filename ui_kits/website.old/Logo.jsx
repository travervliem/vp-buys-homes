// Logo.jsx — canonical VP Equities lockup
const Logo = ({ size = 'md', reversed = false, showWordmark = true }) => {
  const scale = { sm: 0.72, md: 1, lg: 1.3 }[size] || 1;
  const textColor = reversed ? '#fff' : '#1B365D';
  const subColor = reversed ? 'rgba(255,255,255,.4)' : '#9CA3AF';
  const divColor = reversed ? 'rgba(255,255,255,.2)' : 'rgba(27,54,93,.2)';
  const houseBg = reversed ? '#fff' : '#1B365D';
  const houseFg = reversed ? '#1B365D' : '#fff';
  const vpSize = 24 * scale, houseSize = 22 * scale;
  return (
    <span className="logo" style={{display:'inline-flex',alignItems:'center',gap:`${6*scale}px`}}>
      <span style={{fontFamily:'var(--fh)',fontSize:vpSize,fontWeight:700,color:textColor,letterSpacing:'.02em',lineHeight:1}}>VP</span>
      <svg width={houseSize} height={houseSize} viewBox="0 0 32 32">
        <polygon points="16,2 30,12 30,30 2,30 2,12" fill={houseBg}/>
        <rect x="11" y="18" width="10" height="12" rx="1" fill={houseFg}/>
      </svg>
      {showWordmark && <>
        <span style={{width:1,height:22*scale,background:divColor,margin:`0 ${3*scale}px`}} />
        <span style={{display:'flex',flexDirection:'column',gap:2}}>
          <span style={{fontFamily:'var(--fh)',fontSize:12*scale,fontWeight:700,letterSpacing:'.1em',color:textColor,textTransform:'uppercase',lineHeight:1}}>VP EQUITIES</span>
          <span style={{fontFamily:'var(--fb)',fontSize:8.5*scale,letterSpacing:'.18em',color:subColor,textTransform:'uppercase'}}>VPBUYSHOMES.COM</span>
        </span>
      </>}
    </span>
  );
};
window.Logo = Logo;
