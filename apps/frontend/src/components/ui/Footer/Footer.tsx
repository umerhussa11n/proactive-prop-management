import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-700 mt-auto">
      <div className="px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="flex items-center space-x-4">
            <div className="text-center md:text-left">
              <p className="text-neutral-300 text-sm">
                © 2025 Property Management Portal. All rights reserved.
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Professional maintenance solutions for modern real estate
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6">
            <a href="/help" className="text-neutral-400 hover:text-neutral-300 text-sm transition-colors">
              Help Center
            </a>
            <a href="/privacy" className="text-neutral-400 hover:text-neutral-300 text-sm transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-neutral-400 hover:text-neutral-300 text-sm transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
