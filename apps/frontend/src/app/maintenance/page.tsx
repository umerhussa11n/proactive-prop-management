const MaintenancePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Maintenance Tickets</h1>
        <p className="text-neutral-600 mt-2">
          Manage and track all property maintenance requests
        </p>
      </div>

      {/* Test content to verify page is loading */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Active Tickets</h2>
        <div className="text-neutral-600">
          <p>✅ Maintenance page is working!</p>
          <p>🔧 This content confirms routing is successful</p>
          <p>📍 Current URL: /maintenance</p>
        </div>
      </div>
    </div>
  );
}

export default MaintenancePage;
