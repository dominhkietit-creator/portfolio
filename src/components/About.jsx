import { motion } from "motion/react";
import { ArrowUpRight, GraduationCap, Compass, Sparkles, MapPin } from "lucide-react";
import { profile } from "../data/profile";

const detailIcons = {
  Education: GraduationCap,
  Specialization: Compass,
  "Current Focus": Sparkles,
  Location: MapPin,
};

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-black/5 bg-neutral-50/60 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            About Me
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Driven by curiosity,{" "}
            <span className="text-neutral-400">crafted with code.</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {profile.aboutStory.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-8"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
              >
                <span>Let's talk about opportunities</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Compact Details Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6"
          >
            {profile.details.map((item) => {
              const Icon = detailIcons[item.label] || Sparkles;
              return (
                <div
                  key={item.label}
                  className="flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xs transition-all hover:border-neutral-300 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                      {item.label}
                    </span>
                    <Icon className="h-4 w-4 text-neutral-400" />
                  </div>
                  <p className="mt-4 text-base font-semibold text-neutral-900">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}