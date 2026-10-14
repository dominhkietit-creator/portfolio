import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Track active section and navbar background shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/90 shadow-xs backdrop-blur-md"
          : "border-b border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="group inline-flex items-center gap-1.5 text-xl font-bold tracking-tight text-neutral-900 focus-visible:outline-neutral-900"
          aria-label={`${profile.name} - Home`}
        >
          <span>{profile.shortName}</span>
          <span className="text-neutral-400 transition-colors group-hover:text-neutral-900">.</span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 rounded-full border border-black/5 bg-neutral-50/70 p-1.5 backdrop-blur-md md:flex"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white text-neutral-950 shadow-xs"
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Social links & Quick CTA */}
        <div className="hidden items-center gap-4 md:flex">
          {profile.contact.githubUrl && (
            <a
              href={profile.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <GithubIcon className="h-4.5 w-4.5" />
            </a>
          )}

          {profile.contact.linkedinUrl && (
            <a
              href={profile.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <LinkedinIcon className="h-4.5 w-4.5" />
            </a>
          )}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            Get in touch
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-neutral-200 p-2.5 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-neutral-900 md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-neutral-200 bg-white/95 px-6 py-6 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-neutral-100 text-neutral-950 font-semibold"
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-neutral-400">0{navLinks.indexOf(link) + 1}</span>
                  </a>
                );
              })}
            </nav>

            {/* Mobile Socials & CTA */}
            <div className="mt-6 border-t border-neutral-100 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {profile.contact.githubUrl && (
                    <a
                      href={profile.contact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="rounded-lg border border-neutral-200 p-2 text-neutral-700 hover:bg-neutral-100"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  )}
                  {profile.contact.linkedinUrl && (
                    <a
                      href={profile.contact.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="rounded-lg border border-neutral-200 p-2 text-neutral-700 hover:bg-neutral-100"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-neutral-800"
                >
                  Contact Me
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}