import { render, screen, fireEvent } from '@testing-library/react'
import Table from './'
import { generateMockAits, mockColumns, mockActions } from './mocks'

describe('Table Component', () => {
	const mockData = generateMockAits(15)

	beforeEach(() => {
		jest.clearAllMocks()
	})

	it('should render table headers correctly', () => {
		render(<Table data={mockData} columns={mockColumns} actions={mockActions} />)

		expect(screen.getByText('License Plate')).toBeInTheDocument()
		expect(screen.getByText('Infraction Date')).toBeInTheDocument()
		expect(screen.getByText('Description')).toBeInTheDocument()
		expect(screen.getByText('Fine Amount')).toBeInTheDocument()
	})

	it('should render table rows correctly', () => {
		render(<Table data={mockData} columns={mockColumns} actions={mockActions} />)

		const firstRow = mockData[0]
		expect(screen.getByText(firstRow.placaVeiculo)).toBeInTheDocument()
		expect(screen.getByText(firstRow.descricao)).toBeInTheDocument()
	})

	it('should call action callbacks when buttons are clicked', () => {
		const viewAction = jest.fn()
		const editAction = jest.fn()
		const deleteAction = jest.fn()

		const actions = [
			{ label: 'View', icon: mockActions[0].icon, onClick: viewAction },
			{ label: 'Edit', icon: mockActions[1].icon, onClick: editAction },
			{ label: 'Delete', icon: mockActions[2].icon, onClick: deleteAction },
		]

		render(<Table data={mockData} columns={mockColumns} actions={actions} />)

		const viewButton = screen.getAllByLabelText('View')[0]
		const editButton = screen.getAllByLabelText('Edit')[0]
		const deleteButton = screen.getAllByLabelText('Delete')[0]

		fireEvent.click(viewButton)
		fireEvent.click(editButton)
		fireEvent.click(deleteButton)

		expect(viewAction).toHaveBeenCalledWith(mockData[0])
		expect(editAction).toHaveBeenCalledWith(mockData[0])
		expect(deleteAction).toHaveBeenCalledWith(mockData[0])
	})

	it('should render without actions if none are provided', () => {
		render(<Table data={mockData} columns={mockColumns} />)

		const actionHeaders = screen.queryByText('Actions')
		expect(actionHeaders).not.toBeInTheDocument()
	})
})
