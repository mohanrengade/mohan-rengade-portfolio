import { useState } from 'react'
import './index.css'
import heroCharacter from './assets/MyProfilePhoto.png';
import resumeFile from './assets/Mohan_Rengade_Resume.pdf';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

/* ── Social Icons ──────────────────────────────────── */
const LinkedInIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#0A66C2" />
    <path d="M7.46 9.38h-2.9v9.75h2.9V9.38zM6 8.04c-.93 0-1.54-.62-1.54-1.39 0-.79.62-1.39 1.56-1.39.93 0 1.52.6 1.54 1.39 0 .78-.61 1.39-1.56 1.39zM19.13 19.13h-2.9v-5.18c0-1.3-.46-2.19-1.63-2.19-.89 0-1.42.6-1.65 1.18-.08.2-.1.49-.1.78v5.41h-2.9s.04-8.83 0-9.75h2.9v1.38c.39-.6 1.08-1.45 2.63-1.45 1.92 0 3.36 1.25 3.36 3.94v5.88z" fill="white" />
  </svg>
)

const NaukriIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#0082c9" />
    <text x="12" y="15.5" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">N</text>
  </svg>
)

const GitHubIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="5" fill="#1a1a2e" />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M12 4C7.58 4 4 7.58 4 12c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0020 12c0-4.42-3.58-8-8-8z"
      fill="white" />
  </svg>
)

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const MailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const ButterflyIcon = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <path d="M20 20 C10 10 0 15 5 25 C10 30 18 22 20 20Z" fill="#00e5ff" opacity="0.85" />
    <path d="M20 20 C30 10 40 15 35 25 C30 30 22 22 20 20Z" fill="#e040fb" opacity="0.85" />
    <path d="M20 20 C12 25 8 35 14 34 C18 33 20 22 20 20Z" fill="#00e5ff" opacity="0.6" />
    <path d="M20 20 C28 25 32 35 26 34 C22 33 20 22 20 20Z" fill="#e040fb" opacity="0.6" />
  </svg>
)

/* ── Nav links list ─────────────────────────────────── */
const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

/* ── Main App ───────────────────────────────────────── */
export default function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  return (
    <div
      className={`font-sans min-h-screen relative transition-colors duration-300 ${dark ? 'bg-[radial-gradient(ellipse_at_18%_50%,rgba(30,10,60,0.55)_0%,transparent_58%),linear-gradient(135deg,#0a0a18_0%,#0d1117_45%,#0f1420_100%)] text-white' : 'bg-[linear-gradient(135deg,#f0f4ff_0%,#e8f0fe_100%)] text-[#0d1117]'}`}
    >
      {/* ━━━ NAVBAR ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <nav
        className={`sticky top-0 z-50 w-full px-5 py-3.5 backdrop-blur-xl transition-colors duration-300 ${dark ? 'bg-[#0d111e]/95 border-b border-white/10 shadow-none' : 'bg-white/95 border-b border-black/10 shadow-[0_2px_20px_rgba(0,0,0,0.06)]'}`}
      >
        <div className="max-w-5xl mx-auto flex items-center gap-8">

          {/* Logo */}
          <div className="text-xl font-bold tracking-tight shrink-0">
            PORTFOLIO<span className="text-orange-500">.</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex list-none gap-1 flex-1 justify-center m-0 p-0">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveTab(item)}
                  className={`no-underline text-sm font-medium px-3 py-1.5 rounded-md transition-colors duration-200 hover:text-orange-500 ${activeTab === item ? 'text-orange-500' : dark ? 'text-[#b0bec5]' : 'text-gray-600'}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3 ml-auto">

            {/* Theme toggle */}
            <button
              onClick={() => setDark(d => !d)}
              aria-label="Toggle theme"
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 border-[1.5px] ${dark ? 'border-white/15 bg-white/5 text-yellow-400' : 'border-black/10 bg-black/5 text-[#555]'}`}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Hire Me */}
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 shadow-[0_4px_20px_rgba(249,115,22,0.42)] text-white font-semibold text-sm px-6 py-2.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-px whitespace-nowrap"
            >
              Hire Me
            </a>

            {/* Hamburger mobile */}
            <button
              onClick={() => setMenuOpen(m => !m)}
              aria-label="Toggle menu"
              className="md:hidden flex flex-col justify-center gap-1.5 bg-transparent border-0 cursor-pointer p-1"
            >
              <span className={`block w-6 h-[2px] rounded transition-all duration-300 bg-current ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
              <span className={`block w-6 h-[2px] rounded transition-all duration-300 bg-current ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-[2px] rounded transition-all duration-300 bg-current ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 right-0 flex flex-col px-4 py-3 gap-1 z-50 border-b ${dark ? 'bg-[#0d1117] border-white/10' : 'bg-white border-black/10'}`}
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setMenuOpen(false)
                  setActiveTab(item)
                }}
                className={`no-underline text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-orange-500 ${activeTab === item ? 'text-orange-500' : dark ? 'text-[#b0bec5]' : 'text-[#555]'}`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ━━━ HERO SECTION ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="home"
        className="max-w-5xl mx-auto flex items-center justify-between gap-10 min-h-[calc(100vh-68px)] px-10 pt-[60px] pb-10 flex-wrap"
      >
        {/* ── Left ── */}
        <div className="flex-1 basis-[420px] max-w-[500px]">

          {/* Social Icons */}
          <div className="flex gap-3.5 mb-7">
            {[
              { Icon: LinkedInIcon, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohan-rengade-7835962b5/' },
              { Icon: NaukriIcon, label: 'Naukri', url: 'https://www.naukri.com/mnjuser/profile' },
              { Icon: GitHubIcon, label: 'GitHub', url: 'https://github.com/mohanrengade/' },
            ].map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center rounded-xl overflow-hidden no-underline transition-transform duration-200 hover:-translate-y-1.5 hover:scale-105 w-[42px] h-[42px]"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Heading */}
          <h1 className="font-extrabold leading-tight tracking-[0] mb-4 text-[clamp(1.9rem,3.5vw,2.8rem)]">
            Hi, I am Mohan Rengade
          </h1>

          {/* Description */}
          <p className={`text-base leading-relaxed mb-9 max-w-[430px] ${dark ? 'text-[#8a9bb8]' : 'text-[#4a5568]'}`}>
            Hi, I'm Mohan Rengade — a Full Stack Developer who loves turning ideas into reality through code. I work with technologies like React, Node.js, and MongoDB to build modern, responsive, and scalable web applications. I enjoy solving problems, learning new tools, and creating smooth user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">

            {/* Download CV */}
            <a
              href={resumeFile}
              download="Mohan_Rengade_Resume.pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500 hover:border-orange-600 font-semibold text-sm px-7 py-3.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_18px_rgba(249,115,22,0.38)]"
            >
              <DownloadIcon />
              Download CV
            </a>

            {/* Contact Me */}
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 border-2 ${dark ? 'text-white border-white/30 hover:bg-white/5' : 'text-[#333] border-black/20 hover:bg-black/5'}`}
            >
              <MailIcon />
              Contact Me
            </a>
          </div>
        </div>

        {/* ── Right: Hero Character ── */}
        <div
          className="flex-1 basis-[340px] max-w-[480px] flex justify-center items-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] animate-[float_4s_ease-in-out_infinite]">
            {/* Animated glowing backdrop */}
            <div className="absolute inset-[-10px] bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full z-0 blur-xl opacity-60 animate-pulse"></div>

            {/* Circular Profile Image */}
            <img
              src={heroCharacter}
              alt="Profile Avatar"
              className="w-full h-full object-cover rounded-full border-[6px] border-[#0d1526] shadow-[0_0_40px_rgba(249,115,22,0.4)] relative z-10 hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* ━━━ COMPONENT SECTIONS ━━━━━━━━━━━━━━━━━ */}
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* ── Butterfly decoration ── */}
      <div
        className="fixed bottom-5 right-5 pointer-events-none z-50 animate-[flutter_1.8s_ease-in-out_infinite_alternate] w-[30px] h-[30px] opacity-75"
        aria-hidden="true"
      >
        <ButterflyIcon />
      </div>
    </div>
  )
}
