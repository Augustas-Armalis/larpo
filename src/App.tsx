import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ReactLenis } from "lenis/react";
import { useState } from "react";

const offers = [
  {
    name: "Launch sprint",
    price: "From €4k",
    time: "2–3 weeks",
    description:
      "One focused page with sharp positioning, custom visuals, responsive design, and a live build.",
    items: ["Landing page", "Copy direction", "Framer development", "Launch support"],
  },
  {
    name: "Marketing site",
    price: "From €9k",
    time: "4–6 weeks",
    description:
      "A complete brand and website system for a company entering a higher-stakes stage.",
    items: ["Positioning workshop", "Multi-page website", "Motion system", "CMS handoff"],
    featured: true,
  },
  {
    name: "Product partner",
    price: "Custom",
    time: "Rolling",
    description:
      "Senior product design support that works directly with founders and engineering teams.",
    items: ["Product UI/UX", "Design systems", "Prototypes", "Embedded collaboration"],
  },
];

const faqs = [
  {
    question: "Who is Larpo best suited for?",
    answer:
      "Funded SaaS, AI, fintech, and software teams with a real launch, raise, repositioning, or product milestone ahead. We are most useful when the quality bar is high and speed still matters.",
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Yes. Website engagements can include a production-ready Framer build or a React handoff. Product work is delivered with documented states, responsive behavior, and clean engineering collaboration.",
  },
  {
    question: "How soon can a project start?",
    answer:
      "Usually within one to three weeks, depending on scope and current capacity. If you have a fixed launch date, share it on the first call and we will be direct about what is realistic.",
  },
  {
    question: "How do revisions work?",
    answer:
      "We align on direction early, share work continuously, and revise within the agreed scope until the outcome feels right. No big-reveal handoffs and no feedback disappearing into a queue.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "That is the default. We collaborate directly with founders, marketers, product leads, and engineers, and adapt the level of ownership to the team you already have.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can stay for iteration, conversion work, new pages, product expansion, and design-system support—or leave you with a clean, documented handoff your team can own.",
  },
];

const testimonials = [
  {
    quote:
      "We had our entire platform designed by Avero, and they absolutely delivered. Custom assets, clear communication, and hundreds of pixel-perfect screens done in days rather than weeks. Highly recommend Avero studio as a long-term design partner.",
    name: "Blaise Gulaj",
    role: "CTO, AI Acquisition",
  },
  {
    quote:
      "Avero delivered a clean, modern landing page design that matched our vision perfectly. Creativity was inspiring, passion for work showed in every detail. Great communication made the whole process easy. Turnaround time was super short. I’d recommend Avero without hesitation!",
    name: "Alex Prompter",
    role: "Co-founder, God of Prompt",
  },
  {
    quote:
      "Built multiple sites really quickly and now they generate us multiple 6-figs a year. Got help with branding and product design, thanks to Avero we’re able to launch our SaaS with ease!",
    name: "Ares",
    role: "Founder, Sprout Capital",
  },
  {
    quote:
      "Augustas is always quick to respond and delivered innovative web and product designs that nailed our modern fintech aesthetic. Easily one of the best bento designers around.",
    name: "Alex Shi",
    role: "Founder, Poof",
  },
  {
    quote:
      "We started our new site but ran out of time to finish it, so we urgently needed someone fast and talented to help us finish it. That’s when we found Avero. They nailed our brand look and built the entire front-end of the missing pages, saving us tons of time!",
    name: "Pelle Krukow",
    role: "CEO, FrostChanger",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;
const BOOKING_URL = "https://avero.studio/intro";
const MESSAGE_URL = "https://t.me/augustasdesign";
const ASSET_BASE = import.meta.env.BASE_URL;

function ArrowNorthEast() {
  return <span className="text-icon" aria-hidden="true">↗</span>;
}

function ArrowEast() {
  return <span className="text-icon" aria-hidden="true">→</span>;
}

function Checkmark() {
  return <span className="checkmark" aria-hidden="true">✓</span>;
}

function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ReactLenis
      root
      options={
        shouldReduceMotion
          ? { autoRaf: true, anchors: true, duration: 0 }
          : { autoRaf: true, anchors: { offset: -88 }, duration: 1.05, smoothWheel: true }
      }
    >
      <div className="site-shell">
        <Navigation />
        <main>
          <Hero />
          <ClientStrip />
          <CapabilityStatement />
          <Proof />
          <Offers />
          <Faq />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        className="nav-wrap"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
      >
        <nav className="nav-pill" aria-label="Main navigation">
          <a className="brand-link" href="#top" aria-label="Larpo Studio home">
            <img src={`${ASSET_BASE}larpo-mark.svg`} alt="Larpo Studio" />
          </a>
          <div className="desktop-nav">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="nav-cta desktop-cta" href={BOOKING_URL}>
            Book a call <ArrowNorthEast />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Open navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="menu-lines" aria-hidden="true" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="mobile-menu-top">
              <img src={`${ASSET_BASE}larpo-mark.svg`} alt="Larpo Studio" />
              <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)}>
                <span className="close-symbol" aria-hidden="true">×</span>
              </button>
            </div>
            <div className="mobile-menu-links">
              {[
                ["Work", "#work"],
                ["Services", "#services"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)}>
                  {label} <ArrowEast />
                </a>
              ))}
            </div>
            <a className="button button-dark" href={BOOKING_URL}>
              Book a call <ArrowNorthEast />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy container">
        <motion.span
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease }}
        >
          Design and development studio · Europe
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease }}
        >
          Websites, product design, and branding for SaaS &amp; AI startups.
        </motion.h1>
        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.34, ease }}
        >
          One senior team from first direction to shipped work. Built for seed to Series B teams
          that need to launch faster and look ready for what comes next.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44, ease }}
        >
          <a className="button button-dark" href={BOOKING_URL}>
            Book a call <ArrowNorthEast />
          </a>
          <a className="button button-light" href={MESSAGE_URL}>
            Write us a message <ArrowEast />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-work container"
        id="work"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease }}
      >
        <article className="featured-work">
          <div className="featured-work-media">
            <img src={`${ASSET_BASE}work-01.webp`} alt="Stacker website and product interface" />
          </div>
          <div className="featured-work-meta">
            <strong>Stacker</strong>
            <span>Website and product · 2026</span>
          </div>
        </article>
        <article className="featured-work">
          <div className="featured-work-media featured-work-dark">
            <img src={`${ASSET_BASE}work-04.webp`} alt="Lunor software dashboard interface" />
          </div>
          <div className="featured-work-meta">
            <strong>Lunor</strong>
            <span>Product design · 2026</span>
          </div>
        </article>
      </motion.div>
    </section>
  );
}

function ClientStrip() {
  return (
    <section className="client-strip container" aria-label="Selected client experience">
      <p>Selected Avero clients</p>
      <div className="client-names">
        <span>AI Acquisition</span>
        <span>God of Prompt</span>
        <span>Sprout Capital</span>
        <span>Poof</span>
        <span>FrostChanger</span>
      </div>
    </section>
  );
}

function CapabilityStatement() {
  return (
    <section className="capability section" id="services">
      <div className="container capability-inner">
        <div className="capability-intro">
          <span className="eyebrow eyebrow-light">What we do</span>
          <h2>One team for your brand, website, and product.</h2>
          <p>
            Strategy, design, and development stay with the same senior team. You move faster,
            make fewer handoffs, and ship one consistent experience.
          </p>
        </div>
        <div className="capability-list">
          {[
            ["01", "Brand systems", "Positioning, identity, art direction, launch assets"],
            ["02", "Websites", "Strategy, copy direction, responsive design, Framer or React"],
            ["03", "Product", "Core flows, interface systems, prototypes, engineering handoff"],
          ].map(([number, title, description]) => (
            <motion.div
              className="capability-row"
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease }}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowNorthEast />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section className="offers section" id="pricing" aria-labelledby="offers-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Pricing</span>
            <h2 id="offers-title">Choose the scope you need.</h2>
          </div>
          <p>
            Start with one page, a complete marketing site, or ongoing product design support.
          </p>
        </div>
        <div className="offer-grid">
          {offers.map((offer, index) => (
            <motion.article
              className={`offer-card ${offer.featured ? "offer-featured" : ""}`}
              key={offer.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease }}
            >
              {offer.featured ? <span className="recommended">Most complete</span> : null}
              <div className="offer-topline">
                <h3>{offer.name}</h3>
                <span>{offer.time}</span>
              </div>
              <strong>{offer.price}</strong>
              <p>{offer.description}</p>
              <ul>
                {offer.items.map((item) => (
                  <li key={item}>
                    <Checkmark /> {item}
                  </li>
                ))}
              </ul>
              <a className="offer-link" href={BOOKING_URL}>
                Discuss this format <ArrowNorthEast />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof section">
      <div className="container">
        <div className="section-heading proof-heading">
          <div>
            <span className="eyebrow">Testimonials</span>
            <h2>What clients say about the work.</h2>
          </div>
          <p>Original reviews from projects delivered through Avero Studio.</p>
        </div>
        <div className="proof-grid">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              className={index === testimonials.length - 1 ? "proof-wide" : ""}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.06, ease }}
            >
              <p>“{testimonial.quote}”</p>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="container faq-grid">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2>Questions before we start.</h2>
          <p>If your question is more specific, send it directly. You will hear from a designer.</p>
          <a className="button button-light" href={MESSAGE_URL}>
            <span className="message-mark" aria-hidden="true" /> Write us a message
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-cta">
        <img src={`${ASSET_BASE}larpo-compact.svg`} alt="Larpo Studio" />
        <span className="eyebrow eyebrow-light">Start a project</span>
        <h2>Need a sharper website or product?</h2>
        <p>Tell us what you are launching and when. We will suggest the clearest way to move it forward.</p>
        <div className="final-actions">
          <a className="button button-white" href={BOOKING_URL}>
            Book a call <ArrowNorthEast />
          </a>
          <a className="button button-ghost" href={MESSAGE_URL}>
            Write us a message
          </a>
        </div>
      </div>
      <div className="container footer-meta">
        <div className="footer-top">
          <img src={`${ASSET_BASE}larpo-compact.svg`} alt="Larpo Studio" />
          <p>Websites, product design, and branding for SaaS and AI startups.</p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Larpo Studio</span>
          <div>
            <a href="https://x.com/augustasdesign">X</a>
            <a href="https://www.linkedin.com/in/augustas-web">LinkedIn</a>
            <a href="https://t.me/augustasdesign">Telegram</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
