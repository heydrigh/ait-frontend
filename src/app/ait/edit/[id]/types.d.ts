import { Ait } from '@/generated'

export interface AitEditClientProps {
	ait: Ait
}

export interface AitEditProps {
	params: Promise<{ id: string }>
}
