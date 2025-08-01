import React from 'react';

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Stats Cards */}
      <></>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Active Tickets', value: '24', change: '+12%', color: 'primary' },
          { title: 'Properties', value: '156', change: '+3%', color: 'success' },
          { title: 'Pending Repairs', value: '8', change: '-5%', color: 'danger' },
          { title: 'Completed Today', value: '12', change: '+8%', color: 'primary' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-600 text-sm font-medium">{stat.title}</p>
                <p className="text-3xl font-semibold text-neutral-900 mt-2">{stat.value}</p>
              </div>
              <div className={`text-${stat.color}-600 text-sm font-medium`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="px-6 py-4 border-b border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <p className="text-neutral-600">Recent maintenance tickets and property updates will appear here.</p>
        </div>
      </div>
    </div>
  );
}
