import { motion } from "motion/react";
import {
    ArrowDown,
    ArrowUpRight,
} from "lucide-react";

function Hero() {
    return (
        <section
            id="home"
            className="flex min-h-screen items-center px-6 pt-20 lg:px-8"
        >
            <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Status */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-gray-600">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Available for opportunities
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                        Hi, I'm{" "}
                        <span className="text-gray-400">
                            Kiệt
                        </span>

                        <br />

                        Frontend Developer
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500">
                        I'm a Computer Science student who enjoys
                        building modern websites and mobile
                        applications with clean and intuitive
                        interfaces.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-gray-800"
                        >
                            View Projects

                            <ArrowUpRight
                                size={17}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-full border border-black/10 px-6 py-3.5 text-sm font-medium transition hover:bg-gray-50"
                        >
                            Contact Me
                        </a>

                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative">

                        {/* Decorative circle */}
                        <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-black/10" />

                        {/* Photo */}
                        <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-[2rem] bg-gray-100 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">

                            <div className="text-center">
                                <div className="text-7xl font-bold text-gray-300">
                                    K
                                </div>

                                <p className="mt-3 text-sm text-gray-400">
                                    Your photo
                                </p>
                            </div>

                        </div>

                        {/* Scroll button */}
                        <a
                            href="#about"
                            className="absolute -bottom-6 -left-6 flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition hover:-translate-y-1"
                        >
                            <ArrowDown size={18} />
                        </a>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;