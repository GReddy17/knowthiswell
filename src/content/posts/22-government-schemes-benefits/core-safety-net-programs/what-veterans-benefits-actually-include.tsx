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
  title: "What Veterans Benefits Actually Include",
  category: "government-schemes-benefits",
  order: 10,
  subtopic: "core-safety-net-programs",
  tags: ["veterans benefits", "VA disability compensation", "VA combined rating", "Post-9/11 GI Bill", "VA home loan funding fee", "VA health care eligibility", "PACT Act"],
  date: "2026-10-08",
  updated: "2026-10-08",
  seoScore: 83, seoScoredOn: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-08",
  excerpt: "U.S. veterans benefits span health care, disability pay, the GI Bill, home loans, pensions and burial. Here's what each covers and how eligibility actually works.",
  summary: "U.S. veterans benefits, run by the Department of Veterans Affairs (VA), are a set of separate programs, each with its own eligibility rules. Most require a discharge under conditions other than dishonorable. VA health care is generally available to veterans who served 24 continuous months or the full period they were called up, with many exceptions, and the 2022 PACT Act widened access for toxic-exposure veterans. Disability compensation is a tax-free monthly payment for conditions caused or worsened by service, rated from 0% to 100% in 10% steps; several ratings are combined with VA's own math, not by adding them. The Post-9/11 GI Bill pays tuition, a housing allowance and a books stipend for up to 36 months, scaled by length of service. VA-backed home loans often need no down payment and no mortgage insurance but carry a one-time funding fee, which veterans receiving disability compensation don't pay. Needs-based pension, vocational rehabilitation, life insurance and burial benefits round out the main list. Dollar figures change each year, so check VA's current tables.",
  sources: [
    { label: "U.S. Department of Veterans Affairs — Eligibility for VA health care", url: "https://www.va.gov/health-care/eligibility/" },
    { label: "U.S. Department of Veterans Affairs — Eligibility for VA disability benefits", url: "https://www.va.gov/disability/eligibility/" },
    { label: "U.S. Department of Veterans Affairs — About VA disability ratings (combined ratings)", url: "https://www.va.gov/disability/about-disability-ratings/" },
    { label: "U.S. Department of Veterans Affairs — Current veterans disability compensation rates", url: "https://www.va.gov/disability/compensation-rates/veteran-rates/" },
    { label: "U.S. Department of Veterans Affairs — Post-9/11 GI Bill (Chapter 33)", url: "https://www.va.gov/education/about-gi-bill-benefits/post-9-11/" },
    { label: "U.S. Department of Veterans Affairs — VA funding fee and loan closing costs", url: "https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/" },
    { label: "U.S. Department of Veterans Affairs — The PACT Act and your VA benefits", url: "https://www.va.gov/resources/the-pact-act-and-your-va-benefits/" },
  ],
  seeAlso: [
    "government-schemes-benefits/what-disability-benefits-actually-require-to-qualify",
    "government-schemes-benefits/how-to-actually-apply-for-government-assistance-programs",
    "government-schemes-benefits/what-housing-assistance-programs-actually-offer",
    "government-schemes-benefits/how-public-health-insurance-programs-actually-work",
    "government-schemes-benefits/what-social-security-actually-pays-out-and-when",
  ],
  glossary: [
    { term: "Service connection", definition: "VA's finding that a disability was caused or made worse by military service. It's the gateway to disability compensation." },
    { term: "Combined disability rating", definition: "The single overall percentage VA assigns when a veteran has several rated conditions. It's calculated against the remaining 'whole person', not by adding the ratings, then rounded to the nearest 10%." },
    { term: "Character of discharge", definition: "The type of separation from service, such as honorable, general, other than honorable or dishonorable. Most VA benefits require a discharge under conditions other than dishonorable." },
    { term: "VA funding fee", definition: "A one-time fee on VA-backed home loans, set as a percentage of the loan, that helps fund the program. Veterans receiving VA disability compensation are exempt." },
    { term: "Intent to file", definition: "A notice to VA that you plan to file a claim. It can hold your potential start date for benefits for up to one year while you gather evidence." },
    { term: "Accredited representative", definition: "A Veterans Service Organization representative, claims agent or attorney accredited by VA to help with claims. VSO representatives help for free." },
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
  {"question": "What type of discharge do most VA benefits require?", "difficulty": "easy", "options": [{"text": "A discharge under conditions other than dishonorable", "correct": true, "explanation": "Honorable and general discharges generally qualify; for other-than-honorable discharges, VA makes a case-by-case character-of-discharge decision."}, {"text": "Only an honorable discharge, with no exceptions", "correct": false, "explanation": "The standard is broader than honorable only, and VA reviews some other discharges individually."}, {"text": "No discharge requirement at all", "correct": false, "explanation": "Character of discharge is a core eligibility test for most VA benefits."}]},
  {"question": "VA disability compensation is paid for what?", "difficulty": "easy", "options": [{"text": "Conditions caused or made worse by military service", "correct": true, "explanation": "That link, called service connection, is required before VA rates and pays a disability."}, {"text": "Any condition a veteran develops at any time, regardless of cause", "correct": false, "explanation": "Compensation requires service connection. The needs-based VA pension is a separate program."}, {"text": "Only injuries suffered in combat", "correct": false, "explanation": "Service connection covers illnesses and injuries from any part of service, not only combat."}]},
  {"question": "A veteran has two service-connected conditions rated 50% and 30%. What combined rating does VA assign?", "difficulty": "medium", "options": [{"text": "70%", "correct": true, "explanation": "50% leaves 50% of the 'whole person'; 30% of that is 15, so 50 + 15 = 65, which rounds to 70%."}, {"text": "80%", "correct": false, "explanation": "That simply adds the ratings, which VA's combined ratings method does not do."}, {"text": "50%", "correct": false, "explanation": "The second condition still adds to the combined rating, just less than its face value."}]},
  {"question": "Is VA disability compensation subject to federal income tax?", "difficulty": "easy", "options": [{"text": "No, it's tax-free", "correct": true, "explanation": "VA describes disability compensation as a tax-free monthly payment."}, {"text": "Yes, at ordinary income tax rates", "correct": false, "explanation": "It isn't taxed as income."}, {"text": "Only above a 50% rating", "correct": false, "explanation": "The tax treatment doesn't depend on the rating level."}]},
  {"question": "How many months of education benefits does the Post-9/11 GI Bill generally provide?", "difficulty": "medium", "options": [{"text": "Up to 36 months", "correct": true, "explanation": "That's roughly four academic years of nine-month terms; the share of costs covered depends on length of service."}, {"text": "Up to 12 months", "correct": false, "explanation": "The entitlement is considerably longer than one year."}, {"text": "Unlimited months", "correct": false, "explanation": "Entitlement is capped, generally at 36 months for this program."}]},
  {"question": "Which veterans are exempt from the VA home loan funding fee?", "difficulty": "medium", "options": [{"text": "Veterans receiving VA disability compensation", "correct": true, "explanation": "VA lists disability-compensation recipients among those who don't pay the funding fee."}, {"text": "Every veteran with an honorable discharge", "correct": false, "explanation": "Most borrowers pay the fee; the exemptions are specific."}, {"text": "Only veterans buying homes over $1 million", "correct": false, "explanation": "Price has nothing to do with the exemption."}]},
  {"question": "A veteran using a VA loan for the first time borrows $320,000 with no down payment. At a 2.15% funding fee, what is the fee?", "difficulty": "hard", "options": [{"text": "$6,880", "correct": true, "explanation": "$320,000 × 0.0215 = $6,880. It can usually be paid upfront or rolled into the loan. Check VA's current fee table, as rates can change."}, {"text": "$688", "correct": false, "explanation": "That's off by a factor of ten: 2.15% of $320,000 is $6,880."}, {"text": "$21,500", "correct": false, "explanation": "That would be about 6.7% of the loan, far above the first-use rate."}]},
  {"question": "What did the 2022 PACT Act mainly change?", "difficulty": "medium", "options": [{"text": "It expanded health care and benefits for veterans exposed to burn pits, Agent Orange and other toxins", "correct": true, "explanation": "It added presumptive conditions and widened VA health care eligibility for toxic-exposure veterans."}, {"text": "It abolished the GI Bill", "correct": false, "explanation": "The GI Bill continues; the PACT Act was about toxic exposures."}, {"text": "It ended VA home loans", "correct": false, "explanation": "Home loans were not the subject of the PACT Act."}]},
  {"question": "How does the needs-based VA pension differ from disability compensation?", "difficulty": "hard", "options": [{"text": "Pension is for wartime veterans with limited income and net worth, regardless of whether a condition is service-connected", "correct": true, "explanation": "Pension tests income, net worth and age or disability; compensation tests service connection."}, {"text": "They are the same program with two names", "correct": false, "explanation": "They have different purposes and different eligibility rules."}, {"text": "Pension is only for retired career officers", "correct": false, "explanation": "VA pension is separate from military retirement pay and isn't limited to officers."}]},
  {"question": "What does filing an 'intent to file' with VA do?", "difficulty": "hard", "options": [{"text": "It can hold your potential benefit start date for up to a year while you prepare the full claim", "correct": true, "explanation": "If you file the complete claim within a year, VA can pay back to the intent-to-file date if you're found eligible."}, {"text": "It guarantees approval of the claim", "correct": false, "explanation": "It preserves a date; it doesn't decide eligibility."}, {"text": "It replaces the need for any medical evidence", "correct": false, "explanation": "The claim still needs evidence of the condition and its service connection."}]},
];

export default function Post() {
  return (
    <>
      <div className="my-6 rounded-lg border-2 border-ochre/40 bg-ochre/10 p-4 font-body text-[15px] text-ink">
      <strong>This entry explains how U.S. veterans benefits are structured, cited to the Department of Veterans Affairs. It is general education, not legal or benefits advice. Eligibility depends on your service record and circumstances, and dollar figures change every year. For your situation, contact VA (VA.gov or 800-827-1000) or a free VA-accredited Veterans Service Organization representative.</strong>
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Veterans benefits aren't one package. They're separate VA programs (health care, disability compensation, education, home loans, pension, rehabilitation, insurance, burial), each with its own eligibility test.",
          "Most require a discharge under conditions other than dishonorable. Disability compensation also requires service connection, and multiple ratings are combined with VA math, so 50% plus 30% equals 70%, not 80%.",
          "Figures change yearly: as of the rates effective December 1, 2025, compensation runs from about $180 a month at 10% to about $3,900 at 100% for a veteran alone. Always check VA's current tables.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">People often talk about &quot;veterans benefits&quot; as if it were one thing you either get or don&apos;t. It&apos;s closer to a building with several doors, each with its own key. One door is <strong>health care</strong> through VA hospitals and clinics. Another is <strong>disability compensation</strong>, a monthly tax-free payment if an injury or illness was caused or worsened by service. Another is <strong>education</strong>, mainly the Post-9/11 GI Bill, which can pay tuition and a housing allowance. Others are <strong>VA-backed home loans</strong>, a needs-based <strong>pension</strong> for lower-income wartime veterans, job training through <strong>Veteran Readiness and Employment</strong>, life insurance, and <strong>burial</strong> benefits. Almost every door shares one basic key: a discharge that isn&apos;t dishonorable. After that, each program checks different things: how long you served, when, whether a condition is linked to service, or your income. That&apos;s why two veterans with the same years in uniform can end up with very different benefits, and why it&apos;s worth checking each program separately rather than assuming you don&apos;t qualify.</div>}
        detailed={<div className="prose-p">VA administers benefits through three administrations: the Veterans Health Administration (health care), the Veterans Benefits Administration (compensation, pension, education, home loans, vocational rehabilitation, insurance) and the National Cemetery Administration (burial). The shared threshold is <strong>character of discharge</strong>: honorable and general discharges generally qualify; for other-than-honorable discharges, VA makes an individual determination, and a discharge upgrade through a military review board can change the outcome. <strong>Health care</strong> eligibility generally requires 24 continuous months of service or the full period you were called to active duty, with exceptions (for example, a service-connected disability or a discharge for hardship); enrolled veterans are placed in priority groups 1 to 8 based on service connection, income and other factors, which affects copays. The 2022 <strong>PACT Act</strong> added presumptive conditions and widened health-care eligibility for veterans exposed to burn pits, Agent Orange and other toxins. <strong>Disability compensation</strong> needs a current condition, an in-service event or exposure, and a medical link between them; VA rates each condition from 0% to 100% in 10% steps and combines them using the <strong>whole-person</strong> method. The edge case most people miss: a 0% rating pays nothing but still establishes service connection, which can matter for health care priority and for a later increase if the condition worsens. The <strong>VA pension</strong> is a different test entirely: wartime service, limited income and net worth, and being 65 or older or permanently disabled, with no service connection needed.</div>}
      />
      <FootnoteAside>VA warns veterans about unaccredited &quot;claim consultants&quot; who charge fees to file claims. Under federal rules, only VA-accredited attorneys and claims agents may charge for claims help, and generally only after VA has made an initial decision. Veterans Service Organization representatives help for free.</FootnoteAside>

      <p>For the civilian disability system, which works very differently, see <TermLink href="/government-schemes-benefits/what-disability-benefits-actually-require-to-qualify">what disability benefits require to qualify</TermLink>. For homeless veterans, the HUD-VASH program is covered in <TermLink href="/government-schemes-benefits/what-housing-assistance-programs-actually-offer">what housing assistance programs offer</TermLink>.</p>

      <QuickCheck
        question="A veteran with a general (under honorable conditions) discharge has never applied for anything because she assumes benefits are only for honorable discharges and combat veterans. What's the accurate picture?"
        options={[
          { text: "A general discharge generally meets the 'other than dishonorable' standard, and most VA programs don't require combat service", correct: true, explanation: "Correct. The common threshold is a discharge under conditions other than dishonorable, and programs such as health care, the GI Bill and home loans depend on service length and dates, not combat." },
          { text: "She's right: only honorable discharges with combat service qualify", correct: false, explanation: "That's a widespread misunderstanding. The threshold is broader, and combat isn't a general requirement." },
          { text: "Any veteran qualifies for every benefit automatically, with no application", correct: false, explanation: "Each program has its own rules, and you generally have to apply." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: One service-connected condition (baseline case)</h3>
      <div className="prose-p">Marcus injured his knee during a training exercise and still has limited motion years later. He files a claim with his service treatment records and a current diagnosis. VA finds service connection and rates the knee at 30%. Using the rate table effective December 1, 2025, a 30% rating for a veteran with no dependents pays roughly $550 a month, tax-free; at 30% and above, adding a spouse or children raises the amount. The rating also places him in a higher VA health care priority group. Had he filed an <strong>intent to file</strong> first, VA could have paid back to that date once the full claim was approved, as long as he completed it within a year. The exact payment depends on the current year&apos;s table, which VA adjusts every December in line with the Social Security cost-of-living adjustment.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why 50% plus 30% isn&apos;t 80% (edge case)</h3>
      <div className="prose-p">Dana has two service-connected conditions: one rated 50% and one rated 30%. Adding them suggests 80%, but VA doesn&apos;t add. It treats a person as 100% &quot;whole&quot; and applies each rating to what&apos;s left, largest first. The 50% rating leaves Dana 50% &quot;efficient.&quot; The 30% rating applies to that remaining 50%: 30% × 50 = 15. So 50 + 15 = 65, and VA rounds to the nearest 10, giving a <strong>combined rating of 70%</strong>. The same method means two 10% ratings combine to 19, rounding to 20%, and it&apos;s why reaching 100% through many smaller ratings is harder than adding suggests. A separate bilateral factor can add a little when conditions affect both arms or both legs.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The home loan funding fee (applied case)</h3>
      <div className="prose-p">Two veterans each buy a $320,000 home with a VA-backed loan for the first time and no down payment. VA loans typically require no down payment (when the price doesn&apos;t exceed the appraised value) and no private mortgage insurance, but they carry a one-time <strong>funding fee</strong>. Under VA&apos;s current fee table, the first-use rate with less than 5% down is 2.15%: $320,000 × 0.0215 = <strong>$6,880</strong>, usually rolled into the loan. With 10% down, the rate drops to 1.25% on a $288,000 loan, or $3,600. The second veteran receives disability compensation, so she&apos;s exempt: her fee is $0. That single exemption can be worth thousands of dollars, which is one reason a disability claim can matter even when the monthly payment is small. Fee rates are set by law and VA policy and have changed before, so check the current table when you apply.</div>

      <QuickCheck
        question="A veteran has two service-connected conditions rated 40% and 20%. What combined rating will VA assign?"
        options={[
          { text: "50%", correct: true, explanation: "Correct. 40% leaves 60% remaining; 20% of 60 is 12; 40 + 12 = 52, which rounds to 50%." },
          { text: "60%", correct: false, explanation: "That adds the two ratings directly, which VA's combined ratings method doesn't do." },
          { text: "40%", correct: false, explanation: "The second rating still adds to the total; 52 rounds to 50%, not 40%." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How veterans benefits branch out"
        type="flow"
        svgSrc="/diagrams/government-schemes-benefits-what-veterans-benefits-actually-include-flow.svg"
        altText="A flow diagram: the shared gate is a discharge other than dishonorable. From it, separate programs branch out, each with its own extra test: health care (service length, priority groups 1 to 8), disability compensation (service connection, rated 0 to 100% and combined with VA math), Post-9/11 GI Bill (up to 36 months, scaled by service), home loan (often no down payment, funding fee waived for compensation recipients), pension (wartime service, low income, age 65+ or disabled), and burial benefits. A footer notes figures change every December and to check VA's current tables."
      />
      <p>The diagram&apos;s point is that eligibility is checked program by program. Failing one test, such as having no service-connected condition, doesn&apos;t close the other doors.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming you don't qualify for anything because you didn't serve in combat or didn't retire.", fix: "Check each program separately on VA.gov. Health care, the GI Bill and home loans depend on service length and dates, not combat or retirement." },
          { mistake: "Adding disability ratings together to predict your combined rating.", fix: "VA applies each rating to the remaining 'whole person' and rounds. Use VA's combined ratings table or calculator." },
          { mistake: "Paying an unaccredited company to file a VA claim.", fix: "Use a free accredited Veterans Service Organization representative, or check accreditation on VA's website before paying anyone." },
          { mistake: "Waiting until all your records are gathered before contacting VA.", fix: "Submit an intent to file first. It can hold your start date for up to a year while you build the claim." },
          { mistake: "Treating last year's payment amount or fee rate as permanent.", fix: "Compensation rates are adjusted each December and fee tables can change. Check VA's current figures." },
        ]}
      />
      <MisconceptionCallout
        myth="A 0% disability rating is worthless, so there's no point getting one."
        reality={<p>A 0% rating pays no monthly compensation, but it formally establishes <strong>service connection</strong>. That can affect your VA health care priority group and copays for that condition, and if the condition worsens later, you can ask VA to increase the rating rather than proving the link from scratch. Whether it&apos;s worth pursuing in your case is a good question for an accredited representative.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Get a copy of your DD214 (or equivalent separation document); nearly every VA application starts with it.",
          "Check eligibility program by program on VA.gov: health care, disability, education, home loan, pension and burial.",
          "If you're preparing a disability claim, submit an intent to file to protect your potential start date.",
          "Contact a free VA-accredited Veterans Service Organization representative for help with claims.",
          "If your discharge is other than honorable, ask VA about a character-of-discharge review, and look into a discharge upgrade.",
          "Check VA's current rate and fee tables before relying on any dollar figure, including those in this article.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What benefits are veterans entitled to?", answer: "Main VA programs include health care, disability compensation, education benefits such as the Post-9/11 GI Bill, VA-backed home loans, a needs-based pension, Veteran Readiness and Employment, life insurance and burial benefits. Each has its own eligibility rules." },
          { question: "How does VA calculate a combined disability rating?", answer: "VA applies each rating, largest first, to the remaining 'whole person' and rounds the result to the nearest 10%. For example, 50% and 30% combine to 65, which rounds to 70%." },
          { question: "How much is VA disability pay?", answer: "As of the rates effective December 1, 2025, roughly $180 a month at 10% to roughly $3,900 at 100% for a veteran with no dependents, tax-free. Amounts rise with dependents at 30% and above. Check VA's current rate table." },
          { question: "Do all veterans get VA health care?", answer: "Not automatically. Most veterans who served 24 continuous months or their full call-up period, with a discharge other than dishonorable, can enroll, and there are many exceptions. The PACT Act widened eligibility for toxic-exposure veterans." },
          { question: "Do I need a lawyer to file a VA claim?", answer: "No. Free help is available from VA-accredited Veterans Service Organization representatives. Accredited attorneys and agents can generally charge only after VA's initial decision." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
