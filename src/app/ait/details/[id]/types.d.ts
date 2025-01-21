import { Ait } from '@/generated'

export interface AitDetailsClientProps {
	ait: Ait
}

export interface AitDetailsProps {
	params: Promise<{ id: string }>
}
