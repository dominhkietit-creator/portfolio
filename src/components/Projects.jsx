import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { FolderGit2 } from "lucide-react";

const projectFilters = ["All", "Web", "Mobile"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="border-t border-black/5 bg-neutral-50/60 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Featured{" "}
              <span className="text-neutral-400">Projects.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
              A curated selection of applications built with modern frontend tools, focusing on code clarity, responsive design, and practical user utility.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            {projectFilters.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom helper note */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
              <FolderGit2 size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Looking for more experiments?
              </p>
              <p className="text-xs text-neutral-500">
                I regularly commit code exercises, component studies, and algorithm practices on GitHub.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 text-xs font-semibold text-neutral-900 hover:underline underline-offset-4"
          >
            Inquire about my code →
          </a>
        </div>
      </div>
    </section>
  );
}
