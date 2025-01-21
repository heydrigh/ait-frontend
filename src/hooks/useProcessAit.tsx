import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { aitsApiService } from '@/services/aitsService'

export const useProcessAits = (options?: UseMutationOptions<void, AxiosError>) => {
	return useMutation<void, AxiosError>({
		mutationFn: aitsApiService.processAits,
		...options,
	})
}
