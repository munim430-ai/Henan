"use client";

import { useState, useMemo } from "react";
import { Calculator, TrendingDown, ArrowRight } from "lucide-react";

const STEAM_ENTHALPY = 660; // kcal per kg of steam at ~1.0 MPa

const fuels = [
  {
    name: "Natural Gas",
    unit: "Nm³",
    calorific: 8500,
    efficiency: 0.98,
    defaultPrice: 42,
    priceLabel: "BDT per Nm³",
    color: "bg-blue-500",
    tip: "Piped gas — where available",
  },
  {
    name: "LPG",
    unit: "kg",
    calorific: 11000,
    efficiency: 0.98,
    defaultPrice: 115,
    priceLabel: "BDT per kg",
    color: "bg-cyan-500",
    tip: "Cylinders or bulk tank",
  },
  {
    name: "Diesel / HFO",
    unit: "kg",
    calorific: 10200,
    efficiency: 0.92,
    defaultPrice: 105,
    priceLabel: "BDT per kg",
    color: "bg-gray-500",
    tip: "~1.15 kg per litre",
  },
  {
    name: "Coal",
    unit: "kg",
    calorific: 5500,
    efficiency: 0.82,
    defaultPrice: 15,
    priceLabel: "BDT per kg",
    color: "bg-slate-600",
    tip: "Imported coal",
  },
  {
    name: "Rice Husk Pellets",
    unit: "kg",
    calorific: 3500,
    efficiency: 0.85,
    defaultPrice: 8,
    priceLabel: "BDT per kg",
    color: "bg-green-600",
    tip: "Bangladesh's cheapest industrial fuel",
  },
  {
    name: "Wood Chips",
    unit: "kg",
    calorific: 3500,
    efficiency: 0.85,
    defaultPrice: 10,
    priceLabel: "BDT per kg",
    color: "bg-lime-600",
    tip: "Locally available in most districts",
  },
  {
    name: "Bagasse",
    unit: "kg",
    calorific: 2200,
    efficiency: 0.87,
    defaultPrice: 4,
    priceLabel: "BDT per kg",
    color: "bg-amber-600",
    tip: "Sugar mill by-product",
  },
];

const capacities = [0.5, 1, 2, 3, 5, 8, 10, 15, 20];

function calcConsumption(capacityTph: number, fuelIdx: number) {
  const f = fuels[fuelIdx];
  // hourly heat needed = capacity (t/h) × 1000 kg/t × STEAM_ENTHALPY kcal/kg
  const heatKcalPerHr = capacityTph * 1000 * STEAM_ENTHALPY;
  // consumption (unit/hr) = heat / (efficiency × calorific value)
  return heatKcalPerHr / (f.efficiency * f.calorific);
}

function fmt(n: number, decimals = 0) {
  return n.toLocaleString("en-BD", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function FuelCalculator() {
  const [capacityIdx, setCapacityIdx] = useState(4); // 5 t/h default
  const [fuelIdx, setFuelIdx] = useState(4); // rice husk default
  const [hoursPerDay, setHoursPerDay] = useState(16);
  const [fuelPrice, setFuelPrice] = useState(fuels[4].defaultPrice);

  const capacity = capacities[capacityIdx];
  const fuel = fuels[fuelIdx];

  const hourlyConsumption = useMemo(
    () => calcConsumption(capacity, fuelIdx),
    [capacity, fuelIdx]
  );

  const hourlyCost = hourlyConsumption * fuelPrice;
  const dailyCost = hourlyCost * hoursPerDay;
  const monthlyCost = dailyCost * 26; // 26 working days
  const annualCost = dailyCost * 312;

  // Savings vs natural gas at default price
  const gasHourly = calcConsumption(capacity, 0);
  const gasCostPerHr = gasHourly * fuels[0].defaultPrice;
  const savingsPerHr = gasCostPerHr - hourlyCost;
  const annualSavings = savingsPerHr * hoursPerDay * 312;

  // Comparison table
  const comparison = fuels.map((f, i) => ({
    ...f,
    consumption: calcConsumption(capacity, i),
    monthlyCost: calcConsumption(capacity, i) * f.defaultPrice * hoursPerDay * 26,
  }));
  const cheapest = Math.min(...comparison.map((f) => f.monthlyCost));

  return (
    <section id="calculator" className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-green-300 text-sm font-semibold rounded-full mb-4">
            <Calculator size={14} />
            Fuel Cost Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            How Much Will Your Boiler Cost to Run?
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Enter your factory&apos;s requirements below. See real BDT operating
            costs and how much you save switching to biomass.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="text-white font-bold text-lg mb-6">
              Your Factory Requirements
            </h3>

            <div className="space-y-5">
              {/* Capacity */}
              <div>
                <label className="block text-blue-200 text-sm font-semibold mb-2">
                  Boiler Capacity (ton/hr steam)
                </label>
                <div className="flex flex-wrap gap-2">
                  {capacities.map((c, i) => (
                    <button
                      key={c}
                      onClick={() => setCapacityIdx(i)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                        capacityIdx === i
                          ? "bg-brand-green text-white shadow-lg scale-105"
                          : "bg-white/10 text-blue-200 hover:bg-white/20"
                      }`}
                    >
                      {c}T
                    </button>
                  ))}
                </div>
              </div>

              {/* Fuel type */}
              <div>
                <label className="block text-blue-200 text-sm font-semibold mb-2">
                  Fuel Type
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {fuels.map((f, i) => (
                    <button
                      key={f.name}
                      onClick={() => {
                        setFuelIdx(i);
                        setFuelPrice(f.defaultPrice);
                      }}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-all ${
                        fuelIdx === i
                          ? "bg-brand-green text-white"
                          : "bg-white/10 text-blue-200 hover:bg-white/15"
                      }`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full flex-shrink-0 ${f.color}`}
                      />
                      <span className="font-bold">{f.name}</span>
                      <span className="text-xs opacity-70 ml-auto">
                        {f.tip}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours per day */}
              <div>
                <label className="block text-blue-200 text-sm font-semibold mb-2">
                  Operating Hours per Day:{" "}
                  <span className="text-white font-bold">{hoursPerDay}h</span>
                </label>
                <input
                  type="range"
                  min={8}
                  max={24}
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full accent-green-400"
                />
                <div className="flex justify-between text-xs text-blue-300 mt-1">
                  <span>8h (1 shift)</span>
                  <span>16h (2 shifts)</span>
                  <span>24h (3 shifts)</span>
                </div>
              </div>

              {/* Fuel price */}
              <div>
                <label className="block text-blue-200 text-sm font-semibold mb-2">
                  Your Fuel Price ({fuel.priceLabel})
                </label>
                <input
                  type="number"
                  value={fuelPrice}
                  min={1}
                  onChange={(e) => setFuelPrice(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/20 text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Main result card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-4 h-4 rounded-full ${fuel.color} flex-shrink-0`}
                />
                <div>
                  <p className="font-bold text-brand-navy text-lg">
                    {fuel.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {capacity}T/hr · {hoursPerDay}h/day · {fmt(fuelPrice)} BDT/
                    {fuel.unit}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Hourly Consumption
                  </p>
                  <p className="text-2xl font-extrabold text-brand-navy">
                    {fmt(hourlyConsumption, 0)}
                  </p>
                  <p className="text-xs text-gray-500">{fuel.unit}/hr</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Hourly Cost
                  </p>
                  <p className="text-2xl font-extrabold text-brand-navy">
                    ৳{fmt(hourlyCost, 0)}
                  </p>
                  <p className="text-xs text-gray-500">BDT/hr</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Monthly Cost
                  </p>
                  <p className="text-2xl font-extrabold text-brand-navy">
                    ৳{fmt(monthlyCost / 100000, 2)}L
                  </p>
                  <p className="text-xs text-gray-500">26 working days</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Annual Cost
                  </p>
                  <p className="text-2xl font-extrabold text-brand-navy">
                    ৳{fmt(annualCost / 100000, 1)}L
                  </p>
                  <p className="text-xs text-gray-500">312 working days</p>
                </div>
              </div>

              {/* Savings vs gas */}
              {fuelIdx !== 0 && annualSavings > 0 && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <TrendingDown
                    size={20}
                    className="text-brand-green flex-shrink-0"
                  />
                  <div>
                    <p className="text-brand-green font-bold text-sm">
                      Save ৳{fmt(annualSavings / 100000, 1)} lakh/year vs.
                      natural gas
                    </p>
                    <p className="text-green-700 text-xs mt-0.5">
                      Based on gas at ৳{fuels[0].defaultPrice}/Nm³
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Comparison table */}
            <div className="bg-white rounded-2xl p-5 shadow-xl">
              <p className="font-bold text-brand-navy text-sm mb-3">
                Monthly Cost Comparison — {capacity}T/hr · {hoursPerDay}h/day
              </p>
              <div className="space-y-2">
                {comparison
                  .sort((a, b) => a.monthlyCost - b.monthlyCost)
                  .map((f) => (
                    <div key={f.name} className="flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${f.color}`}
                      />
                      <span className="text-xs font-medium text-gray-700 w-32 flex-shrink-0">
                        {f.name}
                      </span>
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${f.color}`}
                          style={{
                            width: `${Math.min(100, (f.monthlyCost / comparison[comparison.length - 1].monthlyCost) * 100)}%`,
                          }}
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-700 w-20 text-right flex-shrink-0">
                        ৳{fmt(f.monthlyCost / 100000, 1)}L
                        {f.monthlyCost === cheapest && (
                          <span className="ml-1 text-green-600">★</span>
                        )}
                      </span>
                    </div>
                  ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                ★ = cheapest option · L = lakh BDT · at typical Bangladesh prices
              </p>
            </div>

            <a
              href="#quote"
              className="flex items-center justify-center gap-2 w-full py-4 bg-brand-green text-white font-bold rounded-xl hover:bg-brand-green-dark transition-colors shadow-lg text-base"
            >
              Get Exact Quote for {capacity}T {fuel.name} Boiler
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
