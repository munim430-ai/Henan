import { CheckCircle2, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    series: "WNS",
    name: "WNS Gas/Oil Fire Tube Boiler",
    type: "Gas & Oil",
    capacity: "1–20 t/h",
    pressure: "0.7–2.0 MPa",
    efficiency: "≥98%",
    fuels: ["Natural Gas", "LPG", "Diesel", "HFO"],
    description:
      "Horizontal three-pass fire tube boiler. Fast assembly, compact, minimal footprint. Perfect for factories switching from coal to gas.",
    badge: "MOST POPULAR",
    headerColor: "bg-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="48" height="28" rx="6" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2"/>
        <rect x="16" y="26" width="32" height="16" rx="3" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5"/>
        <path d="M24 16 L32 8 L40 16" stroke="white" strokeWidth="2" fill="none"/>
        <rect x="28" y="8" width="8" height="8" rx="2" fill="white" fillOpacity="0.3"/>
        <circle cx="20" cy="34" r="4" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/>
        <circle cx="32" cy="34" r="4" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/>
        <circle cx="44" cy="34" r="4" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/>
        <rect x="14" y="48" width="36" height="4" rx="2" fill="white" fillOpacity="0.2"/>
      </svg>
    ),
  },
  {
    id: 2,
    series: "SZS",
    name: "SZS Gas/Oil Water Tube Boiler",
    type: "Gas & Oil",
    capacity: "10–40 t/h",
    pressure: "1.0–4.9 MPa",
    efficiency: "≥98%",
    fuels: ["Natural Gas", "LPG", "Diesel", "HFO"],
    description:
      "Double-drum water tube boiler for high-capacity steam demand in large RMG and textile plants.",
    badge: "HIGH CAPACITY",
    headerColor: "bg-indigo-700",
    badgeColor: "bg-indigo-100 text-indigo-800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="52" height="36" rx="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2"/>
        <rect x="10" y="18" width="20" height="28" rx="3" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5"/>
        <rect x="34" y="18" width="20" height="28" rx="3" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5"/>
        <path d="M30 22 L34 22 M30 28 L34 28 M30 34 L34 34 M30 40 L34 40" stroke="white" strokeWidth="2"/>
        <circle cx="20" cy="32" r="3" fill="white" fillOpacity="0.3"/>
        <circle cx="44" cy="32" r="3" fill="white" fillOpacity="0.3"/>
        <path d="M24 8 L24 14 M40 8 L40 14" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 3,
    series: "WNS-C",
    name: "Condensing Gas Boiler",
    type: "Gas",
    capacity: "2–25 t/h",
    pressure: "0.7–1.6 MPa",
    efficiency: "≥108%",
    fuels: ["Natural Gas", "LPG"],
    description:
      "Ultra-high efficiency condensing technology recovers flue gas heat. Lowest gas consumption per ton of steam in its class.",
    badge: "ULTRA EFFICIENT",
    headerColor: "bg-teal-700",
    badgeColor: "bg-teal-100 text-teal-800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8 C32 8 20 20 20 32 C20 44 26 52 32 52 C38 52 44 44 44 32 C44 20 32 8 32 8Z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2"/>
        <path d="M32 18 C32 18 24 26 24 34 C24 40 28 46 32 46 C36 46 40 40 40 34 C40 26 32 18 32 18Z" fill="white" fillOpacity="0.2"/>
        <path d="M28 34 L32 28 L36 34 L34 34 L34 40 L30 40 L30 34 Z" fill="white" fillOpacity="0.5"/>
        <path d="M12 28 L8 24 M16 20 L14 16 M20 14 L18 10" stroke="white" strokeWidth="1.5" strokeDasharray="2,2"/>
        <path d="M52 28 L56 24 M48 20 L50 16 M44 14 L46 10" stroke="white" strokeWidth="1.5" strokeDasharray="2,2"/>
      </svg>
    ),
  },
  {
    id: 4,
    series: "DZL",
    name: "DZL Coal Chain Grate Boiler",
    type: "Coal",
    capacity: "2–15 t/h",
    pressure: "0.7–2.5 MPa",
    efficiency: "≥82%",
    fuels: ["Coal", "Coke"],
    description:
      "Single-drum water tube chain grate boiler. Cost-effective for operations where coal is readily available.",
    badge: "LOWEST COST",
    headerColor: "bg-gray-700",
    badgeColor: "bg-gray-100 text-gray-700",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="22" width="48" height="24" rx="4" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2"/>
        <rect x="8" y="42" width="48" height="8" rx="3" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5"/>
        <path d="M16 22 L16 10" stroke="white" strokeWidth="2"/>
        <path d="M32 22 L32 14" stroke="white" strokeWidth="2"/>
        <path d="M48 22 L48 10" stroke="white" strokeWidth="2"/>
        <rect x="12" y="26" width="40" height="12" rx="2" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1"/>
        <path d="M12 30 L52 30 M12 34 L52 34" stroke="white" strokeWidth="1" strokeDasharray="3,2"/>
      </svg>
    ),
  },
  {
    id: 5,
    series: "SZL",
    name: "SZL Packaged Coal Boiler",
    type: "Coal",
    capacity: "4–35 t/h",
    pressure: "0.7–3.8 MPa",
    efficiency: "≥83%",
    fuels: ["Coal", "Biomass Blend"],
    description:
      "Double-drum water tube boiler with high steam output. Ideal for dyeing and printing factories with large steam demand.",
    badge: null,
    headerColor: "bg-slate-700",
    badgeColor: null,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="18" width="52" height="28" rx="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2"/>
        <rect x="6" y="36" width="52" height="10" rx="3" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5"/>
        <circle cx="20" cy="30" r="5" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
        <circle cx="32" cy="30" r="5" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
        <circle cx="44" cy="30" r="5" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
        <path d="M18 10 L18 18 M32 8 L32 18 M46 10 L46 18" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 6,
    series: "SZL-BIO",
    name: "SZL Biomass Water Tube Boiler",
    type: "Biomass",
    capacity: "6–50 t/h",
    pressure: "1.25–3.8 MPa",
    efficiency: "≥85%",
    fuels: ["Rice Husk", "Wood Chips", "Bagasse", "Straw"],
    description:
      "Burns rice husk pellets — Bangladesh's cheapest industrial fuel. Eligible for TDF/Green Fund financing at 5% interest.",
    badge: "TDF / GREEN FUND",
    headerColor: "bg-green-700",
    badgeColor: "bg-green-100 text-green-800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="24" width="48" height="24" rx="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2"/>
        <path d="M32 24 C32 24 22 12 28 6 C28 6 28 14 32 16 C36 14 36 6 36 6 C42 12 32 24 32 24Z" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/>
        <path d="M20 24 C20 24 14 16 18 10 C18 10 18 18 20 20" fill="white" fillOpacity="0.2"/>
        <path d="M44 24 C44 24 50 16 46 10 C46 10 46 18 44 20" fill="white" fillOpacity="0.2"/>
        <rect x="14" y="44" width="36" height="4" rx="2" fill="white" fillOpacity="0.2"/>
        <circle cx="24" cy="33" r="3" fill="white" fillOpacity="0.3"/>
        <circle cx="40" cy="33" r="3" fill="white" fillOpacity="0.3"/>
      </svg>
    ),
  },
  {
    id: 7,
    series: "DHL",
    name: "DHL Bagasse Corner Tube Boiler",
    type: "Biomass",
    capacity: "10–75 t/h",
    pressure: "1.25–3.8 MPa",
    efficiency: "≥87%",
    fuels: ["Bagasse", "Rice Husk", "Straw", "Wood"],
    description:
      "Large-capacity biomass boiler for sugar mills, large textile complexes, and paper factories.",
    badge: "LARGE SCALE",
    headerColor: "bg-lime-700",
    badgeColor: "bg-lime-100 text-lime-800",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="20" width="56" height="32" rx="5" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2"/>
        <path d="M24 20 L24 6 M32 20 L32 4 M40 20 L40 6" stroke="white" strokeWidth="2"/>
        <path d="M24 6 C24 6 26 10 28 8 C30 6 30 10 32 8 C34 6 34 10 36 8 C38 6 38 10 40 6" stroke="white" strokeWidth="1.5" fill="none"/>
        <rect x="10" y="26" width="44" height="6" rx="2" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1"/>
        <rect x="10" y="36" width="44" height="6" rx="2" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1"/>
        <rect x="10" y="44" width="44" height="4" rx="2" fill="white" fillOpacity="0.1"/>
      </svg>
    ),
  },
  {
    id: 8,
    series: "YLW",
    name: "YLW Thermal Oil Heater",
    type: "Coal/Biomass",
    capacity: "2,000–16,800 kW",
    pressure: "0.8–1.1 MPa",
    efficiency: "≥85%",
    fuels: ["Coal", "Rice Husk", "Wood Chips", "Natural Gas"],
    description:
      "Thermal oil heater for dyeing, printing, and chemical industries requiring precise temperature control up to 320°C without high-pressure steam.",
    badge: null,
    headerColor: "bg-orange-700",
    badgeColor: null,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="22" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="2"/>
        <circle cx="32" cy="32" r="14" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5"/>
        <path d="M32 12 L32 18 M32 46 L32 52 M12 32 L18 32 M46 32 L52 32" stroke="white" strokeWidth="2"/>
        <path d="M32 24 L32 32 L38 32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="2" fill="white"/>
        <path d="M20 20 L24 24 M44 20 L40 24 M20 44 L24 40 M44 44 L40 40" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-brand-green text-sm font-semibold rounded-full mb-4">
            Product Range
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
            Industrial Boilers for Bangladesh Factories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every model ships with full Bangladesh registration documentation.
            Gas, biomass, coal — we have the right solution for your factory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card overflow-hidden group flex flex-col"
            >
              {/* Card Header */}
              <div
                className={`${product.headerColor} px-5 py-6 flex flex-col items-center text-center relative`}
              >
                {product.badge && (
                  <span
                    className={`absolute top-3 right-3 text-xs font-extrabold px-2 py-0.5 rounded-full ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                )}
                <div className="mb-3">{product.icon}</div>
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">
                  {product.series}
                </span>
                <h3 className="text-white font-bold text-sm mt-1 leading-snug">
                  {product.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Specs */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Capacity</span>
                    <span className="text-brand-navy font-bold">
                      {product.capacity}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Pressure</span>
                    <span className="text-brand-navy font-bold">
                      {product.pressure}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">
                      Efficiency
                    </span>
                    <span className="text-brand-green font-bold">
                      {product.efficiency}
                    </span>
                  </div>
                </div>

                {/* Fuel tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.fuels.map((fuel) => (
                    <span
                      key={fuel}
                      className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium"
                    >
                      {fuel}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>

                {/* BD Registration badge */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-green-50 border border-green-200 rounded-lg mb-4">
                  <CheckCircle2 size={14} className="text-brand-green flex-shrink-0" />
                  <span className="text-xs font-bold text-brand-green">
                    Bangladesh Registration: INCLUDED
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="#quote"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-navy text-white text-sm font-semibold rounded-lg hover:bg-brand-navy-dark transition-colors group-hover:bg-brand-green"
                >
                  Request Quote
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Don&apos;t see the exact model you need?
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-dark transition-colors shadow-md"
          >
            Request Custom Specification
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
