import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Property, PropertyFilters, PropertiesResponse, PropertyCreateRequest } from '@/types/property';



// Query keys - centralized for consistency
export const propertyKeys = {
  all: ['properties'] as const,
  lists: () => [...propertyKeys.all, 'list'] as const,
  list: (filters: PropertyFilters) => [...propertyKeys.lists(), { filters }] as const,
  details: () => [...propertyKeys.all, 'detail'] as const,
  detail: (id: number) => [...propertyKeys.details(), id] as const,
};

// Fetch properties with optional filters
export function useProperties(filters: PropertyFilters = {}) {
  return useQuery({
    queryKey: propertyKeys.list(filters),
    queryFn: async (): Promise<PropertiesResponse> => {
      const params = new URLSearchParams();

      if (filters.status) params.set('status', filters.status);
      if (filters.type) params.set('type', filters.type);
      if (filters.search) params.set('search', filters.search);

      const response = await fetch(`/api/properties?${params}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch properties: ${response.status}`);
      }

      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
}

// Fetch single property by ID
export function usePropertyById(id: number) {
  return useQuery({
    queryKey: propertyKeys.detail(id),
    queryFn: async (): Promise<Property> => {
      const response = await fetch(`/api/properties/${id}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Property not found');
        }
        throw new Error(`Failed to fetch property: ${response.status}`);
      }

      return response.json();
    },
    enabled: !!id, // Only run if ID is provided
    staleTime: 10 * 60 * 1000, // 10 minutes for individual properties
  });
}

// Create new property
export function useCreateProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (propertyData: PropertyCreateRequest): Promise<Property> => {
      const response = await fetch('/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create property');
      }

      return response.json();
    },
    onSuccess: (newProperty) => {
      // Invalidate and refetch properties list
      queryClient.invalidateQueries({ queryKey: propertyKeys.lists() });

      // Optionally add the new property to existing cache
      queryClient.setQueryData(propertyKeys.detail(newProperty.id), newProperty);
    },
    onError: (error) => {
      console.error('Failed to create property:', error);
    },
  });
}

// Update existing property
export function useUpdateProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<Property> }): Promise<Property> => {
      const response = await fetch(`/api/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update property');
      }

      return response.json();
    },
    onSuccess: (updatedProperty) => {
      // Update the property in cache
      queryClient.setQueryData(propertyKeys.detail(updatedProperty.id), updatedProperty);

      // Invalidate lists to ensure they're updated
      queryClient.invalidateQueries({ queryKey: propertyKeys.lists() });
    },
  });
}

// Delete property
export function useDeleteProperty() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number): Promise<void> => {
      const response = await fetch(`/api/properties/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete property');
      }
    },
    onSuccess: (_, deletedId) => {
      // Remove from cache
      queryClient.removeQueries({ queryKey: propertyKeys.detail(deletedId) });

      // Invalidate lists
      queryClient.invalidateQueries({ queryKey: propertyKeys.lists() });
    },
  });
}
