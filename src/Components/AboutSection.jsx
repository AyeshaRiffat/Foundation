import { useState, useEffect, useRef } from "react";

function StatCounter({ value, label, subLabel, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // check when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [hasAnimated]);

  // smooth counting from 0 → value
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500; // 1.5s
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * value);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <p className="text-3xl md:text-4xl font-bold text-sky-900">
        {count}
        {suffix}
      </p>
      <p className="text-sm font-medium text-sky-900 mt-1">{label}</p>
      {subLabel && (
        <p className="text-xs text-slate-500 mt-1">{subLabel}</p>
      )}
    </div>
  );
}

const campaigns = [
  {
    title: "Emergency Relief",
    desc: "Food packs, shelter and medical aid for families affected by floods and disasters.",
    tag: "Running",
  },
  {
    title: "Education Support",
    desc: "School fees, uniforms and books for children who cannot afford basic education.",
    tag: "Ongoing",
  },
  {
    title: "Clean Water Initiative",
    desc: "Hand pumps and filtration plants in villages with no access to safe drinking water.",
    tag: "Completed",
  },
  {
    title: "Orphan Care Program",
    desc: "Monthly sponsorship for orphans including food, education and healthcare.",
    tag: "Running",
  },
  {
    title: "Ramadan & Qurbani",
    desc: "Food distribution and meat packs for low-income families during blessed months.",
    tag: "Seasonal",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white pt-24"> {/* Added pt-24 for spacing */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 lg:py-12">
        {/* TOP SECTION: image + text + stats */}
        <div className="grid lg:grid-cols-[1.2fr,1.5fr,0.9fr] gap-6 lg:gap-8 items-center">
          {/* Left: image / video thumbnail */}
          <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/6816852/pexels-photo-6816852.jpeg"
              alt="Children receiving help"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
            <button className="absolute left-5 bottom-5 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                <div className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-amber-400 border-b-[10px] border-b-transparent" />
              </div>
              <div className="text-left text-white">
                <p className="text-xs uppercase tracking-[0.18em]">
                  Watch this video
                </p>
                <p className="text-lg font-bold leading-tight">
                  Play now
                </p>
              </div>
            </button>
          </div>

          {/* Middle: main about text */}
          <div>
            <p className="text-xs md:text-sm font-medium text-emerald-700 tracking-[0.18em] uppercase mb-2">
              Empowering communities, restoring hope
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Together, we can rebuild lives and create a brighter future.
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-4">
              In times of crisis and hardship, unity becomes our greatest
              strength. At HopeBridge Foundation, we believe that compassion
              and collective action can transform despair into hope. Every
              effort—whether through donations, volunteering or spreading
              awareness—helps us bring relief, dignity and opportunity to those
              in need.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-500 text-lg">✔</span>
                <span>Saves lives in emergencies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-500 text-lg">✔</span>
                <span>Provides access to food, water and basic needs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-amber-500 text-lg">✔</span>
                <span>Creates lasting change through education and development</span>
              </li>
            </ul>
          </div>

          {/* Right: animated stats */}
          <div className="flex flex-col gap-6 lg:items-end">
            <StatCounter
              value={785}
              label="Projects Completed"
              subLabel="Across cities & rural areas"
            />
            <div className="h-px bg-slate-200 w-20 lg:w-full mx-auto" />
            <StatCounter
              value={25}
              label="Running Projects"
              subLabel="Actively helping families right now"
            />
            <div className="h-px bg-slate-200 w-20 lg:w-full mx-auto" />
            <StatCounter
              value={600}
              suffix="K+"
              label="Funds We Collected"
              subLabel="Through kind donors like you"
            />
          </div>
        </div>

        {/* OUR CAMPAIGNS */}
        <div className="mt-10 lg:mt-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
            <div>
              <p className="text-xs md:text-sm font-medium text-emerald-700 tracking-[0.18em] uppercase mb-1">
                Our key campaigns
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                5 core ways we are serving the community.
              </h3>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Each campaign is designed with clear goals and real, trackable
              impact—so you always know how your contribution is changing lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaigns.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-3xl p-4 shadow-sm hover:shadow-md hover:border-emerald-300 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
