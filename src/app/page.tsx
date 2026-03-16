"use client";
import { useState } from "react";
import Image from "next/image";

/* ── NAV ── */
const NAV_LINKS = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Services",  href: "#services" },
  { label: "Reviews",   href: "#reviews" },
  { label: "FAQ",       href: "#faq" },
  { label: "Contact",   href: "#contact" },
];

/* ── CARRIERS / INSURANCE ── */
const CARRIERS = [
  { name: "Daman", logo: "/Daman.png" },
  { name: "MetLife", logo: "/Metlife.png" },
  { name: "AXA / GIG", logo: "/axa.png" },
  { name: "Allianz", logo: "/allianz.png" },
  { name: "Neuron", logo: "/neuron.png" },
];

/* ── SERVICES ── */
const SERVICES = [
  {
    icon: "💎",
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with our premium aesthetic treatments, from veneers to professional whitening. We specialize in natural-looking, radiant results.",
    items: ["Porcelain Veneers", "Teeth Whitening", "Hollywood Smile", "Bonding"],
  },
  {
    icon: "😬",
    title: "Orthodontics",
    desc: "Achieve the perfect alignment with modern orthodontic solutions for all ages. Discreet and effective treatments tailored to you.",
    items: ["Invisalign® Platinum", "Clear Braces", "Lingual Braces", "Early Orthodontics"],
  },
  {
    icon: "🦷",
    title: "Dental Implants",
    desc: "Restore function and confidence with world-class implantology. Permanent, natural-feeling solutions for missing teeth.",
    items: ["Single Tooth Implants", "All-on-4 / All-on-6", "Bone Grafting", "Digital Planning"],
  },
  {
    icon: "👨‍⚕️",
    title: "General Dentistry",
    desc: "Maintain peak oral health with comprehensive preventive care and restorative treatments in a relaxing environment.",
    items: ["Deep Cleaning", "Root Canal Therapy", "Composite Fillings", "Emergency Care"],
  },
];

/* ── REVIEWS ── */
const REVIEWS = [
  {
    name: "Aisha R.",
    location: "Downtown Dubai",
    stars: 5,
    text: "The best dental experience I've had in Dubai. The doctors are incredibly skilled and the clinic feels more like a spa. My veneers look amazing and completely natural!",
    avatar: "SA",
  },
  {
    name: "Ahmed M.",
    location: "Jumeirah",
    stars: 5,
    text: "Finally found a dentist I can trust with my Invisalign treatment. They explained everything clearly and the digital scanning was so much better than the old molds.",
    avatar: "AM",
  },
  {
    name: "John & Elena D.",
    location: "Dubai Marina",
    stars: 5,
    text: "Professional, clean, and very welcoming. We take our whole family here for checkups. They are excellent with kids and always on time with appointments.",
    avatar: "JD",
  },
  {
    name: "Layla K.",
    location: "Abu Dhabi",
    stars: 5,
    text: "Traveled from Abu Dhabi for an implant procedure and it was worth it. The surgical team is top-notch and the recovery was much faster than I expected.",
    avatar: "LK",
  },
  {
    name: "Karim S.",
    location: "Business Bay",
    stars: 5,
    text: "Great whitening results in just one session. The staff is very friendly and the clinic uses the latest technology. Highly recommend for any cosmetic work.",
    avatar: "KS",
  },
  {
    name: "Mariam F.",
    location: "Al Barsha",
    stars: 5,
    text: "I used to be terrified of dentists, but the team here made me feel so comfortable. The painless root canal was a miracle. Best clinic in the UAE!",
    avatar: "MF",
  },
];

/* ── FAQs ── */
const FAQS = [
  {
    q: "Do you accept international insurance plans?",
    a: "Yes, we work with all major UAE and international insurance providers including Daman, AXA, MetLife, and Bupa. We offer direct billing for most covered procedures to make your visit hassle-free.",
  },
  {
    q: "How long does a Smile Makeover take?",
    a: "A full Smile Makeover timeline depends on the treatments chosen. Veneers typically require 2-3 visits over two weeks, while whitening can be done in a single session. We'll provide a detailed timeline during your consultation.",
  },
  {
    q: "Is cosmetic dentistry painful?",
    a: "Not at all. We use advanced anesthetic techniques and minimally invasive procedures to ensure total comfort. For nervous patients, we also offer sedation options to ensure a stress-free experience.",
  },
  {
    q: "Can I see a preview of my new smile before treatment?",
    a: "Absolutely! We use Digital Smile Design (DSD) technology to create a 3D preview of your results, allowing you to see and approve your new look before we even begin.",
  },
  {
    q: "Are dental implants better than bridges?",
    a: "Implants are often considered the gold standard as they don't require altering adjacent teeth and help prevent bone loss. However, the best choice depends on your specific oral health and goals.",
  },
  {
    q: "How often should I visit for a professional cleaning?",
    a: "We generally recommend a professional cleaning and checkup every 6 months to maintain optimal oral health and catch any potential issues early.",
  },
];

/* ── HELPERS ── */
function Stars({ count }: { count: number }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F5A623">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleContact(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="site">

      {/* ══ TOP BAR ══ */}
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Elite Dental Clinic · Premium Care in Dubai</span>
          <a href="tel:+97141234567" className="topbar__phone">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.56 21 3 13.44 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" /></svg>
            +971 4 123 4567
          </a>
        </div>
      </div>

      {/* ══ HEADER / NAV ══ */}
      <header className="header" id="home">
        <div className="container header__inner">
          <a href="#home" className="brand">
            <div>
              <span className="brand__name">Elite Dental</span>
              <span className="brand__by">Clinic Dubai</span>
            </div>
          </a>

          <nav className="nav desktop-nav">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
            ))}
          </nav>

          <a href="#contact" className="btn btn--primary header__cta">Book Appointment</a>

          <button className="burger" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
            }
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="mobile-nav__link" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="#contact" className="btn btn--primary mobile-nav__cta" onClick={() => setMenuOpen(false)}>Book Appointment</a>
          </nav>
        )}
      </header>

      <main>
        {/* ══ HERO ══ */}
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
            <div className="hero__pill">✨ World-Class Dentistry · Dubai, UAE</div>
              <h1 className="hero__h1">
                Your Perfect Smile<br />
                <span className="hero__h1-grad">Starts Here.</span>
              </h1>
              <p className="hero__sub">
                At Elite Dental Clinic, we combine expert artistry with cutting-edge 
                technology to deliver premium dental care. We
                specialize in transformations that feel as good as they look.
              </p>
              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">Book Free Consultation</a>
                <a href="#about" className="btn btn--outline-light btn--lg">Our Services</a>
              </div>
              <div className="hero__proof">
                <div className="hero__proof-item">
                  <strong>15+</strong><span>Years Experience</span>
                </div>
                <div className="hero__proof-divider" />
                <div className="hero__proof-item">
                  <strong>10k+</strong><span>Happy Patients</span>
                </div>
                <div className="hero__proof-divider" />
                <div className="hero__proof-item">
                  <strong>Premium</strong><span>UAE Clinic</span>
                </div>
              </div>
            </div>

            {/* Lead intake card */}
            <div className="lead-card">
              <div className="lead-card__head">
                <div className="lead-card__avatar">
                  <Image src="/dental5.jpg" alt="Clinic Icon" width={40} height={40} />
                </div>
                <div>
                  <p className="lead-card__hi">Expert Dental Care 👋</p>
                  <p className="lead-card__tagline">Let&apos;s achieve your dream smile</p>
                </div>
              </div>
              <form className="lead-form" onSubmit={handleContact}>
                <div className="lead-form__group">
                  <label htmlFor="lf-name">Your Name</label>
                  <input id="lf-name" name="name" type="text" placeholder="First & Last Name" required onChange={handleChange} />
                </div>
                <div className="lead-form__group">
                  <label htmlFor="lf-phone">Phone Number</label>
                  <input id="lf-phone" name="phone" type="tel" placeholder="+971 00 000 0000" required onChange={handleChange} />
                </div>
                <div className="lead-form__group">
                  <label htmlFor="lf-type">Service I&apos;m Interested In</label>
                  <select id="lf-type" name="type" onChange={handleChange} defaultValue="">
                    <option value="" disabled>Select treatment…</option>
                    <option>Cosmetic Consultation</option>
                    <option>Orthodontics / Invisalign</option>
                    <option>Dental Implants</option>
                    <option>General Checkup</option>
                    <option>I have an Emergency</option>
                  </select>
                </div>
                <button type="submit" className="btn btn--primary lead-form__submit">
                  Book My Free Consultation →
                </button>
                <p className="lead-form__note">Quick response. We&apos;ll call you to confirm.</p>
              </form>
            </div>
          </div>

          <div className="hero__wave">
            <svg viewBox="0 0 1440 70" preserveAspectRatio="none" fill="white">
              <path d="M0,40 C400,80 1040,0 1440,40 L1440,70 L0,70 Z" />
            </svg>
          </div>
        </section>

        {/* ══ CARRIERS ══ */}
        <section className="carriers">
          <div className="container">
            <p className="carriers__label">Insurances We Accept</p>
          </div>
          <div className="carriers__carousel">
            <div className="carriers__track">
              {/* Multiplying to ensure infinite feel */}
              {[...CARRIERS, ...CARRIERS, ...CARRIERS, ...CARRIERS].map((c, i) => (
                <div key={`${c.name}-${i}`} className="carrier-logo">
                  <Image 
                    src={c.logo} 
                    alt={c.name} 
                    width={140} 
                    height={60} 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section className="about" id="about">
          <div className="container about__inner">
            <div className="about__photo">
              <div className="about__photo-frame">
                <Image 
                  src="/dental2.jpg" 
                  alt="Elite Dental Clinic Interior" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="about__photo-img"
                />
              </div>
              <div className="about__card-float">
                <div className="about__card-float-icon">⭐</div>
                <div>
                  <strong>5.0 Rating</strong>
                  <p>Based on 80+ client reviews</p>
                </div>
              </div>
            </div>

            <div className="about__copy">
              <p className="section-eye">Elite Care</p>
              <h2 className="section-h2">Your health.<br />Your masterpiece.</h2>
              <p>
                I founded Elite Dental Clinic with a simple mission: to provide the highest 
                standard of dental care in a setting that feels professional, clinical, 
                and yet completely relaxing.
              </p>
              <p>
                With over 15 years of experience in aesthetic and restorative dentistry, 
                I believe that every patient deserves a personalized approach. We don&apos;t 
                just treat teeth; we care for people.
              </p>
              <p>
                Whether you&apos;re visiting us for a complex smile makeover or a routine 
                checkup, you can expect the same level of care, transparency, and clinical excellence.
              </p>
              <div className="about__highlights">
                <div className="about__hl">
                  <span className="about__hl-icon">✓</span>
                  State-of-the-Art Technology
                </div>
                <div className="about__hl">
                  <span className="about__hl-icon">✓</span>
                  Direct Insurance Billing
                </div>
                <div className="about__hl">
                  <span className="about__hl-icon">✓</span>
                  Personalized Care Plans
                </div>
                <div className="about__hl">
                  <span className="about__hl-icon">✓</span>
                  Painless Modern Procedures
                </div>
              </div>
              <a href="#contact" className="btn btn--primary btn--lg">Book a Consultation</a>
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section className="services" id="services">
          <div className="container">
            <div className="section-header">
              <p className="section-eye">Our Expertise</p>
              <h2 className="section-h2">Full-spectrum dental care, one clinic</h2>
              <p className="section-sub">
                From routine checkups to complex aesthetic restorations — we provide 
                comprehensive dental solutions under one roof with expert specialists.
              </p>
            </div>
            <div className="services__grid">
              {SERVICES.map((s) => (
                <div key={s.title} className="service-card">
                  <div className="service-card__icon">{s.icon}</div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <ul className="service-card__list">
                    {s.items.map((item) => (
                      <li key={item}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#10b981"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="service-card__cta">Book Appointment →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SOCIAL PROOF BAND ══ */}
        <section className="proof-band">
          <div className="container proof-band__inner">
            <div className="proof-band__stat">
              <strong>$300+</strong>
              <span>avg monthly savings per client</span>
            </div>
            <div className="proof-band__div" />
            <div className="proof-band__stat">
              <strong>80+</strong>
              <span>five-star reviews</span>
            </div>
            <div className="proof-band__div" />
            <div className="proof-band__stat">
              <strong>8+</strong>
              <span>major carriers compared</span>
            </div>
            <div className="proof-band__div" />
            <div className="proof-band__stat">
              <strong>Same Day</strong>
              <span>quotes available</span>
            </div>
          </div>
        </section>

        {/* ══ REVIEWS ══ */}
        <section className="reviews" id="reviews">
          <div className="container">
            <div className="section-header">
              <p className="section-eye">Client Stories</p>
              <h2 className="section-h2">Real people. Real results.</h2>
              <p className="section-sub">
                Don&apos;t just take my word for it. Here&apos;s what my clients have to say.
              </p>
            </div>
            <div className="reviews__grid">
              {REVIEWS.map((r) => (
                <div key={r.name} className="review-card">
                  <Stars count={r.stars} />
                  <blockquote className="review-card__text">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <div className="review-card__author">
                    <div className="review-card__avatar">{r.avatar}</div>
                    <div>
                      <strong>{r.name}</strong>
                      <span>{r.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="faq" id="faq">
          <div className="container faq__inner">
            <div className="section-header">
              <p className="section-eye">FAQ</p>
              <h2 className="section-h2">Common questions</h2>
              <p className="section-sub">Everything you need to know before we talk.</p>
            </div>
            <div className="faq__list">
              {FAQS.map((item, i) => (
                <div
                  key={i}
                  className={`faq__item${openFaq === i ? " faq__item--open" : ""}`}
                >
                  <button
                    className="faq__q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{item.q}</span>
                    <svg className="faq__chevron" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                  </button>
                  {openFaq === i && <p className="faq__a">{item.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CONTACT ══ */}
        <section className="contact" id="contact">
          <div className="container contact__inner">
            <div className="contact__copy">
              <p className="section-eye section-eye--light">Get in touch</p>
              <h2 className="section-h2 section-h2--light">
                Let&apos;s find your<br />perfect plan.
              </h2>
              <p className="contact__sub">
                Fill out the form and I&apos;ll reach out within 24 hours for a free, no-pressure
                consultation. Rather talk now?
              </p>
              <a href="tel:+97141234567" className="contact__phone-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.56 21 3 13.44 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" /></svg>
                +971 4 123 4567
              </a>
              <div className="contact__socials">
                <a href="#" className="contact__social-btn" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                </a>
                <a href="#" className="contact__social-btn" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" /></svg>
                </a>
              </div>
            </div>

            <div className="contact__form-wrap">
              {submitted ? (
                <div className="contact__success">
                  <div className="contact__success-icon">🎉</div>
                  <h3>Received! We&apos;ll be in touch soon.</h3>
                  <p>
                    Thank you for reaching out to Elite Dental. Our team will contact 
                    you shortly to confirm your consultation details. We look 
                    forward to meeting you!
                  </p>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleContact}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input name="first" type="text" placeholder="John" required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input name="last" type="text" placeholder="Smith" required onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" placeholder="john@email.com" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" type="tel" placeholder="+971 00 000 0000" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Treatment I&apos;m interested in</label>
                    <select name="type" onChange={handleChange} defaultValue="">
                      <option value="" disabled>Select treatment type…</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Orthodontics / Invisalign</option>
                      <option>Dental Implants</option>
                      <option>General Checkup</option>
                      <option>Emergency Care</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Anything else? (optional)</label>
                    <textarea name="message" rows={3} placeholder="Tell me a bit about your situation…" onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn--primary form-submit">
                    Send My Request →
                  </button>
                  <p className="form-note">100% free. No obligation. No spam.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ══ FOOTER ══ */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <a href="#home" className="brand brand--light">
              <div>
                <span className="brand__name">Elite Dental</span>
                <span className="brand__by">Clinic Dubai</span>
              </div>
            </a>
            <p className="footer__tagline">
              Premium dental care in the heart of Dubai. Combining clinical 
              expertise with world-class artistry for your perfect smile.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer-col">
              <h4>Pages</h4>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </div>
            <div className="footer-col">
              <h4>Treatments</h4>
              <a href="#services">Cosmetic Dentistry</a>
              <a href="#services">Orthodontics</a>
              <a href="#services">Dental Implants</a>
              <a href="#services">General Dentistry</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="tel:+97141234567">+971 4 123 4567</a>
              <a href="mailto:hello@elitedentaldubai.com">hello@elite<br />dentaldubai.com</a>
              <span>Mon–Sat · 9am–9pm</span>
            </div>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>© {new Date().getFullYear()} Elite Dental Clinic Dubai. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Licensing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
