import { render, screen, fireEvent } from '@testing-library/react'
import Input from './'
import { InputProps } from './types'

describe('Input Component', () => {
	const renderInput = (props?: Partial<InputProps>) => {
		render(<Input label='Name' name='name' placeholder='Enter your name' {...props} />)
	}

	it('should render the input with a label', () => {
		renderInput()

		expect(screen.getByLabelText('Name')).toBeInTheDocument()
		expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
	})

	it('should render the error message when error is provided', () => {
		const errorMessage = 'This field is required'
		renderInput({ error: errorMessage })

		expect(screen.getByText(errorMessage)).toBeInTheDocument()
		expect(screen.getByRole('alert')).toHaveTextContent(errorMessage)
	})

	it('should apply error styles when error is provided', () => {
		const errorMessage = 'This field is required'
		renderInput({ error: errorMessage })

		const inputElement = screen.getByPlaceholderText('Enter your name')
		expect(inputElement).toHaveClass('border-red-500')
	})

	it('should not display an error message when error is not provided', () => {
		renderInput()

		expect(screen.queryByRole('alert')).not.toBeInTheDocument()
	})

	it('should call onChange when the input value changes', () => {
		const handleChange = jest.fn()
		renderInput({ onChange: handleChange })

		const inputElement = screen.getByPlaceholderText('Enter your name')
		fireEvent.change(inputElement, { target: { value: 'John Doe' } })

		expect(handleChange).toHaveBeenCalledTimes(1)
		expect((inputElement as HTMLInputElement).value).toBe('John Doe')
	})

	it('should have the correct default styles when no error is provided', () => {
		renderInput()

		const inputElement = screen.getByPlaceholderText('Enter your name')
		expect(inputElement).toHaveClass('border-gray-300')
		expect(inputElement).not.toHaveClass('border-red-500')
	})
})
