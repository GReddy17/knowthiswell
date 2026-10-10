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
  title: "What Digital Etiquette Actually Means in Group Chats",
  category: "life-skills-etiquette",
  order: 10,
  subtopic: "everyday-communication",
  tags: ["group chat etiquette", "digital etiquette", "texting etiquette", "is it rude to leave a group chat", "diffusion of responsibility", "tone in text messages", "work chat etiquette"],
  date: "2026-10-08",
  updated: "2026-10-08",
  seoScore: 83, seoScoredOn: "2026-10-10",
  youtubeShort: false, youtubeLong: false,
  lastReviewed: "2026-10-08",
  excerpt: "Group chat etiquette exists because text loses tone and every message lands on many phones at once. Here's what the norms actually protect and how to follow them.",
  summary: "Digital etiquette in group chats is a set of norms that solve three problems specific to the medium. First, text strips out tone of voice and facial expression, and research by Kruger and colleagues (2005) found people greatly overestimate how well their tone comes across in writing. Second, every message notifies everyone, so the cost of a message is multiplied by the number of members. Third, a question asked to a group often goes unanswered because each member assumes someone else will reply, the diffusion of responsibility first shown by Darley and Latane in 1968. Good group-chat etiquette follows from those mechanisms: keep messages relevant to the whole group, take one-on-one conversations to a direct message, name a person when you need an answer, ask before adding people or sharing screenshots, respect time zones and quiet hours, and leave or mute quietly when a group no longer fits. Norms differ between family, friend and work chats and across cultures, so the specific rules matter less than the reasons behind them.",
  sources: [
    { label: "Kruger, Epley, Parker & Ng (2005) — Egocentrism over e-mail: Can we communicate as well as we think?, Journal of Personality and Social Psychology", url: "https://doi.org/10.1037/0022-3514.89.6.925" },
    { label: "Darley & Latane (1968) — Bystander intervention in emergencies: Diffusion of responsibility, Journal of Personality and Social Psychology", url: "https://doi.org/10.1037/h0025589" },
    { label: "Gunraj, Drumm-Hewitt, Dashow, Upadhyay & Klin (2016) — Texting insincerely: The role of the period in text messaging, Computers in Human Behavior", url: "https://doi.org/10.1016/j.chb.2015.11.003" },
    { label: "The Emily Post Institute — etiquette advice and guidance", url: "https://emilypost.com/advice" },
  ],
  seeAlso: [
    "life-skills-etiquette/what-professional-email-etiquette-actually-requires",
    "life-skills-etiquette/how-to-actually-set-boundaries-without-guilt",
    "life-skills-etiquette/how-to-actually-disagree-without-being-disagreeable",
    "technology-basics/how-group-chats-sync-across-devices",
    "technology-basics/why-some-messages-say-delivered-but-not-read",
  ],
  glossary: [
    { term: "Diffusion of responsibility", definition: "The tendency for each person in a group to feel less personally responsible for acting, because the responsibility seems shared. It's why a question to a whole group often gets no reply." },
    { term: "Egocentrism in communication", definition: "Assuming others will read your message the way you meant it, because you can hear your own tone in your head even though the reader can't." },
    { term: "Side conversation", definition: "An exchange between two or three members that doesn't concern the rest of the group. In chats it's better moved to a direct message." },
    { term: "Mute", definition: "A chat setting that silences notifications from a group without leaving it or notifying anyone." },
    { term: "Quiet hours", definition: "The times, usually late night and early morning, when a group agrees, formally or informally, not to post non-urgent messages." },
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
  {"question": "In Kruger and colleagues' 2005 study, how well did senders expect readers to detect sarcasm or seriousness in their emails, versus how well readers actually did?", "difficulty": "medium", "options": [{"text": "Senders expected about 78% accuracy; readers managed about 56%, near chance", "correct": true, "explanation": "People overestimate how well their tone survives in text, because they hear it in their own heads."}, {"text": "Senders expected 50%; readers got 95%", "correct": false, "explanation": "The gap ran the other way: senders were overconfident."}, {"text": "Both were about 100%", "correct": false, "explanation": "Readers were close to coin-flip accuracy, far from perfect."}]},
  {"question": "Why does a question asked to a 20-person group chat often get no reply?", "difficulty": "easy", "options": [{"text": "Each member assumes someone else will answer, so responsibility is diffused", "correct": true, "explanation": "Darley and Latane showed in 1968 that people are less likely to act when others are present who could act instead."}, {"text": "Group chats deliver messages to only some members", "correct": false, "explanation": "Messages reach everyone; the problem is who feels responsible for replying."}, {"text": "People in groups never read messages", "correct": false, "explanation": "Most read them; they just don't feel it's their job to answer."}]},
  {"question": "What's the simplest fix when you need an answer from a group chat?", "difficulty": "easy", "options": [{"text": "Name or @mention the person who should answer", "correct": true, "explanation": "Naming one person removes the diffusion of responsibility by making it clearly their job."}, {"text": "Send the same question five times", "correct": false, "explanation": "Repeating spams everyone and still doesn't assign the task to anyone."}, {"text": "Write it in all capitals", "correct": false, "explanation": "Capitals read as shouting and don't solve who should reply."}]},
  {"question": "Two members start a long back-and-forth about their own weekend plans in a 15-person group. What's the etiquette move?", "difficulty": "easy", "options": [{"text": "Move the conversation to a direct message", "correct": true, "explanation": "Each message notifies 13 people it doesn't concern, so side conversations belong in a DM."}, {"text": "Keep going; more messages make the group feel active", "correct": false, "explanation": "Irrelevant notifications are what make people mute or leave groups."}, {"text": "Leave the group so you can't see it", "correct": false, "explanation": "There's no need to leave; the two people chatting can simply move to a DM."}]},
  {"question": "What did Gunraj and colleagues (2016) find about ending a short text reply with a period?", "difficulty": "medium", "options": [{"text": "Replies ending with a period were rated as less sincere than the same replies without one", "correct": true, "explanation": "In texting, a period on a short reply can read as curt, even though it's grammatically correct."}, {"text": "Periods made messages seem friendlier", "correct": false, "explanation": "The effect ran the other way for short text replies."}, {"text": "Punctuation had no effect at all", "correct": false, "explanation": "The study found a measurable effect, though only in text messages, not handwritten notes."}]},
  {"question": "Why is adding someone to a group chat without asking often considered poor etiquette?", "difficulty": "medium", "options": [{"text": "It shares their phone number with everyone and commits their attention without consent", "correct": true, "explanation": "In many apps, every member can see a new member's number, and the new member now gets every notification."}, {"text": "Group chats have a two-person limit", "correct": false, "explanation": "Group chats are built for many members; the issue is consent and privacy."}, {"text": "It automatically deletes their other chats", "correct": false, "explanation": "Adding someone doesn't affect their other conversations."}]},
  {"question": "A group spans London and Los Angeles. A London member wants to post non-urgent photos at 8 a.m. London time. What time is it in Los Angeles for most of the year?", "difficulty": "hard", "options": [{"text": "Around midnight", "correct": true, "explanation": "Los Angeles is usually 8 hours behind London, so 8 a.m. there is about midnight in LA. Non-urgent posts can wait, or members can mute overnight."}, {"text": "Around 4 p.m. the same day", "correct": false, "explanation": "That adds the gap instead of subtracting it. LA is behind London, not ahead."}, {"text": "Also 8 a.m.", "correct": false, "explanation": "The two cities are about 8 hours apart for most of the year."}]},
  {"question": "Which is generally the least disruptive way to step back from a group chat you no longer want notifications from?", "difficulty": "medium", "options": [{"text": "Mute it, or leave with a short friendly note if leaving would otherwise be noticed", "correct": true, "explanation": "Muting is invisible to others, and a brief note heads off the 'did I upset them?' worry if you leave."}, {"text": "Post an angry message explaining everything wrong with the group, then leave", "correct": false, "explanation": "That turns a quiet exit into a public conflict."}, {"text": "Report the group as spam", "correct": false, "explanation": "Reporting is for abuse or real spam, not a group you've simply outgrown."}]},
  {"question": "Why do the norms for a work chat usually differ from those for a close friends' chat?", "difficulty": "hard", "options": [{"text": "The purpose and relationships differ, so expectations about tone, timing and off-topic content differ", "correct": true, "explanation": "Etiquette serves the group's purpose; a work channel exists to get tasks done, a friends' chat to stay connected."}, {"text": "Work chats use a different technology that blocks jokes", "correct": false, "explanation": "The app can be identical; the difference is social, not technical."}, {"text": "There is no difference; the same rules apply everywhere", "correct": false, "explanation": "Context changes what's appropriate, which is why the reasons matter more than any fixed rule list."}]},
  {"question": "Before sharing a screenshot of a group chat outside the group, what's the etiquette norm?", "difficulty": "medium", "options": [{"text": "Ask, or at least remove names and anything personal, because members wrote for that audience only", "correct": true, "explanation": "Members shared those messages with a specific group; moving them elsewhere changes the audience without their say."}, {"text": "Anything in a group chat is public, so share freely", "correct": false, "explanation": "A group chat is a limited audience, not a public post."}, {"text": "Only share it if it's funny", "correct": false, "explanation": "Funny or not, it was written for a specific group."}]},
];

export default function Post() {
  return (
    <>
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Key Takeaways</h2>
      <KeyTakeaways
        points={[
          "Group chat etiquette isn't arbitrary politeness. It answers three real problems: text loses tone, every message buzzes every phone, and group questions go unanswered because everyone assumes someone else will reply.",
          "People overestimate how well their tone comes across in writing. In one study, senders expected about 78% of readers to catch their sarcasm or seriousness; readers managed about 56%, close to a coin flip.",
          "The practical rules follow from those mechanisms: post what concerns everyone, move side conversations to a DM, name the person you need, ask before adding people or sharing screenshots, and mind the clock.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">The concept</h2>
      <ModeToggle
        labels={{ plain: "Plain", detailed: "Detailed" }}
        plain={<div className="prose-p">A group chat is like talking in a room where everyone can hear you, but nobody can see your face, and every time you speak, everyone&apos;s pocket buzzes. That&apos;s why the manners are different from a one-on-one text. A joke that works face to face can land as an insult, because the reader can&apos;t hear you laughing. A chat between two people about their own plans makes ten other phones light up for nothing. And a question like &quot;can someone send the address?&quot; can sit there for hours, because each person figures somebody else will answer. Good group chat etiquette is simply a set of habits that fix those problems: think about whether the whole group needs this message, be clearer than feels necessary, name a person when you need something, and remember that people read the chat on their own schedule, in their own time zone. The details differ between a family chat, a friends&apos; chat and a work channel, but the reasons are the same.</div>}
        detailed={<div className="prose-p">Three mechanisms drive almost every group-chat norm. <strong>Lost tone:</strong> Kruger, Epley, Parker and Ng (2005) had people write statements meant to be sarcastic or serious. Senders predicted about 78% of readers would identify the tone; readers got it right about 56% of the time, barely above the 50% guess rate. The authors trace the gap to <strong>egocentrism</strong>: writers hear their own tone and assume readers do too. Even punctuation carries tone in this medium: Gunraj and colleagues (2016) found one-word text replies ending in a period were rated less sincere. <strong>Multiplied cost:</strong> a message to a 12-person chat creates 11 notifications, so a low-value message carries a group-sized cost. <strong>Diffusion of responsibility:</strong> Darley and Latane&apos;s 1968 experiments found people were far slower to help when they believed others could also respond. Unaddressed group questions are a mild everyday version: everyone can answer, so no one feels they must. The edge case is the work channel, where silence can be costly, so many teams add explicit norms such as threads, reaction emoji to show &quot;seen,&quot; and named owners. Cultural variation is real too: forwarded greetings and good-morning images are normal in many family chats and unwelcome in many work chats.</div>}
      />
      <FootnoteAside>The 78% versus 56% figures come from the sarcasm-and-seriousness tasks in Kruger and colleagues&apos; email study. The gap appeared even between close friends, which is why &quot;they know me, they&apos;ll get it&quot; is a weaker defence than it feels.</FootnoteAside>

      <p>For why chats look identical on every device you own, see <TermLink href="/technology-basics/how-group-chats-sync-across-devices">how group chats sync across devices</TermLink>, and for the read-receipt question, <TermLink href="/technology-basics/why-some-messages-say-delivered-but-not-read">why some messages say delivered but not read</TermLink>. The longer-form version of these norms for work is in <TermLink href="/life-skills-etiquette/what-professional-email-etiquette-actually-requires">professional email etiquette</TermLink>.</p>

      <QuickCheck
        question="You post 'Can someone confirm the restaurant booking?' in a 14-person family chat. Three hours later, no one has replied, though 12 people have read it. What's the most likely cause?"
        options={[
          { text: "Diffusion of responsibility: everyone assumed someone else would confirm", correct: true, explanation: "Correct. With many possible responders, each feels less responsible. Asking a named person, such as 'Sam, can you confirm?', fixes it." },
          { text: "The message didn't send properly", correct: false, explanation: "Twelve read receipts show it arrived. The issue is who felt it was their job to answer." },
          { text: "Everyone is annoyed with you", correct: false, explanation: "That's possible but unlikely; a well-documented group effect explains it without anyone being upset." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Worked examples</h2>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 1: The notification math of a side chat (baseline case)</h3>
      <div className="prose-p">A 12-person friends&apos; group is planning a birthday dinner. Two members, Ana and Leo, start chatting about a TV show and trade 20 messages in half an hour. Each message notifies the other 10 members who aren&apos;t part of it, so that&apos;s 20 × 10 = 200 unwanted buzzes, plus the dinner details now buried under the thread. Nobody did anything rude on purpose; the cost just scaled with the group. The etiquette fix is small: &quot;Let&apos;s take this to DM,&quot; and the group stays useful. It&apos;s the same reason people mute busy chats, and once a chat is muted, the important message about the dinner time gets missed too.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 2: The joke that didn&apos;t land (edge case)</h3>
      <div className="prose-p">In a work channel, a manager replies to a late report with &quot;Great timing as always.&quot; She meant it warmly; the report was early by her standards. The writer read it as sarcasm and spent the evening worried. Kruger&apos;s research predicts exactly this: the sender heard her own friendly tone, but readers detect intended tone at little better than chance. The fix isn&apos;t to never joke. It&apos;s to remove ambiguity where the stakes are higher: &quot;Thanks for getting this in early, it really helps.&quot; In close friend chats, emoji and shared history do some of the work that tone of voice does in person. In work chats with mixed relationships, plain wording does it better.</div>

      <h3 className="scroll-mt-10 font-display text-xl font-bold text-ink mb-4">Example 3: A chat across time zones (applied case)</h3>
      <div className="prose-p">A family chat has members in Mumbai, London and Los Angeles. For most of the year, Mumbai is about 4.5 to 5.5 hours ahead of London and London about 8 hours ahead of Los Angeles, a spread of roughly 12.5 to 13.5 hours. A 9 p.m. message from Mumbai lands around 3:30 to 4:30 p.m. in London but around 7:30 to 8:30 a.m. in Los Angeles; a 9 a.m. post from LA hits Mumbai around 9:30 to 10:30 p.m. No time works for everyone, so the practical norms are: don&apos;t send anything urgent-sounding that isn&apos;t urgent, let people mute overnight without taking offence, and phone, rather than text, if something genuinely can&apos;t wait. Etiquette here is less about the rule and more about not making anyone feel they must answer at midnight.</div>

      <QuickCheck
        question="A colleague replies 'Fine.' to your proposal in the team chat. Based on texting research, what should you keep in mind before reacting?"
        options={[
          { text: "Short replies with a period tend to read as curt, but tone in text is often misread, so a quick clarifying question is safer than assuming", correct: true, explanation: "Correct. Gunraj et al. found periods on short replies seem less sincere, and Kruger et al. found readers misjudge tone often. Ask before you assume." },
          { text: "A period always means the person is angry", correct: false, explanation: "Many people punctuate every message out of habit. The research shows how it tends to be read, not what the writer felt." },
          { text: "Text tone is always clear, so take it at face value", correct: false, explanation: "Readers identified intended tone only about 56% of the time in Kruger's study." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">How it works (visual)</h2>
      <DiagramBlock
        title="Before you hit send in a group chat"
        type="flow"
        svgSrc="/diagrams/life-skills-etiquette-what-digital-etiquette-actually-means-in-group-chats-flow.svg"
        altText="A decision flow for posting in a group chat: Does everyone need this? If no, send a direct message. If yes, could the tone be misread? If yes, add plain wording. Do you need an answer? If yes, name the person. Is it late for anyone? If yes and it isn't urgent, wait or schedule it. Then send. A side panel lists the three mechanisms: text loses tone, every message notifies everyone, and group questions diffuse responsibility."
      />
      <p>Each question in the flow maps to one of the three mechanisms. Most etiquette slips in group chats come from skipping the first box: posting something that only one or two people needed to see.</p>

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Common mistakes</h2>
      <MistakeList
        items={[
          { mistake: "Asking the whole group a question and waiting for 'someone' to answer.", fix: "Name the person, or ask for a specific action: 'Sam, can you confirm by 6?' Diffusion of responsibility disappears when one person owns it." },
          { mistake: "Adding people to a group without asking.", fix: "Check first. Adding someone shares their number with every member and commits their attention to every notification." },
          { mistake: "Relying on sarcasm or dry humour with people who don't know you well.", fix: "Use plain wording or a clarifying emoji when stakes are higher. Readers miss intended tone far more often than writers expect." },
          { mistake: "Screenshotting the chat to people outside it.", fix: "Ask first, or crop names and personal details. Members wrote for that group, not for a wider audience." },
          { mistake: "Leaving a group with a dramatic farewell or an unexplained exit after an argument.", fix: "Mute quietly, or leave with a brief, friendly line such as 'Stepping back from chats for a bit, message me any time.'" },
        ]}
      />
      <MisconceptionCallout
        myth="Leaving or muting a group chat is rude."
        reality={<p>Muting is invisible to other members and is the normal way people manage busy groups. Leaving is noticed, so a short friendly note helps, but etiquette guides, including the Emily Post Institute&apos;s, treat protecting your time and attention as legitimate. What&apos;s rude is making the exit about other people: a public complaint, or vanishing mid-argument. For the broader skill of saying no without guilt, see <TermLink href="/life-skills-etiquette/how-to-actually-set-boundaries-without-guilt">setting boundaries without guilt</TermLink>.</p>}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">What to do next</h2>
      <ActionChecklist
        items={[
          "Before posting, ask: does everyone here need this? If it's for one or two people, send a direct message.",
          "When you need a reply, name the person and the deadline instead of asking 'anyone?'.",
          "Reread anything with an edge to it as if you were the most anxious person in the group, then reword if it could sting.",
          "Ask before adding someone to a group, and before sharing a screenshot outside it.",
          "Check your groups' time zones; save non-urgent posts for reasonable hours or use scheduled send if your app has it.",
          "Mute groups that don't need your real-time attention instead of leaving abruptly.",
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">FAQ</h2>
      <FAQBlock
        items={[
          { question: "Is it rude to leave a group chat?", answer: "Not in itself. Muting is invisible and usually the gentlest option. If you leave, a short friendly note avoids people wondering whether they upset you. Leaving mid-argument or with a complaint is what tends to cause offence." },
          { question: "Why does nobody answer questions in group chats?", answer: "Diffusion of responsibility: when many people could answer, each feels less obliged to. Darley and Latane documented the effect in 1968. Naming one person fixes it." },
          { question: "Is it rude to end a text with a period?", answer: "Not by grammar rules, but research by Gunraj and colleagues (2016) found short text replies ending in a period were rated less sincere. In casual chats, many people read it as curt; in work chats it's more neutral." },
          { question: "Should I ask before adding someone to a group chat?", answer: "Yes, generally. Adding someone shares their phone number with all members in many apps and signs them up for every notification." },
          { question: "What time is too late to send a group message?", answer: "There's no universal rule, but many people treat roughly 9 p.m. to 8 a.m. in the recipients' local time as quiet hours for non-urgent messages. In groups across time zones, let people mute overnight without offence." },
        ]}
      />

      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">Related terms</h2>
      <GlossaryStrip terms={metadata.glossary ?? []} />
      <h2 className="scroll-mt-10 border-t-2 border-ink pt-3.5 mt-12 mb-4 font-display text-2xl font-bold text-ink">See also</h2>
      <SeeAlsoList slugs={metadata.seeAlso ?? []} />
    </>
  );
}
