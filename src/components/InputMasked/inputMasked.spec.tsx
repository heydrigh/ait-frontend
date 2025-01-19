import { render, screen, fireEvent } from '@testing-library/react'
import MaskedInput from './'
import { IMaskInput } from 'react-imask'

describe('MaskedInput Component', () => {
	const onAcceptMock = jest.fn()

	const defaultProps = {
		name: 'masked-input',
		label: 'Masked Input',
		mask: '000.000.000-00',
		placeholder: 'Digite o CPF',
		onAccept: onAcceptMock,
	}

	it('should render the masked input with a label', () => {
		render(<MaskedInput {...defaultProps} />)

		expect(screen.getByLabelText('Masked Input')).toBeInTheDocument()

		expect(screen.getByPlaceholderText('Digite o CPF')).toBeInTheDocument()
	})

	it('should display an error message when error prop is provided', () => {
		const errorMessage = 'Campo obrigatório'
		render(<MaskedInput {...defaultProps} error={errorMessage} />)

		expect(screen.getByText(errorMessage)).toBeInTheDocument()
		expect(screen.getByRole('alert')).toHaveTextContent(errorMessage)
	})

	it('should apply correct classes when there is an error', () => {
		const errorMessage = 'Campo obrigatório'
		render(<MaskedInput {...defaultProps} error={errorMessage} />)

		const input = screen.getByPlaceholderText('Digite o CPF')
		expect(input).toHaveClass('border-red-500 focus:ring-red-500')
	})

	it('should not show error message when error prop is not provided', () => {
		render(<MaskedInput {...defaultProps} />)

		expect(screen.queryByRole('alert')).not.toBeInTheDocument()
	})
})
