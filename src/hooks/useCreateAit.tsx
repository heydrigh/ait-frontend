import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { aitsApiService } from '@/services/aitsService'
import { CreateAitDto, Ait } from '@/generated/models'

export const useCreateAit = (options?: UseMutationOptions<Ait, AxiosError, CreateAitDto>) => {
	return useMutation<Ait, AxiosError, CreateAitDto>({
		mutationFn: (createAitDto) => aitsApiService.createAit(createAitDto),
		...options,
	})
}
