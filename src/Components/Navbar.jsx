import React, { useState } from "react";
import { NavLink } from "react-router-dom";  // Import NavLink for routing

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },  // Updated href to match routes
    { label: "Campaigns", href: "/campaigns" },
    { label: "Contact", href: "/contact" },  // Updated href for Contact page
  ];

  return (
    <header
      id="top"
      className="fixed inset-x-0 top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between">
        {/* Logo + name */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-emerald-400/50">
            PRO
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold text-slate-900">
              PRO
            </p>
            <p className="text-[11px] text-emerald-700">
              Together, we change lives
            </p>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm font-medium rounded-full ${
                  isActive
                    ? "text-emerald-700 bg-emerald-100"
                    : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
                } transition`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="#donate"
            className="ml-2 px-4 py-1.5 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow-md shadow-emerald-500/40 hover:bg-emerald-500 transition"
          >
            Donate Now
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 text-slate-800"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-[5px]">
            <span className="block w-4 h-0.5 bg-slate-800" />
            <span className="block w-4 h-0.5 bg-slate-800" />
            <span className="block w-4 h-0.5 bg-slate-800" />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm ${
                    isActive ? "text-emerald-700 bg-emerald-100" : "text-slate-700 hover:bg-emerald-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="#donate"
              onClick={() => setOpen(false)}
              className="mt-1 px-3 py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold text-center"
            >
              Donate Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
