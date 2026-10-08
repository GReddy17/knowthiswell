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
  title: "What a Business License Actually Requires",
  category: "business-entrepreneurship-basics",
  order: 8,
  subtopic: "starting-from-zero",
  tags: ["business license", "permits", "small business", "sales tax permit", "zoning"],
  date: "2026-10-01",
  updated: "2026-10-01",
  youtubeShort: false, youtubeLong: false,
  seoScore: 83, seoScoredOn: "2026-10-02",
  lastReviewed: "2026-10-01",
  excerpt: "A business license isn't one document. It's a stack of federal, state and local approvals set by what you sell, where you operate, and whether you hire.",
  summary: "In the United States there is no single, universal business license. According to the U.S. Small Business Administration, the licenses and permits a business needs depend on its activity, its location and the government agencies that regulate that activity. Most businesses need little or nothing at the federal level unless they work in a regulated field such as alcohol, firearms, aviation, broadcasting or agriculture. At the state level, common requirements include occupational or professional licenses for regulated trades and a sales tax (seller's) permit for selling taxable goods. Locally, a city or county may require a general business license or business tax registration, a zoning or home-occupation approval, and health, fire or sign permits. Separate from licensing, registering a business entity with the state and getting an Employer Identification Number from the IRS are often required, especially once you hire employees. Fees, renewal periods and penalties vary widely by state and city, so the authoritative answer always comes from the specific state and local offices, often through a small business portal or a local SBA or SCORE adviser.",
  sources: [
    { label: "U.S. Small Business Administration — Apply for licenses and permits", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" },
    { label: "U.S. Small Business Administration — Register your business", url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business" },
    { label: "Internal Revenue Service — Employer ID Numbers (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers" },
    { label: "SCORE — free small business mentoring (SBA resource partner)", url: "https://www.score.org/" },
  ],
  seeAlso: [
    "government-schemes-benefits/how-small-business-government-grants-actually-get-awarded",
    "business-entrepreneurship-basics/what-an-llc-actually-protects-you-from",
    "legal-documentation-howtos/understanding-permits-and-licenses-general-categories",
    "legal-documentation-howtos/business-registration-documents-explained",
    "business-entrepreneurship-basics/what-a-business-plan-actually-needs-to-include",
    "business-entrepreneurship-basics/how-to-actually-validate-a-business-idea-before-building-it",
  ],
  glossary: [
    { term: "General business license", definition: "A city or county registration (sometimes called a business tax certificate) that lets a business operate in that jurisdiction. Not every locality requires one." },
    { term: "Occupational license", definition: "A state-issued license for a regulated profession or trade, such as cosmetology, contracting or real estate, usually requiring training or an exam." },
    { term: "Seller's permit", definition: "A state registration to collect and remit sales tax on taxable goods or services. Also called a sales tax permit or license." },
    { term: "Home occupation permit", definition: "A local zoning approval for running a business from a residence, often with limits on signs, customer visits and employees." },
    { term: "DBA (doing business as)", definition: "A registration of a trade name different from the owner's legal name or the entity's registered name." },
    { term: "EIN", definition: "Employer Identification Number, a federal tax ID issued free by the IRS. Required for most businesses with employees and for many entity types." },
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
  {"question": "Is there one universal business license for the whole United States?", "difficulty": "easy", "options": [{"text": "No; requirements depend on activity and location, across federal, state and local levels", "correct": true, "explanation": "The SBA says exactly this: what you need varies by what you do and where."}, {"text": "Yes, issued by the IRS", "correct": false, "explanation": "The IRS issues tax IDs, not business licenses."}, {"text": "Yes, issued by the SBA", "correct": false, "explanation": "The SBA guides; it doesn't license businesses."}]},
  {"question": "Which kind of business typically needs a federal license or permit?", "difficulty": "medium", "options": [{"text": "One in a federally regulated activity, such as selling alcohol or firearms", "correct": true, "explanation": "The SBA lists regulated areas like alcohol, firearms, aviation, broadcasting and agriculture."}, {"text": "Every online store", "correct": false, "explanation": "Selling online doesn't by itself trigger a federal license."}, {"text": "Every freelancer", "correct": false, "explanation": "Most freelance work needs no federal license."}]},
  {"question": "What is a seller's permit for?", "difficulty": "easy", "options": [{"text": "Collecting and remitting state sales tax on taxable sales", "correct": true, "explanation": "States that have a sales tax generally require it before you make taxable sales."}, {"text": "Proving you own your business name", "correct": false, "explanation": "That's closer to entity or trade name registration."}, {"text": "Hiring employees", "correct": false, "explanation": "Hiring triggers payroll and EIN requirements instead."}]},
  {"question": "A person starts baking cakes at home to sell at a farmers market. Which approvals are most likely to come into play?", "difficulty": "medium", "options": [{"text": "State cottage food or food-safety rules, local business registration, and possibly a sales tax permit", "correct": true, "explanation": "Food is regulated at the state and local level; specifics vary widely."}, {"text": "Only a federal food license", "correct": false, "explanation": "Small home bakers are mainly regulated by states and localities."}, {"text": "Nothing, because it's a small business", "correct": false, "explanation": "Size doesn't exempt food sales from food-safety rules."}]},
  {"question": "What does a home occupation permit usually control?", "difficulty": "medium", "options": [{"text": "Whether and how a business can run from a residence: signs, customer traffic, employees", "correct": true, "explanation": "It's a zoning tool to keep residential areas residential."}, {"text": "Your income tax rate", "correct": false, "explanation": "Zoning doesn't set tax rates."}, {"text": "Your professional qualifications", "correct": false, "explanation": "That's an occupational license."}]},
  {"question": "Is forming an LLC the same as getting a business license?", "difficulty": "easy", "options": [{"text": "No; forming an entity registers it with the state, while licenses authorize specific activities", "correct": true, "explanation": "You can have an LLC and still need local, state or occupational licenses."}, {"text": "Yes, the LLC filing includes all licenses", "correct": false, "explanation": "Entity formation and licensing are separate processes."}, {"text": "Yes, but only in some states", "correct": false, "explanation": "They're distinct everywhere."}]},
  {"question": "How much does an EIN from the IRS cost when you apply directly?", "difficulty": "easy", "options": [{"text": "Nothing; the IRS issues EINs free", "correct": true, "explanation": "Third-party sites that charge are a paid middleman, not a requirement."}, {"text": "$500", "correct": false, "explanation": "There's no IRS fee for an EIN."}, {"text": "It depends on your state", "correct": false, "explanation": "The EIN is federal and free."}]},
  {"question": "Why do business licenses often have to be renewed?", "difficulty": "medium", "options": [{"text": "Many expire annually or periodically, and renewal keeps the registration and any fees current", "correct": true, "explanation": "Renewal periods and fees vary by jurisdiction, so put dates in a calendar."}, {"text": "They never need renewing", "correct": false, "explanation": "Many local and occupational licenses do expire."}, {"text": "Only if the owner changes their name", "correct": false, "explanation": "Renewal is usually time-based."}]},
  {"question": "A consultant moves her one-person business from one city to another in the same state. What should she check?", "difficulty": "hard", "options": [{"text": "The new city's and county's local license, tax and zoning rules", "correct": true, "explanation": "Local requirements don't transfer; each jurisdiction sets its own."}, {"text": "Nothing; licenses are statewide", "correct": false, "explanation": "Many requirements are local."}, {"text": "Only her federal license", "correct": false, "explanation": "Most consultants have no federal license at all."}]},
  {"question": "Where does the SBA suggest getting free help working out which licenses you need?", "difficulty": "easy", "options": [{"text": "SBA resource partners like SCORE and Small Business Development Centers, plus state and local offices", "correct": true, "explanation": "They know the local rules and don't charge for basic guidance."}, {"text": "Any paid online filing service", "correct": false, "explanation": "These can help with paperwork but aren't authoritative."}, {"text": "The IRS", "correct": false, "explanation": "The IRS handles federal tax, not licenses."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>Licensing rules vary by state, county and city, and they change.</strong> This entry explains how the system is generally structured in the United States, based on SBA and IRS guidance. It isn&apos;t legal advice. Confirm your specific requirements with your state and local licensing offices, or a free SBA resource partner such as SCORE.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "There's no single US business license. What you need is a stack of approvals set by what you do, where you do it, and whether you hire, per the SBA.",
          "Most small businesses deal mainly with local and state requirements: a city or county business license, zoning approval, a sales tax permit, and any occupational license their trade requires.",
          "Federal licenses apply only to regulated activities such as alcohol, firearms, aviation or broadcasting. Entity registration and an EIN are separate steps from licensing.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">People talk about &quot;getting a business license&quot; as if it were one form, like a driver&apos;s license. It&apos;s more like a stack of keys, each opening a different door. One key comes from your city, letting you operate there at all. Another comes from the state, letting you collect sales tax. If your trade is regulated (hair, electrical work, real estate, food), there&apos;s a key that proves you&apos;re qualified. And if you work from home, the zoning office may need to say a business is allowed on your street. Which keys you need depends on three questions: what are you doing, where are you doing it, and are you hiring anyone? A freelance writer working from a laptop might need almost nothing. A restaurant needs a whole keyring.</div>}
        detailed={<div className="prose-p">The SBA&apos;s framing is that licensing is driven by <strong>activity</strong>, <strong>location</strong> and the <strong>agency</strong> that regulates the activity. <strong>Federal:</strong> required only for federally regulated activities. The SBA&apos;s list includes agriculture (USDA), alcohol (the Alcohol and Tobacco Tax and Trade Bureau), aviation (FAA), firearms and explosives (ATF), broadcasting (FCC), commercial fishing, maritime transport, mining and drilling, nuclear energy, and certain transportation. <strong>State:</strong> occupational and professional licenses for regulated trades, a sales tax permit if you sell taxable goods or services in a state with a sales tax, and sometimes industry permits (for example, food handling or contractor registration). <strong>Local:</strong> a general business license or business tax registration (not every jurisdiction has one), zoning and certificate-of-occupancy approval, home-occupation permits, and health, fire, building and sign permits. Running alongside licensing but legally distinct are <TermLink href="/legal-documentation-howtos/business-registration-documents-explained">registration steps</TermLink>: forming an entity with the secretary of state (such as an <TermLink href="/business-entrepreneurship-basics/what-an-llc-actually-protects-you-from">LLC</TermLink>), filing a DBA if you use a trade name, and getting a free EIN from the IRS, which is required once you have employees and for most entities other than single-owner businesses without staff. If you&apos;re hoping to offset startup costs, note that <TermLink href="/government-schemes-benefits/how-small-business-government-grants-actually-get-awarded">small business government grants</TermLink> rarely fund general startup costs and are awarded through competitive, scored reviews.</div>}
      />
      <FootnoteAside>The distinction between a permit and a license is fuzzy in everyday use. Broadly, a license authorizes an ongoing activity or profession, while a permit approves a specific action or place, such as a building change or a sign. The <TermLink href="/legal-documentation-howtos/understanding-permits-and-licenses-general-categories">general categories post</TermLink> in Legal &amp; Documentation covers that taxonomy; this post is about the practical stack a new business works through.</FootnoteAside>

      <QuickCheck
        question="Which question has the biggest influence on which licenses a business needs?"
        options={[
          { text: "What activity it performs and where it operates", correct: true, explanation: "Correct. Activity and location determine which agencies regulate you." },
          { text: "How much revenue it expects in year one", correct: false, explanation: "Revenue matters for taxes, but it rarely decides licensing." },
          { text: "Whether the owner has a business degree", correct: false, explanation: "Licensing looks at the activity and sometimes trade qualifications, not general business education." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The four-question checklist</h2>
      <p>Before searching for forms, answer these. Each &quot;yes&quot; adds a layer.</p>
      <ol className="list-decimal pl-6 space-y-2 my-4">
        <li><strong>Is my activity regulated?</strong> Food, alcohol, childcare, health services, construction trades, personal care, transport, finance and real estate usually are, at state level and sometimes federal.</li>
        <li><strong>Do I sell taxable goods or services?</strong> If your state has a sales tax, you&apos;ll likely need a seller&apos;s permit before the first sale.</li>
        <li><strong>Where physically will I operate?</strong> Your city and county set business registration, zoning and building rules. Home-based businesses often need a home-occupation approval.</li>
        <li><strong>Will I hire?</strong> Employees bring an EIN, state payroll tax registration and workers&apos; compensation insurance (rules vary by state).</li>
      </ol>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <p>Fees and exact rules differ by place, so these examples describe the typical structure, not a specific city&apos;s costs.</p>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A freelance graphic designer working from home (baseline case)</h3>
      <div className="prose-p">No regulated activity, no physical customers, no employees, and design services aren&apos;t taxable in many states. The likely stack is short: a city or county business registration if the locality requires one, possibly a home-occupation approval (often simple when no clients visit), and a DBA if she trades under a studio name rather than her own. She doesn&apos;t need an EIN as a sole proprietor without employees, though many freelancers get one anyway (it&apos;s free) to avoid handing out their Social Security number on client tax forms. Total paperwork: often an afternoon.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A mobile food truck (edge case, many layers)</h3>
      <div className="prose-p">This is where the stack gets tall. The state or county health department inspects and permits the truck and usually requires a food-handler or food-manager certificate. A sales tax permit is needed for food sales. Each city the truck operates in may require its own business license and a mobile vending permit, sometimes with rules on where and when it can park. The fire department may inspect cooking equipment, and the truck needs commercial vehicle registration and insurance. Move to a new city and several of these start again. A food truck is the clearest case of why &quot;the&quot; business license is a myth.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A two-person hair salon opening a storefront (applied)</h3>
      <div className="prose-p">The owners each need a state cosmetology license (training hours plus an exam), and many states also license the salon premises itself. The city requires a business license and, before opening, a zoning check and certificate of occupancy for the space. A sign permit covers the storefront sign. Selling hair products means a sales tax permit. Hiring a receptionist adds an EIN, state payroll registration and workers&apos; compensation coverage. Doing these in the right order matters: signing a lease before confirming zoning is a classic expensive mistake, which is why the SBA and SCORE advisers suggest checking local zoning first.</div>

      <QuickCheck
        question="An entrepreneur forms an LLC with the state. Can they open their bakery the next day?"
        options={[
          { text: "Probably not; entity formation doesn't cover health permits, local licenses or zoning", correct: true, explanation: "Correct. The LLC is a legal structure. Food businesses still need health, local and tax approvals." },
          { text: "Yes, the LLC is the business license", correct: false, explanation: "Forming an entity and licensing an activity are separate." },
          { text: "Yes, as long as they have an EIN", correct: false, explanation: "An EIN is a tax ID, not permission to operate." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The business license stack: federal, state, local"
        type="flow"
        svgSrc="/diagrams/business-entrepreneurship-basics-what-a-business-license-actually-requires-flow.svg"
        altText="A layered diagram. Top layer, federal: only for regulated activities such as alcohol, firearms, aviation and broadcasting. Middle layer, state: occupational licenses, sales tax permit, entity registration. Bottom layer, local: city or county business license, zoning and home-occupation approval, health, fire and sign permits. A side bar notes the IRS EIN is free and needed once you hire."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming forming an LLC or corporation means you're licensed.", fix: "Entity registration sets up the legal structure. Check activity licenses, local registration and tax permits separately." },
          { mistake: "Signing a lease before checking zoning.", fix: "Confirm with the local planning or zoning office that your activity is allowed at that address before you commit." },
          { mistake: "Paying a website to get a \"free\" EIN.", fix: "Apply directly on IRS.gov. The EIN itself costs nothing." },
          { mistake: "Forgetting renewals.", fix: "Many local and occupational licenses expire on a cycle. Put every renewal date in a calendar the day you receive the license." },
        ]}
      />
      <MisconceptionCallout
        myth="Small or online businesses don't need any licenses."
        reality={<p>Size and being online don&apos;t create an exemption. An online seller may still need a sales tax permit, and a home-based business may still need local registration or zoning approval. Many very small service businesses do need little, but that&apos;s because of what they do and where, not how small they are.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Answer the four questions: regulated activity, taxable sales, physical location, employees.",
          "Read the SBA's \"Apply for licenses and permits\" page and follow its links to your state's business portal.",
          "Call or visit your city or county clerk's or licensing office and ask what a business like yours needs at your address.",
          "Check zoning before signing any lease or investing in a home setup.",
          "Get your EIN directly from IRS.gov if you'll hire or your entity type needs one.",
          "Book a free session with a SCORE mentor or Small Business Development Center if the stack looks complicated.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Do I need a business license to start a business?", answer: "Usually something, but not one universal license. Most businesses need at least local registration or a tax permit; regulated activities need more. Your city, county and state offices give the definitive answer." },
          { question: "How much does a business license cost?", answer: "It varies widely by city, state and activity, from no fee in some places to substantial fees for regulated trades. Check the current fee schedule with your local and state offices." },
          { question: "Do I need a business license for an online business?", answer: "Often yes, at least local registration where you're based and a sales tax permit if you sell taxable goods. Selling online doesn't by itself trigger a federal license." },
          { question: "Is an EIN the same as a business license?", answer: "No. An EIN is a free federal tax ID from the IRS. It identifies your business for tax purposes but doesn't authorize you to operate." },
          { question: "What happens if you operate without a required license?", answer: "Consequences depend on the jurisdiction and can include fines, back fees, closure orders, or trouble enforcing contracts in some licensed trades. It's cheaper to check first." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
