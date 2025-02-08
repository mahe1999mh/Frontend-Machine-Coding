import React from "react";
import { Home, Settings, Search, FileText, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: Home, text: "Dashboard", to: "/" },
  { icon: Search, text: "Autocomplete", to: "/Autocomplete" },
  // { icon: FileText, text: "Documents", to: "/documents" },
  // { icon: Mail, text: "Messages", to: "/messages" },
  // { icon: Settings, text: "Settings", to: "/settings" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-0 lg:w-20"
        } lg:relative`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center justify-center border-b border-gray-800">
            <span className={`text-xl font-bold ${!isOpen && "lg:hidden"}`}>
              Dashboard
            </span>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map(item => (
              <NavLink
                key={item.text}
                to={item.to}
                className={({ isActive }) => `
                  flex items-center px-4 py-3 rounded-lg transition-colors duration-200
                  ${
                    isActive
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }
                `}
              >
                <item.icon size={20} />
                <span className={`ml-4 ${!isOpen && "lg:hidden"}`}>
                  {item.text}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
