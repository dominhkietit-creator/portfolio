import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skills, skillCategories } from "../data/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="border-t border-black/5 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Skills & Stack
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Technologies I use to{" "}
            <span className="text-neutral-400">build things.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
            Practical knowledge grounded in student projects, modern documentation, and dedicated hands-on practice.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {skillCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <SkillCard
                  name={skill.name}
                  category={skill.category}
                  description={skill.description}
                  tag={skill.tag}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}