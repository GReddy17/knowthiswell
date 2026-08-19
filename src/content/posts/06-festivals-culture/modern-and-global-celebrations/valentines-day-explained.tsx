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
  title: "Valentine's Day Explained",
  category: "festivals-culture",
  order: 46,
  subtopic: "modern-and-global-celebrations",
  tags: ["valentine's day", "february 14", "romantic holidays", "modern celebrations"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Valentine's Day traces from an obscure early Christian feast day through a 14th-century literary tradition to today's widely celebrated holiday.",
  summary: "Valentine's Day is a February 14 observance of romantic love, rooted in an early Christian feast day and a medieval literary tradition, that grew over centuries into today's widely celebrated, largely commercial holiday.",
  sources: [
    { label: "Encyclopaedia Britannica — Valentine's Day", url: "https://www.britannica.com/topic/Valentines-Day" },
    { label: "Library of Congress — Today in History: February 14", url: "https://www.loc.gov/item/today-in-history/february-14/" },
    { label: "University of North Carolina College of Arts & Sciences — Chaucer and the Origins of Valentine's Day", url: "https://college.unc.edu/2020/02/chaucer-valentines/" },
    { label: "Smithsonian National Postal Museum — America's Valentine", url: "https://postalmuseum.si.edu/america%E2%80%99s-valentine" },
  ],
  seeAlso: [
    "festivals-culture/halloween-explained",
    "festivals-culture/earth-day-and-modern-awareness-days",
    "festivals-culture/pride-month-and-modern-observances-factual-respectful-overview",
    "festivals-culture/common-festival-myths-and-misconceptions",
  ],
  glossary: [
    { term: "Lupercalia", definition: "An ancient Roman festival held in mid-February, centered on fertility and purification rites, that some historians have floated as a possible influence on Valentine's Day — though Britannica and the Library of Congress both describe the connection as unclear rather than an established, direct origin." },
    { term: "Saint Valentine", definition: "A name shared by several early Christian martyrs; the specific historical figure behind the February 14 feast day is genuinely uncertain, per Encyclopaedia Britannica." },
    { term: "Parliament of Fowls", definition: "A late-14th-century poem by Geoffrey Chaucer, widely cited as the earliest clear literary work linking February 14 to romantic love — before it, historians find no established romantic meaning attached to St. Valentine's feast day." },
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
          "Valentine's Day traces to an early Christian feast day honoring one or more martyrs named Valentine — its specific origin story is genuinely uncertain, not a single settled legend, per Britannica and the Library of Congress.",
          "The day's link to romantic love is a later development. The clearest early literary connection appears in English literature in the late 14th century, with Geoffrey Chaucer, not in the ancient world.",
          "The mass-market, card-and-gift version of the holiday has a fairly specific commercial starting point in the United States — Esther Howland's mass-produced lace valentines of the late 1840s — even though the holiday itself is centuries older than that industry.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Valentine&apos;s Day falls on February 14 each year and is widely marked by exchanging cards, flowers, chocolate, and other gifts, most often between romantic partners, though also increasingly between friends and family. The name comes from <TermLink href="/festivals-culture/valentines-day-explained">Saint Valentine</TermLink>, an early Christian martyr, but the holiday most people recognize today — the cards, the gift-giving, the focus on couples — took shape gradually, and only settled into something close to its modern form over the last few centuries.</div>}
        detailed={<div className="prose-p">Several early Christian martyrs shared the name Valentine, and per Britannica the specific identity behind the February 14 feast day is genuinely unclear historically — one commonly repeated legend, which Britannica frames explicitly as legend rather than confirmed history, involves a priest executed around 270 CE by the Roman emperor Claudius II Gothicus. The romantic association is a separate, later layer: the Library of Congress notes that the day&apos;s connection to romance may spring from a medieval belief that birds choose their mates in mid-February, and the earliest clear literary link comes from Geoffrey Chaucer&apos;s poem <TermLink href="/festivals-culture/valentines-day-explained">Parliament of Fowls</TermLink>, written in the late 14th century — before Chaucer, historians find no established connection between St. Valentine&apos;s feast day and romantic love. Some historians have also pointed to the ancient Roman festival of <TermLink href="/festivals-culture/valentines-day-explained">Lupercalia</TermLink>, held in mid-February, as a possible pre-Christian influence, though Britannica and the Library of Congress both describe this link as unclear rather than settled fact — Lupercalia was a fertility and purification festival, not a romance holiday in the modern sense. An edge case worth knowing: the shift toward the mass-market holiday familiar today has an unusually specific commercial starting point. Esther Howland began mass-producing elaborate lace valentine cards in Worcester, Massachusetts, in the late 1840s, earning her the nickname &quot;Mother of the American Valentine,&quot; per the Smithsonian&apos;s National Postal Museum.</div>}
      />
      <FootnoteAside>Howland ran her card-making operation as an early assembly line, with a team of women recreating her designs together around a large table, according to the Smithsonian&apos;s National Postal Museum — one of the more literal points in this history where &quot;Valentine&apos;s Day industry&quot; stops being a figure of speech.</FootnoteAside>
      <p>
      That layered history — an obscure feast day, a much later literary romantic turn, and a specific 19th-century commercial innovation — is worth keeping straight before looking at how the holiday plays out today.
      </p>

      <QuickCheck
        question="What do Britannica and the Library of Congress say about the origins of Valentine's Day?"
        options={[
          { text: "The romantic holiday began with the ancient Romans, who created it as a couples' celebration", correct: false, explanation: "Lupercalia, the Roman festival sometimes cited as an influence, was a fertility and purification festival, not a couples' romance holiday — and both sources describe the link as unclear rather than a direct origin." },
          { text: "The day traces to an early Christian feast honoring one or more martyrs named Valentine, with the romantic association developing later, in medieval literature", correct: true, explanation: "Correct, per Britannica and the Library of Congress. The romantic meaning is a documented later layer, not part of the original feast day." },
          { text: "Valentine's Day has one clear, uncontested origin story confirmed by primary historical records", correct: false, explanation: "Both Britannica and the Library of Congress describe the origins as murky, with legendary elements that aren't confirmed history — not a single settled account." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A typical Western Valentine&apos;s Day (baseline case)</h3>
      <div className="prose-p">In the United States and much of the West, the most familiar pattern is a romantic-couple observance: cards (handwritten or store-bought), flowers, chocolate, and often a dinner out. Many schools also run a separate, non-romantic version, where children exchange small cards or treats with classmates generally rather than a single valentine — a reminder that even the &quot;standard&quot; modern version isn&apos;t exclusively about romance.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Valentine&apos;s Day in Japan and South Korea (regional variation)</h3>
      <div className="prose-p">In Japan and South Korea, the holiday is customarily organized along different gender lines than the Western pattern: women give chocolate to men on February 14, and men reciprocate about a month later on &quot;White Day&quot; (March 14). This two-part, reciprocal structure is a genuine cultural adaptation of the holiday, not a simplified or lesser version of a single &quot;correct&quot; way to celebrate it.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Valentine&apos;s Day beyond romantic couples today (real-world / applied case)</h3>
      <div className="prose-p">In recent decades the holiday has expanded well past romantic partners — &quot;Galentine&apos;s Day&quot; (February 13), popularized by celebrating friendship rather than romance, is now widely marked alongside the traditional date, and workplaces, schools, and families frequently use February 14 as a general occasion for appreciation and small gifts rather than strictly romantic gestures. It&apos;s a present-day extension of the same basic pattern — Chaucer&apos;s literary romance, then Howland&apos;s commercial card industry, now a broader occasion for affection generally.</div>

      <QuickCheck
        question="How is Valentine's Day typically observed in Japan and South Korea, compared with the common Western pattern?"
        options={[
          { text: "It isn't observed there at all", correct: false, explanation: "It is widely observed in both countries — just with a different, gendered, two-part structure rather than absence of the holiday." },
          { text: "Gift-giving customarily runs along different gender lines, with a reciprocal 'White Day' exchange about a month later", correct: true, explanation: "Correct. Women traditionally give chocolate on February 14, and men reciprocate on White Day, March 14 — a genuine, documented regional variation." },
          { text: "It's celebrated on a completely different calendar date each year, unlike the fixed Western date", correct: false, explanation: "The main date is still February 14 in both countries — the difference is in the gendered gift-giving structure and the added reciprocal date, not the calendar date itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming there's one single, agreed-upon origin story for Valentine's Day.", fix: "Britannica and the Library of Congress both describe the origins as unclear, involving several separate layers — an obscure early Christian martyr, a much later medieval literary romantic association, and a disputed link to the Roman festival Lupercalia — rather than one settled legend." },
          { mistake: "Treating the Roman festival Lupercalia as 'the' origin of Valentine's Day.", fix: "Lupercalia was a fertility and purification festival held in mid-February. Some historians have proposed a loose connection to Valentine's Day, but Britannica and the Library of Congress both frame that link as unclear, not a confirmed, direct lineage." },
          { mistake: "Assuming the holiday's commercial, card-focused form is ancient.", fix: "The mass-produced greeting card industry traces to a fairly specific starting point in the 1840s United States (Esther Howland), centuries after the original feast day and its later romantic association." },
        ]}
      />
      <MisconceptionCallout
        myth="Valentine's Day has always been a purely commercial modern invention with no older historical roots."
        reality={<p>Valentine&apos;s Day traces to an early Christian feast day honoring one or more martyrs named Valentine, and its association with romantic love is documented in English literature at least as early as Geoffrey Chaucer&apos;s late-14th-century poem <em>Parliament of Fowls</em>, per Britannica and the Library of Congress. The specific mass-market card industry familiar today is much younger — it traces to the 1840s in the United States — but it sits on top of centuries of older religious and literary history, not the other way around.</p>}
      />

      <QuickCheck
        question="Which of these best matches the documented history of Valentine's Day's romantic association?"
        options={[
          { text: "It has always been about romantic love, dating back to the earliest Roman festivals", correct: false, explanation: "The Roman festival sometimes cited as an influence, Lupercalia, was a fertility and purification festival — not a romance holiday — and both Britannica and the Library of Congress describe the romantic link as unclear rather than original to that festival." },
          { text: "St. Valentine's feast day did not carry a documented romantic meaning until medieval literature, most notably Chaucer's Parliament of Fowls, connected it to romantic love", correct: true, explanation: "Correct. Before Chaucer's late-14th-century poem, historians find no established connection between the feast day and romantic love." },
          { text: "It became a romance holiday only after Esther Howland began selling cards in the 1840s", correct: false, explanation: "Howland's cards commercialized an already-existing romantic association that was centuries old by then — they didn't originate it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you hear an explanation for Valentine's Day's Roman origins, notice whether it presents Lupercalia as a settled fact or a debated theory — credible sources hedge here, and you should too.",
          "If someone credits 'the Romans' or a vague 'ancient tradition' with inventing the romantic version of the holiday, remember the clearest documented literary starting point is centuries later, with Chaucer.",
          "Notice regional variations if you come across Valentine's Day traditions from Japan, South Korea, or elsewhere — the gendered, two-part structure (February 14 / White Day) is a genuine cultural difference, not a lesser version of a single 'real' holiday.",
          "When you buy or receive a mass-produced valentine card, remember you're participating in a specific 1840s American commercial innovation (Esther Howland) layered on top of a much older feast day.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Why is Valentine's Day called Valentine's Day?", answer: "It's named for Saint Valentine, an early Christian martyr. Several martyrs shared that name, and per Encyclopaedia Britannica, the specific identity behind the February 14 feast day is genuinely unclear historically." },
          { question: "Is Valentine's Day originally a Roman holiday?", answer: "Some historians point to the Roman festival of Lupercalia, held in mid-February, as a possible influence, but Britannica and the Library of Congress both describe that connection as unclear rather than a confirmed, direct origin." },
          { question: "When did Valentine's Day become about romantic love?", answer: "The clearest early literary link comes from Geoffrey Chaucer's poem Parliament of Fowls, written in the late 14th century, which is widely credited as the earliest work to connect the date with romantic love." },
          { question: "Who invented Valentine's Day cards?", answer: "Mass-produced valentine cards in the US trace to Esther Howland, who began selling elaborate lace cards in Worcester, Massachusetts, in the late 1840s, per the Smithsonian's National Postal Museum." },
          { question: "Is Valentine's Day celebrated outside the US and Europe?", answer: "Yes, widely, though customs vary. In Japan and South Korea, for example, the holiday follows a distinct, gendered, two-part gift-exchange pattern across February 14 and White Day in March." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
