import { motion } from "motion/react";
import { ExternalLink, Layers, Smartphone, CheckCircle2, Lock } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectCard({ project }) {
  const {
    title,
    category,
    status,
    description,
    tags,
    highlights,
    image,
    githubUrl,
    demoUrl,
  } = project;

  const CategoryIcon = category === "Mobile" ? Smartphone : Layers;

  // Determine valid links
  const hasValidGithub = Boolean(githubUrl && githubUrl.trim() !== "" && githubUrl !== "#");
  const hasValidDemo = Boolean(demoUrl && demoUrl.trim() !== "");

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/90 bg-white transition-all hover:border-neutral-400 hover:shadow-lg"
    >
      <div>
        {/* Card Header / Visual Preview Container */}
        <div className="relative aspect-16/10 w-full overflow-hidden border-b border-neutral-100 bg-neutral-50">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Editorial Minimalist Mockup Placeholder */
            <div className="flex h-full w-full flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-600 shadow-2xs">
                  <CategoryIcon className="h-3 w-3 text-neutral-500" />
                  {category} Project
                </span>

                {status && (
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                      status === "Active"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : status === "In Progress"
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-neutral-100 text-neutral-600 border border-neutral-200"
                    }`}
                  >
                    {status}
                  </span>
                )}
              </div>

              {/* Central Mockup UI Representation */}
              <div className="my-auto text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200/80 bg-white shadow-xs">
                  <CategoryIcon className="h-7 w-7 text-neutral-800" />
                </div>
                <h4 className="mt-3 text-base font-bold text-neutral-900">
                  {title}
                </h4>
              </div>

              {/* Decorative bottom dots */}
              <div className="flex items-center gap-1.5 opacity-60">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
              </div>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-neutral-950">
              {title}
            </h3>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            {description}
          </p>

          {/* Key highlights / features */}
          {highlights && highlights.length > 0 && (
            <div className="mt-4 space-y-1.5 border-t border-neutral-100 pt-4">
              <p className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                Key Highlights
              </p>
              {highlights.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-xs text-neutral-600"
                >
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="border-t border-neutral-100 bg-neutral-50/50 p-6 pt-4 flex flex-wrap items-center justify-between gap-3">
        {/* GitHub link or graceful status */}
        {hasValidGithub ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-800 hover:text-black focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <GithubIcon className="h-4 w-4" />
            <span>Source Code</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
            <Lock className="h-3.5 w-3.5" />
            <span>Private repo / In development</span>
          </span>
        )}

        {/* Live Demo link or graceful status */}
        {hasValidDemo ? (
          <a
            href={demoUrl}
            target={demoUrl.startsWith("#") ? "_self" : "_blank"}
            rel={demoUrl.startsWith("#") ? undefined : "noopener noreferrer"}
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
          >
            <span>Live Preview</span>
            <ExternalLink size={13} />
          </a>
        ) : (
          <span className="text-[11px] font-medium text-neutral-400">
            Demo coming soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
