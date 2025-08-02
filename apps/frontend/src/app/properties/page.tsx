import React from 'react';
import { Property, PropertyStatus, PropertyType } from '../../types/property';
const PropertiesPage = () => {
  console.log('🏘️ Properties page rendered!');

  const properties : Property[] = [
    {
      id: 1,
      name: 'Sunset Apartments Building A',
      address: '123 Oak Street, Manchester',
      units: 24,
      occupied: 22,
      type: PropertyType.APARTMENT_COMPLEX,
      status: PropertyStatus.ACTIVE,
      lastInspection: '2024-01-15',
      nextInspection: '2024-04-15'
    },
    {
      id: 2,
      name: 'Green Valley Townhouses',
      address: '456 Pine Avenue, Liverpool',
      units: 12,
      occupied: 11,
      type: PropertyType.TOWNHOUSE,
      status: PropertyStatus.ACTIVE,
      lastInspection: '2024-01-20',
      nextInspection: '2024-04-20'
    },
    {
      id: 3,
      name: 'City Center Office Block',
      address: '789 High Street, Birmingham',
      units: 8,
      occupied: 7,
      type: PropertyType.COMMERCIAL,
      status: PropertyStatus.UNDER_MAINTENANCE,
      lastInspection: '2024-01-10',
      nextInspection: '2024-04-10'
    }
  ];

  const stats = [
    { label: 'Total Properties', value: '156', icon: '🏢', color: 'text-primary-600' },
    { label: 'Total Units', value: '1,248', icon: '🏠', color: 'text-success-600' },
    { label: 'Occupied Units', value: '1,156', icon: '👥', color: 'text-blue-600' },
    { label: 'Vacancy Rate', value: '7.4%', icon: '📊', color: 'text-yellow-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Debug Info */}
      <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
        <h2 className="text-green-800 font-bold">✅ DEBUG: Properties Page Loaded</h2>
        <p className="text-green-700">📍 URL: /properties</p>
        <p className="text-green-700">🕐 Rendered at: {new Date().toLocaleTimeString()}</p>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Properties</h1>
          <p className="text-neutral-600 mt-2">
            Manage and monitor all your rental properties
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add Property</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-600 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-neutral-900 mt-2">{stat.value}</p>
              </div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Properties Table */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="px-6 py-4 border-b border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900">Property Portfolio</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Units</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Occupancy</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Next Inspection</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {properties.map((property) => (
                <tr key={property.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-neutral-900">{property.name}</div>
                      <div className="text-sm text-neutral-500">{property.address}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {property.units}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{property.occupied}/{property.units}</div>
                    <div className="text-xs text-neutral-500">
                      {Math.round((property.occupied / property.units) * 100)}% occupied
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {property.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      property.status === 'Active'
                        ? 'bg-success-100 text-success-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {property.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {property.nextInspection}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">View</button>
                    <button className="text-neutral-600 hover:text-neutral-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PropertiesPage;
