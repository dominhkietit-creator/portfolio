import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function About() {
    return (
        <section
            id="about"
            className="border-t border-black/5 bg-gray-50 px-6 py-24 lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                        About Me
                    </p>

                    <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        I enjoy turning ideas into
                        <span className="text-gray-400"> digital experiences.</span>
                    </h2>
                </motion.div>

                {/* Content */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-lg leading-8 text-gray-600">
                            I'm a Computer Science student passionate about
                            frontend development and user interface design.
                            I enjoy creating websites that are clean,
                            responsive, and easy to use.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            My current focus is improving my skills in React,
                            JavaScript, and modern frontend technologies while
                            building real-world projects.
                        </p>

                        <a
                            href="#contact"
                            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
                        >
                            Let's work together

                            <ArrowUpRight
                                size={17}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>
                    </motion.div>

                    {/* Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 0, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="grid grid-cols-2 gap-6"
                    >

                        {/* Item */}
                        <div className="border-t border-black/10 pt-5">
                            <p className="text-sm text-gray-400">
                                Education
                            </p>

                            <p className="mt-2 font-medium">
                                Computer Science
                            </p>
                        </div>

                        <div className="border-t border-black/10 pt-5">
                            <p className="text-sm text-gray-400">
                                Focus
                            </p>

                            <p className="mt-2 font-medium">
                                Frontend Development
                            </p>
                        </div>

                        <div className="border-t border-black/10 pt-5">
                            <p className="text-sm text-gray-400">
                                Currently Learning
                            </p>

                            <p className="mt-2 font-medium">
                                React & React Native
                            </p>
                        </div>

                        <div className="border-t border-black/10 pt-5">
                            <p className="text-sm text-gray-400">
                                Location
                            </p>

                            <p className="mt-2 font-medium">
                                Vietnam
                            </p>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default About;