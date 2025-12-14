// src/Components/CampaignsPage.jsx
import { Link } from "react-router-dom";
import { campaigns } from "./campaignsData";

export default function CampaignsPage() {
  return (
    <section id="campaigns" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 lg:py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
          <div>
            <p className="text-xs md:text-sm font-medium text-emerald-700 tracking-[0.18em] uppercase mb-1">
              Our Campaigns
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Choose a campaign to explore in detail.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Har campaign ka apna unique impact hai. Card par click karein aur
            detail page me sari pictures, stats aur kahani dekhein.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {campaigns.map((camp) => (
            <Link
              key={camp.id}
              to={`/campaigns/${camp.id}`}
              className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md hover:border-emerald-300 transition h-full flex flex-col text-left overflow-hidden"
            >
              {/* Image section */}
              <div className="relative h-32 w-full overflow-hidden">
                <img
                  src={camp.mainImage}
                  alt={camp.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text section */}
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[11px] inline-block mb-2 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Campaign
                </span>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-1 line-clamp-2">
                  {camp.shortTitle}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 line-clamp-3 mb-3">
                  {camp.subtitle}
                </p>

                {/* Button for campaign details */}
                <div className="mt-auto">
                  <span className="inline-flex items-center text-xs font-semibold text-emerald-700">
                    More Info →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
