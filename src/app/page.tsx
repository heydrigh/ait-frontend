'use client'

import Button from '@/components/Button'
import Table from '@/components/Table'
import { Ait } from '@/generated'
import { formatCurrency } from '@/utils/currency'
import { ColumnDef } from '@tanstack/react-table'
import { useState } from 'react'
import { TableAction } from '@/components/Table/types'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import Pagination from '@/components/Pagination'
import { useGetAits } from '@/hooks/useGetAits'
import Loader from '@/components/Loader'
import { formatToBrazilianDateTime } from '@/utils/dates'

export default function Home() {
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 10
	const { data, isLoading } = useGetAits({ page: currentPage, limit: itemsPerPage })

	const columns: ColumnDef<Ait>[] = [
		{
			accessorKey: 'placaVeiculo',
			header: 'Placa de veiculo',
		},
		{
			accessorKey: 'dataInfracao',
			header: 'Data da infração',
			cell: ({ getValue }) => formatToBrazilianDateTime(getValue<string>()),
		},
		{
			accessorKey: 'descricao',
			header: 'Descrição',
		},
		{
			accessorKey: 'valorMulta',
			header: 'Valor da multa',
			cell: ({ getValue }) => `${formatCurrency(getValue<number>())}`,
		},
	]

	const actions: TableAction<Ait>[] = [
		{
			label: 'View',
			icon: FaEye,
			onClick: (ait) => alert(`Viewing AIT ${ait.id}`),
		},
		{
			label: 'Edit',
			icon: FaEdit,
			onClick: (ait) => alert(`Editing AIT ${ait.id}`),
		},
		{
			label: 'Delete',
			icon: FaTrash,
			onClick: (ait) => {
				const confirm = window.confirm(`Are you sure you want to delete AIT ${ait.id}?`)
				if (confirm) {
					alert(`Deleted AIT ${ait.id}`)
				}
			},
		},
	]

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

	if (isLoading) return <Loader />

	return (
		<main className='flex pt-4 w-full flex-col'>
			<div className='flex justify-between items-center mb-4'>
				<h1 className='text-2xl font-bold'>Listagem de AIT&apos;s</h1>
				<Button onClick={() => alert('Processing AITs...')}>Processar AIT&apos;s</Button>
			</div>
			{data?.data && (
				<>
					<Table data={data.data} columns={columns} actions={actions} />
					<div className='mt-4'>
						<Pagination
							currentPage={currentPage}
							totalPages={Math.ceil(data.total / itemsPerPage)}
							onPageChange={handlePageChange}
						/>
					</div>
				</>
			)}
		</main>
	)
}
