"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu, X, MoveUpRight } from "lucide-react";
import { useState } from "react";

const nav = [["Expertise", "#expertise"], ["Selected work", "#work"], ["About", "#about"], ["Contact", "#contact"]];

const services = [
  ["01", "TECHPACK DEVELOPMENT", "Production-ready documentation, organised specifications and clear communication from concept to factory."],
  ["02", "TECHNICAL DESIGN", "Accurate garment flats, construction callouts and detail drawings that leave less room for guesswork."],
  ["03", "FASHION DESIGN", "Translating creative direction into considered silhouettes, details and wearable product ideas."],
  ["04", "GRAPHIC DESIGN", "Visual identities and graphic compositions with a strong sense of hierarchy, form and purpose."]
];

const work = [
  { id: "01", name: "THE TECHPACK", kind: "TECHNICAL DESIGN", note: "From concept to production documentation", cls: "work-tech" },
  { id: "02", name: "FORM STUDY", kind: "TECHNICAL FLATS", note: "Garment construction, line and proportion", cls: "work-flat" },
  { id: "03", name: "VISUAL LANGUAGE", kind: "GRAPHIC DESIGN", note: "Selected graphic explorations and layouts", cls: "work-graphic" }
];

function GarmentDrawing() {
  return <svg className="garment-drawing" viewBox="0 0 360 420" role="img" aria-label="Original technical line drawing of a garment">
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M116 52 151 34 180 53 209 34 244 52 300 100 268 148 241 126 250 365 110 365 119 126 92 148 60 100Z"/>
      <path d="m151 34 29 19 29-19M151 34l-4 52 33 24 33-24-4-52M147 86l-28 40m94-40 28 40M180 110v255M120 126l-1 239m122-239 1 239M133 174h94M133 188h94M133 202h94"/>
      <path d="M147 86 180 110 213 86M147 86l-13 88m79-88 13 88"/>
      <path d="M135 365v-14m90 14v-14"/>
    </g>
    <g fill="none" stroke="currentColor" strokeWidth=".7" strokeDasharray="3 4" opacity=".6"><path d="M180 16v380M35 210h290"/></g>
    <g fill="currentColor" fontSize="8" fontFamily="monospace"><text x="18" y="24">FRONT VIEW / 01</text><text x="250" y="395">JS—TD</text><text x="14" y="220">FIG. A</text></g>
  </svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>J<span>/</span>S</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}</nav>
        <a className="header-contact" href="#contact">AVAILABLE FOR WORK <MoveUpRight size={14} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-meta"><span>PORTFOLIO — 2026</span><span>KARACHI, PAKISTAN</span></div>
        <div className="hero-layout">
          <div className="hero-copy">
            <motion.p className="kicker" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.5}}>FASHION / TECHNICAL / CREATIVE</motion.p>
            <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}}>DESIGN<br/>THAT<br/><em>DELIVERS.</em></motion.h1>
            <div className="hero-bottomline"><p className="hero-name">SYED JUNAID SHAH<br/><b>FASHION & TECHNICAL DESIGNER</b></p><a className="scroll-cue" href="#expertise">SCROLL TO EXPLORE <ArrowDown size={15}/></a></div>
          </div>
          <motion.div className="hero-visual" initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.2}}>
            <div className="visual-top"><span>FIG. 001</span><span>DESIGN / DEVELOPMENT</span></div>
            <div className="visual-paper"><div className="paper-grid"></div><GarmentDrawing/><span className="paper-stamp">CUT<br/>WITH<br/>PURPOSE.</span></div>
            <div className="visual-bottom"><span>IDEA → DETAIL → PRODUCT</span><span>01—04</span></div>
          </motion.div>
        </div>
        <div className="hero-foot"><span>CREATIVE VISION.</span><span>TECHNICAL PRECISION.</span><span>BUILT FOR THE REAL WORLD.</span></div>
      </section>

      <div className="statement-band"><span>GOOD DESIGN IS IN THE DETAILS</span><b>✳</b><span>FROM FIRST SKETCH TO FINAL SPEC</span></div>

      <section className="expertise section-pad" id="expertise">
        <div className="section-intro"><p className="kicker">01 / EXPERTISE</p><h2>CREATIVE<br/><em>THINKING.</em><br/>CLEAR MAKING.</h2></div>
        <div className="service-list">{services.map(([n,title,desc])=><article className="service-row" key={n}><span className="service-no">{n}</span><div><h3>{title}</h3><p>{desc}</p></div><MoveUpRight className="service-arrow" size={22}/></article>)}</div>
      </section>

      <section className="selected-work" id="work">
        <div className="work-head"><div><p className="kicker">02 / SELECTED WORK</p><h2>MADE WITH<br/><em>INTENTION.</em></h2></div><p className="work-description">A considered selection of technical, fashion and graphic design. Detailed project work will be featured here as portfolio materials are approved.</p></div>
        <div className="work-grid">{work.map((item)=><article className="work-card" key={item.id}>
          <div className={"work-art "+item.cls}><span className="art-number">{item.id} / 03</span>{item.cls==="work-tech" ? <div className="mini-tech"><div className="mini-tech-head">TECHNICAL SPECIFICATION <span>01</span></div><GarmentDrawing/><div className="spec-lines"><i/><i/><i/><i/></div></div> : item.cls==="work-flat" ? <><div className="flat-label">GARMENT STUDY / A</div><GarmentDrawing/><span className="flat-side-note">FRONT<br/>ELEVATION</span></> : <div className="graphic-composition"><span>FORM</span><i>×</i><span>FUNCTION</span><small>VISUAL STUDY — 003</small></div>}<span className="art-caption">PROJECT PREVIEW</span></div>
          <div className="work-meta"><span>{item.kind}</span><span>{item.id}</span></div><h3>{item.name}</h3><p>{item.note}</p>
        </article>)}</div>
        <p className="work-disclaimer">PROJECT PREVIEWS ARE PLACEHOLDERS — ORIGINAL WORK WILL REPLACE THESE STUDIES.</p>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-top"><p className="kicker">03 / THE DESIGNER</p><span>BASED IN KARACHI, PAKISTAN</span></div>
        <div className="about-grid"><h2>THE<br/>THOUGHT<br/>BEHIND THE<br/><em>DETAIL.</em></h2><div className="about-text"><p className="about-lead">I’m Syed Junaid Shah — a fashion and technical designer focused on turning creative ideas into clear, considered and production-ready design.</p><p>My work brings together an understanding of garment design, technical documentation and visual communication. I care about the small decisions that help a product move from a concept on screen to something made in the real world.</p><div className="toolkit"><span>TOOLS OF THE TRADE</span><div>ILLUSTRATOR <i> / </i> PHOTOSHOP <i> / </i> CORELDRAW <i> / </i> FREEHAND <i> / </i> WILCOM</div></div></div></div>
        <div className="about-bottom"><span>CURIOUS BY NATURE.</span><span>PRECISE BY DESIGN.</span><span>ALWAYS LEARNING.</span></div>
      </section>

      <section className="contact" id="contact"><div className="contact-top"><p className="kicker">04 / START A CONVERSATION</p><span>WORK / COLLABORATION / OPPORTUNITIES</span></div><h2>LET’S MAKE<br/><em>IT MATTER.</em></h2><div className="contact-bottom"><p>Have a role, project or idea in mind?<br/>I’d be glad to hear about it.</p><a href="mailto:" aria-label="Email Junaid">GET IN TOUCH <ArrowUpRight size={20}/></a></div></section>
      <footer className="footer"><a className="wordmark" href="#top">J<span>/</span>S</a><p>SYED JUNAID SHAH<br/>FASHION & TECHNICAL DESIGNER</p><span>© 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
