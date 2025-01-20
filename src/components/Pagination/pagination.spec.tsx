import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from './'

describe('Pagination Component', () => {
	const onPageChange = jest.fn()

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should disable "First" and "Previous" buttons on the first page', () => {
		render(<Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />)

		expect(screen.getByLabelText('First Page')).toBeDisabled()
		expect(screen.getByLabelText('Previous Page')).toBeDisabled()
		expect(screen.getByLabelText('Next Page')).not.toBeDisabled()
		expect(screen.getByLabelText('Last Page')).not.toBeDisabled()
	})

	it('should disable "Next" and "Last" buttons on the last page', () => {
		render(<Pagination currentPage={10} totalPages={10} onPageChange={onPageChange} />)

		expect(screen.getByLabelText('First Page')).not.toBeDisabled()
		expect(screen.getByLabelText('Previous Page')).not.toBeDisabled()
		expect(screen.getByLabelText('Next Page')).toBeDisabled()
		expect(screen.getByLabelText('Last Page')).toBeDisabled()
	})

	it('should call onPageChange with correct page number on button clicks', () => {
		render(<Pagination currentPage={5} totalPages={10} onPageChange={onPageChange} />)

		fireEvent.click(screen.getByLabelText('First Page'))
		expect(onPageChange).toHaveBeenCalledWith(1)

		fireEvent.click(screen.getByLabelText('Previous Page'))
		expect(onPageChange).toHaveBeenCalledWith(4)

		fireEvent.click(screen.getByLabelText('Next Page'))
		expect(onPageChange).toHaveBeenCalledWith(6)

		fireEvent.click(screen.getByLabelText('Last Page'))
		expect(onPageChange).toHaveBeenCalledWith(10)
	})

	it('should not call onPageChange when disabled buttons are clicked', () => {
		render(<Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />)

		fireEvent.click(screen.getByLabelText('First Page'))
		fireEvent.click(screen.getByLabelText('Previous Page'))

		expect(onPageChange).not.toHaveBeenCalled()
	})
})
