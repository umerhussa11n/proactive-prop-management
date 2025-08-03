'use client';

import React, { useState } from 'react';
import { useProperties } from '@/hooks/useProperties';
import { PropertyStatus, PropertyType } from '@/types/property';

const PropertiesPage = () => {
  console.log('🏘️ Properties page rendered!');

  // Local state for filters
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    search: ''
  });

  // Fetch properties with React Query
  const {
    data: propertiesData,
    isLoading,
    error,
    isFetching,
    refetch
  } = useProperties(filters);

  // Helper function to get status styling
  const getStatusStyle = (status: PropertyStatus): string => {
    switch (status) {
      case PropertyStatus.ACTIVE:
        return 'bg-success-100 text-success-800';
      case PropertyStatus.UNDER_MAINTENANCE:
        return 'bg-yellow-100 text-yellow-800';
      case PropertyStatus.VACANT:
        return 'bg-neutral-100 text-neutral-800';
      case PropertyStatus.SOLD:
        return 'bg-blue-100 text-blue-800';
      case PropertyStatus.UNDER_CONSTRUCTION:
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  // Calculate stats from API response
  const stats = propertiesData ? [
    {
      label: 'Total Properties',
      value: propertiesData.total.toString(),
      icon: '🏢',
      color: 'text-primary-600'
    },
    {
      label: 'Total Units',
      value: propertiesData.totalUnits.toLocaleString(),
      icon: '🏠',
      color: 'text-success-600'
    },
    {
      label: 'Occupied Units',
      value: propertiesData.totalOccupied.toLocaleString(),
      icon: '👥',
      color: 'text-blue-600'
    },
    {
      label: 'Vacancy Rate',
      value: propertiesData.totalUnits > 0
        ? `${Math.round(((propertiesData.totalUnits - propertiesData.totalOccupied) / propertiesData.totalUnits) * 100)}%`
        : '0%',
      icon: '📊',
      color: 'text-yellow-600'
    },
  ] : [];

  // Handle loading state
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
          <h2 className="text-blue-800 font-bold">⏳ Loading Properties...</h2>
          <p className="text-blue-700">Fetching data from API...</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 animate-pulse">
              <div className="h-4 bg-neutral-200 rounded mb-2"></div>
              <div className="h-8 bg-neutral-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="space-y-6">
        <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
          <h2 className="text-red-800 font-bold">❌ Error Loading Properties</h2>
          <p className="text-red-700">Error: {error.message}</p>
          <button
            onClick={() => refetch()}
            className="mt-2 bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Debug Info */}
      <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
        <h2 className="text-green-800 font-bold">✅ React Query: Properties Loaded</h2>
        <p className="text-green-700">📍 Data source: /api/properties</p>
        <p className="text-green-700">🕐 Loaded at: {new Date().toLocaleTimeString()}</p>
        <p className="text-green-700">📊 Properties found: {propertiesData?.total || 0}</p>
        {isFetching && <p className="text-green-700">🔄 Refetching data...</p>}
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Properties</h1>
          <p className="text-neutral-600 mt-2">
            Manage and monitor all your rental properties
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => refetch()}
            className="bg-neutral-600 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            disabled={isFetching}
          >
            {isFetching ? '🔄 Refreshing...' : '🔄 Refresh'}
          </button>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add Property</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-2">
              Search Properties
            </label>
            <input
              type="text"
              id="search"
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              placeholder="Search by name or address..."
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-neutral-700 mb-2">
              Status
            </label>
            <select
              id="status"
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Statuses</option>
              <option value={PropertyStatus.ACTIVE}>Active</option>
              <option value={PropertyStatus.UNDER_MAINTENANCE}>Under Maintenance</option>
              <option value={PropertyStatus.VACANT}>Vacant</option>
            </select>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-neutral-700 mb-2">
              Type
            </label>
            <select
              id="type"
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Types</option>
              <option value={PropertyType.APARTMENT_COMPLEX}>Apartment Complex</option>
              <option value={PropertyType.TOWNHOUSE}>Townhouse</option>
              <option value={PropertyType.COMMERCIAL}>Commercial</option>
              <option value={PropertyType.CONDO}>Condo</option>
            </select>
          </div>
        </div>
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
              {propertiesData?.properties.map((property) => (
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
                      {property.occupancyPercentage}% occupied
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    {property.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusStyle(property.status)}`}>
                      {property.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{property.nextInspection}</div>
                    <div className="text-xs text-neutral-500">
                      {property.nextInspectionDays > 0
                        ? `${property.nextInspectionDays} days away`
                        : 'Overdue'
                      }
                    </div>
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
