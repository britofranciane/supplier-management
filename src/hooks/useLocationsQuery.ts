import { useQuery } from '@tanstack/react-query';
import { fetchStates, fetchCitiesForState } from '@/services';

export const useLocationsQuery = (state: string) => {
  const { data: states, isLoading: isLoadingState } = useQuery({
    queryKey: ['estados'],
    queryFn: fetchStates,
  });

  const { data: cities } = useQuery({
    queryKey: ['cidades'],
    queryFn: () => fetchCitiesForState(state),
    enabled: !!state,
  });

  return { states, isLoadingState, cities };
};
