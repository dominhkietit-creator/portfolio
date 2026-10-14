import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  ArrowUpRight,
  ExternalLink,
  Inbox,
  Loader2,
} from "lucide-react";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Contact() {
  const { contact } = profile;
  const [copied, setCopied] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getEncodedMailData = () => {
    const mailSubject = encodeURIComponent(
      formData.subject || `Liên hệ Portfolio từ ${formData.name || "nhà tuyển dụng"}`
    );
    const mailBody = encodeURIComponent(
      `Chào Kiệt,\n\nTôi liên hệ từ trang Portfolio của bạn:\n- Họ tên: ${formData.name}\n- Email: ${formData.email}\n\nNội dung lời nhắn:\n${formData.message}\n`
    );
    return { mailSubject, mailBody };
  };

  // Mở thẳng trình soạn thư Gmail trên Web (tự động tạo & lưu Thư Nháp trên Gmail)
  const openGmailWeb = (e) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({
        type: "error",
        text: "Vui lòng nhập đầy đủ Họ tên, Email và Lời nhắn trước khi gửi.",
      });
      return;
    }

    const { mailSubject, mailBody } = getEncodedMailData();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      contact.email
    )}&su=${mailSubject}&body=${mailBody}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setStatusMessage({
      type: "success",
      text: "Đã mở tab Gmail soạn thư! Thư nháp đã được Gmail tự động lưu trong mục 'Thư nháp' (Drafts). Bạn chỉ cần kiểm tra và bấm 'Gửi'.",
    });
  };

  // Mở ứng dụng Mail mặc định của hệ điều hành (mailto:)
  const openDefaultMailClient = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({
        type: "error",
        text: "Vui lòng nhập đầy đủ thông tin để tạo nội dung thư.",
      });
      return;
    }

    const { mailSubject, mailBody } = getEncodedMailData();
    window.location.href = `mailto:${contact.email}?subject=${mailSubject}&body=${mailBody}`;

    setStatusMessage({
      type: "info",
      text: "Đang mở ứng dụng email mặc định trên thiết bị của bạn...",
    });
  };

  // Sao chép nội dung đã nhập vào clipboard
  const copyMessageContent = () => {
    if (!formData.name && !formData.message) {
      setStatusMessage({
        type: "error",
        text: "Chưa có nội dung để sao chép.",
      });
      return;
    }

    const textToCopy = `Người gửi: ${formData.name} (${formData.email})\nTiêu đề: ${
      formData.subject || "Liên hệ portfolio"
    }\n\nNội dung:\n${formData.message}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);

    setStatusMessage({
      type: "success",
      text: "Đã sao chép toàn bộ nội dung tin nhắn vào bộ nhớ tạm!",
    });
  };

  // Gửi trực tiếp nếu cấu hình Web3Forms (hoặc tự động chuyển sang Gmail)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({
        type: "error",
        text: "Vui lòng điền đầy đủ các trường có dấu sao (*).",
      });
      return;
    }

    // Nếu có Web3Forms Access Key được cấu hình trong profile.js
    if (contact.web3formsKey && contact.web3formsKey.trim() !== "") {
      setIsSubmitting(true);
      setStatusMessage({ type: "info", text: "Đang gửi email trực tiếp..." });

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: contact.web3formsKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Tin nhắn Portfolio từ ${formData.name}`,
            message: formData.message,
            from_name: "Portfolio Contact",
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatusMessage({
            type: "success",
            text: `Tin nhắn đã được gửi thành công đến ${contact.email}! Cảm ơn bạn.`,
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          // Fallback sang mở Gmail
          openGmailWeb();
        }
      } catch (err) {
        console.error("Gửi email lỗi:", err);
        openGmailWeb();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Mặc định: Mở tab Gmail Web Compose (tự động tạo Drafts trên Gmail)
      openGmailWeb();
    }
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
            Tôi luôn sẵn sàng đón nhận cơ hội thực tập, vị trí Junior Frontend Developer hoặc trao đổi kỹ thuật.
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
                  Email trực tiếp
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
                      <span className="text-emerald-700 font-semibold">Đã sao chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Sao chép Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    contact.email
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  <span>Mở Gmail</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-xs space-y-4">
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Mạng xã hội & Mã nguồn
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
                  {contact.location}
                </p>
                <p className="text-xs text-neutral-500">
                  Sẵn sàng làm việc trực tiếp (on-site) hoặc cộng tác từ xa (remote).
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
                  Gửi lời nhắn
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-200/70">
                  <Inbox size={12} />
                  Hỗ trợ tạo thư nháp Gmail
                </span>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                Khi bấm <strong>"Gửi qua Gmail"</strong>, hệ thống sẽ mở trực tiếp trang soạn thư của Gmail với nội dung đã điền sẵn và <strong>tự động lưu vào mục Thư nháp (Drafts)</strong> trong tài khoản Gmail của bạn.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-600"
                    >
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ví dụ: Nguyễn Văn A"
                      className="mt-2 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-neutral-600"
                    >
                      Email của bạn <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="mt-2 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-600"
                  >
                    Tiêu đề thư
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Cơ hội thực tập / Trao đổi dự án"
                    className="mt-2 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-neutral-600"
                  >
                    Nội dung lời nhắn <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Chào Kiệt, chúng tôi muốn trao đổi về vị trí thực tập Frontend..."
                    className="mt-2 w-full resize-none rounded-xl border border-neutral-300 bg-neutral-50/50 px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-neutral-900 focus:bg-white focus:outline-none"
                  />
                </div>

                {statusMessage.text && (
                  <div
                    className={`rounded-xl p-3.5 text-xs font-medium ${
                      statusMessage.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : statusMessage.type === "error"
                        ? "bg-red-50 text-red-800 border border-red-200"
                        : "bg-neutral-100 text-neutral-800"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                {/* Primary Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-md focus-visible:ring-2 focus-visible:ring-neutral-900 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Đang xử lý...</span>
                    </>
                  ) : (
                    <>
                      <span>Mở & Lưu Nháp Trên Gmail</span>
                      <ExternalLink
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>

                {/* Secondary Alternative Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-neutral-100">
                  <span className="text-[11px] text-neutral-400">Cách gửi khác:</span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={openDefaultMailClient}
                      className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900"
                    >
                      <Mail size={12} />
                      <span>App Mail máy tính</span>
                    </button>

                    <button
                      type="button"
                      onClick={copyMessageContent}
                      className="inline-flex items-center gap-1 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900"
                    >
                      {copiedDraft ? (
                        <>
                          <Check size={12} className="text-emerald-600" />
                          <span className="text-emerald-700">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Sao chép nội dung</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
