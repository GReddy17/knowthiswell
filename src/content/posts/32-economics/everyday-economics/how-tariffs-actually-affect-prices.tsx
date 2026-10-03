import React from 'react';
import { PostFrontmatter, QuizBankItem } from '@/types/post';
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
  title: "How Tariffs Actually Affect Prices",
  category: "economics",
  order: 7,
  subtopic: "everyday-economics",
  tags: ["tariffs", "how tariffs work", "who pays tariffs", "tariff pass-through", "import prices", "trade policy", "consumer prices"],
  date: "2026-09-30",
  updated: "2026-09-30",
  youtubeShort: false, youtubeLong: false,
  seoScore: 82, seoScoredOn: "2026-10-01",
  lastReviewed: "2026-09-30",
  excerpt: "A tariff is a tax the importing company pays at the border. Studies of the 2018 U.S. tariffs found nearly all of it showed up in U.S. import prices, and domestic competitors raised prices too.",
  summary: "A tariff is a tax on imported goods, collected by the importing country's customs agency from the importer of record, which in the U.S. is usually a U.S. company. The foreign exporter doesn't write the check, though it can absorb some of the cost by cutting its price. How much of a tariff reaches consumers is called pass-through. Research on the 2018-2019 U.S. tariffs found pass-through to U.S. import prices was close to complete: Amiti, Redding and Weinstein (2019) estimated the tariffs cost U.S. consumers and importers about $3 billion a month in added taxes by the end of 2018, and Fajgelbaum and colleagues (2020) found the full cost fell on U.S. buyers. Retail prices rose by less than border prices in many categories because retailers absorbed part of the cost in their margins (Cavallo, Gopinath, Neiman and Tang, 2021). Tariffs also let domestic competitors raise prices: after 2018 washing-machine tariffs, Flaaen, Hortaçsu and Tintelnot found washer prices rose about 12%, and untariffed dryers rose by a similar dollar amount. How much a given tariff raises a given price depends on competition, substitutes, markups and exchange rates, and rates have changed repeatedly in 2025 and 2026.",
  sources: [
    { label: "U.S. Customs and Border Protection — Determining Duty Rates", url: "https://www.cbp.gov/trade/programs-administration/determining-duty-rates" },
    { label: "U.S. International Trade Commission — Harmonized Tariff Schedule", url: "https://hts.usitc.gov/" },
    { label: "Amiti, Redding & Weinstein (2019) — The Impact of the 2018 Tariffs on Prices and Welfare, Journal of Economic Perspectives", url: "https://www.aeaweb.org/articles?id=10.1257/jep.33.4.187" },
    { label: "Fajgelbaum, Goldberg, Kennedy & Khandelwal (2020) — The Return to Protectionism, Quarterly Journal of Economics", url: "https://doi.org/10.1093/qje/qjz036" },
    { label: "Cavallo, Gopinath, Neiman & Tang (2021) — Tariff Pass-Through at the Border and at the Store, American Economic Review: Insights", url: "https://doi.org/10.1257/aeri.20190536" },
    { label: "Flaaen, Hortaçsu & Tintelnot (2020) — The Production Relocation and Price Effects of US Trade Policy: The Case of Washing Machines, American Economic Review", url: "https://doi.org/10.1257/aer.20190611" },
  ],
  seeAlso: [
    "economics/what-supply-and-demand-actually-predicts",
    "economics/how-inflation-actually-erodes-purchasing-power",
    "economics/what-fiscal-policy-actually-means-vs-monetary-policy",
    "economics/what-gdp-actually-measures",
    "economics/what-minimum-wage-debates-actually-center-on",
  ],
  glossary: [
    { term: "Tariff", definition: "A tax on imported goods, collected by customs from the importer when the goods enter the country." },
    { term: "Ad valorem tariff", definition: "A tariff set as a percentage of the good's customs value, such as 25% of a $200 shipment." },
    { term: "Importer of record", definition: "The party legally responsible for bringing goods into a country and paying any duties owed, usually a domestic company." },
    { term: "Pass-through", definition: "The share of a tariff that shows up in the price paid by the buyer. Complete pass-through means the buyer's price rises by the full tariff." },
    { term: "Tariff incidence", definition: "Who ultimately bears the cost of a tariff: foreign exporters, importers, retailers or consumers, depending on how prices adjust." },
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

export const quiz: QuizBankItem[] = [
  {"question": "Who actually pays a U.S. tariff to U.S. Customs and Border Protection?", "difficulty": "easy", "options": [{"text": "The importer of record, usually a U.S. company", "correct": true, "explanation": "Customs collects the duty from whoever brings the goods in."}, {"text": "The foreign government", "correct": false, "explanation": "Foreign governments don't pay U.S. customs duties."}, {"text": "The foreign factory, directly", "correct": false, "explanation": "The exporter may cut its price, but it doesn't pay the duty to CBP."}, {"text": "The shopper at the register, as a separate line item", "correct": false, "explanation": "Shoppers pay indirectly, through higher prices, not a separate tariff charge."}]},
  {"question": "What does 'complete pass-through' of a tariff mean?", "difficulty": "easy", "options": [{"text": "The buyer's price rises by the full amount of the tariff", "correct": true, "explanation": "None of the tariff is absorbed by the exporter."}, {"text": "The exporter absorbs the whole tariff", "correct": false, "explanation": "That would be zero pass-through."}, {"text": "The tariff is refunded to consumers", "correct": false, "explanation": "Pass-through describes prices, not refunds."}, {"text": "The tariff applies to every product in the economy", "correct": false, "explanation": "Pass-through is about price effects, not coverage."}]},
  {"question": "What did research on the 2018 U.S. tariffs find about U.S. import prices?", "difficulty": "medium", "options": [{"text": "Pass-through was close to complete, so U.S. buyers bore nearly all the cost", "correct": true, "explanation": "Amiti, Redding and Weinstein, and Fajgelbaum and colleagues, both reached this conclusion."}, {"text": "Foreign exporters absorbed most of the cost", "correct": false, "explanation": "Studies found little price-cutting by exporters to the U.S. in 2018."}, {"text": "Prices fell because of extra competition", "correct": false, "explanation": "Import prices including the tariff rose."}, {"text": "There was no measurable effect", "correct": false, "explanation": "The effects were large and measurable."}]},
  {"question": "Why did retail prices rise less than border prices for many tariffed goods (Cavallo and colleagues, 2021)?", "difficulty": "hard", "options": [{"text": "Retailers absorbed part of the cost in their profit margins", "correct": true, "explanation": "Border prices rose almost fully; store prices rose less as margins shrank."}, {"text": "Customs refunded the tariff to retailers", "correct": false, "explanation": "There was no such general refund."}, {"text": "The tariffs were never collected", "correct": false, "explanation": "They were collected at the border."}, {"text": "Consumers stopped buying all imports", "correct": false, "explanation": "Demand shifted somewhat, but that doesn't explain the margin finding."}]},
  {"question": "After the 2018 U.S. washing-machine tariffs, what happened to dryer prices?", "difficulty": "medium", "options": [{"text": "They rose by a similar dollar amount, even though dryers weren't tariffed", "correct": true, "explanation": "Washers and dryers are often bought as a pair, so sellers raised both."}, {"text": "They fell to offset washer prices", "correct": false, "explanation": "Flaaen and colleagues found they rose."}, {"text": "They stayed exactly the same", "correct": false, "explanation": "Dryer prices rose by roughly the washer increase."}, {"text": "Dryers were banned", "correct": false, "explanation": "No ban was involved."}]},
  {"question": "A $200 imported item gets a 25% ad valorem tariff. What duty does the importer owe?", "difficulty": "easy", "options": [{"text": "$50", "correct": true, "explanation": "25% of the $200 customs value is $50."}, {"text": "$25", "correct": false, "explanation": "That confuses the rate with the dollar amount."}, {"text": "$250", "correct": false, "explanation": "$250 is the landed cost including the duty."}, {"text": "$5", "correct": false, "explanation": "That's 2.5%, not 25%."}]},
  {"question": "Why can a shelf price rise by more than the tariff itself?", "difficulty": "hard", "options": [{"text": "Retailers who price with a percentage markup apply it to the higher cost", "correct": true, "explanation": "A 40% markup on a cost that rose $50 adds $70 to the shelf price."}, {"text": "Customs charges the tariff twice", "correct": false, "explanation": "The duty is charged once at entry."}, {"text": "Tariffs are always over 100%", "correct": false, "explanation": "Most tariff rates are well below 100%."}, {"text": "Sales tax is waived on imports", "correct": false, "explanation": "That would lower prices, not raise them."}]},
  {"question": "Which factor can reduce how much of a tariff reaches buyers?", "difficulty": "medium", "options": [{"text": "The exporter's currency weakening against the buyer's currency", "correct": true, "explanation": "A weaker exporter currency makes the good cheaper in dollars, offsetting part of the tariff."}, {"text": "A higher tariff rate", "correct": false, "explanation": "A higher rate adds more cost to pass through."}, {"text": "Having no domestic substitutes", "correct": false, "explanation": "Fewer substitutes usually make it easier to pass costs on."}, {"text": "Strong demand that doesn't respond to price", "correct": false, "explanation": "Inelastic demand makes full pass-through easier."}]},
];

const h2 = "scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink";
const h3 = "scroll-mt-10 font-display text-xl font-bold text-ink mb-4";

export default function Post() {
  return (
    <>
      <h2 className={h2}>Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "A tariff is a tax on imports. In the U.S., customs collects it from the importer, usually a U.S. company, not from the foreign country.",
          "Studies of the 2018 U.S. tariffs found nearly the full tariff showed up in U.S. import prices.",
          "Store prices can rise by less than the tariff (retailers absorb some) or by more (percentage markups and domestic rivals raising prices).",
          "How much a tariff raises a given price depends on competition, substitutes, markups and exchange rates.",
        ]}
      />

      <h2 className={h2}>The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A tariff works like a toll on goods crossing the border. When a U.S. company imports a $200 vacuum cleaner with a 25% tariff, it pays U.S. Customs $50 before the vacuum can leave the port. The company now has $250 in that vacuum, and it has three choices: raise its price, accept a smaller profit, or push the foreign supplier to cut its price. In practice it&apos;s usually a mix. The common idea that &quot;the other country pays&quot; skips a step: the other country only bears the cost if its exporters cut their prices, and research on recent U.S. tariffs found they mostly didn&apos;t.</div>}
        detailed={<div className="prose-p">Most U.S. tariffs are <strong>ad valorem</strong>, a percentage of the customs value, and the rate for each product is set in the Harmonized Tariff Schedule maintained by the U.S. International Trade Commission. Customs and Border Protection collects the duty from the importer of record. Who ultimately bears it, the <strong>incidence</strong>, depends on how prices adjust, which comes down to <TermLink href="/economics/what-supply-and-demand-actually-predicts">supply and demand</TermLink> elasticities: if buyers have few alternatives, sellers can pass the cost on; if foreign exporters have few other markets, they may cut prices to keep sales. The evidence on the 2018-2019 U.S. tariffs is unusually clear. Amiti, Redding and Weinstein (2019) found close to complete pass-through into U.S. import prices and estimated the added tax cost at about $3 billion a month by late 2018. Fajgelbaum and colleagues (2020) also found full pass-through and estimated that, after counting tariff revenue and gains to protected producers, the net loss to U.S. real income was about $7.2 billion a year. Cavallo, Gopinath, Neiman and Tang (2021) added a twist: border prices rose almost one-for-one, but retail prices rose less, because retailers absorbed part of the cost in their margins, at least at first.</div>}
      />
      <FootnoteAside>Tariff rates on many goods changed repeatedly during 2025 and 2026, and researchers are still measuring the effects of the newest ones. The mechanics on this page apply to any tariff; for the rate on a specific product today, check the Harmonized Tariff Schedule.</FootnoteAside>

      <QuickCheck
        question="A U.S. retailer imports a $200 item with a 25% tariff. Who pays the $50 to U.S. Customs?"
        options={[
          { text: "The importing company", correct: true, explanation: "Correct. It may recover the cost through prices, but it writes the check." },
          { text: "The foreign government", correct: false, explanation: "Foreign governments don't pay U.S. customs duties." },
          { text: "The foreign factory", correct: false, explanation: "The factory may cut its price, but CBP collects from the importer." },
        ]}
      />

      <h2 className={h2}>Worked examples</h2>

      <h3 className={h3}>Example 1: The $200 vacuum (baseline case)</h3>
      <div className="prose-p">A retailer imports a vacuum for $200 and sells it with a 40% markup on cost: $280. A 25% tariff adds $50, so its cost becomes $250. If it keeps the same percentage markup, the shelf price becomes $350, a $70 increase on a $50 tariff. If it instead passes on exactly the tariff, the price is $330. If it absorbs half, the price is $305 and its profit per unit falls from $80 to $55. The same tariff can raise the shelf price by $25, $50 or $70 depending on how the seller prices, which is why &quot;a 25% tariff means prices go up 25%&quot; is too simple.</div>

      <h3 className={h3}>Example 2: When the exporter or the currency absorbs some (edge case)</h3>
      <div className="prose-p">Pass-through isn&apos;t always complete. If a foreign exporter has few other buyers, it may cut its price to keep the order: a $200 item might be re-quoted at $185, so a 25% tariff adds about $46 instead of $50. Exchange rates can do the same: if the exporter&apos;s currency weakens against the dollar, the item gets cheaper in dollars, offsetting part of the tariff. Cavallo and colleagues found something similar going the other way: when China put retaliatory tariffs on U.S. goods, U.S. exporters cut their prices somewhat to stay competitive. So incidence is shared when sellers have weaker bargaining power, but for the 2018 U.S. tariffs, the measured pass-through to U.S. import prices was close to full.</div>

      <h3 className={h3}>Example 3: Washing machines and the dryer surprise (applied case)</h3>
      <div className="prose-p">In early 2018 the U.S. put tariffs on imported washing machines. Flaaen, Hortaçsu and Tintelnot (2020) found washer prices rose about 12%, roughly $86 per unit. Domestic washer makers, facing less competition, raised their prices too. And dryers, which weren&apos;t tariffed, rose by a similar dollar amount, because people often buy them as a matched pair and sellers priced them together. They estimated the tariffs cost U.S. consumers about $1.5 billion a year and created around 1,800 jobs, or roughly $815,000 per job. The applied lesson: a tariff&apos;s price effect spreads beyond the tariffed import, to domestic substitutes and to complementary products.</div>

      <QuickCheck
        question="Why did U.S. dryer prices rise after the 2018 washing-machine tariffs?"
        options={[
          { text: "Dryers are often bought with washers, so sellers raised both", correct: true, explanation: "Correct. Complementary products can move together even without their own tariff." },
          { text: "Dryers had their own tariff", correct: false, explanation: "Dryers weren't covered by those tariffs." },
          { text: "Dryer demand collapsed", correct: false, explanation: "Falling demand would push prices down, not up." },
        ]}
      />

      <h2 className={h2}>How it works (visual)</h2>
      <DiagramBlock
        title="How a tariff travels from the border to the shelf"
        type="flow"
        svgSrc="/diagrams/economics-how-tariffs-actually-affect-prices-flow.svg"
        altText="A flow diagram showing a 200 dollar imported item with a 25 percent tariff. The importer pays 50 dollars to customs, raising its cost to 250 dollars. The shelf price then depends on the retailer's choice: absorbing part of the cost, passing on exactly 50 dollars, or applying a percentage markup that adds 70 dollars. Side notes show that exporters or currency moves can absorb part of the tariff, and domestic competitors and paired products may raise prices too."
      />
      <p>The tariff enters at one point, the border, but the price effect depends on three later choices: how much the exporter absorbs, how the retailer marks up, and whether competitors follow prices up.</p>

      <h2 className={h2}>Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Saying the exporting country pays the tariff.", fix: "Customs collects it from the importer. The exporter bears part only if it cuts its price." },
          { mistake: "Assuming a 25% tariff raises shelf prices exactly 25%.", fix: "Account for markups, retailer margins, exporter price cuts and how big a share of the final price the import is." },
          { mistake: "Ignoring domestic products.", fix: "Domestic competitors often raise prices under the tariff's cover, as with U.S. washers in 2018." },
          { mistake: "Counting tariff revenue as pure gain.", fix: "Revenue is a transfer from domestic buyers; economists net it against higher prices and lost trade." },
          { mistake: "Expecting price effects to show up instantly.", fix: "Inventory, contracts and stockpiling mean effects can take months to reach stores." },
        ]}
      />
      <MisconceptionCallout
        myth="Tariffs are paid by foreign countries, so they don't affect domestic prices."
        reality={<p>Tariffs are paid by the importer, and the best evidence on the 2018-2019 U.S. tariffs found nearly all of the cost showed up in U.S. import prices. Whether it then reached consumers depended on retailers, but foreign exporters absorbed little of it.</p>}
      />

      <h2 className={h2}>What to do next</h2>
      <ActionChecklist
        items={[
          "When you hear a tariff rate, ask what share of the final price the imported part is.",
          "Look up a product's current rate in the Harmonized Tariff Schedule (hts.usitc.gov).",
          "Check whether domestic substitutes exist; their prices may rise too.",
          "Compare a tariffed item's price over several months, not days, since pass-through takes time.",
          "Read tariff headlines alongside the inflation data to see whether goods prices are moving.",
        ]}
      />

      <h2 className={h2}>FAQ</h2>
      <FAQBlock
        items={[
          { question: "Who pays for tariffs, the importer or the exporter?", answer: "The importer pays the tariff to customs. The exporter bears part of the cost only if it lowers its price. For the 2018 U.S. tariffs, studies found exporters absorbed very little." },
          { question: "Do tariffs cause inflation?", answer: "Tariffs raise the prices of affected goods, which can lift measured inflation for a while. Whether that becomes ongoing inflation depends on wider conditions, such as demand and monetary policy, and economists debate the size of the effect." },
          { question: "How much do tariffs raise prices?", answer: "It varies by product. Pass-through to U.S. import prices was close to complete in 2018-2019, but retail increases were often smaller because retailers absorbed some cost. Washers rose about 12% after their 2018 tariff." },
          { question: "Do tariffs protect domestic jobs?", answer: "They can protect some jobs in the protected industry, but at a cost. The 2018 washer tariffs created about 1,800 jobs at an estimated consumer cost of roughly $815,000 per job." },
        ]}
      />

      <h2 className={h2}>Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className={h2}>See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
