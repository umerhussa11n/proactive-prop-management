export enum CertificateType {
  EPC_CERTIFICATE = 'EPC Certificate',
  GAS_SAFETY_CERTIFICATE = 'Gas Safety Certificate',
  FIRE_SAFETY_CERTIFICATE = 'Fire Safety Certificate',
  ELECTRICAL_SAFETY_CERTIFICATE = 'Electrical Safety Certificate',
  ASBESTOS_CERTIFICATE = 'Asbestos Certificate',
  ENERGY_PERFORMANCE_CERTIFICATE = 'Energy Performance Certificate',
  LEGIONELLA_RISK_ASSESSMENT = 'Legionella Risk Assessment',
  PAT_TESTING_CERTIFICATE = 'PAT Testing Certificate'
}

export enum CertificateStatus {
  VALID = 'Valid',
  EXPIRING_SOON = 'Expiring Soon',
  EXPIRED = 'Expired',
  PENDING_RENEWAL = 'Pending Renewal',
  UNDER_REVIEW = 'Under Review',
  REJECTED = 'Rejected'
}

export enum CertificateRating {
  PASS = 'Pass',
  FAIL = 'Fail',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G'
}

export interface Certificate {
  id: number;
  type: CertificateType;
  property: string; // Property name - could be propertyId: number if you want foreign key
  propertyId?: number; // Optional foreign key reference
  issueDate: string; // ISO date string
  expiryDate: string; // ISO date string
  rating: CertificateRating;
  status: CertificateStatus;
  documentUrl: string;
  issuer?: string; // Who issued the certificate
  notes?: string; // Additional notes
  cost?: number; // Cost of obtaining certificate
  reminderSent?: boolean; // Whether reminder was sent for renewal
}

export interface CertificateStats {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export interface CertificateTypeInfo {
  name: CertificateType;
  count: number;
  color: string;
  validityPeriod: number; // in months
  isRequired: boolean;
}

export interface CertificateCreateRequest {
  type: CertificateType;
  property: string;
  propertyId?: number;
  issueDate: string;
  expiryDate: string;
  rating: CertificateRating;
  documentUrl: string;
  issuer?: string;
  notes?: string;
  cost?: number;
}

export interface CertificateUpdateRequest extends Partial<CertificateCreateRequest> {
  id: number;
  status?: CertificateStatus;
}

// For certificates page component
export interface CertificatesPageData {
  certificates: Certificate[];
  stats: CertificateStats[];
  certificateTypes: CertificateTypeInfo[];
  totalCount: number;
}

// Helper interface for filtering/searching
export interface CertificateFilters {
  type?: CertificateType;
  status?: CertificateStatus;
  property?: string;
  expiringWithinDays?: number;
}
