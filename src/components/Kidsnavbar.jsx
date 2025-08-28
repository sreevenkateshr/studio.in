import React from "react";
import { NavLink } from "react-router-dom";

export default function KidsNavbar() {
  const navItem = (to, label) => (
    <NavLink
      to={to}
      end={to === "/kids"} // exact match for Home
      className={({ isActive }) =>
        `px-3 py-2 text-sm font-medium transition ${
          isActive
            ? "text-purple-700 font-bold border-b-2 border-purple-700"
            : "text-gray-700 hover:text-purple-600"
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="w-full bg-white border-b shadow-sm sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between py-4">
        <h2 className="text-xl font-bold text-purple-700 tracking-wide">
          Kids Studio.in
        </h2>
        <nav className="flex flex-wrap gap-6">
          {navItem("/kids", "Home")}
          {navItem("/kids/indoor", "Indoor")}
          {navItem("/kids/outdoor", "Outdoor")}
          {navItem("/kids/birthday", "Birthday")}
          {navItem("/kids/gallery", "Gallery")}
        </nav>
      </div>
    </div>
  );
}
