import { aitsApiService } from '@/services/aitsService'
import { AitDetailsProps } from './types'
import AitDetailsClient from './client'

export default async function AitDetails({ params }: AitDetailsProps) {
	const id = (await params).id

	const ait = await aitsApiService.findAitById(id)

	return <AitDetailsClient ait={ait} />
}
