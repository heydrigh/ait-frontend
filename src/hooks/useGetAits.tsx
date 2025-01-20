import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AitPaginationResult } from '@/generated/models'
import { AxiosError } from 'axios'
import { aitsApiService } from '@/services/aitsService'
import { AITS_QUERY_KEY } from '@/utils/constants'

type UseGetAitsProps = {
	page?: number
	limit?: number
}

export const useGetAits = (
	{ page = 1, limit = 10 }: UseGetAitsProps,
	options?: UseQueryOptions<AitPaginationResult, AxiosError>
) => {
	return useQuery<AitPaginationResult, AxiosError>({
		queryKey: [AITS_QUERY_KEY, page, limit],
		queryFn: () => aitsApiService.findAllAits(page, limit),
		...options,
	})
}
