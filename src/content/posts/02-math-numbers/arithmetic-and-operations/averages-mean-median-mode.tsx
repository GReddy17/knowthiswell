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
  title: "Averages: Mean, Median & Mode, and When Each One Lies to You",
  category: "math-numbers",
  order: 16,
  subtopic: "arithmetic-and-operations",
  tags: [
    "mean median mode",
    "averages",
    "arithmetic mean",
    "median",
    "mode",
    "outliers",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "Mean, median, and mode explained with real datasets, including why outliers can make the mean a misleading 'typical' value.",
  summary: "Mean, median, and mode are three different ways of describing a dataset's 'typical' value, and they can disagree with each other sharply the moment a dataset has outliers or a skewed shape.",
  sources: [
    { label: "Khan Academy — Mean, Median, and Mode", url: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data" },
    { label: "Britannica — Statistics", url: "https://www.britannica.com/science/statistics" },
    { label: "U.S. Census Bureau — Income in the United States", url: "https://www.census.gov/topics/income-poverty/income.html" },
  ],
  seeAlso: [
    "math-numbers/percentages-explained",
    "math-numbers/ratios-and-proportions",
    "math-numbers/speed-math-for-everyday-use",
    "math-numbers/estimation-and-rounding",
  ],
  glossary: [
    { term: "Mean", definition: "The sum of all values in a dataset divided by how many values there are — what most people mean by 'average.'" },
    { term: "Median", definition: "The middle value of a dataset after sorting it from smallest to largest — or the average of the two middle values if there's an even number of entries." },
    { term: "Mode", definition: "The value that appears most often in a dataset. A dataset can have one mode, more than one, or no mode at all." },
    { term: "Outlier", definition: "A value in a dataset far removed from the rest, capable of pulling the mean substantially away from what most values in the set actually look like." },
    { term: "Skewed distribution", definition: "A dataset whose values are not evenly spread around the center, typically with a long tail of extreme values on one side that separates the mean from the median." },
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
      "Mean, median, and mode are three separate ways of describing a dataset's 'typical' value — and for the same dataset, they can give meaningfully different numbers.",
      "The mean is pulled toward outliers, because every value in the set counts in the sum; the median mostly ignores outlier magnitude, since it only cares about which value sits in the middle position after sorting.",
      "Mode is the only one of the three that works on non-numeric (categorical) data, like favorite colors or shoe brands, because it just counts how often each value appears rather than doing arithmetic on the values themselves.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">All three are ways of summarizing a bunch of numbers with one representative value. The <TermLink href="/math-numbers/averages-mean-median-mode">mean</TermLink> is what most people call &quot;the average&quot; — add everything up and divide by how many numbers there are. The <TermLink href="/math-numbers/averages-mean-median-mode">median</TermLink> is the middle value once you sort the numbers from smallest to largest. The <TermLink href="/math-numbers/averages-mean-median-mode">mode</TermLink> is whichever value shows up most often. For the set 2, 3, 3, 7: the mean is (2+3+3+7)/4 = 3.75, the median is the average of the two middle sorted values (3 and 3) = 3, and the mode is 3, since it appears twice and nothing else repeats. They&apos;re close here, but they don&apos;t have to be.</div>}
      detailed={<div className="prose-p">The three measures diverge specifically because of how they handle extreme values. The mean is computed from every value&apos;s actual magnitude, so a single very large or very small entry shifts it noticeably — this is called being sensitive to <TermLink href="/math-numbers/averages-mean-median-mode">outliers</TermLink>. The median only cares about sorted position, not magnitude, so an outlier that stays in its extreme position barely moves the median at all, no matter how extreme it gets. This is exactly why statisticians report median household income rather than mean household income: a relatively small number of very high earners pull the mean well above what a typical household actually earns, while the median stays anchored to the actual middle of the distribution. Mode has a different limitation entirely — a dataset can have one mode, multiple modes (called bimodal or multimodal), or no mode at all if every value is unique, and it&apos;s the only one of the three defined for categorical, non-numeric data, since &quot;the sum of favorite colors&quot; isn&apos;t a meaningful operation.</div>}
      />
      <FootnoteAside>The U.S. Census Bureau specifically reports median household income, not mean household income, in its annual income statistics — precisely because a comparatively small number of very high-income households pull the mean noticeably above the income level that most households actually experience, making the median the more representative &quot;typical household&quot; figure.</FootnoteAside>

      <div className="prose-p">
      The definitions are simple on their own. What actually matters is knowing which one to reach for — and the fastest way to build that instinct is running all three on the same dataset and watching where they agree and where they split apart.
      </div>

      <QuickCheck
      question="What is the mean of the dataset 10, 20, 30?"
      options={[
      { text: "20, since (10+20+30) ÷ 3 = 20", correct: true, explanation: "Correct. The mean is the sum of all values (60) divided by how many values there are (3), giving 60 ÷ 3 = 20." },
      { text: "30, the largest value in the set", correct: false, explanation: "The mean isn't the largest value — it's the sum of all values divided by the count. For 10, 20, 30, that's 60 ÷ 3 = 20, not the maximum." },
      { text: "60, the sum of all the values", correct: false, explanation: "60 is only the sum — the mean requires one more step, dividing that sum by how many values were added, giving 60 ÷ 3 = 20." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Five test scores (baseline case)</h3>
      <div className="prose-p">
      Five students score 72, 85, 90, 85, and 68 on a test. Mean: add them (72+85+90+85+68 = 400) and divide by 5, giving a mean of 80. Median: sort the scores (68, 72, 85, 85, 90) and take the middle one — the third of five values — which is 85. Mode: 85 appears twice, more than any other score, so the mode is also 85. Here the median and mode agree (85) while the mean sits a bit lower (80), because the two lower scores (68 and 72) pull the sum down more than the two matching 85s pull it up.
      </div>
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Five salaries with one large outlier (edge case / variation)</h3>
      <div className="prose-p">
      Five employees earn $45,000, $48,000, $50,000, $52,000, and $500,000 (a company founder). Mean: (45,000+48,000+50,000+52,000+500,000) ÷ 5 = 695,000 ÷ 5 = $139,000. Median: sorted, the middle value (third of five) is $50,000. The mean, $139,000, is nearly three times the median and doesn&apos;t resemble what four of the five employees actually earn — it&apos;s being dragged upward entirely by the one outlier. The median, $50,000, sits right in the middle of what most of the group earns and barely notices the outlier&apos;s presence at all, since it only cares that $500,000 is the largest value, not how much larger it is.
      </div>
      <QuickCheck
      question="Six students score 55, 60, 75, 80, 85, and 95 on a test. What is the median score?"
      options={[
      { text: "75, the middle value when counting from the start", correct: false, explanation: "With six (an even number of) values, there is no single middle value — the median requires averaging the two middle values after sorting, not picking one of them directly." },
      { text: "77.5, the average of the two middle sorted values, 75 and 80", correct: true, explanation: "Correct. With an even count of six values sorted as 55, 60, 75, 80, 85, 95, the two middle values are 75 and 80, and the median is their average: (75+80)/2 = 77.5." },
      { text: "80, the higher of the two middle sorted values", correct: false, explanation: "Picking only the higher middle value skips the required averaging step. With an even number of values, the median is the average of both middle values, not just one of them." },
      ]}
      />
      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Choosing the right average for a skewed dataset (real-world / applied case)</h3>
      <p>
      A real-estate listing site wants to advertise the &quot;average home price&quot; in a neighborhood with home values of $310,000, $325,000, $340,000, $355,000, and one recently sold mansion at $2,100,000. The mean, (310,000+325,000+340,000+355,000+2,100,000) ÷ 5 = $686,000, would make the neighborhood look far pricier than it actually is for a typical buyer — four of five homes sit under $360,000. The median, $340,000, is a far more honest summary of what a buyer should expect to pay, since the mansion (an outlier) barely affects the median&apos;s position. This is exactly the same reasoning that leads statisticians to report median income rather than mean income, and it&apos;s why &quot;average home price&quot; listings that use the mean can be quietly misleading in neighborhoods with even one very high-value property.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="Mean vs. median on a skewed distribution"
      type="detail"
      svgSrc="/diagrams/math-numbers-averages-mean-median-mode-skewed-distribution.svg"
      altText="Histogram showing a right-skewed distribution with a tall cluster of bars on the left and a long, low tail of bars extending far to the right representing outliers, with two vertical marker lines: the median line positioned within the main cluster of bars, and the mean line positioned noticeably to the right of the median, pulled toward the long tail."
      />
      <p>
      The long right-hand tail in the histogram represents a small number of unusually large values — an outlier salary, an outlier home price. The median marker stays anchored inside the main cluster of bars, since it only depends on sorted position; the mean marker gets dragged toward the tail, since every value in that tail contributes its full magnitude to the sum. The bigger the gap between the two marker lines, the more skewed the dataset is, and the less representative the mean is of a typical value in it.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Finding the median without sorting the data first.", fix: "Always sort the values from smallest to largest before picking out the middle one — the median of an unsorted list, read in its original order, is meaningless." },
      { mistake: "Picking a single middle value for the median of a dataset with an even number of entries, instead of averaging the two middle values.", fix: "With an even count, sort the data and average the two values that land in the middle positions — don't just pick the higher or lower of the two." },
      { mistake: "Defaulting to the mean for every dataset, even ones with outliers or a skewed shape.", fix: "Check whether the data has extreme outliers or a long tail first. If it does, the median usually represents a 'typical' value far more honestly than the mean does." },
      ]}
      />
      <MisconceptionCallout
      myth="The mean (average) always represents a typical value that's close to what most entries in the dataset look like."
      reality={<p>Not when a dataset has outliers. In the salary example above, the mean was $139,000 even though four of the five employees earned between $45,000 and $52,000 — nobody in that group earns anywhere close to the mean. The mean is a mathematical balance point (it&apos;s the value where the sum of distances above it equals the sum of distances below it), not a promise that most values cluster near it. This is precisely why the U.S. Census Bureau and similar statistical agencies report median household income rather than mean household income: the median is far more resistant to being dragged off-target by a small number of very high earners.</p>}
      />
      <QuickCheck
      question="A dataset is 3, 4, 4, 5, 4000. Does the mean of this dataset represent a value that's close to most of the entries?"
      options={[
      { text: "Yes — the mean is always close to most values in any dataset", correct: false, explanation: "That's not true in general, and it isn't true here. The single large value, 4000, pulls the mean far above where the other four values (3, 4, 4, 5) actually sit." },
      { text: "No — the outlier (4000) pulls the mean up to 803.2, far from the 3, 4, 4, 5 that make up most of the data", correct: true, explanation: "Correct. Mean = (3+4+4+5+4000)/5 = 4016/5 = 803.2 — nowhere near the four small values that represent most of the dataset. The median (4) is far more representative here." },
      { text: "It's impossible to tell without knowing the mode as well", correct: false, explanation: "The mode isn't needed to answer this — comparing the mean directly to the bulk of the data (3, 4, 4, 5) is enough to see it's badly skewed by the outlier, 4000." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Find the mean of five numbers"
      fields={[
      { key: "n1", label: "Value 1", defaultValue: 72 },
      { key: "n2", label: "Value 2", defaultValue: 85 },
      { key: "n3", label: "Value 3", defaultValue: 90 },
      { key: "n4", label: "Value 4", defaultValue: 85 },
      { key: "n5", label: "Value 5", defaultValue: 68 },
      ]}
      resultLabel="Mean"
      formula="meanOfFive"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "For any dataset you're summarizing, compute all three — mean, median, and mode — at least once, and notice how far apart they land.",
      "Before quoting a mean as 'typical,' scan the data for outliers first. A single extreme value is often enough to make the mean a poor summary.",
      "Practice finding the median of a dataset with an even number of entries, to build the habit of averaging the two middle values instead of picking just one.",
      "Read the related entry on Percentages Explained to see how mean and median interact with percentage-based comparisons like year-over-year change.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the difference between mean, median, and mode?", answer: "The mean is the sum of all values divided by how many there are. The median is the middle value after sorting. The mode is the most frequently occurring value. They can all give different numbers for the same dataset." },
      { question: "How do you find the median of an even number of values?", answer: "Sort the values, find the two that land in the middle positions, and average them. For six sorted values, average the 3rd and 4th values." },
      { question: "Why is median household income used instead of average (mean) income?", answer: "Because a relatively small number of very high earners can pull the mean well above what a typical household actually earns. The median is far more resistant to that distortion, since it only depends on sorted position, not magnitude." },
      { question: "Can a dataset have more than one mode?", answer: "Yes. If two or more values tie for the highest frequency, the dataset is called bimodal (two modes) or multimodal (more than two). If every value appears exactly once, the dataset has no mode at all." },
      { question: "What is a bimodal dataset?", answer: "A dataset with exactly two values that both appear more often than any other value, tied for the highest frequency — for example, 2, 2, 5, 7, 7, where both 2 and 7 are modes." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
