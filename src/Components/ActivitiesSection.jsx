import React from "react";

function ActivitiesSection() {
  return (
    <section id="activities" className="max-w-6xl mx-auto px-4 md:px-6 py-8 lg:py-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-700 mb-2">Discover our activities</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Where your kindness turns into action</h2>
        </div>
        <p className="text-sm text-slate-600 max-w-md">
          From emergency food packs to long-term education support, every project is designed with transparency and impact in mind.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="h-32 w-full">
            <img
              src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg"
              alt="Children in classroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-emerald-700">Education for All</h3>
            <p className="text-sm text-slate-600 mb-2">
              School fees, books and uniforms for children from low-income families, so they can dream bigger.
            </p>
            <p className="text-xs text-slate-500">3,200+ students currently supported.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="h-32 w-full">
            <img
              src="https://images.pexels.com/photos/6646910/pexels-photo-6646910.jpeg"
              alt="Food distribution"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-sky-700">Food & Winter Relief</h3>
            <p className="text-sm text-slate-600 mb-2">
              Monthly ration packs, cooked meals and winter clothes for families facing extreme hardship.
            </p>
            <p className="text-xs text-slate-500">50,000+ meals served last year.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="h-32 w-full">
            <img
              src="https://images.pexels.com/photos/6715/woman-water-rwanda-africa.jpg"
              alt="Clean water project"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-amber-700">Clean Water Projects</h3>
            <p className="text-sm text-slate-600 mb-2">
              Hand pumps and filtration plants in rural areas where clean drinking water is still a luxury.
            </p>
            <p className="text-xs text-slate-500">40+ water projects installed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
