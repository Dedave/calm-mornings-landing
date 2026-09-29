import { Fragment } from "react";
import Image from "next/image";
import SiteInteractions from "./SiteInteractions";

const CHECKOUT_URL = "https://selar.com/0m73087f66";

const sequenceSteps = [
  { src: "/assets/card-wake-up.webp", alt: "Illustrated routine card: Wake Up", label: "Wake Up" },
  { src: "/assets/card-brush-teeth.webp", alt: "Illustrated routine card: Brush Teeth", label: "Brush Teeth" },
  { src: "/assets/card-get-dressed.webp", alt: "Illustrated routine card: Get Dressed", label: "Get Dressed" },
  { src: "/assets/card-eat-breakfast.webp", alt: "Illustrated routine card: Eat Breakfast", label: "Eat Breakfast" },
  { src: "/assets/card-pack-bag.webp", alt: "Illustrated routine card: Pack Bag", label: "Pack Bag" },
];

const showcaseItems = [
  { src: "/assets/cards-sheet-1.webp", alt: "Sheet of illustrated routine cards", title: "36 Illustrated Routine Cards", desc: "Cut-out cards for everyday routine steps" },
  { src: "/assets/board-6step.webp", alt: "6-step morning routine board", title: "6-Step Routine Board", desc: "A little more structure" },
  { src: "/assets/board-first-then.webp", alt: "First then board", title: "First → Then Board", desc: '"Do this, then that"' },
  { src: "/assets/board-two-child.webp", alt: "Two-child morning routine board", title: "Two-Child Morning Routine", desc: "One board, two kids" },
  { src: "/assets/tracker-weekly.webp", alt: "Weekly morning tracker", title: "Weekly Morning Tracker", desc: "See the week at a glance" },
  { src: "/assets/checklist.webp", alt: "Get ready checklist", title: "Get Ready Checklist", desc: "Clothes, hygiene & extras" },
  { src: "/assets/reward-cards.webp", alt: "Reward and achievement cards", title: "Reward & Achievement Cards", desc: "Small, encouraging wins" },
  { src: "/assets/board-8step.webp", alt: "8-step morning routine board", title: "8-Step Routine Board", desc: "For a fuller morning routine" },
];

const moreList = [
  "5-Step Routine Board",
  "Morning Choice Board",
  "Weekend Morning Routine",
  "Daily Morning Routine",
  "Individual Printable PNG Pages",
  "19-Page Parent Guide (A4 & US Letter)",
];

const resetStages = [
  { days: "Days 1–3", title: "Build the routine", desc: "Choose the steps that fit your family's morning and create your child's visual routine." },
  { days: "Days 4–7", title: "Practise together", desc: "Walk through the routine together and help your child learn what each visual step means." },
  { days: "Days 8–10", title: "Step back gradually", desc: "Give your child opportunities to check the visual routine before giving another verbal reminder." },
  { days: "Days 11–14", title: "Make it repeatable", desc: "Keep using the routine consistently, notice where mornings still get stuck and adjust the system to fit your family." },
];

const steps = [
  { num: 1, title: "Print", desc: "Download and print the routine tools you want to use." },
  { num: 2, title: "Build", desc: "Choose the cards that match your child's actual morning and arrange the routine." },
  { num: 3, title: "Practise", desc: "Use the routine consistently and gradually encourage your child to check what comes next." },
];

const audience = [
  { icon: "✓", text: "You find yourself repeating the same morning instructions" },
  { icon: "✓", text: "Your child regularly asks what they should do next" },
  { icon: "✓", text: "You want a more predictable school-morning sequence" },
  { icon: "✓", text: "You’d like to introduce more visual cues into the routine" },
  { icon: "✓", text: "You want practical tools rather than another complicated system" },
  { icon: "✓", text: "You want something you can print and adapt to your family" },
];

const included = [
  "36 Illustrated Routine Cards",
  "Routine Boards",
  "Checklists",
  "Trackers",
  "Reward Cards",
  "19-Page Parent Guide",
];

const comparison = [
  {
    title: "Without a clear visual routine",
    items: [
      "Repeating the same instructions",
      "Children asking what comes next",
      "Forgotten morning tasks",
      "Last-minute searching",
      "Parents carrying the whole routine mentally",
    ],
  },
  {
    title: "With a routine they can see",
    items: [
      "Morning steps displayed visually",
      "A predictable order to follow",
      "Easier prompts such as ‘check your routine’",
      "Children can see what comes next",
      "A reusable system for school mornings",
    ],
  },
];

const faqs = [
  {
    q: "How does the 14-Day Reset work?",
    a: "Use the four stages on this page with your Calm Mornings tools: build the routine on days 1–3, practise together on days 4–7, step back gradually on days 8–10, and adjust for repeatability on days 11–14. This is a suggested implementation framework, not an extra downloadable workbook or a guarantee of results. Every family can move at its own pace.",
  },
  {
    q: "Do I have to use all 36 cards?",
    a: "No. Choose only the cards that match your child's morning. You can begin with a few relevant steps and adjust as you practise.",
  },
  {
    q: "Can I create a routine that fits my family?",
    a: "Yes. Choose relevant illustrated cards and arrange them in the order that fits your household. The different routine boards give you options for displaying your sequence.",
  },
  {
    q: "Do I need special materials?",
    a: "You need a way to print the pages and scissors if you want to cut out the routine cards. Choose the pages you want to use; no physical materials are shipped with this digital download.",
  },
  {
    q: "What happens after I purchase, and how do I access the files?",
    a: "Your purchase is handled through Selar. After completing your purchase, follow Selar's download instructions to access your Calm Mornings digital files. You can then print the pages you want to use.",
  },
  {
    q: "What exactly do I receive?",
    a: "You receive the complete Calm Mornings digital download: 36 illustrated routine cards, the 5-step, 6-step and 8-step morning routine boards, a two-child morning routine, a First → Then board, a Morning Choice board, a Weekly Morning Tracker, Reward & Achievement Cards, a Weekend Morning Routine, a Get Ready Checklist, a Daily Morning Routine page, individual printable PNG pages, and a 19-page Parent Guide in both A4 and US Letter sizes.",
  },
  { q: "Is this a physical product?", a: "No. Calm Mornings is a digital download. Nothing will be shipped." },
  {
    q: "What age is it for?",
    a: "It was designed with families of young children in mind. Parents can choose the cards and boards that best suit their child's routine.",
  },
  { q: "Can I reuse the printables?", a: "Yes. You can print pages as often as you like for your own household use." },
  { q: "Can I use it for more than one child?", a: "Yes, within the buyer's household." },
  {
    q: "Can I resell or share the files?",
    a: "No. Personal household use only. Files may not be resold, redistributed, shared, or re-uploaded.",
  },
  {
    q: "Is this therapy or medical advice?",
    a: "No. Calm Mornings is an organizational resource for families and is not medical, developmental, behavioral, or therapeutic advice.",
  },
  {
    q: "Do I receive a personalized version?",
    a: "No. This purchase is the standard Calm Mornings edition. Personalized name/theme editions are not included and may be offered separately.",
  },
];

export default function Home() {
  return (
    <>
      <SiteInteractions />

      <header className="site-header">
        <div className="wrap">
          <a href="#" className="brand" aria-label="LumaNest Publishing home">
            <Image src="/assets/icon-mark.webp" alt="" width={30} height={21} />
            <span className="brand-word">
              LumaNest
              <small>PUBLISHING</small>
            </span>
          </a>

          <a href={CHECKOUT_URL} className="btn btn-header" data-cta="header">
            Start the 14-Day Reset
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <p className="eyebrow">The 14-Day School Morning Reset</p>
              <p className="product-name">Calm Mornings</p>
              <h1>Make School Mornings Easier to Follow — One Routine at a Time</h1>
              <p className="lede">
                Calm Mornings is a simple visual routine system designed to help kids know what comes next,
                practise their morning routine and get ready for school with less repeated reminding and rushing.
              </p>

              <div className="hero-includes">
                <span className="dot">✓</span>
                <span>36 Illustrated Routine Cards • Routine Boards • Checklists • Trackers • 19-Page Parent Guide</span>
              </div>

              <div className="hero-cta">
                <p className="launch-price">Launch Price: $7</p>

                <a href={CHECKOUT_URL} className="btn btn-primary btn-block" data-cta="hero">
                  Start the 14-Day Reset
                </a>

                <p className="btn-sub">
                  <span>Instant Digital Download</span>
                  <span>•</span>
                  <span>Print at Home</span>
                  <span>•</span>
                  <span>Use Again &amp; Again</span>
                </p>
              </div>
            </div>

            <div className="hero-visual">
              <span className="hero-badge">36 cards inside</span>
              <Image
                src="/assets/hero-collage.webp"
                alt="Calm Mornings Visual Routine System — illustrated routine cards, routine boards, weekly tracker and Get Ready checklist"
                width={1000}
                height={1000}
                sizes="(max-width: 480px) calc(100vw - 40px), (max-width: 899px) 420px, 460px"
                preload
              />
            </div>
          </div>
        </section>

        <section className="problem section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>Does every school morning sound a little like this?</h2>
            </div>

            <div className="reminder-strip">
              <span className="reminder-bubble">&quot;Brush your teeth.&quot;</span>
              <span className="reminder-bubble">&quot;Please get dressed.&quot;</span>
              <span className="reminder-bubble">&quot;Where’s your school bag?&quot;</span>
              <span className="reminder-bubble">&quot;Have you eaten?&quot;</span>
              <span className="reminder-bubble">&quot;We’re going to be late!&quot;</span>
            </div>

            <div className="problem-copy">
              <p className="accent-line">
                When children rely on verbal reminders for every step, mornings can quickly become exhausting for everyone.
              </p>
              <p>Calm Mornings turns those repeated instructions into a visual routine children can see and follow one step at a time.</p>
            </div>
          </div>
        </section>

        <section className="sequence section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>Meet the Calm Mornings System</h2>
              <p>More than something you read once: visual routine tools and a practical Parent Guide to help you create, introduce and practise a repeatable morning routine.</p>
              <p>36 illustrated routine cards, routine boards, checklists, trackers, reward cards and a 19-page Parent Guide.</p>
            </div>

            <div className="sequence-row">
              {sequenceSteps.map((step, i) => (
                <Fragment key={step.label}>
                  <div className="sequence-step">
                    <Image src={step.src} alt={step.alt} width={360} height={246} sizes="(max-width: 639px) 30vw, 120px" />
                    <span>{step.label}</span>
                  </div>

                  {i < sequenceSteps.length - 1 && (
                    <div className="sequence-arrow" aria-hidden="true">
                      →
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="reset-section section-pad" id="reset">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">A little practice, one morning at a time</p>
              <h2>Your 14-Day School Morning Reset</h2>
              <p>You don’t need to change everything overnight. Use the Calm Mornings tools to introduce the routine gradually, practise it together and give your child more opportunities to follow the next step visually.</p>
            </div>

            <ol className="reset-grid">
              {resetStages.map((stage) => (
                <li className="reset-card" key={stage.days}>
                  <span className="day-label">{stage.days}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.desc}</p>
                </li>
              ))}
            </ol>

            <p className="section-note">
              A framework for practice, not a deadline for independence or calm. Take the time your family needs; these stages use the included tools, with no extra workbook required.
            </p>
          </div>
        </section>

        <section className="comparison section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>A clearer way to see what comes next</h2>
            </div>

            <div className="comparison-grid">
              {comparison.map((column) => (
                <article className="comparison-card" key={column.title}>
                  <h3>{column.title}</h3>
                  <ul>
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="section-note">
              Every family is different, and routines take practice. These are ways a visual routine can support your morning, not promised outcomes.
            </p>
          </div>
        </section>

        <section className="showcase section-pad" style={{ background: "var(--cream-deep)" }}>
          <div className="wrap">
            <div className="section-head">
              <h2>Everything You Get</h2>
              <p>Real pages from the download — print only what your family needs.</p>
            </div>

            <div className="showcase-grid">
              {showcaseItems.map((item) => (
                <article className="showcase-card" key={item.title}>
                  <div className="thumb">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={900}
                      height={1350}
                      sizes="(max-width: 639px) 45vw, (max-width: 979px) 30vw, 270px"
                    />
                  </div>
                  <div className="cap">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="showcase-more">
              <h3>Plus more inside:</h3>
              <ul className="more-list">
                {moreList.map((item) => (
                  <li key={item}>
                    <span className="check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="how section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>How it works</h2>
            </div>

            <div className="steps-grid">
              {steps.map((step) => (
                <div className="step-card" key={step.num}>
                  <div className="step-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="offer-section section-pad">
          <div className="wrap">
            <div className="offer-card">
              <h2>Everything in Calm Mornings</h2>
              <p className="offer-sub">
                36 illustrated routine cards • routine boards • trackers • checklists • reward cards • 19-page Parent Guide
              </p>
              <p className="launch-label">Launch Price:</p>
              <div className="offer-price"><sup>$</sup>7</div>
              <p className="offer-price-note">One-time purchase • Instant Digital Download</p>

              <a href={CHECKOUT_URL} className="btn btn-primary btn-block" data-cta="offer">
                Start the 14-Day Reset
              </a>
            </div>
          </div>
        </section>

        <section className="audience section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>Calm Mornings May Be Helpful If...</h2>
            </div>

            <ul className="audience-list">
              {audience.map((item) => (
                <li key={item.text}>
                  <span className="ico" aria-hidden="true">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="guide-section section-pad" style={{ background: "var(--cream-deep)" }}>
          <div className="wrap">
            <div className="guide-mock">
              <div className="guide-page p3"></div>
              <div className="guide-page p2"></div>
              <div className="guide-page">
                <Image className="mark" src="/assets/icon-mark.webp" alt="" width={34} height={24} />
                <p className="guide-title">Calm Mornings — Parent Guide</p>
                <div className="rule"></div>
                <div className="rule"></div>
                <div className="rule"></div>
              </div>

              <p className="guide-caption">Illustrative guide mockup</p>
              <div className="guide-badges">
                <span>A4</span>
                <span>US Letter</span>
                <span>19 Pages</span>
              </div>
            </div>

            <div className="guide-copy">
              <h2>A practical Parent Guide, included</h2>
              <p>The system also includes a practical Parent Guide to help you set up and use your Calm Mornings routine.</p>
              <ul>
                <li>📄 19-page Parent Guide — A4</li>
                <li>📄 19-page Parent Guide — US Letter</li>
                <li>🖨️ Print only the pages you need</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="objections section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>“But We’ve Tried Routine Charts Before...”</h2>
              <p>Calm Mornings is designed as more than a single generic chart. Choose relevant illustrated cards, create a routine that matches your household and use the Parent Guide to introduce the system gradually.</p>
              <p>Start with the steps you actually need. Practise together, then adjust what isn’t working for your family.</p>
            </div>
          </div>
        </section>

        <section className="faq section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>Frequently asked questions</h2>
            </div>

            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary className="faq-q">
                    <span>{item.q}</span>
                    <span className="plus" aria-hidden="true">+</span>
                  </summary>
                  <div className="faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta section-pad">
          <div className="wrap">
            <div className="final-cta-visual">
              <Image
                src="/assets/hero-collage.webp"
                alt="Calm Mornings Visual Routine System — full bundle preview"
                width={1000}
                height={1000}
                sizes="240px"
              />
            </div>

            <h2>Tomorrow Morning Can Have a Clearer Plan.</h2>
            <p className="lede">Give your family a visual routine you can build, practise and reuse — one morning at a time.</p>
            <p className="final-product">Calm Mornings<span>The 14-Day School Morning Reset</span></p>
            <ul className="included-list">
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="final-price">Launch Price: $7</div>

            <a href={CHECKOUT_URL} className="btn btn-primary" data-cta="final">
              Start the 14-Day Reset
            </a>

            <p className="btn-sub">
              <span>Instant Digital Download</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <a href="#" className="brand" aria-label="LumaNest Publishing">
            <Image src="/assets/icon-mark.webp" alt="" width={26} height={18} />
            <span className="brand-word">
              LumaNest
              <small>PUBLISHING</small>
            </span>
          </a>

          <p className="disclaimer">
            Calm Mornings is an organizational resource for families and is not medical, developmental, behavioral or therapeutic advice. For the purchaser&apos;s household use only — files may not be resold, redistributed, shared, or re-uploaded.
          </p>

          <p className="legal">
            <span>© <span id="year"></span> LumaNest Publishing</span>
          </p>
        </div>
      </footer>

      <div className="sticky-cta" id="stickyCta">
        <span className="price">
          Calm Mornings<strong>$7</strong>
        </span>

        <a href={CHECKOUT_URL} className="btn btn-primary" data-cta="sticky">
          Start the 14-Day Reset — $7
        </a>
      </div>
    </>
  );
}