import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { aitsApiService } from '@/services/aitsService'
import { Ait, UpdateAitDto } from '@/generated'

export interface UpdateAitPayload {
	id: string
	updateAitDto: UpdateAitDto
}

export const useUpdateAit = (options?: UseMutationOptions<Ait, AxiosError, UpdateAitPayload>) => {
	return useMutation<Ait, AxiosError, UpdateAitPayload>({
		mutationFn: ({ id, updateAitDto }) => aitsApiService.updateAit(id, updateAitDto),
		...options,
	})
}
