import { motion } from "motion/react";

export default function SkillCard({ name, category, description, tag }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 transition-all hover:border-neutral-400 hover:shadow-xs"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight text-neutral-900 group-hover:text-black">
            {name}
          </h3>
          {tag && (
            <span className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600">
              {tag}
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
          {description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-3 text-[11px] text-neutral-400 font-medium">
        <span>{category}</span>
        <span className="opacity-0 transition-opacity group-hover:opacity-100 text-neutral-700">
          Ready to apply →
        </span>
      </div>
    </motion.div>
  );
}