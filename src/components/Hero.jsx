import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { profile } from "../data/profile";
import heroPhoto from "../assets/hero.png";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center px-6 pt-24 pb-16 lg:px-8 lg:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          {/* Availability badge */}
          {profile.availability?.isAvailable && (
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50/80 px-3.5 py-1.5 text-xs font-medium text-neutral-700 backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{profile.availability.label}</span>
            </div>
          )}

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-neutral-400 font-medium">
              {profile.shortName}
            </span>
            <br />
            <span className="text-neutral-900">{profile.title}</span>
          </h1>

          {/* Subtitle / Role */}
          <p className="mt-3 text-sm font-semibold tracking-wide uppercase text-neutral-400">
            {profile.roleSubtitle}
          </p>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-8">
            {profile.headline}{" "}
            <span className="text-neutral-500">
              {profile.shortBio}
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-md focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <span>View Projects</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-medium text-neutral-800 transition-all hover:border-neutral-900 hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <span>Contact Me</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 sm:ml-2"
            >
              <span>Learn more</span>
              <ArrowDown size={14} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual / Avatar area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center lg:col-span-5 lg:justify-end"
        >
          <div className="relative">
            {/* Subtle decorative geometric backdrop */}
            <div className="absolute -inset-2 rounded-3xl bg-radial from-neutral-100 to-transparent opacity-80 blur-xl" />
            <div className="absolute -top-3 -right-3 h-20 w-20 rounded-full border border-dashed border-neutral-300 pointer-events-none" />

            {/* Profile Frame */}
            <div className="relative flex h-72 w-72 flex-col items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100/80 shadow-xs sm:h-88 sm:w-88 lg:h-96 lg:w-96">
              {!imageError ? (
                <img
                  src={heroPhoto}
                  alt={profile.name}
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-105"
                />
              ) : (
                /* Graceful fallback if no image or error */
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xs border border-neutral-200">
                    <Code2 className="h-10 w-10 text-neutral-800" />
                  </div>
                  <span className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">
                    {profile.shortName}
                  </span>
                  <p className="mt-1 text-xs text-neutral-500">
                    Frontend Developer
                  </p>
                </div>
              )}

              {/* Status pill overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/60 bg-white/90 px-3.5 py-2 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-neutral-700">
                    {profile.details[0]?.value || "IT Student"}
                  </span>
                </div>
                <span className="text-xs text-neutral-400">
                  {profile.contact.location}
                </span>
              </div>
            </div>

            {/* Floating scroll anchor */}
            <a
              href="#about"
              aria-label="Scroll to about section"
              className="absolute -bottom-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-md transition-all hover:-translate-y-1 hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-neutral-900"
            >
              <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}