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
  EntryCalculator,
  ActionChecklist,
  FAQBlock,
  GlossaryStrip,
  SeeAlsoList,
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "What \"Uptime\" Means for Online Services",
  category: "technology-basics",
  order: 39,
  subtopic: "cloud-computing-and-storage",
  tags: ["uptime explained", "server failover", "redundancy", "downtime", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "Uptime is the measured percentage of time a service actually responds as expected — and the gap between 99% and 99.99% is far bigger than the numbers suggest.",
  summary: "Uptime is the percentage of time an online service is available and functioning as expected, typically achieved and measured through redundant servers and automatic failover rather than any single machine simply never failing.",
  sources: [
    { label: "Cloudflare Learning Center — What Is Server Failover?", url: "https://www.cloudflare.com/learning/performance/what-is-server-failover/" },
    { label: "Cloudflare Learning Center — What Is Application Availability?", url: "https://www.cloudflare.com/learning/performance/glossary/application-availability/" },
    { label: "Cloudflare Learning Center — What Is a CDN?", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" },
  ],
  seeAlso: [
    "technology-basics/what-a-server-actually-is",
    "technology-basics/what-the-cloud-actually-is",
    "technology-basics/why-some-apps-work-offline-and-others-dont",
  ],
  glossary: [
    { term: "Uptime", definition: "The percentage of time, usually measured over a month or a year, that a service is available and responding as expected." },
    { term: "Downtime", definition: "Any period during which a service is unavailable or not functioning as expected — the direct complement of uptime." },
    { term: "Redundancy", definition: "Running duplicate servers or systems so that if one fails, another can take over without the overall service becoming unavailable." },
    { term: "Failover", definition: "The automatic process of switching traffic from a failed server to a healthy backup server, ideally fast enough that users notice little or no interruption." },
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
          "Uptime is a measured percentage of time a service actually works, not a promise that nothing will ever fail — the number describes an outcome, achieved through redundancy.",
          "The gap between uptime percentages is much larger in practice than the numbers suggest: 99% uptime allows for roughly 3.65 days of downtime a year, while 99.99% allows for only about 52 minutes.",
          "High uptime is typically achieved with redundant servers and automatic failover, not by making one server that simply never breaks — individual machines fail regularly, and the system is designed around that fact.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A 24-hour convenience store doesn&apos;t stay open by having one employee who never gets sick or needs a break — it stays open by always having a backup person ready to step in the moment the first one can&apos;t work. <TermLink href="/technology-basics/what-uptime-means-for-online-services">Uptime</TermLink> for an online service works the same way: it&apos;s the percentage of time the service is actually up and working, and high uptime is achieved not by building one server that never fails, but by having backup servers ready to take over instantly when one does.</div>}
        detailed={<div className="prose-p">Uptime is typically expressed as a percentage over a period (monthly or yearly), and providers commonly advertise it in &quot;nines&quot; — 99%, 99.9%, 99.99% — where each additional nine represents a roughly tenfold reduction in allowed <TermLink href="/technology-basics/what-uptime-means-for-online-services">downtime</TermLink>. This is achieved architecturally through <TermLink href="/technology-basics/what-uptime-means-for-online-services">redundancy</TermLink> — running the same service on multiple independent servers, often across multiple physical locations, so a single hardware failure doesn&apos;t take the whole service down — combined with <TermLink href="/technology-basics/what-uptime-means-for-online-services">failover</TermLink>, the automated process of rerouting traffic to a healthy backup the moment monitoring detects a problem. The edge case worth knowing: uptime measures whether the service responds at all, not necessarily how well or how fast — a service technically counted as &quot;up&quot; while running severely degraded or partially broken is a real gap some providers&apos; contractual uptime definitions leave open, which is why the exact definition of &quot;available&quot; in a service&apos;s terms matters as much as the headline percentage.</div>}
      />
      <FootnoteAside>&quot;Five nines&quot; (99.999% uptime) is a commonly cited high bar in the industry, allowing only about 5 minutes and 15 seconds of downtime per year — achieving it consistently generally requires geographically distributed redundancy and automated failover, not just reliable individual hardware.</FootnoteAside>

      <p>
        Once uptime is understood as a designed outcome of redundancy rather than an assumption that nothing ever breaks, the size of the gap between different uptime percentages — and why providers charge more for higher guarantees — makes a lot more sense.
      </p>

      <QuickCheck
        question="A hosting provider advertises '99.9% uptime.' What does this actually guarantee?"
        options={[
          { text: "That its servers will never experience a hardware failure", correct: false, explanation: "Uptime percentages don't claim individual servers never fail — they describe the overall service's measured availability, which is typically maintained despite individual failures through redundancy and failover." },
          { text: "That the service is available and functioning as expected roughly 99.9% of the time, allowing for a small, bounded amount of downtime over a given period", correct: true, explanation: "Correct. Uptime is a measured percentage of availability over time, not a guarantee against failure — 99.9% uptime allows for a specific, calculable amount of downtime, roughly 8.76 hours per year." },
          { text: "That the service runs on a single, extremely reliable server with no backups needed", correct: false, explanation: "High uptime figures are typically achieved through redundant servers and automatic failover, precisely because relying on a single server, however reliable, isn't a robust way to guarantee high availability." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Comparing 99% and 99.9% uptime over a year (baseline case)</h3>
      <div className="prose-p">
        A service with 99% uptime is allowed roughly 3.65 days of downtime across a full year. A service with 99.9% uptime is allowed roughly 8.76 hours across that same year — about a tenfold reduction, even though the two percentages look nearly identical written side by side. This is exactly why uptime percentages need to be read carefully rather than at a glance: the visual difference between &quot;99%&quot; and &quot;99.9%&quot; is small, but the real-world difference in tolerated downtime is an order of magnitude.
      </div>
      <QuickCheck
        question="Two services advertise 99% and 99.9% uptime. Written side by side, the numbers look almost the same. How different is the actual allowed downtime per year?"
        options={[
          { text: "Nearly identical, since the percentages themselves only differ by a fraction of a point", correct: false, explanation: "The percentages look close, but the allowed downtime scales very differently — roughly 3.65 days a year at 99% versus roughly 8.76 hours a year at 99.9%, not a marginal difference." },
          { text: "Roughly tenfold different — about 3.65 days of allowed downtime per year at 99%, versus about 8.76 hours per year at 99.9%", correct: true, explanation: "Correct. Each additional 'nine' of uptime represents roughly a tenfold reduction in allowed downtime, which is why the visual similarity of the percentages is misleading." },
          { text: "There's no real difference at all — both numbers round to effectively 100% uptime", correct: false, explanation: "Rounding both to '100%' erases a real, substantial difference in actual tolerated downtime that matters a great deal for anything time-sensitive." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A server failing during a failover system&apos;s test (edge case / variation)</h3>
      <div className="prose-p">
        A primary server hosting a service unexpectedly fails, but monitoring software detects the failure within seconds and automatically reroutes traffic to a standby server in a different data center. Users experience, at most, a few seconds of delay or a single failed request that succeeds on retry — not a full outage. From the outside, this looks like the service &quot;never went down,&quot; but a real hardware failure genuinely occurred; what actually happened is that failover worked exactly as designed, converting what could have been extended downtime into a brief, often unnoticed blip. This is the mechanism that makes high advertised uptime figures achievable despite individual hardware being inherently failure-prone.
      </div>
      <QuickCheck
        question="A primary server fails, but users barely notice any disruption because a backup server took over within seconds. What does this demonstrate?"
        options={[
          { text: "That the primary server never actually failed in the first place", correct: false, explanation: "A real failure occurred — the reason it wasn't disruptive is that the failover system detected it and rerouted traffic quickly, not that nothing went wrong." },
          { text: "That redundancy and automatic failover can convert an individual server failure into a brief, often unnoticed interruption instead of extended downtime", correct: true, explanation: "Correct. This is exactly how high uptime is achieved in practice — not by preventing every failure, but by architecting the system so a single failure doesn't translate into a lengthy outage for users." },
          { text: "That the service's uptime percentage will now be recalculated to ignore this failure entirely", correct: false, explanation: "A legitimate failure that causes even a brief interruption is generally still counted in downtime calculations — the goal of failover is to minimize that downtime's duration, not erase the event from measurement." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Reading a service-level agreement&apos;s uptime clause (real-world / applied case)</h3>
      <p>
        A business evaluating a cloud provider for a critical application reads the provider&apos;s service-level agreement (SLA) and finds it guarantees 99.95% uptime, with defined compensation (typically service credits) if that threshold isn&apos;t met in a given month. Rather than treating &quot;99.95%&quot; as an abstract marketing number, the business calculates what it actually means in practice: roughly 21.9 minutes of allowed downtime per month. This kind of concrete translation — converting a percentage into real minutes or hours — is exactly how uptime figures should be evaluated when choosing a provider for something where downtime has real business consequences.
      </p>
      <QuickCheck
        question="A business reads a cloud provider's SLA promising 99.95% uptime. Why does the business bother converting that percentage into actual minutes of allowed downtime per month?"
        options={[
          { text: "Because SLA percentages are usually inaccurate and need independent verification", correct: false, explanation: "The concern isn't inaccuracy — it's that a bare percentage is hard to reason about intuitively, so converting it into concrete minutes or hours makes its real-world impact clearer." },
          { text: "Because converting the percentage into concrete downtime (roughly 21.9 minutes per month at 99.95%) makes it possible to judge whether that amount of downtime is actually acceptable for the specific application", correct: true, explanation: "Correct. A percentage alone is hard to reason about intuitively — translating it into real minutes or hours lets a business meaningfully evaluate whether an SLA is strong enough for their specific needs." },
          { text: "Because SLAs are legally required to be expressed in minutes rather than percentages", correct: false, explanation: "There's no such legal requirement — SLAs commonly state uptime as a percentage; converting it to minutes is a practical evaluation step, not a compliance necessity." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Redundancy and failover: how uptime survives a single failure"
        type="detail"
        svgSrc="/diagrams/technology-basics-what-uptime-means-for-online-services-redundancy.svg"
        altText="A diagram showing many users connecting to a load balancer, which normally routes traffic to an active primary server, with a standby backup server shown in a second data center. A dashed arrow shows traffic automatically rerouting to the standby server if the primary fails, illustrating how redundancy and failover keep a service available despite a single server going down."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Treating 99% and 99.9% uptime as nearly the same because the numbers look close.", fix: "Convert the percentage into actual downtime minutes or hours over a year — the real-world gap between adjacent 'nines' is roughly tenfold, not marginal." },
          { mistake: "Assuming high uptime means a provider's hardware never fails.", fix: "High uptime is typically achieved through redundancy and automatic failover despite regular individual hardware failures, not by preventing failure altogether." },
          { mistake: "Assuming a service counted as 'up' is necessarily working correctly and at full speed.", fix: "Some uptime definitions only measure whether a service responds at all, not whether it's performing normally — check an SLA's exact definition of 'available' for anything business-critical." },
        ]}
      />
      <MisconceptionCallout
        myth="99% uptime is basically the same as 100% — close enough not to worry about."
        reality={<p>99% uptime allows for roughly 3.65 days of downtime across a year — noticeably more than a rounding error. By comparison, 99.99% uptime allows only about 52 minutes a year. The percentages look close written next to each other, but converting them into actual downtime reveals a difference of days versus minutes, which is exactly why providers charge meaningfully more for each additional &quot;nine&quot; of guaranteed uptime.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Try it yourself</h2>
      <EntryCalculator
        title="Convert uptime percentage to allowed downtime"
        description="See how many minutes of downtime per year a given uptime percentage actually allows."
        fields={[
          { key: "uptimePercent", label: "Uptime guarantee (%)", defaultValue: 99.9, step: 0.01 },
        ]}
        resultLabel="Allowed downtime per year (minutes)"
        formula="downtimeMinutesPerYearFromUptimePercent"
        formatResult="number"
        disclaimer="Assumes a full calendar year (525,600 minutes) — some SLAs measure and prorate downtime monthly instead."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Convert any advertised uptime percentage into actual downtime minutes or hours before judging whether it's meaningful for your use case.",
          "When choosing a provider for something critical, read the SLA's exact definition of 'available,' not just the headline percentage.",
          "Understand that high uptime comes from redundancy and failover design, not a promise that hardware won't fail.",
          "Read What a Server Actually Is next if the client/server mechanics behind an individual server failing and being replaced aren't yet clear.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What does 99.9% uptime mean?", answer: "It means a service is expected to be available and functioning roughly 99.9% of the time over a given period, which works out to about 8.76 hours of allowed downtime per year, or roughly 43.8 minutes per month." },
          { question: "How is high uptime achieved?", answer: "Primarily through redundancy (running the service on multiple independent servers, often in different physical locations) and automatic failover (rerouting traffic to a healthy backup the moment a failure is detected), rather than by preventing individual hardware failures entirely." },
          { question: "Is there a big difference between 99% and 99.99% uptime?", answer: "Yes — a much bigger difference than the numbers suggest at a glance. 99% uptime allows roughly 3.65 days of downtime per year, while 99.99% allows only about 52 minutes, a difference of roughly two orders of magnitude." },
          { question: "Does 'uptime' mean a service is working perfectly?", answer: "Not necessarily. Some uptime definitions only measure whether a service responds at all, not whether it's performing at full speed or correctly — checking an SLA's precise definition of 'available' matters for anything where degraded performance would be a real problem." },
          { question: "What is failover?", answer: "The automatic process of rerouting traffic from a failed server to a healthy backup server, ideally quickly enough that users experience little or no noticeable interruption — the core mechanism that lets redundant systems achieve high measured uptime." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
