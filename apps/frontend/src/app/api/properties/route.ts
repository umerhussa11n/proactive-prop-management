import { NextRequest, NextResponse } from 'next/server';
import { PropertyType, PropertyStatus } from '@/types/property';

// Mock data - will be replaced with backend calls later
const mockProperties = [
  {
    id: 1,
    name: 'Sunset Apartments Building A',
    address: '123 Oak Street, Manchester',
    units: 24,
    occupied: 22,
    type: PropertyType.APARTMENT_COMPLEX,
    status: PropertyStatus.ACTIVE,
    lastInspection: '2024-01-15',
    nextInspection: '2024-04-15',
    monthlyRent: 15600, // Total monthly rent
    yearBuilt: 2018,
    manager: 'John Smith'
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
    nextInspection: '2024-04-20',
    monthlyRent: 18000,
    yearBuilt: 2020,
    manager: 'Sarah Johnson'
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
    nextInspection: '2024-04-10',
    monthlyRent: 25000,
    yearBuilt: 2015,
    manager: 'Mike Wilson'
  },
  {
    id: 4,
    name: 'Riverside Condominiums',
    address: '321 River Road, Leeds',
    units: 16,
    occupied: 14,
    type: PropertyType.CONDO,
    status: PropertyStatus.ACTIVE,
    lastInspection: '2024-01-25',
    nextInspection: '2024-04-25',
    monthlyRent: 22400,
    yearBuilt: 2019,
    manager: 'Emma Davis'
  },
  {
    id: 5,
    name: 'Industrial Park Unit 5',
    address: '555 Industrial Way, Sheffield',
    units: 4,
    occupied: 3,
    type: PropertyType.COMMERCIAL,
    status: PropertyStatus.ACTIVE,
    lastInspection: '2024-01-12',
    nextInspection: '2024-04-12',
    monthlyRent: 12000,
    yearBuilt: 2010,
    manager: 'David Brown'
  }
];

export async function GET(request: NextRequest) {
  try {
    // Get query parameters for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const type = searchParams.get('type');
    const search = searchParams.get('search');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Filter properties based on query params
    let filteredProperties = [...mockProperties];

    if (status && status !== 'all') {
      filteredProperties = filteredProperties.filter(p => p.status === status);
    }

    if (type && type !== 'all') {
      filteredProperties = filteredProperties.filter(p => p.type === type);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filteredProperties = filteredProperties.filter(p =>
        p.name.toLowerCase().includes(searchLower) ||
        p.address.toLowerCase().includes(searchLower)
      );
    }

    // Add calculated fields
    const enrichedProperties = filteredProperties.map(property => ({
      ...property,
      occupancyPercentage: Math.round((property.occupied / property.units) * 100),
      vacantUnits: property.units - property.occupied,
      nextInspectionDays: calculateDaysUntilInspection(property.nextInspection),
      averageRentPerUnit: Math.round(property.monthlyRent / property.units)
    }));

    return NextResponse.json({
      properties: enrichedProperties,
      total: enrichedProperties.length,
      totalUnits: enrichedProperties.reduce((sum, p) => sum + p.units, 0),
      totalOccupied: enrichedProperties.reduce((sum, p) => sum + p.occupied, 0),
    });

  } catch (error) {
    console.error('Properties API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validate required fields
    if (!body.name || !body.address || !body.units) {
      return NextResponse.json(
        { error: 'Name, address, and units are required' },
        { status: 400 }
      );
    }

    // Create new property with generated ID
    const newProperty = {
      id: Math.max(...mockProperties.map(p => p.id)) + 1,
      name: body.name,
      address: body.address,
      units: parseInt(body.units),
      occupied: parseInt(body.occupied) || 0,
      type: body.type || PropertyType.APARTMENT_COMPLEX,
      status: PropertyStatus.ACTIVE,
      lastInspection: new Date().toISOString().split('T')[0],
      nextInspection: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      monthlyRent: parseInt(body.monthlyRent) || 0,
      yearBuilt: parseInt(body.yearBuilt) || new Date().getFullYear(),
      manager: body.manager || 'Property Manager'
    };

    // Add to mock data (in real app, this would save to database)
    mockProperties.push(newProperty);

    return NextResponse.json(newProperty, { status: 201 });

  } catch (error) {
    console.error('Create property error:', error);
    return NextResponse.json(
      { error: 'Failed to create property' },
      { status: 500 }
    );
  }
}

// Helper function
function calculateDaysUntilInspection(date: string): number {
  const inspectionDate = new Date(date);
  const today = new Date();
  const diffTime = inspectionDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
