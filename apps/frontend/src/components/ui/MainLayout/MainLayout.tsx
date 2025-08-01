import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <main className={`flex-1 overflow-hidden ${className}`}>
      {/* Main Content Area */}
      <div className="h-full flex flex-col bg-neutral-50">
        {/* Page Header */}
        <header className="bg-white border-b border-neutral-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-neutral-900">
                Property Management Dashboard
              </h1>
              <p className="text-neutral-600 text-sm mt-1">
                Manage maintenance tickets, properties, and certificates
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM11 19a2 2 0 01-2-2m0 0a2 2 0 012-2m-2 2a2 2 0 002 2m7-5a2 2 0 002-2V9a2 2 0 00-2-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v1a2 2 0 00-2 2v6a2 2 0 002 2h10z" />
                </svg>
              </button>
              {/* Add New Button */}
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>New Ticket</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-8xl mx-auto px-6 py-8">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
