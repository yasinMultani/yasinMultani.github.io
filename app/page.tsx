'use client';

import { useEffect, useState } from 'react';

const experience = [
  {
    date: 'Oct 2024 — Sep 2026',
    role: 'Solution Architect',
    company: 'Multidots Inc.',
    meta: 'Architecture · Technical Leadership · Solution Design · AI-Assisted Engineering',
    text: 'Collaborate with cross-functional teams to understand business and technical requirements, define scalable solution architectures, and contribute to technical design and architecture decisions.'
  },
  {
    date: 'Nov 2022 — Jul 2024',
    role: 'Sr. Software Engineer – iOS',
    company: 'Vagaro Technologies',
    meta: 'Objective-C · Swift · SwiftUI · Product Development · US / Canada / UK',
    text: 'Developed features supporting appointment booking, payments, notifications, customer management and business workflows. Integrated REST APIs, backend services and third-party SDKs, while handling debugging, crash analysis and release troubleshooting.'
  },
  {
    date: 'Feb 2021 — Oct 2022',
    role: 'iOS Application Developer',
    company: 'Coalesce Tech Solutions → HorseTech Analytics',
    meta: 'Swift · UIKit · MVC · REST APIs · Alamofire · Dubai Product',
    text: 'Continued development of the same product following the company acquisition. Contributed to architecture discussions, frontend leadership, offer-management workflows, API integration, Firebase, releases and troubleshooting.'
  },
  {
    date: 'Feb 2020 — Oct 2021',
    role: 'Independent iOS Developer / Freelancer',
    company: 'Independent',
    meta: 'iOS Development · Client Delivery · App Store',
    text: 'Developed a product-listing application integrating product information from Walmart and eBay, maintained a meditation application, and managed development through App Store publication for an American client.'
  },
  {
    date: 'Dec 2013 — Feb 2020',
    role: 'iOS Developer',
    company: 'Multidots Solution Pvt. Ltd.',
    meta: 'Swift · Objective-C · UIKit · REST APIs · Core Data · SQLite',
    text: 'Delivered iOS applications for multiple international clients across business domains, working directly with clients on requirements, technical solutions, application development, releases and delivery.'
  }
];

const expertise = [
  ['iOS Engineering', 'Swift · Objective-C · UIKit · SwiftUI · Auto Layout'],
  ['Architecture', 'MVC · MVVM · Clean Architecture · Modular Architecture , Dependency Injection · SOLID Principles'],
  ['Networking', 'REST APIs · URLSession · Alamofire · Third Party SDK Integration'],
  ['Data & Concurrency', 'Core Data · SQLite · async/await · Swift Concurrency · GCD · Combine'],
  ['Apple Platform', 'APNs · StoreKit · App Store Connect · TestFlight · Universal Links - Deep Linking'],
  ['Engineering', 'Debugging · Performance · Crash Analysis · Release Management']
];

const projects = [
  ['What to Wear Today', 'Swift · Core Data · Local Notifications · AI-Assisted Development', 'Independent iOS application with logic-based daily outfit recommendations.'],
  ['Vagaro iOS Ecosystem', 'Objective-C · Swift · SwiftUI · REST APIs', 'Multi-application salon and business management ecosystem serving international markets.'],
  ['Car Auction Platform', 'iOS · International Client · Canada', 'Selected professional product experience focused on automotive auction workflows.'],
  ['Music Feed Application', 'iOS · Music Integration', 'Application functionality involving synchronization of iPhone music with the app and its music-feed experience.'],
  ['BLE Application', 'iOS · Bluetooth Low Energy', 'Selected professional work involving Bluetooth Low Energy functionality and iOS integration.'],
  ['Selfie TV', 'iOS · Social / Video', 'Selected professional work with a short-form social/video experience.']
];


const VectorIcon = ({ type, className = '' }: { type: 'apple' | 'xcode' | 'code' | 'phone' | 'bluetooth' | 'music'; className?: string }) => {
  const common = { viewBox: '0 0 64 64', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };
  if (type === 'apple') return <svg {...common} className={className} aria-hidden="true"><path d="M40.7 33.2c0-5.1 4.2-7.6 4.4-7.7-2.4-3.5-6.1-4-7.4-4.1-3.1-.3-6.1 1.9-7.7 1.9-1.6 0-4.1-1.9-6.8-1.9-3.5.1-6.8 2.1-8.6 5.3-3.7 6.4-.9 15.9 2.6 21.1 1.8 2.5 3.8 5.3 6.5 5.2 2.6-.1 3.6-1.7 6.8-1.7 3.2 0 4.1 1.7 6.8 1.6 2.8 0 4.5-2.5 6.3-5.1 2-2.9 2.8-5.8 2.9-6-.1 0-5.7-2.2-5.8-8.6Z" fill="currentColor"/><path d="M35.5 18.1c1.4-1.7 2.3-4.1 2-6.4-2.1.1-4.6 1.4-6.1 3.1-1.3 1.5-2.4 3.9-2.1 6.1 2.3.2 4.7-1.1 6.2-2.8Z" fill="currentColor"/></svg>;
  if (type === 'xcode') return <svg {...common} className={className} aria-hidden="true"><path d="M14 15 49 50M49 15 14 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/><path d="M22 8h20a8 8 0 0 1 8 8v32a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8V16a8 8 0 0 1 8-8Z" stroke="currentColor" strokeWidth="2" opacity=".45"/><circle cx="14" cy="15" r="4" fill="currentColor"/><circle cx="50" cy="15" r="4" fill="currentColor"/><circle cx="14" cy="50" r="4" fill="currentColor"/><circle cx="50" cy="50" r="4" fill="currentColor"/></svg>;
  if (type === 'code') return <svg {...common} className={className} aria-hidden="true"><path d="m25 17-17 15 17 15M39 17l17 15-17 15M35 10 29 54" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 8h50" stroke="currentColor" strokeWidth="1.5" opacity=".35"/></svg>;
  if (type === 'phone') return <svg {...common} className={className} aria-hidden="true"><rect x="17" y="6" width="30" height="52" rx="7" stroke="currentColor" strokeWidth="2.5"/><path d="M27 11h10M25 49h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="32" cy="45" r="2" fill="currentColor"/></svg>;
  if (type === 'bluetooth') return <svg {...common} className={className} aria-hidden="true"><path d="M32 7v50M32 7l14 13-28 24M32 31l14 13-14 13M18 20l28 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  return <svg {...common} className={className} aria-hidden="true"><path d="M15 42c5-6 10-7 15-2 5 5 10 4 19-7M15 25c5 6 10 7 15 2 5-5 10-4 19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><circle cx="15" cy="42" r="4" fill="currentColor"/><circle cx="49" cy="33" r="4" fill="currentColor"/></svg>;
};

const projectIcons: Array<'phone' | 'code' | 'apple' | 'music' | 'bluetooth' | 'code'> = ['phone', 'apple', 'code', 'music', 'bluetooth', 'code'];

export default function Home() {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const cursor = document.querySelector<HTMLDivElement>('.cursor-glow');
    const onPointerMove = (event: PointerEvent) => {
      if (!cursor) return;
      cursor.style.transform = `translate3d(${event.clientX - 190}px, ${event.clientY - 190}px, 0)`;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const ids = ['top','about','expertise','architecture','experience','work','philosophy','ai','contact'];
    const onScroll = () => {
      let current = 'top';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  const nav = [['about','About'],['expertise','Expertise'],['architecture','Architecture'],['experience','Experience'],['work','Work'],['contact','Contact']];

  return (
    <main>
      <div className="vector-field" aria-hidden="true">
        <VectorIcon type="apple" className="bg-vector vector-apple" />
        <VectorIcon type="xcode" className="bg-vector vector-xcode" />
        <VectorIcon type="code" className="bg-vector vector-code" />
        <VectorIcon type="phone" className="bg-vector vector-phone" />
        <VectorIcon type="bluetooth" className="bg-vector vector-ble" />
        <span className="code-rain code-rain-one">{`{ SwiftUI }`}</span>
        <span className="code-rain code-rain-two">&lt;View /&gt;</span>
        <span className="code-rain code-rain-three">async / await</span>
      </div>
      <div className="cursor-glow" aria-hidden="true" />
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top"><span>YASIN MULTANI.</span></a>
          <div className="navlinks">
            {nav.map(([id,label]) => <a key={id} className={active===id?'active':''} href={`#${id}`}>{label}</a>)}
          </div>
          <a className="nav-cta" href="mailto:multani.yasin@gmail.com">Let's talk ↗</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">NATIVE iOS · SWIFT · SWIFT UI · Objective C</p>
          <h1>Yasin Multani</h1>
          <h2>Senior iOS Engineer</h2>
          <p className="lead">I build scalable, high-performance native iOS applications using Swift, SwiftUI, UIKit and Objective-C, with 9+ years of hands-on engineering experience across product development, architecture, APIs, debugging and release operations.</p>
          <div className="actions">
            <a className="button primary" href="#work">View my work <span>→</span></a>
            <a className="button ghost" href="/Yasin_Multani_Senior_iOS_Developer_Resume.pdf" download>Download resume <span>↓</span></a>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/yasin-multani-940b0165/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            {/* <a href="https://github.com/yasinMultani" target="_blank" rel="noreferrer">GitHub ↗</a> */}
            <a href="mailto:multani.yasin@gmail.com">Email ↗</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-glow"></div>
          <div className="tech-badge badge-swift"><b>Swift</b></div>
          <div className="tech-badge badge-swiftui"><b>SwiftUI</b><small>Declarative UI</small></div>
          <div className="tech-badge badge-apple"><b>Apple</b></div>
          <div className="tech-badge badge-xcode"><b>Xcode</b><small>iOS 27</small></div>
          <div className="tech-badge badge-api"><b>API</b></div>

          <div className="iphone-wrap">
            <div className="iphone">
              <div className="iphone-screen">
                <div className="dynamic-island"></div>
                <div className="screen-status"><span>9:41</span><span>● ●</span></div>
                <div className="profile-ui">
                  <div className="profile-photo"><img src="/profile.png" alt="Yasin Multani profile" /></div>
                  <div className="profile-shimmer title"></div>
                  <div className="profile-shimmer line"></div>
                  <div className="profile-shimmer short"></div>
                  <div className="profile-grid">
                    <div className="profile-stat"><span></span><i></i></div>
                    <div className="profile-stat"><span></span><i></i></div>
                  </div>
                  <div className="profile-panel"><span></span><span></span><span></span></div>
                  <div className="profile-panel small-panel"><span></span><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section narrow reveal">
        <p className="section-no">01 / ABOUT</p>
        <div className="two-col">
          <div className="section-heading"><h3>Engineering with<br/><span>depth and purpose.</span></h3></div>
          <div>
            <p className="large">Senior iOS Developer with 9+ years of hands-on experience building high-performance, scalable iOS applications using Swift and Objective-C. Strong expertise in UIKit, SwiftUI, Auto Layout, REST APIs, Alamofire, Core Data, third-party SDK integration, Firebase, push notifications, debugging and performance optimization.</p>
            <p>My recent experience as a Solution Architect has strengthened my skills in technical design, requirement analysis and scalable solution development. I am confident in bringing that broader architectural perspective back to hands-on iOS development, where my core expertise and experience are strongest.</p>
          </div>
        </div>
      </section>

      <section id="expertise" className="section reveal">
        <p className="section-no">02 / EXPERTISE</p>
        <div className="section-heading"><h3>Built across the full <span>iOS engineering</span> <br/>stack.</h3><p>From UI and architecture to APIs, persistence, debugging, testing and App Store releases.</p></div>
        <div className="expertise-grid">
          {expertise.map(([title,text],i)=><article className="tech-card" key={title}><span>0{i+1}</span><h4>{title}</h4><p>{text}</p></article>)}
        </div>
      </section>

      <section id="architecture" className="section reveal">
        <p className="section-no">03 / ARCHITECTURE</p>
        <div className="architecture-head"><h3>Design for <span>clarity.</span><br/>Build for scale.</h3><p>Architecture is more than choosing a pattern. It is about creating systems that remain understandable, testable and adaptable as products grow.</p></div>
        <div className="flow">
          <div className="flow-node">PRODUCT / PROJECT<br/><b>REQUIREMENTS</b></div><i>↓</i>
          <div className="flow-node accent">SOLUTION DESIGN<br/><b>ARCHITECTURE</b></div><i>↓</i>
          <div className="flow-row"><div className="flow-node">UI LAYER<br/><b>UI LAYER — UIKit · SwiftUI · Programmatic UI</b></div><div className="flow-node">BUSINESS LOGIC<br/><b>BUSINESS LOGIC — Services · Dependency Injection</b></div><div className="flow-node">DATA LAYER<br/><b>DATA LAYER — REST APIs · Core Data · SQLite</b></div></div>
        </div>
        <div className="principles"><span>SCALABLE</span><span>MODULAR</span><span>TESTABLE</span><span>MAINTAINABLE</span><span>PERFORMANCE-FOCUSED</span></div>
      </section>

      <section id="experience" className="section reveal">
        <p className="section-no">04 / EXPERIENCE</p>
        <div className="timeline">
          {experience.map((e,i)=><article className="timeline-item" key={i}><div className="timeline-date">{e.date}</div><div className="dot"></div><div className="timeline-content"><p className="muted">{e.meta}</p><h4>{e.role}</h4><h5>{e.company}</h5><p>{e.text}</p></div></article>)}
        </div>
      </section>

      <section id="work" className="section reveal">
        <p className="section-no">05 / WORK</p>
        <div className="section-heading"><h3>Products, platforms<br/>& <span>applications.</span></h3><p>Selected work from professional experience and independent development. Commercial projects are described at a public-safe level.</p></div>
        <div className="work-grid">
          {projects.map((p,i)=><article className={`work-card ${i===0?'featured':''}`} key={p[0]}><div className="work-top"><span>0{i+1}</span><span>iOS</span></div><div className="work-placeholder"><span>{p[0]}</span></div><div><h4>{p[0]}</h4><p className="tech">{p[1]}</p><p>{p[2]}</p></div></article>)}
        </div>
      </section>

      <section id="philosophy" className="section reveal">
        <p className="section-no">06 / ENGINEERING PHILOSOPHY</p>
        <div className="philosophy-head"><h3>Build deliberately.<br/><span>Solve the right problem.</span></h3><p>Ideas become valuable when they become useful products. These principles shape how I approach interfaces, architecture and engineering.</p></div>
        <div className="quote-grid">
          <article><span>01</span><h4>Architecture</h4><p>Build for clarity, maintainability and the future—not just the next release.</p></article>
          <article><span>02</span><h4>User Experience</h4><p>Good engineering should disappear behind a simple, reliable experience.</p></article>
          <article><span>03</span><h4>Continuous Learning</h4><p>Stay curious, explore new technologies, and turn useful ideas into working products.</p></article>
        </div>
      </section>

      <section id="ai" className="section reveal">
        <p className="section-no">07 / AI-ASSISTED ENGINEERING</p>
        <div className="ai-layout"><div><h3>AI as a <span>force multiplier.</span></h3><p>I use AI-assisted development tools to accelerate coding, debugging, technical exploration and prototyping while keeping engineering decisions grounded in experience and technical judgment.</p></div><div className="ai-tools"><span>ChatGPT</span><span>Claude</span><span>Cursor</span><span>Google AI</span><span>Code Generation</span><span>Debugging</span><span>Architecture Exploration</span><span>Prototyping</span></div></div>
      </section>

      <section id="contact" className="section contact-section reveal">
        <p className="section-no">08 / CONTACT</p>
        <h3>Let's build something<br/><span>meaningful.</span></h3>
        <p className="contact-lead">I’m open to Senior iOS Developer and iOS Engineering opportunities where I can contribute hands-on development experience, strong application architecture skills and a product-focused engineering mindset.</p>
        <div className="contact-grid">
          <a href="mailto:multani.yasin@gmail.com"><b>Email me</b><small>multani.yasin@gmail.com</small><span>↗</span></a>
          <a href="tel:+918141834322"><b>Call me</b><small>+91 81418 34322</small><span>↗</span></a>
          <a href="https://www.linkedin.com/in/yasin-multani-940b0165/" target="_blank"><b>LinkedIn</b><small>Connect professionally</small><span>↗</span></a>
          <a href="/Yasin_Multani_Senior_iOS_Developer_Resume.pdf" download><b>Download resume</b><small>PDF · Yasin Multani</small><span>↓</span></a>
        </div>
        <div className="footer-line"><span>multani.yasin@gmail.com</span><span>+91 81418 34322</span><span>Ahmedabad, India</span></div>
      </section>
    </main>
  );
}
