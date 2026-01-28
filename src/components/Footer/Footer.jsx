import { NavLink } from "react-router";
import {
  Film,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
  Mail,
  Heart,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center gap-2 group w-fit">
              <div className="relative">
                <Film className="w-8 h-8 text-red-500 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent tracking-tight">
                Movie Home
              </span>
            </NavLink>
            <p className="text-sm text-gray-400 max-w-xs">
              Discover the latest movies, explore new genres, and dive into the
              world of cinema with Movie Home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm transition-all duration-300 hover:translate-x-1 ${
                    isActive ? "text-red-500" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-sm transition-all duration-300 hover:translate-x-1 ${
                    isActive ? "text-red-500" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `text-sm transition-all duration-300 hover:translate-x-1 ${
                    isActive ? "text-red-500" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                Sign Up
              </NavLink>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span>contact@movie Home.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Movie Home. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
              for movie lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
