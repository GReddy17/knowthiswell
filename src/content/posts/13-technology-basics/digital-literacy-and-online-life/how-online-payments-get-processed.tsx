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
  title: "How Online Payments Actually Get Processed",
  category: "technology-basics",
  order: 98,
  subtopic: "digital-literacy-and-online-life",
  tags: ["payment processing", "card authorization", "PCI DSS", "payment gateway", "digital literacy"],
  date: "2026-08-28",
  updated: "2026-08-28",
  lastReviewed: "2026-08-28",
  excerpt: "An online payment travels through a chain of checkable approvals — merchant, processor, card network, issuing bank — with the merchant never actually deciding whether it goes through.",
  summary: "Processing an online payment is a trust chain of verifications passed between a merchant, a payment processor, a card network, and the customer's bank, where each link only ever relays and checks the previous link's claim rather than approving anything on its own authority.",
  sources: [
    { label: "PCI Security Standards Council — About PCI DSS", url: "https://www.pcisecuritystandards.org/standards/pci-dss/" },
    { label: "FTC — Lost or Stolen Credit, ATM, and Debit Cards", url: "https://consumer.ftc.gov/articles/lost-or-stolen-credit-atm-and-debit-cards" },
    { label: "W3C — Payment Request API", url: "https://www.w3.org/TR/payment-request/" },
  ],
  seeAlso: [
    "technology-basics/how-streaming-subscriptions-actually-bill-you",
    "technology-basics/what-makes-a-website-down-vs-slow",
    "technology-basics/what-a-digital-footprint-actually-means",
  ],
  glossary: [
    { term: "Payment gateway", definition: "The service that captures and encrypts a customer's payment details at checkout and forwards them to a payment processor for authorization." },
    { term: "Payment processor", definition: "A company that routes an authorization request from a merchant to the correct card network and relays the resulting approval or decline back to the merchant." },
    { term: "Card network", definition: "The system, such as a major card brand's network, that connects a payment processor to the correct issuing bank and enforces shared rules between them." },
    { term: "Issuing bank", definition: "The bank that issued the customer's card and holds their account, responsible for actually approving or declining a charge against that account." },
    { term: "Tokenization", definition: "Replacing a card's actual number with a substitute value (a token) for storage and transmission, so the real card number isn't repeatedly exposed across the payment chain." },
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
          "An online payment passes through a chain of separate parties — merchant, payment processor, card network, issuing bank — and only the issuing bank at the far end actually decides whether to approve or decline it.",
          "The merchant's website never sees your full card details in the clear for longer than the initial capture; that data is encrypted and typically tokenized so the real number isn't repeatedly exposed as it moves down the chain.",
          "A 'declined' payment can mean several different things happening at different links in the chain — insufficient funds, a fraud flag, or an expired card each produce the same visible message but different underlying causes.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">Think of asking a coworker to check whether you can borrow the company car, and that coworker has to check with their manager, who has to check with the person who actually owns the car. Nobody in the middle can just say yes on their own authority &mdash; the answer has to come from the actual owner and travel back through the same chain of people. An online payment works the same way: the checkout page can&apos;t approve your card itself. It passes the request down a chain until it reaches your actual bank, and the approval or decline travels back through that same chain.</div>}
        detailed={<div className="prose-p">This is a <strong>trust chain / verification</strong> problem. When a card number is entered at checkout, a <TermLink href="/technology-basics/how-online-payments-get-processed">payment gateway</TermLink> encrypts it and often replaces the real number with a substitute value through <TermLink href="/technology-basics/how-online-payments-get-processed">tokenization</TermLink>, so the merchant&apos;s own systems rarely store or handle the raw card number at all. That encrypted request goes to a <TermLink href="/technology-basics/how-online-payments-get-processed">payment processor</TermLink>, which routes it to the correct <TermLink href="/technology-basics/how-online-payments-get-processed">card network</TermLink> based on the card&apos;s number range, and the network directs it to the customer&apos;s specific <TermLink href="/technology-basics/how-online-payments-get-processed">issuing bank</TermLink> &mdash; the only party in the chain that actually knows the account balance and can make a real approve/decline decision. That decision then relays back through the same links in reverse. The edge case worth knowing: a decline doesn&apos;t reveal its specific cause to the merchant in most flows &mdash; a generic &quot;declined&quot; response can hide anything from insufficient funds to a bank&apos;s automated fraud filter, because the issuing bank isn&apos;t obligated to disclose the specific reason back down the chain.</div>}
      />
      <FootnoteAside>The security standard that governs how merchants and processors must handle card data during this chain, PCI DSS, is maintained by the PCI Security Standards Council, an industry body founded by the major card networks rather than a government regulator — it sets the technical requirements merchants must meet to accept card payments at all.</FootnoteAside>

      <p>
        Every behavior a shopper notices &mdash; a checkout that finishes in a couple of seconds, a decline with no clear reason given, or a receipt that shows only the last four digits of a card &mdash; comes from this same structure: a chain of separate parties, each only able to relay and verify, with the real decision made at just one link.
      </p>

      <QuickCheck
        question="Why can't the checkout page on a merchant's website approve a card payment by itself?"
        options={[
          { text: "Because only the customer's issuing bank actually knows the account balance and has the authority to approve or decline a charge against it", correct: true, explanation: "Correct. The merchant, gateway, processor, and card network all relay and route the request — the actual approve/decline decision can only be made by the bank that holds the customer's account." },
          { text: "Because merchants are legally forbidden from ever seeing a card number", correct: false, explanation: "Merchants can be authorized to handle card data under PCI DSS requirements — the reason they can't approve payments themselves is that they don't hold the account or know its balance, not a blanket prohibition on seeing card numbers." },
          { text: "Because card payments require a manual phone call to a bank employee every time", correct: false, explanation: "The entire authorization chain is automated end to end in normal online checkout — no manual phone call is involved." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: A normal approved checkout (baseline case)</h3>
      <div className="prose-p">
        A shopper enters their card details and clicks pay. The payment gateway encrypts the details and passes them to a payment processor, which forwards the request through the correct card network to the shopper&apos;s issuing bank. The bank checks the account, confirms sufficient funds and no fraud flags, and sends back an approval. That approval relays back through the network and processor to the merchant&apos;s checkout page, which then shows &quot;payment successful.&quot; The entire round trip, across four or five separate systems, typically completes in one or two seconds.
      </div>
      <QuickCheck
        question="In a normal successful online payment, which party actually makes the decision to approve the charge?"
        options={[
          { text: "The customer's issuing bank, which checks the account and sends the approval back through the chain", correct: true, explanation: "Correct. The issuing bank is the only party that can actually verify account balance and account status, making it the sole decision-maker in the chain." },
          { text: "The merchant's own checkout page software", correct: false, explanation: "The merchant's checkout page only displays the result — it has no ability to independently approve a charge against a customer's bank account." },
          { text: "The payment gateway that first captured the card details", correct: false, explanation: "The gateway's role is to capture and encrypt the details for transmission — it routes the request onward rather than making the approval decision itself." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: A decline with no visible reason given (edge case / variation)</h3>
      <div className="prose-p">
        A shopper&apos;s card is declined at checkout with only a generic message like &quot;payment could not be processed.&quot; The actual cause could be several very different things happening at the issuing bank&apos;s end: insufficient funds, an automated fraud filter flagging the transaction as unusual, an expired card, or a temporary hold. The merchant&apos;s checkout page receives only a decline code, not a detailed explanation, because the issuing bank isn&apos;t required to disclose specific account information back down a chain of parties that don&apos;t need to know it.
      </div>
      <QuickCheck
        question="Why does a declined online payment often show only a generic message instead of the specific reason?"
        options={[
          { text: "Because the issuing bank isn't obligated to disclose the specific reason for a decline back through the chain to the merchant", correct: true, explanation: "Correct. A generic decline code can represent multiple very different underlying causes — the bank generally doesn't reveal specific account details to parties further down the chain." },
          { text: "Because declines are always caused by a system outage at the payment processor", correct: false, explanation: "A decline is a decision made at the issuing bank's end, not typically evidence of an outage at the processor — the two are different kinds of failures." },
          { text: "Because merchants intentionally hide the reason to encourage repeat purchase attempts", correct: false, explanation: "The vague messaging isn't a merchant choice to obscure the reason for business purposes — it reflects that the merchant genuinely doesn't receive detailed account information from the bank." },
        ]}
      />

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: Why a receipt shows a tokenized card number, not the real one (real-world / applied case)</h3>
      <p>
        A customer checks a saved payment method on a merchant&apos;s site and sees only the last four digits alongside a card type, rather than the full number. Behind that display, the merchant&apos;s systems are very likely storing a token &mdash; a substitute value generated during <TermLink href="/technology-basics/how-online-payments-get-processed">tokenization</TermLink> &mdash; rather than the real card number at all. When that saved method is used again, the merchant sends the token, and the payment processor (which holds the mapping between the token and the real card) is the one that translates it back for the authorization request. This limits how much of the payment chain ever handles the actual card number directly, which is central to what PCI DSS requirements are designed to reduce.
      </p>
      <QuickCheck
        question="When a merchant's site shows a saved card as only the last four digits, what does that suggest about how the merchant is storing that payment method?"
        options={[
          { text: "The merchant is likely storing a token representing the card rather than the full card number itself", correct: true, explanation: "Correct. Tokenization lets a merchant reference a saved payment method for future use without storing or repeatedly handling the actual card number." },
          { text: "The merchant has simply chosen not to display the rest of the number, even though it stores the full number in plain text", correct: false, explanation: "Storing the full card number in plain text is exactly what tokenization and PCI DSS requirements are designed to avoid — the masked display generally reflects a token, not a hidden full number." },
          { text: "The card network deleted the rest of the number automatically after the first use", correct: false, explanation: "Card networks don't selectively delete digits from a number — the masked display reflects how the merchant is storing a substitute token, not partial deletion by the network." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="The card payment authorization chain"
        type="flow"
        svgSrc="/diagrams/technology-basics-how-online-payments-get-processed-authorization-chain.svg"
        altText="A sequence diagram showing a card entered at a merchant's checkout, encrypted and sent to a payment processor, forwarded through a card network to the customer's issuing bank, which approves or declines the charge, with that response relayed back through the same chain to the merchant."
      />
      <p>
        Follow the arrows in both directions: the request travels one way to reach the only party that can actually decide, and the decision travels back the same path in reverse — nothing in the middle makes an independent call.
      </p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Assuming a merchant's website decides whether a payment is approved or declined.", fix: "Recognize the merchant only relays the request and displays the result — the actual decision is made by the customer's issuing bank, several links down the chain." },
          { mistake: "Treating every decline as the same kind of problem (usually assumed to be insufficient funds).", fix: "Remember a generic decline can hide several different causes — an expired card, a fraud flag, or a temporary hold can all produce an identical-looking decline message." },
          { mistake: "Believing a saved card number on a merchant's site means the merchant is storing your full card number.", fix: "Understand that a masked, last-four-digits display commonly reflects a stored token, not the actual card number, precisely because handling less real card data reduces both risk and compliance burden." },
        ]}
      />
      <MisconceptionCallout
        myth="Online payments are approved instantly by the website you're buying from, based on your entered card details alone."
        reality={<p>A checkout page has no authority to approve a payment on its own. The request is relayed through a <TermLink href="/technology-basics/how-online-payments-get-processed">payment processor</TermLink> and a <TermLink href="/technology-basics/how-online-payments-get-processed">card network</TermLink> to the customer&apos;s actual <TermLink href="/technology-basics/how-online-payments-get-processed">issuing bank</TermLink>, which is the only party able to check the account and make a real decision. The &quot;instant&quot; feeling comes from how fast that multi-party round trip completes &mdash; typically a second or two &mdash; not from the merchant deciding anything itself.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "If a payment declines with no clear reason, contact your card's issuing bank directly rather than assuming the merchant's site is at fault — the bank is the party that actually made the decision.",
          "Look for a masked card display (like last-four digits) as a reasonable sign that a merchant is using tokenization rather than storing your full card number.",
          "Check that a checkout page uses an encrypted connection before entering card details — that encryption is what protects the first leg of the chain, from your browser to the payment gateway.",
          "Read How Streaming Subscriptions Actually Bill You next to see how this same authorization chain gets reused for every automatic recurring charge, not just one-time purchases.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "How does an online payment actually get approved or declined?", answer: "The request travels from the merchant through a payment gateway, a payment processor, and a card network to the customer's issuing bank, which is the only party that checks the account and makes the actual approve or decline decision. That result then relays back through the same chain to the merchant." },
          { question: "Does a merchant's website store my full credit card number?", answer: "Often no. Many merchants use tokenization, storing a substitute value instead of the real card number, which is why a saved payment method commonly displays only the last four digits rather than the full number." },
          { question: "Why was my card declined with no explanation given?", answer: "The issuing bank isn't obligated to disclose the specific reason for a decline back through the payment chain, so a generic decline message can represent several different underlying causes — insufficient funds, a fraud flag, or an expired card among them." },
          { question: "What is PCI DSS and why does it matter for online payments?", answer: "PCI DSS is a security standard maintained by the PCI Security Standards Council that sets technical requirements for how merchants and processors must handle card data, aimed at reducing how much of the payment chain ever has to touch raw card numbers." },
          { question: "How long does it take for an online card payment to be approved?", answer: "The full round trip through the payment gateway, processor, card network, and issuing bank typically completes in about one to two seconds, even though it involves several separate systems relaying the request and response." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
