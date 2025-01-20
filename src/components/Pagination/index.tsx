import { MdChevronLeft, MdChevronRight, MdFirstPage, MdLastPage } from 'react-icons/md'
import { PaginationProps } from './types'

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
	const handleFirstPage = () => onPageChange(1)
	const handleLastPage = () => onPageChange(totalPages)
	const handlePreviousPage = () => onPageChange(currentPage - 1)
	const handleNextPage = () => onPageChange(currentPage + 1)

	return (
		<div className='flex items-center justify-between space-x-2'>
			<button
				onClick={handleFirstPage}
				disabled={currentPage === 1}
				aria-label='First Page'
				className='p-2 bg-gray-200 rounded disabled:opacity-50'
			>
				<MdFirstPage />
			</button>
			<button
				onClick={handlePreviousPage}
				disabled={currentPage === 1}
				aria-label='Previous Page'
				className='p-2 bg-gray-200 rounded disabled:opacity-50'
			>
				<MdChevronLeft />
			</button>
			<span>
				Pagina{' '}
				<strong>
					{currentPage} de {totalPages}
				</strong>
			</span>
			<button
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
				aria-label='Next Page'
				className='p-2 bg-gray-200 rounded disabled:opacity-50'
			>
				<MdChevronRight />
			</button>
			<button
				onClick={handleLastPage}
				disabled={currentPage === totalPages}
				aria-label='Last Page'
				className='p-2 bg-gray-200 rounded disabled:opacity-50'
			>
				<MdLastPage />
			</button>
		</div>
	)
}

export default Pagination
