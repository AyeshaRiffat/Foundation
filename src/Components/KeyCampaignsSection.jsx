import { useState } from "react";

const campaigns = [
  {
    title: "Emergency Relief",
    desc: "Food packs, shelter, and medical aid for families affected by floods and disasters.",
    tag: "Ongoing",
    color: "bg-green-600", // Green color
    image: "https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg",
  },
  {
    title: "Education Support",
    desc: "School fees, uniforms, and books for children who cannot afford basic education.",
    tag: "Running",
    color: "bg-green-600", // Green color
    image: "https://images.pexels.com/photos/6646910/pexels-photo-6646910.jpeg",
  },
  {
    title: "Clean Water Initiative",
    desc: "Hand pumps and filtration plants in villages with no access to safe drinking water.",
    tag: "Completed",
    color: "bg-green-600", // Green color
    image: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg",
  },
  {
    title: "Orphan Care Program",
    desc: "Monthly sponsorship for orphans including food, education, and healthcare.",
    tag: "Seasonal",
    color: "bg-green-600", // Green color
    image: "https://images.pexels.com/photos/6715/woman-water-rwanda-africa.jpg",
  },
];

const KeyCampaignsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="campaigns" className="py-20 bg-gradient-to-r from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-green-700 mb-2">
            Our Key Campaigns
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
            5 Core Ways We Are Serving the Community
          </h2>
          <p className="text-sm text-slate-600 text-center max-w-md mt-4">
            Each campaign is designed with clear goals and real, trackable impact—
            so you always know how your contribution is changing lives.
          </p>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className={`relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all transform ${
                hoveredIndex === index ? "scale-105" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Campaign Image */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${campaign.image})` }}
              />

              {/* Campaign Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-800">{campaign.title}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full text-white ${campaign.color}`}
                  >
                    {campaign.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{campaign.desc}</p>
                <a
                  href="#"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-white ${campaign.color} hover:bg-opacity-90 transition`}
                >
                  Donate Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyCampaignsSection;
