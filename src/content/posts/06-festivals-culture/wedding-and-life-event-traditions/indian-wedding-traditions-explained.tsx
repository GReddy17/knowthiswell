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
  title: "Indian Wedding Traditions Explained",
  category: "festivals-culture",
  order: 21,
  subtopic: "wedding-and-life-event-traditions",
  tags: ["indian weddings", "hindu wedding rituals", "wedding traditions", "life event traditions"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Indian wedding traditions vary sharply by region and religion — Hindu Saptapadi, Sikh Anand Karaj, and Muslim Nikah are all distinct ceremonies, not variations of one script.",
  summary: "\"Indian wedding traditions\" isn't one ceremony — it's an umbrella over distinct religious and regional rites, from the Hindu Saptapadi (seven steps around a sacred fire) to the Sikh Anand Karaj and the Muslim Nikah, each with its own structure and meaning.",
  sources: [
    { label: "Encyclopaedia Britannica — Marriage: Rituals and Customs", url: "https://www.britannica.com/topic/marriage/Marriage-rituals" },
    { label: "Encyclopaedia Britannica — Samskara (Hindu passage rite)", url: "https://www.britannica.com/topic/samskara-Hindu-passage-rite" },
    { label: "Encyclopaedia Britannica — Sari", url: "https://www.britannica.com/topic/sari" },
  ],
  seeAlso: [
    "festivals-culture/wedding-traditions-around-the-world",
    "festivals-culture/traditional-indian-attire-explained",
    "festivals-culture/naming-ceremonies-across-cultures",
    "festivals-culture/raksha-bandhan",
  ],
  glossary: [
    { term: "Saptapadi", definition: "The \"seven steps\" a Hindu couple takes together around a sacred fire, each step tied to a specific marital vow — the ritual moment that, in most Hindu traditions, makes the marriage complete." },
    { term: "Nikah", definition: "The Islamic marriage contract and ceremony, centered on mutual consent and the signing of the nikahnama (marriage contract) rather than a religious sacrament performed at a fire or altar." },
    { term: "Anand Karaj", definition: "The Sikh wedding ceremony (\"blissful union\"), held at a gurdwara, in which the couple circles the Guru Granth Sahib four times while the Lavan hymns are sung." },
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
          "\"Indian wedding\" isn't one ceremony — Hindu, Sikh, Muslim, and Christian weddings in India follow entirely different religious structures, even when they share surrounding customs like Mehndi and Sangeet.",
          "In a Hindu wedding, the marriage is typically considered complete only after the Saptapadi — seven steps taken together around a sacred fire, each step carrying its own vow.",
          "Most Indian weddings, regardless of religion, are built around multi-day sequences of pre-wedding, ceremony-day, and post-wedding events, not a single hour-long service.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">An Indian wedding usually spans several days rather than a single ceremony. Common pre-wedding events include Haldi (a turmeric paste applied to the bride and groom for good luck), Mehndi (henna applied to the hands and feet), and Sangeet (an evening of music and dance). The wedding ceremony itself differs by religion — a Hindu wedding centers on the <TermLink href="/festivals-culture/indian-wedding-traditions-explained">Saptapadi</TermLink> around a sacred fire, a Sikh wedding is the <TermLink href="/festivals-culture/indian-wedding-traditions-explained">Anand Karaj</TermLink> at a gurdwara, and a Muslim wedding is the <TermLink href="/festivals-culture/indian-wedding-traditions-explained">Nikah</TermLink>, a contract-based ceremony.</div>}
        detailed={<div className="prose-p">In a typical North Indian Hindu wedding, the priest (pandit) conducts a sequence of Vedic rites: Kanyadaan (the father formally giving away the bride), Panigrahana (the groom taking the bride&apos;s hand), and the Saptapadi, in which the couple circles a sacred fire (Agni) seven times, each round tied to a specific vow — food, strength, prosperity, wisdom, children, health, and friendship/loyalty. The groom then ties a mangalsutra (a black-and-gold beaded necklace) around the bride&apos;s neck and applies sindoor (vermilion) to her hair parting, both markers of married status. This exact sequence, and even which vow attaches to which step, varies by region and community — Bengali, Marathi, Tamil, and Punjabi Hindu weddings all share the Saptapadi&apos;s core logic but differ in surrounding rituals, dress, and pacing. Sikh weddings dispense with the fire entirely: the Anand Karaj centers on the couple circling the Guru Granth Sahib (the Sikh scripture) four times while four hymns, the Lavan, are sung, with no priest required — any Sikh can officiate. Muslim weddings in India follow the Nikah: an Imam or qazi oversees the signing of the nikahnama (marriage contract), which includes the mahr, a mandatory gift or sum from the groom to the bride that remains hers. There is no ritual fire or scripture-circling requirement in Nikah — the ceremony is fundamentally a witnessed civil-religious contract, followed by a celebratory feast, the Walima. Indian Christian weddings, especially in Kerala and Goa, typically follow a church service but retain regional touches — Syrian Christian weddings in Kerala include the tying of a minnu (a small gold pendant), echoing the same symbolic role as the Hindu mangalsutra.</div>}
      />
      <FootnoteAside>In many Hindu wedding traditions, the Saptapadi is considered the legally and religiously binding moment of the marriage — everything before it (the vows exchanged while circling the fire) is what actually makes the couple married, not the earlier rituals or the reception that follows.</FootnoteAside>

      <QuickCheck
        question="A Sikh wedding (Anand Karaj) and a Hindu wedding both take place in India and both involve the couple circling something together. What's the key structural difference?"
        options={[
          { text: "There is no real difference — both are the same ritual with different names", correct: false, explanation: "They're structurally distinct: a Hindu wedding centers on circling a sacred fire (Agni) with a priest-led sequence of Vedic vows; a Sikh wedding centers on circling the Guru Granth Sahib with the Lavan hymns, and doesn't require a priest at all." },
          { text: "A Hindu wedding centers on circling a sacred fire with a priest reciting Vedic vows; a Sikh wedding centers on circling the Guru Granth Sahib with the Lavan hymns sung, and any Sikh can officiate", correct: true, explanation: "Correct. The object being circled (fire vs. scripture) and who can lead the ceremony are genuinely different between the two traditions." },
          { text: "A Hindu wedding is religious and a Sikh wedding is a purely secular civil ceremony", correct: false, explanation: "Both are religious ceremonies with their own theological basis — the Anand Karaj is not a secular substitute for a religious wedding, it's Sikhism's own sacrament of marriage." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A North Indian Hindu wedding (baseline case)</h3>
      <div className="prose-p">The multi-day sequence typically runs Haldi (turmeric paste applied to bride and groom separately, for auspiciousness and skin-brightening), Mehndi (henna application, mainly for the bride), and Sangeet (a music-and-dance evening bringing both families together) before the wedding day itself. On the wedding day, the baraat (groom&apos;s processional arrival, often on a decorated horse, accompanied by dancing family and friends) is followed by the ceremony: Kanyadaan, the Saptapadi around the fire, mangalsutra-tying, and sindoor application. The bride&apos;s Vidaai (emotional farewell from her natal family) typically closes the day.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A Muslim Nikah in India — a religious variation</h3>
      <div className="prose-p">Rather than a fire-centered ritual, the Nikah is structured as a contract: the bride and groom (or their representatives) each consent verbally in front of witnesses, the mahr amount is formally recorded, and the nikahnama is signed. There&apos;s no requirement for the couple to be in the same room during the consent exchange in more traditional observances, though modern Nikahs commonly have both present. The Walima, a reception hosted by the groom&apos;s family, follows, functionally similar in spirit to a Hindu wedding reception but rooted in a different religious logic — celebrating the contract&apos;s completion rather than a sacrament.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The modern Indian wedding industry — real-world/present-day</h3>
      <div className="prose-p">Contemporary Indian weddings, particularly in urban and diaspora communities, have become large, multi-day, multi-venue events — sometimes called the &quot;big fat Indian wedding&quot; in popular media — combining the traditional religious ceremony with elaborate photography, destination venues, and separate events for each pre-wedding ritual. This has become a significant part of India&apos;s wedding and tourism economy. At the same time, the core religious ceremony (Saptapadi, Anand Karaj, or Nikah) generally remains unchanged in its essential structure, even as the surrounding celebration has grown considerably in scale.</div>

      <QuickCheck
        question="True or false: every Hindu wedding in India follows the exact same order of rituals."
        options={[
          { text: "True — the Vedic ceremony is standardized nationwide", correct: false, explanation: "The core logic (a priest-led ceremony culminating in the Saptapadi) is broadly shared, but the specific rituals, their order, and surrounding customs vary significantly by region and community — Bengali, Tamil, Punjabi, and Marathi Hindu weddings each look distinctly different." },
          { text: "False — regional and community traditions shape the specific sequence and customs even within Hindu weddings", correct: true, explanation: "Correct. \"Hindu wedding\" covers a broad family of regional traditions that share core elements (like the Saptapadi) but differ in dress, additional rituals, and pacing." },
          { text: "False, because Hindu weddings have no fixed structure at all", correct: false, explanation: "Too far the other way — there is a shared core structure (Kanyadaan, Saptapadi, mangalsutra) across most Hindu traditions; what varies is the surrounding detail and sequencing, not the presence of structure itself." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating \"Indian wedding\" as a single ritual template.", fix: "It's an umbrella term over distinct religious ceremonies — Hindu, Sikh, Muslim, and Christian weddings in India have fundamentally different structures, not just different decorations." },
          { mistake: "Assuming the wedding reception is the legally/religiously binding moment.", fix: "In most Hindu traditions, the couple is considered married after the Saptapadi, not the reception — the reception is a celebration that follows the actual ceremony." },
          { mistake: "Assuming Mehndi, Haldi, and Sangeet are religious rites specific to one faith.", fix: "These pre-wedding customs are widely shared cultural practices across many Indian communities and regions, layered on top of — but distinct from — the religion-specific wedding ceremony itself." },
        ]}
      />
      <MisconceptionCallout
        myth="Indian weddings follow one single unified ritual sequence across all regions and religions."
        reality={<p>India&apos;s wedding traditions vary by religion (Hindu, Sikh, Muslim, Christian, Jain, and others each have distinct ceremonies) and by region within each religion (a Bengali Hindu wedding and a Tamil Hindu wedding share core logic but differ substantially in specific rituals, dress, and sequencing). &quot;Indian wedding&quot; is a useful shorthand, but it describes a large family of related-but-distinct traditions, not one script.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If you're invited to an Indian wedding, ask which religious ceremony it is (Hindu, Sikh, Muslim, Christian) — the format, dress expectations, and schedule differ meaningfully.",
          "Notice which day of a multi-day Indian wedding you're attending — Mehndi, Sangeet, and the main ceremony day are usually separate events with different tones.",
          "If you see a bride wearing a mangalsutra or sindoor, recognize these as specific markers of Hindu married status, not generic bridal jewelry.",
          "When reading about an Indian wedding, notice whether the source is describing a regional/community-specific custom or a pan-Indian one — the two get conflated often.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the Saptapadi in a Hindu wedding?", answer: "The \"seven steps\" — a sequence in which the couple walks together around a sacred fire, with each step representing a specific marital vow (covering food, strength, prosperity, wisdom, children, health, and lifelong friendship). Most Hindu traditions treat this as the moment the marriage becomes complete." },
          { question: "How many days does a typical Indian wedding last?", answer: "It varies, but multi-day is standard — commonly including Haldi, Mehndi, and Sangeet before the main ceremony day, plus a reception. Some communities and larger celebrations extend this further." },
          { question: "What is the difference between a Hindu wedding and a Sikh wedding?", answer: "A Hindu wedding centers on the couple circling a sacred fire while a priest recites Vedic vows (the Saptapadi); a Sikh wedding, the Anand Karaj, centers on the couple circling the Guru Granth Sahib while the Lavan hymns are sung, and doesn't require a priest." },
          { question: "What does the mangalsutra mean?", answer: "It's a black-and-gold beaded necklace tied by the groom around the bride's neck during a Hindu wedding ceremony, and worn afterward as a visible marker of married status." },
          { question: "Do all Indian weddings involve a sacred fire?", answer: "No — the fire ritual (Saptapadi) is specific to Hindu weddings. Sikh weddings center on the Guru Granth Sahib, and Muslim weddings (Nikah) are contract-based ceremonies with no ritual fire at all." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
