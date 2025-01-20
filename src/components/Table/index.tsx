'use client'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { TableProps } from './types'

const Table = <T,>({ data, columns, actions }: TableProps<T>) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<div className='overflow-hidden rounded-lg border border-gray-200'>
			<table className='w-full table-auto bg-white'>
				<thead className='bg-gray-100'>
					<tr>
						{table.getHeaderGroups().map((headerGroup) =>
							headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className='px-6 py-3 text-left text-xs font-medium uppercase text-gray-600'
								>
									{header.isPlaceholder
										? null
										: flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))
						)}
						{actions && (
							<th className='px-6 py-3 text-center text-xs font-medium uppercase text-gray-600'>
								Ações
							</th>
						)}
					</tr>
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id} className='hover:bg-gray-50 transition-all duration-150'>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id} className='px-6 py-4 text-gray-800'>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
							{actions && (
								<td className='px-6 py-4 flex justify-center gap-4'>
									{actions.map((action, index) => (
										<button
											key={index}
											onClick={() => action.onClick(row.original)}
											className='text-gray-500 hover:text-gray-700 transition-all'
											aria-label={action.label}
										>
											<action.icon size={20} />
										</button>
									))}
								</td>
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table
