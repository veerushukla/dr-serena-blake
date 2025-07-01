"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (openmenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openmenu]);

  const handleclick = () => {
    setopenmenu(!openmenu);
  };

  const closeMenu = () => setopenmenu(false);

  return (
    <div className="relative z-50">
      <nav>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-end justify-end mx-4 pt-2">
          <button onClick={handleclick} className="p-2 rounded-md focus:outline-none">
            <img src="/menu.png" alt="menu" className="w-10 h-10 menu-icon" />
          </button>
        </div>

        {/* Overlay */}
        {openmenu && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
        )}

        {/* Mobile Dropdown */}
        {openmenu && (
          <ul className="bg-green-200 opacity-95 animate-fadeIn py-4 md:hidden text-center absolute top-16 left-4 right-4 mx-auto rounded-md shadow-md z-50">
            {["Hero", "About", "Services", "FAQ", "Contact"].map((item) => (
              <li key={item} className="py-3 text-lg font-medium hover:bg-green-300 transition">
                <a href={`#${item}`} onClick={closeMenu} className="block w-full">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center">
          <ul className="py-4 flex flex-row justify-between w-1/2">
            {["Hero", "About", "Services", "FAQ", "Contact"].map((item) => (
              <li key={item} className="group relative px-2">
                <a href={`#${item}`}>{item}</a>
                <div className="h-0.5 w-0 group-hover:w-full bg-black mt-0.1 transition-all duration-300" />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
