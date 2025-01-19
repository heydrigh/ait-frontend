import { Ait } from '@/generated'
import { ColumnDef } from '@tanstack/react-table'

export interface TableProps {
	data: Ait[]
	columns: ColumnDef<Ait>[]
	onView: (id: string) => void
	onEdit: (id: string) => void
	onDelete: (id: string) => void
}
