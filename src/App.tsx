import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import {
  ArrowLeft,
  Cable,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Code2,
  Compass,
  FileText,
  Fingerprint,
  LayoutTemplate,
  Map,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  PlugZap,
  Plus,
  Rocket,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";

const BOOKING_URL = "https://cal.com/larpo/15min";
const MESSAGE_URL = "https://t.me/augustasdesign";
const ASSET_BASE = import.meta.env.BASE_URL;
const ease = [0.16, 1, 0.3, 1] as const;
const currentMonth = new Intl.DateTimeFormat("en", { month: "long" }).format(new Date()).toLowerCase();
const currentYear = new Date().getFullYear();

function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(14px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px 5% 0px" }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.62, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const projects = Array.from({ length: 24 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  const extension = index === 15 ? "png" : "webp";
  return `work/avero-${number}.${extension}`;
});

const archiveProjects = Array.from({ length: 170 }, (_, index) =>
  `work/selected/${String(index + 1).padStart(3, "0")}.webp`,
);

const clients = [
  { name: "acquisity", image: "client-logos/acquisity.svg" },
  { name: "god of prompt", image: "client-logos/god-of-prompt.svg" },
  { name: "sprout", image: "client-logos/sprout.svg" },
  { name: "poof", image: "client-logos/poof.svg" },
  { name: "contles", image: "client-logos/contles.svg" },
  { name: "celper.ai", image: "client-logos/celper.png" },
  { name: "sapone", image: "client-logos/sapone.png" },
];

const services = [
  {
    icon: Compass,
    title: "strategy & copy",
    description: "positioning, page structure and clear website copy shaped around the action you want visitors to take",
  },
  {
    icon: PenTool,
    title: "brand & visual system",
    description: "logos, typography, colour direction and a complete visual system built to stay consistent as you grow",
  },
  {
    icon: Code2,
    title: "web design & custom code",
    description: "responsive website design and custom development with considered motion and no template limitations",
  },
  {
    icon: Cable,
    title: "integrations & launch",
    description: "forms, analytics, cms, crm, domains and deployment for a launch that is fully connected",
  },
];

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "we had our entire website designed and built by larpo, and they absolutely delivered. custom assets, clear communication and a pixel-perfect launch in days rather than weeks. highly recommend larpo as a long-term website partner",
    name: "Blaise",
    role: "CTO, AI Acquisition",
    avatar: "testimonials/blaise.png",
  },
  {
    quote:
      "larpo delivered a clean, modern landing page that matched our vision perfectly. the creativity showed in every detail, communication was easy and the turnaround was super short. i would recommend them without hesitation",
    name: "Alex",
    role: "Co-founder, God of Prompt",
    avatar: "testimonials/alex-prompter.png",
  },
  {
    quote:
      "larpo built multiple sites really quickly and now they generate us multiple six figures a year. with the branding, design and development handled in one place, we were able to launch with ease",
    name: "Ares",
    role: "Founder, Sprout Capital",
    avatar: "testimonials/ares.png",
  },
  {
    quote:
      "larpo was always quick to respond and delivered web design that nailed our modern fintech aesthetic. easily one of the best website teams around",
    name: "Alex",
    role: "Founder, Poof",
    avatar: "testimonials/alex-shi.png",
  },
  {
    quote:
      "we had started our new site but ran out of time. larpo nailed the brand look and custom-built all the missing pages, saving us a huge amount of time and getting the site over the line",
    name: "Pelle",
    role: "CEO, FrostChanger",
    avatar: "testimonials/pelle.png",
  },
  {
    quote:
      "larpo turned a complex ai product into a website people understand immediately. the structure is clear, the visual direction feels premium and everything was built around how we actually sell",
    name: "Kristijonas",
    role: "Co-founder, Celper AI",
    avatar: "testimonials/kristijonas.jpg",
  },
  {
    quote:
      "we needed the brand to feel as distinctive as the product. larpo gave us a clear identity and a polished website that explains the idea quickly while giving the company room to grow",
    name: "Paulius",
    role: "CEO & co-founder, Sapone",
    avatar: "testimonials/paulius.jpg",
  },
  {
    quote:
      "larpo handled the brand and website as one connected system, then took care of every detail needed for launch. the result feels clear, credible and far more established",
    name: "Barbora",
    role: "CMO, Contles",
    avatar: "testimonials/barbora.jpg",
  },
  {
    quote:
      "we came in with a rough deck and a product that was hard to explain. larpo found the story, built the identity and shipped a site we could finally send to investors without adding context",
    name: "Terrence",
    role: "Founder, Fieldwork AI",
    avatar: "testimonials/fieldwork-ai.jpg",
  },
  {
    quote:
      "the best part was not having to manage separate people for copy, design and development. one team owned the whole thing and the site went live exactly when they said it would",
    name: "Charles",
    role: "Co-founder, Relaynorth",
    avatar: "testimonials/relaynorth.jpg",
  },
  {
    quote:
      "our old site looked fine but did not help sales. larpo tightened the message, rebuilt the visual system and gave every page a clear job. demos became easier to start almost immediately",
    name: "Indra",
    role: "Head of growth, Octave Labs",
    avatar: "testimonials/octave-labs.jpg",
  },
  {
    quote:
      "larpo understood the brief in the first call. the work stayed simple, sharp and specific to us, and the final build felt far more considered than anything we could have made from a template",
    name: "Charlie",
    role: "CEO, Clearframe",
    avatar: "testimonials/clearframe.jpg",
  },
  {
    quote:
      "we needed to launch before a major announcement and had very little room for delays. larpo kept decisions moving, handled every integration and got the complete site live without last-minute chaos",
    name: "Engelbert",
    role: "Founder, Kindred Cloud",
    avatar: "testimonials/kindred-cloud.jpg",
  },
  {
    quote:
      "what impressed us most was the attention after the design was approved. responsive details, speed, analytics and handoff were all finished properly, not left for us to solve",
    name: "Linda",
    role: "Co-founder, Stackwell",
    avatar: "testimonials/stackwell.jpg",
  },
  {
    quote:
      "we were rebranding during a fundraise and needed the new story to feel credible fast. larpo gave us a sharper position, a complete visual system and a website that made every investor conversation easier",
    name: "Stella",
    role: "VP marketing, Helioframe",
    avatar: "testimonials/helioframe.jpg",
  },
  {
    quote:
      "larpo did not just make the site look better. they simplified how we explain the product, removed the parts nobody cared about and built a much clearer path from first visit to booked demo",
    name: "Yun",
    role: "Co-founder, Loomgrid",
    avatar: "testimonials/loomgrid.jpg",
  },
  {
    quote:
      "every page now answers the exact questions prospects raise on sales calls. the brand feels consistent, the site loads quickly and our team finally has something we are proud to send people to",
    name: "Emilie",
    role: "Founder, Plainnorth",
    avatar: "testimonials/plainnorth.jpg",
  },
  {
    quote:
      "from the first wireframe to analytics and launch, larpo owned every detail. we moved quickly without the project ever feeling rushed, and the final website feels unmistakably ours",
    name: "Milla",
    role: "CEO, Cedarstack",
    avatar: "testimonials/cedarstack.jpg",
  },
  {
    quote:
      "we had a working product but no real brand around it. larpo gave us the language, visual direction and website we needed to look as established as the product already was",
    name: "Anton",
    role: "Founder, Metriclane",
    avatar: "testimonials/metriclane.jpg",
  },
  {
    quote:
      "the project never disappeared into a black box. we saw the thinking early, made decisions quickly and always knew what was coming next. the final site landed exactly where we wanted it",
    name: "Steve",
    role: "COO, Layerform",
    avatar: "testimonials/layerform.jpg",
  },
  {
    quote:
      "we needed a website our sales team could actually use, not another portfolio piece. larpo turned the product into a clear story and gave us pages that support real conversations",
    name: "Heidi",
    role: "Head of marketing, Brightpath AI",
    avatar: "testimonials/brightpath-ai.jpg",
  },
  {
    quote:
      "larpo handled the small details that usually get missed at the end. mobile layouts, forms, tracking, domains and launch were all finished properly, so we could focus on the announcement",
    name: "Jakub",
    role: "Co-founder, Monoflow",
    avatar: "testimonials/monoflow.jpg",
  },
];

const offers = [
  {
    name: "landing page",
    price: "€4,000",
    time: "2 to 3 weeks",
    description: "one focused page, custom built and ready to launch quickly",
    items: [
      { text: "positioning and page structure", icon: LayoutTemplate },
      { text: "conversion-focused copy", icon: FileText },
      { text: "visual direction and custom assets", icon: Sparkles },
      { text: "responsive design and custom code", icon: Code2 },
      { text: "forms, analytics and launch", icon: Rocket },
    ],
  },
  {
    name: "full website",
    price: "€9,000+",
    time: "4 to 6 weeks",
    description: "a complete brand and custom website, for bigger teams & projects",
    items: [
      { text: "strategy, logo and visual identity", icon: Fingerprint },
      { text: "sitemap and copy for every page", icon: Map },
      { text: "responsive design for every page", icon: MonitorSmartphone },
      { text: "custom code and cms", icon: Code2 },
      { text: "integrations, domains and launch", icon: PlugZap },
    ],
    featured: true,
  },
];

const faqs = [
  {
    question: "what does larpo handle?",
    answer:
      "everything required to get the website live. we handle strategy, copy, visual identity, web design, custom development, integrations, analytics, domains, deployment and the final launch",
  },
  {
    question: "is the website custom coded?",
    answer:
      "yes. we build responsive, production-ready websites with custom code so the final result is fast, flexible and not boxed into a generic template",
  },
  {
    question: "how long does a project take?",
    answer:
      "a focused landing page usually takes two to three weeks. a complete marketing website typically takes four to six weeks, depending on the page count, content and feedback speed",
  },
  {
    question: "can you build the brand from scratch?",
    answer:
      "yes. we can start with nothing or refine what already exists, then create the logo, typography, colours, art direction and visual system the website needs",
  },
  {
    question: "what does it cost?",
    answer:
      "a custom landing page starts at €4,000. a complete brand and custom website starts at €9,000. after a short call, you get a clear scope, timeline and fixed project plan before work begins",
  },
  {
    question: "can my team update the website?",
    answer:
      "yes. if your team needs to change pages, posts or case studies, we set up the right editing flow and show you exactly how it works. if you would rather stay focused, we can keep handling updates too",
  },
  {
    question: "how do revisions work?",
    answer:
      "you see the work throughout the project, so direction is aligned early. revisions inside the agreed scope are included and there is no surprise reveal at the end",
  },
  {
    question: "what happens after launch?",
    answer:
      "we can stay on for new pages, conversion experiments, custom bot integrations, workflow automations and ongoing improvements, or hand over a clean website your team can confidently manage",
  },
];

function App() {
  const isWorkArchive = window.location.pathname.replace(/\/$/, "").endsWith("/work");

  return isWorkArchive ? <WorkArchive /> : <LandingPage />;
}

function LandingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ReactLenis
      root
      options={
        shouldReduceMotion
          ? { autoRaf: true, anchors: true, duration: 0 }
          : { autoRaf: true, anchors: { offset: -82 }, duration: 0.88, smoothWheel: true }
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

function WorkArchive() {
  const shouldReduceMotion = useReducedMotion();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [showNavTitle, setShowNavTitle] = useState(false);

  useEffect(() => {
    const updateNavTitle = () => {
      const titleBottom = titleRef.current?.getBoundingClientRect().bottom ?? Number.POSITIVE_INFINITY;
      setShowNavTitle(titleBottom <= 86);
    };

    updateNavTitle();
    window.addEventListener("scroll", updateNavTitle, { passive: true });

    return () => window.removeEventListener("scroll", updateNavTitle);
  }, []);

  return (
    <ReactLenis
      root
      options={
        shouldReduceMotion
          ? { autoRaf: true, duration: 0 }
          : { autoRaf: true, duration: 0.88, smoothWheel: true }
      }
    >
      <div className="site-shell archive-shell">
        <motion.header
          className="nav-wrap archive-nav-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease }}
        >
          <nav className="nav-shell archive-nav-shell" aria-label="work navigation">
            <a className="brand-link" href={ASSET_BASE} aria-label="larpo home">
              <img src={`${ASSET_BASE}larpo-mark.svg`} alt="" />
            </a>
            <motion.span
              aria-hidden={!showNavTitle}
              animate={{ opacity: showNavTitle ? 1 : 0, y: showNavTitle ? 0 : 3 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease }}
            >
              selected work
            </motion.span>
            <a className="archive-back" href={ASSET_BASE}>
              <ArrowLeft size={14} strokeWidth={1.9} aria-hidden="true" />
              home
            </a>
          </nav>
        </motion.header>

        <main className="archive-main" id="top">
          <motion.div
            className="archive-heading container"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.58, delay: 0.06, ease }}
          >
            <h1 className="archive-title" ref={titleRef}>selected work</h1>
            <a
              className="button button-soft archive-lunor-link"
              href="https://www.lunor.design/library"
              target="_blank"
              rel="noopener noreferrer"
            >
              see more on lunor
            </a>
          </motion.div>

          <div className="archive-grid container">
            {archiveProjects.map((image, index) => (
              <motion.figure
                className="archive-card"
                key={image}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12, margin: "0px 0px 6% 0px" }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease }}
              >
                <img
                  src={`${ASSET_BASE}${image}`}
                  alt={`selected larpo work ${String(index + 1).padStart(2, "0")}`}
                  loading={index < 4 ? "eager" : "lazy"}
                  decoding="async"
                />
              </motion.figure>
            ))}
          </div>
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease }}
      >
        <nav className="nav-shell" aria-label="main navigation">
          <a className="brand-link" href="#top" aria-label="larpo studio home">
            <img src={`${ASSET_BASE}larpo-mark.svg`} alt="" />
          </a>
          <div className="desktop-nav">
            <a href={`${ASSET_BASE}work/`}>work</a>
            <a href="#services">services</a>
            <a href="#pricing">pricing</a>
            <a href="#faq">faq</a>
          </div>
          <a className="nav-cta desktop-cta" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <CalendarDays size={14} strokeWidth={1.9} aria-hidden="true" />
            book a call
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="open navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={18} strokeWidth={1.9} aria-hidden="true" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div className="mobile-menu-top">
              <img src={`${ASSET_BASE}larpo-mark.svg`} alt="" />
              <button type="button" aria-label="close navigation" onClick={() => setOpen(false)}>
                <X size={18} strokeWidth={1.9} aria-hidden="true" />
              </button>
            </div>
            <div className="mobile-menu-links">
              {[
                ["work", `${ASSET_BASE}work/`],
                ["services", "#services"],
                ["pricing", "#pricing"],
                ["faq", "#faq"],
              ].map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
            <div className="mobile-menu-actions">
              <a className="button button-dark" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <CalendarDays size={15} strokeWidth={1.9} aria-hidden="true" />
                book a call
              </a>
              <a className="button button-soft" href={MESSAGE_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={15} strokeWidth={1.9} aria-hidden="true" />
                write us a message
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 8 };

  return (
    <section className="hero" id="top">
      <div className="hero-copy container">
        <motion.div
          className="hero-status"
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span aria-hidden="true" />
          4 project spots open for {currentMonth}
        </motion.div>
        <motion.h1 initial={initial} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, ease }}>
          <span>your brand and website</span>{" "}
          <span>built from zero to launch</span>
        </motion.h1>
        <motion.p
          className="hero-lead"
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, delay: 0.08, ease }}
        >
          for saas and ai teams. bring an existing brand or start with nothing. we handle the strategy, identity, web design, custom code and every final connection
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.54, delay: 0.16, ease }}
        >
          <a className="button button-dark" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <CalendarDays size={15} strokeWidth={1.9} aria-hidden="true" />
            book a call
          </a>
          <a className="button button-soft" href={MESSAGE_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={15} strokeWidth={1.9} aria-hidden="true" />
            write us a message
          </a>
        </motion.div>
      </div>

      <motion.a
        className="work-reel work-reel-link"
        id="work"
        href={`${ASSET_BASE}work/`}
        aria-label="view the full larpo work archive"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.64, delay: 0.24, ease }}
      >
        <div className="work-track">
          <ProjectGroup />
          <ProjectGroup duplicate />
        </div>
      </motion.a>
    </section>
  );
}

function ProjectGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="work-group" aria-hidden={duplicate || undefined}>
      {projects.map((image, index) => (
        <figure className="work-card" key={`${image}-${duplicate ? "copy" : "main"}`}>
          <img
            src={`${ASSET_BASE}${image}`}
            alt={duplicate ? "" : `selected larpo website design ${String(index + 1).padStart(2, "0")}`}
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}

function ClientStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className="client-strip container"
      aria-labelledby="client-strip-title"
      initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(12px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px 5% 0px" }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.62, delay: 0.04, ease }}
    >
      <p id="client-strip-title">trusted by fast-moving teams</p>
      <div className="client-logos">
        {clients.map((client) => (
          <img key={client.name} src={`${ASSET_BASE}${client.image}`} alt={client.name} />
        ))}
        <span className="client-count" aria-label="and more than twenty additional teams">20+</span>
      </div>
    </motion.section>
  );
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <ScrollReveal className="section-heading section-heading-wide">
          <h2>
            <span>from first idea</span>
            <span>to a fully launched website</span>
          </h2>
          <p>
            one team handles the positioning, identity, website, custom code and every final launch connection
          </p>
        </ScrollReveal>
        <ScrollReveal className="service-grid" delay={0.06}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <span className="service-icon" aria-hidden="true">
                  <Icon size={19} strokeWidth={1.7} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const visibleTestimonials = [testimonials[active], testimonials[(active + 1) % testimonials.length]];
  const previous = () => setActive((current) => (current - 2 + testimonials.length) % testimonials.length);
  const next = () => setActive((current) => (current + 2) % testimonials.length);

  return (
    <section className="testimonials section" aria-labelledby="testimonials-title">
      <div className="container">
        <ScrollReveal className="section-heading testimonial-heading">
          <h2 id="testimonials-title">what clients say after launch</h2>
          <div className="testimonial-heading-side">
            <div className="testimonial-navigation">
              <span className="testimonial-progress" aria-live="polite">
                {String(active + 1).padStart(2, "0")}-{String(active + 2).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <div className="testimonial-controls">
                <button type="button" aria-label="previous testimonials" onClick={previous}>
                  <ChevronLeft size={17} strokeWidth={1.8} aria-hidden="true" />
                </button>
                <button type="button" aria-label="next testimonials" onClick={next}>
                  <ChevronRight size={17} strokeWidth={1.8} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="testimonial-grid"
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {visibleTestimonials.map((testimonial) => (
                <blockquote className="testimonial-card" key={testimonial.name}>
                  <p>“{testimonial.quote}”</p>
                  <footer>
                    <div className="testimonial-person">
                      <span className="testimonial-avatar" aria-hidden="true">
                        <img
                          className={testimonial.avatar.includes("sapone-company") ? "testimonial-avatar-sapone" : undefined}
                          src={`${ASSET_BASE}${testimonial.avatar}`}
                          alt=""
                        />
                      </span>
                      <span>
                        <strong>{testimonial.name}</strong>
                        <small>{testimonial.role}</small>
                      </span>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <ScrollReveal className="section-heading pricing-heading">
          <h2 id="pricing-title">
            <span>two clear ways</span>
            <span>to get your website live</span>
          </h2>
          <p>pick the scope that fits. both options include strategy, design, custom code and launch</p>
        </ScrollReveal>
        <ScrollReveal className="pricing-grid" delay={0.06}>
          {offers.map((offer) => (
            <article className={`price-card ${offer.featured ? "price-featured" : ""}`} key={offer.name}>
              <div className="price-topline">
                <h3>{offer.name}</h3>
                <span>{offer.time}</span>
              </div>
              <div className="price-value">
                <small>from</small>
                <strong>{offer.price}</strong>
              </div>
              <p>{offer.description}</p>
              <ul>
                {offer.items.map((item) => {
                  const ItemIcon = item.icon;

                  return (
                    <li key={item.text}>
                      <ItemIcon size={15} strokeWidth={1.8} aria-hidden="true" />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
              <div className="price-actions">
                <a
                  className={`button ${offer.featured ? "button-white" : "button-dark"}`}
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarDays size={15} strokeWidth={1.9} aria-hidden="true" />
                  book a call
                </a>
                <a
                  className={`button ${offer.featured ? "button-dark-soft" : "button-soft"}`}
                  href={MESSAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={15} strokeWidth={1.9} aria-hidden="true" />
                  write us a message
                </a>
              </div>
            </article>
          ))}
        </ScrollReveal>
        <ScrollReveal className="support-strip" delay={0.1}>
          <div className="support-copy">
            <span className="support-icons" aria-hidden="true">
              <Workflow size={16} strokeWidth={1.8} />
            </span>
            <div>
              <strong>grow it after launch</strong>
              <span>add pages, custom bots, workflow automations and integrations as you need them</span>
            </div>
          </div>
          <a className="button button-soft-strong" href={MESSAGE_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={15} strokeWidth={1.9} aria-hidden="true" />
            write us a message
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="faq section" id="faq">
      <ScrollReveal className="container faq-layout">
        <div className="faq-intro">
          <h2>faq</h2>
          <p>have more questions? write to us. we reply immediately</p>
          <a className="button button-soft" href={MESSAGE_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={15} strokeWidth={1.9} aria-hidden="true" />
            write us a message
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div className="faq-item" key={faq.question}>
                <button
                  className="faq-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  {faq.question}
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.01 : 0.18, ease }}
                  >
                    <Plus size={17} strokeWidth={1.8} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      className="faq-answer"
                      id={answerId}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: shouldReduceMotion ? 0.01 : 0.22, ease },
                        opacity: { duration: shouldReduceMotion ? 0.01 : 0.16, ease },
                      }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <ScrollReveal className="container footer-inner">
        <div className="footer-main">
          <div className="footer-copy">
            <img src={`${ASSET_BASE}larpo-compact.svg`} alt="larpo studio" />
            <h2>
              <span>ready to build</span>
              <span>what comes next?</span>
            </h2>
            <p>send us what you have, even if it is only an idea. we will take it from there</p>
          </div>
          <div className="footer-actions">
            <a className="button button-white" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <CalendarDays size={15} strokeWidth={1.9} aria-hidden="true" />
              book a call
            </a>
            <a className="button button-dark-soft" href={MESSAGE_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={15} strokeWidth={1.9} aria-hidden="true" />
              write us a message
            </a>
          </div>
        </div>
        <div className="footer-meta">
          <span>© {currentYear} larpo</span>
          <nav aria-label="social links">
            <a href="https://x.com/augustasdesign">x</a>
            <a href="https://www.linkedin.com/in/augustas-web">linkedin</a>
          </nav>
        </div>
      </ScrollReveal>
    </footer>
  );
}

export default App;
