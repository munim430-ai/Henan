import { CheckCircle2, TrendingDown, FileCheck2, Wrench } from "lucide-react";

const reasons = [
  {
    icon: <CheckCircle2 size={32} className="text-brand-green" />,
    title: "Proven in Bangladesh",
    description:
      "Our boilers are already running in Bangladesh factories. We know the climate, the water quality, and the regulatory requirements. Your factory is not a test case.",
    highlight: "Active BD installations",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: <TrendingDown size={32} className="text-brand-navy-light" />,
    title: "15–25% Cost Savings",
    description:
      "Compared to Grade-A premium brands like Taiguo, we offer the same reliability at 15–25% lower cost. In Bangladesh's competitive RMG market, every taka matters.",
    highlight: "Same quality, lower price",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <FileCheck2 size={32} className="text-brand-green" />,
    title: "Compliance Guarantee",
    description:
      "We provide every document required by the Chief Inspector of Boilers: construction drawings, strength calculations, P&ID diagrams, steam pipe plans, and testing certificates.",
    highlight: "Zero port delays",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: <Wrench size={32} className="text-brand-navy-light" />,
    title: "Local Service Partner",
    description:
      "Our Bangladesh partner, Keystone Consultancy, provides import approval coordination, installation supervision, government registration support, and 24-hour emergency response in Gazipur.",
    highlight: "Based in Gazipur, Dhaka",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-navy text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
            Why Bangladesh Factories Choose Henan Sitong
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re not just a supplier — we&apos;re a long-term operational
            partner with local presence and proven compliance experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`${reason.bg} border ${reason.border} rounded-2xl p-8 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                      0{i + 1}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 bg-white rounded-full text-brand-navy shadow-sm">
                      {reason.highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
