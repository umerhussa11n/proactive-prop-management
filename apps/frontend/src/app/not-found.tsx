import React from 'react';              // ✅ Add this line
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="text-center">
        {/* 404 Icon */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-md">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved or deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/tenants"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View Tenants
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Need help? {' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}