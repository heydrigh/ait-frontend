import { render, screen, fireEvent } from '@testing-library/react'
import Button from './'

jest.mock('../Loader', () => ({
	__esModule: true,
	default: () => <div data-testid='loader' role='status' />,
}))

describe('Button', () => {
	it('should render the button with the correct variant', () => {
		render(<Button variant='primary'>Primary Button</Button>)
		const button = screen.getByRole('button', { name: /primary button/i })
		expect(button).toHaveClass('bg-blue-500 text-white hover:bg-blue-600')
	})

	it('should render the loader when loading is true', () => {
		render(<Button loading={true}>Loading...</Button>)

		expect(screen.getByTestId('loader')).toBeInTheDocument()

		expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
	})

	it('should render the children when loading is false', () => {
		render(<Button loading={false}>Primary Button</Button>)

		expect(screen.getByText('Primary Button')).toBeInTheDocument()

		expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
	})

	it('should disable the button when loading is true', () => {
		render(<Button loading={true}>Primary Button</Button>)
		const button = screen.getByRole('button')
		expect(button).toBeDisabled()
	})

	it('should call the onClick handler when clicked', () => {
		const handleClick = jest.fn()
		render(<Button onClick={handleClick}>Clickable Button</Button>)
		const button = screen.getByRole('button', { name: /clickable button/i })
		fireEvent.click(button)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('should apply the outlined variant styles', () => {
		render(<Button variant='outlined'>Outlined Button</Button>)
		const button = screen.getByRole('button', { name: /outlined button/i })
		expect(button).toHaveClass(
			'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100'
		)
	})

	it('should be disabled when the disabled prop is true', () => {
		render(<Button disabled={true}>Disabled Button</Button>)
		const button = screen.getByRole('button', { name: /disabled button/i })
		expect(button).toBeDisabled()
	})
})
