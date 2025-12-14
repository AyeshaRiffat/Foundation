// src/Components/CampaignDetailPage.jsx
import { useParams } from "react-router-dom";
import { campaigns } from "./campaignsData";

export default function CampaignDetailPage() {
  const { id } = useParams();
  const camp = campaigns.find((c) => c.id === id);

  if (!camp) {
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <p className="text-sm text-slate-600 mb-3">Campaign not found.</p>
      </div>
    );
  }

  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 lg:py-12 space-y-6">
        {/* Hero section */}
        <div className="relative h-64 md:h-96">
          <img
            src={camp.mainImage}
            alt={camp.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          <div className="absolute left-5 bottom-5 text-white">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-200 mb-1">
              HopeBridge Foundation
            </p>
            <p className="text-lg sm:text-xl font-semibold">{camp.shortTitle}</p>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-3 gap-3">
          {camp.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-center shadow-sm"
            >
              <p className="text-xl font-bold text-emerald-800">
                {stat.value}
              </p>
              <p className="text-xs text-emerald-900 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* About + Highlights */}
        <div className="grid md:grid-cols-[1.6fr,1.4fr] gap-4 md:gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              About this campaign
            </h3>
            <p className="text-sm text-slate-600">{camp.description}</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              How your support helps
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-700">
              {camp.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500 text-lg">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-slate-900">
              Campaign gallery
            </h3>
            <p className="text-xs text-slate-500">
              Real moments from the field.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {camp.gallery.map((img, i) => (
              <div
                key={i}
                className="h-28 sm:h-32 rounded-2xl overflow-hidden bg-slate-100"
              >
                <img
                  src={img}
                  alt={`${camp.title} photo ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
