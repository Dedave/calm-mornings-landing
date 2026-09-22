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

const steps = [
  { num: 1, title: "Download", desc: "Get your digital files after purchase." },
  { num: 2, title: "Print", desc: "Choose the cards and routine pages that work for your family." },
  { num: 3, title: "Build Your Routine", desc: "Arrange the visual steps in the order that works for your morning." },
  { num: 4, title: "Use It Daily", desc: "Give your child a clear visual reference for what comes next." },
];

const audience = [
  { icon: "👨‍👩‍👧‍👦", text: "Families with young children" },
  { icon: "🗓️", text: "Families looking for more structure during busy mornings" },
  { icon: "🏠", text: "Households with one or multiple children" },
  { icon: "🌈", text: "Children who enjoy colorful visual reminders" },
];

const faqs = [
  {
    q: "What exactly do I receive?",
    a: "You receive the complete Calm Mornings digital download: 36 illustrated routine cards, the 5-step, 6-step and 8-step morning routine boards, a two-child morning routine, a First → Then board, a Morning Choice board, a Weekly Morning Tracker, Reward & Achievement Cards, a Weekend Morning Routine, a Get Ready Checklist, a Daily Morning Routine page, individual printable PNG pages, and a 19-page Parent Guide in both A4 and US Letter sizes.",
  },
  { q: "Is this a physical product?", a: "No. Calm Mornings is a digital download. Nothing will be shipped." },
  { q: "What age is it for?", a: "It was designed with families of young children in mind. Parents can choose the cards and boards that best suit their child's routine." },
  { q: "Can I print it more than once?", a: "Yes. You can print pages as often as you like for your own household use." },
  { q: "Can I use it for more than one child?", a: "Yes, within the buyer's household." },
  { q: "Can I resell or share the files?", a: "No. Personal household use only. Files may not be resold, redistributed, shared, or re-uploaded." },
  { q: "Is this therapy or medical advice?", a: "No. Calm Mornings is an organizational resource for families and is not medical, developmental, behavioral, or therapeutic advice." },
  { q: "Do I receive a personalized version?", a: "No. This purchase is the standard Calm Mornings edition. Personalized name/theme editions are not included and may be offered separately." },
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
            GET CALM MORNINGS
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <h1>Tired of repeating the same morning instructions over and over?</h1>
              <p className="lede">
                Help your child see what comes next with a simple, colorful visual routine system designed to make
                busy mornings easier to follow.
              </p>

              <div className="hero-includes">
                <span className="dot">✓</span>
                <span>36 illustrated routine cards + routine boards + trackers + checklists + Parent Guide</span>
              </div>

              <div className="hero-cta">
                <a href={CHECKOUT_URL} className="btn btn-primary btn-block" data-cta="hero">
                  GET CALM MORNINGS — $7
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
              />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="problem section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>Does this sound familiar?</h2>
            </div>

            <div className="reminder-strip">
              <span className="reminder-bubble">&quot;Brush your teeth.&quot;</span>
              <span className="reminder-bubble">&quot;Get dressed.&quot;</span>
              <span className="reminder-bubble">&quot;Pack your bag.&quot;</span>
              <span className="reminder-bubble">&quot;Have you eaten?&quot;</span>
              <span className="reminder-bubble">&quot;Are you ready yet?&quot;</span>
            </div>

            <div className="problem-copy">
              <p className="accent-line">Mornings can quickly turn into a cycle of reminders.</p>
              <p>
                Calm Mornings gives your child a colorful visual sequence they can refer to, so they can see what
                comes next — without you having to say it five times.
              </p>
            </div>
          </div>
        </section>

        {/* Sequence */}
        <section className="sequence section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>Turn morning instructions into something they can see.</h2>
            </div>

            <div className="sequence-row">
              {sequenceSteps.map((step, i) => (
                <Fragment key={step.label}>
                  <div className="sequence-step">
                    <Image src={step.src} alt={step.alt} width={360} height={246} />
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

        {/* Showcase */}
        <section className="showcase section-pad" style={{ background: "var(--cream-deep)" }}>
          <div className="wrap">
            <div className="section-head">
              <h2>Everything you need to build a morning routine that works for your family</h2>
              <p>Real pages from the download — print only what your family needs.</p>
            </div>

            <div className="showcase-grid">
              {showcaseItems.map((item) => (
                <article className="showcase-card" key={item.title}>
                  <div className="thumb">
                    <Image src={item.src} alt={item.alt} width={900} height={1350} />
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

        {/* How it works */}
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

        {/* Offer */}
        <section className="offer-section section-pad">
          <div className="wrap">
            <div className="offer-card">
              <h2>The Complete Calm Mornings System</h2>
              <p className="offer-sub">
                36 illustrated routine cards • routine boards • trackers • checklists • 19-page Parent Guide
              </p>
              <div className="offer-price">
                <sup>$</sup>7
              </div>
              <p className="offer-price-note">One-time purchase • Instant digital download</p>
              <a href={CHECKOUT_URL} className="btn btn-primary btn-block" data-cta="offer">
                GET CALM MORNINGS — $7
              </a>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="audience section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>Who Calm Mornings is for</h2>
            </div>
            <ul className="audience-list">
              {audience.map((item) => (
                <li key={item.text}>
                  <span className="ico">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Parent guide */}
        <section className="guide-section section-pad" style={{ background: "var(--cream-deep)" }}>
          <div className="wrap">
            <div className="guide-mock">
              <div className="guide-page p3"></div>
              <div className="guide-page p2"></div>
              <div className="guide-page">
                <Image className="mark" src="/assets/icon-mark.webp" alt="" width={34} height={24} />
                <h4>Calm Mornings — Parent Guide</h4>
                <div className="rule"></div>
                <div className="rule"></div>
                <div className="rule"></div>
              </div>
              <div className="guide-badges">
                <span>A4</span>
                <span>US Letter</span>
                <span>19 Pages</span>
              </div>
            </div>

            <div className="guide-copy">
              <h2>A practical Parent Guide, included</h2>
              <p>
                The system also includes a practical Parent Guide to help you set up and use your Calm Mornings
                routine.
              </p>
              <ul>
                <li>📄 19-page Parent Guide — A4</li>
                <li>📄 19-page Parent Guide — US Letter</li>
                <li>🖨️ Print only the pages you need</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                    <span className="plus">+</span>
                  </summary>
                  <div className="faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta section-pad">
          <div className="wrap">
            <div className="final-cta-visual">
              <Image
                src="/assets/hero-collage.webp"
                alt="Calm Mornings Visual Routine System — full bundle preview"
                width={1000}
                height={1000}
              />
            </div>
            <h2>Ready for a calmer, more organized morning routine?</h2>
            <p className="lede">Give your child a simple visual way to see what comes next.</p>
            <div className="final-price">$7</div>
            <a href={CHECKOUT_URL} className="btn btn-primary" data-cta="final">
              GET CALM MORNINGS — $7
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
            Calm Mornings is an organizational resource for families and is not medical, developmental, behavioral or
            therapeutic advice. For the purchaser&apos;s household use only — files may not be resold, redistributed,
            shared, or re-uploaded.
          </p>
          <p className="legal">
            <span>
              © <span id="year"></span> LumaNest Publishing
            </span>
          </p>
        </div>
      </footer>

      <div className="sticky-cta" id="stickyCta">
        <span className="price">
          Calm Mornings<strong>$7</strong>
        </span>
        <a href={CHECKOUT_URL} className="btn btn-primary" data-cta="sticky">
          GET CALM MORNINGS
        </a>
      </div>
    </>
  );
}
