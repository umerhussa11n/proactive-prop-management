
export enum PropertyType {
  APARTMENT_COMPLEX = 'Apartment Complex',
  TOWNHOUSE = 'Townhouse',
  COMMERCIAL = 'Commercial',
  SINGLE_FAMILY = 'Single Family',
  CONDO = 'Condo',
  OFFICE_BUILDING = 'Office Building'
}

export enum PropertyStatus {
  ACTIVE = 'Active',
  UNDER_MAINTENANCE = 'Under Maintinance',
  VACANT = 'Vacant',
  SOLD = 'Sold',
  UNDER_CONSTRUCTION = 'Under Construction'
}

export interface Property {
  id: number;
  name: string;
  address: string;
  units: number;
  occupied: number;
  type: PropertyType;
  status: PropertyStatus;
  lastInspection: string;
  nextInspection: string;
  monthlyRent: number;
  yearBuilt: number;
  manager: string;
  // Calculated fields from API
  occupancyPercentage?: number;
  vacantUnits?: number;
  nextInspectionDays?: number;
  averageRentPerUnit?: number;
}

// ✅ - PropertyCreateRequest interface
export interface PropertyCreateRequest {
  name: string;
  address: string;
  units: number;
  occupied?: number;
  type: PropertyType;
  monthlyRent?: number;
  yearBuilt?: number;
  manager?: string;
}

// ✅ PropertyUpdateRequest interface
export interface PropertyUpdateRequest {
  name?: string;
  address?: string;
  units?: number;
  occupied?: number;
  type?: PropertyType;
  status?: PropertyStatus;
  monthlyRent?: number;
  yearBuilt?: number;
  manager?: string;
}

// ✅ PropertyFilters interface
export interface PropertyFilters {
  status?: string;
  type?: string;
  search?: string;
}

// ✅  API Response interfaces
export interface PropertiesResponse {
  properties: Property[];
  total: number;
  totalUnits: number;
  totalOccupied: number;
}

export interface PropertyResponse {
  property: Property;
}

export interface PropertiesResponse {
  properties: Property[];
  total: number;
  totalUnits: number;
  totalOccupied: number;
}
