import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background:
          "linear-gradient(135deg, #0F2444 0%, #1B3A6B 50%, #14532D 100%)",
      }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl">
          {/* Country badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <span className="text-base">🇧🇩</span>
            Bangladesh Authorized Representative
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Henan Sitong Boiler
            <span className="block text-green-400 mt-1">
              Bangladesh Partner
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 font-medium mb-4 max-w-2xl">
            15–25% Below Premium Brands.
            <span className="text-green-300 font-semibold">
              {" "}
              Full Bangladesh Compliance Included.
            </span>
          </p>

          <p className="text-base md:text-lg text-blue-200 mb-10 max-w-2xl">
            ISO 9001 certified boilers — gas, biomass, coal — with complete
            Boiler Act 2022 registration documentation. Local service team in
            Gazipur.
          </p>

          {/* Key points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-xl">
            {[
              "No gas? Run on rice husk biomass",
              "Boiler Rules 2025 documents included",
              "TDF / Green Fund financing at 5%",
              "24-hour emergency service, Gazipur",
            ].map((point) => (
              <div key={point} className="flex items-start gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-400 mt-0.5 flex-shrink-0"
                />
                <span className="text-blue-100 text-sm">{point}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white font-bold text-lg rounded-xl hover:bg-brand-green-dark transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Get Free Factory Assessment
              <ArrowRight size={20} />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-200"
            >
              View All Products
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">50+</span>
              Countries Served
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">30+</span>
              Years Manufacturing
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">Grade A</span>
              Licensed Factory
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
