import { Menu } from "lucide-react";

function Navbar() {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-bold tracking-tight"
                >
                    Kiệt<span className="text-gray-400">.</span>
                </a>

                {/* Desktop navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <a
                        href="#home"
                        className="text-sm text-gray-600 transition hover:text-black"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="text-sm text-gray-600 transition hover:text-black"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="text-sm text-gray-600 transition hover:text-black"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="text-sm text-gray-600 transition hover:text-black"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="text-sm text-gray-600 transition hover:text-black"
                    >
                        Contact
                    </a>
                </nav>

                {/* Social links */}
                <div className="hidden items-center gap-5 md:flex">
                    <a
                        href="#"
                        className="text-sm text-gray-600 transition hover:text-black"
                    >
                        GitHub
                    </a>

                    <a
                        href="#"
                        className="text-sm text-gray-600 transition hover:text-black"
                    >
                        LinkedIn
                    </a>
                </div>

                {/* Mobile menu */}
                <button
                    className="rounded-lg p-2 text-gray-700 md:hidden"
                    aria-label="Open menu"
                >
                    <Menu size={24} />
                </button>

            </div>
        </header>
    );
}

export default Navbar;