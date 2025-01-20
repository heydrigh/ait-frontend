import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { aitsApiService } from '@/services/aitsService'

export const useDeleteAit = (options?: UseMutationOptions<void, AxiosError, { id: string }>) => {
	return useMutation<void, AxiosError, { id: string }>({
		mutationFn: ({ id }) => aitsApiService.deleteAit(id),
		...options,
	})
}
