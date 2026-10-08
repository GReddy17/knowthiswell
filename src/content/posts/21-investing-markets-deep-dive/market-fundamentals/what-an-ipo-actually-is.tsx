import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "What an IPO Actually Is",
  category: "investing-markets-deep-dive",
  order: 9,
  subtopic: "market-fundamentals",
  tags: ["ipo", "initial public offering", "going public", "underwriters", "lock-up period", "stock market"],
  date: "2026-10-03",
  updated: "2026-10-03",
  seoScore: 75, seoScoredOn: "2026-10-08",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-03",
  excerpt: "An IPO is the first time a private company sells shares to the public. Banks set the price with big investors the night before, so most people can only buy after trading opens.",
  summary: "An initial public offering (IPO) is the process by which a private company first sells shares to the public and lists them on a stock exchange. The company hires investment banks as underwriters, files a registration statement (Form S-1 in the US) with the Securities and Exchange Commission containing a prospectus with audited financials and risk factors, markets the deal to institutional investors in a roadshow, and sets the offer price the evening before trading starts. Shares at the offer price are allocated mostly to institutions; most individual investors buy on the open market once trading begins, often at a different price. Money from newly issued shares goes to the company, while existing holders may also sell. Research compiled by Jay Ritter at the University of Florida shows US IPOs have risen on their first trading day by roughly 18% on average since 1980, while studies including Ritter (1991) found many IPOs underperformed comparable stocks over the following years. Insiders usually agree to a lock-up, commonly 180 days, before selling. The SEC's Investor.gov urges reading the prospectus and treating IPOs as risky.",
  sources: [
    { label: "U.S. SEC, Investor.gov — Initial Public Offering (IPO)", url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/initial-public-offering-ipo" },
    { label: "U.S. SEC — Form S-1 Registration Statement under the Securities Act of 1933", url: "https://www.sec.gov/files/forms-1.pdf" },
    { label: "FINRA Rule 5130 — Restrictions on the Purchase and Sale of Initial Equity Public Offerings", url: "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5130" },
    { label: "Ritter, J. — IPO Data (University of Florida, Warrington College of Business)", url: "https://site.warrington.ufl.edu/ritter/ipo-data/" },
    { label: "Ritter, J. (1991) — The Long-Run Performance of Initial Public Offerings, The Journal of Finance 46(1)", url: "https://doi.org/10.1111/j.1540-6261.1991.tb03743.x" },
    { label: "Chen, H.-C. and Ritter, J. (2000) — The Seven Percent Solution, The Journal of Finance 55(3)", url: "https://doi.org/10.1111/0022-1082.00236" },
  ],
  seeAlso: [
    "investing-markets-deep-dive/how-the-stock-market-actually-works",
    "investing-markets-deep-dive/what-a-brokerage-account-actually-is",
    "investing-markets-deep-dive/how-diversification-actually-reduces-risk",
    "investing-markets-deep-dive/what-an-index-fund-actually-tracks",
    "investing-markets-deep-dive/stocks-vs-bonds-what-actually-differs",
  ],
  glossary: [
    { term: "Initial public offering (IPO)", definition: "The first sale of a company's shares to the public, after which the shares trade on a stock exchange." },
    { term: "Underwriter", definition: "An investment bank that manages an IPO: helps prepare filings, markets the shares, sets the price with the company, and distributes the shares to investors." },
    { term: "Prospectus", definition: "The disclosure document in an IPO registration statement, describing the business, audited financials, risks, and how the money will be used." },
    { term: "Form S-1", definition: "The registration statement US companies file with the SEC to offer shares to the public for the first time." },
    { term: "Roadshow", definition: "A series of presentations where the company and underwriters pitch the IPO to institutional investors and gather orders before pricing." },
    { term: "Offer price", definition: "The price at which IPO shares are sold to the investors who receive an allocation, set the evening before trading begins." },
    { term: "Lock-up period", definition: "A contractual period, commonly 180 days, during which insiders and early investors agree not to sell their shares after the IPO." },
    { term: "Underpricing", definition: "When an IPO's first-day trading price closes above its offer price, meaning the company sold shares for less than the market immediately paid." },
  ],
  author: {
    slug: "james-h-rivers",
    name: "James H. Rivers",
    credentialLine: "Founder, KnowThisWell",
  },
  youtubeStatus: "not-started",
  youtubeUrl: "",
  draft: false,
};

export const quiz: QuizBankItem[] = [
  {"question": "What happens in an initial public offering (IPO)?", "difficulty": "easy", "options": [{"text": "A private company sells shares to the public for the first time and lists them on an exchange", "correct": true, "explanation": "After the IPO, those shares trade between investors on the market."}, {"text": "A public company buys back all its shares", "correct": false, "explanation": "That's closer to going private, the opposite move."}, {"text": "The government buys shares in a company", "correct": false, "explanation": "IPOs are sales to public investors, not government purchases."}]},
  {"question": "Which document must a US company file with the SEC before an IPO?", "difficulty": "easy", "options": [{"text": "A registration statement, usually Form S-1, which includes the prospectus", "correct": true, "explanation": "It discloses the business, audited financials and risk factors."}, {"text": "A personal tax return for the CEO", "correct": false, "explanation": "The filing is about the company, not an individual's taxes."}, {"text": "No filing is needed", "correct": false, "explanation": "Public offerings must be registered under the Securities Act of 1933 unless an exemption applies."}]},
  {"question": "Does the SEC approving a registration mean the IPO is a good investment?", "difficulty": "medium", "options": [{"text": "No; the SEC reviews disclosure, not investment merit", "correct": true, "explanation": "Investor.gov is explicit: the SEC doesn't judge whether a stock is a good buy."}, {"text": "Yes, the SEC only allows profitable companies to list", "correct": false, "explanation": "Many companies go public while losing money."}, {"text": "Yes, the SEC guarantees the offer price", "correct": false, "explanation": "No regulator guarantees any price."}]},
  {"question": "A company sells 10 million new shares at $20 and pays a 7% underwriting spread. How much does it receive?", "difficulty": "medium", "options": [{"text": "$186 million", "correct": true, "explanation": "$200 million gross minus $14 million (7%) to the underwriters."}, {"text": "$200 million", "correct": false, "explanation": "That's gross proceeds before the underwriters' fee."}, {"text": "$140 million", "correct": false, "explanation": "That would mean a 30% fee, far above typical spreads."}]},
  {"question": "An IPO is priced at $20 and closes its first day at $26 on 10 million shares. How much 'money was left on the table'?", "difficulty": "hard", "options": [{"text": "$60 million", "correct": true, "explanation": "$6 per share times 10 million shares: value the market paid that the company didn't collect."}, {"text": "$26 million", "correct": false, "explanation": "That confuses the price with the gap times share count."}, {"text": "Zero, since the company still sold all its shares", "correct": false, "explanation": "The company sold at $20 what investors immediately valued at $26."}]},
  {"question": "Why do most individual investors pay a different price than the IPO offer price?", "difficulty": "medium", "options": [{"text": "Offer-price shares go mostly to institutions; individuals usually buy once trading opens on the market", "correct": true, "explanation": "The opening trade can be well above or below the offer price."}, {"text": "Individuals are charged a legal surcharge", "correct": false, "explanation": "There's no such surcharge; it's an allocation and timing issue."}, {"text": "The offer price is only for employees", "correct": false, "explanation": "Employees may have a directed share program, but most offer-price shares go to institutions."}]},
  {"question": "What is an IPO lock-up period?", "difficulty": "easy", "options": [{"text": "A contractual period, commonly 180 days, when insiders agree not to sell", "correct": true, "explanation": "When it expires, extra shares can hit the market."}, {"text": "A period when the exchange stops all trading", "correct": false, "explanation": "Trading continues; only insiders are restricted."}, {"text": "A legal ban on new investors buying for six months", "correct": false, "explanation": "The public can trade from the first day."}]},
  {"question": "What did Ritter's 1991 study find about IPOs over the following years?", "difficulty": "hard", "options": [{"text": "On average they underperformed comparable established companies over about three years", "correct": true, "explanation": "A first-day pop doesn't predict strong long-term returns."}, {"text": "They always beat the market", "correct": false, "explanation": "The finding was the opposite on average."}, {"text": "They had exactly the market's return", "correct": false, "explanation": "The study documented underperformance."}]},
  {"question": "What does FINRA Rule 5130 do?", "difficulty": "hard", "options": [{"text": "Restricts certain industry insiders, such as broker-dealer employees, from buying new-issue IPO shares", "correct": true, "explanation": "It aims to keep hot IPO shares from going to the people distributing them."}, {"text": "Sets the price of every IPO", "correct": false, "explanation": "Prices are set by the company and underwriters, not FINRA."}, {"text": "Bans retail investors from IPOs", "correct": false, "explanation": "Retail investors can buy, subject to their broker's allocation rules."}]},
  {"question": "When a company sells newly created shares in an IPO, where does that money go?", "difficulty": "medium", "options": [{"text": "To the company, minus fees; when existing holders sell their shares, that money goes to them", "correct": true, "explanation": "The prospectus states how much is primary (new) and secondary (existing holders selling)."}, {"text": "To the stock exchange", "correct": false, "explanation": "The exchange charges listing fees but doesn't receive the proceeds."}, {"text": "To the SEC", "correct": false, "explanation": "The SEC charges a small registration fee, not the proceeds."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains how IPOs work, cited to the SEC&apos;s Investor.gov, FINRA and peer-reviewed research. It is financial literacy, not personal investment advice, and no company named or implied here is a recommendation.</strong> Figures are illustrations or historical averages, not forecasts. For decisions about your own money, talk to a licensed financial adviser.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "An IPO is the first time a private company sells shares to the public. After it, the shares trade on an exchange like any other stock.",
          "Investment banks set the offer price with large institutions the night before trading. Most individuals can only buy once trading opens, often at a different price.",
          "US IPOs have risen about 18% on their first day on average since 1980, but research shows many lag comparable stocks over the following years. The first-day pop goes mostly to those who got shares at the offer price.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Picture a family bakery that has grown into a regional chain. The founders and a few early investors own all of it. To open 50 more shops, they need money, and they decide to sell slices of ownership to anyone who wants one. That first public sale is the IPO. But the bakery doesn&apos;t set up a stall and sell shares one by one. It hires a big bank to organize the sale. The bank writes up a long document about the business and its risks, files it with the government, tours the country pitching to pension funds and mutual funds, collects their orders, and sets a price. The night before, those large buyers receive their shares. The next morning the shares start trading on the <TermLink href="/investing-markets-deep-dive/how-the-stock-market-actually-works">stock market</TermLink>, and that&apos;s usually the first moment an ordinary investor can buy, at whatever price the market sets that day.</div>}
        detailed={<div className="prose-p">In the US, an IPO is a registered offering under the Securities Act of 1933. The company selects lead underwriters, which in a typical firm-commitment deal buy the shares from the company and resell them. It files a registration statement on Form S-1 containing the prospectus: business description, audited financial statements, risk factors, use of proceeds, and who is selling. SEC staff review it for disclosure and comment; they don&apos;t judge whether the stock is a good investment. After a quiet period, the company sets an indicative price range and runs a roadshow. Underwriters build a book of institutional orders and, with the company, set the offer price the evening before listing. Shares are allocated, largely to institutions, and trading opens on an exchange the next morning. Proceeds from <em>primary</em> shares (newly issued) go to the company, minus the underwriting spread, which for mid-sized US IPOs has clustered near 7% (Chen and Ritter, 2000); <em>secondary</em> shares are sold by existing holders, who keep that money. Underwriters often hold an over-allotment option (the &quot;greenshoe&quot;) of up to 15% more shares to stabilize trading. Insiders typically sign lock-ups, commonly 180 days. Two empirical patterns frame the economics: average first-day returns of roughly 18% in Ritter&apos;s data since 1980 (underpricing), and, in Ritter (1991) and later work, below-benchmark returns over the next few years on average. Alternatives exist: a direct listing (no new money raised, no underwriter-set price) and merging with a SPAC.</div>}
      />
      <FootnoteAside>Why would a company accept being underpriced? Explanations in the research include rewarding institutions for revealing their true demand during book building, reducing the risk of a failed deal, and creating positive attention. None of them has fully settled the debate.</FootnoteAside>

      <p>To buy after listing, you need a <TermLink href="/investing-markets-deep-dive/what-a-brokerage-account-actually-is">brokerage account</TermLink>. Some brokers offer limited offer-price allocations to retail customers, under their own eligibility rules. IPO shares also tend to enter broad <TermLink href="/investing-markets-deep-dive/what-an-index-fund-actually-tracks">index funds</TermLink> only after meeting the index&apos;s rules, which can take months.</p>

      <QuickCheck
        question="Who usually receives IPO shares at the offer price?"
        options={[
          { text: "Mostly institutional investors who placed orders with the underwriters", correct: true, explanation: "Correct. Individuals mostly buy after trading opens, at the market price." },
          { text: "Anyone who opens a brokerage account that morning", correct: false, explanation: "By the time trading opens, the offer-price allocation is done." },
          { text: "Only the company's founders", correct: false, explanation: "Founders already own shares; the IPO sells new or existing shares to outside investors." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <p>The company and numbers below are hypothetical, chosen to show the arithmetic. They are not forecasts or real deals.</p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Where the money goes (baseline case)</h3>
      <div className="prose-p">A company sells 10 million newly issued shares at an offer price of $20. Gross proceeds: $200 million. The underwriters keep a 7% spread, $14 million, and the company also pays legal, audit, exchange and SEC registration costs, say $4 million. The company receives about $182 million to spend on what the prospectus&apos;s &quot;use of proceeds&quot; section described. Suppose the founders also sell 2 million of their own existing shares in the same offering. That $40 million (minus the spread on those shares) goes to the founders, not the company. The prospectus must state the split, and it&apos;s worth checking: a deal that is mostly insiders selling raises little for the business itself.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The first-day pop (edge case)</h3>
      <div className="prose-p">The same shares open at $27 and close the first day at $26. Institutions that received shares at $20 are up 30% in a day. The company sold 10 million shares for $6 each less than the market immediately paid: $60 million &quot;left on the table.&quot; An individual who bought at the $27 open is down about 4% by the close. Same stock, same day, opposite outcomes, entirely because of when and at what price each investor got in. A headline that says &quot;IPO soars 30%&quot; measures from the offer price, which most readers couldn&apos;t buy at.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Day 181 (applied)</h3>
      <div className="prose-p">Insiders and pre-IPO investors hold 60 million shares under a 180-day lock-up, while 10 million trade publicly. When the lock-up expires, up to 60 million more shares become eligible to sell, six times the original public float. They won&apos;t all be sold, but the possibility of extra supply is why the expiry date, disclosed in the prospectus, gets watched. This is also one reason Investor.gov advises reading the prospectus before buying: the lock-up terms, who is selling, whether the company is profitable, and the risk factors are all in it. Whether any of this fits your situation, given your other holdings and <TermLink href="/investing-markets-deep-dive/how-diversification-actually-reduces-risk">diversification</TermLink>, is a question for a licensed adviser.</div>

      <QuickCheck
        question="An IPO is priced at $15 and opens at $21. Someone buys at the open and it closes at $19. How did they do on day one?"
        options={[
          { text: "Down about 10%, even though the stock closed 27% above its offer price", correct: true, explanation: "Correct. Their return is measured from $21, not from the $15 offer price." },
          { text: "Up 27%", correct: false, explanation: "That's the return for someone allocated shares at $15." },
          { text: "Exactly break-even", correct: false, explanation: "They paid $21 and the stock closed at $19." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From private company to public stock: the IPO timeline"
        type="flow"
        svgSrc="/diagrams/investing-markets-deep-dive-what-an-ipo-actually-is-timeline.svg"
        altText="A timeline of a US IPO: hire underwriters; file the S-1 registration statement with the prospectus and respond to SEC comments; roadshow to institutional investors; pricing the evening before listing, with shares allocated mostly to institutions; first trading day on the exchange, when most individual investors can first buy; and lock-up expiry around 180 days later, when insiders may begin selling."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming you'll get the offer price.", fix: "Most individuals buy after trading opens. Compare the price you'd actually pay with the offer price before reading anything into a headline." },
          { mistake: "Treating SEC registration as a seal of approval.", fix: "The SEC reviews whether the disclosure is complete, not whether the company is a good investment." },
          { mistake: "Skipping the prospectus.", fix: "Read the risk factors, the use of proceeds, how much insiders are selling, and the lock-up terms. Investor.gov recommends exactly this." },
          { mistake: "Placing a market order on the first day.", fix: "Opening IPO prices can move sharply. FINRA and Investor.gov explain limit orders, which cap the price you'll pay." },
        ]}
      />
      <MisconceptionCallout
        myth="IPOs are a quick way to make money because new stocks always jump on day one."
        reality={<p>The average first-day gain in Ritter&apos;s data is real, but it accrues mainly to investors allocated shares at the offer price. Some IPOs fall on day one, and research beginning with Ritter (1991) found IPOs on average lagged comparable companies over the next few years. Buying at the open captures neither the pop nor any guarantee.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Find a company's prospectus on the SEC's EDGAR database and read the summary and risk factors.",
          "Check whether the company is profitable and how much of the offering is insiders selling.",
          "Note the lock-up expiry date stated in the prospectus.",
          "Read Investor.gov's IPO explainer and its explanation of limit orders before placing any trade.",
          "For whether an IPO fits your portfolio, consult a licensed financial adviser.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is an IPO in simple terms?", answer: "It's when a private company sells shares to the public for the first time and lists them on a stock exchange, so anyone with a brokerage account can then buy and sell them." },
          { question: "Can regular people buy IPO shares at the offer price?", answer: "Sometimes, through brokers that receive a small allocation and offer it to eligible customers, but most offer-price shares go to institutions. Most individuals buy once trading opens." },
          { question: "Why do companies go public?", answer: "To raise money for growth, to let founders and early investors sell some of their stake, and to have publicly traded shares for acquisitions and employee pay. In exchange they take on disclosure duties and public scrutiny." },
          { question: "What is an IPO lock-up period?", answer: "An agreement, commonly 180 days, in which insiders and early investors promise not to sell after the IPO. The terms are disclosed in the prospectus." },
          { question: "What is the difference between an IPO and a direct listing?", answer: "In an IPO, underwriters set a price and usually new shares are sold to raise money. In a direct listing, existing shares simply start trading, with the opening price set by market orders." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
