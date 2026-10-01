// FAQ.jsx
const QS = [
  { q: 'How fast can you actually close?', a: 'Most sellers receive a written cash offer within 24 hours. Closings typically happen in 7–21 days depending on title work — we can move faster if you have a hard deadline like a foreclosure sale date.' },
  { q: 'Do I need to make repairs or clean?', a: 'No. We buy houses as-is. Leave what you don\'t want, skip the cleaning, skip the showings. We\'ve bought homes with major foundation issues, fire damage, and years of deferred maintenance.' },
  { q: 'Are there any fees, commissions, or closing costs?', a: 'No commissions — you\'re selling to us directly, not listing. We typically cover standard closing costs too. Your net offer is the number you actually receive at the table.' },
  { q: 'Can you stop a foreclosure?', a: 'Often yes — timing matters. If you contact us before the sale date, we can usually negotiate with your lender, pay off the loan, and close before the sheriff\'s sale. Call us today, don\'t wait.' },
  { q: 'How do you calculate my offer?', a: 'We look at comparable nearby sales (the same "comps" an appraiser uses), subtract the cost of any needed repairs, and account for a reasonable margin. No lowballs — if our number doesn\'t work for you, there\'s no pressure.' },
  { q: 'Who are you, and are you local?', a: 'VP Equities LLC is a Southeast Georgia investment firm based near Savannah. We\'re not a national call center or a wholesaler — we buy, hold, and rehab homes ourselves. Every offer is reviewed locally.' },
];
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="sec" id="faq">
      <div className="container">
        <div className="sec-head" style={{textAlign:'center',margin:'0 auto 52px'}}>
          <div className="eyb">Questions</div>
          <h2 className="sec-h">Frequently asked</h2>
        </div>
        <div className="faq-list">
          {QS.map((q, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{q.q}</span>
                <span className="ic">+</span>
              </button>
              <div className="faq-a">{q.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
window.FAQ = FAQ;
