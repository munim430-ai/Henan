"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const boilerTypes = [
  "Natural Gas",
  "Diesel/HFO",
  "Coal",
  "Biomass/Rice Husk",
  "None (New Installation)",
  "Other",
];

const capacities = [
  "0.5 ton/hr",
  "1 ton/hr",
  "2 ton/hr",
  "3 ton/hr",
  "5 ton/hr",
  "8 ton/hr",
  "10 ton/hr",
  "15 ton/hr",
  "20+ ton/hr",
  "Not sure — need assessment",
];

const applications = [
  "RMG / Garments",
  "Textile / Spinning",
  "Dyeing & Printing",
  "Food Processing",
  "Pharmaceutical",
  "Paper & Packaging",
  "Chemical Industry",
  "Other",
];

export default function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      factoryName: (form.elements.namedItem("factoryName") as HTMLInputElement)
        .value,
      boilerType: (form.elements.namedItem("boilerType") as HTMLSelectElement)
        .value,
      capacity: (form.elements.namedItem("capacity") as HTMLSelectElement)
        .value,
      application: (
        form.elements.namedItem("application") as HTMLSelectElement
      ).value,
      contactName: (
        form.elements.namedItem("contactName") as HTMLInputElement
      ).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error || "Submission failed");
        setState("error");
      }
    } catch {
      setErrorMsg(
        "Network error. Please call us at +880 1941 646278 or WhatsApp."
      );
      setState("error");
    }
  }

  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-brand-green text-sm font-semibold rounded-full mb-4">
            Free Quote
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
            Request a Free Factory Assessment & Quote
          </h2>
          <p className="text-lg text-gray-600">
            We respond within 24 hours. Tell us your factory&apos;s needs and
            we&apos;ll recommend the right boiler with exact pricing.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          {state === "success" ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-brand-green" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-navy mb-3">
                Quote Request Received!
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Thank you! Our team will contact you within{" "}
                <strong>24 hours</strong> with a detailed quote and factory
                assessment schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+8801941646278"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-xl"
                >
                  📞 Call Now for Faster Response
                </a>
                <button
                  onClick={() => setState("idle")}
                  className="px-6 py-3 border border-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-50"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {state === "error" && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle
                    size={20}
                    className="text-red-500 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-red-700 font-semibold text-sm">
                      Submission Error
                    </p>
                    <p className="text-red-600 text-sm mt-0.5">
                      {errorMsg} — WhatsApp:{" "}
                      <a
                        href="https://wa.me/8801941646278"
                        className="underline"
                      >
                        +880 1941 646278
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Factory Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Factory Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="factoryName"
                    required
                    placeholder="e.g. ABC Textiles Ltd."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
                  />
                </div>

                {/* Current Boiler Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Current Boiler Type
                  </label>
                  <select
                    name="boilerType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition bg-white"
                  >
                    <option value="">Select fuel type...</option>
                    {boilerTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Capacity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Capacity Needed
                  </label>
                  <select
                    name="capacity"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition bg-white"
                  >
                    <option value="">Select capacity...</option>
                    {capacities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Application */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Factory Application
                  </label>
                  <select
                    name="application"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition bg-white"
                  >
                    <option value="">Select application...</option>
                    {applications.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+880 17XX XXXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@factory.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Additional Requirements
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your factory, current boiler issues, fuel source, steam pressure requirements, or any specific needs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-white font-bold text-lg rounded-xl hover:bg-brand-green-dark disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
              >
                {state === "loading" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending Your Request...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Request Free Quote & Assessment
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-xs">
                By submitting, you agree to be contacted by Keystone
                Consultancy. We do not spam — we only contact about your
                request.
              </p>
            </form>
          )}
        </div>

        {/* Alternative contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Prefer to contact directly?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+8801941646278"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold text-sm rounded-xl hover:bg-gray-50 shadow-sm"
            >
              📞 +880 1941 646278
            </a>
            <a
              href="https://wa.me/8801941646278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold text-sm rounded-xl hover:bg-gray-50 shadow-sm"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:munimm247@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold text-sm rounded-xl hover:bg-gray-50 shadow-sm"
            >
              ✉️ munimm247@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
