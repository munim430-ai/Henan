import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const navSections = [
  {
    title: "Products",
    links: [
      { label: "WNS Gas/Oil Boiler", href: "#products" },
      { label: "SZS Water Tube Boiler", href: "#products" },
      { label: "Biomass Boiler", href: "#products" },
      { label: "Coal Boiler", href: "#products" },
      { label: "Thermal Oil Heater", href: "#products" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Bangladesh Compliance", href: "#compliance" },
      { label: "Import & Registration", href: "#compliance" },
      { label: "TDF/Green Fund Loans", href: "#quote" },
      { label: "Annual Maintenance", href: "#after-sales" },
      { label: "Operator Training", href: "#after-sales" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Henan Sitong", href: "#about" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "After-Sales Support", href: "#after-sales" },
      { label: "Get a Quote", href: "#quote" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <div className="mb-6">
              <span className="text-white font-extrabold text-xl tracking-wide">
                HENAN SITONG
              </span>
              <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mt-0.5">
                Bangladesh Authorized Representative
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Operated by Keystone Consultancy. ISO 9001 certified industrial
              boilers for Bangladesh factories. Full Boiler Act 2022 compliance
              included.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+8801941646278"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              >
                <Phone size={15} className="text-brand-green flex-shrink-0" />
                +880 1941 646278
              </a>
              <a
                href="https://wa.me/8801941646278"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              >
                <MessageCircle
                  size={15}
                  className="text-brand-green flex-shrink-0"
                />
                WhatsApp: +880 1941 646278
              </a>
              <a
                href="mailto:munimm247@gmail.com"
                className="flex items-center gap-3 text-sm hover:text-white transition-colors"
              >
                <Mail size={15} className="text-brand-green flex-shrink-0" />
                munimm247@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-brand-green flex-shrink-0 mt-0.5" />
                <span>Gazipur, Dhaka Division, Bangladesh</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock
                  size={15}
                  className="text-brand-green flex-shrink-0 mt-0.5"
                />
                <span>Sat–Thu: 9:00 AM – 6:00 PM (BST)</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO Keywords band */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong className="text-gray-500">
              Keywords for search engines:
            </strong>{" "}
            Henan Sitong Boiler Bangladesh · cheap boiler Bangladesh · boiler
            import Bangladesh · biomass boiler Bangladesh price · gas boiler
            Bangladesh · steam boiler supplier Bangladesh · boiler registration
            Bangladesh · Gazipur boiler supplier · RMG factory boiler
            Bangladesh · TDF loan boiler Bangladesh · Boiler Act 2022 ·
            Boiler Rules 2025 · Chief Inspector of Boilers · Form-D Bangladesh
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Henan Sitong Boiler — Bangladesh
              Authorized Representative. Operated by Keystone Consultancy.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>WeChat: hasibul_munim</span>
              <span className="text-gray-700">·</span>
              <span>Email: munimm247@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
