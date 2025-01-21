import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextArea from './'

describe('TextArea Component', () => {
	it('should render the label and placeholder correctly', () => {
		render(
			<TextArea label='Description' name='testId' placeholder='Enter your description here...' />
		)

		expect(screen.getByLabelText('Description')).toBeInTheDocument()
		expect(screen.getByPlaceholderText('Enter your description here...')).toBeInTheDocument()
	})

	it('should display an error message when the error prop is provided', () => {
		render(<TextArea name='testId' label='Description' error='Description is required.' />)

		expect(screen.getByText('Description is required.')).toBeInTheDocument()
		expect(screen.getByLabelText('Description')).toHaveClass('border-red-500')
	})

	it('should allow text input', async () => {
		const user = userEvent.setup()
		render(
			<TextArea name='testId' label='Description' placeholder='Enter your description here...' />
		)

		const textarea = screen.getByLabelText('Description')
		await user.type(textarea, 'This is a test.')

		expect(textarea).toHaveValue('This is a test.')
	})

	it('should be disabled when the disabled prop is set', () => {
		render(<TextArea name='testId' label='Description' disabled />)

		const textarea = screen.getByLabelText('Description')
		expect(textarea).toBeDisabled()
	})

	it('should have the correct number of rows when the rows prop is provided', () => {
		render(<TextArea name='testId' label='Description' rows={5} />)

		const textarea = screen.getByLabelText('Description')
		expect(textarea).toHaveAttribute('rows', '5')
	})
})
