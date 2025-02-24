import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src="/logo-light.png" alt="Quansys AI" className="w-32 invert-[100%]" />
            <p className="text-gray-400 text-sm">
              Empowering businesses with intelligent AI-powered communication solutions.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/QuansysAI" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                aria-label="Follow us on Twitter"
              >
                <FaXTwitter className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-lg transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/company/Quansys" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedinIn className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-lg transition-colors" />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#table-images" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Phone Call Agent
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white text-sm transition-colors">
                  Virtual Human Agent
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book-a-demo" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@quansys.ai" className="text-gray-400 hover:text-white text-sm transition-colors">
                  sales@quansys.ai
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white text-sm transition-colors">
                +91 79054 43558
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Quansys AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
