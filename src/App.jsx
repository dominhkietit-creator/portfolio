import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Temporary sections */}
        <section
          id="about"
          className="flex min-h-screen items-center justify-center"
        >
          <h2 className="text-4xl font-bold">
            About
          </h2>
        </section>

        <section
          id="skills"
          className="flex min-h-screen items-center justify-center bg-gray-50"
        >
          <h2 className="text-4xl font-bold">
            Skills
          </h2>
        </section>

        <section
          id="projects"
          className="flex min-h-screen items-center justify-center"
        >
          <h2 className="text-4xl font-bold">
            Projects
          </h2>
        </section>

        <section
          id="contact"
          className="flex min-h-screen items-center justify-center bg-gray-50"
        >
          <h2 className="text-4xl font-bold">
            Contact
          </h2>
        </section>
      </main>
    </>
  );
}

export default App;