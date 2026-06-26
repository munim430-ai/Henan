import { CheckCircle2, Shield } from "lucide-react";

const complianceItems = [
  "Chief Inspector prior approval (Form-D)",
  "Construction drawings & structural calculations",
  "P&ID diagrams & steam pipe plans",
  "Testing certificates & manufacturing records",
  "Registration application support",
  "Installation & commissioning supervision",
  "Operator training (Grade-1, 2, 3 certificates)",
  "Annual maintenance contracts",
];

const laws = [
  "Boiler Act 2022 (Bangladesh)",
  "Boiler Rules 2025",
  "Bangladesh Labour Act 2006",
  "ISO 9001:2015",
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Checklist */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-navy text-sm font-semibold rounded-full mb-4">
              <Shield size={14} />
              Full Compliance Package
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              Every Henan Sitong Boiler Ships with Full Bangladesh Documentation
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Unlike other suppliers who leave you to handle registration alone,
              we include every document required by the Chief Inspector of
              Boilers — so there are{" "}
              <strong>zero delays at Chattogram port</strong>.
            </p>

            <div className="space-y-3 mb-8">
              {complianceItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-brand-green flex-shrink-0"
                  />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {laws.map((law) => (
                <span
                  key={law}
                  className="px-3 py-1.5 bg-blue-50 border border-blue-200 text-brand-navy text-sm font-semibold rounded-lg"
                >
                  {law}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Process timeline */}
          <div>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-brand-navy mb-6">
                Bangladesh Import & Registration Process
              </h3>
              <div className="space-y-0">
                {[
                  {
                    step: "01",
                    title: "Factory Assessment",
                    desc: "Free on-site visit to assess your needs and existing equipment.",
                    color: "bg-blue-600",
                  },
                  {
                    step: "02",
                    title: "Form-D Application",
                    desc: "We prepare and submit Chief Inspector prior approval with all drawings.",
                    color: "bg-blue-600",
                  },
                  {
                    step: "03",
                    title: "Manufacturing & Testing",
                    desc: "Factory production with quality inspections per Bangladesh requirements.",
                    color: "bg-blue-600",
                  },
                  {
                    step: "04",
                    title: "Chittagong Port Clearance",
                    desc: "All customs and port documentation prepared for zero delays.",
                    color: "bg-brand-green",
                  },
                  {
                    step: "05",
                    title: "Installation & Commissioning",
                    desc: "Local team oversees installation with full government inspection support.",
                    color: "bg-brand-green",
                  },
                  {
                    step: "06",
                    title: "Registration & Operation",
                    desc: "Full government registration, operator certification, and ongoing support.",
                    color: "bg-brand-green",
                  },
                ].map((item, i, arr) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-9 h-9 rounded-full ${item.color} text-white text-xs font-extrabold flex items-center justify-center flex-shrink-0`}
                      >
                        {item.step}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-0.5 h-8 bg-gray-200 my-1" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="font-bold text-brand-navy text-sm">
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
