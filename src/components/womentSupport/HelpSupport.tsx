
import { useState } from "react";
import {
  HeartHandshake,
  ShieldCheck,
  Send,
  CheckCircle,
} from "lucide-react";

type HelpSupportSectionProps = {
  supportArea?: "women" | "children";
};

const HelpSupportSection = ({
  supportArea = "women",
}: HelpSupportSectionProps) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [supportType, setSupportType] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const supportOptions =
    supportArea === "women"
      ? [
          "Education and skill development",
          "Health and well-being",
          "Safety and legal guidance",
          "Employment and financial independence",
          "Other support",
        ]
      : [
          "Education assistance",
          "Health and nutrition",
          "Child safety and protection",
          "General child welfare",
          "Other support",
        ];

  const isWomen = supportArea === "women";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Frontend demo only.
    // Connect your backend here to save real requests.
    setSubmitted(true);
  };

  const resetForm = () => {
    setName("");
    setContact("");
    setSupportType("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section className="bg-[#FFFDF8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full bg-[#FFF0CF] px-4 py-2 text-sm font-semibold text-[#80551B]">
            WE ARE HERE FOR YOU
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#252525] sm:text-4xl lg:text-5xl">
            {isWomen
              ? "You Deserve Support. Let's Take the First Step."
              : "Every Child Deserves Care, Safety and Hope."}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
            {isWomen
              ? "Whether you need guidance, education, safety resources, or help building an independent future, CareConnect is here to help you find the right direction."
              : "If a child needs educational assistance, health support, or protection guidance, share your concern so the appropriate resources can be identified."}
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[#FFF0CF] p-3">
                <HeartHandshake className="h-6 w-6 text-[#9A6826]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#252525]">
                  Compassionate Support
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Every request deserves to be treated with dignity and care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[#E5F0FA] p-3">
                <ShieldCheck className="h-6 w-6 text-[#2D628D]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#252525]">
                  Privacy Matters
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Share only the details necessary to describe your request.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="rounded-2xl border border-[#EEE7DA] bg-white p-5 shadow-lg shadow-[#4A3920]/5 sm:p-8">
          {!submitted ? (
            <>
              <h3 className="text-2xl font-bold text-[#252525]">
                Request Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill in the details below to describe the help you are looking
                for.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="support-name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="support-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#D5A33D] focus:ring-2 focus:ring-[#F4D995]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="support-contact"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number or Email
                  </label>
                  <input
                    id="support-contact"
                    type="text"
                    value={contact}
                    onChange={(event) => setContact(event.target.value)}
                    placeholder="Enter your phone or email"
                    autoComplete="email"
                    required
                    maxLength={150}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#D5A33D] focus:ring-2 focus:ring-[#F4D995]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="support-type"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Type of Support
                  </label>
                  <select
                    id="support-type"
                    value={supportType}
                    onChange={(event) => setSupportType(event.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#D5A33D] focus:ring-2 focus:ring-[#F4D995]"
                  >
                    <option value="">Select a support category</option>
                    {supportOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="support-message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Tell Us How We Can Help
                  </label>
                  <textarea
                    id="support-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Briefly describe the support you need..."
                    rows={4}
                    required
                    maxLength={1500}
                    className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#D5A33D] focus:ring-2 focus:ring-[#F4D995]"
                  />
                  <p className="mt-1 text-right text-xs text-gray-400">
                    {message.length}/1500
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-[#F8F5ED] p-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#47704B]" />
                  <p className="text-xs leading-5 text-gray-600">
                    Please avoid sharing passwords, identity document numbers,
                    or unnecessary sensitive information. This demo does not
                    securely store or send your request.
                  </p>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F4C95D] px-5 py-3.5 font-semibold text-[#252525] transition hover:bg-[#EAB941] focus:outline-none focus:ring-2 focus:ring-[#D5A33D] focus:ring-offset-2"
                >
                  Submit Support Request
                  <Send size={17} />
                </button>
              </form>
            </>
          ) : (
            <div className="py-8 text-center">
              <CheckCircle className="mx-auto h-14 w-14 text-green-600" />

              <h3 className="mt-5 text-2xl font-bold text-[#252525]">
                Thank You for Reaching Out
              </h3>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-600">
                Your demo submission has been completed. No request was sent
                to CareConnect or saved to a server.
              </p>

              <button
                type="button"
                onClick={resetForm}
                className="mt-6 rounded-lg bg-[#F4C95D] px-6 py-3 font-semibold text-[#252525] transition hover:bg-[#EAB941]"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HelpSupportSection;
