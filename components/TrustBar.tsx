const trustItems = [
  { icon: "🏆", label: "ISO 9001 Certified", sub: "Grade A Licensed" },
  { icon: "🌍", label: "Exported to 90+ Countries", sub: "ASME, CE, SGS certified" },
  {
    icon: "📋",
    label: "Bangladesh Reg. Docs Included",
    sub: "Boiler Act 2022",
  },
  { icon: "🔧", label: "Local Service in Gazipur", sub: "24-hr response" },
  { icon: "💰", label: "15–25% Cost Savings", sub: "vs. premium brands" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center py-3 px-2"
            >
              <span className="text-2xl mb-2">{item.icon}</span>
              <p className="text-sm font-bold text-brand-navy leading-tight">
                {item.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
