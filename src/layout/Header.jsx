import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
    { to: "/trad", text: "Fetch-OLD" },
    { to: "/rq", text: "Fetch-RQ" },
  ];
  return (
    <header className="flex items-center justify-between px-5 py-2 border-b border-white border-solid bg-gray-900 text-white">
      <div>
        <h1>React Query</h1>
      </div>
      <div className="flex items-center gap-10">
        {navLinks.map((currLink) => (
          <NavLink key={currLink.text} to={currLink.to}>
            {currLink.text}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Header;
