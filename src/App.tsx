import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { type ReactNode, useState } from "react";

const BOOKING_URL = "https://avero.studio/intro";
const MESSAGE_URL = "https://t.me/augustasdesign";
const ASSET_BASE = import.meta.env.BASE_URL;
const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  { name: "Stacker", type: "Marketing website", image: "work-01.webp" },
  { name: "Tandem", type: "Marketing website", image: "work-02.webp" },
  { name: "Lunor", type: "Website visuals", image: "work-03.webp" },
  { name: "Lunor", type: "Dark visual system", image: "work-04.webp" },
  { name: "Contles", type: "Marketing website", image: "work-05.webp" },
  { name: "Fintech", type: "Website visuals", image: "work-06.webp" },
];

const services = [
  {
    number: "01",
    title: "Direction",
    description: "Website strategy, positioning, page structure, and copy direction.",
  },
  {
    number: "02",
    title: "Identity",
    description: "Logos, visual systems, art direction, and custom brand assets.",
  },
  {
    number: "03",
    title: "Web design",
    description: "Landing pages and full marketing sites designed around conversion.",
  },
  {
    number: "04",
    title: "Development",
    description: "Responsive Framer or React builds, CMS, motion, analytics, and launch.",
  },
];

const testimonials = [
  {
    quote:
      "Avero delivered a clean, modern landing page that matched our vision perfectly. Great communication made the whole process easy, and the turnaround was super short.",
    name: "Alex Prompter",
    role: "Co-founder, God of Prompt",
    avatar: "testimonials/alex-prompter.png",
  },
  {
    quote:
      "Built multiple sites really quickly and now they generate us multiple six figures a year.",
    name: "Ares",
    role: "Founder, Sprout Capital",
    avatar: "testimonials/ares.png",
  },
  {
    quote:
      "They nailed our brand look and built the entire front-end of the missing pages, saving us tons of time.",
    name: "Pelle Krukow",
    role: "CEO, FrostChanger",
    avatar: "testimonials/pelle.png",
  },
];

const offers = [
  {
    name: "Landing page",
    price: "From €4k",
    time: "2–3 weeks",
    description: "A focused, conversion-ready page designed and built for one clear launch.",
    items: ["Page strategy", "Copy direction", "Custom design", "Framer development"],
  },
  {
    name: "Full website",
    price: "From €9k",
    time: "4–6 weeks",
    description: "A complete marketing site with a visual system your team can keep growing.",
    items: ["Multi-page website", "Logo or brand refinement", "Custom motion", "CMS and launch"],
    featured: true,
  },
  {
    name: "Website support",
    price: "Custom",
    time: "Flexible",
    description: "Ongoing pages, improvements, and development after the first launch.",
    items: ["New pages", "Conversion improvements", "Visual assets", "Design and development"],
  },
];

const faqs = [
  {
    question: "What do you actually do?",
    answer:
      "We design and develop marketing websites for SaaS, AI, fintech, and software companies. That can include strategy, copy direction, logo or visual identity work, custom graphics, motion, Framer or React development, CMS setup, and launch support.",
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Yes. One senior team takes the website from structure and visual direction through responsive design and a live Framer or React build.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A focused landing page usually takes two to three weeks. A complete marketing site typically takes four to six weeks, depending on page count, content, and feedback speed.",
  },
  {
    question: "Do you help with the logo and brand?",
    answer:
      "Yes. We can create or refine the logo, typography, colors, art direction, and visual assets needed to make the website feel like one clear brand.",
  },
  {
    question: "How do revisions work?",
    answer:
      "We share work throughout the project and align on direction early. Revisions within the agreed scope are included, so there is no one-shot reveal at the end.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can stay on for new pages, experiments, improvements, and ongoing development—or hand over a clean site your team can manage.",
  },
];

function ArrowNorthEast() {
  return <span className="text-icon" aria-hidden="true">↗</span>;
}

function ArrowEast() {
  return <span className="text-icon" aria-hidden="true">→</span>;
}

function Checkmark() {
  return <span className="checkmark" aria-hidden="true">✓</span>;
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.68, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ReactLenis
      root
      options={
        shouldReduceMotion
          ? { autoRaf: true, anchors: true, duration: 0 }
          : { autoRaf: true, anchors: { offset: -82 }, duration: 0.92, smoothWheel: true }
      }
    >
      <div className="site-shell">
        <Navigation />
        <main>
          <Hero />
          <ClientStrip />
          <Services />
          <Testimonials />
          <Pricing />
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
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand-link" href="#top" aria-label="Larpo Studio home">
            <img src={`${ASSET_BASE}larpo-mark.svg`} alt="" />
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
            initial={{ opacity: 0, y: -12, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.28, ease }}
          >
            <div className="mobile-menu-top">
              <img src={`${ASSET_BASE}larpo-mark.svg`} alt="" />
              <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)}>
                <span aria-hidden="true">×</span>
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="hero-copy container">
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, delay: 0.12, ease }}
        >
          Website design and development for SaaS &amp; AI startups.
        </motion.h1>
        <motion.p
          className="hero-lead"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease }}
        >
          From logo and visual direction to a conversion-ready website—designed, built, and launched by one senior team.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease }}
        >
          <a className="button button-dark" href={BOOKING_URL}>
            Book a call <ArrowNorthEast />
          </a>
          <a className="button button-glass" href={MESSAGE_URL}>
            Write us a message <ArrowEast />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="work-reel"
        id="work"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.86, delay: 0.42, ease }}
        aria-label="Selected website work"
      >
        <div className="work-track">
          <ProjectGroup />
          <ProjectGroup duplicate />
        </div>
      </motion.div>
    </section>
  );
}

function ProjectGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="work-group" aria-hidden={duplicate || undefined}>
      {projects.map((project, index) => (
        <figure className="work-card" key={`${project.name}-${index}-${duplicate ? "copy" : "main"}`}>
          <div className="work-media">
            <img src={`${ASSET_BASE}${project.image}`} alt={duplicate ? "" : `${project.name} ${project.type}`} />
          </div>
          <figcaption>
            <strong>{project.name}</strong>
            <span>{project.type}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function ClientStrip() {
  const clients = [
    ["◆", "Acquisity"],
    [">_", "God of Prompt"],
    ["⌁", "sprout."],
    ["◒", "poof"],
    ["▰", "Contles"],
  ];

  return (
    <Reveal className="client-strip container">
      <p>Selected client work</p>
      <div className="client-logos" aria-label="Selected clients from Avero Studio projects">
        {clients.map(([mark, name]) => (
          <span className="client-logo" key={name}>
            <span className="client-glyph" aria-hidden="true">{mark}</span>
            {name}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container services-layout">
        <Reveal className="services-intro">
          <h2>Everything your website needs, handled by one team.</h2>
          <p>
            A clear offer, a visual identity people remember, and a fast website that is ready to sell.
          </p>
        </Reveal>
        <div className="service-list">
          {services.map((service, index) => (
            <Reveal className="service-row" key={service.number} delay={index * 0.045}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <Reveal className="compact-heading">
          <h2>What clients say.</h2>
          <p>Reviews from projects delivered through Avero Studio.</p>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal className="testimonial-wrap" key={testimonial.name} delay={index * 0.06}>
              <blockquote className="testimonial-card">
                <p>“{testimonial.quote}”</p>
                <footer>
                  <img src={`${ASSET_BASE}${testimonial.avatar}`} alt="" />
                  <span>
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.role}</small>
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <Reveal className="compact-heading pricing-heading">
          <h2 id="pricing-title">A clear starting point.</h2>
          <p>Final scope and price are agreed after a short call.</p>
        </Reveal>
        <div className="pricing-grid">
          {offers.map((offer, index) => (
            <Reveal className="price-wrap" key={offer.name} delay={index * 0.055}>
              <article className={`price-card ${offer.featured ? "price-featured" : ""}`}>
                <div className="price-top">
                  <div>
                    <h3>{offer.name}</h3>
                    <span>{offer.time}</span>
                  </div>
                  <strong>{offer.price}</strong>
                </div>
                <p>{offer.description}</p>
                <ul>
                  {offer.items.map((item) => (
                    <li key={item}><Checkmark /> {item}</li>
                  ))}
                </ul>
                <div className="price-actions">
                  <a className={`button ${offer.featured ? "button-white" : "button-dark"}`} href={BOOKING_URL}>
                    Book a call <ArrowNorthEast />
                  </a>
                  <a className="message-link" href={MESSAGE_URL}>
                    Write us a message <ArrowEast />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="container faq-layout">
        <Reveal className="faq-intro">
          <h2>Questions, answered.</h2>
          <p>Still unsure? Send us the brief and you will hear directly from a designer.</p>
          <a className="text-link" href={MESSAGE_URL}>Write us a message <ArrowEast /></a>
        </Reveal>
        <Reveal className="faq-list" delay={0.05}>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <Reveal className="footer-callout">
          <img src={`${ASSET_BASE}larpo-compact.svg`} alt="Larpo Studio" />
          <h2>Have a website to ship?</h2>
          <p>Tell us what you are launching. We will tell you the clearest way to build it.</p>
          <div className="footer-actions">
            <a className="button button-white" href={BOOKING_URL}>
              Book a call <ArrowNorthEast />
            </a>
            <a className="button button-footer-glass" href={MESSAGE_URL}>
              Write us a message <ArrowEast />
            </a>
          </div>
        </Reveal>
        <div className="footer-meta">
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
