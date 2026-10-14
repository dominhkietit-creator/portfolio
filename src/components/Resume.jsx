import { motion } from "motion/react";
import { Download, FileText, CheckCircle2, Mail, ExternalLink, GraduationCap, Briefcase } from "lucide-react";
import { profile } from "../data/profile";

export default function Resume() {
  const { resume } = profile;

  return (
    <section
      id="resume"
      className="border-t border-black/5 px-6 py-24 lg:px-8 lg:py-32"
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
            Curriculum Vitae
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Resume &{" "}
            <span className="text-neutral-400">Background.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
            A comprehensive overview of my academic foundation, frontend toolkit, and career readiness.
          </p>
        </motion.div>

        {/* Resume Content Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Highlights / Qualifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-7"
          >
            {/* Academic card */}
            <div className="rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    Academic Background
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Information Technology Student
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                Undergraduate coursework focusing on computer science fundamentals, data structures, algorithms, and web application architecture. Actively applying classroom concepts to modern, real-world frontend projects.
              </p>
            </div>

            {/* Practical Focus card */}
            <div className="rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    Target Role & Readiness
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Internship & Junior Frontend Developer
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "Strong proficiency in component-driven UI development using React & Vite",
                  "Solid grasp of responsive layouts with Tailwind CSS and CSS Grid / Flexbox",
                  "Knowledge of Git version control workflows and repository best practices",
                  "Eager learner eager to contribute to team codebases and receive mentor feedback",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neutral-800" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8 text-white shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <FileText size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight">
                Curriculum Vitae
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                Official PDF resume containing complete technical skills, project links, and educational contact details.
              </p>

              {/* Status and Action Button */}
              <div className="mt-8 space-y-4">
                {resume.isAvailable ? (
                  <>
                    <a
                      href={resume.filePath}
                      download={resume.fileName}
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-100 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
                      <span>Download Resume (PDF)</span>
                    </a>

                    <a
                      href={resume.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-xs font-medium text-neutral-300 transition-colors hover:border-white/40 hover:text-white"
                    >
                      <span>Preview in New Tab</span>
                      <ExternalLink size={14} />
                    </a>
                  </>
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-xs text-neutral-300">
                      {resume.placeholderNotice}
                    </p>
                    <a
                      href={`mailto:${profile.contact.email}?subject=Resume Request - ${profile.name}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-neutral-950 hover:bg-neutral-100"
                    >
                      <Mail size={14} />
                      <span>Request CV via Email</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Minimal note */}
              <div className="mt-8 border-t border-white/10 pt-4 text-center">
                <p className="text-[11px] text-neutral-500">
                  Last updated {resume.updatedDate} • Ready for direct recruiter review
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
