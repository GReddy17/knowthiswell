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
  TermLink,
} from '@/components';

export const metadata: PostFrontmatter = {
  title: "What a \"Digital Footprint\" Actually Means",
  category: "technology-basics",
  order: 95,
  subtopic: "digital-literacy-and-online-life",
  tags: ["digital footprint", "online privacy", "data broker", "active vs passive footprint", "digital literacy"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A digital footprint is the trail of data your devices and accounts leave behind — assembled after the fact into a profile, not built by any single site.",
  summary: "A digital footprint is the total trail of data created by everything you do online and with connected devices, which becomes meaningful not at the moment it's created but when separate trails get matched together into one profile.",
  sources: [
    { label: "FTC — Online Tracking", url: "https://consumer.ftc.gov/articles/online-tracking" },
    { label: "NIST — Privacy Framework", url: "https://www.nist.gov/privacy-framework" },
    { label: "CISA — Cybersecurity Best Practices", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" },
  ],
  seeAlso: [
    "technology-basics/what-cookies-actually-do",
    "technology-basics/how-online-ad-targeting-works",
    "technology-basics/what-app-permissions-actually-grant",
  ],
  glossary: [
    { term: "Digital footprint", definition: "The total trail of data created, directly or indirectly, by a person's activity across websites, apps, and connected devices." },
    { term: "Active footprint", definition: "Data a person deliberately shares, such as a social media post, an online review, or a form they fill out." },
    { term: "Passive footprint", definition: "Data collected in the background without a person directly submitting it, such as an IP address, a device identifier, or a location ping logged automatically by an app." },
    { term: "Data broker", definition: "A company that collects personal data from many separate sources, links it together, and sells or licenses the resulting profiles to advertisers, insurers, or other buyers." },
    { term: "Identifier matching", definition: "The technical process of linking separately collected pieces of data to the same underlying person or device, using shared signals like an email address, device ID, or advertising identifier." },
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
          "A digital footprint isn't one file sitting somewhere — it's the sum of many separate data trails left across different sites, apps, and devices, most of which never talk to each other directly.",
          "Footprints split into two kinds: active (things you deliberately share, like a post or review) and passive (things collected automatically in the background, like a device ID or a location ping).",
          "The privacy-relevant step isn't any single trail being collected — it's when separate trails get matched to the same person through a shared identifier, turning scattered fragments into one usable profile.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of walking across wet sand: every step leaves a print, but no single print tells anyone where you started, where you&apos;re headed, or who you are. A <TermLink href="/technology-basics/what-a-digital-footprint-actually-means">digital footprint</TermLink> is the same idea, except the &quot;sand&quot; is every website, app, and connected device you touch, and unlike sand, these prints don&apos;t wash away on their own. One footprint alone is nearly meaningless. The concern starts when someone lines up enough of your footprints, from enough different places, and realizes they all belong to the same person.</div>}
        detailed={<div className="prose-p">This is fundamentally a <strong>lookup via index</strong> problem, the same shape as a credit report or a search engine&apos;s ranking index, applied to identity instead of creditworthiness or relevance. No single company builds a complete footprint on purpose in most cases &mdash; instead, dozens of unrelated systems each log one narrow slice (a site logs a page view, an app logs a location ping, a retailer logs a purchase), and a <TermLink href="/technology-basics/what-a-digital-footprint-actually-means">data broker</TermLink> or advertiser performs <TermLink href="/technology-basics/what-a-digital-footprint-actually-means">identifier matching</TermLink>: linking those separately-collected slices to the same underlying device or person using a shared signal, such as an email address entered in two places, an advertising identifier, or a <TermLink href="/technology-basics/what-cookies-actually-do">third-party cookie</TermLink>. The footprint further splits into an <TermLink href="/technology-basics/what-a-digital-footprint-actually-means">active footprint</TermLink> (a post, a review, a filled-out form &mdash; things a person chose to submit) and a <TermLink href="/technology-basics/what-a-digital-footprint-actually-means">passive footprint</TermLink> (an IP address, a device fingerprint, a background location ping &mdash; things collected without a deliberate submission). The edge case that trips people up: deleting a single post removes that one active trail, but it doesn&apos;t un-match any passive trails that were already linked to the same identifier before the deletion happened.</div>}
      />
      <FootnoteAside>The term &quot;digital footprint&quot; predates modern data brokerage by years, but the underlying mechanism &mdash; scattered logs matched by a shared identifier &mdash; is the same one that powers cross-site ad targeting and credit-report assembly, just applied to a broader and less regulated set of data sources.</FootnoteAside>

      <p>
        Every downstream privacy question &mdash; who can see what you did, how targeted an ad feels, whether a stranger can find your address from a username &mdash; traces back to that one mechanism: separate trails, collected in separate places, matched together by a shared identifier into one profile.
      </p>

      <QuickCheck
        question="Why is a single data point, like one online purchase, usually not a meaningful privacy risk on its own?"
        options={[
          { text: "Because a single trail has almost nothing to link it to a specific identity until it's matched with other trails", correct: true, explanation: "Correct. The risk isn't in any one data point — it's in matching many scattered data points to the same identifier, which is what turns fragments into a usable profile." },
          { text: "Because online purchases are never logged by any system", correct: false, explanation: "Online purchases are logged by the retailer, the payment processor, and often analytics or advertising scripts — the data point exists, it just isn't meaningful in isolation." },
          { text: "Because footprints only exist on social media, not on shopping sites", correct: false, explanation: "A footprint is created by any online activity, not just social media — purchases, searches, and location pings all contribute to it." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: An active footprint left on purpose (baseline case)</h3>
      <div className="prose-p">
        Someone posts a public review of a restaurant under their real name. That single post is a deliberate, active contribution to their footprint &mdash; they chose to write it, chose to attach their name, and could, in principle, delete it later. On its own, it tells a reader one fact: this person visited this restaurant and had this opinion. It doesn&apos;t reveal where they live, what else they buy, or how often they go out, because nothing has matched it to any other trail yet.
      </div>
      <QuickCheck
        question="What makes the restaurant review an example of an 'active' footprint specifically?"
        options={[
          { text: "It was deliberately submitted by the person, with their awareness, rather than collected automatically in the background", correct: true, explanation: "Correct. Active footprint entries are things a person chose to share — the deliberate act of writing and posting is what distinguishes it from a passively logged data point." },
          { text: "It is stored on a government server", correct: false, explanation: "Where data is stored doesn't determine whether it's active or passive — the distinction is about whether the person deliberately submitted it." },
          { text: "It cannot ever be deleted once posted", correct: false, explanation: "Most platforms let a user delete their own posts — deletability isn't what defines 'active,' deliberate submission is." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: Passive trails matched without a deliberate post (edge case / variation)</h3>
      <div className="prose-p">
        A person never posts on social media, never fills out a survey, and thinks they have &quot;no online presence.&quot; But their phone&apos;s apps still log location pings, their browser still accepts cookies from ad scripts embedded on sites they visit, and their home wifi router has a device identifier that gets logged by a smart-home app. None of that required them to type or submit anything. If enough of those passive trails get matched to the same advertising identifier, a fairly detailed profile of their routines can exist even though they never actively &quot;shared&quot; anything in the way they&apos;d recognize.
      </div>
      <QuickCheck
        question="Someone believes they have no digital footprint because they never post online. What's the flaw in that belief?"
        options={[
          { text: "A footprint can be built entirely from passive trails — location pings, cookies, device identifiers — with no deliberate posting required", correct: true, explanation: "Correct. Passive footprint data is collected automatically in the background, independent of whether a person ever actively posts or submits anything." },
          { text: "It's not a flaw — a person who never posts truly has zero digital footprint", correct: false, explanation: "Passive data collection happens regardless of whether someone posts publicly, so 'never posting' doesn't mean 'no footprint.'" },
          { text: "Passive data collection only happens to people who have used social media before", correct: false, explanation: "Passive collection (location, device IDs, cookies) doesn't require any prior social media use — it happens through ordinary app and browser use." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Deleting one account doesn&apos;t erase the matched profile (real-world / applied case)</h3>
      <p>
        A user deletes an old social media account, expecting their &quot;online presence&quot; to disappear. Their username stops resolving, their posts stop being visible, and that particular active trail is gone. But a data broker had already matched that account&apos;s email address to purchase records, browsing cookies, and a mobile advertising identifier months earlier &mdash; and that matched profile lives in the broker&apos;s own systems, entirely separate from the deleted account. Deleting the account removed one trail at the source; it did nothing to unwind matches that had already been made from copies of that trail elsewhere.
      </p>
      <QuickCheck
        question="After deleting a social media account, why might a matched profile built from that account's data still exist elsewhere?"
        options={[
          { text: "Because a data broker may have already copied and matched that data to other trails before the account was deleted, and that copy is independent of the original account", correct: true, explanation: "Correct. Once separate trails are matched and stored by a third party, deleting the original source doesn't retroactively unwind or delete that third party's own copy." },
          { text: "Because deleted accounts are automatically restored after 30 days", correct: false, explanation: "Account restoration policies vary by platform, but that's unrelated to whether third-party data brokers retain their own already-matched copies." },
          { text: "Because deleting an account is technically impossible on any platform", correct: false, explanation: "Deleting an account is generally possible and does remove that trail at the source — the issue is with already-matched copies held elsewhere, not with deletion being impossible." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="How scattered trails get matched into one profile"
        type="flow"
        svgSrc="/diagrams/technology-basics-what-a-digital-footprint-actually-means-trail-aggregation.svg"
        altText="A diagram showing four separate sources of data — browsing history, purchases, social media activity, and location pings from apps — each sending a small trail into a shared central profile assembled by an advertiser or data broker."
      />
      <p>
        No box on the left can see the other boxes&apos; data. The aggregation only happens in the middle, once a shared identifier lets separate trails be recognized as belonging to the same person.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a digital footprint is one file or record that lives in a single place.", fix: "Treat it as many separate, unrelated data trails that only become one profile when a third party deliberately matches them using a shared identifier." },
          { mistake: "Believing that never posting on social media means having no meaningful footprint.", fix: "Remember passive footprint data — device IDs, location pings, cookies — accumulates from ordinary browsing and app use regardless of whether anyone ever posts publicly." },
          { mistake: "Thinking deleting an account erases every trace of data that was ever linked to it.", fix: "Recognize that deletion removes the trail at its original source, but copies already matched and stored by advertisers or data brokers are separate and not automatically affected." },
        ]}
      />
      <MisconceptionCallout
        myth="If I've never posted anything personal online, I don't have a digital footprint worth worrying about."
        reality={<p>Most of a typical footprint is built passively, not actively. An <TermLink href="/technology-basics/what-a-digital-footprint-actually-means">active footprint</TermLink> requires deliberately posting or submitting something, but a <TermLink href="/technology-basics/what-a-digital-footprint-actually-means">passive footprint</TermLink> accumulates automatically from device identifiers, location pings, and cookies during completely ordinary browsing and app use &mdash; no posting required. Someone with zero social media accounts can still have a detailed profile built from purely passive signals.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Separate the two categories in your own mind: what you actively post (which you can usually delete) versus what's passively collected in the background (which requires adjusting device and app settings, not just deleting a post).",
          "Check your phone's location and app-permission settings periodically — passive footprint growth is driven largely by background permissions you granted once and forgot about.",
          "Don't assume deleting an old account undoes data already matched and stored by a third party — treat prevention as more reliable than after-the-fact removal.",
          "Read What App Permissions Are Actually Granting Access To next to see exactly which background data sources feed the passive side of a footprint.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "What is a digital footprint in simple terms?", answer: "It's the total trail of data created by everything you do online and with connected devices — both what you deliberately share (an active footprint) and what gets collected automatically in the background (a passive footprint)." },
          { question: "Can you delete your entire digital footprint?", answer: "You can delete the active trails you control, like posts and accounts, at their source. But copies of data already matched and stored by third parties such as data brokers are separate systems and aren't automatically erased by deleting the original." },
          { question: "What's the difference between an active and passive digital footprint?", answer: "An active footprint is something you deliberately submit, like a post or a review. A passive footprint is collected automatically without direct submission, like a device identifier, an IP address, or a location ping logged by an app." },
          { question: "Does having no social media mean I have no digital footprint?", answer: "No. Passive data collection — through browsing, apps, and connected devices — happens independently of whether you use social media, so a person with zero social accounts can still have a substantial passive footprint." },
          { question: "Who actually collects and combines digital footprint data?", answer: "Many separate parties log narrow slices independently — individual sites, apps, and advertisers — and data brokers or ad-tech companies are the ones that typically perform the matching that combines those slices into a single profile." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
