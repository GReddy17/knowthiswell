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
  title: "The Crusades (factual overview)",
  category: "history-timeline-facts",
  order: 13,
  subtopic: "medieval-history",
  tags: ["crusades", "medieval history", "jerusalem", "byzantine empire", "pope urban ii"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The Crusades weren't one continuous war — they were roughly two centuries of distinct campaigns that, at one point, saw crusaders sack a fellow Christian capital.",
  summary: "The Crusades were a series of military campaigns, beginning with Pope Urban II's call in 1095 and generally dated through the fall of Acre in 1291, fought primarily over control of Jerusalem and the eastern Mediterranean, involving Western European Christian, Islamic, and Byzantine Christian powers whose interests and accounts of events often diverged.",
  sources: [
    { label: "Encyclopaedia Britannica — Crusades", url: "https://www.britannica.com/event/Crusades" },
    { label: "Encyclopaedia Britannica — Sack of Constantinople (1204)", url: "https://www.britannica.com/event/Sack-of-Constantinople-1204" },
    { label: "Encyclopaedia Britannica — Alexius I Comnenus", url: "https://www.britannica.com/biography/Alexius-I-Comnenus" },
    { label: "UNESCO World Heritage Convention — Old City of Jerusalem and its Walls", url: "https://whc.unesco.org/en/list/148/" },
  ],
  seeAlso: [
    "history-timeline-facts/the-middle-ages-in-europe-overview",
    "history-timeline-facts/islamic-golden-age",
    "history-timeline-facts/ancient-rome",
    "history-timeline-facts/ancient-mesopotamia",
  ],
  glossary: [
    { term: "Crusader states", definition: "Christian-ruled territories established in the eastern Mediterranean after the First Crusade, including the Kingdom of Jerusalem, that survived in some form until 1291." },
    { term: "Byzantine Empire", definition: "The Eastern Roman Empire, based at Constantinople, whose emperor's request for military help against Seljuk Turk advances helped prompt the First Crusade." },
    { term: "Seljuk Turks", definition: "A Turkic Muslim dynasty whose 11th-century expansion into Byzantine Anatolia was a key factor prompting the Byzantine emperor's appeal to Western Europe." },
    { term: "Sack of Constantinople (1204)", definition: "The capture and plunder of the Byzantine Christian capital by Fourth Crusade forces, who had diverted from their original goal of reaching Jerusalem or Egypt." },
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
          "The Crusades were a series of distinct military campaigns spanning roughly two centuries (1095-1291), called by different popes for different immediate reasons, not one continuous war fought toward a single unchanging goal.",
          "The First Crusade (1095-1099) began after the Byzantine emperor Alexios I Komnenos appealed to the West for help against advancing Seljuk Turk forces — historians document this Byzantine request as a direct catalyst, alongside Pope Urban II's broader call to reclaim Jerusalem.",
          "In 1204, the Fourth Crusade diverted from its stated goal and sacked Constantinople, the capital of the Byzantine Empire — a fellow Christian power — a documented event that badly damaged relations between Western and Byzantine Christendom for the rest of the Middle Ages.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">The <TermLink href="/history-timeline-facts/the-crusades-factual-overview">Crusades</TermLink> were a series of military campaigns, mostly organized by Western European Christians, aimed at controlling Jerusalem and the surrounding region between 1095 and 1291. Pope Urban II called the First Crusade in 1095, and crusader forces captured Jerusalem in 1099, establishing several Christian-ruled territories in the region. Over the following two centuries, control of Jerusalem and nearby land changed hands multiple times between crusader forces and regional Muslim powers, including a decisive recapture of Jerusalem by the Muslim leader Saladin in 1187, until the last major crusader stronghold fell in 1291.</div>}
        detailed={<div className="prose-p">Historians generally count at least eight numbered Crusades between 1095 and 1291, each with its own leadership, goals, and outcome — treating them as one continuous war misses real differences between, for example, the First Crusade&apos;s capture of Jerusalem (1099) and the largely unsuccessful Second Crusade (1147-1149). Byzantine sources are essential to understanding the First Crusade&apos;s origins: Emperor Alexios I Komnenos had appealed to Western Europe for military assistance against Seljuk Turk advances into Byzantine Anatolia, and Pope Urban II&apos;s call at the Council of Clermont responded partly to that appeal alongside a broader goal of securing Christian access to Jerusalem. Islamic historical accounts document the crusades as a sustained external incursion by &quot;Franks&quot; (a term used broadly for Western Europeans) into the region, eventually met with unified resistance under leaders including Saladin, who recaptured Jerusalem in 1187, and later the Mamluk Sultanate, which took the last major crusader stronghold at Acre in 1291. A pivotal and separately significant episode is the Fourth Crusade (1202-1204), in which crusader forces, diverted by a mix of financial and political pressures, attacked and sacked Constantinople — the Byzantine Christian capital — rather than reaching the Holy Land at all; Byzantine chroniclers recorded this as a profound betrayal by fellow Christians, and historians treat it as a major factor in the Byzantine Empire&apos;s long-term decline ahead of its eventual fall in 1453.</div>}
      />
      <FootnoteAside>The Byzantine Empire, whose appeal for help helped trigger the First Crusade, ultimately had its own capital sacked by crusader forces less than 110 years later in 1204 — a sequence of events historians point to as showing the Crusades were never a simple two-sided conflict between one unified Christian West and one unified Islamic East.</FootnoteAside>
      <p>
      That 1204 sack of a fellow Christian capital is exactly the kind of detail a simplified &quot;two sides&quot; narrative leaves out, and it&apos;s worth sitting with before looking at the individual campaigns in more detail.
      </p>

      <QuickCheck
        question="What role did the Byzantine Empire play in the origins of the First Crusade?"
        options={[
          { text: "Byzantine Emperor Alexios I Komnenos appealed to Western Europe for military help against Seljuk Turk advances, a request historians treat as a direct catalyst for the crusade", correct: true, explanation: "Correct. Alexios I's appeal, alongside Pope Urban II's broader call at the Council of Clermont in 1095, is documented by historians as a key factor prompting the First Crusade." },
          { text: "The Byzantine Empire had no involvement in the events leading up to the First Crusade", correct: false, explanation: "Byzantine sources and Western accounts both document the Byzantine emperor's request for help as a significant factor — the Byzantine Empire was directly involved from the start." },
          { text: "The Byzantine Empire led the First Crusade and commanded all crusader forces", correct: false, explanation: "The First Crusade was organized and led primarily by Western European nobles responding to Pope Urban II's call, not commanded by the Byzantine emperor, even though his appeal helped prompt it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The First Crusade and the capture of Jerusalem (baseline case)</h3>
      <div className="prose-p">
      Pope Urban II called for a crusade at the Council of Clermont in November 1095, responding to Byzantine Emperor Alexios I Komnenos&apos;s appeal for military help against Seljuk Turk advances, and to a broader goal of securing Christian access to Jerusalem. Crusader forces, made up largely of nobility and knights from France and neighboring regions, marched east and captured Jerusalem in 1099, establishing the Crusader states, including the Kingdom of Jerusalem. Historical accounts, including from Islamic historians of the period, document that the 1099 capture of Jerusalem was accompanied by a large-scale massacre of the city&apos;s inhabitants — an event recorded across multiple contemporary traditions, not disputed among mainstream historians.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The Fourth Crusade&apos;s sack of Constantinople (variation / internal conflict)</h3>
      <div className="prose-p">
      The Fourth Crusade (1202-1204), called by Pope Innocent III with the original goal of reaching Jerusalem or Egypt, was diverted by financial debts owed to Venetian ship suppliers and by Byzantine political disputes, and ultimately turned against Constantinople itself. Crusader forces captured and sacked the Byzantine capital in April 1204, an event Britannica&apos;s summary attributes largely to the crusaders&apos; own financial motives rather than any planned religious objective. The sack devastated Constantinople, entrenched the schism between Eastern Orthodox and Roman Catholic Christianity, and weakened the Byzantine Empire for the rest of its history — a clear documented case of crusading forces attacking a fellow Christian power rather than an Islamic one.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Saladin, the Third Crusade, and Jerusalem&apos;s final status (real-world / applied case)</h3>
      <div className="prose-p">
      After the Muslim leader Saladin recaptured Jerusalem in 1187, ending 88 years of crusader control, the Third Crusade (1189-1192), led by figures including England&apos;s Richard I (&quot;the Lionheart&quot;), sought to retake the city. Richard and Saladin ultimately negotiated a truce rather than a decisive military outcome: Jerusalem remained under Muslim control, but Christian pilgrims were guaranteed access to the city. This negotiated compromise, rather than total victory for either side, illustrates how the Crusades&apos; individual campaigns often ended in practical settlements between named leaders rather than complete conquest — a pattern that continued until crusader presence in the region ended with the fall of Acre to the Mamluk Sultanate in 1291.
      </div>

      <QuickCheck
        question="What happened during the Fourth Crusade (1202-1204)?"
        options={[
          { text: "Crusader forces reached Jerusalem and negotiated its return to Christian control", correct: false, explanation: "The Fourth Crusade never reached Jerusalem at all — it was diverted to Constantinople instead." },
          { text: "Crusader forces, diverted by financial and political pressures, attacked and sacked Constantinople, the Byzantine Christian capital", correct: true, explanation: "Correct. This is one of the clearest documented examples of crusading forces turning against a fellow Christian power rather than an Islamic one." },
          { text: "Crusader forces formed a permanent alliance with the Byzantine Empire against Islamic powers", correct: false, explanation: "The opposite occurred — the sack of Constantinople badly damaged relations between Western European crusaders and the Byzantine Empire rather than strengthening an alliance." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The Crusades: major campaigns and turning points, 1095–1291"
        type="flow"
        svgSrc="/diagrams/history-timeline-facts-crusades-timeline.svg"
        altText="Horizontal timeline showing Pope Urban II's call for the First Crusade in 1095, the crusader capture of Jerusalem in 1099 establishing the Crusader states, the Second Crusade from 1147 to 1149, Saladin's recapture of Jerusalem in 1187 prompting the Third Crusade from 1189 to 1192 which ended in a negotiated truce, the Fourth Crusade's diversion to sack Constantinople, the Byzantine Christian capital, in 1204, further crusades continuing into the 13th century, and the fall of Acre to the Mamluk Sultanate in 1291 ending sustained crusader presence in the region."
      />
      <p>
      The 1204 marker sitting in the middle of this timeline, between the Third Crusade&apos;s negotiated truce with Saladin and later, less successful campaigns, is the detail most worth pausing on — it shows the conflict&apos;s alignments were not fixed for its full two centuries.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the Crusades as one continuous, unbroken war from 1095 to 1291.", fix: "Historians count at least eight distinct numbered Crusades over roughly two centuries, each with different leadership, goals, and outcomes." },
          { mistake: "Assuming the Crusades were a simple two-sided conflict between a unified Christian West and a unified Islamic East.", fix: "The Byzantine Empire's appeal helped trigger the First Crusade, yet crusader forces later sacked the Byzantine capital itself in 1204 — a documented Christian-on-Christian episode that complicates any two-sided framing." },
          { mistake: "Assuming every crusade ended in a decisive military victory for one side.", fix: "Many ended in negotiated settlements, like the Third Crusade's 1192 truce between Richard I and Saladin, which left Jerusalem under Muslim control but guaranteed Christian pilgrim access." },
        ]}
      />
      <MisconceptionCallout
        myth="The Crusades were a single, unified, continuous war fought without interruption between Christians and Muslims for two centuries."
        reality={<p>Historians document the Crusades as a series of distinct campaigns — commonly numbered at least eight — each called for somewhat different reasons, led by different figures, and ending in different outcomes, from decisive capture (Jerusalem, 1099) to negotiated truce (the Third Crusade, 1192) to complete diversion against a fellow Christian power (the Fourth Crusade&apos;s 1204 sack of Constantinople). Byzantine chroniclers, Islamic historians, and Western European sources each documented these events from their own vantage point, and their accounts, while differing in framing and emphasis, generally agree on the core sequence of events. Treating the Crusades as one uniform, two-sided war flattens a genuinely more complicated two-century history involving at least three major civilizational perspectives — Western Christian, Byzantine Christian, and Islamic.</p>}
      />

      <QuickCheck
        question="Why do historians describe the Crusades as more complicated than a single continuous two-sided war?"
        options={[
          { text: "Because no fighting actually took place during this period", correct: false, explanation: "Extensive military conflict is well documented across this period from Western Christian, Byzantine, and Islamic sources alike — the complication is about the number of distinct campaigns and shifting alignments, not whether conflict occurred." },
          { text: "Because they consisted of multiple distinct campaigns with different goals and outcomes, including one crusade that attacked the Christian Byzantine Empire rather than an Islamic power", correct: true, explanation: "Correct. The Fourth Crusade's 1204 sack of Constantinople is the clearest documented example that this wasn't simply one continuous, uniformly aligned conflict." },
          { text: "Because historians cannot agree on whether the Crusades happened at all", correct: false, explanation: "The core sequence of events is well documented and generally agreed upon across Western, Byzantine, and Islamic historical sources — the nuance is about framing and complexity, not whether the events occurred." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time \"the Crusades\" comes up as a single event, mentally count at least eight distinct campaigns across roughly two centuries.",
          "When you hear the Crusades framed as strictly Christians versus Muslims, remember the 1204 sack of Constantinople — a Christian power attacking another Christian power.",
          "Notice how often crusade-era conflicts ended in negotiated truces, like Richard I and Saladin's 1192 agreement, rather than total victory for one side.",
          "If you read a source on the Crusades, check whether it draws on Western, Byzantine, and Islamic accounts, or only one perspective.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What were the Crusades?", answer: "A series of military campaigns, beginning in 1095 and generally dated through 1291, primarily organized by Western European Christians to gain and hold control of Jerusalem and the surrounding region, involving Western Christian, Byzantine Christian, and Islamic powers." },
          { question: "Why did the Crusades start?", answer: "Pope Urban II called the First Crusade in 1095 at the Council of Clermont, responding both to Byzantine Emperor Alexios I Komnenos's appeal for military help against Seljuk Turk advances and to a broader goal of securing Christian access to Jerusalem." },
          { question: "Did the Crusades happen all at once, or in stages?", answer: "In stages — historians count at least eight distinct numbered Crusades between 1095 and 1291, each with different leadership, goals, and outcomes, rather than one continuous, unbroken war." },
          { question: "What happened during the Fourth Crusade?", answer: "Diverted by financial and political pressures, crusader forces attacked and sacked Constantinople, the capital of the Byzantine Empire, in 1204 — a documented episode of crusaders attacking a fellow Christian power rather than reaching the Holy Land." },
          { question: "How did the Crusades end?", answer: "There's no single end date, but the fall of Acre to the Mamluk Sultanate in 1291 ended sustained crusader territorial presence in the eastern Mediterranean, following roughly two centuries of shifting campaigns, truces, and territorial changes." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
