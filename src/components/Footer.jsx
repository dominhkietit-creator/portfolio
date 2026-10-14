import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/5 bg-white py-12 px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Left: Branding & Copyright */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="flex items-center gap-2">
            <span className="text-base font-bold tracking-tight text-neutral-900">
              {profile.name}
            </span>
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
              Frontend Dev
            </span>
          </div>
          <p className="text-xs text-neutral-400">
            © {currentYear} {profile.name}. Designed & built with React, Vite & Tailwind CSS.
          </p>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {profile.contact.githubUrl && (
              <a
                href={profile.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-neutral-400 transition-colors hover:text-neutral-900"
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
                className="text-neutral-400 transition-colors hover:text-neutral-900"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600 transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <ArrowUp size={15} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
