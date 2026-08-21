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
  title: "Roman Numerals Explained",
  category: "math-numbers",
  order: 42,
  subtopic: "numbers-in-culture-and-history",
  tags: [
    "Roman numerals",
    "numeral systems",
    "additive notation",
    "subtractive notation",
    "ancient Rome",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "How Roman numerals actually work — the seven symbols, the addition and subtraction rules that combine them, and why the system was eventually replaced for real calculation.",
  summary: "Roman numerals represent numbers with seven letter-symbols combined by addition and subtraction rules, rather than by position and a zero, which made them useful for labeling but impractical for calculation.",
  sources: [
    { label: "Encyclopaedia Britannica — How do Roman numerals work?", url: "https://www.britannica.com/question/How-do-Roman-numerals-work" },
    { label: "Encyclopaedia Britannica — Roman numeral converter", url: "https://www.britannica.com/topic/Roman-numeral-converter-2229297" },
    { label: "Encyclopaedia Britannica — Is It Still Important to Learn Roman Numerals?", url: "https://www.britannica.com/story/is-it-still-important-to-learn-roman-numerals" },
  ],
  seeAlso: [
    "math-numbers/history-of-the-number-zero",
    "math-numbers/number-systems-across-cultures-binary-hexadecimal-basics",
  ],
  glossary: [
    { term: "Additive notation", definition: "Combining numeral symbols by adding their values together, as in VI = 5 + 1 = 6." },
    { term: "Subtractive notation", definition: "Placing a smaller-value symbol before a larger one to subtract its value, as in IV = 5 - 1 = 4." },
    { term: "Vinculum", definition: "A horizontal bar drawn over a Roman numeral to indicate it should be multiplied by 1,000, used for writing large numbers." },
    { term: "Numeral system", definition: "A set of symbols and rules used to represent numbers in writing." },
    { term: "Positional notation", definition: "A number system, like the modern decimal system, where a digit's value depends on its position rather than on separate symbols for each magnitude." },
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

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Roman numerals use just seven symbols — I, V, X, L, C, D, M — combined with addition and subtraction rules, instead of position and a zero the way modern numbers work.",
          "Subtractive notation (IV for 4, IX for 9) lets a smaller symbol placed before a larger one subtract its value, keeping numbers shorter than writing every unit out (IIII).",
          "Roman numerals have no place-value system and no zero, which made them workable for labeling and inscriptions but genuinely impractical for arithmetic — Romans actually did calculation on a separate counting device, the abacus.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Roman numerals use seven letters to build numbers: I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, and M = 1,000. You build bigger numbers by combining these symbols — VI means 5 + 1 = 6, and XII means 10 + 1 + 1 = 12. There&apos;s a twist for numbers like 4 and 9: instead of writing four I&apos;s in a row (IIII), Roman numerals put a smaller symbol before a bigger one to mean subtraction, so IV means 5 - 1 = 4, and IX means 10 - 1 = 9. That&apos;s how a year like 1994 becomes MCMXCIV.</div>}
        detailed={<div className="prose-p">Roman numerals combine two rules: <TermLink href="/math-numbers/roman-numerals-explained">additive notation</TermLink>, where a symbol placed after an equal or larger one adds its value (XV = 10 + 5 = 15), and <TermLink href="/math-numbers/roman-numerals-explained">subtractive notation</TermLink>, where a symbol placed immediately before a larger one subtracts its value (XL = 50 - 10 = 40). Only specific pairs are allowed in standard subtractive notation — I before V or X, X before L or C, C before D or M — which keeps any single number from being ambiguous. Critically, the system has no <TermLink href="/math-numbers/roman-numerals-explained">positional notation</TermLink> and no symbol for zero: each symbol always represents the same fixed value no matter where it sits in the number, unlike modern digits where a &quot;5&quot; means something different in 50 than in 500. For numbers beyond a few thousand, Romans drew a horizontal bar called a <TermLink href="/math-numbers/roman-numerals-explained">vinculum</TermLink> over a numeral to multiply its value by 1,000 — so V with a bar over it meant 5,000. Because the system has no place value and no zero to anchor calculations, Romans didn&apos;t actually do arithmetic by manipulating the numerals directly; day-to-day counting and computation were done on a counting board or abacus, with Roman numerals mainly used for recording final results, inscriptions, and dates.</div>}
      />
      <FootnoteAside>Look closely at many clock and watch faces and you&apos;ll find 4 written as the additive IIII rather than the subtractive IV — a longstanding clockmaking convention. Historians and clockmakers have proposed several explanations (visual balance with VIII directly opposite on the dial, easier casting from a mold, and various royal-preference legends), but no single explanation is definitively confirmed as the original reason — what&apos;s certain is that IIII on clock faces long predates any of the popular myths attached to it.</FootnoteAside>

      <p>
      Those two rules — add when a smaller symbol follows a larger one, subtract when it comes before — are really all you need. The best way to see them actually work is to build a real number from scratch.
      </p>

      <QuickCheck
        question="In Roman numerals, IX and XI use the same two symbols (I and X) but represent very different values. What determines the difference?"
        options={[
          { text: "The order the symbols are written in — I before X subtracts, I after X adds", correct: true, explanation: "Correct. IX places I before the larger X, subtracting to get 10 - 1 = 9. XI places I after the larger X, adding to get 10 + 1 = 11. Order relative to the larger symbol is what flips addition to subtraction." },
          { text: "IX and XI actually represent the same value, just written differently", correct: false, explanation: "They represent different values — IX is 9 and XI is 11. The position of the smaller symbol relative to the larger one changes the operation from subtraction to addition." },
          { text: "The size of the letters used changes their meaning", correct: false, explanation: "Letter size has no role in Roman numeral rules — only the order of symbols relative to each other (before or after a larger value) determines whether you add or subtract." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Converting a full year, 1994, into Roman numerals (baseline case)</h3>
      <div className="prose-p">
      Break 1994 into place values first: 1000 + 900 + 90 + 4. Convert each piece separately using the symbol table. 1000 = M. 900 uses subtractive notation: 1000 - 100 = CM. 90 also uses subtractive notation: 100 - 10 = XC. 4 uses subtractive notation: 5 - 1 = IV. String the pieces together in order from largest to smallest: M + CM + XC + IV = <strong>MCMXCIV</strong>. This exact conversion is why 1994 (the year of many well-known film and album copyright notices) is a commonly used teaching example — it touches all three subtractive pairs (CM, XC, IV) in a single number.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Why clock faces often show IIII instead of IV (edge case / variation)</h3>
      <div className="prose-p">
      Standard Roman numeral rules say 4 should be written IV (5 - 1). But if you look at many analog clock and watch faces, the 4 position is often marked IIII — four I&apos;s in a row, using only additive notation, breaking the subtractive convention used everywhere else on the same dial (IX for 9 is usually kept as-is). This isn&apos;t an error; it&apos;s a well-documented, deliberate clockmaking tradition with an unsettled origin story. What it demonstrates mathematically is that subtractive notation was never a strict requirement of the numeral system — the earlier, purely additive form (IIII, VIIII) was actually the more common style in ancient Rome itself, and the shorter subtractive forms (IV, IX) became the dominant standard only gradually, especially from medieval times onward.
      </div>

      <QuickCheck
        question="Ancient Romans themselves often wrote 4 as IIII rather than IV. What does this tell you about subtractive notation?"
        options={[
          { text: "Subtractive notation (IV, IX, XL) was a later refinement, not a fixed rule the Romans always followed from the start", correct: true, explanation: "Correct. Purely additive forms like IIII and VIIII were common in ancient Roman usage; the shorter subtractive convention became dominant more gradually, and some traditions (like clock faces) still preserve the older additive style." },
          { text: "Roman numerals never actually had a rule for 4 at all", correct: false, explanation: "Both IIII and IV are valid, recognized ways to represent 4 within the broader Roman numeral tradition — it's not that there was no rule, but that the subtractive rule wasn't applied as rigidly in earlier or traditional usage as in the modern standardized form." },
          { text: "IIII and IV represent different quantities", correct: false, explanation: "Both represent exactly 4. IIII simply adds four I's (1+1+1+1), while IV uses subtractive notation (5-1) — they're two different notations for the identical value." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Roman numerals in everyday modern use (real-world / applied case)</h3>
      <p>
      Roman numerals never disappeared from daily life — they just moved into labeling rather than calculation. Super Bowl championships are numbered in Roman numerals (Super Bowl LVIII = 58th game: L=50, VIII=8). Movie and TV copyright notices often display the year this way (MMXXVI = 2026: MM=2000, XXVI=20+6). Book chapters, monarchs&apos; names (Elizabeth II), and building cornerstones commonly use them too. In every one of these cases, the numeral is doing a labeling or ceremonial job, not an arithmetic one — nobody is adding two Roman numerals together to get a Super Bowl schedule; the number is simply looked up, converted mentally to a familiar Arabic numeral, and used for identification. That&apos;s precisely the role Roman numerals still fill well today, and the role positional Hindu-Arabic numerals (with a working zero) took over for actual computation centuries ago.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The seven Roman numeral symbols and the additive / subtractive combination rules"
        type="detail"
        svgSrc="/diagrams/math-numbers-roman-numerals-explained-symbol-chart.svg"
        altText="A reference chart listing the seven Roman numeral symbols I, V, X, L, C, D, and M with their decimal values 1, 5, 10, 50, 100, 500, and 1000, alongside a second panel illustrating the additive rule (a smaller symbol after a larger one adds, e.g. VI = 6) and the subtractive rule (a smaller symbol before a larger one subtracts, e.g. IV = 4), with the year 1994 broken into M, CM, XC, and IV as a worked example."
      />
      <p>
      Read the chart left to right and the pattern becomes mechanical: find the biggest symbol value that fits into what&apos;s left of your number, write it down, subtract it, and repeat — dropping into a subtractive pair (like CM or XC) whenever the next digit is a 4 or a 9. That greedy, symbol-by-symbol process is exactly how any Arabic-to-Roman conversion, by hand or by computer, actually works.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Writing four of the same symbol in a row when a shorter subtractive form exists, e.g. writing VIIII instead of IX for 9.", fix: "Standard modern usage limits repetition to three of the same symbol in a row (III is fine, IIII is not standard) and uses subtractive notation instead — IX, not VIIII, for 9." },
          { mistake: "Assuming any smaller symbol before a larger one always subtracts, e.g. treating 'IL' as a valid way to write 49.", fix: "Only specific subtractive pairs are valid: I before V or X, X before L or C, C before D or M. 'IL' isn't standard — 49 is written XLIX (XL = 40, IX = 9)." },
          { mistake: "Trying to do arithmetic (like multiplication) directly on Roman numerals the way you would with Arabic digits.", fix: "Roman numerals have no place value, so there's no simple digit-by-digit method for multiplying or dividing them — convert to a positional number system to calculate, then convert back if a Roman numeral output is needed." },
        ]}
      />
      <MisconceptionCallout
        myth="Roman numerals can represent any number just as efficiently as the modern number system."
        reality={<p>Roman numerals get dramatically longer and harder to read as numbers grow, because the system has no place value and no zero to compress information the way modern digits do. The number 3,888, for instance, requires fifteen symbols (MMMDCCCLXXXVIII) — modern notation needs only four digits. There&apos;s also no clean, native way to represent zero, negative numbers, or fractions smaller than 1/12 in the classical system, and no simple method for multiplying or dividing two Roman numerals directly. Roman numerals work well for labeling — clock faces, chapter numbers, championship games — precisely because those uses only ever need to represent one fixed number at a time, never to calculate with it.</p>}
      />

      <QuickCheck
        question="Why did positional Hindu-Arabic numerals (with a zero) eventually replace Roman numerals for actual calculation, even though Roman numerals stayed in use for labeling?"
        options={[
          { text: "Roman numerals were made illegal for use in calculations by medieval European governments", correct: false, explanation: "There was no legal ban — the shift happened because positional notation with zero made arithmetic dramatically easier and faster to perform directly on the written numbers, not because of any prohibition." },
          { text: "Positional notation with a zero allows direct, systematic methods for adding, subtracting, multiplying, and dividing that Roman numerals can't support", correct: true, explanation: "Correct. Because a digit's value depends on its position, positional numerals support clean, repeatable calculation procedures. Roman numerals, lacking place value and zero, can't support the same direct methods — which is exactly why calculation had historically been done on an abacus instead." },
          { text: "Roman numerals can only represent numbers up to 100", correct: false, explanation: "Roman numerals can represent much larger numbers using additional symbols and the vinculum (overline) convention for multiplying by 1,000 — the real limitation was efficiency and calculability, not an absolute ceiling on size." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Convert this year and your birth year into Roman numerals by hand using the largest-symbol-first method shown in Example 1.",
          "Next time you watch a Super Bowl or see a movie's copyright date, decode the Roman numeral instead of skipping past it.",
          "Look at an analog clock face near you and check whether it uses IIII or IV for the 4 — now you know both are historically legitimate.",
          "Read the related entry on History of the Number Zero to see exactly what Roman numerals were missing that positional decimal numbers solved.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What are the 7 Roman numeral letters and their values?", answer: "I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, and M = 1,000. Every Roman numeral is built by combining these seven symbols using additive and subtractive rules." },
          { question: "How do you write 4 in Roman numerals?", answer: "The standard modern form is IV (5 - 1, subtractive notation). The older additive form IIII (1+1+1+1) is also historically valid and still commonly seen on clock and watch faces." },
          { question: "Why don't Roman numerals have a zero?", answer: "The system was designed to add and subtract fixed-value symbols directly, not to use position and a placeholder the way modern decimal numbers do — there was no structural need for a zero, so ancient Rome never developed one." },
          { question: "What is the largest number you can write in Roman numerals?", answer: "There's no fixed absolute maximum under standard rules, but practical limits appear quickly without extensions like the vinculum (an overline meaning multiply by 1,000). With that convention, numbers into the millions can be represented, though it becomes impractical well before that." },
          { question: "Are Roman numerals still used today?", answer: "Yes, mainly for labeling rather than calculation — Super Bowl numbering, movie and TV copyright years, clock faces, book chapter numbers, and the names of monarchs and popes (like Elizabeth II) are all common modern uses." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
