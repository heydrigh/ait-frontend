import { aitsApiService } from '@/services/aitsService'
import { AitEditProps } from './types'
import AitDetailsClient from './client'

export default async function AitEdit({ params }: AitEditProps) {
	const id = (await params).id

	const ait = await aitsApiService.findAitById(id)

	return <AitDetailsClient ait={ait} />
}
