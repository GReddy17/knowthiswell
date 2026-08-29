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
  title: "How File-Sharing Links Actually Work",
  category: "technology-basics",
  order: 38,
  subtopic: "cloud-computing-and-storage",
  tags: ["file sharing links", "shareable link", "how sharing links work", "link permissions", "technology basics"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "A file-sharing link doesn't move the file to you — it's a token pointing back to one stored copy, checked against permissions every single time it's opened.",
  summary: "A file-sharing link is a unique web address that points back to one file stored in a provider's cloud storage, granting access according to permissions the file's owner set, checked again each time the link is opened.",
  sources: [
    { label: "IETF RFC 3986 — Uniform Resource Identifier (URI): Generic Syntax", url: "https://www.rfc-editor.org/rfc/rfc3986.html" },
    { label: "Cloudflare Learning Center — What Is Cloud Storage?", url: "https://www.cloudflare.com/learning/cloud/what-is-cloud-storage/" },
    { label: "Cloudflare Learning Center — What Is an API Endpoint?", url: "https://www.cloudflare.com/learning/security/api/what-is-api-endpoint/" },
  ],
  seeAlso: [
    "technology-basics/what-an-api-actually-does",
    "technology-basics/cloud-storage-vs-local-storage",
    "technology-basics/what-a-server-actually-is",
  ],
  glossary: [
    { term: "Token", definition: "A unique string of characters embedded in a file-sharing link that identifies exactly which stored file (and often which permission level) the link refers to." },
    { term: "Permission check", definition: "A verification step a server performs every time a link is opened, confirming the link is still valid and allowed to access the file before granting it." },
    { term: "Link expiration", definition: "A time limit an owner can set on a shared link, after which the server will refuse access even if someone still has the link's exact address." },
    { term: "Link revocation", definition: "An owner manually disabling a previously working share link, which takes effect immediately without needing to change the underlying file itself." },
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
          "A file-sharing link doesn't send anyone a copy of the file — it's an address pointing back to one file sitting in cloud storage, opened fresh each time.",
          "Every time a link is opened, the server runs a permission check first — confirming the link is still valid — before deciding whether to hand over the file at all.",
          "'Anyone with the link' access is not the same as private access, and a link can be set to expire or be revoked at any time, cutting off access instantly even for people who still have the exact address saved.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Handing someone a claim ticket for a coat check isn&apos;t the same as handing them the coat itself — the ticket just gets them access to the one coat sitting on a rack, and the attendant checks the ticket is valid before handing anything over. A file-sharing link works the same way: it&apos;s a unique address pointing at one file sitting in cloud storage, and the provider&apos;s server checks that address is still valid every time someone tries to open it, rather than sending the file out once and being done with it.</div>}
        detailed={<div className="prose-p">This combines the <strong>lookup via index</strong> and <strong>trust chain / verification</strong> mental models. A shareable link embeds a unique <TermLink href="/technology-basics/how-file-sharing-links-work">token</TermLink> — effectively a long, hard-to-guess identifier — that the provider&apos;s server uses to look up exactly which stored file the link refers to and what permission level it grants (view-only, comment, edit). Critically, opening the link doesn&apos;t transfer or copy the file at that moment by default; it requests it fresh, and the server runs a <TermLink href="/technology-basics/how-file-sharing-links-work">permission check</TermLink> against that specific token every single time, not just the first time. This is what makes two features possible that would otherwise be impossible once a file is &quot;sent&quot;: <TermLink href="/technology-basics/how-file-sharing-links-work">link expiration</TermLink> (the server can start refusing that token after a set date) and <TermLink href="/technology-basics/how-file-sharing-links-work">link revocation</TermLink> (the owner can invalidate the token immediately, at any time). The edge case worth knowing: because the token itself is often the only thing standing between &quot;private&quot; and &quot;accessible,&quot; a link that&apos;s technically not published anywhere public can still be discovered if it&apos;s forwarded, guessed, or accidentally indexed by a search engine — &quot;anyone with the link&quot; sharing is a real, deliberate access tier, not a synonym for private.</div>}
      />
      <FootnoteAside>The address format behind every shareable link — a URL — follows a formally standardized structure defined by the Internet Engineering Task Force, which is exactly why a link can reliably embed both a location and a unique token as one machine-parseable string, understood identically by every browser and server that follows the same standard.</FootnoteAside>

      <p>
        Understanding a share link as a re-checked pointer rather than a one-time delivery clears up most of the confusing behavior around expiring links, revoked access, and why the same link can behave differently for different people.
      </p>

      <QuickCheck
        question="Someone shares a file link with a coworker, then later changes the link's permission from 'can edit' to 'view only.' What happens the next time the coworker opens that same link?"
        options={[
          { text: "Nothing changes, since the coworker already received the file when the link was first sent", correct: false, explanation: "Opening a share link doesn't deliver a one-time, permanently editable copy — each time it's opened, the server checks current permissions for that link, which now reflect the update." },
          { text: "The server checks the link's current permission level and grants view-only access, since permission checks happen fresh each time the link is opened, not just once", correct: true, explanation: "Correct. A share link is re-verified against current permissions every time it's used, which is exactly why an owner can change or revoke access after the fact, even after the link has already been shared and opened before." },
          { text: "The coworker keeps edit access permanently, because links can't have their permissions changed after being created", correct: false, explanation: "Most sharing systems let the owner change a link's permission level at any time, and that change takes effect on the very next access attempt, not just for future links." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: Sharing a photo album with a family member (baseline case)</h3>
      <div className="prose-p">
        Someone uploads photos to cloud storage and generates a share link set to &quot;anyone with the link can view.&quot; They send that link over text message. When the family member opens it, their device sends a request to the provider&apos;s server containing the link&apos;s token; the server looks up which album that token corresponds to, confirms the link is still active, and returns the photos for viewing — all without the family member needing an account with that provider at all, since the permission is tied to the link&apos;s token, not to a specific logged-in identity.
      </div>
      <QuickCheck
        question="A family member can view shared photos through a link without ever creating an account with that cloud provider. How is that possible?"
        options={[
          { text: "The provider secretly creates a hidden account for them behind the scenes", correct: false, explanation: "No account is created — access through an 'anyone with the link' share is tied to the link's token itself, not to any account, hidden or otherwise." },
          { text: "The link's permission is attached to its unique token rather than to a specific logged-in identity, so anyone presenting that valid token is granted the access it specifies", correct: true, explanation: "Correct. 'Anyone with the link' sharing deliberately doesn't require an account — the server checks the token's validity and permission level, not who is logged in." },
          { text: "Photos shared this way are technically public to the entire internet, not just people with the link", correct: false, explanation: "The photos aren't openly public — only someone possessing the specific, hard-to-guess link token can access them, which is different from being indexed or discoverable by anyone." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A shared link accidentally being forwarded further (edge case / variation)</h3>
      <div className="prose-p">
        A document is shared with &quot;anyone with the link can view&quot; permission, intended for one specific person, but that person forwards the link to someone else without asking. Because the permission is attached to the link&apos;s token rather than to any particular recipient&apos;s identity, the new person can open it just as easily as the intended recipient could — the server has no way to distinguish who is presenting a valid token unless the owner specifically restricted the link to require sign-in from approved accounts rather than &quot;anyone with the link.&quot; This is the direct, mechanical reason link-based sharing is meaningfully less controlled than sharing restricted to specific named accounts.
      </div>
      <QuickCheck
        question="A document shared with 'anyone with the link' permission gets forwarded to someone the owner never intended to have access. Why does that person get in successfully?"
        options={[
          { text: "The server can detect the file was forwarded and blocks unauthorized viewers automatically", correct: false, explanation: "Most link-based sharing systems can't distinguish who is presenting a valid token — if the token itself is valid, access is generally granted regardless of how someone obtained the link." },
          { text: "The permission is attached to the link's token itself, not to a specific person's identity, so anyone holding a valid token is granted the same access", correct: true, explanation: "Correct. 'Anyone with the link' sharing means exactly that — access is tied to possessing the valid token, not to being a specific verified individual, which is why forwarding a link effectively forwards access." },
          { text: "The file's permission settings reset automatically whenever a link is opened by a new device", correct: false, explanation: "Permission settings don't reset based on which device opens a link — they stay as the owner configured them until deliberately changed." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Revoking access after sharing sensitive files (real-world / applied case)</h3>
      <p>
        A business shares a sensitive contract with an external partner using a time-limited link, set to expire in seven days. After the deal concludes early, the business manually revokes the link rather than waiting for the expiration date. The next time anyone tries to open that same link — including the intended partner, if they try again later — the server&apos;s permission check finds the token has been revoked and denies access immediately, even though the file itself still physically exists untouched in the business&apos;s cloud storage. This demonstrates the real practical value of the re-checked-every-time design: access control happens at the server, independent of whether anyone still has the link&apos;s exact address saved somewhere.
      </p>
      <QuickCheck
        question="A business revokes a shared contract link after a deal concludes early, before the link's original seven-day expiration date. What happens if the original partner tries to open that same link afterward?"
        options={[
          { text: "Access is still granted, since revocation only takes effect once the original expiration date arrives", correct: false, explanation: "Revocation takes effect immediately, not on a delay tied to the original expiration date — the server's permission check reflects the current state of the link right away." },
          { text: "Access is denied immediately, because the server's permission check finds the token has been revoked, regardless of the link's original expiration date", correct: true, explanation: "Correct. Revocation is enforced at the server on every access attempt, independent of any expiration date that was originally set — the two are separate controls." },
          { text: "Access is denied only for new visitors, but anyone who opened the link before revocation keeps working access indefinitely", correct: false, explanation: "Because permissions are checked fresh every time a link is opened, revocation applies to every future attempt, including from someone who successfully opened it before." },
        ]}
      />


      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Upload, link, permission check, access"
        type="flow"
        svgSrc="/diagrams/technology-basics-how-file-sharing-links-work-flow.svg"
        altText="A flow diagram showing a file uploaded to cloud storage and assigned a unique address, that address wrapped into a shareable link, the link sent to a recipient, and the recipient's click routed through a permission check before either being granted access to the stored file or denied if the link has expired or been revoked."
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming 'anyone with the link' is the same as 'private and secure.'", fix: "It's a real, intentional access tier — anyone possessing the token gets access, including people the link gets forwarded to. Use sign-in-restricted sharing for genuinely sensitive files." },
          { mistake: "Believing a shared link permanently locks in the permission level it had when first sent.", fix: "Permissions are checked fresh on every open — an owner can tighten, loosen, or fully revoke access at any time, and it takes effect on the very next attempt." },
          { mistake: "Thinking deleting the original file has no effect on links that were already shared.", fix: "Since a link points back to the one stored file rather than a separate delivered copy, deleting that file typically breaks every link pointing to it, immediately." },
        ]}
      />
      <MisconceptionCallout
        myth="Sending someone a file-sharing link is the same as giving them their own private copy of the file."
        reality={<p>A share link doesn&apos;t hand over a separate copy — it points back to one file sitting in the owner&apos;s cloud storage, re-verified against permissions every time it&apos;s opened. That&apos;s exactly why an owner can revoke access, set an expiration date, or change permissions after the fact, and why deleting the original file breaks every link pointing to it. The recipient never actually possessed an independent copy unless they explicitly downloaded one.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "For sensitive files, use sign-in-restricted sharing to specific accounts instead of 'anyone with the link,' since a link can be forwarded beyond your control.",
          "Set an expiration date on time-sensitive shared links so access closes automatically without you needing to remember to revoke it.",
          "If a shared link is no longer needed, revoke it explicitly rather than assuming it will simply be forgotten.",
          "Read Cloud Storage vs. Local Storage next to see the storage layer that every shared link is quietly pointing back into.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How do file-sharing links actually work?", answer: "A share link contains a unique token that a server uses to look up one specific stored file. Every time the link is opened, the server checks that token's current permissions before deciding whether to grant access — the link doesn't deliver a separate copy of the file itself." },
          { question: "Is 'anyone with the link' the same as private sharing?", answer: "No. Anyone possessing a valid link's token can access the file, including people it gets forwarded to without the owner's knowledge. Sign-in-restricted sharing to specific approved accounts is meaningfully more controlled." },
          { question: "Can I revoke a file-sharing link after sending it?", answer: "Yes, in most systems. Because permissions are checked fresh every time a link is opened rather than granted once, an owner can revoke or change a link's access at any point, and it takes effect on the next attempt to open it." },
          { question: "Does deleting a file break shared links to it?", answer: "Typically yes. A share link points back to one stored file rather than delivering an independent copy, so deleting the original file usually breaks every link that referenced it." },
          { question: "Do file-sharing links expire?", answer: "It depends on the settings the owner chooses. Many services let an owner set an expiration date on a link, after which the server automatically refuses access even to someone who still has the exact link saved." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
