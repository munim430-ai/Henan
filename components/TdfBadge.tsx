import { ArrowRight, Banknote, Leaf, Zap } from "lucide-react";

export default function TdfBadge() {
  return (
    <section className="py-16 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Left: Main content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-700/50 rounded-full text-green-300 text-sm font-semibold mb-4">
                  <Banknote size={14} />
                  Bangladesh Bank Financing
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  TDF & Green Fund Soft Loans at{" "}
                  <span className="text-green-300">5% Interest</span>
                </h2>
                <p className="text-green-100 text-lg mb-6 max-w-lg">
                  Bangladesh Bank&apos;s Technology Development Fund (TDF) and
                  Green Finance Fund offer subsidized loans for energy-efficient
                  and biomass boilers. We help your factory apply — zero upfront
                  payment options available.
                </p>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-800 font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg"
                >
                  Ask About Financing
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Right: Key points */}
              <div className="flex flex-col gap-4 lg:w-80">
                {[
                  {
                    icon: <Zap size={20} className="text-green-300" />,
                    title: "5% Interest Rate",
                    desc: "vs. 12–18% commercial rates",
                  },
                  {
                    icon: <Leaf size={20} className="text-green-300" />,
                    title: "Biomass Boilers Eligible",
                    desc: "Rice husk, wood chips, bagasse",
                  },
                  {
                    icon: <Banknote size={20} className="text-green-300" />,
                    title: "Zero Upfront Options",
                    desc: "We assist with application process",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 bg-green-800/40 rounded-xl p-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-700/50 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">
                        {item.title}
                      </p>
                      <p className="text-green-300 text-xs mt-0.5">
                        {item.desc}
                      </p>
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
