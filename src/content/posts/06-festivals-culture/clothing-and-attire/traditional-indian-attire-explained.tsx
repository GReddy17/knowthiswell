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
  title: "Traditional Indian Attire Explained",
  category: "festivals-culture",
  order: 35,
  subtopic: "clothing-and-attire",
  tags: ["indian attire", "sari", "traditional clothing", "indian fashion"],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "There's no single 'Indian traditional dress' — the sari, salwar kameez, dhoti, and sherwani each belong to different regions, genders, and occasions across the subcontinent.",
  summary: "Traditional Indian attire isn't one garment — it's a large family of region-, gender-, and occasion-specific clothing, from the draped sari and dhoti to the stitched salwar kameez and sherwani, each with its own history and regional variation.",
  sources: [
    { label: "Encyclopaedia Britannica — Sari", url: "https://www.britannica.com/topic/sari" },
    { label: "Encyclopaedia Britannica — Marriage: Rituals and Customs (Hindu bridal attire references)", url: "https://www.britannica.com/topic/marriage/Marriage-rituals" },
    { label: "Victoria and Albert Museum — Textiles and Fashion Collections", url: "https://www.vam.ac.uk/collections/wedding-dress" },
  ],
  seeAlso: [
    "festivals-culture/traditional-attire-around-the-world",
    "festivals-culture/cultural-significance-of-colors-in-clothing",
    "festivals-culture/indian-wedding-traditions-explained",
    "festivals-culture/diwali-explained",
  ],
  glossary: [
    { term: "Sari", definition: "An unstitched length of cloth, typically five to seven yards long, wrapped and draped around the body — the principal traditional garment of women across much of the Indian subcontinent, worn over a fitted blouse and petticoat." },
    { term: "Dhoti", definition: "A traditional men's garment consisting of a single unstitched piece of cloth wrapped around the waist and legs, historically among the most common everyday and ceremonial menswear across much of India." },
    { term: "Sherwani", definition: "A long, formal coat-like garment for men, typically worn for weddings and formal occasions, often paired with a churidar (fitted trousers)." },
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
          "There is no single \"Indian traditional dress\" — attire varies by region, gender, religion, and occasion, and the sari is only one (very widespread) garment among many.",
          "Indian traditional clothing splits broadly into unstitched, draped garments (sari, dhoti) and stitched garments (salwar kameez, sherwani) — a distinction with real historical roots, not just a style choice.",
          "Most traditional garments remain in active use today, but their role has shifted for many urban Indians toward festival, wedding, and special-occasion wear rather than daily dress.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Traditional Indian attire covers a wide range of garments that differ by region and gender. The <TermLink href="/festivals-culture/traditional-indian-attire-explained">sari</TermLink> — a long piece of cloth draped around the body — is the best-known women&apos;s garment, worn with a fitted blouse and petticoat. Common menswear includes the <TermLink href="/festivals-culture/traditional-indian-attire-explained">dhoti</TermLink> (draped) and the kurta-pajama (stitched), with the <TermLink href="/festivals-culture/traditional-indian-attire-explained">sherwani</TermLink> reserved mainly for formal occasions like weddings. Other widely worn garments include the salwar kameez (a tunic-and-trouser set) and the lehenga choli (a festive skirt-and-blouse ensemble).</div>}
        detailed={<div className="prose-p">The sari&apos;s documented history stretches back at least to sculptural reliefs from the 2nd century BCE, which show the garment wrapped around the hips and drawn between the legs to form pleats at the front — the modern draping style (with a blouse and petticoat underneath) developed later, with significant change occurring from the 12th century onward as Muslim rule spread across north and central India and modesty conventions shifted regional dress practice. How a sari is draped is itself regionally distinct: the common Nivi style seen widely today differs from Gujarati draping (where the loose end, the pallu, is brought forward over the right shoulder rather than the left), the nine-yard Maharashtrian style (worn without a separate petticoat, with the fabric divided and tucked to resemble trousers), and several other regional variants. Menswear follows a similar draped-versus-stitched divide: the dhoti (draped, unstitched) remains ceremonially and regionally significant, particularly in parts of South India and Bengal, while the kurta-pajama (a stitched tunic and trouser set) is the more common everyday traditional menswear across much of the country. The sherwani, a long buttoned coat historically associated with Mughal-era court dress, today functions mainly as formal/wedding attire for grooms, typically paired with a churidar. Regional garments add further specificity — the mundu in Kerala (a white, unstitched lower garment for men), the Punjabi salwar kameez that has since spread nationally as women&apos;s everyday wear, and the elaborately embroidered lehenga choli favored for weddings and festivals in many northern and western states. None of these garments functions as a single national costume — each carries specific regional, religious, or occasion-based associations.</div>}
      />
      <FootnoteAside>A full traditional sari, worn correctly, typically involves somewhere between five and nine metres of fabric and around five to eight pleats tucked at the waist — the exact technique, pleat count, and draping style is itself a regional marker experienced sari-wearers can often identify on sight.</FootnoteAside>

      <QuickCheck
        question="A visitor assumes 'the sari' is India's single national dress, worn identically everywhere. What's the most accurate correction?"
        options={[
          { text: "The sari isn't traditionally Indian at all — it's a modern invention", correct: false, explanation: "The sari has a long documented history in the Indian subcontinent, traced back to at least the 2nd century BCE in sculptural evidence — the issue with the original claim isn't the sari's authenticity, it's treating it as uniform and singular." },
          { text: "The sari is widely worn across India, but its draping style varies significantly by region (Nivi, Gujarati, Maharashtrian, and others), and it's only one of several traditional garments across India's regions and genders", correct: true, explanation: "Correct. The sari is genuinely widespread, but neither uniform in style nor the only traditional garment — menswear, regional variants, and other women's garments (salwar kameez, lehenga choli) are equally traditional in their own contexts." },
          { text: "Only women in North India wear saris; it's not part of Southern Indian tradition", correct: false, explanation: "The sari (in various regional draping styles) is worn across virtually all regions of India, including South India, where distinct regional styles like the Madisar (Tamil Brahmin style) exist." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The sari and its regional draping styles (baseline case)</h3>
      <div className="prose-p">The widely recognized Nivi style — pleats tucked at the front, the loose end (pallu) draped over the left shoulder — is common across much of India and is often what people picture by default. But the same basic garment (a single length of unstitched cloth) is draped very differently elsewhere: the Gujarati style brings the pallu forward over the right shoulder instead, and the Maharashtrian nine-yard style divides and tucks the fabric to resemble trousers, worn without the petticoat used in the Nivi style. Same garment category, genuinely different techniques and appearances.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Menswear — dhoti, kurta-pajama, and sherwani (regional and occasion variation)</h3>
      <div className="prose-p">Everyday traditional menswear across much of India centers on the kurta-pajama (a stitched tunic and trouser set), while the dhoti — an older, unstitched, draped garment — remains especially significant in specific regional and ceremonial contexts, including many South Indian and Bengali traditions, and for religious rituals more broadly. The sherwani, by contrast, isn&apos;t everyday wear at all — it&apos;s specifically formal/wedding attire, worn by grooms and at other formal occasions, reflecting its origin in Mughal-era court dress rather than ordinary daily clothing.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Traditional attire in urban India today — real-world/present-day</h3>
      <div className="prose-p">In many Indian cities today, Western-style clothing (jeans, shirts, office wear) has become common daily dress, particularly among younger generations, while traditional garments — sari, salwar kameez, lehenga choli, sherwani — remain the default choice for weddings, festivals, and religious occasions. This isn&apos;t traditional dress disappearing; it&apos;s traditional dress shifting role, from default daily wear (which it still is for many, particularly older generations and in many rural and some urban contexts) toward occasion-specific formal wear for others — a pattern of change and continuity rather than simple decline.</div>

      <QuickCheck
        question="Why is it inaccurate to describe the sherwani as India's traditional male 'daily wear'?"
        options={[
          { text: "Because the sherwani isn't traditionally Indian — it's a purely Western import", correct: false, explanation: "The sherwani has documented roots in Mughal-era court dress within the Indian subcontinent — the issue isn't its authenticity, it's misclassifying its actual role." },
          { text: "Because the sherwani functions specifically as formal/wedding attire, while everyday traditional menswear across much of India is more commonly the kurta-pajama or, regionally, the dhoti", correct: true, explanation: "Correct. Different traditional garments serve different roles — formal/ceremonial versus everyday — within the same broader tradition." },
          { text: "Because no one in India wears the sherwani anymore", correct: false, explanation: "The sherwani remains actively and widely worn — specifically for weddings and formal occasions, which is exactly the point being corrected, not evidence the garment has disappeared." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating the sari as \"the\" Indian national dress representing all of India.", fix: "The sari is genuinely widespread but is one of many traditional garments — men's dhoti and kurta-pajama, and regional garments like the mundu or Punjabi salwar kameez, are equally traditional in their own contexts." },
          { mistake: "Assuming there's one correct or standard way to drape a sari.", fix: "Draping style is a genuine regional marker — Nivi, Gujarati, and Maharashtrian styles (among several others) differ meaningfully in technique and appearance, not just minor variation." },
          { mistake: "Assuming traditional Indian attire has been entirely replaced by Western dress in modern India.", fix: "It's more accurate to describe a shift in role for many wearers — traditional garments remain the norm for weddings, festivals, and religious occasions, and remain daily wear for many people, particularly outside major urban centers." },
        ]}
      />
      <MisconceptionCallout
        myth="There is one single 'Indian traditional dress' (usually pictured as 'the sari') that represents the whole country."
        reality={<p>Traditional Indian attire is a large family of garments that varies by region, gender, religion, and occasion — the sari alone has multiple distinct regional draping styles, and menswear (dhoti, kurta-pajama, sherwani) and other women&apos;s garments (salwar kameez, lehenga choli) are equally traditional within their own regional and occasion-specific contexts. Reducing this to a single national costume flattens a genuinely diverse set of traditions.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Next time you see a sari, notice the draping style and where the pallu falls — it's a genuine clue to regional origin, not a uniform look.",
          "If you're attending an Indian wedding or festival, ask about the appropriate attire for that specific region or community rather than assuming one \"Indian\" dress code applies.",
          "Notice the difference between draped/unstitched garments (sari, dhoti) and stitched garments (salwar kameez, sherwani) — it's a real historical and regional distinction, not just a style preference.",
          "When you encounter traditional Indian clothing described in media, check whether the source is naming the specific garment and region, or defaulting to \"the sari\" as a stand-in for all Indian dress.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is the difference between a sari and a salwar kameez?", answer: "A sari is a single unstitched length of cloth (typically five to seven yards) draped around the body over a blouse and petticoat. A salwar kameez is a stitched two-piece (or three-piece, with a dupatta scarf) outfit consisting of a tunic and trousers, more associated with North Indian and Punjabi tradition originally, now worn widely across India." },
          { question: "Is the sari worn only by Hindu women?", answer: "No — the sari is a broadly regional and cultural garment worn by women across many religions in South Asia, not restricted to any one faith, though specific colors and styles can carry religious or ceremonial meaning in particular contexts." },
          { question: "What do Indian grooms traditionally wear?", answer: "Formal groom's attire commonly includes a sherwani (a long buttoned coat, often paired with a churidar) though this varies by region and community — some traditions favor a dhoti-kurta or other regional formal wear instead." },
          { question: "How many yards of fabric are in a sari?", answer: "Typically five to seven yards, though some regional styles (like the Maharashtrian nine-yard sari) use significantly more fabric and a different draping technique." },
          { question: "Do Indians still wear traditional clothing every day?", answer: "It varies — traditional garments remain everyday wear for many people, particularly outside major urban centers and among older generations, while many urban and younger Indians wear Western-style clothing daily and reserve traditional attire for weddings, festivals, and religious occasions." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
