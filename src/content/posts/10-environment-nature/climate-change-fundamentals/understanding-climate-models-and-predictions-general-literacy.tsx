import React from 'react';
import { PostFrontmatter } from '@/types/post';
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
  title: "Understanding Climate Models & Predictions (General Literacy)",
  category: "environment-nature",
  order: 7,
  subtopic: "climate-change-fundamentals",
  tags: ["climate models", "climate projections", "emissions scenarios", "IPCC", "general literacy"],
  date: "2026-08-22",
  updated: "2026-08-22",
  lastReviewed: "2026-08-22",
  excerpt: "Climate models aren't weather forecasts extended further out — they're physics-based simulations tested against decades of past data, run under multiple future emissions scenarios rather than one single guess.",
  summary: "Climate models are physics-based simulations of the atmosphere, oceans, and land surface that are validated by successfully reproducing decades of already-observed climate data, then run forward under several different future greenhouse gas emissions scenarios to project a range of possible outcomes rather than a single fixed prediction.",
  sources: [
    { label: "NASA — Climate Modeling", url: "https://climate.nasa.gov/climate-change-modeling/" },
    { label: "IPCC — Sixth Assessment Report, Working Group I, Chapter 1 (Framing, Context, and Methods)", url: "https://www.ipcc.ch/report/ar6/wg1/" },
    { label: "NOAA — Geophysical Fluid Dynamics Laboratory: Climate Modeling", url: "https://www.gfdl.noaa.gov/climate-modeling/" },
  ],
  seeAlso: [
    "environment-nature/global-warming-vs-climate-change-whats-the-difference",
    "environment-nature/extreme-weather-and-the-climate-change-connection",
    "environment-nature/what-causes-climate-change-human-driven-mechanisms",
  ],
  glossary: [
    {"term":"General circulation model (GCM)","definition":"A computer simulation that divides the atmosphere and oceans into a 3D grid and calculates how energy, moisture, and momentum move between grid cells over time, based on physical laws."},
    {"term":"Emissions scenario","definition":"A defined set of assumptions about future greenhouse gas emissions (e.g. rapid reduction, moderate action, continued high emissions), used to run a climate model forward under different plausible futures rather than one fixed guess."},
    {"term":"Hindcasting","definition":"Testing a climate model's validity by running it on past conditions and checking whether it correctly reproduces climate patterns and events that already happened and were independently measured."},
    {"term":"Model ensemble","definition":"Running many independent climate models, or the same model many times with slightly varied starting conditions, and reporting the spread of results as a range rather than a single number, since no individual model perfectly captures every process."},
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
      "Climate models are physics-based simulations of energy, moisture, and circulation in the atmosphere and oceans — not statistical extrapolations of a trend line, and not extended weather forecasts.",
      "Models are validated through hindcasting: running them on the past and checking whether they reproduce already-observed, independently measured climate history before they're trusted for future projections.",
      "Climate projections are always presented as a range across multiple emissions scenarios and multiple independent models, not a single fixed number — the range itself reflects genuine scientific uncertainty about future human choices and natural variability, not a weakness in the physics.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
      labels={{ plain: "Plain", detailed: "Detailed" }}
      plain={<div className="prose-p">A climate model is a computer program built on real physical laws — how heat moves, how water evaporates and condenses, how ocean currents circulate — applied across a 3D grid covering the entire planet. It&apos;s not the same thing as a weather forecast, which tries to predict specific conditions days ahead; a climate model instead projects long-term statistical patterns (average temperatures, precipitation trends) over decades. Scientists test these models by running them on the past first, checking whether they correctly reproduce climate history that&apos;s already been measured, before trusting their future projections.</div>}
      detailed={<div className="prose-p">Most modern climate models are <TermLink href="/environment-nature/understanding-climate-models-and-predictions-general-literacy">general circulation models (GCMs)</TermLink> that divide the atmosphere and oceans into a three-dimensional grid of cells, then calculate how energy, moisture, and momentum transfer between adjacent cells over discrete time steps, based on fluid dynamics and thermodynamics. Because future greenhouse gas emissions depend on human policy and economic choices that can&apos;t be physically predicted, models are run under several distinct <TermLink href="/environment-nature/understanding-climate-models-and-predictions-general-literacy">emissions scenarios</TermLink> (ranging from aggressive reduction to continued high emissions) rather than a single guess, producing a range of projected outcomes tied to each scenario. Validity is established through <TermLink href="/environment-nature/understanding-climate-models-and-predictions-general-literacy">hindcasting</TermLink> — running a model on known historical conditions and checking that it independently reproduces the actual observed 20th-century warming trend, volcanic cooling events, and other documented climate history it wasn&apos;t explicitly programmed to match.</div>}
      />
      <FootnoteAside>One of the most cited hindcasting successes is a 1988 NASA climate model projection by scientist James Hansen, presented to the US Senate, whose scenario B projection (closest to the emissions path that actually occurred over the following decades) tracked observed global temperature remarkably closely — an early public demonstration that these models had genuine predictive skill, not just retrospective curve-fitting.</FootnoteAside>

      <p>
      Understanding that projections are scenario-dependent, not single fixed numbers, resolves a common source of confusion when different reports appear to cite different future temperature figures.
      </p>

      <QuickCheck
      question="Two climate reports project different global temperature increases by 2100 — one says 'about 1.8°C' and another says 'about 4°C.' Does this mean climate models are unreliable or contradictory?"
      options={[
      { text: "Yes — reliable science should produce one single consistent number, not a range of different figures", correct: false, explanation: "This assumes the difference reflects model unreliability, but it usually reflects something else entirely — different reports are often citing projections for different future emissions scenarios, not disagreeing about the same scenario." },
      { text: "Not necessarily — these figures likely correspond to different assumed future emissions scenarios (e.g. aggressive reduction vs. continued high emissions), since climate projections are always scenario-dependent rather than single fixed predictions, similar to how a financial projection depends on assumed future interest rates", correct: true, explanation: "Correct. Climate models don't predict a single future because future emissions depend on human choices that can't be physically forecast — different cited figures usually correspond to different assumed emissions pathways, not contradictory science." },
      { text: "Yes, and this proves the underlying physics used in the models must be wrong", correct: false, explanation: "A range of scenario-dependent projections doesn't indicate flawed physics — it reflects genuine uncertainty about future human emissions choices, which is a policy and behavioral variable, not a physical one the model is trying to calculate." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Hindcasting a known volcanic cooling event (baseline case)</h3>
      <div className="prose-p">
      When Mount Pinatubo erupted in 1991, it released sulfate aerosols that temporarily cooled global average temperature by about 0.5°C over the following year or two — a well-documented, independently measured event. Climate models given the same volcanic aerosol input successfully reproduce this temporary cooling dip in their simulated temperature output, which is exactly the kind of out-of-sample validation test (the model wasn&apos;t built specifically to match this one event) that builds confidence in a model&apos;s underlying physics.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Comparing projections across the IPCC&apos;s shared socioeconomic pathways (edge case / variation)</h3>
      <div className="prose-p">
      The IPCC&apos;s Sixth Assessment Report presents projected warming under multiple named emissions scenarios (Shared Socioeconomic Pathways, or SSPs) — a low-emissions pathway projects roughly 1.4-1.8°C of warming by 2100 relative to pre-industrial levels, while a high-emissions pathway with limited climate policy projects roughly 3.3-5.7°C. These aren&apos;t competing predictions about the same future; they&apos;re the same physical model applied to genuinely different possible human emissions choices, illustrating why &quot;what will the temperature be in 2100&quot; doesn&apos;t have one single scientific answer independent of policy decisions made between now and then.
      </div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: The 1988 Hansen projection tracked against actual observed warming (real-world / applied case)</h3>
      <div className="prose-p">
      NASA scientist James Hansen&apos;s 1988 congressional testimony included model projections under three emissions scenarios (A, B, and C). Actual global emissions over the following decades tracked closest to his moderate &quot;Scenario B&quot; assumptions, and the observed global temperature record since then has tracked reasonably closely with Scenario B&apos;s projected warming — a real-world, multi-decade test of a climate model&apos;s forward-looking skill made publicly on record well before the outcome was known, not a retrospective fit.
      </div>

      <QuickCheck
      question="Why do climate scientists consider hindcasting an important test of a climate model's credibility?"
      options={[
      { text: "Because it lets modelers adjust the model until it matches the past exactly, guaranteeing accuracy", correct: false, explanation: "This describes overfitting, which would actually undermine confidence — the value of hindcasting comes specifically from testing whether a model built on general physical principles reproduces documented history it wasn't specifically tuned to match, including out-of-sample events like a particular volcanic eruption's cooling effect." },
      { text: "Because successfully reproducing already-observed, independently measured climate history (like a volcanic cooling event or the historical warming trend) demonstrates the model's underlying physics genuinely captures real climate behavior, building justified confidence before trusting its future projections", correct: true, explanation: "Correct. A model that correctly reproduces known historical events it wasn't explicitly built around gives real evidence of underlying physical validity, which is the basis for trusting its use in projecting scenarios that haven't happened yet." },
      { text: "Hindcasting is purely a formality with no real bearing on a model's future accuracy", correct: false, explanation: "Hindcasting is a substantive validation step, not a formality — a model's ability to reproduce known history using the same physics it uses for future projections is direct evidence about whether that physics is sound." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
      title="From past validation to a range of future scenario-based projections"
      type="flow"
      svgSrc="/diagrams/environment-nature-understanding-climate-models-and-predictions-general-literacy-model-pipeline.svg"
      altText="A flow diagram showing a climate model first tested against historical data through hindcasting, producing a validation checkmark, then branching forward into three separate lines representing low, medium, and high future emissions scenarios, each producing a different projected temperature range by 2100, illustrating that climate projections are validated against the past before being run forward under multiple distinct possible futures rather than one single guess."
      />
      <p>
      The model itself doesn&apos;t change between scenario runs — only the assumed future emissions input changes, which is why the resulting spread of projected outcomes reflects uncertainty about human choices, not uncertainty about the underlying physics.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
      items={[
      { mistake: "Treating a climate model the same way as a short-term weather forecast.", fix: "Climate models project long-term statistical patterns over decades, not specific day-to-day conditions — weather forecasting and climate modeling use related physics but answer fundamentally different questions on different timescales." },
      { mistake: "Assuming different cited future temperature figures mean climate scientists disagree with each other.", fix: "Check whether the different figures correspond to different assumed emissions scenarios — the same underlying model and physics can produce a wide range of outcomes depending only on future human emissions choices." },
      { mistake: "Dismissing climate models as 'unproven' because the future hasn't happened yet.", fix: "Point to hindcasting — models are tested against decades of already-observed, independently measured climate history, including specific known events like volcanic cooling, before their future projections are trusted." },
      ]}
      />
      <MisconceptionCallout
      myth="Climate models are essentially just guesses or statistical trend lines extended into the future, with no real predictive track record."
      reality={<p>Climate models are physics-based simulations validated through hindcasting against decades of independently measured historical climate data, including specific documented events like volcanic-driven cooling. They also have a real, on-the-record forward-looking track record — James Hansen&apos;s 1988 congressional model projections, made under specific named scenarios well before the outcome was known, have tracked reasonably closely with subsequently observed global temperature trends under the scenario closest to actual emissions.</p>}
      />

      <QuickCheck
      question="What distinguishes a climate model from a simple extrapolated trend line drawn through past temperature data?"
      options={[
      { text: "Nothing meaningful — they are functionally the same technique with different names", correct: false, explanation: "A trend line is a purely statistical fit to past data with no physical mechanism behind it; a climate model simulates the actual physical processes (energy transfer, moisture, circulation) that produce climate behavior, which is why it can be tested via hindcasting against events a simple trend line couldn't reproduce, like a specific volcanic cooling dip." },
      { text: "A climate model simulates the underlying physical processes driving climate (energy balance, moisture, circulation) and can be validated by reproducing specific historical events like volcanic cooling, while a trend line is a purely statistical fit with no physical mechanism and no ability to reproduce such specific events", correct: true, explanation: "Correct. This physical basis is exactly why climate models can pass tests a simple statistical trend line couldn't, such as correctly reproducing the temporary cooling dip after a specific volcanic eruption using the same general physics used for future projections." },
      { text: "A trend line is actually more scientifically rigorous since it relies purely on observed data", correct: false, explanation: "Relying only on past data pattern-matching, without an underlying physical mechanism, is precisely the limitation that makes simple trend lines unable to explain or reproduce specific physically-driven events, unlike a physics-based climate model." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
      items={[
      "When you see a climate projection figure, check which emissions scenario it corresponds to before comparing it against a different cited figure.",
      "Remember the key distinction: weather forecasts predict specific short-term conditions; climate models project long-term statistical patterns under different possible futures.",
      "Look up NASA's or NOAA's climate modeling pages if you want to see how hindcasting validation actually works in more technical detail.",
      "Read the extreme weather post in this cluster to see how the same modeling approach underlies attribution science for specific real events.",
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
      items={[
      { question: "How do climate models work?", answer: "They divide the atmosphere and oceans into a 3D grid and calculate how energy, moisture, and momentum move between grid cells over time, based on real physical laws — the same category of physics-based simulation used in fields like aerospace and engineering, applied to the whole planet." },
      { question: "Are climate models the same as weather forecasts?", answer: "No. Weather forecasts predict specific short-term conditions (days ahead) for a location; climate models project long-term statistical patterns (average temperature, precipitation trends) over decades, and are validated differently." },
      { question: "How do scientists know climate models are accurate?", answer: "Through hindcasting — running the model on past conditions and checking whether it independently reproduces already-observed, measured climate history, including specific documented events like the temporary cooling after a major volcanic eruption." },
      { question: "Why do different climate reports give different future temperature predictions?", answer: "Because projections are tied to different assumed future emissions scenarios, not because the underlying science disagrees — the same model run under a low-emissions scenario and a high-emissions scenario will naturally produce very different projected outcomes." },
      { question: "Have climate model predictions from the past actually come true?", answer: "In notable cases, yes — NASA scientist James Hansen's 1988 congressional model projections, made under a specific named scenario well before the outcome was known, have tracked reasonably closely with the global temperature trend actually observed since then under the emissions path closest to what occurred." },
      ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
