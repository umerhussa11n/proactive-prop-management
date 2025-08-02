
export enum ReportType {
  FINANCIAL = 'Financial',
  MAINTENANCE = 'Maintenance',
  OCCUPANCY = 'Occupancy',
  COMPLIANCE = 'Compliance',
  CUSTOM = 'Custom'
}

export enum ReportFormat {
  PDF = 'PDF',
  EXCEL = 'Excel',
  CSV = 'CSV',
  JSON = 'JSON'
}

export enum ReportStatus {
  GENERATING = 'Generating',
  COMPLETED = 'Completed',
  FAILED = 'Failed',
  SCHEDULED = 'Scheduled'
}

export interface Report {
  id: number;
  name: string;
  type: ReportType;
  format: ReportFormat;
  status: ReportStatus;
  lastGenerated: string;
  createdBy: string;
  fileSize?: number; // in bytes
  downloadUrl?: string;
  parameters?: ReportParameters;
}

export interface ReportParameters {
  dateFrom?: string;
  dateTo?: string;
  propertyIds?: number[];
  includeCharts?: boolean;
  [key: string]: any; // Allow custom parameters
}

export interface ReportCategory {
  title: string;
  description: string;
  icon: string;
  reports: Report[];
}

export interface ReportStats {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export interface ReportTemplate {
  id: number;
  name: string;
  type: ReportType;
  description: string;
  defaultFormat: ReportFormat;
  parameters: ReportParameters;
  isCustom: boolean;
}

// For reports page component
export interface ReportsPageData {
  reportCategories: ReportCategory[];
  stats: ReportStats[];
  templates: ReportTemplate[];
  recentReports: Report[];
}

export interface ReportGenerateRequest {
  templateId?: number;
  name: string;
  type: ReportType;
  format: ReportFormat;
  parameters: ReportParameters;
}
