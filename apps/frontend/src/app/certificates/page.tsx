import React from 'react';

const CertificatesPage = () => {
  console.log('📜 Certificates page rendered!');

  const certificates = [
    {
      id: 1,
      type: 'EPC Certificate',
      property: 'Sunset Apartments Building A',
      issueDate: '2023-06-15',
      expiryDate: '2033-06-15',
      rating: 'B',
      status: 'Valid',
      documentUrl: '#'
    },
    {
      id: 2,
      type: 'Gas Safety Certificate',
      property: 'Green Valley Townhouses',
      issueDate: '2024-01-20',
      expiryDate: '2025-01-20',
      rating: 'Pass',
      status: 'Valid',
      documentUrl: '#'
    },
    {
      id: 3,
      type: 'Fire Safety Certificate',
      property: 'City Center Office Block',
      issueDate: '2023-03-10',
      expiryDate: '2024-03-10',
      rating: 'Pass',
      status: 'Expiring Soon',
      documentUrl: '#'
    },
    {
      id: 4,
      type: 'Electrical Safety Certificate',
      property: 'Sunset Apartments Building A',
      issueDate: '2022-11-05',
      expiryDate: '2024-11-05',
      rating: 'Pass',
      status: 'Valid',
      documentUrl: '#'
    }
  ];

  const stats = [
    { label: 'Total Certificates', value: '89', icon: '📜', color: 'text-primary-600' },
    { label: 'Valid Certificates', value: '76', icon: '✅', color: 'text-success-600' },
    { label: 'Expiring Soon', value: '8', icon: '⚠️', color: 'text-yellow-600' },
    { label: 'Expired', value: '5', icon: '❌', color: 'text-danger-600' },
  ];

  const certificateTypes = [
    { name: 'EPC Certificate', count: 25, color: 'bg-blue-100 text-blue-800' },
    { name: 'Gas Safety', count: 22, color: 'bg-green-100 text-green-800' },
    { name: 'Fire Safety', count: 18, color: 'bg-red-100 text-red-800' },
    { name: 'Electrical Safety', count: 24, color: 'bg-yellow-100 text-yellow-800' },
  ];

  return (
    <div className="space-y-6">
      {/* Debug Info */}
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
        <h2 className="text-blue-800 font-bold">✅ DEBUG: Certificates Page Loaded</h2>
        <p className="text-blue-700">📍 URL: /certificates</p>
        <p className="text-blue-700">🕐 Rendered at: {new Date().toLocaleTimeString()}</p>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Certificates</h1>
          <p className="text-neutral-600 mt-2">
            Manage property certificates, compliance documents, and renewals
          </p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Upload Certificate</span>
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

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Certificate Types */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900">Certificate Types</h3>
          </div>
          <div className="p-6 space-y-4">
            {certificateTypes.map((type, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${type.color}`}>
                  {type.name}
                </span>
                <span className="text-neutral-600 font-medium">{type.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Certificates */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-neutral-200">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900">Recent Certificates</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Certificate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Expiry Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                {certificates.map((cert) => (
                  <tr key={cert.id} className="hover:bg-neutral-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-neutral-900">{cert.type}</div>
                        <div className="text-sm text-neutral-500">Rating: {cert.rating}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                      {cert.property}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                      {cert.expiryDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        cert.status === 'Valid'
                          ? 'bg-success-100 text-success-800'
                          : cert.status === 'Expiring Soon'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-danger-100 text-danger-800'
                      }`}>
                        {cert.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900 mr-3">Download</button>
                      <button className="text-neutral-600 hover:text-neutral-900">Renew</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificatesPage;
