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
import { fromJSDateToBrazilianString } from '@/utils/dates'
import { useDeleteAit } from '@/hooks/useDeleteAit'
import { toast } from 'react-toastify'
import Dialog from '@/components/Dialog'
import { useQueryClient } from '@tanstack/react-query'
import { AITS_QUERY_KEY } from '@/utils/constants'
import { useRouter } from 'next/navigation'
import { useProcessAits } from '@/hooks/useProcessAit'

export default function Home() {
	const router = useRouter()
	const queryClient = useQueryClient()
	const [currentPage, setCurrentPage] = useState(1)
	const [selectedDelete, setSelectedDelete] = useState<Ait | null>(null)
	const itemsPerPage = 10

	const { data, isLoading } = useGetAits({ page: currentPage, limit: itemsPerPage })

	const { mutate: deleteAit } = useDeleteAit({
		onSuccess: () => {
			toast.success('AIT deletado com  sucesso!')
			setSelectedDelete(null)
			queryClient.invalidateQueries({ queryKey: [AITS_QUERY_KEY] })
		},
		onError: () => {
			toast.error(`Falha ao delatar AIT`)
			setSelectedDelete(null)
		},
	})

	const { mutate: processAit, isPending: isProcessingAit } = useProcessAits({
		onSuccess: () => {
			toast.success(`AIT's processados e enviados a fila`)
		},
		onError: () => {
			toast.error(`Falha ao processas AIT's`)
		},
	})

	const columns: ColumnDef<Ait>[] = [
		{
			accessorKey: 'placaVeiculo',
			header: 'Placa de veiculo',
		},
		{
			accessorKey: 'dataInfracao',
			header: 'Data da infração',
			cell: ({ getValue }) => fromJSDateToBrazilianString(getValue<Date>()),
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

	const handleOnClickDelete = (ait: Ait) => {
		setSelectedDelete(ait)
	}

	const handleOnClickView = (ait: Ait) => {
		router.push(`/ait/details/${ait.id}`)
	}

	const handleOnClickEdit = (ait: Ait) => {
		router.push(`/ait/edit/${ait.id}`)
	}
	const actions: TableAction<Ait>[] = [
		{
			label: 'View',
			icon: FaEye,
			onClick: handleOnClickView,
		},
		{
			label: 'Edit',
			icon: FaEdit,
			onClick: handleOnClickEdit,
		},
		{
			label: 'Delete',
			icon: FaTrash,
			onClick: handleOnClickDelete,
		},
	]

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

	const handleConfirmDelete = () => {
		if (selectedDelete) {
			deleteAit({ id: selectedDelete.id })
		}
	}

	if (isLoading) return <Loader />

	return (
		<main className='flex pt-4 w-full flex-col'>
			<div className='flex justify-between items-center mb-4'>
				<h1 className='text-2xl font-bold'>Listagem de AIT&apos;s</h1>
				<Button loading={isProcessingAit} onClick={() => processAit()}>
					Processar AIT&apos;s
				</Button>
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

			<Dialog
				isOpen={!!selectedDelete}
				title='Confirmar deleção'
				onConfirm={handleConfirmDelete}
				onCancel={() => setSelectedDelete(null)}
			>
				{`Tem certeza que quer deletar AIT da placa: ${selectedDelete?.placaVeiculo}?`}
			</Dialog>
		</main>
	)
}
