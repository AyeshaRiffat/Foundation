import React from "react";

export default function CampaignsSection() {
  const campaigns = [
    { title: "Emergency Relief", tag: "Running", desc: "Food packs, shelter and medical aid for families affected by floods." },
    { title: "Education Support", tag: "Ongoing", desc: "School fees, uniforms and books for children who cannot afford education." },
    { title: "Clean Water", tag: "Completed", desc: "Hand pumps and filtration plants in rural areas without clean water." },
    { title: "Orphan Care", tag: "Running", desc: "Monthly sponsorship for orphans including food, education and healthcare." },
    { title: "Ramadan & Qurbani", tag: "Seasonal", desc: "Food distribution for low-income families during blessed months." },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Key Campaigns</h2>
        <p className="text-lg text-slate-700 mb-8">Join us in empowering communities through various initiatives.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((item) => (
          <div key={item.title} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">{item.tag}</span>
            </div>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
