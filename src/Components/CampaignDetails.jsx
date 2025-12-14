import { useState } from "react";

// sab campaigns ka data
const campaignsDetail = [
  {
    id: "clean-water",
    anchorId: "campaign-clean-water",
    title: "Clean Water Changes Everything",
    shortTitle: "Clean Water",
    subtitle:
      "Bringing safe drinking water to families who walk miles every day.",
    mainImage:
      "https://images.pexels.com/photos/6715/woman-water-rwanda-africa.jpg",
    description:
      "In many villages, women and children walk long distances just to fetch a few buckets of water. Often this water is dirty and unsafe. Our Clean Water campaign installs hand pumps, filtration units and small-scale water plants so that families can drink, cook and wash safely near their homes.",
    highlights: [
      "Installation of hand pumps and solar-powered water plants",
      "Community-led maintenance training so projects stay sustainable",
      "Special focus on schools and health centers",
    ],
    stats: [
      { label: "Wells Installed", value: "120+" },
      { label: "People Getting Clean Water", value: "18,000+" },
      { label: "Villages Reached", value: "35" },
    ],
    gallery: [
      "https://images.pexels.com/photos/6716/water-girl-rwanda-carrying-6716.jpg",
      "https://images.pexels.com/photos/4207909/pexels-photo-4207909.jpeg",
      "https://images.pexels.com/photos/40775/water-can-drinking-thirst-40775.jpeg",
    ],
  },
  {
    id: "vocational-women",
    anchorId: "campaign-vocational-women",
    title: "Support Vocational Trainings for Vulnerable Women",
    shortTitle: "Vocational Training for Women",
    subtitle:
      "Helping women build skills, confidence and a stable source of income.",
    mainImage:
      "https://images.pexels.com/photos/4621640/pexels-photo-4621640.jpeg",
    description:
      "Many women are the only support for their families but have never had a chance to learn a skill. Through this campaign we provide trainings such as stitching, handicrafts, beautician work and basic digital literacy so they can start small businesses or find work with dignity.",
    highlights: [
      "3–6 month certified training programs",
      "On-site childcare support where possible",
      "Small starter kits for top-performing trainees",
    ],
    stats: [
      { label: "Women Trained", value: "450+" },
      { label: "Training Centers", value: "8" },
      { label: "Businesses Started", value: "120+" },
    ],
    gallery: [
      "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg",
      "https://images.pexels.com/photos/3738086/pexels-photo-3738086.jpeg",
      "https://images.pexels.com/photos/4621912/pexels-photo-4621912.jpeg",
    ],
  },
  {
    id: "healthcare-all",
    anchorId: "campaign-healthcare-all",
    title: "Healthcare for All – Every Life Deserves Care",
    shortTitle: "Healthcare for All",
    subtitle:
      "Medical camps, check-ups and lifesaving treatment for those who cannot afford it.",
    mainImage:
      "https://images.pexels.com/photos/8460154/pexels-photo-8460154.jpeg",
    description:
      "From basic check-ups to specialist treatment, thousands of people delay going to the doctor because of cost. Our Healthcare for All campaign organizes free medical camps, provides diagnostics, medicines and supports critical surgeries through partner hospitals.",
    highlights: [
      "Regular free medical and eye camps in low-income areas",
      "Partnership with hospitals for subsidized surgeries",
      "Awareness sessions on hygiene, nutrition and mental health",
    ],
    stats: [
      { label: "Patients Served", value: "22,000+" },
      { label: "Medical Camps", value: "95+" },
      { label: "Critical Surgeries", value: "310+" },
    ],
    gallery: [
      "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg",
      "https://images.pexels.com/photos/8460037/pexels-photo-8460037.jpeg",
      "https://images.pexels.com/photos/4376212/pexels-photo-4376212.jpeg",
    ],
  },
  {
    id: "education-children",
    anchorId: "campaign-education-children",
    title: "Empowering Children Through Education",
    shortTitle: "Education for Children",
    subtitle:
      "Because every child deserves a classroom, a book and a safe place to dream.",
    mainImage:
      "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg",
    description:
      "For children living in poverty, education is often the first thing they lose. Our education campaign supports school fees, uniforms, books and after-school tutoring so that children don’t drop out and can continue learning with confidence.",
    highlights: [
      "Full and partial scholarships for school-going children",
      "After-school tutoring and mentoring support",
      "Back-to-school drives with bags, books and stationery",
    ],
    stats: [
      { label: "Students Supported", value: "3,500+" },
      { label: "Partner Schools", value: "24" },
      { label: "Tutoring Centers", value: "10" },
    ],
    gallery: [
      "https://images.pexels.com/photos/8612922/pexels-photo-8612922.jpeg",
      "https://images.pexels.com/photos/5905927/pexels-photo-5905927.jpeg",
      "https://images.pexels.com/photos/8617845/pexels-photo-8617845.jpeg",
    ],
  },
  {
    id: "ambulance-children",
    anchorId: "campaign-ambulance-children",
    title: "Give Ambulance Service to Homeless Children",
    shortTitle: "Ambulance for Homeless Children",
    subtitle:
      "Rapid response for street children and homeless families in medical emergencies.",
    mainImage:
      "https://images.pexels.com/photos/263210/pexels-photo-263210.jpeg",
    description:
      "Street children and homeless families often have nowhere to go when a medical emergency happens. Our ambulance campaign provides a dedicated response unit that can reach them quickly, stabilize them and connect them to partner hospitals for treatment.",
    highlights: [
      "24/7 helpline and response vehicle",
      "First-aid and basic life support on the move",
      "Coordination with shelters and child protection units",
    ],
    stats: [
      { label: "Emergency Calls", value: "1,200+" },
      { label: "Children Transported", value: "700+" },
      { label: "Response Time", value: "< 20 mins" },
    ],
    gallery: [
      "https://images.pexels.com/photos/263210/pexels-photo-263210.jpeg",
      "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg",
      "https://images.pexels.com/photos/1119793/pexels-photo-1119793.jpeg",
    ],
  },
];

export default function CampaignDetails() {
  // null = sirf cards page, koi detail open nahi
  const [activeId, setActiveId] = useState(null);
  const activeCampaign = campaignsDetail.find((c) => c.id === activeId);

  /* ---------- CARDS PAGE (DEFAULT) ---------- */
  if (!activeCampaign) {
    return (
      <section id="campaigns" className="bg-slate-50 pt-16"> {/* Added pt-32 for top padding */}
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

          {/* equal size cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {campaignsDetail.map((camp) => (
              <button
                key={camp.id}
                type="button"
                onClick={() => setActiveId(camp.id)}
                className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md hover:border-emerald-300 transition h-full flex flex-col text-left overflow-hidden"
              >
                {/* image */}
                <div className="h-32 w-full overflow-hidden">
                  <img
                    src={camp.mainImage}
                    alt={camp.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* text */}
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

                  <div className="mt-auto">
                    <span className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-600">
                      View full details → 
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- DETAIL PAGE (SEPARATE BLOCKS) ---------- */
  return (
    <section id="campaigns" className="bg-slate-50 pt-16"> {/* Added pt-32 for top padding */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 lg:py-12 space-y-6">
        {/* Back + heading */}
        <button
          type="button"
          onClick={() => setActiveId(null)}
          className="text-xs md:text-sm inline-flex items-center gap-1 text-slate-600 hover:text-emerald-700"
        >
          <span className="text-lg">←</span>
          Back to all campaigns
        </button>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <p className="text-xs md:text-sm font-medium text-emerald-700 tracking-[0.18em] uppercase mb-1">
              Campaign detail
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
              {activeCampaign.title}
            </h2>
            <p className="text-sm text-slate-600">
              {activeCampaign.subtitle}
            </p>
          </div>
          <div className="text-xs text-slate-500">
            <p>
              You are viewing 1 of 5 campaigns. Use back button to explore
              others.
            </p>
          </div>
        </div>

        {/* 1) HERO IMAGE BLOCK */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900/80">
          <div className="relative h-52 sm:h-64 md:h-72 lg:h-80">
            <img
              src={activeCampaign.mainImage}
              alt={activeCampaign.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
            <div className="absolute left-5 bottom-5 text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-200 mb-1">
                HopeBridge Foundation
              </p>
              <p className="text-lg sm:text-xl font-semibold">
                {activeCampaign.shortTitle}
              </p>
            </div>
          </div>
        </div>

        {/* 2) STATS STRIP */}
        <div className="grid md:grid-cols-3 gap-3">
          {activeCampaign.stats.map((stat) => (
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

        {/* 3) INFO + HIGHLIGHTS BLOCK */}
        <div className="grid md:grid-cols-[1.6fr,1.4fr] gap-4 md:gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              About this campaign
            </h3>
            <p className="text-sm text-slate-600">{activeCampaign.description}</p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              How your support helps
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-700">
              {activeCampaign.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1 text-emerald-500 text-lg">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4) GALLERY BLOCK */}
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
            {activeCampaign.gallery.map((img, i) => (
              <div
                key={i}
                className="h-28 sm:h-32 rounded-2xl overflow-hidden bg-slate-100"
              >
                <img
                  src={img}
                  alt={`${activeCampaign.title} photo ${i + 1}`}
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

