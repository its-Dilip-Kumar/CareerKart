import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

// Social Icons (inline SVG)
const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: Brand + Social */}
          <div>
            <h1 className="text-2xl font-bold text-white mb-3">
              Job<span className="text-blue-500">Portal</span>
            </h1>
            <p className="text-sm text-gray-400 mb-4">
              Find your dream job or hire the best talent — all in one place.
            </p>

            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <TwitterIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <LinkedinIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
              <li><Link to="/jobs" className="hover:text-blue-500 transition">Jobs</Link></li>
              <li><Link to="/browse" className="hover:text-blue-500 transition">Browse</Link></li>
              <li><Link to="/profile" className="hover:text-blue-500 transition">Profile</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4">Contact Us</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span>123, MG Road, Bengaluru</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <a href="mailto:support@jobportal.com" className="hover:text-blue-500 transition">
                  support@jobportal.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <a href="tel:+919876543210" className="hover:text-blue-500 transition">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-blue-500 transition">Privacy</a>
            <a href="#" className="hover:text-blue-500 transition">Terms</a>
            <a href="#" className="hover:text-blue-500 transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;