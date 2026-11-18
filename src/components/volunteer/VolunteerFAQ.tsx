



import { useState } from "react";
import { ChevronDown,  CheckCircle2 } from "lucide-react";
import volunteerFaq from "../../assets/images/volunteer/volunteerFaq.avif";

const faqs = [
  {
    question: "Do I need prior experience to volunteer?",
    answer:
      "No. Many opportunities are suitable for beginners. We will help you explore a role that matches your interests and abilities.",
  },
  {
    question: "Is there a minimum time commitment?",
    answer:
      "You can share your preferred availability when applying. The time commitment may vary depending on the project and role.",
  },
  {
    question: "Can I volunteer remotely?",
    answer:
      "Yes. Selected activities, such as content writing, design, web development, and digital support, may be completed remotely.",
  },
  {
    question: "Will I receive a volunteer certificate?",
    answer:
      "Certificates or letters of appreciation may be provided according to CareConnect's volunteer participation and completion criteria.",
  },
  {
    question: "How will I know which role suits me?",
    answer:
      "Share your interests, skills, and availability in the application form. These details can help the team identify suitable opportunities.",
  },
];

export const VolunteerFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);



  return (
    <section className="bg-linear-to-b from-white via-amber-50/30 to-white px-4 py-14 sm:py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-10 text-center lg:text-left">
         <span className="w-fit inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-900 shadow-sm mb-3">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
            Need more Information
            </span>

          <h2 className="mt-2 font-[Fredoka] text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>

          <p className="mt-2 text-xs text-neutral-600 sm:text-sm max-w-xl">
            Everything you need to know before joining us as a changemaker.
          </p>
        </div>

        {/* 2-Column Grid: Left Visual / Right FAQ Accordion */}
        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12">
          
          {/* Left Column: Visual Showcase & CTA Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Image Container with Glow */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 shadow-sm aspect-4/3 lg:aspect-4/3">
              <img
                src={volunteerFaq}
                alt="Volunteers collaborating"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 p-3.5 backdrop-blur-md border border-neutral-100 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400 text-neutral-950 font-bold">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900">Have More Questions?</p>
                    <p className="text-[11px] text-neutral-500">Our support team is here to assist you 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card underneath Image */}
            {/* <div className="rounded-2xl bg-neutral-950 p-6 text-white shadow-md">
              <p className="font-[Fredoka] text-lg font-bold text-white">
                Ready to make a difference?
              </p>
              <p className="mt-1.5 text-xs text-neutral-300 leading-relaxed">
                Your journey as a changemaker can start today. Join our community of dedicated volunteers nationwide.
              </p>

              <button
                type="button"
                onClick={scrollToForm}
                className="mt-4 w-full rounded-full bg-amber-400 px-5 py-2.5 text-xs font-bold text-neutral-950 transition-colors hover:bg-amber-300 cursor-pointer shadow-xs select-none"
              >
                Join CareConnect
              </button>
            </div> */}
          </div>

          {/* Right Column: FAQ Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-amber-300 bg-amber-50/60 shadow-xs"
                      : "border-neutral-200 bg-white hover:border-neutral-300"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer select-none"
                  >
                    <span className="text-xs font-bold leading-snug text-neutral-900 sm:text-sm">
                      {faq.question}
                    </span>

                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-amber-200/80 text-amber-900" : "bg-neutral-100 text-neutral-500"
                    }`}>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-amber-200/60 px-5 py-3.5 bg-white/50">
                      <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default VolunteerFAQ;