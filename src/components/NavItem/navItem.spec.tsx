import { render, screen, fireEvent } from '@testing-library/react'
import NavItemLink from './'

jest.mock('react-icons/fa', () => ({
	FaHome: () => <svg data-testid='nav-item-icon' />,
}))

describe('NavItemLink', () => {
	const mockOnClick = jest.fn()

	const defaultProps = {
		href: '/home',
		icon: jest.requireMock('react-icons/fa').FaHome,
		label: 'Home',
		onClick: mockOnClick,
		active: false,
	}

	it('should render correctly with all props', () => {
		render(<NavItemLink {...defaultProps} />)

		expect(screen.getByText('Home')).toBeInTheDocument()

		const link = screen.getByRole('link')
		expect(link).toHaveAttribute('href', '/home')

		const icon = screen.getByTestId('nav-item-icon')
		expect(icon).toBeInTheDocument()
	})

	it('should apply active styles when active is true', () => {
		render(<NavItemLink {...defaultProps} active={true} />)

		const link = screen.getByRole('link')
		expect(link).toHaveClass('bg-gray-700 text-white')
	})

	it('should apply default styles when active is false', () => {
		render(<NavItemLink {...defaultProps} active={false} />)

		const link = screen.getByRole('link')
		expect(link).toHaveClass('text-gray-300')
		expect(link).not.toHaveClass('bg-gray-700 text-white')
	})

	it('should call onClick when the link is clicked', () => {
		render(<NavItemLink {...defaultProps} />)

		const link = screen.getByRole('link')
		fireEvent.click(link)

		expect(mockOnClick).toHaveBeenCalledTimes(1)
	})
})
