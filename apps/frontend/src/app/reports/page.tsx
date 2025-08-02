import React from 'react';
import {
  ReportCategory,
  ReportStats,
  ReportType,
  ReportFormat,
  ReportStatus
} from '../../types/report';

const ReportsPage = () => {
  console.log('📊 Reports page rendered!');

  const reportCategories: ReportCategory[] = [
    {
      title: 'Financial Reports',
      description: 'Revenue, expenses, and profit analysis',
      icon: '💰',
      reports: [
        {
          id: 1,
          name: 'Monthly Revenue Report',
          type: ReportType.FINANCIAL,
          format: ReportFormat.PDF,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-02-01',
          createdBy: 'System',
          fileSize: 2048576, // 2MB
          downloadUrl: '#'
        },
        {
          id: 2,
          name: 'Expense Analysis',
          type: ReportType.FINANCIAL,
          format: ReportFormat.EXCEL,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-01-28',
          createdBy: 'John Doe',
          fileSize: 1536000, // 1.5MB
          downloadUrl: '#'
        },
        {
          id: 3,
          name: 'Profit & Loss Statement',
          type: ReportType.FINANCIAL,
          format: ReportFormat.PDF,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-01-31',
          createdBy: 'System',
          fileSize: 1024000, // 1MB
          downloadUrl: '#'
        }
      ]
    },
    {
      title: 'Maintenance Reports',
      description: 'Maintenance activities and costs',
      icon: '🔧',
      reports: [
        {
          id: 4,
          name: 'Maintenance Summary',
          type: ReportType.MAINTENANCE,
          format: ReportFormat.PDF,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-02-02',
          createdBy: 'System',
          downloadUrl: '#'
        },
        {
          id: 5,
          name: 'Vendor Performance',
          type: ReportType.MAINTENANCE,
          format: ReportFormat.EXCEL,
          status: ReportStatus.GENERATING,
          lastGenerated: '2024-01-29',
          createdBy: 'Jane Smith'
        },
        {
          id: 6,
          name: 'Cost Analysis',
          type: ReportType.MAINTENANCE,
          format: ReportFormat.PDF,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-01-30',
          createdBy: 'System',
          downloadUrl: '#'
        }
      ]
    },
    {
      title: 'Occupancy Reports',
      description: 'Tenant occupancy and vacancy trends',
      icon: '👥',
      reports: [
        {
          id: 7,
          name: 'Occupancy Rate Report',
          type: ReportType.OCCUPANCY,
          format: ReportFormat.PDF,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-02-01',
          createdBy: 'System',
          downloadUrl: '#'
        },
        {
          id: 8,
          name: 'Vacancy Analysis',
          type: ReportType.OCCUPANCY,
          format: ReportFormat.EXCEL,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-01-31',
          createdBy: 'John Doe',
          downloadUrl: '#'
        },
        {
          id: 9,
          name: 'Tenant Turnover',
          type: ReportType.OCCUPANCY,
          format: ReportFormat.PDF,
          status: ReportStatus.SCHEDULED,
          lastGenerated: '2024-01-28',
          createdBy: 'System'
        }
      ]
    },
    {
      title: 'Compliance Reports',
      description: 'Certificate status and compliance tracking',
      icon: '📋',
      reports: [
        {
          id: 10,
          name: 'Certificate Expiry Report',
          type: ReportType.COMPLIANCE,
          format: ReportFormat.PDF,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-02-02',
          createdBy: 'System',
          downloadUrl: '#'
        },
        {
          id: 11,
          name: 'Compliance Status',
          type: ReportType.COMPLIANCE,
          format: ReportFormat.EXCEL,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-01-30',
          createdBy: 'Jane Smith',
          downloadUrl: '#'
        },
        {
          id: 12,
          name: 'Inspection Schedule',
          type: ReportType.COMPLIANCE,
          format: ReportFormat.PDF,
          status: ReportStatus.COMPLETED,
          lastGenerated: '2024-01-29',
          createdBy: 'System',
          downloadUrl: '#'
        }
      ]
    }
  ];

  const quickStats: ReportStats[] = [
    { label: 'Reports Generated', value: '247', icon: '📊', color: 'text-primary-600' },
    { label: 'This Month', value: '23', icon: '📅', color: 'text-success-600' },
    { label: 'Scheduled Reports', value: '12', icon: '⏰', color: 'text-yellow-600' },
    { label: 'Export Formats', value: '3', icon: '📁', color: 'text-blue-600' },
  ];

  // Helper function to get status styling
  const getStatusStyle = (status: ReportStatus): string => {
    switch (status) {
      case ReportStatus.COMPLETED:
        return 'bg-success-100 text-success-800';
      case ReportStatus.GENERATING:
        return 'bg-blue-100 text-blue-800';
      case ReportStatus.SCHEDULED:
        return 'bg-yellow-100 text-yellow-800';
      case ReportStatus.FAILED:
        return 'bg-danger-100 text-danger-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  // Helper function to format file size
  const formatFileSize = (bytes?: number): string => {
    if (!bytes) return '';
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  return (
    <div className="space-y-6">
      {/* Debug Info */}
      <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded">
        <h2 className="text-purple-800 font-bold">✅ DEBUG: Reports Page Loaded</h2>
        <p className="text-purple-700">📍 URL: /reports</p>
        <p className="text-purple-700">🕐 Rendered at: {new Date().toLocaleTimeString()}</p>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Reports & Analytics</h1>
          <p className="text-neutral-600 mt-2">
            Generate insights and track performance across your property portfolio
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-neutral-600 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Schedule Report
          </button>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Generate Report</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
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

      {/* Report Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reportCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-neutral-200">
            {/* Category Header */}
            <div className="px-6 py-4 border-b border-neutral-200">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{category.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">{category.title}</h3>
                  <p className="text-sm text-neutral-600">{category.description}</p>
                </div>
              </div>
            </div>

            {/* Reports List */}
            <div className="p-6">
              <div className="space-y-3">
                {category.reports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-neutral-900">{report.name}</h4>
                      <div className="flex items-center space-x-2 text-xs text-neutral-500 mt-1">
                        <span>Last generated: {report.lastGenerated}</span>
                        {report.fileSize && (
                          <span>• {formatFileSize(report.fileSize)}</span>
                        )}
                        <span>• By: {report.createdBy}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusStyle(report.status)}`}>
                        {report.status}
                      </span>
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">
                        {report.format}
                      </span>
                      {report.status === ReportStatus.COMPLETED ? (
                        <button className="text-primary-600 hover:text-primary-900 text-sm font-medium">
                          Download
                        </button>
                      ) : (
                        <button className="text-primary-600 hover:text-primary-900 text-sm font-medium">
                          Generate
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="px-6 py-4 border-b border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900">Quick Actions</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border-2 border-dashed border-neutral-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-center">
              <div className="text-2xl mb-2">📈</div>
              <h4 className="font-medium text-neutral-900">Custom Report</h4>
              <p className="text-sm text-neutral-600">Create a custom report with specific criteria</p>
            </button>

            <button className="p-4 border-2 border-dashed border-neutral-300 rounded-lg hover:border-success-500 hover:bg-success-50 transition-colors text-center">
              <div className="text-2xl mb-2">📧</div>
              <h4 className="font-medium text-neutral-900">Email Reports</h4>
              <p className="text-sm text-neutral-600">Set up automated email reports</p>
            </button>

            <button className="p-4 border-2 border-dashed border-neutral-300 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-colors text-center">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-medium text-neutral-900">Analytics Dashboard</h4>
              <p className="text-sm text-neutral-600">View interactive analytics and charts</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
