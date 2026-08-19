import React from 'react';
import { PostMeta, PostFrontmatter } from '@/types/post';
import {
  KeyTakeaways,
  ModeToggle,
  FootnoteAside,
  QuickCheck,
  DiagramBlock,
  MistakeList,
  MisconceptionCallout,
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "The Civil Rights Movement (US)",
  category: "history-timeline-facts",
  order: 37,
  subtopic: "late-20th-century",
  tags: ["civil rights movement", "us history", "martin luther king jr", "segregation", "voting rights act", "20th century history"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "A factual timeline of the US civil rights movement, from Brown v. Board (1954) through the Civil Rights Act (1964) and Voting Rights Act (1965).",
  summary: "The US civil rights movement was a sustained campaign, roughly from the mid-1950s to the late 1960s, by Black Americans and allies to end legal racial segregation and secure equal voting and civil rights, achieved through organized protest, litigation, and federal legislation rather than any single event.",
  sources: [
    { label: "National Archives — Civil Rights Act of 1964", url: "https://www.archives.gov/milestone-documents/civil-rights-act" },
    { label: "National Archives — Voting Rights Act of 1965", url: "https://www.archives.gov/milestone-documents/voting-rights-act" },
    { label: "Encyclopaedia Britannica — American civil rights movement", url: "https://www.britannica.com/event/American-civil-rights-movement" },
    { label: "National Civil Rights Museum — Timeline", url: "https://www.civilrightsmuseum.org/history" },
  ],
  seeAlso: [
    "history-timeline-facts/end-of-apartheid",
    "history-timeline-facts/fall-of-the-berlin-wall",
    "history-timeline-facts/major-technological-shifts-20th-century",
  ],
  glossary: [
    { term: "Segregation", definition: "The legally enforced separation of Black and white Americans in schools, transportation, housing, and public facilities, formalized in many US states under so-called Jim Crow laws from the late 1800s until the 1960s." },
    { term: "Jim Crow laws", definition: "State and local laws, mostly in the American South, that mandated racial segregation and restricted Black Americans' voting and civil rights from the 1870s until they were dismantled by civil rights-era legislation and court rulings." },
    { term: "Nonviolent civil disobedience", definition: "A protest strategy of deliberately, publicly, and peacefully breaking or challenging an unjust law — such as a sit-in or bus boycott — to draw attention to injustice without using violence." },
    { term: "Civil Rights Act of 1964", definition: "US federal law that outlawed discrimination based on race, color, religion, sex, or national origin in employment and public accommodations." },
    { term: "Voting Rights Act of 1965", definition: "US federal law that outlawed discriminatory voting practices, such as literacy tests, that had been used (mainly in Southern states) to disenfranchise Black voters." },
  ],
  author: {
    slug: "sara-reed-m-j",
    name: "Sara Reed M J",
    credentialLine: "Contributing Editor, KnowThisWell",
  },
  youtubeStatus: "not-started",
  youtubeUrl: "",
  draft: false,
};

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "The US civil rights movement was a sustained, multi-year campaign (roughly the mid-1950s through the late 1960s), not a single protest or the work of one leader acting alone.",
          "Two landmark federal laws mark its clearest legislative outcomes: the Civil Rights Act of 1964, which outlawed discrimination in employment and public accommodations, and the Voting Rights Act of 1965, which outlawed discriminatory voting practices used to disenfranchise Black voters.",
          "The movement combined multiple strategies at once — litigation (such as Brown v. Board of Education, 1954), organized nonviolent protest (bus boycotts, sit-ins, marches), and grassroots voter registration — carried out by many organizations and thousands of participants, not one campaign.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-civil-rights-movement-us">civil rights movement</TermLink> was a sustained effort by Black Americans and allied organizations, from roughly the mid-1950s to the late 1960s, to end legal racial <TermLink href="/history-timeline-facts/the-civil-rights-movement-us">segregation</TermLink> and secure equal voting and civil rights under US law. It used organized, mostly nonviolent protest — bus boycotts, sit-ins, marches — alongside lawsuits and legislative advocacy, and it involved many organizations (including the NAACP, the Southern Christian Leadership Conference, and the Student Nonviolent Coordinating Committee) and thousands of participants, not a single leader or a single event.</div>}
        detailed={<div className="prose-p">The movement is generally dated by historians from the 1954 Supreme Court ruling in <em>Brown v. Board of Education</em>, which found that racially segregated public schools were unconstitutional, through the passage of the Civil Rights Act of 1964 and the Voting Rights Act of 1965. Key documented events include the Montgomery Bus Boycott (1955-56), sparked by Rosa Parks&apos;s arrest for refusing to give up her bus seat and sustained by organized Black community action for over a year; the 1963 March on Washington for Jobs and Freedom, where Dr. Martin Luther King Jr. delivered his &quot;I Have a Dream&quot; speech; and the 1965 marches from Selma to Montgomery, Alabama, in support of voting rights, during which marchers were violently attacked by state troopers on March 7, 1965, an event now known as &quot;Bloody Sunday.&quot; A regional nuance worth noting: <TermLink href="/history-timeline-facts/the-civil-rights-movement-us">Jim Crow laws</TermLink> and legally enforced segregation were concentrated mainly in Southern states, but racial discrimination in housing, employment, and policing was documented nationwide, and Northern cities saw their own civil rights organizing and, in some cases, unrest over these issues during the same period. Historians also describe the movement as encompassing more than the widely taught 1954-1968 period — earlier organizing (such as A. Philip Randolph&apos;s threatened 1941 March on Washington Movement) and later phases addressing economic justice and housing discrimination are part of the same broader arc.</div>}
      />
      <FootnoteAside>The 1963 March on Washington drew an estimated 250,000 participants and is documented by the National Archives as one of the largest political rallies for human rights in US history up to that point; it was organized in large part by veteran organizer Bayard Rustin, working alongside King and a coalition of civil rights groups.</FootnoteAside>
      <p>
      That combination — court rulings, mass organizing, and federal legislation, layered over more than a decade — is what historians point to when explaining why the movement succeeded where earlier, narrower efforts had not.
      </p>

      <QuickCheck
        question="Roughly what period do historians generally use to mark the US civil rights movement's most active phase?"
        options={[
          { text: "A single year, 1963, centered on the March on Washington", correct: false, explanation: "The March on Washington was one major event within a much longer campaign — the movement is generally dated across more than a decade, not a single year." },
          { text: "Roughly the mid-1950s (from the 1954 Brown v. Board ruling) through the late 1960s", correct: true, explanation: "Correct. Historians commonly frame the movement's most active phase from the 1954 Brown v. Board of Education ruling through the passage of the Civil Rights Act of 1964 and Voting Rights Act of 1965, with organizing continuing after." },
          { text: "Only the years Martin Luther King Jr. led the Southern Christian Leadership Conference", correct: false, explanation: "The movement involved many organizations and leaders beyond King and the SCLC, including the NAACP and the Student Nonviolent Coordinating Committee, and includes events both before and after his leadership tenure." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key documented phases</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Phase 1: Brown v. Board of Education and the Montgomery Bus Boycott (baseline)</h3>
      <div className="prose-p">
      In <em>Brown v. Board of Education</em> (1954), the US Supreme Court unanimously ruled that state laws establishing separate public schools for Black and white students were unconstitutional, overturning the &quot;separate but equal&quot; doctrine that had stood since <em>Plessy v. Ferguson</em> (1896). The following year, Rosa Parks&apos;s arrest in Montgomery, Alabama, for refusing to give up her seat to a white passenger led to the Montgomery Bus Boycott, a 381-day mass boycott of the city&apos;s bus system organized by the local Black community, which brought Dr. Martin Luther King Jr. to national prominence and ended with a Supreme Court ruling that segregated public buses were unconstitutional.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Phase 2: Escalating nonviolent protest and federal legislation (variation)</h3>
      <div className="prose-p">
      Through the early-to-mid 1960s, the movement broadened its tactics: student-led lunch-counter sit-ins beginning in Greensboro, North Carolina (1960); Freedom Rides testing desegregation on interstate buses (1961); the 1963 Birmingham campaign, where police used fire hoses and dogs against protesters, images of which drew national and international attention; and the March on Washington (1963). This sustained pressure, combined with the assassination of President John F. Kennedy and President Lyndon B. Johnson&apos;s subsequent push, contributed to Congress passing the Civil Rights Act of 1964. After &quot;Bloody Sunday&quot; in Selma (March 7, 1965), Congress passed the Voting Rights Act of 1965, which the National Archives documents as banning literacy tests and other discriminatory devices used to prevent Black Americans from voting.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Phase 3: Documented legacy and how it is commemorated today (present-day)</h3>
      <div className="prose-p">
      The Civil Rights Act of 1964 and Voting Rights Act of 1965 remain foundational US federal civil rights law, though the Voting Rights Act&apos;s coverage formula was significantly narrowed by the Supreme Court&apos;s 2013 ruling in <em>Shelby County v. Holder</em>. Martin Luther King Jr. Day, a US federal holiday since 1986, commemorates the movement, and institutions including the Smithsonian National Museum of African American History and Culture and the National Civil Rights Museum (built around the former Lorraine Motel in Memphis, where King was assassinated in 1968) document the movement&apos;s history for the public today.
      </div>

      <QuickCheck
        question="What did the Civil Rights Act of 1964 and the Voting Rights Act of 1965 each specifically address?"
        options={[
          { text: "The 1964 Act addressed voting; the 1965 Act addressed school segregation", correct: false, explanation: "This reverses the focus — school segregation was addressed earlier by the 1954 Brown v. Board ruling, not either of these two acts." },
          { text: "The 1964 Act outlawed discrimination in employment and public accommodations; the 1965 Act outlawed discriminatory voting practices such as literacy tests", correct: true, explanation: "Correct, per the National Archives. The two laws addressed distinct, documented problems a year apart, following different organizing campaigns and events." },
          { text: "Both acts covered exactly the same ground and were passed for redundancy", correct: false, explanation: "They addressed different areas of discrimination — employment/public accommodations versus voting access — and were passed a year apart in response to different events." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="US civil rights movement: key documented milestones, 1954-1965"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-the-civil-rights-movement-us-milestones-timeline.svg"
        altText="Horizontal timeline showing Brown v. Board of Education in 1954, the Montgomery Bus Boycott from 1955 to 1956, the Greensboro sit-ins in 1960, the Freedom Rides in 1961, the Birmingham campaign and March on Washington in 1963, the Civil Rights Act in 1964, and Bloody Sunday in Selma followed by the Voting Rights Act in 1965."
      />
      <p>
      Laid out this way, the pattern is visible: each major legislative outcome (1964, 1965) followed a specific, documented campaign of organized protest and public attention, not a spontaneous or isolated event — a sequence historians describe as sustained pressure translating into legal change over more than a decade.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the movement as the work of one leader, Martin Luther King Jr., acting alone.", fix: "King was a central and widely recognized figure, but the movement involved many organizations (NAACP, SCLC, SNCC, CORE) and leaders, including Rosa Parks, Bayard Rustin, John Lewis, Ella Baker, and Fannie Lou Hamer, among thousands of participants." },
          { mistake: "Assuming legal segregation ended nationwide the moment the Civil Rights Act passed in 1964.", fix: "The Act banned discrimination in specific areas (employment, public accommodations) and enforcement, compliance, and further legal change took years afterward; the Voting Rights Act followed a full year later to address voting access specifically." },
          { mistake: "Assuming Jim Crow-era segregation was limited to a distant, isolated part of the past with no documented connection to later policy.", fix: "The Voting Rights Act's core coverage formula was itself narrowed by the Supreme Court as recently as 2013 (Shelby County v. Holder), a documented legal development historians and legal scholars continue to analyze." },
        ]}
      />
      <MisconceptionCallout
        myth="The US civil rights movement was won through a single dramatic event, or by one leader acting alone, rather than a sustained, multi-year, multi-strategy campaign."
        reality={<p>Historians document the movement as a sustained effort spanning roughly a decade and a half, combining litigation (such as <em>Brown v. Board</em>, 1954), organized nonviolent protest (the Montgomery Bus Boycott, sit-ins, Freedom Rides, the Birmingham campaign, the March on Washington), and grassroots voter organizing, carried out by multiple organizations and thousands of participants. Its two clearest legislative outcomes, the Civil Rights Act of 1964 and the Voting Rights Act of 1965, were passed a year apart, each following a specific, separately organized campaign — not a single unified moment.</p>}
      />

      <QuickCheck
        question="Which best describes how historians and institutions such as the National Archives characterize the movement's path to the 1964 and 1965 acts?"
        options={[
          { text: "As a spontaneous, unplanned reaction to a single incident", correct: false, explanation: "The documented record shows organized campaigns — boycotts, sit-ins, marches, and litigation — planned and sustained over years, not a spontaneous single reaction." },
          { text: "As a sustained, multi-year campaign combining litigation, organized nonviolent protest, and grassroots organizing across many groups and leaders", correct: true, explanation: "Correct. This is how the National Archives and mainstream historical scholarship document the period, tying specific protest campaigns to specific legislative outcomes." },
          { text: "As entirely a top-down effort initiated by the federal government with little grassroots organizing", correct: false, explanation: "The documented record shows the opposite direction of pressure — grassroots organizing and protest by Black Americans and allied organizations preceded and drove the federal legislative response." },
        ]}
      />

      <EntryCalculator
        title="Years since the Civil Rights Act became law"
        fields={[
          { key: "year", label: "Reference year (Civil Rights Act signed: 1964)", defaultValue: 1964 },
        ]}
        resultLabel="Years elapsed since that year"
        formula="yearsSinceYear"
        formatResult="years"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see the movement summarized as \"one leader, one speech,\" mentally restore the full cast — Parks, Rustin, Lewis, Baker, Hamer, and the organizations that sustained the campaign for over a decade.",
          "When you encounter the 1964 and 1965 acts referenced together, remember they addressed distinct problems (employment/public accommodations vs. voting access) a year apart, not one combined law.",
          "Notice when Jim Crow-era segregation is framed as purely a Southern issue — historical records document housing and employment discrimination nationwide during the same period.",
          "If you visit or read about the National Civil Rights Museum or the Smithsonian NMAAHC, treat them as primary reference points for verified detail beyond what any single article can cover.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "When did the civil rights movement start and end?", answer: "Historians most commonly date its most active phase from the 1954 Brown v. Board of Education ruling through the Civil Rights Act of 1964 and Voting Rights Act of 1965, with organizing and legal developments continuing both before and after that period." },
          { question: "What was the difference between the Civil Rights Act of 1964 and the Voting Rights Act of 1965?", answer: "The Civil Rights Act of 1964 outlawed discrimination based on race, color, religion, sex, or national origin in employment and public accommodations. The Voting Rights Act of 1965, passed a year later, specifically outlawed discriminatory voting practices, such as literacy tests, used to prevent Black Americans from voting." },
          { question: "Who were the key leaders of the civil rights movement besides Martin Luther King Jr.?", answer: "Documented leaders and organizers include Rosa Parks, Bayard Rustin (a chief organizer of the March on Washington), John Lewis, Ella Baker, Fannie Lou Hamer, and organizations including the NAACP, the Southern Christian Leadership Conference, the Student Nonviolent Coordinating Committee, and the Congress of Racial Equality." },
          { question: "What happened on Bloody Sunday in Selma?", answer: "On March 7, 1965, marchers advocating for voting rights were violently attacked by Alabama state troopers as they attempted to cross the Edmund Pettus Bridge in Selma. The event was widely covered and is documented as a direct catalyst for the Voting Rights Act of 1965, passed later that year." },
          { question: "Is the Voting Rights Act of 1965 still fully in effect today?", answer: "Its core protections remain law, but the Supreme Court's 2013 ruling in Shelby County v. Holder struck down the formula used to determine which jurisdictions required federal pre-approval (\"preclearance\") for voting law changes, a documented legal change that reduced part of the Act's original enforcement mechanism." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
