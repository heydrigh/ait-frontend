import { render, screen, fireEvent } from '@testing-library/react'
import Dialog from './'
import { DialogProps } from './types'

const renderDialog = (props: Partial<DialogProps> = {}) =>
	render(
		<Dialog isOpen={true} title='Test Dialog' onConfirm={jest.fn()} onCancel={jest.fn()} {...props}>
			This is a test dialog.
		</Dialog>
	)

describe('Dialog Component', () => {
	it('should render the dialog with correct title and content', () => {
		renderDialog()

		expect(screen.getByText('Test Dialog')).toBeInTheDocument()
		expect(screen.getByText('This is a test dialog.')).toBeInTheDocument()
	})

	it('should call onConfirm when Confirm button is clicked', () => {
		const onConfirm = jest.fn()
		renderDialog({ onConfirm })

		fireEvent.click(screen.getByText('Confirma'))
		expect(onConfirm).toHaveBeenCalled()
	})

	it('should call onCancel when Cancel button is clicked', () => {
		const onCancel = jest.fn()
		renderDialog({ onCancel })

		fireEvent.click(screen.getByText('Cancela'))
		expect(onCancel).toHaveBeenCalled()
	})

	it('should not render the dialog when isOpen is false', () => {
		renderDialog({ isOpen: false })

		expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument()
	})
})
