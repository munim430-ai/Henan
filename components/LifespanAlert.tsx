import { AlertTriangle, ArrowRight } from "lucide-react";

export default function LifespanAlert() {
  return (
    <section className="bg-amber-50 border-y-2 border-amber-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-400">
            <AlertTriangle className="text-amber-600" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-extrabold text-amber-900 text-lg uppercase tracking-wide">
              URGENT: Boiler Rules 2025 — 30-Year Lifespan Limit
            </h3>
            <p className="text-amber-800 text-sm mt-1">
              New Boiler Rules 2025 set maximum packaged boiler lifespan at{" "}
              <strong>30 years</strong>. If your boiler was installed before{" "}
              <strong>1995</strong>, it CANNOT be renewed — replacement is
              mandatory. Penalties apply under Boiler Act 2022.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-lg transition-colors shadow-md whitespace-nowrap"
            >
              Free Lifespan Assessment
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
