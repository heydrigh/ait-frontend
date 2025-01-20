import { Ait } from '@/generated'
import { formatCurrency } from '@/utils/currency'
import { ColumnDef } from '@tanstack/react-table'
import { TableAction } from './types'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'

export const generateMockAits = (count: number = 10): Ait[] => {
	const mockAits: Ait[] = []
	for (let i = 1; i <= count; i++) {
		mockAits.push({
			id: `mock-id-${i}`,
			placaVeiculo: `ABC-${i.toString().padStart(4, '0')}`,
			dataInfracao: new Date(2023, 4, (i % 28) + 1, 14, 30, 0, 0),
			descricao: `Mock description for AIT ${i}`,
			valorMulta: Math.round((Math.random() * 500 + 50) * 100) / 100,
		})
	}
	return mockAits
}

export const mockColumns: ColumnDef<Ait>[] = [
	{
		accessorKey: 'placaVeiculo',
		header: 'License Plate',
	},
	{
		accessorKey: 'dataInfracao',
		header: 'Infraction Date',
		cell: (info) => new Date(info.getValue<Date>()).toLocaleString(),
	},
	{
		accessorKey: 'descricao',
		header: 'Description',
	},
	{
		accessorKey: 'valorMulta',
		header: 'Fine Amount',
		cell: (info) => formatCurrency(info.getValue<number>()),
	},
]

export const mockActions: TableAction<Ait>[] = [
	{
		label: 'View',
		icon: FaEye,
		onClick: (ait) => alert(`Viewing ${ait.placaVeiculo}`),
	},
	{
		label: 'Edit',
		icon: FaEdit,
		onClick: (ait) => alert(`Editing ${ait.placaVeiculo}`),
	},
	{
		label: 'Delete',
		icon: FaTrash,
		onClick: (ait) => alert(`Deleting ${ait.placaVeiculo}`),
	},
]
