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
  title: "How Identity Theft Actually Starts",
  category: "digital-safety-privacy",
  order: 7,
  subtopic: "everyday-account-security",
  tags: ["identity theft", "credit freeze", "account takeover", "SIM swap", "IdentityTheft.gov"],
  date: "2026-09-30",
  updated: "2026-09-30",
  youtubeShort: false, youtubeLong: false,
  seoScore: 82, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-30",
  excerpt: "Identity theft rarely starts with a genius hacker. It starts when a few pieces of your information end up in the wrong hands, through a breach, a phishing message, stolen mail or a lost wallet, and someone uses them to open or take over an account.",
  summary: "Identity theft has two phases: someone collects pieces of your personal information, then uses them to pretend to be you. Collection usually happens through ordinary routes: data breaches at companies that hold your records, phishing messages and phone scams that trick you into handing details over, stolen mail or wallets, SIM swaps that hijack your phone number, and sometimes people you know. The information is then used to open new credit accounts, take over existing ones, file a fake tax return, or claim benefits or medical care in your name. The FTC received more than 1.1 million identity theft reports through IdentityTheft.gov in 2024, with credit card fraud the most commonly reported type. The defenses that address the most common routes are a free credit freeze at all three bureaus, multi-factor authentication, an IRS Identity Protection PIN, and regular checks of your credit reports. If it happens, IdentityTheft.gov provides a federal report and a personalized recovery plan.",
  sources: [
    { label: "Federal Trade Commission — Consumer Sentinel Network Data Book 2024", url: "https://www.ftc.gov/reports/consumer-sentinel-network-data-book-2024" },
    { label: "FTC Consumer Advice — What To Know About Identity Theft", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" },
    { label: "IdentityTheft.gov (Federal Trade Commission)", url: "https://www.identitytheft.gov/" },
    { label: "FTC Consumer Advice — What To Know About Credit Freezes and Fraud Alerts", url: "https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts" },
    { label: "Internal Revenue Service — Get an Identity Protection PIN", url: "https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin" },
    { label: "CISA — Secure Our World", url: "https://www.cisa.gov/secure-our-world" },
  ],
  seeAlso: [
    "digital-safety-privacy/how-data-breaches-actually-happen",
    "digital-safety-privacy/how-phishing-scams-actually-work",
    "digital-safety-privacy/what-two-factor-authentication-actually-does",
    "personal-finance-basics/how-credit-reports-work",
    "technology-basics/what-a-data-breach-actually-means-for-you",
    "digital-safety-privacy/what-public-wi-fi-risks-actually-are",
    "digital-safety-privacy/what-your-digital-footprint-actually-reveals",
  ],
  glossary: [
    { term: "Identity theft", definition: "Using someone else's personal information, such as their name, Social Security number or account details, without permission to commit fraud or obtain money, credit or services." },
    { term: "New-account fraud", definition: "Opening a new credit card, loan, phone line or other account in a victim's name." },
    { term: "Account takeover", definition: "Gaining control of an account the victim already has, often by resetting the password or changing the contact details." },
    { term: "SIM swap", definition: "Tricking or bribing a phone carrier into moving a victim's number to a SIM card the criminal controls, so texts and calls, including login codes, go to the criminal." },
    { term: "Identity Protection PIN (IP PIN)", definition: "A six-digit number from the IRS that must be on a federal tax return filed under your Social Security number, which blocks fraudulent returns filed without it." },
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
  {"question": "What are the two basic phases of identity theft?", "difficulty": "easy", "options": [{"text": "Collecting your personal information, then using it to pretend to be you", "correct": true, "explanation": "Collection and misuse are separate steps, and you can defend against both."}, {"text": "Hacking your computer, then deleting your files", "correct": false, "explanation": "That describes malware damage, not identity theft."}, {"text": "Changing your legal name, then moving abroad", "correct": false, "explanation": "Identity theft is about impersonation for fraud."}]},
  {"question": "According to the FTC's 2024 data, which identity theft type was reported most often?", "difficulty": "medium", "options": [{"text": "Credit card fraud", "correct": true, "explanation": "New and existing credit card fraud led the FTC's identity theft categories in 2024."}, {"text": "Passport fraud", "correct": false, "explanation": "Passport misuse is far less commonly reported."}, {"text": "Library card fraud", "correct": false, "explanation": "Not a category that shows up in meaningful numbers."}]},
  {"question": "Roughly how many identity theft reports did the FTC receive through IdentityTheft.gov in 2024?", "difficulty": "hard", "options": [{"text": "More than 1.1 million", "correct": true, "explanation": "That's from the FTC's Consumer Sentinel Network Data Book 2024."}, {"text": "About 10,000", "correct": false, "explanation": "The real figure is over a hundred times higher."}, {"text": "About 100 million", "correct": false, "explanation": "That's far above the reported number."}]},
  {"question": "What does a credit freeze stop?", "difficulty": "easy", "options": [{"text": "Most new lenders from pulling your credit report, which blocks most new-account fraud", "correct": true, "explanation": "It's free under federal law and can be lifted when you apply for credit."}, {"text": "All use of your existing credit cards", "correct": false, "explanation": "Existing accounts keep working."}, {"text": "Criminals from ever learning your Social Security number", "correct": false, "explanation": "It limits what they can do with it, not whether they have it."}]},
  {"question": "Why is a SIM swap so damaging?", "difficulty": "medium", "options": [{"text": "The criminal receives your texts and calls, including one-time login codes", "correct": true, "explanation": "That lets them reset passwords on accounts that rely on text-message codes."}, {"text": "It permanently destroys your phone", "correct": false, "explanation": "Your phone just loses service. The damage is to your accounts."}, {"text": "It lowers your credit score directly", "correct": false, "explanation": "It enables fraud that can hurt your credit, but the swap itself doesn't."}]},
  {"question": "What does the IRS Identity Protection PIN do?", "difficulty": "medium", "options": [{"text": "Blocks federal tax returns filed under your Social Security number without the PIN", "correct": true, "explanation": "It stops a criminal from filing a fake return to claim your refund."}, {"text": "Lowers your taxes", "correct": false, "explanation": "It's a security measure only."}, {"text": "Freezes your credit reports", "correct": false, "explanation": "Credit freezes are set at the credit bureaus, not the IRS."}]},
  {"question": "You get a letter from a lender thanking you for a loan you never applied for. What kind of identity theft is this?", "difficulty": "easy", "options": [{"text": "New-account fraud", "correct": true, "explanation": "Someone opened a new account in your name."}, {"text": "Account takeover", "correct": false, "explanation": "Takeover involves an account you already had."}, {"text": "Phishing", "correct": false, "explanation": "Phishing may be how they got your details, but the loan is new-account fraud."}]},
  {"question": "What does IdentityTheft.gov give a victim?", "difficulty": "easy", "options": [{"text": "An FTC identity theft report and a personalized recovery plan", "correct": true, "explanation": "The report helps when disputing fraudulent accounts with businesses and credit bureaus."}, {"text": "Automatic reimbursement of all losses", "correct": false, "explanation": "It's a reporting and recovery tool, not a compensation fund."}, {"text": "A new Social Security number on request", "correct": false, "explanation": "New numbers are rare and handled by the Social Security Administration under strict conditions."}]},
  {"question": "Which is the most realistic way identity theft starts for most people?", "difficulty": "medium", "options": [{"text": "Details exposed in a breach or handed over in a phishing scam", "correct": true, "explanation": "Ordinary routes like breaches, phishing and stolen mail dominate."}, {"text": "A hacker breaking into a credit bureau's encryption live", "correct": false, "explanation": "Movie-style attacks are rare compared with ordinary data exposure."}, {"text": "Posting a photo of your pet", "correct": false, "explanation": "A pet photo alone isn't identity data, though pet names used as security answers can be."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
        <strong>This entry explains how identity theft typically happens and the standard protections, not legal or financial advice for your situation.</strong> If you think your identity has been stolen, report it at IdentityTheft.gov and contact the affected businesses, your bank and, where relevant, local police.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Identity theft has two phases: someone collects pieces of your information, then uses them to pose as you.",
          "Collection is usually ordinary: data breaches, phishing and phone scams, stolen mail or wallets, SIM swaps, and sometimes people you know.",
          "A free credit freeze, multi-factor authentication and an IRS Identity Protection PIN block the most common ways stolen details get turned into money.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of your identity as a set of keys: your name, birth date, Social Security number, address, phone number, and account logins. No single key opens much. A thief collects keys from different places: one from a company&apos;s leaked database, one from a text message you answered, one from a letter taken out of your mailbox. Once they have enough keys for a particular door, they open it: a new credit card in your name, your email account, or a tax refund. That&apos;s why identity theft often shows up months after the information was taken. The fix works the same way. You can&apos;t take back keys that are already out, but you can change the locks, so the keys stop working.</div>}
        detailed={<div className="prose-p"><strong>Collection routes.</strong> The FTC&apos;s identity theft guidance and its recovery site, IdentityTheft.gov, describe the common sources: <TermLink href="/digital-safety-privacy/how-data-breaches-actually-happen">data breaches</TermLink> at companies that store your records; <TermLink href="/digital-safety-privacy/how-phishing-scams-actually-work">phishing</TermLink> emails, texts and calls impersonating banks, government agencies or delivery companies; stolen mail, wallets and discarded documents; malware on devices; and SIM swaps, where a criminal gets your phone number moved to their SIM card. Someone the victim knows is sometimes responsible too. <strong>Misuse routes.</strong> The collected data is turned into money through <strong>new-account fraud</strong> (credit cards, loans, phone lines), <strong>account takeover</strong> (changing the password and contact details on an existing account), tax-refund fraud, government-benefits fraud and medical identity theft. Scale: the FTC&apos;s Consumer Sentinel Network Data Book reports more than 1.1 million identity theft reports through IdentityTheft.gov in 2024, with credit card fraud the most common type. <strong>The edge case:</strong> a Social Security number on its own is often less useful to a criminal than people fear, because opening credit usually also needs a name, birth date and address that match. The danger rises as the pieces combine, which is why breach notices that include several fields together call for stronger action. Controls map onto the misuse routes: a <strong>credit freeze</strong> blocks most new credit accounts, <TermLink href="/digital-safety-privacy/what-two-factor-authentication-actually-does">multi-factor authentication</TermLink> (ideally an app or passkey rather than text codes) resists account takeover, and the IRS <strong>Identity Protection PIN</strong> blocks fake federal returns.</div>}
      />
      <FootnoteAside>Report counts are updated each year in the FTC&apos;s Consumer Sentinel Network Data Book. Figures here are from the 2024 edition (published March 2025) and were current as of September 2026. Reported cases undercount the total, since many victims never file a report.</FootnoteAside>

      <QuickCheck
        question="A thief has your name and email address from a shopping-site breach, but nothing else. What are they most likely to try next?"
        options={[
          { text: "A targeted phishing message to collect more details, like a password or Social Security number", correct: true, explanation: "Correct. Partial data is often used to make the next scam more convincing, so collection continues." },
          { text: "Immediately open a mortgage in your name", correct: false, explanation: "A mortgage application needs far more verified information than a name and email." },
          { text: "Nothing, because a name and email are useless", correct: false, explanation: "They're low-value alone, but they're a starting point for phishing." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: From breach to credit card (baseline case)</h3>
      <div className="prose-p">A healthcare billing company is breached, exposing names, birth dates, addresses and Social Security numbers. Months later, a criminal buys a batch of these records and applies online for a store credit card using one of them. Every field matches the victim&apos;s credit file, so the application is approved. The victim finds out when a collection letter arrives. If the victim had placed a credit freeze at Equifax, Experian and TransUnion, the lender&apos;s credit check would have failed and the account would most likely never have opened.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The SIM swap (edge case: your phone becomes the weak point)</h3>
      <div className="prose-p">A criminal calls a mobile carrier pretending to be the victim, using details found on social media and in old breaches, and asks to move the number to a new SIM card. The victim&apos;s phone suddenly shows &quot;No service.&quot; Within an hour the criminal requests password resets for the victim&apos;s email and banking, receives the text-message codes, and locks the victim out. Nothing on the victim&apos;s own devices was hacked. The defenses are a carrier account PIN or number-lock feature, and using an authenticator app or passkey instead of text codes for the most important accounts. Much of what a criminal needs for that call is already public; <TermLink href="/digital-safety-privacy/what-your-digital-footprint-actually-reveals">what your digital footprint actually reveals</TermLink> shows how little it takes.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Your tax refund is already claimed (real-world use)</h3>
      <div className="prose-p">You try to e-file your federal return and it&apos;s rejected because a return was already filed under your Social Security number. Someone filed a fake return early to collect a refund. The IRS&apos;s identity theft process applies: you respond to any IRS notice as instructed and, per IRS guidance, file an identity theft affidavit (Form 14039) if directed. For future years, an Identity Protection PIN means a return filed without your six-digit PIN is rejected. You&apos;d also report at IdentityTheft.gov, which generates a recovery plan covering the tax problem and any other accounts affected.</div>

      <QuickCheck
        question="Your phone suddenly loses service for no clear reason, and then you get an email saying your bank password was changed. What's the most likely explanation?"
        options={[
          { text: "A SIM swap: someone moved your number and used it to receive reset codes", correct: true, explanation: "Correct. Contact your carrier from another phone right away, then your bank." },
          { text: "A normal network outage", correct: false, explanation: "An outage doesn't change your bank password." },
          { text: "Your phone's battery is failing", correct: false, explanation: "A battery problem wouldn't trigger a bank password change." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How identity theft starts, and where each defense cuts it off"
        type="flow"
        svgSrc="/diagrams/digital-safety-privacy-how-identity-theft-actually-starts-flow.svg"
        altText="A flow diagram. On the left, collection routes: data breaches, phishing and phone scams, stolen mail or wallets, SIM swaps, and people you know. These feed into a central box: the thief assembles enough pieces to pose as you. On the right, misuse routes, each with its defense: new credit accounts blocked by a credit freeze; account takeover blocked by multi-factor authentication with an app or passkey; fake tax returns blocked by an IRS Identity Protection PIN. At the bottom: if it happens, report at IdentityTheft.gov for a recovery plan."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming you're safe because you've never been told your data was in a breach.", fix: "Many breaches have exposed hundreds of millions of records. Assume some of your details are already out and put freezes and multi-factor authentication in place anyway." },
          { mistake: "Relying on text-message codes for your email and bank.", fix: "Text codes are vulnerable to SIM swaps. Use an authenticator app or a passkey where offered, and set a carrier account PIN." },
          { mistake: "Paying for monitoring and skipping the free credit freeze.", fix: "Monitoring tells you after an account is opened. A freeze, which is free by federal law, stops most new accounts from being opened at all." },
        ]}
      />
      <MisconceptionCallout
        myth="Identity theft mostly happens when hackers break into your personal computer."
        reality={<p>Most of the information used in identity theft is collected elsewhere: from breaches at companies that hold your records, from phishing messages and calls that trick people into sharing details, from stolen mail and wallets, and from phone-number hijacking. That&apos;s why protections that work at the account level, like credit freezes, strong multi-factor authentication and an IRS Identity Protection PIN, matter more than any single device setting.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Place a free credit freeze at Equifax, Experian and TransUnion, and lift it temporarily only when you apply for credit.",
          "Turn on multi-factor authentication for email and banking, using an authenticator app or passkey where possible.",
          "Ask your mobile carrier to add an account PIN or number-lock to help prevent SIM swaps.",
          "Request an IRS Identity Protection PIN through the IRS website.",
          "Check your credit reports for free at AnnualCreditReport.com and look for accounts you don't recognize.",
          "If something looks wrong, report it at IdentityTheft.gov and follow the recovery plan it creates.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does identity theft usually start?", answer: "With someone collecting pieces of your personal information, most often from data breaches, phishing messages or calls, stolen mail or wallets, or a SIM swap. They then use those details to open or take over accounts." },
          { question: "What is the first thing to do if my identity is stolen?", answer: "Report it at IdentityTheft.gov, the FTC's site, which creates an identity theft report and a step-by-step recovery plan. Contact the businesses where fraud occurred and consider placing credit freezes." },
          { question: "Does a credit freeze hurt my credit score?", answer: "No. According to the FTC, a freeze doesn't affect your score, and placing and lifting it is free at all three bureaus." },
          { question: "What can someone do with my Social Security number?", answer: "Combined with your name, birth date and address, they may try to open credit, file a tax return or claim benefits in your name. A credit freeze and an IRS Identity Protection PIN block the most common of these uses." },
          { question: "How do I know if someone is using my identity?", answer: "Warning signs include bills or collection calls for accounts you don't recognize, unfamiliar accounts on your credit report, a rejected tax return, and your phone suddenly losing service. Checking your credit reports regularly helps you catch it early." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
