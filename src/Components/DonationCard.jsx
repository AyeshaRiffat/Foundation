import React, { useState } from "react";

function DonationCard() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");

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
    <div id="donate-card" className="bg-white text-slate-900 rounded-3xl shadow-xl p-5 sm:p-6 border border-emerald-100">
      <p className="text-xs font-semibold text-emerald-600 mb-1">Secure Donation</p>
      <h2 className="text-xl font-semibold mb-1">Choose an amount to give</h2>
      <p className="text-xs text-slate-500 mb-4">Every rupee goes directly to our active relief and development projects.</p>

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

        <button
          type="submit"
          className="w-full mt-2 px-4 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow-md shadow-emerald-500/40 hover:bg-emerald-500 transition"
        >
          Donate Rs {finalAmount.toLocaleString()}
        </button>
      </form>
    </div>
  );
}

export default DonationCard;
