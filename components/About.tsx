import { Factory, Globe2, Shield } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-navy text-sm font-semibold rounded-full mb-4">
              About Henan Sitong
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 leading-tight">
              China&apos;s Grade A Boiler Manufacturer —{" "}
              <span className="text-brand-green">
                Now Serving Bangladesh Factories
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Henan Province Sitong Boiler Co., Ltd. has been manufacturing
              industrial boilers for over 30 years. Our boilers are{" "}
              <strong>already operating in Bangladesh factories</strong>. We
              understand Bangladesh&apos;s Boiler Act 2022, Boiler Rules 2025,
              the Chittagong port process, and the realities of running
              production during the gas crisis.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Every boiler ships with{" "}
              <strong>
                complete Bangladesh registration documentation
              </strong>{" "}
              — ensuring zero delays at Chattogram port and full compliance with
              the Chief Inspector of Boilers.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-50 text-brand-navy text-sm font-semibold rounded-lg">
                ISO 9001:2015
              </span>
              <span className="px-4 py-2 bg-green-50 text-brand-green text-sm font-semibold rounded-lg">
                CE Certified
              </span>
              <span className="px-4 py-2 bg-blue-50 text-brand-navy text-sm font-semibold rounded-lg">
                Grade A Licensed
              </span>
              <span className="px-4 py-2 bg-green-50 text-brand-green text-sm font-semibold rounded-lg">
                ASME Standards
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Factory size={28} className="text-brand-navy" />,
                value: "30+",
                label: "Years Manufacturing",
                bg: "bg-blue-50",
              },
              {
                icon: <Globe2 size={28} className="text-brand-green" />,
                value: "90+",
                label: "Countries Served",
                bg: "bg-green-50",
              },
              {
                icon: <Shield size={28} className="text-brand-navy" />,
                value: "1,680+",
                label: "Boilers Delivered",
                bg: "bg-blue-50",
              },
              {
                icon: (
                  <span className="text-2xl font-extrabold text-brand-green">
                    BD
                  </span>
                ),
                value: "Running Now",
                label: "In Bangladesh Factories",
                bg: "bg-green-50",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`${stat.bg} rounded-2xl p-6 flex flex-col gap-3`}
              >
                <div>{stat.icon}</div>
                <div>
                  <p className="text-2xl font-extrabold text-brand-navy">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 font-medium mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Factory photos */}
        <div className="mt-16">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Henan Sitong — 300,000 m² Factory Complex
          </p>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              "https://www.sitong-boiler.com/static/image/gongsi1.jpg",
              "https://www.sitong-boiler.com/static/image/gongsi2.jpg",
              "https://www.sitong-boiler.com/static/image/gongsi3.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-md"
              >
                <Image
                  src={src}
                  alt={`Henan Sitong factory ${i + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
