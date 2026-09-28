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
  title: "What Table Manners Actually Matter Today",
  category: "life-skills-etiquette",
  order: 6,
  subtopic: "social-skills",
  tags: ["table manners", "dining etiquette", "phone at the table", "business dinner", "place setting", "etiquette"],
  date: "2026-09-27",
  updated: "2026-09-27",
  lastReviewed: "2026-09-27",
  excerpt: "Most table manners that still matter are about other people: phone away, wait for everyone to be served, chew with your mouth closed, pass instead of reaching. Fork style and elbow rules matter far less.",
  summary: "Table manners that still matter today are the ones that affect the people eating with you, not the ones that test knowledge of formal rules. The most noticed today is phone use: in a 2015 Pew Research Center survey, 88% of U.S. adults said it is generally not OK to use a cellphone during a family dinner. Other manners that still carry weight: waiting until everyone is served (or the host starts) before eating, chewing with your mouth closed, not talking with food in your mouth, passing dishes rather than reaching across people, and keeping your napkin on your lap. The Emily Post Institute's guidance adds practical conventions: pass food counterclockwise (to the right) so dishes don't collide, and remember 'b and d' (bread plate on the left, drink on the right). Rules that matter much less now include American versus continental fork style, which are both correct, and elbows on the table between courses. In business meals and other cultures, the stakes and specifics change, so it's worth watching the host.",
  sources: [
    { label: "Emily Post Institute — Dining Etiquette (advice index)", url: "https://emilypost.com/advice/dining-etiquette" },
    { label: "Emily Post Institute — Passing Food at the Table", url: "https://emilypost.com/advice/passing-food-at-the-table" },
    { label: "Emily Post Institute — Table Manners Video: B & D for Bread and Drink", url: "https://emilypost.com/advice/table-manners-video-b-and-d-for-bread-and-drink" },
    { label: "Pew Research Center (2015) — Americans' Views on Mobile Etiquette", url: "https://www.pewresearch.org/internet/2015/08/26/americans-views-on-mobile-etiquette/" },
    { label: "Encyclopaedia Britannica — Etiquette", url: "https://www.britannica.com/topic/etiquette" },
  ],
  seeAlso: [
    "festivals-culture/dining-etiquette-around-the-world",
    "life-skills-etiquette/how-to-actually-build-rapport-quickly",
    "life-skills-etiquette/what-active-listening-actually-looks-like-in-practice",
    "life-skills-etiquette/what-professional-email-etiquette-actually-requires",
    "life-skills-etiquette/how-to-actually-negotiate-a-better-price",
  ],
  glossary: [
    { term: "Continental style", definition: "Holding the fork in the left hand and knife in the right throughout the meal, without switching hands." },
    { term: "American (zigzag) style", definition: "Cutting with the fork in the left hand, then setting the knife down and switching the fork to the right hand to eat." },
    { term: "B and D", definition: "A memory trick: make 'OK' signs with both hands; the left forms a 'b' (bread plate on the left), the right a 'd' (drink on the right)." },
    { term: "Finished position", definition: "Placing knife and fork side by side on the plate to signal you're done eating." },
    { term: "Host cue", definition: "Taking your lead from the host, such as starting to eat or placing your napkin, when you're unsure." },
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
  {"question": "Which table-manner lapse do most U.S. adults object to at a family dinner, according to Pew?", "difficulty": "easy", "options": [{"text": "Using a cellphone", "correct": true, "explanation": "88% said it's generally not OK during a family dinner."}, {"text": "Using continental fork style", "correct": false, "explanation": "Fork style wasn't asked about, and both styles are acceptable."}, {"text": "Putting a napkin on your lap", "correct": false, "explanation": "That's good manners."}]},
  {"question": "Which direction should dishes be passed at a shared table, by convention?", "difficulty": "medium", "options": [{"text": "Counterclockwise, to the right", "correct": true, "explanation": "The point is that everything moves the same way so dishes don't collide."}, {"text": "Whichever way is fastest for each dish", "correct": false, "explanation": "Mixing directions causes dish traffic jams."}, {"text": "Only the host may pass food", "correct": false, "explanation": "Guests pass dishes to each other."}]},
  {"question": "Using the 'b and d' trick, where is your bread plate?", "difficulty": "easy", "options": [{"text": "On your left", "correct": true, "explanation": "Left hand makes a 'b' for bread; right makes a 'd' for drink."}, {"text": "On your right", "correct": false, "explanation": "Your drink is on your right."}, {"text": "Directly in front of your dinner plate", "correct": false, "explanation": "Dessert utensils sometimes go there, not the bread plate."}]},
  {"question": "Is continental style (fork stays in the left hand) rude in the U.S.?", "difficulty": "medium", "options": [{"text": "No. Both continental and American styles are correct", "correct": true, "explanation": "Either is fine as long as you eat neatly."}, {"text": "Yes, Americans must switch hands", "correct": false, "explanation": "Switching is the American habit, not a requirement."}, {"text": "Only at business meals", "correct": false, "explanation": "It's acceptable everywhere."}]},
  {"question": "You're at a table of six and your food arrives first. What should you do?", "difficulty": "medium", "options": [{"text": "Wait until everyone is served or the host invites you to start", "correct": true, "explanation": "In a small group, starting together is still expected."}, {"text": "Start immediately so your food doesn't get cold", "correct": false, "explanation": "Unless the others insist, wait for them."}, {"text": "Send it back until everyone's is ready", "correct": false, "explanation": "No need; just wait a moment."}]},
  {"question": "What's the best general rule when you don't know a table custom, especially in another culture?", "difficulty": "hard", "options": [{"text": "Watch the host and follow their lead", "correct": true, "explanation": "Hosts set the norms, and following them avoids most mistakes."}, {"text": "Do whatever you'd do at home", "correct": false, "explanation": "Norms vary; what's fine at home may not be elsewhere."}, {"text": "Avoid eating until you've looked it up", "correct": false, "explanation": "Observation works faster and is less awkward."}]},
  {"question": "At a business dinner, which matters most?", "difficulty": "hard", "options": [{"text": "Being attentive to the people: phone away, conversation first, modest ordering", "correct": true, "explanation": "People judge your attentiveness far more than your utensil technique."}, {"text": "Using the correct fish fork", "correct": false, "explanation": "Few people notice; outside-in is a safe default anyway."}, {"text": "Finishing your plate faster than everyone", "correct": false, "explanation": "Pacing with the group is better."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "The table manners that still matter are about the people you're eating with: phone away, wait for others, chew quietly, pass instead of reach.",
          "Many formal rules, like fork style or never resting elbows on the table, matter much less than they used to.",
          "When unsure, especially abroad or at a business meal, watch the host and follow their lead.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Most table manners exist so people can share a meal without annoying or grossing each other out. That&apos;s a useful test for any rule. Checking your phone tells the people across from you they&apos;re less interesting than your screen, so it matters a lot. Chewing with your mouth open is unpleasant to watch, so it still matters. Reaching across someone&apos;s plate is awkward, so pass instead. But whether you switch your fork to your right hand after cutting? Nobody is bothered either way. Once you know the reason behind a rule, you can tell which ones still count.</div>}
        detailed={<div className="prose-p">Etiquette, as Britannica describes it, is a code of conventional behavior within a social group, and conventions change. The rules that have held up are the ones with a clear social function. <strong>Attention</strong>: in Pew Research Center&apos;s 2015 survey, 88% of U.S. adults said using a cellphone during a family dinner is generally not OK. <strong>Coordination</strong>: waiting until everyone is served (or the host begins) keeps a small group eating together; the Emily Post Institute&apos;s convention of passing dishes counterclockwise exists so several dishes don&apos;t collide, though if a nearby person on your left asks, you just hand it to them. <strong>Not imposing on others</strong>: mouth closed while chewing, no talking with food in your mouth, napkin on the lap, and asking for things to be passed rather than reaching across. <strong>Orientation</strong>: &quot;b and d&quot; (bread left, drink right) and working from the outside utensils in solve the practical problem of a crowded place setting. What&apos;s faded: <strong>fork style</strong> (American zigzag and continental are both correct), elbows on the table between courses, and rigid formal-seating rules outside official events. Context still shifts the stakes. At a business meal, manners are read as a sign of how you&apos;ll treat clients, and in other cultures the specifics differ (see <TermLink href="/festivals-culture/dining-etiquette-around-the-world">dining etiquette around the world</TermLink>).</div>}
      />
      <FootnoteAside>Norms vary by country, region, family and occasion. This guide reflects common U.S. and broadly Western conventions; when in doubt, the host&apos;s behavior is the best guide.</FootnoteAside>

      <QuickCheck
        question="What's the best test for whether a table manner still matters?"
        options={[
          { text: "Whether it affects the comfort or attention of the people eating with you", correct: true, explanation: "Correct. Rules with a clear social purpose have lasted; purely formal ones have faded." },
          { text: "Whether it appears in an old etiquette book", correct: false, explanation: "Many old rules no longer matter to most people." },
          { text: "Whether it's the way your family did it", correct: false, explanation: "Family habits vary; the social purpose is a better guide." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A family dinner (baseline case)</h3>
      <div className="prose-p">Eight people, one table, shared dishes. You put your phone away (face-down still signals you&apos;re half elsewhere), place your napkin on your lap when you sit, and wait for the host to start. Dishes move counterclockwise; when you want the potatoes, you ask for them to be passed rather than stretching across your cousin. You take a reasonable portion so there&apos;s enough to go around, and if you step away, you leave your napkin on your chair. None of this is fancy. It just keeps the meal pleasant for eight people at once.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The urgent phone call (edge case)</h3>
      <div className="prose-p">You&apos;re expecting a call from a hospital about a relative. Rather than silently glancing at your phone all meal, say so at the start: &quot;I&apos;m sorry, I may need to take one call; I&apos;m waiting to hear about my dad.&quot; Keep the phone on silent, and if it rings, excuse yourself and take it away from the table. The rule isn&apos;t really &quot;never touch your phone.&quot; It&apos;s &quot;don&apos;t make people feel ignored,&quot; and explaining ahead of time does that.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A business dinner with a client (real-world use)</h3>
      <div className="prose-p">At a restaurant with a potential client, facing four forks and two glasses: use utensils from the outside in, bread plate on your left, water glass on your right. Order something easy to eat (not ribs or spaghetti) and in a similar price range to your host. Keep your phone out of sight for the whole meal. Match the client&apos;s pace so neither of you is left eating alone. When finished, place knife and fork side by side on the plate. The client probably won&apos;t notice your utensil technique, but they&apos;ll notice whether you listened, the same skill as <TermLink href="/life-skills-etiquette/what-active-listening-actually-looks-like-in-practice">active listening</TermLink> anywhere else.</div>

      <QuickCheck
        question="In the phone-call example, what made taking the call acceptable?"
        options={[
          { text: "Explaining at the start and stepping away to take it", correct: true, explanation: "Correct. The goal is not leaving people feeling ignored." },
          { text: "Keeping the phone face-down on the table", correct: false, explanation: "A phone on the table still signals divided attention." },
          { text: "Nothing; phones must be off at all times", correct: false, explanation: "Real emergencies are fine if handled considerately." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Table manners that still matter vs ones that have faded"
        type="comparison"
        svgSrc="/diagrams/life-skills-etiquette-what-table-manners-actually-matter-today-comparison.svg"
        altText="Two columns. Still matters, because people notice: phone off the table while eating, wait until others are served, chew with your mouth closed, pass dishes and don't reach across. Mostly faded, because few people notice: American versus continental fork style, which of five forks to use, elbows on the table between courses, and strict seating by rank or gender."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Leaving your phone on the table 'just in case.'", fix: "Put it in a pocket or bag. If you truly need to be reachable, say so at the start." },
          { mistake: "Starting to eat as soon as your own plate arrives in a small group.", fix: "Wait until everyone is served or the host starts, unless others urge you to begin." },
          { mistake: "Worrying so much about formal rules that you ignore the conversation.", fix: "Get the basics right, then focus on the people. That's what they'll remember." },
        ]}
      />
      <MisconceptionCallout
        myth="Good table manners mean knowing every formal rule, like which fork is for fish."
        reality={<p>Formal rules still show up at official dinners, and outside-in utensils is an easy default. But the manners people actually notice day to day are about consideration: attention to the people you&apos;re with, not making others wait or watch you chew, and not reaching over them. Someone who knows every fork but spends dinner on their phone comes across worse than someone who uses the wrong fork and listens well.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "At your next shared meal, put your phone away before you sit down.",
          "Practice 'b and d' once so you never have to guess which bread plate is yours.",
          "Before a business or cross-cultural meal, look up the two or three customs specific to that setting.",
          "When unsure at the table, pause and follow the host.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the most important table manners?", answer: "Keep your phone away, wait until everyone is served, chew with your mouth closed, don't talk with food in your mouth, pass dishes instead of reaching, and put your napkin on your lap." },
          { question: "Is it rude to have your phone on the table?", answer: "Most people think so during a shared meal. In a 2015 Pew survey, 88% of U.S. adults said using a phone during a family dinner is generally not OK. Put it away, and if you're expecting an urgent call, say so at the start." },
          { question: "Is it rude to put your elbows on the table?", answer: "Much less than it used to be. Resting elbows between courses or while talking is widely accepted now; leaning on them while actively eating can still look sloppy." },
          { question: "Which way do you pass food at the table?", answer: "By convention, counterclockwise (to the right), so all dishes move in the same direction. If someone nearby on your left asks for something, just hand it to them." },
          { question: "Is it rude to eat before everyone is served?", answer: "In a small group, yes, unless the host or others tell you to go ahead. At large banquets, it's acceptable to start once a few people near you have been served." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
