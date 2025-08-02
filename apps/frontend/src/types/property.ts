
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
  lastInspection: string; // ISO Date String
  nextInspection: string; //ISO Date String
}
