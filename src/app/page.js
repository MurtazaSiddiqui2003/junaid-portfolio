"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, Plus, Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const projects = [
  { number: "01", type: "TECHNICAL DESIGN", title: "Techpack Development", detail: "A closer look at the details behind production-ready garments.", tag: "PROJECT PLACEHOLDER" },
  { number: "02", type: "FASHION DESIGN", title: "Technical Flats", detail: "Clear front, back, and detail views that communicate construction.", tag: "PROJECT PLACEHOLDER" },
  { number: "03", type: "GRAPHIC DESIGN", title: "Selected Visual Work", detail: "A selection of graphic explorations, layouts, and visual concepts.", tag: "PROJECT PLACEHOLDER" }
];

const expertise = [
  ["01", "Fashion Design", "Concept development, garment understanding, and visual direction."],
  ["02", "Technical Design", "Technical drawings and clear garment construction details."],
  ["03", "Techpack Development", "Organised documentation to help move a design toward production."],
  ["04", "Graphic Design", "Visual communication, layout, and creative design."]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>J<span>.</span>S</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Menu size={22} /></button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[["Expertise", "#expertise"], ["Selected work", "#work"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">LET'S TALK <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-topline"><span>PORTFOLIO / 2026</span><span>KARACHI, PAKISTAN</span></div>
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>FASHION • TECHNICAL • CREATIVE</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>DESIGN<br />WITH <em>DETAIL.</em></motion.h1>
          <div className="hero-bottom">
            <p className="hero-role">SYED JUNAID SHAH<br /><strong>FASHION & TECHNICAL DESIGNER</strong></p>
            <p className="hero-intro">Turning creative concepts into detailed, production-ready designs.</p>
            <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={26} /></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract fashion-inspired graphic">
          <div className="art-circle"></div><div className="art-line line-one"></div><div className="art-line line-two"></div>
          <span className="art-caption">IDEAS INTO<br />REALITY — 001</span><span className="art-index">JS / 26</span>
        </div>
        <div className="hero-footer"><span>INDEPENDENT THINKING. PRECISE EXECUTION.</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro-strip">
        <p>FROM FIRST CONCEPT</p><span>✳</span><p>TO FINAL CONSTRUCTION.</p>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="section-heading"><p className="eyebrow">01 / WHAT I DO</p><h2>CREATIVE VISION.<br /><em>TECHNICAL PRECISION.</em></h2></div>
        <div className="expertise-list">
          {expertise.map(([n, title, desc]) => <div className="expertise-row" key={n}><span className="row-number">{n}</span><h3>{title}</h3><p>{desc}</p><Plus className="plus-icon" size={20} /></div>)}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section work-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>MADE TO<br /><em>MAKE AN IMPACT.</em></h2></div><p className="work-note">A focused selection of fashion, technical, and visual design work. Project previews will be added as approved portfolio assets are collected.</p></div>
        <div className="project-grid">
          {projects.map((project, i) => <article className="project-card" key={project.number}>
            <div className={"project-visual visual-" + i}><span className="visual-mark">{project.number}</span><span className="visual-label">{project.tag}</span>{i === 0 ? <div className="tech-sheet"><div></div><div></div><div></div><small>TECHNICAL<br />SPECIFICATION</small></div> : i === 1 ? <div className="garment-outline"><div className="garment-neck"></div></div> : <div className="graphic-type">FORM<br /><i>×</i><br />FUNCTION</div>}</div>
            <div className="project-meta"><span>{project.type}</span><span>{project.number} / 03</span></div><h3>{project.title}</h3><p>{project.detail}</p>
          </article>)}
        </div>
      </section>

      <section className="about-section section" id="about">
        <div className="about-label"><p className="eyebrow">03 / THE DESIGNER</p><span>ABOUT J.S. ↘</span></div>
        <div className="about-content"><h2>DETAILS<br />MAKE THE<br /><em>DIFFERENCE.</em></h2><div className="about-copy"><p className="about-lead">I’m Syed Junaid Shah, a fashion and technical designer focused on bringing ideas to life through thoughtful design and clear technical communication.</p><p>This portfolio is a growing collection of my work across fashion design, techpack development, technical drawings, and graphic design.</p><div className="software-block"><span>TOOLS & SOFTWARE</span><p>Adobe Illustrator · Photoshop · CorelDRAW · FreeHand · Wilcom</p><small>Software list to be confirmed and expanded.</small></div></div></div>
        <div className="about-bottom"><span>CURIOUS BY NATURE.</span><span>PRECISE BY DESIGN.</span></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-top"><p className="eyebrow">04 / GET IN TOUCH</p><span>OPEN TO OPPORTUNITIES & COLLABORATION</span></div><h2>HAVE A PROJECT<br />IN <em>MIND?</em></h2><p className="contact-copy">For fashion, technical design, and creative opportunities — let's start a conversation.</p><div className="contact-bottom"><p>CONTACT DETAILS<br /><strong>TO BE ADDED</strong></p><a className="contact-arrow" href="mailto:" aria-label="Email contact"><ArrowUpRight size={34} /></a></div></section>

      <footer className="footer" id="footer"><a className="brand footer-brand" href="#top">J<span>.</span>S</a><p>SYED JUNAID SHAH<br />FASHION & TECHNICAL DESIGNER</p><span>© 2026 — PORTFOLIO</span><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
