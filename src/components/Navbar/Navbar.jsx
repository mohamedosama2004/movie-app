import { NavLink } from "react-router";
import { Film, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
      isActive ? "text-red-500" : "text-gray-300 hover:text-white"
    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg shadow-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/home" className="flex items-center gap-2 group">
            <div className="relative">
              <Film className="w-8 h-8 text-red-500 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent tracking-tight">
              Movie Home
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/home" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/" className={navLinkStyles}>
              Login
            </NavLink>
            <NavLink to="/signup">
              <span className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
                Sign Up
              </span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-700">
            <NavLink
              to="/home"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-red-500/10 text-red-500"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-red-500/10 text-red-500"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="mx-4 mt-2 bg-red-500 hover:bg-red-600 text-white text-center py-2 rounded-full transition-all duration-300"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
