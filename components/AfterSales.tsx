import { CheckCircle2, Clock, Package, Settings, GraduationCap, Leaf } from "lucide-react";

const services = [
  {
    icon: <Clock size={28} className="text-brand-navy" />,
    title: "24-Hour Emergency Repair",
    desc: "Our Gazipur-based team responds within 24 hours. No waiting weeks for a technician from China.",
    bg: "bg-blue-50",
  },
  {
    icon: <Package size={28} className="text-brand-green" />,
    title: "Local Spare Parts Stock",
    desc: "Critical spare parts stocked in Gazipur. No 3-week shipping delays from China for emergency repairs.",
    bg: "bg-green-50",
  },
  {
    icon: <Settings size={28} className="text-brand-navy" />,
    title: "Annual Maintenance Contracts",
    desc: "Scheduled inspections, water quality testing, efficiency tuning. Keep your boiler running at peak performance.",
    bg: "bg-blue-50",
  },
  {
    icon: <GraduationCap size={28} className="text-brand-green" />,
    title: "Operator Licensing Training",
    desc: "Full training programs for Grade-1, Grade-2, and Grade-3 boiler operator certificates per Bangladesh Boiler Rules.",
    bg: "bg-green-50",
  },
  {
    icon: <Leaf size={28} className="text-brand-navy" />,
    title: "Biomass Fuel Supply",
    desc: "Rice husk pellet delivery available directly to your factory. Eliminate fuel supply chain risk.",
    bg: "bg-blue-50",
  },
  {
    icon: <CheckCircle2 size={28} className="text-brand-green" />,
    title: "Government Liaison",
    desc: "Annual renewal applications, inspection scheduling, and Chief Inspector liaison handled by our team.",
    bg: "bg-green-50",
  },
];

export default function AfterSales() {
  return (
    <section id="after-sales" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-navy text-sm font-semibold rounded-full mb-4">
            After-Sales Support
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
            Unlike Other Chinese Suppliers —{" "}
            <span className="text-brand-green">We&apos;re Here After the Sale</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our Bangladesh partner, Keystone Consultancy, operates a local team
            in Gazipur with spare parts, trained technicians, and direct
            government relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className={`${service.bg} rounded-2xl p-6 hover:shadow-md transition-shadow`}
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-brand-navy rounded-2xl p-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">
            Local Operations Partner
          </p>
          <h3 className="text-2xl font-extrabold text-white mb-2">
            Keystone Consultancy — Gazipur, Dhaka
          </h3>
          <p className="text-blue-200 mb-6">
            Your dedicated point of contact for everything post-installation:
            maintenance, spare parts, government renewals, operator training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+8801941646278"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-dark transition-colors"
            >
              📞 +880 1941 646278
            </a>
            <a
              href="https://wa.me/8801941646278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
