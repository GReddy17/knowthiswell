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
  title: "What an LLC Actually Protects You From",
  category: "business-entrepreneurship-basics",
  order: 4,
  subtopic: "starting-from-zero",
  tags: ["llc", "limited liability", "business structure", "piercing the corporate veil", "personal guarantee"],
  date: "2026-09-25",
  updated: "2026-09-25",
  lastReviewed: "2026-09-25",
  excerpt: "An LLC generally keeps the business's debts and lawsuits away from your personal assets. It doesn't protect you from loans you personally guarantee, harm you personally cause, or a court ignoring the LLC because you mixed business and personal money.",
  summary: "A limited liability company (LLC) is a separate legal entity formed under state law, and its main feature, per the U.S. Small Business Administration, is that owners are generally not personally liable for the company's debts and liabilities, so a creditor or lawsuit against the business can usually reach only business assets. That protection has real limits: owners remain liable for obligations they personally guarantee (common with small-business loans and leases), for harm they personally cause, and for unpaid payroll taxes in some cases, and courts can 'pierce the veil' and reach owners' personal assets when business and personal affairs are mixed or the entity was used to commit fraud, per Cornell Law School's Legal Information Institute. An LLC also doesn't change taxes by itself: by default the IRS treats a single-member LLC as a disregarded entity and a multi-member LLC as a partnership. This is general information, not legal advice; state laws differ.",
  sources: [
    { label: "U.S. Small Business Administration — Choose a business structure", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" },
    { label: "IRS — Limited Liability Company (LLC)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/limited-liability-company-llc" },
    { label: "Cornell Law School, Legal Information Institute — Piercing the corporate veil", url: "https://www.law.cornell.edu/wex/piercing_the_corporate_veil" },
  ],
  seeAlso: [
    "business-entrepreneurship-basics/how-small-business-loans-actually-work",
    "business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include",
    "legal-documentation-howtos/business-registration-documents-explained",
    "personal-finance-basics/self-employment-and-freelance-tax-basics",
    "legal-documentation-howtos/what-makes-a-contract-legally-binding",
  ],
  glossary: [
    { term: "LLC (limited liability company)", definition: "A business structure created under state law that is legally separate from its owners (called members), combining limited liability with flexible tax treatment." },
    { term: "Limited liability", definition: "The rule that an owner's losses from the business's debts and lawsuits are generally limited to what they invested in it, keeping personal assets like a home or savings out of reach." },
    { term: "Piercing the corporate veil", definition: "A court decision to disregard a company's separate existence and hold its owners personally liable, usually because they mixed funds, ignored formalities, undercapitalized the business, or used it for fraud." },
    { term: "Personal guarantee", definition: "A signed promise by an owner to repay a business debt personally if the business can't. It overrides the LLC's liability shield for that debt." },
    { term: "Disregarded entity", definition: "The IRS's default classification for a single-member LLC: the business isn't taxed separately, and its profit or loss goes on the owner's personal return." },
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
  {"question": "What is the main protection an LLC is designed to give its owners?", "difficulty": "easy", "options": [{"text": "Keeping the business's debts and lawsuits away from their personal assets", "correct": true, "explanation": "That's limited liability, per the SBA."}, {"text": "Avoiding all taxes", "correct": false, "explanation": "LLC profits are taxed; the default is pass-through to the owners."}, {"text": "Preventing anyone from suing the business", "correct": false, "explanation": "The business can still be sued; owners are usually shielded."}]},
  {"question": "You sign a personal guarantee for your LLC's bank loan, and the business fails. What happens?", "difficulty": "easy", "options": [{"text": "The bank can come after you personally for the unpaid balance", "correct": true, "explanation": "A personal guarantee is a promise that sidesteps the LLC shield."}, {"text": "The LLC shield protects you anyway", "correct": false, "explanation": "You waived that protection for this debt by signing."}, {"text": "The debt is automatically forgiven", "correct": false, "explanation": "Business failure doesn't erase guaranteed debts."}]},
  {"question": "Your LLC's delivery driver (an employee) causes a crash on the job. Who is usually on the hook?", "difficulty": "medium", "options": [{"text": "The LLC and its insurance, generally not the owner's personal assets", "correct": true, "explanation": "This is the kind of business liability the shield is for, and why businesses also carry insurance."}, {"text": "The owner personally, always", "correct": false, "explanation": "Not for an employee's on-the-job act, absent something like veil piercing."}, {"text": "Nobody, because LLCs can't be sued", "correct": false, "explanation": "The LLC itself can be sued."}]},
  {"question": "You personally cause a crash while driving for your one-person LLC. Does the LLC shield your personal assets?", "difficulty": "medium", "options": [{"text": "Generally no, you are responsible for your own negligence", "correct": true, "explanation": "An LLC doesn't shield people from harm they personally cause."}, {"text": "Yes, since you were working for the LLC", "correct": false, "explanation": "The LLC may also be liable, but so are you."}, {"text": "Only if the LLC is less than a year old", "correct": false, "explanation": "The age of the LLC doesn't matter."}]},
  {"question": "Which habit makes it most likely a court will 'pierce the veil' of an LLC?", "difficulty": "medium", "options": [{"text": "Paying personal bills from the business bank account", "correct": true, "explanation": "Commingling funds is a classic veil-piercing factor per Cornell LII."}, {"text": "Having only one owner", "correct": false, "explanation": "Single-member LLCs are legal and common, though courts may look closer."}, {"text": "Making a profit", "correct": false, "explanation": "Profitability doesn't affect the shield."}]},
  {"question": "How does the IRS treat a single-member LLC by default?", "difficulty": "hard", "options": [{"text": "As a disregarded entity, with income reported on the owner's return", "correct": true, "explanation": "Per the IRS, unless it elects to be taxed as a corporation."}, {"text": "As a C corporation paying its own corporate tax", "correct": false, "explanation": "That's only if the LLC elects it."}, {"text": "As tax-exempt", "correct": false, "explanation": "LLCs aren't tax-exempt by default."}]},
  {"question": "Who creates the rules for forming an LLC in the U.S.?", "difficulty": "easy", "options": [{"text": "Each state", "correct": true, "explanation": "LLCs are formed under state law, which is why fees and rules vary."}, {"text": "The federal government only", "correct": false, "explanation": "There's no federal LLC formation."}, {"text": "The IRS", "correct": false, "explanation": "The IRS decides tax treatment, not formation."}]},
  {"question": "Why do many LLC owners still buy business insurance?", "difficulty": "hard", "options": [{"text": "Because the LLC's own assets can still be lost in a lawsuit, and the shield has gaps", "correct": true, "explanation": "The shield protects personal assets, not the business, and doesn't cover everything."}, {"text": "Because LLCs are required to be uninsured", "correct": false, "explanation": "There's no such rule."}, {"text": "Because insurance replaces the need for an LLC", "correct": false, "explanation": "They cover different risks and are often used together."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "An LLC is a separate legal entity, so the business's own debts and lawsuits generally can't reach your house, car, or personal savings.",
          "It doesn't cover debts you personally guarantee, harm you personally cause, or cases where a court ignores the LLC because business and personal money were mixed.",
          "An LLC doesn't lower taxes on its own. By default a one-owner LLC is taxed just like a sole proprietorship.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">If you run a business in your own name, the business&apos;s debts are your debts. If it gets sued and loses, the other side can go after your savings. Forming an LLC creates a separate legal &quot;person&quot; that owns the business. Now, if the business owes money or loses a lawsuit, the claim is generally against the LLC and what it owns, not against you. That&apos;s the wall people are paying for. But the wall has doors in it. If you sign a loan saying &quot;I&apos;ll pay if the business can&apos;t,&quot; you&apos;ve opened one. If you personally hurt someone, you&apos;re still responsible. And if you treat the LLC&apos;s bank account like your own wallet, a judge can decide the wall was never real.</div>}
        detailed={<div className="prose-p">Per the SBA, an LLC is formed under state law and gives its members limited liability: in most cases they aren&apos;t personally responsible for the company&apos;s debts and liabilities. The practical effect is that a creditor or judgment against the business is satisfied from business assets. Three gaps matter most for small owners. <strong>Contractual waivers</strong>: lenders and landlords routinely require a personal guarantee from owners of small or new LLCs, which makes the owner a direct obligor for that debt; this is standard with <TermLink href="/business-entrepreneurship-basics/how-small-business-loans-actually-work">small business loans</TermLink>. <strong>Personal conduct</strong>: members remain liable for torts they personally commit, such as their own negligence or fraud; the entity shields owners from the business&apos;s liabilities, not their own. <strong>Veil piercing</strong>: per Cornell&apos;s Legal Information Institute, courts may disregard the entity where owners commingle funds, ignore formalities, leave the company severely undercapitalized, or use it to commit fraud. Some tax debts also cut through: the IRS can hold &quot;responsible persons&quot; personally liable for unpaid payroll taxes withheld from employees. On taxes generally, the IRS treats a single-member LLC as a disregarded entity and a multi-member LLC as a partnership by default, with an option to elect corporate treatment.</div>}
      />
      <FootnoteAside>Because LLC rules come from each state, filing fees, annual reports, and details of the liability shield vary. This is general information, not legal advice; for a specific situation, a business attorney in your state is the right source.</FootnoteAside>

      <p>Forming the LLC is only the paperwork step; the <TermLink href="/legal-documentation-howtos/business-registration-documents-explained">business registration documents</TermLink> guide covers what you actually file. Taxes stay tied to you by default, so the <TermLink href="/personal-finance-basics/self-employment-and-freelance-tax-basics">self-employment tax basics</TermLink> still apply to most single-owner LLCs.</p>

      <QuickCheck
        question="Your LLC can't pay a supplier invoice, and you never signed any personal guarantee. What can the supplier usually go after?"
        options={[
          { text: "The LLC's assets, not your personal savings or home", correct: true, explanation: "Correct. This is the core protection: business debts stay with the business when no guarantee or veil-piercing issue exists." },
          { text: "Your personal savings, because you own the LLC", correct: false, explanation: "Ownership alone doesn't make you liable. That's the point of limited liability." },
          { text: "Nothing at all, since LLCs can't be pursued for debts", correct: false, explanation: "The LLC itself owes the debt and can be sued for it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The shield working as intended (baseline case)</h3>
      <div className="prose-p">A bakery LLC signs a two-year equipment rental in the company&apos;s name only, then closes after a year. The rental company can pursue the LLC for the remaining payments and collect from whatever the LLC owns, such as ovens and its bank balance. The owner&apos;s personal home and retirement savings aren&apos;t part of that claim. This is limited liability doing exactly its job.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The loan with a personal guarantee (the common gap)</h3>
      <div className="prose-p">The same owner took a $40,000 bank loan for the LLC. Like most banks lending to a new small business, the bank required the owner&apos;s personal guarantee. When the bakery closes with $25,000 still owed, the bank can collect that from the owner personally. The LLC didn&apos;t fail here. The owner signed away its protection for this one debt, which is why reading what you sign matters more than the entity type.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The mixed-up bank account (veil piercing)</h3>
      <div className="prose-p">A contractor runs a one-person LLC but pays their mortgage and groceries from the business account, never keeps records separating the two, and leaves almost no money in the company. A customer wins a large judgment over bad work and finds the LLC empty. A court looking at these facts may decide the LLC was just the owner under another name and let the customer collect personally. Cornell LII lists commingling and undercapitalization among the classic reasons courts pierce the veil.</div>

      <QuickCheck
        question="In Example 3, what most weakened the contractor's LLC protection?"
        options={[
          { text: "Treating the business account as a personal one and keeping the LLC underfunded", correct: true, explanation: "Correct. Commingling and undercapitalization are what lead courts to disregard the entity." },
          { text: "Having only one member", correct: false, explanation: "Single-member LLCs get the same basic protection when run properly." },
          { text: "Losing a lawsuit", correct: false, explanation: "Businesses lose lawsuits all the time without veil piercing. The behavior matters, not the loss." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="What an LLC usually shields, and where the shield stops"
        type="comparison"
        svgSrc="/diagrams/business-entrepreneurship-basics-what-an-llc-actually-protects-you-from-comparison.svg"
        altText="A two-column comparison. An LLC usually shields you from the company's own debts, lawsuits against the business, and keeps your house, car and savings out of business claims. It usually does not shield loans you personally guarantee, harm you personally cause, or veil piercing from mixed money and ignored formalities."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Paying personal expenses from the LLC's bank account.", fix: "Keep a separate business account and pay yourself through documented owner draws or salary. Separation is what makes the shield hold up." },
          { mistake: "Assuming the LLC protects you on every business loan.", fix: "Check for personal guarantee language before signing. If it's there, that debt is yours too." },
          { mistake: "Forming an LLC expecting a tax cut.", fix: "By default, a one-owner LLC is taxed like a sole proprietorship. Tax changes only come from elections like S corporation status, which have their own rules." },
        ]}
      />
      <MisconceptionCallout
        myth="Once you have an LLC, nothing that goes wrong in the business can touch your personal assets."
        reality={<p>The SBA describes LLC protection as applying &quot;in most cases,&quot; and the exceptions are common in small businesses. Personal guarantees on loans and leases, your own negligent acts, some unpaid payroll taxes, and veil piercing when finances are mixed can all reach personal assets. An LLC is a strong tool when it&apos;s run as a genuinely separate business, backed by adequate insurance, not a force field.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Open a business bank account in the LLC's name and run every business transaction through it.",
          "Sign contracts as the LLC (\"Company Name, LLC, by Your Name, Member\"), not in your personal name.",
          "Before signing any loan or lease, look for personal guarantee language and understand what it means.",
          "Keep the state filings current (annual reports, registered agent) and get general liability insurance appropriate to your work.",
          "For a specific situation, talk to a business attorney or accountant in your state.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does an LLC actually protect you from?", answer: "Mainly the business's own debts and lawsuits against the business. In most cases those claims can reach only the LLC's assets, not your personal ones." },
          { question: "Can you be personally sued if you have an LLC?", answer: "Yes, for things like loans you personally guaranteed, harm you personally caused, or if a court pierces the veil because the LLC wasn't kept separate from your personal finances." },
          { question: "What is piercing the corporate veil?", answer: "It's when a court disregards the LLC or corporation and holds the owners personally liable, usually because they mixed personal and business money, ignored formalities, underfunded the company, or used it for fraud." },
          { question: "Does an LLC save you money on taxes?", answer: "Not by default. The IRS treats a single-member LLC as a disregarded entity and a multi-member LLC as a partnership. Tax changes come only from electing a different classification." },
          { question: "Do I need an LLC for a side hustle?", answer: "Not always. It depends on your liability risk, state fees, and whether you'll keep finances separate. Many low-risk freelancers start as sole proprietors with insurance and form an LLC later." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
