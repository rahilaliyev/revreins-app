import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { endpoints, QUERY_KEYS } from 'src/contants';

import { api } from '../axiosInstance';

export const useDeleteStageMutation = (projectId: number): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await api.delete(`${endpoints.tenant.projectStages}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PROJECTS, projectId],
      });
    },
  });
};
