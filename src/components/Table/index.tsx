import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	flexRender,
	ColumnDef,
} from '@tanstack/react-table'
import { useState } from 'react'
import { TableProps } from './types'
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa'
import { MdChevronLeft, MdChevronRight, MdFirstPage, MdLastPage } from 'react-icons/md'
import { Ait } from '@/generated'

const Table = ({ data, columns, onView, onEdit, onDelete }: TableProps) => {
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 10,
	})

	const updatedColumns: ColumnDef<Ait>[] = [
		...columns,
		{
			id: 'actions',
			header: 'Actions',
			cell: ({ row }) => (
				<div className='flex items-center gap-2'>
					<button
						className='text-blue-500 hover:text-blue-700'
						onClick={() => onView(row.original.id)}
						aria-label={`View details for ${row.original.placaVeiculo}`}
					>
						<FaEye />
					</button>
					<button
						className='text-green-500 hover:text-green-700'
						onClick={() => onEdit(row.original.id)}
						aria-label={`Edit ${row.original.placaVeiculo}`}
					>
						<FaEdit />
					</button>
					<button
						className='text-red-500 hover:text-red-700'
						onClick={() => onDelete(row.original.id)}
						aria-label={`Delete ${row.original.placaVeiculo}`}
					>
						<FaTrash />
					</button>
				</div>
			),
		},
	]

	const table = useReactTable({
		data,
		columns: updatedColumns,
		pageCount: Math.ceil(data.length / pagination.pageSize),
		state: {
			pagination,
		},
		onPaginationChange: setPagination,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	})

	return (
		<div className='space-y-4'>
			<table className='w-full border-collapse border border-gray-300'>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className='px-4 py-2 border border-gray-300 bg-gray-100 text-left font-semibold'
								>
									{header.isPlaceholder
										? null
										: flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} className='hover:bg-gray-50'>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id} className='px-4 py-2 border border-gray-300'>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			{/* Pagination Controls */}
			<div className='flex items-center justify-between'>
				<button
					className='p-2 bg-gray-200 rounded disabled:opacity-50'
					onClick={() => table.setPageIndex(0)}
					disabled={!table.getCanPreviousPage()}
					aria-label='First Page'
				>
					<MdFirstPage />
				</button>
				<button
					className='p-2 bg-gray-200 rounded disabled:opacity-50'
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
					aria-label='Previous Page'
				>
					<MdChevronLeft />
				</button>
				<span>
					Pagina{' '}
					<strong>
						{pagination.pageIndex + 1} de {table.getPageCount()}
					</strong>
				</span>
				<button
					className='p-2 bg-gray-200 rounded disabled:opacity-50'
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
					aria-label='Next Page'
				>
					<MdChevronRight />
				</button>
				<button
					className='p-2 bg-gray-200 rounded disabled:opacity-50'
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					disabled={!table.getCanNextPage()}
					aria-label='Last Page'
				>
					<MdLastPage />
				</button>
			</div>
		</div>
	)
}

export default Table
