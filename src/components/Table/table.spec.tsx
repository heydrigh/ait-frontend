import { render, screen, fireEvent } from '@testing-library/react'
import Table from './'
import { generateMockAits, mockColumns } from './mocks'

describe('Table Component', () => {
	const mockData = generateMockAits(15)
	const onView = jest.fn()
	const onEdit = jest.fn()
	const onDelete = jest.fn()

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should render table headers correctly', () => {
		render(
			<Table
				data={mockData}
				columns={mockColumns}
				onView={onView}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		)

		expect(screen.getByText('License Plate')).toBeInTheDocument()
		expect(screen.getByText('Infraction Date')).toBeInTheDocument()
		expect(screen.getByText('Description')).toBeInTheDocument()
		expect(screen.getByText('Fine Amount')).toBeInTheDocument()
	})

	it('should render table rows correctly', () => {
		render(
			<Table
				data={mockData}
				columns={mockColumns}
				onView={onView}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		)

		const firstRow = mockData[0]
		expect(screen.getByText(firstRow.placaVeiculo)).toBeInTheDocument()
		expect(screen.getByText(firstRow.descricao)).toBeInTheDocument()
	})

	it('should call onView, onEdit, and onDelete when actions are clicked', () => {
		render(
			<Table
				data={mockData}
				columns={mockColumns}
				onView={onView}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		)

		const viewButton = screen.getAllByRole('button', { name: /View Details/i })[0]
		const editButton = screen.getAllByRole('button', { name: /Edit/i })[0]
		const deleteButton = screen.getAllByRole('button', { name: /Delete/i })[0]

		fireEvent.click(viewButton)
		fireEvent.click(editButton)
		fireEvent.click(deleteButton)

		expect(onView).toHaveBeenCalledWith(mockData[0].id)
		expect(onEdit).toHaveBeenCalledWith(mockData[0].id)
		expect(onDelete).toHaveBeenCalledWith(mockData[0].id)
	})

	it('should render pagination controls and handle clicks', () => {
		render(
			<Table
				data={mockData}
				columns={mockColumns}
				onView={onView}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		)

		const nextPageButton = screen.getByRole('button', { name: 'Next Page' })
		const previousPageButton = screen.getByRole('button', { name: 'Previous Page' })
		const firstPageButton = screen.getByRole('button', { name: 'First Page' })
		const lastPageButton = screen.getByRole('button', { name: 'Last Page' })

		expect(previousPageButton).toBeDisabled()
		expect(firstPageButton).toBeDisabled()
		expect(nextPageButton).not.toBeDisabled()
		expect(lastPageButton).not.toBeDisabled()

		fireEvent.click(nextPageButton)
		expect(previousPageButton).not.toBeDisabled()
		expect(firstPageButton).not.toBeDisabled()

		fireEvent.click(lastPageButton)
		expect(nextPageButton).toBeDisabled()
		expect(lastPageButton).toBeDisabled()

		fireEvent.click(firstPageButton)
		expect(previousPageButton).toBeDisabled()
		expect(firstPageButton).toBeDisabled()
	})
})
