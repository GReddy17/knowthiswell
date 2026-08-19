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
  title: "Math for Travel (distance, speed, time)",
  category: "math-numbers",
  order: 37,
  subtopic: "applied-and-everyday-math",
  tags: [
    "distance speed time",
    "travel math",
    "average speed",
    "rate problems",
  ],
  date: "2026-08-16",
  updated: "2026-08-16",
  lastReviewed: "2026-08-16",
  excerpt: "The distance-speed-time triangle behind every 'how long will it take' question, and why average speed over a round trip isn't the simple average of the two speeds.",
  summary: "Distance, speed, and time are linked by one formula — distance = speed × time — rearranged depending on which two values are known, but average speed over uneven segments must be weighted by time, not simply averaged.",
  sources: [
    { label: "Encyclopaedia Britannica — Speed", url: "https://www.britannica.com/science/speed" },
    { label: "NIST — Physical Measurement Laboratory: Units and Measurement", url: "https://www.nist.gov/pml" },
    { label: "Khan Academy — Algebra Basics", url: "https://www.khanacademy.org/math/algebra-basics" },
  ],
  seeAlso: [
    "math-numbers/unit-conversions-length-weight-volume",
    "math-numbers/time-and-calendar-math",
    "math-numbers/ratios-and-proportions",
  ],
  glossary: [
    { term: "Average speed", definition: "Total distance traveled divided by total time taken — not the simple arithmetic average of two different speeds used along the way." },
    { term: "Distance-speed-time formula", definition: "The relationship distance = speed × time, which can be rearranged to solve for speed (distance ÷ time) or time (distance ÷ speed) depending on which values are known." },
    { term: "Harmonic mean", definition: "A type of average appropriate for rates, like speed over equal distances, that weights slower rates more heavily than a simple arithmetic average would." },
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
      "Distance, speed, and time are related by one formula, distance = speed × time, which rearranges to solve for whichever of the three values is unknown.",
      "Average speed over a trip with two different speeds is total distance ÷ total time — not the simple average of the two speeds, which overstates the real average.",
      "Travel time estimates that ignore stops, traffic, or non-constant speed are a floor, not a realistic prediction — real trips rarely move at a single steady speed the whole way.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">Travel math runs on one core relationship: distance = speed × time. If you know two of the three values, you can always find the third. Driving at 60 miles per hour for 3 hours covers 60 × 3 = 180 miles. Need to know how long a 180-mile drive takes at 60 mph? Divide instead: 180 ÷ 60 = 3 hours. Need to know your average speed over a known distance and time? Divide the other way: 180 miles ÷ 3 hours = 60 mph.</div>}
      detailed={<div className="prose-p">The three rearrangements of distance = speed × time are: speed = distance ÷ time, and time = distance ÷ speed. The subtler part of travel math shows up when speed isn&apos;t constant across a whole trip. <TermLink href="/math-numbers/math-for-travel-distance-speed-time">Average speed</TermLink> for an entire trip is always total distance ÷ total time — it is not the simple arithmetic average of the individual speeds used along different segments, unless those segments happen to take equal amounts of time (not equal distances). When two segments cover equal distances at different speeds, the correct combined average is a <TermLink href="/math-numbers/math-for-travel-distance-speed-time">harmonic mean</TermLink> of the two speeds, which is always pulled closer to the slower speed than a simple average would suggest — because more time is spent traveling at the slower speed to cover the same distance.</div>}
      />
      <FootnoteAside>The distance-speed-time formula is one of the oldest quantitative relationships in recorded mathematics — versions of rate problems (a traveler covering so many units of distance in so many units of time) appear in ancient Babylonian and Egyptian mathematical texts, thousands of years before &quot;speed&quot; was formalized as a physics concept.</FootnoteAside>

      <p>
      That average-speed distinction sounds like a technicality until you run the actual numbers on a simple there-and-back trip, where the gap between &quot;simple average&quot; and &quot;true average&quot; turns out to be surprisingly large.
      </p>

      <QuickCheck
      question="You drive 120 miles at 40 mph, then drive back the same 120 miles at 60 mph. Is your average speed for the whole trip exactly 50 mph (the simple average of 40 and 60)?"
      options={[
      { text: "Yes, averaging two speeds always just means adding them and dividing by 2", correct: false, explanation: "This works only when the two segments take equal time, not when they cover equal distance at different speeds — here the segments take different amounts of time, so a simple average overstates the true result." },
      { text: "No — the true average speed is total distance divided by total time, which comes out to 48 mph, slightly less than the simple average of 50", correct: true, explanation: "Correct. The 40 mph segment takes longer (3 hours) than the 60 mph segment (2 hours), so more total time is spent at the slower speed — pulling the true average below the simple midpoint of 50 mph." },
      { text: "No, the average speed should be higher than 50 mph because the return trip was faster", correct: false, explanation: "The slower leg actually pulls the average down, not up — because it takes more time to cover the same distance, the slower speed has more weight in the true average, not less." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Solving for time when distance and speed are known (baseline case)</h3>
      <div className="prose-p">
      A flight covers 2,400 miles at an average cruising speed of 480 mph. Time = distance ÷ speed = 2,400 ÷ 480 = 5 hours. This is the most common everyday version of the formula — plugging in known distance and speed to estimate how long a trip will take.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The true average speed of a there-and-back trip at two different speeds (edge case / variation)</h3>
      <div className="prose-p">
      Driving 120 miles at 40 mph takes 120 ÷ 40 = 3 hours. Driving the same 120 miles back at 60 mph takes 120 ÷ 60 = 2 hours. Total distance: 120 + 120 = 240 miles. Total time: 3 + 2 = 5 hours. True average speed: 240 ÷ 5 = 48 mph — noticeably below the simple average of (40+60)/2 = 50 mph, because the slower leg ate up more of the total time (3 out of 5 hours, or 60% of the trip&apos;s duration) despite covering the same distance as the faster leg.
      </div>

      <QuickCheck
      question="Why does the slower leg of a there-and-back trip pull the true average speed down below the simple average of the two speeds?"
      options={[
      { text: "Because the slower leg takes more time to cover the same distance, so it contributes more total time to the trip, and average speed is weighted by time, not by distance segments alone", correct: true, explanation: "Correct. True average speed = total distance ÷ total time. Since the slower leg takes longer to cover an equal distance, it disproportionately increases total time, pulling the overall average toward the slower speed." },
      { text: "Because return trips are always measured differently from outbound trips", correct: false, explanation: "There's no separate measurement convention for return trips — the pull toward the slower speed comes purely from the time-weighting built into the average speed formula, not from any directional difference." },
      { text: "Because speed limits are typically lower when driving in the reverse direction", correct: false, explanation: "This isn't a real general rule, and it isn't what's driving the math here — the effect holds regardless of direction, purely because of how average speed is time-weighted." },
      ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a GPS&apos;s &apos;time remaining&apos; estimate can jump when you hit slow traffic (real-world / applied case)</h3>
      <div className="prose-p">
      A GPS app starts a 240-mile trip estimating 3 hours 42 minutes, based on 240 ÷ 65 mph ≈ 3.69 hours at the road&apos;s typical speed. After driving 20 minutes, a construction zone drops the car&apos;s speed to 40 mph, with about 226.7 miles still remaining. If the app projects that current 40 mph speed forward across the entire remaining distance, the new estimate becomes 226.7 ÷ 40 ≈ 5.67 hours — jumping the total trip estimate from 3 hours 42 minutes to roughly 6 hours 7 minutes, far more than the 20 minutes that have actually elapsed. This isn&apos;t a measurement error: distance ÷ speed is being recomputed correctly at each instant, but it&apos;s projecting the temporary slow speed forward as if it will last the whole remaining trip. Once traffic clears and speed returns to 65 mph, the estimate drops back down just as sharply — which is exactly why live ETAs on a phone can swing by tens of minutes in either direction without anything being &quot;wrong&quot; with the math.
      </div>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="The distance-speed-time triangle"
      type="detail"
      svgSrc="/diagrams/math-numbers-math-for-travel-distance-speed-time-triangle.svg"
      altText="A triangle diagram divided into three sections: the top section labeled Distance, the bottom-left section labeled Speed, and the bottom-right section labeled Time, illustrating that covering the top label with a finger leaves Speed multiplied by Time, covering the bottom-left leaves Distance divided by Time, and covering the bottom-right leaves Distance divided by Speed."
      />
      <p>
      This is the classic &quot;cover the unknown&quot; memory device: covering Distance leaves Speed × Time side-by-side, meaning you multiply. Covering Speed leaves Distance over Time, meaning you divide distance by time. Covering Time leaves Distance over Speed, meaning you divide distance by speed. It&apos;s the exact same formula rearranged three ways, just organized so the correct operation (multiply or divide) is visually obvious for whichever value you&apos;re solving for.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Averaging two different speeds by simple arithmetic mean instead of weighting by time.", fix: "Compute total distance ÷ total time instead — a simple average overstates the true average whenever the segments take unequal amounts of time." },
      { mistake: "Assuming a trip travels at a single constant speed the entire way when estimating time.", fix: "Treat a single-speed estimate as a best-case floor, not a prediction — real trips include stops, traffic, and speed variation that add time beyond the simple calculation." },
      { mistake: "Mixing units (e.g., dividing miles by a speed given in kilometers per hour) without converting first.", fix: "Convert distance and speed to matching units before applying distance = speed × time — mismatched units produce a numerically wrong answer, not just an imprecise one." },
      ]}
      />
      <MisconceptionCallout
      myth="If you drive one leg of a trip slower and the return leg faster by the same amount, your average speed for the whole trip is the midpoint of the two speeds."
      reality={<p>Average speed is always total distance divided by total time — and because the slower leg takes more time to cover the same distance, it counts for more of the trip&apos;s total duration than the faster leg does. A trip at 40 mph one way and 60 mph back isn&apos;t a 50 mph average; it works out to 48 mph, pulled toward the slower speed. The only case where a simple average of two speeds equals the true average is when the two legs take equal time, not equal distance.</p>}
      />

      <QuickCheck
      question="A cyclist rides 30 miles at 15 mph, then rides back the same 30 miles at 10 mph. What is their true average speed for the round trip?"
      options={[
      { text: "12.5 mph, the simple average of 15 and 10", correct: false, explanation: "This is the simple average, not the time-weighted true average — since the two legs took different amounts of time to cover equal distances, the simple average doesn't reflect the real overall speed." },
      { text: "12 mph, found by dividing the total 60 miles by the total 5 hours the round trip took", correct: true, explanation: "Correct. 30 miles at 15 mph takes 2 hours; 30 miles at 10 mph takes 3 hours. Total distance 60 miles ÷ total time 5 hours = 12 mph — below the simple average of 12.5, because the slower leg took more time." },
      { text: "10 mph, since the slower speed always determines the entire trip's average", correct: false, explanation: "The slower speed pulls the average down, but doesn't fully determine it on its own — the true average (12 mph) sits between the two speeds, closer to the slower one, not equal to it." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
      title="Travel time from distance and speed"
      fields={[
      { key: "distanceKm", label: "Distance (km)", defaultValue: 240 },
      { key: "speedKmh", label: "Average speed (km/h)", defaultValue: 65 },
      ]}
      resultLabel="Travel time (hours)"
      formula="travelTimeHours"
      formatResult="number"
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "Next time you plan a drive, compute an estimated travel time from distance ÷ speed, then pad it for stops and traffic rather than trusting the raw number.",
      "For any trip with two different speeds over equal distances, calculate total distance ÷ total time instead of simply averaging the two speeds.",
      "Try the calculator above with your own commute or trip distance and typical speed to sanity-check a GPS estimate.",
      "Before comparing distance and speed values, double-check both are in matching units (miles with mph, or kilometers with km/h) to avoid a unit-mismatch error.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "What is the formula for distance, speed, and time?", answer: "Distance = speed × time. Rearranged, speed = distance ÷ time, and time = distance ÷ speed — the same relationship solved for whichever value is unknown." },
      { question: "How do you calculate average speed for a trip with two different speeds?", answer: "Divide total distance by total time, not by simply averaging the two speeds. If the two legs take unequal time (which happens whenever they cover equal distances at different speeds), a simple average overstates the true result." },
      { question: "Why isn't average speed just the midpoint of the fastest and slowest speed?", answer: "Because average speed is weighted by time spent at each speed, not by distance. A slower speed takes more time to cover the same distance, so it pulls the true average toward itself more than a simple midpoint would suggest." },
      { question: "How do you convert travel time into hours and minutes?", answer: "The decimal part of an hours value converts to minutes by multiplying by 60. For example, 3.69 hours is 3 whole hours plus 0.69 × 60 ≈ 41 minutes, or roughly 3 hours 41 minutes." },
      { question: "Why does a GPS's estimated arrival time keep changing during a trip?", answer: "Because it continuously recalculates time = distance ÷ speed using your current speed. A temporary slowdown (traffic, construction) doesn't just add the minutes you spent driving slowly — it also lowers the assumed future speed until your actual pace increases again." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
