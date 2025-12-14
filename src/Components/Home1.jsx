import { useState } from "react";

function FAQItem({ question, answer, open, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-2xl bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-semibold text-slate-900">
          {question}
        </span>
        <span className="ml-4 text-xl text-emerald-500">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-3 text-sm text-slate-600 border-t border-slate-100">
          {answer}
        </div>
      )}
    </div>
  );
}

function App() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqData = [
    {
      q: "How will my donation be used?",
      a: "Your donation is allocated across education, food, clean water and emergency relief projects. You can also choose a specific campaign on the donate page.",
    },
    {
      q: "Is my donation Zakat-eligible?",
      a: "Yes, we carefully verify cases and distribute Zakat according to Islamic guidelines. You can mention Zakat in the notes while donating.",
    },
    {
      q: "Can I get a receipt?",
      a: "Yes, you will receive a digital receipt via email within 24 hours of your donation.",
    },
    {
      q: "Can I donate monthly?",
      a: "We support recurring monthly donations through bank transfer and payment gateways (where available).",
    },
  ];

  const quickAmounts = [500, 1000, 2500, 5000];

  const finalAmount =
    customAmount && Number(customAmount) > 0
      ? Number(customAmount)
      : selectedAmount;

  const handleDonate = (e) => {
    e.preventDefault();
    if (!finalAmount || finalAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    alert(
      `Thank you! (Demo only) You chose to donate Rs ${finalAmount.toLocaleString()}.`
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* main content */}
      <main className="pt-20">
        {/* HERO + DONATION CARD */}
        <section
          id="donate"
          className="relative overflow-hidden border-b border-slate-200 h-screen"
        >
          {/* background image + overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg"
              alt="Volunteers helping people"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-emerald-900/80" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-8 lg:py-10 grid lg:grid-cols-[1.5fr,1fr] gap-6 lg:gap-8 items-center text-white">
            {/* Left side text */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-200 mb-3">
                Donation Foundation
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                Your{" "}
                <span className="text-emerald-300">one donation</span> can rewrite
                someone&apos;s tomorrow.
              </h1>
              <p className="text-base text-slate-100/90 max-w-xl mb-5">
                HopeBridge Foundation provides education, food, clean water and
                emergency relief to families in need. Join thousands of donors
                who turn their kindness into real impact every single day.
              </p>

              {/* stats */}
              <div className="grid grid-cols-3 gap-3 max-w-md mb-4">
                <div className="bg-white/10 border border-emerald-300/60 rounded-2xl px-3 py-3">
                  <p className="text-2xl font-bold text-emerald-200">10k+</p>
                  <p className="text-[11px] sm:text-xs text-slate-100/90">
                    Families reached
                  </p>
                </div>
                <div className="bg-white/10 border border-sky-300/60 rounded-2xl px-3 py-3">
                  <p className="text-2xl font-bold text-sky-100">15+</p>
                  <p className="text-[11px] sm:text-xs text-slate-100/90">
                    Active campaigns
                  </p>
                </div>
                <div className="bg-white/10 border border-amber-300/70 rounded-2xl px-3 py-3">
                  <p className="text-2xl font-bold text-amber-200">12</p>
                  <p className="text-[11px] sm:text-xs text-slate-100/90">
                    Years of service
                  </p>
                </div>
              </div>

              <a
                href="#donate-card"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400 text-emerald-950 text-sm sm:text-base font-semibold shadow-lg shadow-emerald-500/50 hover:bg-emerald-300 transition"
              >
                Donate Now
                <span className="text-lg">❤️</span>
              </a>
            </div>

            {/* Donation card */}
            <div
              id="donate-card"
              className="bg-white text-slate-900 rounded-3xl shadow-xl p-5 sm:p-6 border border-emerald-100"
            >
              <p className="text-xs font-semibold text-emerald-600 mb-1">
                Secure Donation
              </p>
              <h2 className="text-xl font-semibold mb-1">Choose an amount to give</h2>
              <p className="text-xs text-slate-500 mb-4">
                Every rupee goes directly to our active relief and development
                projects.
              </p>

              {/* Quick amounts */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                    }}
                    className={`px-3 py-2 rounded-2xl text-sm font-semibold border transition ${
                      selectedAmount === amt && !customAmount
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "bg-slate-50 border-slate-200 text-slate-800 hover:border-emerald-400/70"
                    }`}
                  >
                    Rs {amt.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <form onSubmit={handleDonate} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Or enter custom amount (Rs)
                  </label>
                  <input
                    type="number"
                    min="100"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
                    placeholder="e.g. 1500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email or phone
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
                      placeholder="For receipt"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 px-4 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow-md shadow-emerald-500/40 hover:bg-emerald-500 transition"
                >
                  Donate Rs {finalAmount.toLocaleString()}
                </button>

                <p className="text-[11px] text-slate-500 mt-1">
                  *Demo only – (JazzCash, EasyPaisa, Stripe, etc).
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* DISCOVER OUR ACTIVITIES */}
        <section
          id="activities"
          className="max-w-6xl mx-auto px-4 md:px-6 py-8 lg:py-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-700 mb-2">
                Discover our activities
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Where your kindness turns into action
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              From emergency food packs to long-term education support, every
              project is designed with transparency and impact in mind.
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
                <h3 className="text-lg font-semibold mb-2 text-emerald-700">
                  Education for All
                </h3>
                <p className="text-sm text-slate-600 mb-2">
                  School fees, books and uniforms for children from low-income
                  families, so they can dream bigger.
                </p>
                <p className="text-xs text-slate-500">
                  3,200+ students currently supported.
                </p>
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
                <h3 className="text-lg font-semibold mb-2 text-sky-700">
                  Food & Winter Relief
                </h3>
                <p className="text-sm text-slate-600 mb-2">
                  Monthly ration packs, cooked meals and winter clothes for
                  families facing extreme hardship.
                </p>
                <p className="text-xs text-slate-500">
                  50,000+ meals served last year.
                </p>
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
                <h3 className="text-lg font-semibold mb-2 text-amber-700">
                  Clean Water Projects
                </h3>
                <p className="text-sm text-slate-600 mb-2">
                  Hand pumps and filtration plants in rural areas where clean
                  drinking water is still a luxury.
                </p>
                <p className="text-xs text-slate-500">
                  40+ water projects installed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
