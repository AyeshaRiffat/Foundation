import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");

  const quickAmounts = [500, 1000, 2500, 5000];
  const finalAmount = customAmount && Number(customAmount) > 0 ? Number(customAmount) : selectedAmount;

  const handleDonate = (e) => {
    e.preventDefault();
    if (!finalAmount || finalAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    alert(`Thank you for donating Rs ${finalAmount.toLocaleString()}`);
  };

  return (
    <section className="relative overflow-hidden bg-emerald-600 text-white py-16 pt-24"> {/* Adjusted pt-32 to pt-24 */}
      {/* Background image and overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg")' }} />
      <div className="absolute inset-0 bg-emerald-900/80" />

      {/* Content Layout */}
      <div className="relative z-10 container mx-auto grid lg:grid-cols-[1.5fr,1fr] gap-6 items-center text-center lg:text-left">
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
            emergency relief to families in need. Join thousands of donors who
            turn their kindness into real impact every single day.
          </p>

          {/* Stats */}
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

          <Link
            to="#donate-card"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400 text-emerald-950 text-sm sm:text-base font-semibold shadow-lg shadow-emerald-500/50 hover:bg-emerald-300 transition"
          >
            Donate Now
            <span className="text-lg">❤️</span>
          </Link>
        </div>

        {/* Right side: Donation Card */}
        <div id="donate-card" className="bg-white text-slate-900 rounded-3xl shadow-xl p-5 sm:p-6 border border-emerald-100">
          <p className="text-xs font-semibold text-emerald-600 mb-1">Secure Donation</p>
          <h2 className="text-xl font-semibold mb-1">Choose an amount to give</h2>
          <p className="text-xs text-slate-500 mb-4">
            Every rupee goes directly to our active relief and development projects.
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
              <label className="block text-xs font-medium text-slate-700 mb-1">Or enter custom amount (Rs)</label>
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
                <label className="block text-xs font-medium text-slate-700 mb-1">Your name</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Email or phone</label>
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

            <p className="text-[11px] text-slate-500 mt-1">*Demo only – (JazzCash, EasyPaisa, Stripe, etc).</p>
          </form>
        </div>
      </div>
    </section>
  );
}
