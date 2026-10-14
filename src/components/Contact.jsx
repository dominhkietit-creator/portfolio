import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Copy, Check, Send, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Contact() {
  const { contact } = profile;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    const mailtoSubject = encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    setStatusMessage("Opening email client with pre-filled message...");
    window.location.href = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setStatusMessage("Message draft prepared in your email client!");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="border-t border-black/5 bg-neutral-50/70 px-6 py-24 lg:px-8 lg:py-32"
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
            Let's Talk
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Get in touch for{" "}
            <span className="text-neutral-400">opportunities.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
            I am actively looking for internship and Junior Frontend Developer positions. Whether you have a project in mind, an opening, or just want to connect, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-5"
          >
            {/* Email Card */}
            <div className="rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Direct Email
                </span>
                <Mail className="h-4 w-4 text-neutral-400" />
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="mt-3 block text-lg font-bold text-neutral-900 transition-colors hover:text-black sm:text-xl break-all"
              >
                {contact.email}
              </a>

              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  <span>Compose Mail</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-xs space-y-4">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Online Profiles
              </span>

              <div className="grid gap-3 sm:grid-cols-2">
                {contact.githubUrl && (
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4 transition-all hover:border-neutral-400 hover:bg-neutral-50"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="h-5 w-5 text-neutral-800" />
                      <span className="text-sm font-semibold text-neutral-900">GitHub</span>
                    </div>
                    <ArrowUpRight size={15} className="text-neutral-400" />
                  </a>
                )}

                {contact.linkedinUrl && (
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4 transition-all hover:border-neutral-400 hover:bg-neutral-50"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="h-5 w-5 text-neutral-800" />
                      <span className="text-sm font-semibold text-neutral-900">LinkedIn</span>
                    </div>
                    <ArrowUpRight size={15} className="text-neutral-400" />
                  </a>
                )}
              </div>
            </div>

            {/* Location & Availability Note */}
            <div className="flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-white p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-900">
                  Based in {contact.location}
                </p>
                <p className="text-xs text-neutral-500">
                  Available for local positions and remote frontend collaboration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-neutral-200/90 bg-white p-8 shadow-xs sm:p-10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-neutral-950">
                  Send a Direct Message
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600">
                  <Sparkles size={12} />
                  Frontend Demo Form
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                Notice: Submitting this form prepares a pre-filled draft in your default email client. No backend database or third-party tracking is used.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-600"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Nguyen"
                      className="mt-2 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-600"
                    >
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="mt-2 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-600"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Frontend inquiry"
                    className="mt-2 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-600"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Kiệt, I'd like to talk about an internship role at..."
                    className="mt-2 w-full resize-none rounded-xl border border-neutral-300 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none"
                  />
                </div>

                {statusMessage && (
                  <div className="rounded-xl bg-neutral-100 p-3 text-xs font-medium text-neutral-800">
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-md focus-visible:ring-2 focus-visible:ring-neutral-900"
                >
                  <span>Prepare Email Draft</span>
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
