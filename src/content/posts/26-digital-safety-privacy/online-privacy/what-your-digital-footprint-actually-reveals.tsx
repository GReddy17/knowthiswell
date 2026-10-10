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
  title: "What Your Digital Footprint Actually Reveals",
  category: "digital-safety-privacy",
  order: 10,
  subtopic: "online-privacy",
  tags: ["digital footprint", "online privacy", "data brokers", "re-identification", "security questions", "social engineering", "doxxing"],
  date: "2026-10-08",
  updated: "2026-10-08",
  seoScore: 81, seoScoredOn: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-08",
  excerpt: "Your ZIP code, birthday and gender alone can single you out. Your digital footprint reveals far more once the pieces are combined, and that combining is what scammers and data brokers do.",
  summary: "A digital footprint reveals more than any single post because small, harmless-looking details become identifying when combined. Latanya Sweeney's research estimated that 87% of Americans could be uniquely identified from just ZIP code, birth date and gender, and a 2013 study in Scientific Reports found four location points were enough to single out 95% of people in a phone dataset of 1.5 million. Researchers have also predicted traits such as political views from Facebook likes. Data brokers assemble these pieces into profiles, which the FTC found can hold thousands of data points per person. The practical risks are social engineering, account takeover through guessable security questions, stalking and targeted scams. The fixes are to treat old security questions as public, limit location and birthday details, opt out of people-search sites, and lock down account recovery.",
  sources: [
    { label: "Sweeney, L. (2000) — Simple Demographics Often Identify People Uniquely, Carnegie Mellon University, Data Privacy Working Paper 3", url: "https://dataprivacylab.org/projects/identifiability/paper1.pdf" },
    { label: "de Montjoye, Y.-A. et al. (2013) — Unique in the Crowd: The privacy bounds of human mobility, Scientific Reports 3:1376", url: "https://doi.org/10.1038/srep01376" },
    { label: "Kosinski, M., Stillwell, D. and Graepel, T. (2013) — Private traits and attributes are predictable from digital records of human behavior, PNAS 110(15)", url: "https://doi.org/10.1073/pnas.1218733110" },
    { label: "U.S. Federal Trade Commission (2014) — Data Brokers: A Call for Transparency and Accountability", url: "https://www.ftc.gov/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014" },
    { label: "NIST Special Publication 800-63B — Digital Identity Guidelines: Authentication and Lifecycle Management", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
    { label: "U.S. FTC Consumer Advice — How To Protect Your Privacy Online", url: "https://consumer.ftc.gov/articles/how-protect-your-privacy-online" },
    { label: "UK National Cyber Security Centre — Social media: how to use it safely", url: "https://www.ncsc.gov.uk/guidance/social-media-how-to-use-it-safely" },
  ],
  seeAlso: [
    "technology-basics/what-a-digital-footprint-actually-means",
    "digital-safety-privacy/how-identity-theft-actually-starts",
    "digital-safety-privacy/how-phishing-scams-actually-work",
    "digital-safety-privacy/what-two-factor-authentication-actually-does",
    "technology-basics/what-app-permissions-actually-grant",
  ],
  glossary: [
    { term: "Digital footprint", definition: "The trail of data you leave online, both what you post on purpose (active) and what devices, apps and sites record about you (passive)." },
    { term: "Quasi-identifier", definition: "A detail that doesn't name you on its own, such as ZIP code or birth date, but can single you out when combined with other details." },
    { term: "Re-identification", definition: "Matching supposedly anonymous data back to a specific person by linking it with other information." },
    { term: "Data broker", definition: "A company that collects personal information from public records, purchases, apps and other sources, and sells or licenses profiles built from it." },
    { term: "Social engineering", definition: "Manipulating people into giving up access or information, often using personal details to make a scam message or call believable." },
    { term: "Knowledge-based authentication", definition: "Verifying identity with personal facts such as a first pet's name or mother's maiden name, which are often findable online." },
    { term: "Doxxing", definition: "Collecting and publishing someone's private details, such as a home address, usually to harass or intimidate them." },
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
  {"question": "According to Latanya Sweeney's research, what share of Americans could be uniquely identified by ZIP code, birth date and gender?", "difficulty": "medium", "options": [{"text": "About 87%", "correct": true, "explanation": "Her estimate used 1990 US Census data; three ordinary details were enough for most people."}, {"text": "About 8%", "correct": false, "explanation": "The finding was that most people, not a few, are unique on those three details."}, {"text": "None, because those details are shared by millions", "correct": false, "explanation": "Each detail is shared widely, but the combination is usually unique."}]},
  {"question": "What is a quasi-identifier?", "difficulty": "easy", "options": [{"text": "A detail that doesn't name you alone but can single you out in combination", "correct": true, "explanation": "ZIP code, birth date and gender are classic examples."}, {"text": "A fake name used online", "correct": false, "explanation": "That's a pseudonym, a different idea."}, {"text": "Your Social Security number", "correct": false, "explanation": "An SSN is a direct identifier, not a quasi-identifier."}]},
  {"question": "In de Montjoye et al. (2013), how many location-and-time points were enough to uniquely identify 95% of people in a 1.5-million-person phone dataset?", "difficulty": "hard", "options": [{"text": "Four", "correct": true, "explanation": "Even coarse, hourly, cell-tower-level points were enough for most people."}, {"text": "Forty", "correct": false, "explanation": "The striking result was how few points were needed."}, {"text": "Four hundred", "correct": false, "explanation": "Far fewer points were needed."}]},
  {"question": "What did Kosinski, Stillwell and Graepel (2013) show using Facebook likes?", "difficulty": "medium", "options": [{"text": "Likes could predict private traits such as political leaning and sexual orientation with notable accuracy", "correct": true, "explanation": "The model inferred traits people never stated, from patterns in likes alone."}, {"text": "Likes reveal nothing beyond what users post", "correct": false, "explanation": "The study showed the opposite: inference goes beyond what you state."}, {"text": "Likes are deleted after 30 days", "correct": false, "explanation": "The study wasn't about retention."}]},
  {"question": "Why does NIST SP 800-63B discourage security questions like 'What was your first pet's name?'", "difficulty": "medium", "options": [{"text": "The answers are often discoverable from public information, including social media", "correct": true, "explanation": "Knowledge-based answers are effectively public for many people."}, {"text": "They are too hard for people to remember", "correct": false, "explanation": "The problem is that they're too easy for others to find."}, {"text": "They slow down login pages", "correct": false, "explanation": "The concern is security, not speed."}]},
  {"question": "A birthday post, a 'my first car' meme and a hometown check-in are all public. What is the main risk?", "difficulty": "easy", "options": [{"text": "They can answer common account-recovery security questions", "correct": true, "explanation": "Combined, they hand an attacker likely answers to reset prompts."}, {"text": "They slow down your phone", "correct": false, "explanation": "The risk is account takeover, not performance."}, {"text": "No risk, since each detail is harmless alone", "correct": false, "explanation": "The risk comes from combining them."}]},
  {"question": "What did the FTC's 2014 data broker report find?", "difficulty": "hard", "options": [{"text": "Brokers held vast profiles, with one holding thousands of data segments on nearly every US consumer", "correct": true, "explanation": "The FTC also found consumers had little visibility into or control over these profiles."}, {"text": "Data brokers only use information people give them directly", "correct": false, "explanation": "Brokers draw on public records, purchases and other third-party sources."}, {"text": "Data brokers were banned in the US", "correct": false, "explanation": "The report called for transparency and legislation; brokers remain legal."}]},
  {"question": "You delete an old social media account. Why might your information still be out there?", "difficulty": "medium", "options": [{"text": "Copies already collected by data brokers, archives and other people persist", "correct": true, "explanation": "Deleting the source doesn't recall copies made earlier."}, {"text": "Deleting an account erases every copy everywhere", "correct": false, "explanation": "It only removes what the platform controls, and even that can take time."}, {"text": "Accounts can never be deleted", "correct": false, "explanation": "They can; the issue is copies made elsewhere."}]},
  {"question": "Which step most directly reduces the risk of account takeover via your public details?", "difficulty": "easy", "options": [{"text": "Replace security-question answers with random ones stored in a password manager and turn on app-based two-factor authentication", "correct": true, "explanation": "That removes guessable answers and adds a second factor."}, {"text": "Make your social media profile picture private", "correct": false, "explanation": "That helps little against security-question guessing."}, {"text": "Use the same strong password everywhere", "correct": false, "explanation": "Reuse means one breach unlocks every account."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains how personal data gets combined and used, cited to NIST, the FTC, the UK NCSC and peer-reviewed research. It is general security education, not legal advice.</strong> Privacy laws and opt-out rights differ by state and country and change over time (described here as of October 2026). If you are being stalked, harassed or doxxed, contact local law enforcement; for identity theft in the US, use IdentityTheft.gov.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Your footprint reveals far more in combination than any single post. ZIP code, birth date and gender alone were enough to single out an estimated 87% of Americans.",
          "Data brokers do that combining at scale, and scammers use the results to make messages and calls believable or to guess account-recovery answers.",
          "You can't erase a footprint, but you can shrink what's useful to an attacker: treat security questions as public, limit location and birthday details, opt out of people-search sites and lock down recovery.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of your online life as jigsaw pieces scattered across many tables. A birthday post on one, a gym check-in on another, a photo of your street, a public voter record, a shopping profile. Each piece looks harmless, which is why people share them. The risk comes when someone gathers pieces from several tables and fits them together. Three dull facts, your ZIP code, your birthday and whether you&apos;re male or female, are enough to point to just one person for most Americans. Add a few spots where your phone has been and someone can work out where you live and work. Companies called data brokers collect pieces like this full-time and sell the finished pictures. Most buyers are advertisers, but the same pictures help a scammer who wants to call you sounding like your bank, or someone guessing &quot;mother&apos;s maiden name&quot; to reset your email password. The question to ask isn&apos;t &quot;is this post private?&quot; but &quot;what does this add to the picture?&quot;</div>}
        detailed={<div className="prose-p">Privacy researchers separate <strong>direct identifiers</strong> (name, Social Security number) from <strong>quasi-identifiers</strong> (ZIP code, birth date, gender, employer), which identify through combination. Sweeney (2000) estimated 87% of the US population was unique on 5-digit ZIP, gender and full birth date, and showed that &quot;anonymous&quot; hospital records could be re-identified by linking them to a public voter list. Location is even more identifying: de Montjoye et al. (2013) found four spatio-temporal points, at hourly and cell-tower resolution, uniquely identified 95% of 1.5 million people, and coarsening the data helped only slightly. Beyond identification there is <strong>inference</strong>: Kosinski et al. (2013) predicted traits users never disclosed, including political leaning and sexual orientation, from Facebook likes. The FTC&apos;s 2014 study of nine data brokers found one held about 3,000 data segments for nearly every US consumer, drawn from public records, purchase histories and online activity. The threat model has four main users: marketers (legal, high volume), scammers using details for <strong>social engineering</strong>, account takers exploiting <strong>knowledge-based authentication</strong> (which NIST SP 800-63B tells verifiers not to rely on), and stalkers or doxxers seeking a physical address. The edge case: deleting a source doesn&apos;t delete copies already made by brokers or archives.</div>}
      />
      <FootnoteAside>The 87% figure comes from 1990 Census data, and later re-analyses using different data produced lower but still large estimates, around 60%. The exact number matters less than the lesson every analysis agrees on: a handful of ordinary facts is enough to single most people out.</FootnoteAside>

      <p>Passive data counts too. <TermLink href="/technology-basics/what-app-permissions-actually-grant">App permissions</TermLink> for location, contacts and photos feed the same profiles, and the photos you send directly as files, rather than through a platform that strips metadata, can carry the GPS coordinates of where they were taken.</p>

      <QuickCheck
        question="Why can three ordinary facts like ZIP code, birth date and gender identify most people?"
        options={[
          { text: "Each is shared by many people, but very few share all three", correct: true, explanation: "Correct. Combining narrows the crowd until, for most people, only one person is left." },
          { text: "Those facts are secretly linked to your Social Security number", correct: false, explanation: "No hidden link is needed; the combination alone does it." },
          { text: "They can't; you need a name to identify someone", correct: false, explanation: "Re-identification research shows names aren't necessary." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <p>The people below are hypothetical. The numbers are rough arithmetic to show how combining works, not measurements of any real place.</p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Narrowing the crowd (baseline case)</h3>
      <div className="prose-p">A ZIP code holds about 30,000 people. Split by gender: about 15,000. Spread those across roughly 80 years of birthdays, about 29,000 possible dates, and the average number of people sharing one exact birth date, ZIP and gender is about <strong>0.5</strong>. In other words, most people in that ZIP code are the only person with their combination. That&apos;s why a &quot;Happy 34th birthday!&quot; post plus a gym check-in near home is more revealing than it feels.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Four dots on a map (edge case)</h3>
      <div className="prose-p">A weather app shares &quot;anonymized&quot; location data with an advertising partner. There&apos;s no name attached, just a device ID. But the device spends most nights at one house and most weekdays at one office building, and visits one particular school at 8 a.m. Those few points match one household. This is the de Montjoye finding in practice: removing the name doesn&apos;t make movement data anonymous, because the movement pattern is itself the identifier.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The password reset (applied)</h3>
      <div className="prose-p">Maria&apos;s email account still uses security questions set years ago: mother&apos;s maiden name, city of birth and first pet. Her mother&apos;s public profile lists her maiden name, a people-search site shows Maria&apos;s birthplace, and a &quot;throwback&quot; post names the family&apos;s first dog. An attacker who knows her email address can answer all three. The fix isn&apos;t deleting every post. She replaces each answer with a random string saved in her <TermLink href="/digital-safety-privacy/how-password-managers-actually-protect-you">password manager</TermLink>, turns on app-based <TermLink href="/digital-safety-privacy/what-two-factor-authentication-actually-does">two-factor authentication</TermLink>, and checks the recovery phone and email are current. The public details stay public, but they no longer unlock anything.</div>

      <QuickCheck
        question="An app shares your location history with no name attached. Is that anonymous?"
        options={[
          { text: "Usually not; a few home and work locations can match the data to one person", correct: true, explanation: "Correct. Movement patterns act as an identifier on their own." },
          { text: "Yes, because there is no name", correct: false, explanation: "Research shows names aren't needed to re-identify location data." },
          { text: "Only if the app is from overseas", correct: false, explanation: "Where the app is based doesn't change the math." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="From scattered pieces to a profile: how a footprint gets assembled and used"
        type="flow"
        svgSrc="/diagrams/digital-safety-privacy-what-your-digital-footprint-actually-reveals-flow.svg"
        altText="A three-stage flow. Stage one, scattered pieces: public posts and photos, app and phone location, purchases and loyalty cards, public records such as property and voter files. Stage two, combined: data brokers and people-search sites match the pieces into one profile. Stage three, what it reveals: home address and daily routine, likely answers to security questions, and inferred traits such as politics or health interests. Arrows lead to who uses it: advertisers, scammers making believable messages, and stalkers or doxxers. A note says deleting one source doesn't erase copies already made."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Judging each post on its own.", fix: "Ask what a detail adds when combined with what's already public: birthday, hometown, employer, routine." },
          { mistake: "Answering security questions truthfully.", fix: "Treat them as public. Use random answers stored in a password manager, and prefer accounts that offer app-based two-factor authentication." },
          { mistake: "Posting location in real time.", fix: "Share trips and check-ins after you've left. Real-time posts reveal when your home is empty and where to find you." },
          { mistake: "Assuming deleting an account deletes the data.", fix: "Also opt out of people-search sites and request deletion from data brokers where your state's law allows it." },
        ]}
      />
      <MisconceptionCallout
        myth="I have nothing to hide, so my digital footprint doesn't matter."
        reality={<p>The main risks aren&apos;t about secrets. They&apos;re about ordinary facts being combined: your address and routine for a stalker, your family names for a scammer impersonating a relative, your old answers for someone resetting your email. NIST guidance stopped treating such personal facts as secure for exactly this reason.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Search your own name with your city in a search engine and on a few people-search sites, and note what comes up.",
          "Use each site's opt-out process; if you live in a state with a data-broker deletion law, use its official request system.",
          "Replace security-question answers on your email and bank accounts with random strings saved in a password manager.",
          "Turn off location access for apps that don't need it, and turn off precise location where approximate is enough.",
          "Review who can see your birthday, hometown and family members on social profiles, following the NCSC's social media guidance.",
          "If your details have been used in fraud, report it at IdentityTheft.gov (US) or your national fraud reporting service.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What can someone find out from my digital footprint?", answer: "Often your home address, workplace, daily routine, family members, age and likely answers to security questions. Researchers have also shown that traits you never stated, such as political leaning, can be inferred from online behavior like likes." },
          { question: "Can you delete your digital footprint completely?", answer: "No. You can delete accounts and request removal from data brokers and people-search sites, but copies already made by others, archives and screenshots may persist. The realistic goal is shrinking what's useful to an attacker." },
          { question: "How do data brokers get my information?", answer: "From public records such as property and voter files, purchase and loyalty-card data, apps that share data, online activity and other brokers. The FTC found individual brokers holding thousands of data points per person." },
          { question: "Is anonymized data really anonymous?", answer: "Often not. Studies show a few quasi-identifiers or a handful of location points can match supposedly anonymous records to one person." },
          { question: "How do I remove myself from people-search sites?", answer: "Most have an opt-out page that requires you to find your listing and submit a removal request. Some states have laws giving you deletion rights with registered data brokers; check your state attorney general's or privacy agency's website." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
